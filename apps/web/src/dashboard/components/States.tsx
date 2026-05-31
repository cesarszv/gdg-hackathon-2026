/** Shared loading / empty / error placeholders for dashboard panels. */

export function Skeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="skeleton" aria-busy>
      {Array.from({ length: rows }).map((_, i) => (
        <div className="skeleton__row" key={i} style={{ width: `${90 - i * 12}%` }} />
      ))}
    </div>
  );
}

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="placeholder">
      <div className="placeholder__icon" aria-hidden>🌱</div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="placeholder placeholder--error">
      <div className="placeholder__icon" aria-hidden>⚠️</div>
      <h3>Algo no salio bien</h3>
      <p>{message}</p>
      {onRetry ? (
        <button className="btn btn-secondary" onClick={onRetry} style={{ marginTop: 16 }}>
          Reintentar
        </button>
      ) : null}
    </div>
  );
}
