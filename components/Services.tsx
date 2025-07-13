"use client";

import Image from "next/image";

const cards = [
  { src: "/images/marketing-card.png", alt: "MARKETING" },
  { src: "/images/sales-card.png", alt: "SALES" },
  { src: "/images/business-development-card.png", alt: "BUSINESS DEVELOPMENT" },
];

export default function Services() {
  return (
    <section className="section-wrap resp-px mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {cards.map(({ src, alt }) => (
          <div
            key={alt}
            className="relative aspect-square w-full overflow-hidden rounded-[50px] md:max-w-[496px]"
          >
            <Image
              src={src}
              alt={alt}
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
              {alt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
