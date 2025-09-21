# MARTIVI Chatbot — Prep Pack (v1)

This pack gives you a **paste-and-go** starting point for a lead‑capturing chatbot on your Next.js site.

## What’s inside
- `app/api/chat/route.ts` — Minimal API route using OpenAI (gpt-4o-mini by default).
- `components/ChatWidget.tsx` — Floating button + minimal chat panel (client component).
- `content/services.example.md` — Template (fill with your services, price ranges, timelines).
- `content/faqs.example.md` — Template (10–20 Q&As; payments, process, deliverables).
- `lib/types.ts` — Shared types for messages and lead payload.
- `lib/extractLead.ts` — Tiny helper to pull name/email if users type them directly.
- `system-prompt.txt` — Your assistant brain. Edit tone, policies, and links.
- `php/lead_webhook.php` — PHPMailer webhook to email you new leads on your cPanel host.
- `supabase.sql` — Optional analytics table for logging (questions, timestamps, lang).

## 10‑Minute Prep Checklist
1. Duplicate `.env.local.example` → `.env.local` and set secrets.
2. Paste your **Calendly** link in `system-prompt.txt` and widget button where noted.
3. Fill `content/services.example.md` and `content/faqs.example.md` then rename to `services.md` and `faqs.md`.
4. Run: `npm i openai` (and `npm i -D @types/node` if needed).
5. Add `<ChatWidget />` to your site layout, e.g. in `app/layout.tsx` or a page where you want it.
6. Upload `php/lead_webhook.php` to your cPanel hosting (same SMTP you already use for contact.php).
7. In `components/ChatWidget.tsx`, set `LEAD_WEBHOOK_URL` to your live PHP path.
8. Test locally with `npm run dev` → send a test message and a sample lead.
9. Deploy to Vercel (for the Next.js app). Keep the **PHP lead webhook** on your existing cPanel host.
10. (Optional) Create Supabase table with `supabase.sql`, add URL/KEY to `.env.local`, and toggle logging in `route.ts`.

## Notes
- The widget responds in **English or Georgian** (auto‑detect). 
- It **asks for lead details** only when there’s purchase intent.
- It **offers your Calendly** link for a free 20‑min discovery call.
- The API route trims history to last 12 messages, temperature=0.4 for consistent answers.
- Replace placeholders marked `TODO:`.
