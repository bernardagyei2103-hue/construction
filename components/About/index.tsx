import Image from "next/image";
import styles from "./About.module.css";

type BoardMember = {
  image: string;
  imageAlt: string;
  name: string;
  roleTitle: string;
  roleDetail: string | null;
  isCeo: boolean;
};

/** Names should match verified roster — update when appointments change. */
const PROJECT_BOARD: BoardMember[] = [
  {
    image: "/images/board/board-03-ceo-roland-lange.png",
    imageAlt: "Roland Lange, Founder and Chief Executive Officer of RodeMann Infrastructure",
    name: "Roland Lange",
    roleTitle: "Founder & Chief Executive Officer",
    roleDetail: null,
    isCeo: true,
  },
  {
    image: "/images/board/board-01.png",
    imageAlt: "Marc van Essen, Programme director at RodeMann Infrastructure",
    name: "Marc van Essen",
    roleTitle: "Programme director",
    roleDetail: "Major works coordination",
    isCeo: false,
  },
  {
    image: "/images/board/board-02.png",
    imageAlt: "Khalid Al-Rashid, Chief Operating Officer at RodeMann Infrastructure",
    name: "Khalid Al-Rashid",
    roleTitle: "Chief Operating Officer",
    roleDetail: "Field delivery & fleet alignment",
    isCeo: false,
  },
  {
    image: "/images/board/board-04.png",
    imageAlt: "Thomas Weber, Technical delivery lead at RodeMann Infrastructure",
    name: "Thomas Weber",
    roleTitle: "Technical delivery",
    roleDetail: "Engineering & quality assurance",
    isCeo: false,
  },
  {
    image: "/images/board/board-05.png",
    imageAlt: "Isabelle Dumont, Commercial lead at RodeMann Infrastructure",
    name: "Isabelle Dumont",
    roleTitle: "Commercial lead",
    roleDetail: "Contracts & stakeholder interface",
    isCeo: false,
  },
  {
    image: "/images/board/board-06.png",
    imageAlt: "Samuel Mensah, HSE principal at RodeMann Infrastructure",
    name: "Samuel Mensah",
    roleTitle: "HSE principal",
    roleDetail: "Safety & compliance stewardship",
    isCeo: false,
  },
  {
    image: "/images/board/board-07.png",
    imageAlt: "Raj Patel, Logistics coordinator at RodeMann Infrastructure",
    name: "Raj Patel",
    roleTitle: "Logistics coordinator",
    roleDetail: "Supply chain continuity",
    isCeo: false,
  },
  {
    image: "/images/board/board-08.png",
    imageAlt: "Carlos Ibáñez, Regional projects lead at RodeMann Infrastructure",
    name: "Carlos Ibáñez",
    roleTitle: "Regional projects",
    roleDetail: "International programme interface",
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
                    member.roleDetail
                      ? `${member.name}, ${member.roleTitle}. ${member.roleDetail}`
                      : `${member.name}, ${member.roleTitle}`
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
                    <p className={styles.personName}>{member.name}</p>
                    <p className={styles.personRole}>{member.roleTitle}</p>
                    {member.roleDetail ? (
                      <p className={styles.personDetail}>{member.roleDetail}</p>
                    ) : null}
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
