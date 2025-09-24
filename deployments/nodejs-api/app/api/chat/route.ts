export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { z } from "zod";

/* ========= ENV ========= */
const OPENAI_API_KEY = process.env.OPENAI_API_KEY ?? "";
const CALENDLY =
  process.env.NEXT_PUBLIC_CALENDLY_LINK ??
  "https://calendly.com/martividigital/30min";
const WEBHOOK = process.env.LEAD_WEBHOOK_URL ?? "";

const ALLOW_ORIGINS = (process.env.CORS_ORIGIN ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/* ========= SCHEMAS ========= */
const MessageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string(),
});

const LeadSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  company: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  country: z.string().optional(),
});

const BodySchema = z.object({
  messages: z.array(MessageSchema).default([]),
  lead: LeadSchema.optional(),
});

type Lead = z.infer<typeof LeadSchema>;

/* ========= OPENAI ========= */
const client = new OpenAI({ apiKey: OPENAI_API_KEY });

/* ========= CORS ========= */
function corsHeaders(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const allow =
    ALLOW_ORIGINS.length === 0
      ? "*"
      : ALLOW_ORIGINS.includes(origin)
      ? origin
      : ALLOW_ORIGINS[0];

  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function json(
  req: NextRequest,
  body: unknown,
  init?: number | ResponseInit
): NextResponse {
  const base: ResponseInit =
    typeof init === "number" ? { status: init } : init ?? {};
  return NextResponse.json(body, {
    ...base,
    headers: { ...(base.headers || {}), ...corsHeaders(req) },
  });
}

/* ========= PROMPT ========= */
const SYSTEM_PROMPT = `
You are MARTIVI CONSULTING’s assistant.

Be concise, expert, and proactive. Ask at most 2–3 clarifying questions before proposing next steps.
Support English and Georgian. Detect the user's language automatically.

When appropriate, suggest:
- a free 20-min discovery call (${CALENDLY})
- or leaving contact details (Full name, Email, Company (optional), Budget range, Timeline, Country).

NEVER paste Calendly links in replies (the UI has a button).
If the user shows buying intent, collect lead fields naturally.
If the user writes in Georgian, answer in Georgian; otherwise use English.
`;

/* ========= ROUTES ========= */
export async function GET(req: NextRequest) {
  return json(req, { ok: true });
}

export async function OPTIONS(req: NextRequest) {
  return new Response(null, { status: 204, headers: corsHeaders(req) });
}

export async function POST(req: NextRequest) {
  try {
    if (!OPENAI_API_KEY) return json(req, { error: "OPENAI_API_KEY missing" }, 500);

    const parsed = BodySchema.parse(await req.json());
    const trimmed = parsed.messages.slice(-12);

    const messages: ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...trimmed.map(msg => ({
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content
      })),
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      messages,
    });

    const raw = completion.choices[0]?.message?.content ?? "";
    const cleaned = raw
      .replace(/\[.*?\]\(https?:\/\/calendly\.com[^\)]*\)/gi, "")
      .replace(/https?:\/\/calendly\.com[^\s)]+/gi, "")
      .trim();

    // lead signal: email in reply OR provided by widget form
    const emailInReply =
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(raw) ||
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(
        trimmed.map((m) => m.content).join(" ")
      );

    const maybeLead = emailInReply || Boolean(parsed.lead?.email);

    if (maybeLead && WEBHOOK) {
      const payload: {
        source: string;
        lead: Lead | {};
        rawReply: string;
        when: string;
      } = {
        source: "chatbot",
        lead: parsed.lead ?? {},
        rawReply: raw,
        when: new Date().toISOString(),
      };

      fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((e) => console.error("Lead webhook error:", e));
    }

    return json(req, { reply: cleaned });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error("Chat error:", msg);
    return json(req, { error: "bad_request" }, 400);
  }
}