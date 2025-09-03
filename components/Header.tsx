"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="section-wrap flex items-center justify-center resp-px py-6 sm:py-8">
      <Image
        src="/images/martivi-consulting-logo.png"
        alt="MyLogo"
        width={160}
        height={80}
        className="sm:w-[240px] sm:h-[47px]"
        priority
      />

      <nav className="ml-auto flex items-center gap-2 sm:gap-4 text-sm">
        <Link
          href="/"
          className="rounded px-3 py-1 text-sm underline-offset-4 hover:underline"
        >
          ENG
        </Link>
        <span>|</span>
        <Link
          href="/"
          className="rounded px-3 py-1 text-sm underline-offset-4 hover:underline"
        >
          GEO
        </Link>
      </nav>
    </header>
  );
}
