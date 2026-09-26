import { GraduationCap, Languages } from "lucide-react";
import { education, languageStudy } from "../../data/education";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Education() {
  const { t } = useLanguage();
  const [degree, ...rest] = education;

  return (
    <section id="education" className="bg-void py-24 lg:py-32">
      <div className="container-edit">
        <SectionHeading title={t.education.heading} tone="dark" />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured degree card */}
          <Reveal className="lg:col-span-2">
            <div className="card-glow h-full rounded-2xl border border-gold/30 bg-void-soft p-8 sm:p-10 hover:shadow-gold-glow">
              <GraduationCap size={28} strokeWidth={1.25} className="text-gold" />
              <h3 className="mt-5 font-display text-2xl leading-snug text-bone sm:text-3xl">
                {degree.degree}
              </h3>
              <p className="mt-2 text-bone-muted">{degree.institution}</p>
              {degree.affiliation && (
                <p className="text-sm text-bone-muted/70">{degree.affiliation}</p>
              )}
              {degree.detail && (
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-muted">
                  {degree.detail}
                </p>
              )}
            </div>
          </Reveal>

          {/* Language card */}
          {languageStudy.map((lang) => (
            <Reveal key={lang.id}>
              <div className="card-glow h-full rounded-2xl border border-bone/15 bg-void-soft p-8 hover:border-gold/40 hover:shadow-gold-glow">
                <Languages size={26} strokeWidth={1.25} className="text-gold" />
                <h3 className="mt-5 font-display text-xl text-bone">{lang.name}</h3>
                <p className="mt-2 text-bone-muted">{lang.institution}</p>
                <p className="mt-3 text-sm text-bone-muted/80">{lang.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Prior schooling */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {rest.map((entry, i) => (
            <Reveal key={entry.id} delayMs={i * 80}>
              <div className="card-glow rounded-2xl border border-bone/10 bg-void-soft/60 p-7 hover:border-gold/30">
                <h4 className="font-display text-lg text-bone">{entry.degree}</h4>
                <p className="mt-1 text-sm text-bone-muted">{entry.institution}</p>
                {entry.detail && (
                  <p className="mt-2 text-xs tracking-wide text-bone-muted/70">{entry.detail}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
