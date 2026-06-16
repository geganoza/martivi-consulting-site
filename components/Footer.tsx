"use client";

import { useI18n } from "@/locales/client";

export default function Footer() {
  const t = useI18n();

  return (
    <footer
      className="section-wrap relative flex h-auto sm:h-[300px] items-center
            resp-px py-8 text-base sm:text-lg bg-cover bg-center bg-no-repeat mt-[80px]"
      style={{ backgroundImage: "url('/images/footer-bg.png')" }}
    >
      <div className="flex w-full flex-wrap items-center justify-between gap-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-white">{t("footer.copyright")}</p>
          <a
            href="/caib/en"
            className="text-white underline-offset-2 hover:underline"
          >
            CAIB — AI Brain for business
          </a>
        </div>
        <address className="flex flex-wrap items-center gap-x-3 gap-y-2 not-italic text-white">
          <a
            href="mailto:contact@martiviconsulting.com"
            className="no-underline"
          >
            contact@martiviconsulting.com
          </a>
          <span>|</span>
          <a href="tel:+995577273090" className="no-underline">
            +995 577 273 090
          </a>
          <span>|</span>
          <a href="tel:+13473351038" className="no-underline">
            +1 347 335 1038
          </a>
          <span>|</span>
          <span className="inline-flex items-center gap-1">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            {t("footer.location")}{" "}
          </span>
        </address>
      </div>
    </footer>
  );
}
