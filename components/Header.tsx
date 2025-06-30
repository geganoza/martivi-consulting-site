"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1728px] items-center justify-center px-6 py-4">
      {/* Logo in the centre */}
      <div>
        <Image
          src="/images/logo.png"
          alt="MyLogo"
          width={240}
          height={120}
          priority
        />
      </div>

      {/* Lang switcher on the far right */}
      <nav className="ml-auto">
        <Link
          href="/geo"
          className="rounded px-3 py-1 text-sm underline-offset-4 hover:underline"
        >
          GEO
        </Link>
      </nav>
    </header>
  );
}
