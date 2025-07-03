"use client";

export default function Banner() {
  return (
    <section
      className="mx-auto flex h-[600px] w-full max-w-[1728px] items-center justify-center
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/main banner.png')",
      }}
    >
      <h1 className="text-center text-[72px] leading-[1] font-semibold text-white">
        MAKE SUCCESS SIMPLE AGAIN
      </h1>
    </section>
  );
}
