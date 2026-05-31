import { cloneElement, type ReactElement } from "react";

interface AccessibleControlProps {
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}

interface FieldProps {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  children: ReactElement<AccessibleControlProps>;
}

/** Form field wrapper (label + control + optional hint/error) per DESIGN.md §4.5. */
export function Field({ label, htmlFor, hint, error, children }: FieldProps) {
  const hintId = htmlFor ? `${htmlFor}-hint` : undefined;
  const errorId = htmlFor ? `${htmlFor}-error` : undefined;
  const describedBy = [
    children.props["aria-describedby"],
    error ? errorId : hint ? hintId : undefined,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className="field">
      <label className="field__label" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="field__control-wrapper">
        {cloneElement(children, {
          "aria-describedby": describedBy,
          "aria-invalid": error ? true : undefined,
        })}
      </div>
      {hint && !error ? (
        <p className="field__hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="field__error" id={errorId} role="alert" aria-live="polite">
          {error}
        </p>
      ) : null}
    </div>
  );
}
