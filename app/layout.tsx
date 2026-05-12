import type { Metadata } from "next";
import localFont from "next/font/local";
import { ConsultationProvider } from "@/components/Consultation/ConsultationContext";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://rodemann-infrastructure.example"),
  title: {
    default:
      "RodeMann Infrastructure B.V. | Civil Engineering Excellence",
    template: "%s | RodeMann Infrastructure B.V.",
  },
  description:
    "Engineering the Future, Today. Results-driven road construction, earthworks, and large-scale logistics across Saudi Arabia, the Middle East, and international markets.",
  openGraph: {
    title:
      "RodeMann Infrastructure B.V. | Civil Engineering Excellence",
    description:
      "Engineering the Future, Today. Results-driven road construction, earthworks, and large-scale logistics across Saudi Arabia, the Middle East, and international markets.",
    url: "https://rodemann-infrastructure.example",
    siteName: "RodeMann Infrastructure B.V.",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RodeMann Infrastructure B.V. | Civil Engineering Excellence",
    description:
      "Engineering the Future, Today. Results-driven road construction, earthworks, and large-scale logistics across Saudi Arabia, the Middle East, and international markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className={styles.shell}>
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
