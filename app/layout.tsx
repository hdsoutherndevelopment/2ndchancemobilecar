import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { business } from "@/lib/config";
import { localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

const title = "Mobile Car Valeting Ferndown | Car & Van Valet | 2nd Chance";
const description =
  "Fully insured mobile car & van valeting in Ferndown, Dorset. We come to your driveway across Ferndown, Wimborne, Broadstone & Ringwood. 5.0 rated. Valets from £15. Call 07718 799720.";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: title,
    template: "%s | 2nd Chance Mobile Valeting Ferndown",
  },
  description,
  keywords: [
    "mobile car valeting Ferndown",
    "car valet Ferndown",
    "mobile valeting Wimborne",
    "car valeting Wimborne",
    "mobile car valet Ringwood",
    "car valet Broadstone",
    "van valeting Dorset",
    "commercial vehicle valeting Dorset",
    "mobile car cleaning Ferndown",
    "car detailing East Dorset",
  ],
  applicationName: business.legalName,
  authors: [{ name: business.legalName }],
  creator: "HD Southern Development",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: business.siteUrl,
    siteName: business.legalName,
    title,
    description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?auto=format&fit=crop&w=1200&h=630&q=75",
        width: 1200,
        height: 630,
        alt: "2nd Chance mobile car and van valeting in Ferndown, Dorset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      "https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?auto=format&fit=crop&w=1200&h=630&q=75",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Automotive Services",
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#06070A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [breadcrumbSchema(), localBusinessSchema(), faqSchema(), ...serviceSchema()];

  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:text-[13px] focus:font-bold focus:uppercase focus:text-ink-950"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
