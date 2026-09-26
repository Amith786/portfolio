import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { profile } from "../../data/profile";
import { useLanguage } from "../../lib/LanguageContext";
import { useScrollSpy } from "../../lib/useScrollSpy";

const NAV_IDS = [
  "home",
  "about",
  "experience",
  "education",
  "research",
  "achievements",
  "projects",
  "contact",
];

type Theme = "light" | "dark";

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const activeId = useScrollSpy(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const navItems: { id: string; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "experience", label: t.nav.experience },
    { id: "education", label: t.nav.education },
    { id: "research", label: t.nav.research },
    { id: "achievements", label: t.nav.achievements },
    { id: "projects", label: t.nav.projects },
  ];

  const goTo = (id: string) => {
    setMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-ink/10 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-edit flex h-20 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => goTo("home")}
          className="flex shrink-0 items-center gap-3"
          aria-label="Go to top"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 font-display text-sm text-gold">
            {profile.initials}
          </span>

          <span className="hidden flex-col leading-[1.05] font-display text-[0.92rem] tracking-[0.08em] text-ink sm:flex">
            <span>AMITH</span>
            <span>ANAND</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goTo(item.id)}
                className={`group relative py-1 text-[0.8rem] tracking-wide transition-colors ${
                  activeId === item.id
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                    activeId === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Right Cluster */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Language */}
          <div className="flex items-center rounded-full border border-ink/15 p-0.5 text-[0.7rem] font-medium tracking-wide">
            {(["en", "de"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() =>
                  language !== lang ? toggleLanguage() : undefined
                }
                aria-pressed={language === lang}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  language === lang
                    ? "bg-ink text-paper"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink-muted transition-all hover:border-gold hover:text-gold"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Contact */}
          <button
            onClick={() => goTo("contact")}
            className="rounded-full bg-ink px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-paper transition-colors hover:bg-gold hover:text-ink"
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="grid h-10 w-10 place-items-center text-ink"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menu Toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-ink"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-b border-ink/10 bg-paper lg:hidden"
          >
            <ul className="container-edit flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => goTo(item.id)}
                    className={`w-full py-3 text-left font-display text-xl ${
                      activeId === item.id ? "text-gold" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <li className="mt-2 flex items-center justify-between border-t border-ink/10 pt-4">
                <div className="flex items-center gap-2">
                  {/* Language */}
                  <div className="flex items-center rounded-full border border-ink/15 p-0.5 text-xs font-medium">
                    {(["en", "de"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() =>
                          language !== lang ? toggleLanguage() : undefined
                        }
                        className={`rounded-full px-3 py-1.5 ${
                          language === lang
                            ? "bg-ink text-paper"
                            : "text-ink-muted"
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Theme */}
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink-muted"
                    aria-label={
                      theme === "dark"
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                  >
                    {theme === "dark" ? (
                      <Sun size={16} />
                    ) : (
                      <Moon size={16} />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => goTo("contact")}
                  className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}