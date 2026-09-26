import type { ReactNode } from "react";
import { useReveal } from "../../lib/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "span";
}

/** Fades + rises an element into view once, the first time it enters the viewport. */
export function Reveal({ children, className = "", delayMs = 0, as = "div" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
