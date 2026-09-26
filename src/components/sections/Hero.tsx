import { useRef, useState, type MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, User } from "lucide-react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../lib/LanguageContext";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
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
      className="relative overflow-hidden bg-paper pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Cursor glow */}
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

      <div className="container-edit relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        {/* =====================================================
            COPY — LEFT
        ===================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-1"
        >
          <motion.p variants={item} className="eyebrow text-gold-dim">
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display font-medium leading-[0.98] text-ink text-[clamp(2.75rem,7vw,5.5rem)]"
          >
            {t.hero.greeting}
            <br />
            <span className="text-glow">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted"
          >
            {profile.heroSubtext}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.cvUrl || "#contact"}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-gold hover:text-ink"
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
              className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:border-gold hover:text-gold-dim"
            >
              {t.hero.contactMe.toUpperCase()}
            </button>
          </motion.div>

          {/* Social links */}
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

        {/* =====================================================
            PORTRAIT — RIGHT
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative order-2 mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div
            className="relative aspect-[4/5] w-full bg-void-soft shadow-gold-glow"
            style={{
              borderRadius:
                "42% 58% 65% 35% / 45% 45% 55% 55%",
            }}
          >
            {hasPhoto ? (
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                className="h-full w-full object-cover"
                style={{
                  borderRadius:
                    "42% 58% 65% 35% / 45% 45% 55% 55%",
                }}
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center overflow-hidden"
                style={{
                  borderRadius:
                    "42% 58% 65% 35% / 45% 45% 55% 55%",
                }}
              >
                <User
                  size={72}
                  strokeWidth={1}
                  className="text-gold/60"
                />
              </div>
            )}
          </div>

          {/* Floating AI / DS badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 -left-4 grid h-24 w-24 place-items-center rounded-full border border-gold/40 bg-paper text-center shadow-lg motion-reduce:animate-none sm:-left-6"
          >
            <span className="font-display text-xs leading-tight text-ink">
              AI ·
              <br />
              DS
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-muted sm:flex"
      >
        <span className="eyebrow text-[0.65rem]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="motion-reduce:animate-none"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}