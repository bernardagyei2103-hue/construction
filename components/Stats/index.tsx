"use client";

import { StatCounter, type StatShape } from "./StatCounter";
import styles from "./Stats.module.css";

const STATS: StatShape[] = [
  { id: "projects", target: 120, suffix: "+", label: "Projects Delivered", decimals: 0 },
  { id: "years", target: 30, suffix: "+", label: "Years", decimals: 0 },
  {
    id: "ontime",
    target: 98,
    suffix: "%",
    label: "On-Time Delivery",
    decimals: 0,
  },
  {
    id: "crew",
    target: 130,
    suffix: "+",
    label: "Skilled professionals",
    decimals: 0,
  },
];

export default function Stats() {
  return (
    <section className={styles.section} aria-labelledby="stats-heading">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={`${styles.panel} ${styles.wide}`}>
            <h2 id="stats-heading" className={styles.introTitle}>
              Delivery performance at programme scale
            </h2>
            <p className={styles.introBody}>
              Aggregated outcomes across road construction, earthworks, and logistics-heavy
              mandates—benchmarked against contractual milestones and verified field completion
              records.
            </p>
          </div>
          {STATS.map((stat) => (
            <StatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
