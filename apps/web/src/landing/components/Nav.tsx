import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${solid ? "nav--solid" : ""}`}>
      <div className="container nav__inner">
        <a href="#hero" className="nav__brand">
          <span className="nav__spark" aria-hidden>&#9889;</span> GreenSpark
        </a>
        <div className="nav__links">
          <Link to="/app" className="btn btn-primary">Abrir consola</Link>
        </div>
      </div>
    </nav>
  );
}
