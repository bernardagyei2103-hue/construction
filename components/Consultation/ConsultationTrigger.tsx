"use client";

import { type ReactNode } from "react";
import { useConsultation } from "./ConsultationContext";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ConsultationTrigger({ children, className }: Props) {
  const { open } = useConsultation();
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
