import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  subtitle?: string;
}

export function SectionHeading({
  title,
  tone = "light",
  align = "left",
  subtitle,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <h2
        className={`font-display font-medium uppercase tracking-tight text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] ${
          isDark ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-16 bg-gold ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={`mt-5 max-w-lg text-base leading-relaxed ${
            isDark ? "text-bone-muted" : "text-ink-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
