import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { SITE_NAME } from "@/lib/site";
import styles from "../page.module.css";

const aboutDescription = `Learn about ${SITE_NAME}: company story, mandate, governance, and the project board steering infrastructure delivery across Saudi Arabia, the GCC, and international programmes.`;

export const metadata: Metadata = {
  title: "About us",
  description: aboutDescription,
  openGraph: {
    title: `About us | ${SITE_NAME}`,
    description: aboutDescription,
    url: "/about",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: `About us | ${SITE_NAME}`,
    description: aboutDescription,
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Navbar />
      <About />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
