"use client";

import FadeInUp from "./FadeInUp";
import { useI18n } from "@/locales/client";

export default function MainBanner() {
  const t = useI18n() as (key: string) => string;

  return (
    <FadeInUp className="w-full">
      <section
        className="section-wrap resp-px flex h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/main-banner.png')",
        }}
      >
        <h1 className="text-center text-[58px] sm:text-[72px] leading-[1] font-semibold text-white ">
          {t("banner.slogan")}
        </h1>
      </section>
    </FadeInUp>
  );
}
