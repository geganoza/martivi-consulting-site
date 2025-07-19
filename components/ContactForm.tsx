"use client";

import { useState } from "react";
import FadeInUp from "./FadeInUp";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <FadeInUp className="w-full">
      <section className="section-wrap resp-px items-center justify-center mt-[80px] xl:h-[500px] flex">
        <form
          action="https://formsubmit.co/leads@martiviconsulting.com"
          method="POST"
          className="flex flex-col xl:flex-row w-full items-start gap-[20px]"
        >
          {/* name */}
          <label className="flex w-full max-w-full flex-col xl:max-w-[300px]">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              Full&nbsp;Name
            </span>
            <input
              required
              placeholder="Your Name"
              className="h-[50px] sm:h-[150px]  w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>

          {/* email */}
          <label className="flex w-full max-w-full flex-col xl:max-w-[300px]">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              Email
            </span>
            <input
              required
              type="email"
              placeholder="example@email.com"
              className="h-[50px] sm:h-[150px]  w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          {/* message */}
          <label className="flex w-full flex-col xl:flex-grow">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              Message
            </span>
            <input
              required
              placeholder="Enter Message..."
              className="h-[50px] sm:h-[150px]  w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          {/* button */}
          <button
            type="submit"
            className="mt-[33px] w-full h-[50px] sm:h-[150px] xl:w-[150px] flex-shrink-0 rounded-[20px] bg-[#1390ac] text-lg font-semibold text-white hover:bg-[#1390ac]/90"
          >
            Send
          </button>
        </form>
      </section>
    </FadeInUp>
  );
}
