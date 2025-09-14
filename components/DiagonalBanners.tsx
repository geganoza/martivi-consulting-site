"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";
import { useI18n } from "@/locales/client";

type ServiceType = "marketing" | "sales" | "business";

export default function DiagonalBanners() {
  const t = useI18n();

  const rows: Array<{
    src: string;
    textFirst: boolean;
    serviceType: ServiceType;
    bulletKeys: readonly [
      `diagonal.${ServiceType}.bullet1`,
      `diagonal.${ServiceType}.bullet2`,
      `diagonal.${ServiceType}.bullet3`,
      `diagonal.${ServiceType}.bullet4`,
      `diagonal.${ServiceType}.bullet5`,
      `diagonal.${ServiceType}.bullet6`,
      `diagonal.${ServiceType}.bullet7`
    ];
  }> = [
    {
      src: "/images/marketing-banner.png",
      textFirst: true,
      serviceType: "marketing",
      bulletKeys: [
        "diagonal.marketing.bullet1",
        "diagonal.marketing.bullet2",
        "diagonal.marketing.bullet3",
        "diagonal.marketing.bullet4",
        "diagonal.marketing.bullet5",
        "diagonal.marketing.bullet6",
        "diagonal.marketing.bullet7",
      ] as const,
    },
    {
      src: "/images/sales-banner.png",
      textFirst: false,
      serviceType: "sales",
      bulletKeys: [
        "diagonal.sales.bullet1",
        "diagonal.sales.bullet2",
        "diagonal.sales.bullet3",
        "diagonal.sales.bullet4",
        "diagonal.sales.bullet5",
        "diagonal.sales.bullet6",
        "diagonal.sales.bullet7",
      ] as const,
    },
    {
      src: "/images/business-development-banner.png",
      textFirst: true,
      serviceType: "business",
      bulletKeys: [
        "diagonal.business.bullet1",
        "diagonal.business.bullet2",
        "diagonal.business.bullet3",
        "diagonal.business.bullet4",
        "diagonal.business.bullet5",
        "diagonal.business.bullet6",
        "diagonal.business.bullet7",
      ] as const,
    },
  ];

  return (
    <section className="section-wrap resp-px mt-[80px] flex flex-col gap-[80px]">
      {rows.map(({ src, textFirst, serviceType, bulletKeys }) => {
        const title = t(`diagonal.${serviceType}.title` as const);
        const bullets = bulletKeys.map((key) => t(key));

        return (
          <div
            key={serviceType}
            className="flex flex-col md:flex-row gap-[20px] justify-between"
          >
            <FadeInUp
              key={`${serviceType}-text`}
              className={`w-full md:w-1/2 ${
                textFirst ? "md:order-1" : "md:order-2"
              }`}
            >
              <TextBlock title={title} bullets={bullets} />
            </FadeInUp>

            <FadeInUp
              key={`${serviceType}-img`}
              delay={0.1}
              className={`w-full md:w-1/2 ${
                textFirst ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[50px] 2xl:h-[754px] 2xl:w-[754px]">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 767px) 100vw,
                         (max-width: 1728px) 50vw,
                         754px"
                  priority
                />
              </div>
            </FadeInUp>
          </div>
        );
      })}
    </section>
  );
}

function TextBlock({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="flex w-full md:w-1/2 items-center justify-center 2xl:h-[754px] 2xl:w-[754px]">
      <div className="w-full px-6 sm:px-10 text-[#12324C]">
        <h2 className="mb-6 text-center text-[36px] md:text-[40px] xl:text-[48px] font-extrabold leading-tight">
          {title}
        </h2>

        <ol className="mx-auto max-w-[520px] list-decimal list-inside space-y-3 text-left text-[18px] md:text-[20px] xl:text-[24px] leading-snug">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
