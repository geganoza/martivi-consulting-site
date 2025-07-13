"use client";

import Header from "@/components/Header";
import Banner from "@/components/MainBanner";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Consultant from "@/components/Consultant";
import NarrowBanner from "@/components/NarrowBanner";
import DiagonalBanners from "@/components/DiagonalBanners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Banner />
      <Services />
      <Brands />
      <Consultant />
      <NarrowBanner
        src="/images/services-banner.png"
        label="SERVICES"
        alt="Services banner"
      />
      <DiagonalBanners />
      <NarrowBanner
        src="/images/contact-banner.png"
        label="CONTACT US"
        alt="Contact banner"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
