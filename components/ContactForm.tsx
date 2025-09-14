"use client";

import { useState } from "react";
import FadeInUp from "./FadeInUp";
import { useI18n } from "@/locales/client";

export default function ContactForm() {
  const t = useI18n();
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
              {t("contactForm.fullName")}
            </span>
            <input
              required
              placeholder={t("contactForm.phName")}
              className="h-[50px] sm:h-[150px]  w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>

          {/* email */}
          <label className="flex w-full max-w-full flex-col xl:max-w-[300px]">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              {t("contactForm.email")}
            </span>
            <input
              required
              type="email"
              placeholder={t("contactForm.phEmail")}
              className="h-[50px] sm:h-[150px]  w-full rounded-[20px] border px-3 outline-none focus:ring-2 focus:ring-[#578096]/40"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>

          {/* message */}
          <label className="flex w-full flex-col xl:flex-grow">
            <span className="mb-1 font-medium text-[#12324C] text-lg text-center">
              {t("contactForm.message")}{" "}
            </span>
            <input
              required
              placeholder={t("contactForm.phMessage")}
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
            {t("contactForm.submit")}
          </button>
        </form>
      </section>
    </FadeInUp>
  );
}
