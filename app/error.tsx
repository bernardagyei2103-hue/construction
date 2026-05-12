"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.text}>
        An unexpected error occurred while loading this page. You can try again or return to the
        homepage.
      </p>
      {error.digest ? (
        <p className={styles.code} title="Error reference">
          Reference: {error.digest}
        </p>
      ) : null}
      <div className={styles.actions}>
        <button type="button" className={styles.button} onClick={() => reset()}>
          Try again
        </button>
        <Link href="/" className={styles.link}>
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
