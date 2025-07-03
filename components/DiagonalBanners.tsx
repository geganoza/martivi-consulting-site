"use client";

import Image from "next/image";

type Row = {
  src: string;
  textFirst: boolean;
  title: string;
  bullets: string[];
};

const rows: Row[] = [
  {
    src: "/images/marketing banner.png",
    textFirst: true,
    title: "Marketing Consulting",
    bullets: [
      "Review your current marketing",
      "Define your audience",
      "Build your brand strategy",
      "Plan your market launch",
      "Create content and messaging",
      "Run digital campaigns",
      "Track and improve performance",
    ],
  },
  {
    src: "/images/sales banner.png",
    textFirst: false,
    title: "Sales Consulting",
    bullets: [
      "Analyze your current sales setup",
      "Build or improve your sales process",
      "Set up and clean your CRM",
      "Generate quality leads",
      "Create better sales pitches",
      "Train your sales team",
      "Measure results and adjust",
    ],
  },
  {
    src: "/images/bd banner.png",
    textFirst: true,
    title: "Business Development Consulting",
    bullets: [
      "Spot growth opportunities",
      "Plan entry into new markets",
      "Study your competition",
      "Build smart partnerships",
      "Shape your business model",
      "Grow key client accounts",
      "Get ready to scale",
    ],
  },
];

export default function DiagonalBanners() {
  return (
    <section className="mx-auto mt-[80px] flex w-full max-w-[1728px] flex-col gap-[80px] px-[100px]">
      {rows.map(({ src, textFirst, title, bullets }) => (
        <div key={title} className="flex flex-wrap justify-between gap-[20px]">
          {textFirst && <TextBlock title={title} bullets={bullets} />}

          <div className="relative h-[754px] w-[754px] overflow-hidden rounded-[50px]">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="754px"
              priority
            />
          </div>

          {!textFirst && <TextBlock title={title} bullets={bullets} />}
        </div>
      ))}
    </section>
  );
}

function TextBlock({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="flex h-[754px] w-[754px] items-center justify-center">
      <div className="text-center text-[#12324C]">
        <h2 className="mb-6 text-[48px] font-extrabold leading-tight">
          {title}
        </h2>

        <ol className="mx-auto max-w-[520px] list-decimal list-inside space-y-3 text-left text-[24px] leading-snug">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
