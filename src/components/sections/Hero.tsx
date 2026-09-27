import { useRef, useState, type MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../lib/LanguageContext";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const [glow, setGlow] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const hasPhoto = Boolean(profile.photo.src);

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() =>
        setGlow((g) => ({
          ...g,
          active: false,
        }))
      }
      className="relative overflow-hidden bg-paper pt-32 pb-20 lg:min-h-[calc(100vh-80px)] lg:pt-36 lg:pb-16"
    >
      {/* =====================================================
          CURSOR GOLD GLOW
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 hidden transition-opacity duration-500 [@media(pointer:fine)]:block"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `radial-gradient(
            480px circle at ${glow.x}% ${glow.y}%,
            rgba(198,154,62,0.10),
            transparent 70%
          )`,
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="container-edit relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:gap-20">

        {/* ===================================================
            LEFT — INTRODUCTION
        =================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-1"
        >
          {/* Eyebrow */}

          <motion.p
            variants={item}
            className="eyebrow text-gold-dim"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Main heading */}

          <motion.h1
            variants={item}
            className="mt-5 max-w-3xl font-display font-medium leading-[0.96] text-ink text-[clamp(3rem,7vw,6.4rem)]"
          >
            {t.hero.greeting}
            <br />

            <span className="text-glow">
              {profile.name}
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.heroSubtext}
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.cvUrl || "#contact"}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
            >
              {t.hero.downloadCv.toUpperCase()}
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-dim"
            >
              {t.hero.contactMe.toUpperCase()}
            </button>
          </motion.div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={profile.socials.github.url || "#contact"}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-ink-muted transition-colors hover:text-gold-dim"
            >
              <GithubIcon size={20} />
            </a>

            <a
              href={profile.socials.linkedin.url || "#contact"}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-ink-muted transition-colors hover:text-gold-dim"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href={
                profile.email
                  ? `mailto:${profile.email}`
                  : "#contact"
              }
              aria-label="Email"
              className="text-ink-muted transition-colors hover:text-gold-dim"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* ===================================================
            RIGHT — PREMIUM PORTRAIT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.95,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-2"
        >
          <div className="hero-portrait-wrap">

            {/* =============================================
                GOLD ORBIT
            ============================================= */}

            <div
              className="hero-orbit"
              aria-hidden="true"
            />

            {/* =============================================
                RIGHT GOLD LINE
            ============================================= */}

            <div
              className="hero-side-line"
              aria-hidden="true"
            />

            {/* =============================================
                GOLD DOT
            ============================================= */}

            <div
              className="hero-side-dot"
              aria-hidden="true"
            />

            {/* =============================================
                PORTRAIT CARD
            ============================================= */}

            <div className="hero-portrait-card">
              {hasPhoto ? (
                <img
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <User
                    size={72}
                    strokeWidth={1}
                    className="text-gold/60"
                  />
                </div>
              )}
            </div>

            {/* =============================================
                AI / DS BADGE
            ============================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hero-ai-badge motion-reduce:animate-none"
            >
              <span>
                AI ·
                <br />
                DS
              </span>
            </motion.div>

            {/* =============================================
                SCROLL
            ============================================= */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.15,
                duration: 0.8,
              }}
              className="hero-scroll"
            >
              <span className="hero-scroll-label">
                Scroll
              </span>

              <motion.span
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hero-scroll-arrow motion-reduce:animate-none"
              >
                ↓
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}