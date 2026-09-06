import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Services from "@/components/Services";
import Estimator from "@/components/Estimator";
import Packages from "@/components/Packages";
import ProcessTimeline from "@/components/ProcessTimeline";
import Restoration from "@/components/Restoration";
import Fleet from "@/components/Fleet";
import CoverageMap from "@/components/CoverageMap";
import Faq from "@/components/Faq";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { faqs, services, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoWash",
      "@id": `${site.url}/#business`,
      name: site.name,
      description: site.description,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      areaServed: site.county,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.baseTown,
        addressRegion: site.county,
        addressCountry: "GB",
      },
      openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-16:00"],
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustMarquee />
        <Services />
        <Estimator />
        <Packages />
        <ProcessTimeline />
        <Restoration />
        <Fleet />
        <CoverageMap />
        <Faq />
        <QuoteSection />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
