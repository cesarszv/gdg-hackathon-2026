import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";

const VIDEO_SRC = "/video/hero.mp4";

export function DemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => setIsPlaying(false);
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setMuted(false);
      })
      .catch(() => {
        video.muted = true;
        video.play().then(() => {
          setIsPlaying(true);
          setMuted(true);
        });
      });
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  };

  return (
    <section className="section section--alt" id="demo">
      <div className="container">
        <Reveal>
          <p className="section__eyebrow">04 — Demo funcional</p>
          <h2 className="section__title">La Spark Console en acción</h2>
          <p className="section__lead">
            Así se ve GreenSpark por dentro: el usuario ingresa un escenario MFC, la IA compara
            configuraciones y el agente explica el resultado en lenguaje claro.
          </p>
        </Reveal>

        <div className="demo__player">
          <video
            ref={videoRef}
            className="demo__video"
            src={VIDEO_SRC}
            muted
            playsInline
            preload="metadata"
          />

          {!isPlaying && (
            <button
              type="button"
              className="demo__play-btn"
              onClick={handlePlay}
              aria-label="Reproducir demo"
            >
              <div className="demo__play-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
              <span className="demo__play-label">Ver la demo</span>
            </button>
          )}

          {isPlaying && (
            <div className="demo__controls">
              <button
                type="button"
                className="demo__ctrl-btn"
                onClick={handlePause}
                aria-label="Pausar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              </button>
              <button
                type="button"
                className="demo__ctrl-btn"
                onClick={toggleMute}
                aria-label={muted ? "Activar sonido" : "Silenciar"}
              >
                {muted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="demo__footer">
          <p className="demo__disclaimer">
            &#9888; <strong>[SIMULADO]</strong> Los escenarios mostrados son simulaciones basadas en
            literatura científica. No representan mediciones de un reactor físico construido por el
            equipo.
          </p>
          <Link to="/app" className="btn btn-primary demo__cta">
            Probar la Spark Console en vivo &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
