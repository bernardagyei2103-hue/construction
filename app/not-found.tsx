import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested is not part of the RodeMann Infrastructure site.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>
        The resource you requested is unavailable or has been relocated.
      </p>
      <Link href="/" className={styles.link}>
        Return to homepage
      </Link>
    </div>
  );
}
