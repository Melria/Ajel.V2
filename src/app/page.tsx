import { BusinessShowcase } from "@/sections/BusinessShowcase";
import Contact from "@/sections/Contact";
import Faqs from "@/sections/Faqs";
import Filiale from "@/sections/Filiale";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Services from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <BusinessShowcase />
      <Services />
      <Filiale />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}
