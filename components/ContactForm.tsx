"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="mx-auto mt-[80px] max-w-lg pb-24">
      <form
        action="https://formsubmit.co/leads@martiviconsulting.com"
        method="POST"
        className="space-y-4 rounded-xl border p-6 shadow"
      >
        <label className="block">
          <span className="mb-1 block font-medium">Name</span>
          <input
            required
            className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-black/40"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-1 block font-medium">Email</span>
          <input
            required
            type="email"
            className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-black/40"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-1 block font-medium">Message</span>
          <textarea
            required
            rows={5}
            className="w-full resize-none rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-black/40"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>

        <button
          type="submit"
          className="w-full rounded bg-black px-4 py-2 font-semibold text-white hover:bg-black/80"
        >
          Send
        </button>
      </form>
    </section>
  );
}
