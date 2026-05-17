import { ServiceCard, type ServiceCopy } from "./ServiceCard";
import styles from "./Services.module.css";

const SERVICES: ServiceCopy[] = [
  {
    id: "road",
    title: "Road Construction",
    excerpt:
      "Concept through handover—subgrade, base, asphalt, compaction, and finishing engineered for durability.",
    description:
      "We deliver road construction solutions from concept to completion. Our work covers every major stage of road development, including site preparation, subgrade formation, sub-base and base layer construction, asphalt paving, compaction, road finishing, and final handover. We focus on building roads that are durable, efficient, and engineered to perform under demanding environmental conditions.",
    image: "/images/img-road-service-card.png",
    imageAlt:
      "Precast concrete box culvert sections staged on aggregate for drainage or underpass installation",
  },
  {
    id: "earth",
    title: "Earthworks",
    excerpt:
      "Land clearing, excavation, cut/fill, grading, and embankments coordinated for stable, schedule-safe progress.",
    description:
      "Earthworks form the foundation of every successful project. Our capabilities include land clearing, excavation, cut and fill operations, grading, leveling, embankment construction, and site preparation. By combining technical planning with efficient machinery coordination, we create stable foundations that allow projects to progress safely and on schedule.",
    image: "/images/img-earthworks-service-card.png",
    imageAlt:
      "Fleet of excavators on a large-scale earthmoving and mining site under open sky",
  },
  {
    id: "material",
    title: "Material Supply",
    excerpt:
      "Sand, gravel, crushed stone, and graded aggregates with dependable volumes to active sites.",
    description:
      "Reliable material supply is essential to keeping any project moving. We supply high-quality construction materials, including sand, gravel, crushed stone, and graded aggregates in a wide range of specifications. Our supply network is structured to provide consistency in quality, dependable daily volumes, and efficient delivery to active project sites.",
    image: "/images/img-material-supply-card.png",
    imageAlt: "Industrial aggregates and material supply stockpiles",
  },
  {
    id: "equipment",
    title: "Equipment Rental & Logistics",
    excerpt:
      "Heavy fleet support, transport scheduling, and on-site coordination for throughput certainty.",
    description:
      "We provide heavy equipment support and coordinated logistics solutions for infrastructure and earthmoving projects. Our operational capacity includes dump trucks, excavators, bulldozers, graders, rollers, loaders, and other essential machinery. Beyond equipment, we manage the movement of materials, fleet coordination, transport scheduling, and operational planning to ensure continuity and productivity across every stage of the project.",
    image: "/images/img-project-execution.png",
    imageAlt: "Project execution and field coordination on infrastructure programmes",
  },
  {
    id: "drainage",
    title: "Drainage Systems",
    excerpt:
      "Culverts, channels, trenching, and stormwater structures that protect pavement life and performance.",
    description:
      "Effective drainage is critical to the lifespan and performance of road infrastructure. We carry out drainage works including culverts, stormwater channels, side drains, trenching, underground drainage installation, and related concrete works. Our approach ensures that every road system is supported by sound water management and long-term structural protection.",
    image: "/images/img-drainage-card.png",
    imageAlt: "Drainage infrastructure and hydraulic protection works",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className={styles.inner}>
        <div className={styles.headerRow}>
          <div className={styles.headerLead}>
            <p className={styles.kicker}>Our services</p>
            <h2 id="services-title" className={styles.title}>
              Full-cycle delivery—in compact, accountable scopes.
            </h2>
          </div>
          <p className={styles.deck}>
            Tap any card to expand full technical detail. Core offers span road construction,
            earthworks, materials, fleet logistics, and drainage—aligned to programme milestones.
          </p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
