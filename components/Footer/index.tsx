import Image from "next/image";
import ConsultationTrigger from "@/components/Consultation/ConsultationTrigger";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.wordmark}>
              <Image
                src="/images/rodemann-logo-footer.png"
                alt="RodeMann Infrastructures — Engineering the Future Today"
                width={674}
                height={370}
                className={styles.footerLogo}
              />
            </div>
            <p className={styles.legalName}>RodeMann Infrastructure B.V.</p>
            <p className={styles.tagline}>
              Road construction, earthworks, and large-scale logistics across Saudi Arabia, the
              Middle East, and international markets—delivered with operational discipline at
              programme scale.
            </p>
          </div>

          <nav aria-label="Company">
            <p className={styles.colTitle}>Company</p>
            <ul className={styles.links}>
              <li>
                <a href="#capabilities">Capabilities</a>
              </li>
              <li>
                <a href="#safety">Safety &amp; compliance</a>
              </li>
              <li>
                <ConsultationTrigger className={styles.linkTrigger}>Contact</ConsultationTrigger>
              </li>
            </ul>
          </nav>

          <nav aria-label="Projects">
            <p className={styles.colTitle}>Projects</p>
            <ul className={styles.links}>
              <li>
                <a href="#projects">Featured programmes</a>
              </li>
              <li>
                <a href="#projects">Highway &amp; earthworks</a>
              </li>
              <li>
                <a href="#projects">Bulk logistics yards</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <p className={styles.colTitle}>Services</p>
            <ul className={styles.links}>
              <li>
                <a href="#services">Road construction</a>
              </li>
              <li>
                <a href="#services">Earthworks</a>
              </li>
              <li>
                <a href="#services">Material supply</a>
              </li>
              <li>
                <a href="#services">Equipment rental &amp; logistics</a>
              </li>
              <li>
                <a href="#services">Drainage systems</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className={styles.colTitle}>Legal</p>
            <ul className={styles.links}>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </nav>

          <div>
            <p className={styles.colTitle}>Contact</p>
            <address className={styles.contactBlock}>
              Email:
              <br />
              <a href="mailto:office@rodemann-infra.com">office@rodemann-infra.com</a>
              <br />
              <br />
              Phone:
              <br />
              <a href="tel:+966112345678">+966 11 234 5678</a>
              <br />
              <br />
              Office:
              <br />
              King Fahd Road, Al Olaya District
              <br />
              Riyadh 12213, Saudi Arabia
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} RodeMann Infrastructure B.V. All rights reserved.
          </p>
          <p className={styles.meta}>Commercial registration &amp; VAT placeholders—update before launch.</p>
        </div>
      </div>
    </footer>
  );
}
