import Image from "next/image";
import styles from "./About.module.css";

type BoardMember = {
  image: string;
  imageAlt: string;
  headline: string;
  subline: string | null;
  isCeo: boolean;
};

const PROJECT_BOARD: BoardMember[] = [
  {
    image: "/images/board/board-01.png",
    imageAlt: "Portrait of a project board member in professional office attire",
    headline: "Programme director",
    subline: "Major works coordination",
    isCeo: false,
  },
  {
    image: "/images/board/board-02.png",
    imageAlt: "Portrait of a project board member in a vehicle cabin",
    headline: "Operations director",
    subline: "Field delivery & fleet alignment",
    isCeo: false,
  },
  {
    image: "/images/board/board-03-ceo-roland-lange.png",
    imageAlt: "Roland Lange, Chief Executive Officer of RodeMann Infrastructure",
    headline: "Roland Lange",
    subline: "Chief Executive Officer",
    isCeo: true,
  },
  {
    image: "/images/board/board-04.png",
    imageAlt: "Portrait of a project board member outdoors",
    headline: "Technical delivery",
    subline: "Engineering & quality assurance",
    isCeo: false,
  },
  {
    image: "/images/board/board-05.png",
    imageAlt: "Portrait of a project board member outdoors with sea view",
    headline: "Commercial lead",
    subline: "Contracts & stakeholder interface",
    isCeo: false,
  },
  {
    image: "/images/board/board-06.png",
    imageAlt: "Portrait of a project board member in striped office attire",
    headline: "HSE principal",
    subline: "Safety & compliance stewardship",
    isCeo: false,
  },
  {
    image: "/images/board/board-07.png",
    imageAlt: "Portrait of a project board member in striped shirt outdoors",
    headline: "Logistics coordinator",
    subline: "Supply chain continuity",
    isCeo: false,
  },
  {
    image: "/images/board/board-08.png",
    imageAlt: "Portrait of a project board member in white shirt outdoors",
    headline: "Regional projects",
    subline: "International programme interface",
    isCeo: false,
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.copyCol}>
          <p className={styles.kicker}>About us</p>
          <h2 id="about-title" className={styles.title}>
            Three decades of dependable infrastructure delivery
          </h2>
          <p className={styles.body}>
            With over 30 years of experience in construction, earthworks, and logistics, our company
            has built a solid reputation for delivering dependable and high-quality infrastructure
            solutions. From our early beginnings to our current operations across Saudi Arabia, the
            Middle East, and beyond, we have consistently focused on growth, precision, and
            long-term value.
          </p>
          <p className={styles.body}>
            Our strength lies not only in our technical capabilities but in our approach to every
            project. We understand that construction is more than just building—it is about
            planning, coordination, and execution at every level.
          </p>

          <details className={styles.more}>
            <summary className={styles.moreBtn}>Read more — company story &amp; mandate</summary>
            <div className={styles.moreBody}>
              <p className={styles.body}>
                This is why we take a hands-on, strategic approach, ensuring that every phase of a
                project is carefully managed and aligned with client expectations.
              </p>
              <p className={styles.body}>
                What sets us apart is our commitment to reliability and control. We prioritize
                efficiency, cost management, and operational excellence, ensuring that our clients
                receive not only quality results but also transparency and consistency throughout the
                project lifecycle.
              </p>

              <section className={styles.mvWrap} aria-label="Mission and vision">
                <div className={styles.mvItem}>
                  <h3 id="mission-heading" className={styles.mvLabel}>
                    Our mission
                  </h3>
                  <p className={styles.mvText}>
                    To deliver durable, high-performance infrastructure that supports development and
                    stands the test of time. We are dedicated to providing solutions that are not only
                    effective today but sustainable for the future.
                  </p>
                </div>
                <div className={styles.mvItem}>
                  <h3 id="vision-heading" className={styles.mvLabel}>
                    Our vision
                  </h3>
                  <p className={styles.mvText}>
                    To become a leading name in construction and logistics across the Middle East and
                    international markets—recognized for our professionalism, trustworthiness, and
                    ability to execute complex projects with confidence and precision.
                  </p>
                </div>
              </section>
            </div>
          </details>
        </div>

        <aside className={styles.metricsAside} aria-label="Leadership perspective">
          <blockquote className={styles.quotePanel}>
            <p className={styles.quote}>
              &ldquo;Clients deserve predictable outcomes. Our mandate is control—transparent phases,
              disciplined costs, and execution certainty when programmes escalate.&rdquo;
            </p>
            <footer className={styles.attribution}>
              <strong>Khalid Al-Rashid</strong>
              <span className={styles.role}>Chief Operating Officer, RodeMann Infrastructure B.V.</span>
            </footer>
          </blockquote>
          <div className={styles.stat}>
            <strong>30+ years</strong>
            <span>Construction, earthworks, and logistics experience across regional programmes.</span>
          </div>
          <div className={styles.stat}>
            <strong>130+ professionals</strong>
            <span>Operators, drivers, engineers, technicians, and field support—aligned to delivery.</span>
          </div>
        </aside>

        <div className={styles.boardWrap}>
          <div className={styles.boardHeader}>
            <p className={styles.boardKicker}>Governance</p>
            <h3 className={styles.boardTitle}>Project board</h3>
            <p className={styles.boardLead}>
              Executive and programme-facing leadership aligning scopes, approvals, and outcomes to
              the delivery mandate.
            </p>
          </div>
          <ul className={styles.boardGrid}>
            {PROJECT_BOARD.map((member) => (
              <li key={member.image} className={styles.boardCell}>
                <article
                  className={member.isCeo ? styles.personCardFeatured : styles.personCard}
                  aria-label={
                    member.isCeo ? `${member.headline}, ${member.subline}` : `${member.headline}`
                  }
                >
                  <div className={styles.photoFrame}>
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      className={styles.photo}
                      sizes="(max-width: 520px) 45vw, (max-width: 900px) 30vw, 160px"
                    />
                  </div>
                  <div className={styles.personMeta}>
                    <p className={styles.personName}>{member.headline}</p>
                    {member.subline ? <p className={styles.personRole}>{member.subline}</p> : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
