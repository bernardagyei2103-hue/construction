import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ConsultationProvider } from "@/components/Consultation/ConsultationContext";
import StructuredData from "@/components/seo/StructuredData";
import {
  getSiteOrigin,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site";
import styles from "./layout.module.css";
import "./globals.css";

/**
 * Inter + Manrope via Fontsource variable files (same families as Google Fonts) for offline-safe builds.
 */
const inter = localFont({
  src: [
    {
      path: "../node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const manrope = localFont({
  src: [
    {
      path: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-ext-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
      weight: "200 800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const siteOrigin = getSiteOrigin();

const KEYWORDS = [
  "RodeMann Infrastructure",
  "civil engineering Saudi Arabia",
  "road construction Middle East",
  "earthworks contractor",
  "asphalt paving",
  "site preparation",
  "cut and fill",
  "material supply aggregates",
  "drainage culverts",
  "construction fleet logistics",
  "heavy equipment rental GCC",
  "infrastructure contractor Riyadh",
  "RodeMann Infrastructure B.V.",
];

const defaultTitle = `${SITE_NAME} | Civil engineering & infrastructure logistics`;

function buildVerification(): Metadata["verification"] | undefined {
  const google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const yandex = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  const other: Record<string, string> = {};
  if (bing) other["msvalidate.01"] = bing;
  const hasOther = Object.keys(other).length > 0;
  if (!google && !yandex && !hasOther) return undefined;
  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(hasOther ? { other } : {}),
  };
}

const verificationMerged = buildVerification();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f1720" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1720" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  category: "construction",
  authors: [{ name: SITE_NAME, url: siteOrigin }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "strict-origin-when-cross-origin",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "en-SA": "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_SA",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt:
          `${SITE_NAME} — road construction, earthworks, drainage, logistics, programme delivery.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
    ...(process.env.NEXT_PUBLIC_TWITTER_SITE
      ? { site: process.env.NEXT_PUBLIC_TWITTER_SITE }
      : {}),
    ...(process.env.NEXT_PUBLIC_TWITTER_CREATOR
      ? { creator: process.env.NEXT_PUBLIC_TWITTER_CREATOR }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  ...(verificationMerged ? { verification: verificationMerged } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-SA" className={`${inter.variable} ${manrope.variable}`}>
      <body className={styles.shell}>
        <StructuredData />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className={styles.main}>
          <ConsultationProvider>{children}</ConsultationProvider>
        </div>
      </body>
    </html>
  );
}
