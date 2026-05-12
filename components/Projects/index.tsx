import Image from "next/image";
import styles from "./Projects.module.css";

const STRUCTURAE_URDANETA =
  "https://structurae.net/en/structures/general-rafael-urdaneta-bridge";

const PROJECTS = [
  {
    title: "Venezuela — Road Construction & Earthworks",
    budget: "International roadworks, site preparation & earthmoving",
    image: "/images/img-earthworks-banner.png",
    alt: "Large-scale earthmoving and road corridor works",
    challenge:
      "Deliver site preparation, large-scale earthmoving, and road network development across varying terrain and environmental conditions—requiring sustained coordination, disciplined material management, and execution continuity.",
    solution:
      "Structured earthworks sequencing, haul and placement planning, subgrade and pavement-stage coordination, and logistics aligned to daily production targets and changing site conditions.",
    outcomes: [
      { label: "Earthmoving tempo", value: "High-volume" },
      { label: "Material assurance", value: "Managed chains" },
      { label: "Network readiness", value: "Phased handover" },
    ],
    caption: "Road & earthworks",
  },
  {
    title: "Argentina — Bridge & Structural Works",
    budget: "Bridge-related construction & reinforced structures",
    image: "/images/img-bridge-structures.png",
    alt: "Historic steel arch bridge spanning a canyon at dusk, viewpoint and heritage signage visible",
    challenge:
      "Execute technically demanding structural works—reinforced elements, load-bearing interfaces, and precision tolerances inherent to bridge-related construction—within coordinated multi-trade programmes.",
    solution:
      "Structural execution packages with verified reinforcement and forming sequences, coordinated lifts and pours, and QA discipline aligned to structural design assumptions and inspection milestones.",
    outcomes: [
      { label: "Structural QA", value: "Verified" },
      { label: "Interface control", value: "Multi-trade" },
      { label: "Execution precision", value: "Design-aligned" },
    ],
    caption: "Bridge & structures",
  },
  {
    title: "Programme Logistics & Field Production",
    budget: "Access roads, support works & full-scale operations",
    image: "/images/img-project-execution.png",
    alt: "Field coordination, planning, and logistics on an active infrastructure programme",
    challenge:
      "Sustain reliable daily production across access roads, infrastructure support works, and full-scale construction—integrating machinery rostering, workforce mobilisation, and supply-chain continuity.",
    solution:
      "Integrated logistical planning, fleet and equipment choreography, material call-offs tied to lookahead schedules, and field leadership focused on throughput without compromising safety or workmanship.",
    outcomes: [
      { label: "Logistical planning", value: "Integrated" },
      { label: "Production capacity", value: "Scaled" },
      { label: "Machinery & crews", value: "Coordinated" },
    ],
    caption: "Logistics & production",
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.label}>Projects &amp; portfolio</p>
          <h2 id="projects-title" className={styles.title}>
            International programmes shaped by roadworks and structural delivery.
          </h2>
          <p className={styles.lead}>
            Diverse infrastructure experience across regions—expand the narrative for Venezuela,
            Argentina, and reference bridge programmes when you need the full brief.
          </p>
        </header>

        <details className={styles.portfolioDetails}>
          <summary className={styles.portfolioSummary}>
            Read full international portfolio narrative
          </summary>
          <div className={styles.portfolioBlock}>
            <h3 className={styles.regionTitle}>Venezuela</h3>
            <p className={styles.regionBody}>
              Our international experience includes road construction and earthworks projects in
              Venezuela, where we contributed to site preparation, large-scale earthmoving operations,
              and the development of road networks designed to support connectivity and transport
              efficiency. These projects required strong coordination, material management, and
              execution under varying terrain and environmental conditions.
            </p>

            <h3 className={styles.regionTitle}>Argentina</h3>
            <p className={styles.regionBody}>
              In Argentina, our experience extends to structural works, including participation in
              bridge-related construction projects. Bridge construction is a highly technical process
              involving reinforced structures, load-bearing design, and precise execution—similar to the
              engineering and coordination demanded on major infrastructure works such as the General
              Rafael Urdaneta Bridge.
            </p>
            <p className={styles.citation}>
              Reference profile for illustrative comparison:{" "}
              <a href={STRUCTURAE_URDANETA} target="_blank" rel="noopener noreferrer">
                General Rafael Urdaneta Bridge (Structurae)
              </a>
              .
            </p>

            <p className={styles.specialtiesIntro}>We specialize in projects that demand:</p>
            <ul className={styles.specialties}>
              <li>Strong logistical planning</li>
              <li>High daily production capacity</li>
              <li>Reliable material supply chains</li>
              <li>Efficient coordination of machinery and workforce</li>
            </ul>

            <p className={styles.closingLead}>
              From access roads and infrastructure support works to full-scale construction operations,
              we approach every project with a commitment to precision, reliability, and long-term
              performance.
            </p>
          </div>
        </details>

        <h3 className={styles.featuredLabel}>Featured programmes</h3>

        <div className={styles.list}>
          {PROJECTS.map((project, i) => {
            const isBridgeStructures = project.caption === "Bridge & structures";
            return (
            <article
              key={project.title}
              className={`${styles.block} ${i % 2 === 1 ? styles.reverse : ""}`}
            >
              <figure className={styles.figure}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  className={`${styles.figureImg} ${isBridgeStructures ? styles.figureImgBridge : ""}`}
                />
                <figcaption
                  className={`${styles.caption} ${isBridgeStructures ? styles.captionClearOfSign : ""}`}
                >
                  {project.caption}
                </figcaption>
              </figure>
              <div className={styles.copy}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>{project.budget}</span>
                </div>
                <div className={styles.blockquoteGroup}>
                  <div>
                    <p className={styles.dt}>Challenge</p>
                    <p className={styles.dd}>{project.challenge}</p>
                  </div>
                  <div>
                    <p className={styles.dt}>Solution</p>
                    <p className={styles.dd}>{project.solution}</p>
                  </div>
                </div>
                <div className={styles.metricsRow}>
                  {project.outcomes.map((o) => (
                    <div key={o.label} className={styles.metric}>
                      <strong>{o.value}</strong>
                      <span>{o.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
