"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import styles from "./Services.module.css";

export type ServiceCopy = {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  imageAlt: string;
};

export function ServiceCard({ item, index }: { item: ServiceCopy; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={styles.card}
      style={
        {
          "--card-delay": `${index * 55}ms`,
        } as CSSProperties
      }
    >
      <div className={styles.cardMedia}>
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={640}
          height={400}
          className={styles.mediaImg}
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
      <div className={styles.cardInner}>
        <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.excerpt}>{item.excerpt}</p>
        <button
          type="button"
          className={styles.expandBtn}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Show less" : "Read more"}
        </button>
        <div className={`${styles.fullWrap} ${open ? styles.fullOpen : ""}`} aria-hidden={!open}>
          <div className={styles.fullInner}>
            <p className={styles.fullText}>{item.description}</p>
          </div>
        </div>
        <span className={styles.rule} aria-hidden />
      </div>
    </article>
  );
}
