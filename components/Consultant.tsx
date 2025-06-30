"use client";

import Image from "next/image";

export default function Consultant() {
  return (
    <section className="mx-auto mt-[80px] w-full max-w-[1728px] px-[100px]">
      <div className="flex flex-wrap justify-between gap-[20px]">
        {/* left: consultant photo */}
        <div className="relative h-[754px] w-[754px] overflow-hidden rounded-[50px]">
          <Image
            src="/images/lead consultant photo.png"
            alt="Lead consultant"
            fill
            className="object-cover object-center"
            sizes="754px"
            priority
          />
        </div>

        {/* right: highlight text */}
        <div className="flex h-[754px] w-[754px] items-center justify-center bg-[#F3EFEF]">
          <h2 className="text-center text-[48px] font-normal leading-tight text-black">
            LEAD
            <br />
            CONSULTANT&nbsp;HIGHLIGHTS
          </h2>
        </div>
      </div>
    </section>
  );
}
