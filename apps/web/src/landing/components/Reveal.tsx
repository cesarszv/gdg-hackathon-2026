import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  /** Stagger between direct children, in seconds. 0 = animate as one block. */
  stagger?: number;
  y?: number;
  delay?: number;
  className?: string;
}

/** Fade + translate-up on scroll-enter. With reduced motion the content renders
 *  statically (no opacity:0 start), so it is never hidden. */
export function Reveal({ children, stagger = 0, y = 28, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;
    const targets = stagger > 0 ? Array.from(ref.current.children) : ref.current;
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.8,
        delay,
        ease: "power2.out",
        stagger: stagger > 0 ? stagger : 0,
        scrollTrigger: { trigger: ref.current, start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, [reduced, stagger, y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
