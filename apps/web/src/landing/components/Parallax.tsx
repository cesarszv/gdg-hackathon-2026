import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  /** Total vertical travel in px across the element's scroll span. Negative moves up. */
  amount?: number;
  className?: string;
}

/** A layer whose vertical position is continuously linked to scroll (scrubbed). */
export function Parallax({ children, amount = -80, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: -amount / 2 },
        {
          y: amount / 2,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, ref);
    return () => ctx.revert();
  }, [reduced, amount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
