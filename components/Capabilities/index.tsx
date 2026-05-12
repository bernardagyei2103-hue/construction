import Image from "next/image";
import styles from "./Capabilities.module.css";

const FLEET_ITEMS = [
  "Approximately 15–20 dump trucks for material transport",
  "Excavators and bulldozers",
  "Motor graders",
  "Rollers and pavers",
  "Loaders",
] as const;

export default function Capabilities() {
  return (
    <section id="capabilities" className={styles.section} aria-labelledby="capabilities-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Equipment &amp; capabilities</p>
          <h2 id="capabilities-title" className={styles.title}>
            Fleet, crews, and programme logistics built for sustained throughput.
          </h2>
          <p className={styles.lead}>
            Modern equipment, disciplined field organisation, and integrated logistics—aligned to
            lookahead schedules and measurable daily production.
          </p>
        </header>

        <figure className={styles.workforceFigure}>
          <Image
            src="/images/img-workforce.png"
            alt="Our workforce: operators, drivers, engineers, technicians, and support staff delivering field operations"
            width={1024}
            height={682}
            className={styles.workforceImg}
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
          <figcaption className={styles.workforceCaption}>
            <span className={styles.workforceStat}>130+</span>
            <span className={styles.workforceLabel}>Skilled professionals</span>
          </figcaption>
        </figure>

        <figure className={styles.infographicWrap}>
          <Image
            src="/images/img-equipment-fleet.png"
            alt="Our equipment fleet: dump trucks, excavators, bulldozers, motor graders, rollers, asphalt pavers, and wheel loaders with fleet counts and operational strengths"
            width={1024}
            height={682}
            className={styles.infographic}
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
        </figure>

        <div className={styles.grid}>
          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Fleet &amp; heavy equipment</h3>
            <p className={styles.panelLead}>
              Heavy-duty machinery for excavation, grading, compaction, and surfacing—choreographed to
              maintain continuous workflow.
            </p>
            <details className={styles.more}>
              <summary className={styles.moreBtn}>Technical detail</summary>
              <div className={styles.moreBody}>
                <p className={styles.panelBody}>
                  Our fleet includes a strong lineup of machinery essential for road construction and
                  earthworks. Each asset plays a critical role from excavation and material handling
                  through grading, compaction, and final surfacing.
                </p>
                <ul className={styles.equipmentList}>
                  {FLEET_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          </article>

          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Workforce &amp; field organisation</h3>
            <p className={styles.panelLead}>
              130+ skilled and semi-skilled personnel—operators, drivers, technicians, engineers,
              and supervisors—aligned to daily production and QA gates.
            </p>
            <details className={styles.more}>
              <summary className={styles.moreBtn}>Technical detail</summary>
              <div className={styles.moreBody}>
                <p className={styles.panelBody}>
                  Beyond machinery, our workforce is structured for efficiency at every level. We
                  maintain high daily production rates while coordinating quality, safety, and
                  interfaces across trades and programme milestones.
                </p>
              </div>
            </details>
          </article>

          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Logistics &amp; operational control</h3>
            <p className={styles.panelLead}>
              Material sourcing, transport planning, fleet rostering, and on-site control for complex,
              time-critical programmes.
            </p>
            <details className={styles.more}>
              <summary className={styles.moreBtn}>Technical detail</summary>
              <div className={styles.moreBody}>
                <p className={styles.panelBody}>
                  We provide full logistical coordination—fleet management, call-offs tied to
                  lookahead schedules, and leadership focused on throughput without compromising safety
                  or workmanship.
                </p>
              </div>
            </details>
          </article>
        </div>

        <div className={styles.closing}>
          <p className={styles.closingText}>
            Equipment capacity, experienced personnel, and structured execution—built for demanding
            sites and large-scale infrastructure developments.
          </p>
        </div>
      </div>
    </section>
  );
}
