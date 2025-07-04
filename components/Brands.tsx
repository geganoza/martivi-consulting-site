"use client";

import Image from "next/image";

const brandDisplayNames = [
  "Alcorium",
  "Thermorum",
  "Bebias",
  "Truedata",
  "Sun Motors",
  "Heineken",
  "Henkel",
  "Hennessy",
  "Microsoft",
  "Dell Technologies",
  "Cisco",
  "ESET",
  "Autodesk",
  "Oreo",
  "Alpen Gold",
  "Dom Perignon",
  "Veuve Clicquot",
  "Whisky House",
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

const logos = brandDisplayNames.map((name) => {
  const slug = slugify(name);
  return {
    src: `/images/brands/${slug}-logo.png`,
    alt: `${name} logo`,
  };
});

export default function Brands() {
  return (
    <section className="mx-auto mt-[80px] w-full max-w-[1728px] px-[100px]">
      <div className="grid grid-cols-6 gap-[20px]">
        {logos.map(({ src, alt }) => (
          <div
            key={alt}
            className="relative h-[238px] w-[238px] overflow-hidden rounded-[50px]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="238px"
              className="object-contain object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
