"use client";

import Image from "next/image";

const cards = [
  { src: "/images/marketing-card.png", alt: "MARKETING" },
  { src: "/images/sales-card.png", alt: "SALES" },
  { src: "/images/business-development-card.png", alt: "BUSINESS DEVELOPMENT" },
];

export default function Services() {
  return (
    <section className="mx-auto mt-[80px] w-full max-w-[1728px] px-[100px]">
      <div className="flex flex-wrap justify-between gap-[20px]">
        {cards.map(({ src, alt }) => (
          <div
            key={alt}
            className="relative h-[496px] w-[496px] overflow-hidden rounded-[50px]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1728px) 33vw, 496px"
              priority
            />

            <span className="absolute inset-0 flex items-center justify-center text-center text-[48px] leading-[1] font-semibold text-white">
              {alt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
