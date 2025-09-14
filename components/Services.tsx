"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";
import { useI18n } from "@/locales/client";

export default function Services() {
  const t = useI18n();

  const cards = [
    { src: "/images/marketing-card.png", key: "services.marketing" as const },
    { src: "/images/sales-card.png", key: "services.sales" as const },
    {
      src: "/images/business-development-card.png",
      key: "services.bd" as const,
    },
  ];

  return (
    <section className="section-wrap resp-px mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {cards.map(({ src, key }) => (
          <FadeInUp
            key={key}
            className="relative aspect-square w-full overflow-hidden rounded-[50px] md:max-w-[496px]"
          >
            <Image
              src={src}
              alt={t(key)}
              fill
              sizes="(max-width: 767px) 100vw,
                     (max-width: 1728px) 33vw,
                     496px"
              className="object-cover object-center"
              priority
            />

            <span
              className="absolute inset-0 flex items-center justify-center text-center
                             text-[32px] sm:text-[56px] md:text-[24px] lg:text-[35px] xl:text-[46px] 2xl:text-[48px] leading-[1] font-semibold text-white"
            >
              {t(key)}
            </span>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
