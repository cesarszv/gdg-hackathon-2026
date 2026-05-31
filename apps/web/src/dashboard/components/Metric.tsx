/** A single numeric KPI rendered in JetBrains Mono with tabular-nums and soft forest glow. */
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
      <div className="metric__glow-inner" aria-hidden="true" />
      <div className="metric__value mono tabular">
        {display}
        {unit && value !== null && value !== undefined ? (
          <span className="metric__unit"> {unit}</span>
        ) : null}
      </div>
      <div className="metric__label">{label}</div>
    </div>
  );
}
