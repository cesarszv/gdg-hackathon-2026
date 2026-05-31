import { Reveal } from "../components/Reveal";

const MEMBERS = [
  {
    name: "Cesar Sebastian Zambrana Ventura",
    photo: "/team/cesar-zambrana.jpg",
    photoPosition: "center 42%",
  },
  {
    name: "Emanuel Justiniano Peralta",
    photo: "/team/emanuel-justiniano.jpeg",
    photoPosition: "center 16%",
  },
  {
    name: "Fabian Serrano Catari",
    photo: "/team/fabian-serrano.jpg",
    photoPosition: "center 24%",
  },
  {
    name: "Juan David Mercado Montenegro",
    photo: "/team/juan-mercado.jpg",
    photoPosition: "center 18%",
  },
  {
    name: "Raquel Sahonero Salas",
    photo: "/team/raquel-sahonero.jpeg",
    photoPosition: "center 20%",
  },
  {
    name: "Thiago Andre Moreno Velasco",
    photo: "/team/thiago-moreno.jpg",
    photoPosition: "center 24%",
  },
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
            Seis personas de Santa Cruz de la Sierra usando IA para convertir residuos en
            decisiones energeticas medibles.
          </p>
        </Reveal>

        <Reveal stagger={0.1} className="team__grid">
          {MEMBERS.map(({ name, photo, photoPosition }) => (
            <div className="member" key={name}>
              <div className={`member__avatar ${photo ? "member__avatar--photo" : ""}`}>
                {photo ? (
                  <img
                    className="member__photo"
                    src={photo}
                    alt={`Retrato de ${name}`}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: photoPosition }}
                  />
                ) : (
                  <span aria-hidden="true">{initials(name)}</span>
                )}
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
