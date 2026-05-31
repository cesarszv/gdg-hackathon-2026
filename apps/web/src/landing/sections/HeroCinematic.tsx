import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";
import { ScrollHint } from "../components/ScrollHint";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = "/video/hero.mp4";

export function HeroCinematic() {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useLayoutEffect(() => {
    if (reduced || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pin: true,
        },
      });
      tl.fromTo(".hero__presents", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1 })
        .to(".hero__presents", { opacity: 0, y: -24, duration: 1 }, ">0.4")
        .fromTo(
          ".hero__video-wrap",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 1 },
          ">0.2",
        )
        .to(".hero__video-wrap", { opacity: 0, scale: 0.96, duration: 1 }, ">1.5")
        .fromTo(
          ".hero__title-wrap",
          { opacity: 0, scale: 0.86, filter: "blur(8px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.4 },
          ">0.2",
        )
        .fromTo(".hero__tagline", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1 }, ">-0.2")
        .to(".hero__glow", { opacity: 1, duration: 1.4 }, 0);
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => {
      gsap.to(".hero__video-wrap", { opacity: 0, scale: 0.96, duration: 0.6, overwrite: true });
      gsap.fromTo(
        ".hero__title-wrap",
        { opacity: 0, scale: 0.86, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, delay: 0.3 },
      );
      gsap.fromTo(
        ".hero__tagline",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6 },
      );
      setIsPlaying(false);
    };
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  const handlePlay = () => {
    if (!videoRef.current) return;
    gsap.to(".hero__presents", { opacity: 0, duration: 0.3, overwrite: true });
    gsap.fromTo(
      ".hero__video-wrap",
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 0.6, overwrite: true },
    );
    videoRef.current.muted = false;
    videoRef.current.play().catch(() => {
      videoRef.current!.muted = true;
      setMuted(true);
      videoRef.current!.play();
    });
    setIsPlaying(true);
    setMuted(false);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <header className="hero" id="hero" ref={root}>
      <div className="hero__glow" aria-hidden="true" style={{ opacity: reduced ? 1 : undefined }} />
      {!reduced && (
        <p className="hero__presents">
          <b>HackHeroes</b>&nbsp; presenta&hellip;
        </p>
      )}
      {!reduced && (
        <div className="hero__video-wrap" aria-hidden="true">
          <video
            ref={videoRef}
            className="hero__video"
            src={VIDEO_SRC}
            muted
            playsInline
            preload="metadata"
            loop={false}
          />
          {!isPlaying && (
            <button
              type="button"
              className="hero__video-play"
              onClick={handlePlay}
              aria-label="Reproducir video con sonido"
            >
              <div className="hero__play-circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
            </button>
          )}
          {isPlaying && (
            <button
              type="button"
              className="hero__video-sound"
              onClick={toggleMute}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
            >
              {muted ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          )}
        </div>
      )}
      <div className="hero__title-wrap">
        <h1 className="hero__title">
          Green<span className="spark">Spark</span>
        </h1>
        <p className="hero__tagline">
          Plataforma de IA que convierte los residuos bioorganicos de Santa Cruz de la Sierra en decisiones energeticas medibles.
        </p>
      </div>
      <ScrollHint />
    </header>
  );
}
