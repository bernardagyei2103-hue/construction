"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useConsultation } from "@/components/Consultation/ConsultationContext";
import styles from "./Navbar.module.css";

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM21 21l-4.8-4.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#capabilities", label: "Equipment" },
  { href: "#safety", label: "Safety" },
] as const;

const QUICK_FACTS = [
  "30+ years across construction, earthworks, and logistics",
  "130+ skilled operators, drivers, engineers, and field staff",
  "GCC and international programmes — roads, materials, drainage, fleet",
] as const;

export default function Navbar() {
  const { open: openConsultation } = useConsultation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else if (document.body.dataset.consultationModal !== "open") {
      document.body.style.overflow = "";
    }
    return () => {
      if (menuOpen && document.body.dataset.consultationModal !== "open") {
        document.body.style.overflow = "";
      }
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  function openConsultationThenCloseMenu() {
    closeMenu();
    openConsultation();
  }

  function handleSearch() {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.microStrip} aria-hidden>
          <div className={styles.microInner}>
            <div className={styles.microMeta}>
              <a className={styles.microItem} href="tel:+966112345678">
                <IconPhone />
                <span>+966 11 234 5678</span>
              </a>
              <span className={styles.microSep} />
              <span className={styles.microItem}>
                <IconPin />
                <span>Riyadh · KSA</span>
              </span>
            </div>
            <div className={styles.microStatus}>
              <span className={styles.statusDot} />
              <span>Field crews operational · Programme delivery active</span>
            </div>
          </div>
        </div>

        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="RodeMann Infrastructures — home">
            <Image
              src="/images/rodemann-logo.png"
              alt="RodeMann Infrastructures — Engineering the Future Today"
              width={280}
              height={154}
              className={styles.logoImg}
              priority
              sizes="(max-width: 400px) 180px, 240px"
            />
          </Link>

          <nav className={styles.primaryNav} aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={styles.primaryLink}>
                {label}
              </a>
            ))}
            <button
              type="button"
              className={styles.primaryLink}
              onClick={openConsultation}
            >
              Contact
            </button>
          </nav>

          <div className={styles.utilities}>
            <button
              type="button"
              className={styles.searchPill}
              onClick={handleSearch}
              aria-label="Find services"
              title="Find services"
            >
              <IconSearch />
            </button>
            <div className={styles.ctaPair}>
              <button type="button" className={styles.quoteBtn} onClick={openConsultation}>
                Request quote
              </button>
              <button type="button" className={styles.bookBtn} onClick={openConsultation}>
                <span>Consultation</span>
              </button>
            </div>
            <button
              type="button"
              className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ""}`}
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className={styles.iconBars}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        <div className={styles.hazardStripe} aria-hidden />
      </header>

      {menuOpen ? (
        <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={closeMenu} />
      ) : null}

      <nav
        id="site-navigation"
        className={`${styles.navPanel} ${menuOpen ? styles.navOpen : ""}`}
        aria-hidden={!menuOpen}
        aria-label="Site"
      >
        <div className={styles.panelTop}>
          <p className={styles.panelKicker}>RodeMann</p>
          <p className={styles.panelIntro}>
            Road construction, earthworks, material supply, drainage, and coordinated heavy equipment
            logistics — delivered with programme discipline and measurable milestones.
          </p>
          <div className={styles.panelActions}>
            <button
              type="button"
              className={styles.bookPrimary}
              onClick={openConsultationThenCloseMenu}
            >
              Book consultation
            </button>
            <button
              type="button"
              className={styles.bookSecondary}
              onClick={openConsultationThenCloseMenu}
            >
              Request a quote
            </button>
          </div>
        </div>

        <div className={styles.panelSection}>
          <p className={styles.sectionLabel}>Navigate</p>
          <button
            type="button"
            className={styles.panelSearch}
            onClick={handleSearch}
            aria-label="Jump to services section"
          >
            <IconSearch />
            <span>Find services</span>
          </button>
          <div className={styles.navLinks}>
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className={styles.navLink} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <button
              type="button"
              className={styles.navLink}
              onClick={openConsultationThenCloseMenu}
            >
              Contact
            </button>
          </div>
        </div>

        <div className={styles.panelSection}>
          <p className={styles.sectionLabel}>At a glance</p>
          <ul className={styles.facts}>
            {QUICK_FACTS.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
