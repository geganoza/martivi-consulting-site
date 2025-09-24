"use client";

import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Consultant from "@/components/Consultant";
import NarrowBanner from "@/components/NarrowBanner";
import DiagonalBanners from "@/components/DiagonalBanners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useI18n } from "@/locales/client";

export default function HomePage() {
  const t = useI18n() as (key: string) => string;

  return (
    <div className="flex flex-col w-full">
      <Header />
      <MainBanner />
      <Services />
      <Consultant />
      <NarrowBanner
        src="/images/services-banner.png"
        label={t("banner.services")}
        alt="Services banner"
      />
      <DiagonalBanners />
      <Brands />
      <NarrowBanner
        src="/images/contact-banner.png"
        label={t("banner.contact")}
        alt="Contact banner"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
