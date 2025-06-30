"use client";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Consultant from "../components/Consultant";
import ServiceBanner from "../components/ServiceBanner";
import DiagonalBanners from "../components/DiagonalBanners";
import ContactBanner from "@/components/ContactBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Banner />
      <Services />
      <Brands />
      <Consultant />
      <ServiceBanner />
      <DiagonalBanners />
      <ContactBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}
