import Image from "next/image";
import styles from "./Safety.module.css";

const PROTOCOL_ITEMS = [
  "Mandatory use of personal protective equipment (PPE)",
  "Routine safety briefings",
  "Hazard identification and continuous monitoring of site conditions",
] as const;

export default function Safety() {
  return (
    <section id="safety" className={styles.section} aria-labelledby="safety-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Safety &amp; compliance</p>
          <h2 id="safety-title" className={styles.title}>
            HSE rigour that protects people, clients, and surrounding environments.
          </h2>
          <p className={styles.lead}>
            Safety, compliance, and environmental responsibility anchor every shift—we enforce clear
            standards that protect workers, clients, and communities.
          </p>
        </header>

        <figure className={styles.heroFigure}>
          <Image
            src="/images/img-safety-card.png"
            alt="Site supervisor in PPE overseeing construction works with safety-first protocols"
            width={1024}
            height={682}
            className={styles.heroImg}
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
        </figure>

        <div className={styles.grid}>
          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Site protocols &amp; HSE governance</h3>
            <p className={styles.panelBody}>
              Strict safety protocols on every site. HSE officers enforce compliance and maintain
              safe working conditions—briefings, hazard identification, and continuous monitoring.
            </p>
            <details className={styles.more}>
              <summary className={styles.moreBtn}>Read more</summary>
              <div className={styles.moreBody}>
                <p className={styles.panelBody}>
                  We implement strict safety protocols across all project sites, ensuring that every
                  worker operates within clearly defined safety guidelines.
                </p>
                <p className={styles.panelBody}>
                  Our Health, Safety, and Environment (HSE) officers play an active role in
                  enforcing compliance and maintaining a safe working environment at all times.
                </p>
                <ul className={styles.protocolList}>
                  {PROTOCOL_ITEMS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </details>
          </article>

          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Worker protection</h3>
            <p className={styles.panelBody}>
              Training, equipment, and supervision so every role—from operators to crews—meets
              established safety standards and documented controls.
            </p>
            <details className={styles.more}>
              <summary className={styles.moreBtn}>Read more</summary>
              <div className={styles.moreBody}>
                <p className={styles.panelBody}>
                  Worker protection is a priority within our organization. We ensure that all
                  personnel are provided with the necessary equipment, training, and support required
                  to carry out their roles safely and effectively. From machine operators to on-site
                  labourers, every member of our team is expected to adhere to established safety
                  standards, reducing risks and preventing incidents.
                </p>
              </div>
            </details>
          </article>

          <article className={styles.panel}>
            <h3 className={styles.panelTitle}>Environmental responsibility</h3>
            <p className={styles.panelBody}>
              Operations planned to reduce impact—materials handling, dust control, efficient fuel
              use, and adherence to local environmental regulations.
            </p>
            <details className={styles.more}>
              <summary className={styles.moreBtn}>Read more</summary>
              <div className={styles.moreBody}>
                <p className={styles.panelBody}>
                  In addition to safety, we are committed to responsible environmental practices. Our
                  operations are planned and executed with consideration for minimizing environmental
                  impact. This includes proper handling of materials, dust control measures, efficient
                  fuel usage, and adherence to local environmental regulations.
                </p>
              </div>
            </details>
          </article>
        </div>

        <figure className={styles.envFigure}>
          <Image
            src="/images/img-environmental-banner.png"
            alt="Environmental responsibility: sustainable practices and protecting natural surroundings during construction operations"
            width={1024}
            height={290}
            className={styles.envImg}
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
        </figure>

        <div className={styles.closing}>
          <p className={styles.closingText}>
            Strong safety systems and responsible practices protect people and surroundings—and
            sustain reliable long-term project outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
