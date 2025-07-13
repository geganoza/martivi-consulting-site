"use client";

import Image from "next/image";

export default function Consultant() {
  return (
    <section className="section-wrap resp-px mt-[80px]">
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-[50px] 2xl:h-[754px] 2xl:w-[754px]">
          <Image
            src="/images/lead-consultant.png"
            alt="Lead consultant"
            fill
            className="object-cover object-center"
            sizes="754px"
            priority
          />
        </div>

        <div className="flex w-full items-center justify-center 2xl:h-[754px] 2xl:w-[754px]">
          <div className="flex flex-col items-center text-center text-[#12324C] space-y-10 text-[25px] leading-tight sm:text-[60px]">
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
