"use client";

import { FormEvent, useMemo, useState } from "react";
import ConsultationTrigger from "@/components/Consultation/ConsultationTrigger";
import styles from "./Contact.module.css";

type FormState = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budgetRange: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  projectType: "",
  budgetRange: "",
  details: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.company.trim()) errors.company = "Company is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.budgetRange) errors.budgetRange = "Select a budget range.";
  if (!values.details.trim()) errors.details = "Please outline your project.";
  else if (values.details.trim().length < 24)
    errors.details = "Provide a bit more detail (minimum 24 characters).";
  return errors;
}

export function ContactPanel({
  headingId,
  variant = "modal",
}: {
  headingId: string;
  variant?: "inline" | "modal";
}) {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const projectTypes = useMemo(
    () =>
      [
        "Road construction",
        "Earthworks",
        "Material supply",
        "Equipment rental & logistics",
        "Drainage systems",
        "Multi-discipline programme",
      ] as const,
    [],
  );

  const budgetRanges = useMemo(
    () =>
      [
        "Under SAR 10M",
        "SAR 10M – 50M",
        "SAR 50M – 200M",
        "SAR 200M – 500M",
        "SAR 500M+",
        "Prefer not to say",
      ] as const,
    [],
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
      setValues(initial);
    }, 650);
  }

  const officeAside = (
    <aside className={styles.side} aria-label="Riyadh office">
      <div className={styles.sidePanel}>
        <h3 className={styles.sideTitle}>Riyadh office</h3>
        <dl className={styles.sideList}>
          <div>
            <dt>Email</dt>
            <dd>
              <a href="mailto:office@rodemann-infra.com">office@rodemann-infra.com</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+966112345678">+966 11 234 5678</a>
            </dd>
          </div>
          <div>
            <dt>Office</dt>
            <dd>
              King Fahd Road, Al Olaya District
              <br />
              Riyadh 12213, Saudi Arabia
            </dd>
          </div>
        </dl>
      </div>
      <p className={styles.mapNote}>
        {variant === "inline"
          ? "For tenders, joint-venture documentation, or logistics-intensive programmes, schedule a consultation—commercial packs are issued under controlled disclosure."
          : "For tenders, joint-venture documentation, or logistics-intensive programmes, request consultation via the form—commercial packs are issued under controlled disclosure."}
      </p>
    </aside>
  );

  if (variant === "inline") {
    return (
      <div className={styles.panelOuter}>
        <div className={styles.inlineShell}>
          <div className={styles.inlineLead}>
            <h2 id={headingId} className={styles.introTitle}>
              Office contact
            </h2>
            <p className={styles.introCopy}>
              Share scope, logistics constraints, and target milestones when you are ready. A
              RodeMann director will respond with routing guidance and the appropriate construction
              leads within two business days.
            </p>
            <ConsultationTrigger className={styles.scheduleBtn}>
              Schedule consultation
            </ConsultationTrigger>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.panelOuter}>
      <div className={styles.inner}>
        <div>
          <h2 id={headingId} className={styles.introTitle}>
            Request consultation
          </h2>
          <p className={styles.introCopy}>
            Share scope, logistics constraints, and target milestones. A RodeMann director will
            respond with routing guidance and the appropriate construction leads within two business
            days.
          </p>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            aria-describedby={submitted ? "contact-success" : undefined}
          >
            <div className={styles.grid}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(ev) => setValues((v) => ({ ...v, name: ev.target.value }))}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  required
                />
                <div id="err-name" className={styles.errorText} role="alert">
                  {errors.name ?? ""}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={(ev) => setValues((v) => ({ ...v, company: ev.target.value }))}
                  aria-invalid={errors.company ? true : undefined}
                  aria-describedby={errors.company ? "err-company" : undefined}
                  required
                />
                <div id="err-company" className={styles.errorText} role="alert">
                  {errors.company ?? ""}
                </div>
              </div>
              <div className={`${styles.field} ${styles.fullRow}`}>
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(ev) => setValues((v) => ({ ...v, email: ev.target.value }))}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  required
                />
                <div id="err-email" className={styles.errorText} role="alert">
                  {errors.email ?? ""}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-type">Project type</label>
                <select
                  id="contact-type"
                  name="projectType"
                  value={values.projectType}
                  onChange={(ev) =>
                    setValues((v) => ({ ...v, projectType: ev.target.value }))
                  }
                  aria-invalid={errors.projectType ? true : undefined}
                  aria-describedby={errors.projectType ? "err-type" : undefined}
                  required
                >
                  <option value="">Select…</option>
                  {projectTypes.map((pt) => (
                    <option key={pt} value={pt}>
                      {pt}
                    </option>
                  ))}
                </select>
                <div id="err-type" className={styles.errorText} role="alert">
                  {errors.projectType ?? ""}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-budget">Budget range</label>
                <select
                  id="contact-budget"
                  name="budgetRange"
                  value={values.budgetRange}
                  onChange={(ev) =>
                    setValues((v) => ({ ...v, budgetRange: ev.target.value }))
                  }
                  aria-invalid={errors.budgetRange ? true : undefined}
                  aria-describedby={errors.budgetRange ? "err-budget" : undefined}
                  required
                >
                  <option value="">Select…</option>
                  {budgetRanges.map((br) => (
                    <option key={br} value={br}>
                      {br}
                    </option>
                  ))}
                </select>
                <div id="err-budget" className={styles.errorText} role="alert">
                  {errors.budgetRange ?? ""}
                </div>
              </div>
              <div className={`${styles.field} ${styles.fullRow}`}>
                <label htmlFor="contact-details">Project details</label>
                <textarea
                  id="contact-details"
                  name="details"
                  value={values.details}
                  onChange={(ev) => setValues((v) => ({ ...v, details: ev.target.value }))}
                  aria-invalid={errors.details ? true : undefined}
                  aria-describedby={errors.details ? "err-details" : undefined}
                  required
                />
                <div id="err-details" className={styles.errorText} role="alert">
                  {errors.details ?? ""}
                </div>
              </div>
            </div>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.submit} disabled={pending}>
                {pending ? "Sending inquiry…" : "Submit inquiry"}
              </button>
            </div>
            {submitted ? (
              <p id="contact-success" className={styles.success} role="status">
                Thank you. Your inquiry has been recorded for routing. This demonstration form does
                not transmit data to a server—wire your endpoint when deploying.
              </p>
            ) : null}
          </form>
        </div>

        {officeAside}
      </div>
    </div>
  );
}
