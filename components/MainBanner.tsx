"use client";

export default function MainBanner() {
  return (
    <section
      className="section-wrap resp-px flex h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/main-banner.png')",
      }}
    >
      <h1 className="text-center text-[58px] sm:text-[72px] leading-[1] font-semibold text-white ">
        MAKE SUCCESS SIMPLE AGAIN
      </h1>
    </section>
  );
}
