import styles from "./Testimonials.module.css";

function QuoteGlyph() {
  return (
    <svg
      className={styles.quoteIcon}
      width="28"
      height="22"
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 2L6 9h4v11H0V9l6-9h4zm18 0l-4 7h4v11H18V9l6-9h4z"
        fill="currentColor"
      />
    </svg>
  );
}

const ITEMS = [
  {
    quote:
      "Their earthworks sequencing and haul logistics kept our corridor programme predictable—disciplined crews and clear accountability on site.",
    name: "Faisal Al-Mutairi",
    role: "Director of Infrastructure, Gulf Capital Development",
  },
  {
    quote:
      "Bulk handling peaks never compromised safety windows. RodeMann coordinated interfaces across contractors without losing throughput.",
    name: "Priya Natarajan",
    role: "Programme Lead, Red Sea Logistics Consortium",
  },
  {
    quote:
      "They operated like an integrated delivery partner—technical clarity, operational muscle, and relentless focus on milestone certainty.",
    name: "Marcus Weber",
    role: "Chief Projects Officer, European Engineering JV",
  },
] as const;

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <header className={styles.head}>
          <h2 id="testimonials-title" className={styles.title}>
            What institutional partners report.
          </h2>
          <p className={styles.sub}>
            Perspectives from developers, logistics operators, and programme directors engaged on
            high-volume construction programmes across the region.
          </p>
        </header>
        <div className={styles.cards}>
          {ITEMS.map((item) => (
            <figure key={item.name} className={styles.card}>
              <QuoteGlyph />
              <blockquote className={styles.text}>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className={styles.person}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.role}>{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
