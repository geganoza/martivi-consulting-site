"use client";

import Image from "next/image";

type Row = {
  src: string;
  textFirst: boolean;
  alt: string;
};

const rows: Row[] = [
  { src: "/images/marketing banner.png", textFirst: true, alt: "Marketing" },
  { src: "/images/sales banner.png", textFirst: false, alt: "Sales" },
  { src: "/images/bd banner.png", textFirst: true, alt: "BD" },
];

export default function DiagonalBanners() {
  return (
    <section className="mx-auto mt-[80px] flex w-full max-w-[1728px] flex-col gap-[80px] px-[100px]">
      {rows.map(({ src, textFirst, alt }) => (
        <div key={alt} className="flex flex-wrap justify-between gap-[20px]">
          {/* text block */}
          {textFirst && (
            <div className="flex h-[754px] w-[754px] items-center justify-center bg-[#F3EFEF]">
              <h2 className="text-center text-[48px] font-normal leading-tight">
                {alt.toUpperCase()}
                <br />
                HIGHLIGHTS
              </h2>
            </div>
          )}

          {/* image block */}
          <div className="relative h-[754px] w-[754px] overflow-hidden rounded-[50px]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="754px"
              priority
            />
          </div>

          {/* text block on the right when textFirst === false */}
          {!textFirst && (
            <div className="flex h-[754px] w-[754px] items-center justify-center bg-[#F3EFEF]">
              <h2 className="text-center text-[48px] font-normal leading-tight">
                {alt.toUpperCase()}
                <br />
                HIGHLIGHTS
              </h2>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
