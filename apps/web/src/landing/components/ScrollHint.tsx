/** Animated "scroll" chevron shown in the hero. Purely decorative. */
export function ScrollHint() {
  return (
    <div className="scroll-hint" aria-hidden>
      <span>scrollea</span>
      <span className="scroll-hint__chevron">&#8964;</span>
    </div>
  );
}
