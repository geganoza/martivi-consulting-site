"use client";

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
    <section
      className="relative mx-auto mt-[80px] flex h-[300px] w-full max-w-[1728px]
                 items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${src}')` }}
      aria-label={alt}
    >
      <h2 className="text-[72px] leading-[1] font-normal text-white">
        {label}
      </h2>
    </section>
  );
}
