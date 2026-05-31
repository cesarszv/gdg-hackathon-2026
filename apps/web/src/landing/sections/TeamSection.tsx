import { Reveal } from "../components/Reveal";

const MEMBERS = [
  "Cesar Sebastian Zambrana Ventura",
  "Emanuel Justiniano Peralta",
  "Fabian Serrano Catari",
  "Juan David Mercado Montenegro",
  "Raquel Sahonero Salas",
  "Thiago Andre Moreno Velasco",
];

function initials(name: string): string {
  const parts = name.split(" ").filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

/** Team HackHeroes — 3 + 3 grid, cards rise and settle with stagger. */
export function TeamSection() {
  return (
    <section className="section" id="equipo">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">05 — El equipo</p>
          <h2 className="section__title">HackHeroes</h2>
          <p className="section__lead">
            Seis personas construyendo economia circular medible para Santa Cruz de la Sierra.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="team__grid">
          {MEMBERS.map((name) => (
            <div className="member" key={name}>
              <div className="member__avatar" aria-hidden>
                {initials(name)}
              </div>
              <div className="member__name">{name}</div>
              <div className="member__role">Equipo HackHeroes</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
