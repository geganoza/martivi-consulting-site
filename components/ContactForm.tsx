"use client";

import { useState } from "react";
import { useI18n } from "@/locales/client";

export default function ContactForm() {
  const t = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [msgFocused, setMsgFocused] = useState(false);
  const msgEmpty = form.message.trim() === "";

  return (
    <div className="w-full">
      <section className="section-wrap resp-px items-center justify-center mt-[80px] xl:h-[500px] flex">
        <form
          action="send.php"
          method="POST"
          className="flex flex-col xl:flex-row w-full items-start gap-[20px]"
        >
          {/* Name */}
          <label className="flex w-full max-w-full flex-col xl:max-w-[300px]">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              {t("contactForm.fullName")}
            </span>
            <input
              type="text"
              name="name"
              required
              placeholder={t("contactForm.phName")}
              className="h-[50px] sm:h-[150px] w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>

          {/* Email */}
          <label className="flex w-full max-w-full flex-col xl:max-w-[300px]">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              {t("contactForm.email")}
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="h-[50px] sm:h-[150px] w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          {/* Message (with centered overlay placeholder) */}
          <label className="flex w-full flex-col xl:flex-grow">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              {t("contactForm.message")}
            </span>

            <div className="relative">
              {/* Overlay placeholder: centered, shown only when empty & not focused */}
              {msgEmpty && !msgFocused && (
                <span
                  className="pointer-events-none absolute inset-0 flex items-center justify-start px-3 text-[#9AA9B7]"
                  style={{
                    // perfectly center vertically for both heights
                    height: "100%",
                  }}
                >
                  Enter message...
                </span>
              )}

              <textarea
                name="message"
                required
                aria-label="Message"
                // same height as the other boxes; normal multi-line typing
                className="h-[50px] sm:h-[150px] w-full rounded-[20px] border px-3 py-3 outline-none focus:ring-2 focus:ring-[#578096]/40 resize-none"
                value={form.message}
                onFocus={() => setMsgFocused(true)}
                onBlur={() => setMsgFocused(false)}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="mt-[33px] w-full h-[50px] sm:h-[150px] xl:w-[150px] flex-shrink-0 rounded-[20px] bg-[#1390ac] text-lg font-semibold text-white hover:bg-[#1390ac]/90"
          >
            {t("contactForm.submit")}
          </button>
        </form>
      </section>
    </div>
  );
}