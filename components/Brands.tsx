// "use client";

// import Image from "next/image";

// const logos = Array.from({ length: 18 }).map((_, i) => ({
//   src: `/images/brand${i + 1}.png`, // e.g. brand1.png … brand18.png
//   alt: `Brand ${i + 1}`,
// }));

// export default function Brands() {
//   return (
//     <section className="mx-auto mt-[80px] w-full max-w-[1728px] px-[100px]">
//       <div className="grid grid-cols-6 gap-[20px]">
//         {logos.map(({ src, alt }) => (
//           <div
//             key={alt}
//             className="relative h-[238px] w-[238px] overflow-hidden rounded-[50px]"
//           >
//             <Image
//               src={src}
//               alt={alt}
//               fill
//               className="object-contain object-center" /* logos keep aspect */
//               sizes="238px"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const logos = Array.from({ length: 18 }, (_, i) => ({
  src: "/images/brand logo.png", // same image for every tile
  alt: `Brand logo ${i + 1}`,
}));

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
              className="object-contain object-center"
              sizes="238px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
