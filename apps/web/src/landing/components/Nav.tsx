import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <nav className={`nav nav--solid${visible ? " nav--visible" : ""}`}>
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
