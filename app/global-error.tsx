"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./globals.css";

/** Renders when the root layout fails; must define html and body (Next.js requirement). */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#f7f8f6",
          color: "#0f1720",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", margin: "0 0 0.75rem" }}>Application error</h1>
          <p style={{ margin: "0 0 1.25rem", color: "#394956", lineHeight: 1.6 }}>
            The site hit a critical error. Try reloading the page; if it persists, clear your cache or
            return to the homepage.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                fontWeight: 700,
                padding: "0.75rem 1.25rem",
                background: "#f2c409",
                color: "#0a0e14",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{ fontWeight: 600, color: "#3d5a73", alignSelf: "center" }}
            >
              Homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
