import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

/** Number that scrubs from 0 to `value` as it scrolls into view. With reduced
 *  motion it simply renders the final, formatted value. */
export function Counter({ value, decimals = 0, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const format = (n: number) =>
    n.toLocaleString("es-BO", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  useLayoutEffect(() => {
    if (reduced || !ref.current) {
      if (ref.current) ref.current.textContent = format(value) + suffix;
      return;
    }
    const node = ref.current;
    const obj = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: "power1.out",
        scrollTrigger: { trigger: node, start: "top 85%" },
        onUpdate: () => {
          node.textContent = format(obj.n) + suffix;
        },
      });
    });
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, value, decimals, suffix]);

  return <span ref={ref} className={className}>{format(reduced ? value : 0) + suffix}</span>;
}
