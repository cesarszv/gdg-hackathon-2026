/** A single numeric KPI rendered in JetBrains Mono (DESIGN.md §3.2 "Dato numerico"). */
export function Metric({
  label,
  value,
  unit,
}: {
  label: string;
  value: string | number | null | undefined;
  unit?: string;
}) {
  const display = value === null || value === undefined ? "—" : value;
  return (
    <div className="metric">
      <div className="metric__value mono">
        {display}
        {unit && value !== null && value !== undefined ? <span className="metric__unit"> {unit}</span> : null}
      </div>
      <div className="metric__label">{label}</div>
    </div>
  );
}
