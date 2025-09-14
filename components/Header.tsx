"use client";

import Image from "next/image";
import { useI18n } from "@/locales/client";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const t = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.startsWith("/ka") ? "ka" : "en";

  const handleLanguageChange = (locale: "en" | "ka") => {
    if (locale === "en") {
      router.push("/");
    } else {
      router.push("/ka");
    }
  };

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
        <button
          onClick={() => handleLanguageChange("en")}
          className={`rounded px-3 py-1 text-sm underline-offset-4 ${
            currentLocale === "en" ? "font-bold" : "hover:text-[#1390ac]"
          }`}
        >
          {t("header.eng")}
        </button>
        <span>|</span>
        <button
          onClick={() => handleLanguageChange("ka")}
          className={`rounded px-3 py-1 text-sm underline-offset-4 ${
            currentLocale === "ka" ? "font-bold" : "hover:text-[#1390ac]"
          }`}
        >
          {t("header.geo")}
        </button>
      </nav>
    </header>
  );
}
