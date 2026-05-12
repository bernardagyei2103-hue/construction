import Image from "next/image";
import styles from "./TrustBar.module.css";

export default function TrustBar() {
  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      <div className={styles.inner}>
        <p id="trust-heading" className={styles.lead}>
          Saudi Arabia · Middle East · international markets—field-tested delivery across roadworks,
          earthmoving, and logistics mandates.
        </p>
        <figure className={styles.mapFigure}>
          <Image
            src="/images/img-global-experience.png"
            alt="Global experience map highlighting operations across Saudi Arabia, the Middle East, and international regions"
            width={1024}
            height={682}
            className={styles.mapImg}
            sizes="(max-width: 1320px) 100vw, 1320px"
          />
          <figcaption className={styles.mapCaption}>
            Saudi Arabia · Middle East · International
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
