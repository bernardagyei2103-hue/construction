"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ConsultationTrigger from "@/components/Consultation/ConsultationTrigger";
import styles from "./Hero.module.css";

const SLIDE_INTERVAL_MS = 7000;

const SLIDES = [
  {
    src: "/images/hero-slide-building.png",
    alt: "Modern mixed-use building with glass facades and green terraces along a city street",
  },
  {
    src: "/images/hero-slide-equipment-1.png",
    alt: "Excavator, road roller, and pile-driver lined up at sunset on a project site",
  },
  {
    src: "/images/hero-slide-equipment-2.png",
    alt: "Wheel loader and graders staged in a fleet yard ready for deployment",
  },
] as const;

export default function Hero() {
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className={styles.section}
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      aria-label="Featured project photography"
    >
      <div className={styles.bg} aria-hidden>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.bgSlide} ${i === active ? styles.bgSlideActive : ""}`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={styles.bgImg}
            />
          </div>
        ))}
        <div className={styles.scrim} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Engineering the Future, Today</p>
          <h1 id="hero-heading" className={styles.headline}>
            Road Construction, Earthworks &amp; Infrastructure Delivery
          </h1>
          <p className={styles.sub}>
            Reliable, efficient execution across Saudi Arabia, the Middle East, and international
            markets—built for demanding sites and modern development programmes.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.ctaPrimary}>
              View Projects
            </a>
            <ConsultationTrigger className={styles.ctaSecondary}>
              Request a quote
            </ConsultationTrigger>
          </div>
          <div className={styles.sliderDots} role="tablist" aria-label="Hero slides">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Slide ${i + 1}: ${slide.alt}`}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
