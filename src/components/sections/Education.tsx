import { GraduationCap, Languages } from "lucide-react";
import { education, languageStudy } from "../../data/education";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Education() {
  const { t, language } = useLanguage();

  const [degree, ...rest] = education;

  const isGerman = language === "de";

  /* =========================================================
     DEGREE CONTENT
     ========================================================= */

  const degreeData = {
    degree: isGerman
      ? "B.Tech — Künstliche Intelligenz und Data Science"
      : degree.degree,

    institution: degree.institution,

    affiliation: isGerman
      ? "Der Anna University angeschlossen"
      : degree.affiliation,

    detail: isGerman
      ? degree.detail?.replace(".", ",")
      : degree.detail,
  };

  /* =========================================================
     SCHOOL CONTENT
     ========================================================= */

  const getSchoolData = (
    entry: (typeof education)[number]
  ) => {
    if (!isGerman) {
      return {
        degree: entry.degree,
        institution: entry.institution,
        detail: entry.detail,
      };
    }

    if (entry.id === "hss") {
      return {
        degree: "Höhere Sekundarstufe",
        institution: entry.institution,
        detail: "Abgeschlossen 2022 · 86,25 %",
      };
    }

    if (entry.id === "school") {
      return {
        degree: "10. Klasse",
        institution: entry.institution,
        detail: "Abgeschlossen 2020 · 93,33 %",
      };
    }

    return {
      degree: entry.degree,
      institution: entry.institution,
      detail: entry.detail,
    };
  };

  return (
    <section
      id="education"
      className="bg-void py-24 lg:py-32"
    >
      <div className="container-edit">
        <SectionHeading
          title={t.education.heading}
          tone="dark"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* =====================================================
              FEATURED DEGREE CARD
              ===================================================== */}

          <Reveal className="lg:col-span-2">
            <div className="card-glow h-full rounded-2xl border border-gold/30 bg-void-soft p-8 hover:shadow-gold-glow sm:p-10">
              <GraduationCap
                size={28}
                strokeWidth={1.25}
                className="text-gold"
              />

              <h3 className="mt-5 font-display text-2xl leading-snug text-bone sm:text-3xl">
                {degreeData.degree}
              </h3>

              <p className="mt-2 text-bone-muted">
                {degreeData.institution}
              </p>

              {degreeData.affiliation && (
                <p className="text-sm text-bone-muted/70">
                  {degreeData.affiliation}
                </p>
              )}

              {degreeData.detail && (
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone-muted">
                  {degreeData.detail}
                </p>
              )}
            </div>
          </Reveal>

          {/* =====================================================
              LANGUAGE CARD
              ===================================================== */}

          {languageStudy.map((lang) => (
            <Reveal key={lang.id}>
              <div className="card-glow h-full rounded-2xl border border-bone/15 bg-void-soft p-8 hover:border-gold/40 hover:shadow-gold-glow">
                <Languages
                  size={26}
                  strokeWidth={1.25}
                  className="text-gold"
                />

                <h3 className="mt-5 font-display text-xl text-bone">
                  {isGerman ? "Deutsch A1" : lang.name}
                </h3>

                <p className="mt-2 text-bone-muted">
                  {lang.institution}
                </p>

                <p className="mt-3 text-sm text-bone-muted/80">
                  {isGerman
                    ? "A1 abgeschlossen · A2 in Bearbeitung"
                    : lang.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* =====================================================
            PRIOR SCHOOLING
            ===================================================== */}

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {rest.map((entry, i) => {
            const school = getSchoolData(entry);

            return (
              <Reveal
                key={entry.id}
                delayMs={i * 80}
              >
                <div className="card-glow rounded-2xl border border-bone/10 bg-void-soft/60 p-7 hover:border-gold/30">
                  <h4 className="font-display text-lg text-bone">
                    {school.degree}
                  </h4>

                  <p className="mt-1 text-sm text-bone-muted">
                    {school.institution}
                  </p>

                  {school.detail && (
                    <p className="mt-2 text-xs tracking-wide text-bone-muted/70">
                      {school.detail}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}