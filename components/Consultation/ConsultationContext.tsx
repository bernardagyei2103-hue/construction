"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { ContactPanel } from "@/components/Contact/ContactPanel";
import styles from "./Consultation.module.css";

type ConsultationValue = {
  open: () => void;
  close: () => void;
};

const ConsultationContext = createContext<ConsultationValue | null>(null);

export function useConsultation(): ConsultationValue {
  const ctx = useContext(ConsultationContext);
  if (!ctx) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return ctx;
}

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  const close = useCallback(() => setOpen(false), []);
  const openModal = useCallback(() => {
    document.body.dataset.consultationModal = "open";
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ open: openModal, close }), [openModal, close]);

  useEffect(() => {
    function onPopState() {
      if (typeof window !== "undefined" && window.location.hash !== "#contact") {
        setOpen(false);
      }
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}#contact`,
    );

    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onEscape);

    return () => {
      delete document.body.dataset.consultationModal;
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onEscape);
      if (window.location.hash === "#contact") {
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
      }
    };
  }, [open, close]);

  useEffect(() => {
    function resolveHash() {
      const shouldOpen = window.location.hash === "#contact";
      if (shouldOpen) {
        document.body.dataset.consultationModal = "open";
      } else {
        delete document.body.dataset.consultationModal;
      }
      setOpen(shouldOpen);
    }

    resolveHash();
    window.addEventListener("hashchange", resolveHash);
    return () => window.removeEventListener("hashchange", resolveHash);
  }, []);

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div className={styles.root} role="presentation">
            <button
              type="button"
              className={styles.backdrop}
              aria-label="Close consultation form"
              onClick={close}
            />
            <div
              className={styles.sheet}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <button type="button" className={styles.close} onClick={close} aria-label="Close">
                ×
              </button>
              <div className={styles.sheetInner}>
                <ContactPanel headingId={titleId} variant="modal" />
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      {overlay}
    </ConsultationContext.Provider>
  );
}
