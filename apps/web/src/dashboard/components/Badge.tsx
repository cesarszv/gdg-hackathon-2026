import type { ReactNode } from "react";

type Tone = "success" | "warning" | "error" | "neutral";

const TONE_CLASS: Record<Tone, string> = {
  success: "badge--success",
  warning: "badge--warning",
  error: "badge--error",
  neutral: "badge--neutral",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: ReactNode }) {
  return (
    <span className={`badge ${TONE_CLASS[tone]}`}>
      <span className="badge__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

/** Maps domain states to badge tones per DESIGN.md §4.8. */
export function evidenceTone(state: string): Tone {
  if (state === "MEDIDO") return "success";
  if (state === "META_EXPLORATORIA") return "warning";
  return "neutral"; // SIMULADO
}

export function stabilityTone(stability: string): Tone {
  if (stability === "alta") return "success";
  if (stability === "media") return "warning";
  return "error";
}
