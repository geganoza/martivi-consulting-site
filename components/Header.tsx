"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1728px] items-center justify-center px-6 py-8">
      <Image
        src="/images/martivi consulting logo.png"
        alt="MyLogo"
        width={240}
        height={120}
        priority
      />

      <nav className="ml-auto flex items-center gap-4">
        <Link
          href="/"
          className="rounded px-3 py-1 text-sm underline-offset-4 hover:underline"
        >
          ENG
        </Link>
        <span>|</span>
        <Link
          href="/ka"
          className="rounded px-3 py-1 text-sm underline-offset-4 hover:underline"
        >
          GEO
        </Link>
      </nav>
    </header>
  );
}
