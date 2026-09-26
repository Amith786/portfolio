import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  icon?: LucideIcon;
  label?: string;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Renders a quiet, abstract placeholder (fine diagonal hairlines + an icon)
 * instead of a stock photo. Swap in a real <img> by passing a project/photo
 * `image` path from the relevant data file — components fall back to this
 * automatically when that path is empty.
 */
export function PlaceholderImage({
  icon: Icon = ImageIcon,
  label,
  className = "",
  tone = "dark",
}: PlaceholderImageProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden ${
        isDark ? "bg-void-soft" : "bg-paper-soft"
      } ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={`diag-${label ?? "p"}`}
            width="14"
            height="14"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="14"
              stroke={isDark ? "#26221A" : "#E4D9BE"}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#diag-${label ?? "p"})`} />
      </svg>
      <Icon
        size={26}
        strokeWidth={1.25}
        className={isDark ? "text-gold/70 relative" : "text-gold-dim relative"}
      />
      {label && (
        <span
          className={`eyebrow relative ${isDark ? "text-bone-muted" : "text-ink-muted"}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
