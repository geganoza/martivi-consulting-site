"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="mx-auto flex h-[500px] w-full max-w-[1728px] items-center justify-center px-[80px]">
      <form
        action="https://formsubmit.co/leads@martiviconsulting.com"
        method="POST"
        className="flex w-full max-w-[1728px] items-start gap-[20px]"
      >
        {/* name */}
        <label className="flex w-full max-w-[300px] flex-col">
          <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
            Full&nbsp;Name
          </span>
          <input
            required
            placeholder="Your Name"
            className="h-[150px] w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        {/* email */}
        <label className="flex w-full max-w-[300px] flex-col">
          <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
            Email
          </span>
          <input
            required
            type="email"
            placeholder="example@email.com"
            className="h-[150px] w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>

        {/* message */}
        <label className="flex grow flex-col">
          <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
            Message
          </span>
          <input
            required
            placeholder="Enter Message..."
            className="h-[150px] w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>

        {/* button */}
        <button
          type="submit"
          className="mt-[33px] h-[150px] w-[150px] flex-shrink-0 rounded-[20px] bg-[#1390ac] text-lg font-semibold text-white hover:bg-[#1390ac]/90"
        >
          Send
        </button>
      </form>
    </section>
  );
}
