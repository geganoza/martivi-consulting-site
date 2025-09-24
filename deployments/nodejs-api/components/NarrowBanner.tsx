"use client";

import FadeInUp from "./FadeInUp";

interface NarrowBannerProps {
  src: string;
  label: string;
  alt?: string;
}

export default function NarrowBanner({
  src,
  label,
  alt = "",
}: NarrowBannerProps) {
  return (
    <FadeInUp className="w-full">
      <section
        className="section-wrap resp-px relative mt-[80px] flex h-[300px] items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${src}')` }}
        aria-label={alt}
      >
        <h2 className="text-[42px] leading-[1] font-normal text-white sm:text-[72px]">
          {label}
        </h2>
      </section>
    </FadeInUp>
  );
}
