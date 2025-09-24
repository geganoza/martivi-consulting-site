import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

type Message = { role: "system" | "user" | "assistant"; content: string };
type Product = {
  id: string;
  name: string;
  price: number;
  currency?: string;
  stock: number;
  availability?: string;
  category?: string;
  attributes?: Record<string, any>;
};

async function loadProducts(): Promise<Product[]> {
  const file = path.join(process.cwd(), "data", "products.json");
  const txt = await fs.readFile(file, "utf8");
  return JSON.parse(txt) as Product[];
}

function detectGeorgian(text: string) {
  return /[\u10A0-\u10FF]/.test(text);
}

function fmtProductShort(p: Product, isKa: boolean) {
  const price = `${p.price}${p.currency ? " " + p.currency : ""}`;
  const avail = p.stock > 0 ? (isKa ? " наличია" : "in stock") : (isKa ? " არ არის наличი" : "out of stock");
  // For Georgian we keep simple translations inline
  if (isKa) {
    return `${p.name} (კოდი: ${p.id}) — ფასი: ${price}, რაოდენობა: ${p.stock}, კატეგორია: ${p.category || "-"}`;
  }
  return `${p.name} (id: ${p.id}) — price: ${price}, stock: ${p.stock}, category: ${p.category || "-"}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages ?? [];
    const lead = body.lead;
    const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
    const isKa = detectGeorgian(lastUser);

    if (!lastUser) {
      const reply = isKa ? "როგორ დაგეხმაროთ?" : "How can I help you?";
      return NextResponse.json({ reply });
    }

    const products = await loadProducts();
    const q = lastUser.toLowerCase();

    // 1) If user mentioned an explicit product id like P1001, return that product details
    const idMatch = q.match(/(p\d{3,6})/i);
    if (idMatch) {
      const id = idMatch[1].toUpperCase();
      const found = products.find((p) => p.id.toUpperCase() === id);
      if (found) {
        const reply = isKa
          ? `მიპასუხე: ${found.name} (კოდი ${found.id})\nფასი: ${found.price} ${found.currency || ""}\nზედმეტობა: ${found.stock} ერთეული\nმახასიათებლები: ${Object.entries(found.attributes || {})
              .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(",") : v}`)
              .join(", ")}`
          : `Here you go: ${found.name} (id ${found.id})\nPrice: ${found.price} ${found.currency || ""}\nStock: ${found.stock} unit(s)\nAttributes: ${Object.entries(found.attributes || {})
              .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(",") : v}`)
              .join(", ")}`;
        return NextResponse.json({ reply, matches: [found] });
      } else {
        const reply = isKa ? `პროდუქტი ${id} ვერ მოიძებნა.` : `Product ${id} not found.`;
        return NextResponse.json({ reply, matches: [] });
      }
    }

    // 2) Heuristic intents: price / availability keywords
    const asksPrice = /\b(price|ფასი|how much|what(?:'s| is) the price)\b/i.test(lastUser);
    const asksAvailability = /\b(stock|availability|in stock|out of stock|მასაჟი|არ არის|ნათქვამი|დღევანდელ)\b/i.test(lastUser) || /\b(განკარგვა|აღჭურვა|ქაღალდი)\b/i.test(lastUser);

    // 3) Search products by name/category/attributes fuzzy
    const terms = q.split(/\s+/).filter(Boolean);
    const results = products.filter((p) => {
      const hay = `${p.name} ${p.category || ""} ${p.id} ${JSON.stringify(p.attributes || {})}`.toLowerCase();
      // require at least one term match
      return terms.some((t) => hay.includes(t));
    });

    // If no results by terms, fallback to broader name contains
    const fallback = products.filter((p) => p.name.toLowerCase().includes(q) || (p.category || "").toLowerCase().includes(q));
    const finalMatches = results.length ? results : fallback;

    if (finalMatches.length === 0) {
      // As a last resort, check if message contains numeric ranges (e.g., "under 100")
      // and return top items
      const reply = isKa
        ? "ვერც ერთ პროდუქტი ვერ მოიძებნა თქვენი აღწერილობით. სცადეთ სხვა სიტყვით ან გამოიყენეთ პროდუქტის კოდი."
        : "No products matched your query. Try different keywords or provide a product id.";
      return NextResponse.json({ reply, matches: [] });
    }

    // Build a friendly reply summarizing top 3 matches
    const top = finalMatches.slice(0, 3);
    const summaries = top.map((p) => fmtProductShort(p, isKa));
    let reply = "";

    if (asksPrice && top.length === 1) {
      const p = top[0];
      reply = isKa
        ? `${p.name} (კოდი ${p.id}) ფასი: ${p.price} ${p.currency || ""}. სტატიები: ${p.stock}`
        : `${p.name} (id ${p.id}) price: ${p.price} ${p.currency || ""}. Stock: ${p.stock}`;
    } else if (asksAvailability && top.length === 1) {
      const p = top[0];
      reply = isKa
        ? `${p.name} (კოდი ${p.id}) ამჟამად ${p.stock > 0 ? `ახალი რაოდენობა: ${p.stock}` : "არ არის მარაგში"}.`
        : `${p.name} (id ${p.id}) is currently ${p.stock > 0 ? `in stock (${p.stock})` : "out of stock"}.`;
    } else {
      // general listing
      if (isKa) {
        reply = `პასუხი მივიღეთ შემდეგი პროდუქციიდან:\n\n${summaries.join("\n\n")}\n\nთუ გჭირდებათ კონკრეტული ფასი ან მარაგი, მოდით მომწერეთ კონკრეტული პროდუქტის კოდი ან ჰკითხეთ \"ფასი\" ან \"მარაგი\".`;
      } else {
        reply = `I found the following products matching your query:\n\n${summaries.join("\n\n")}\n\nIf you need price or availability for a specific item, reply with the product id or ask "price" / "stock".`;
      }
    }

    return NextResponse.json({ reply, matches: finalMatches });
  } catch (err: any) {
    console.error("POST /api/chat error:", err);
    return NextResponse.json({ error: err?.message ?? "unknown" }, { status: 500 });
  }
}
