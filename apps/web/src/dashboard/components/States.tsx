/** Shared loading / empty / error placeholders for dashboard panels with clean inline SVGs. */

export function Skeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="skeleton" aria-busy="true">
      {Array.from({ length: rows }).map((_, i) => (
        <div className="skeleton__row" key={i} style={{ width: `${90 - i * 12}%` }} />
      ))}
    </div>
  );
}

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="placeholder">
      <div className="placeholder__icon-wrapper" aria-hidden="true">
        <svg
          className="placeholder__svg placeholder__svg--sprout"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 22h20" />
          <path d="M12 22V10c0-2.8 2.2-5 5-5a5 5 0 0 0-5-5V0" />
          <path d="M12 14a4 4 0 0 0-4 4v4h8v-4a4 4 0 0 0-4-4z" />
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="placeholder placeholder--error" role="alert">
      <div className="placeholder__icon-wrapper placeholder__icon-wrapper--error" aria-hidden="true">
        <svg
          className="placeholder__svg placeholder__svg--error"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <h3>Algo no salió bien</h3>
      <p>{message}</p>
      {onRetry ? (
        <button className="btn btn-secondary placeholder__retry" type="button" onClick={onRetry}>
          Reintentar
        </button>
      ) : null}
    </div>
  );
}
