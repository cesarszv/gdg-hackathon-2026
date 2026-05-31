import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#problema", label: "Problema" },
  { href: "#demo", label: "Demo" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#proximos-pasos", label: "Próximos pasos" },
];

export function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cta = document.getElementById("cta");
    if (!cta) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`nav${visible ? " nav--visible" : ""}`} aria-label="Navegación principal">
      <div className="container nav__inner">
        <a href="#hero" className="nav__brand">
          <span className="nav__spark" aria-hidden>&#9889;</span> GreenSpark
        </a>
        <div className="nav__links">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="nav__link">
              {label}
            </a>
          ))}
          <Link to="/app" className="btn btn-primary">Abrir consola</Link>
        </div>
      </div>
    </nav>
  );
}
