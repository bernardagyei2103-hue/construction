import ConsultationTrigger from "@/components/Consultation/ConsultationTrigger";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.inner}>
        <div>
          <h2 id="cta-title" className={styles.title}>
            Ready to Build with Confidence?
          </h2>
          <p className={styles.sub}>
            Partner with teams that combine execution capacity and logistics discipline—delivering
            infrastructure results in demanding environments.
          </p>
        </div>
        <div className={styles.ctaCol}>
          <ConsultationTrigger className={styles.cta}>Schedule Consultation</ConsultationTrigger>
        </div>
      </div>
      <div className={styles.edgeLine} aria-hidden />
    </section>
  );
}
