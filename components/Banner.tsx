"use client";

export default function Banner() {
  return (
    <section
      className="mx-auto flex h-[600px] w-full max-w-[1728px] items-center justify-center
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/banner.png')",
      }}
    >
      {/* Optional overlay / heading can go here */}
    </section>
  );
}
