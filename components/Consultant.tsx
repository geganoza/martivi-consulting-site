"use client";

import Image from "next/image";

export default function Consultant() {
  return (
    <section className="mx-auto mt-[80px] w-full max-w-[1728px] px-[100px]">
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="relative h-[754px] w-[754px] overflow-hidden rounded-[50px]">
          <Image
            src="/images/lead-consultant.png"
            alt="Lead consultant"
            fill
            className="object-cover object-center"
            sizes="754px"
            priority
          />
        </div>

        <div className="flex h-[754px] w-[754px] items-center justify-center">
          <div className="flex flex-col items-center text-center text-[60px] leading-tight text-[#12324C] space-y-10">
            <p className="font-extrabold">LEAD CONSULTANT</p>

            <p>
              Market&nbsp;Development
              <br />
              Manager&nbsp;at&nbsp;
              <span className="font-extrabold">HEINEKEN</span>
            </p>

            <p>
              Regional&nbsp;Sales
              <br />
              Manager&nbsp;at&nbsp;
              <span className="font-extrabold">HENKEL</span>
            </p>

            <p>
              Brand&nbsp;Manager&nbsp;at
              <br />
              <span className="font-extrabold">Moët&nbsp;Hennessy</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
