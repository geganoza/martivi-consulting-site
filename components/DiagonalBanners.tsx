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
    src: "/images/marketing-banner.png",
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
    src: "/images/sales-banner.png",
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
    src: "/images/business-development-banner.png",
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
    <section className="section-wrap resp-px mt-[80px] flex flex-col gap-[80px]">
      {rows.map(({ src, textFirst, title, bullets }) => (
        <div
          key={title}
          className="flex flex-col md:flex-row gap-[20px] justify-between"
        >
          {textFirst && <TextBlock title={title} bullets={bullets} />}

          <div className="relative aspect-square w-full md:w-1/2 2xl:h-[754px] 2xl:w-[754px] overflow-hidden rounded-[50px]">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw,
                     (max-width: 1728px) 50vw,
                     754px"
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
    <div className="flex w-full md:w-1/2 items-center justify-center 2xl:h-[754px] 2xl:w-[754px]">
      <div className="w-full px-6 sm:px-10 text-[#12324C]">
        <h2 className="mb-6 text-center text-[36px] md:text-[40px] xl:text-[48px]  font-extrabold leading-tight">
          {title}
        </h2>

        <ol className="mx-auto max-w-[520px] list-decimal list-inside space-y-3 text-left text-[18px] md:text-[20px] xl:text-[24px] leading-snug">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
