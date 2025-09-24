"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";
import { useI18n } from "@/locales/client";

export default function Consultant() {
  const tRaw = useI18n();
  // Loosen the typing locally so we can call t("key") without per-key params
  const t = tRaw as unknown as (
    key: string,
    params?: Record<string, unknown>
  ) => any;

  return (
    <section className="section-wrap resp-px mt-[80px]">
      <div className="flex flex-wrap 2xl:flex-nowrap gap-[20px] justify-start">
        <FadeInUp
          key="consultant-photo"
          className="w-full 2xl:basis-[calc(50%-10px)] 2xl:shrink-0"
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-[50px]">
            <Image
              src="/images/lead-consultant.png"
              alt="Lead consultant"
              fill
              className="object-cover object-center"
              sizes="754px"
              priority
            />
          </div>
        </FadeInUp>

        <FadeInUp
          key="consultant-text"
          delay={0.1}
          className="flex w-full 2xl:basis-[calc(50%-10px)] 2xl:shrink-0 items-center justify-center"
        >
          <div className="flex flex-col items-center text-center text-[#12324C] space-y-10 text-[25px] leading-tight sm:text-[55px]">
            <p className="font-extrabold">{t("consultant.title")}</p>

            <p>
              {t("consultant.positionDevelopment")}
              <br />
              {t("consultant.positionManager")}{" "}
              <span className="font-extrabold">{t("consultant.heineken")}</span>
              {t("consultant.in")}
            </p>

            <p>
              {t("consultant.positionSales")}
              <br />
              {t("consultant.positionManager")}{" "}
              <span className="font-extrabold">{t("consultant.henkel")}</span>
              {t("consultant.in")}
            </p>

            <p>
              {t("consultant.positionBrand")}
              <br />
              <span className="font-extrabold">{t("consultant.moet")}</span>
              {t("consultant.in")}
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}