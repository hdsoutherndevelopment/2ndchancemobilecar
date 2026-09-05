import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import MobileBar from "@/components/site/MobileBar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Transformation from "@/components/sections/Transformation";
import WhyChoose from "@/components/sections/WhyChoose";
import Process from "@/components/sections/Process";
import MobileValeting from "@/components/sections/MobileValeting";
import Commercial from "@/components/sections/Commercial";
import Work from "@/components/sections/Work";
import Reviews from "@/components/sections/Reviews";
import Areas from "@/components/sections/Areas";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import QuoteSection from "@/components/sections/QuoteSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <Transformation />
        <WhyChoose />
        <Process />
        <MobileValeting />
        <Commercial />
        <Work />
        <Reviews />
        <Areas />
        <About />
        <Faq />
        <FinalCta />
        <QuoteSection />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
