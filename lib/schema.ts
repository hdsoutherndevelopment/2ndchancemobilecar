import { business, services, faqs } from "./config";

const areaServed = [...business.areas, ...business.nearby].map((name) => ({
  "@type": "City",
  name,
}));

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": `${business.siteUrl}/#business`,
    name: business.legalName,
    alternateName: "2nd Chance Valeting Ferndown",
    description:
      "Fully insured mobile car and van valeting in Ferndown, Dorset. We come to your home or workplace across Ferndown, Wimborne, Broadstone and Ringwood.",
    url: business.siteUrl,
    telephone: "+447718799720",
    image: `${business.siteUrl}/og.jpg`,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ferndown",
      addressRegion: "Dorset",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 50.8058, longitude: -1.895 },
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.toFixed(1),
      reviewCount: business.reviewCount,
      bestRating: "5",
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
    })),
  };
}

export function serviceSchema() {
  return services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.blurb,
    provider: { "@id": `${business.siteUrl}/#business` },
    areaServed: business.areas.map((name) => ({ "@type": "City", name })),
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      description: `${s.price}${s.priceNote ? ` (${s.priceNote})` : ""} — final price depends on vehicle size and condition.`,
      url: `${business.siteUrl}/#quote`,
    },
  }));
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.legalName,
    url: business.siteUrl,
  };
}
