"use client";

import Image from "next/image";

const cards = [
  { src: "/images/marketing banner.png", alt: "Marketing" },
  { src: "/images/service banner.png", alt: "Service" },
  { src: "/images/bd banner.png", alt: "Business Development" },
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
          </div>
        ))}
      </div>
    </section>
  );
}
