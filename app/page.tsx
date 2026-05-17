import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Safety from "@/components/Safety";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Projects />
      <Capabilities />
      <Safety />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
