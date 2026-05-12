import styles from "./Contact.module.css";
import { ContactPanel } from "./ContactPanel";

export default function Contact() {
  return (
    <section id="office-contact" className={styles.section} aria-labelledby="contact-heading">
      <ContactPanel headingId="contact-heading" variant="inline" />
    </section>
  );
}
