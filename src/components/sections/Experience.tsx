import { useId, useState } from "react";
import { FileText } from "lucide-react";
import { experience } from "../../data/experience";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Modal } from "../ui/Modal";

export function Experience() {
  const { t, language } = useLanguage();
  const uniqueId = useId();
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experience)[number] | null
  >(null);

  const getExperienceContent = (
    entry: (typeof experience)[number]
  ) => {
    if (language === "de") {
      switch (entry.id) {
        case "research-assistant":
          return {
            role: "Wissenschaftlicher Mitarbeiter",
            organization:
              "Forschungs- und Entwicklungsabteilung (R&D), Dhaanish Ahmed College of Engineering",
            description:
              "Mitarbeit an wissenschaftlichen Forschungsarbeiten im Bereich Künstliche Intelligenz und Data Science, einschließlich Literaturrecherche, Datenanalyse, Experimenten mit Machine-Learning-Modellen, Manuskripterstellung, Forschungsdokumentation und Entwicklung forschungsorientierter Projekte.",
            tags: [
              "Forschung",
              "Künstliche Intelligenz",
              "Data Science",
              "Machine Learning",
              "Datenanalyse",
              "Wissenschaftliches Schreiben",
            ],
          };

        case "yuva-intern":
          return {
            role: "Junior Data Analyst – Business Analytics mit Python",
            organization: "YuvaIntern",
            description:
              "Sechswöchiges Remote-Praktikum mit Schwerpunkt auf Business Analytics mit Python. Arbeit mit Datenanalysetechniken zur Untersuchung von Datensätzen, Erkennung von Mustern und Trends sowie Unterstützung datenbasierter Geschäftserkenntnisse.",
            tags: [
              "Python",
              "Datenanalyse",
              "Business Analytics",
              "Datenvisualisierung",
            ],
          };

        case "techoctanet":
          return {
            role: "Praktikant – Python- und Java-Entwicklung",
            organization: "TechOctanet Services Pvt. Ltd.",
            description:
              "Praktische Erfahrung in der Python- und Java-Entwicklung mit Schwerpunkt auf Programmierung, Anwendungsentwicklung und der Umsetzung technischer Aufgaben.",
            tags: [
              "Python",
              "Java",
              "Softwareentwicklung",
              "Programmierung",
            ],
          };

        case "codsoft":
          return {
            role: "Praktikant für Künstliche Intelligenz",
            organization: "CodSoft",
            description:
              "Praktikum mit Schwerpunkt auf Künstlicher Intelligenz und praktischen Machine-Learning-Aufgaben. Entwicklung und Untersuchung von KI-basierten Lösungen und praktische Anwendung von Konzepten des maschinellen Lernens.",
            tags: [
              "Künstliche Intelligenz",
              "Machine Learning",
              "Python",
              "Datenanalyse",
            ],
          };

        default:
          return {
            role: entry.role,
            organization: entry.organization,
            description: entry.description,
            tags: entry.tags,
          };
      }
    }

    return {
      role: entry.role,
      organization: entry.organization,
      description: entry.description,
      tags: entry.tags,
    };
  };

  return (
    <section id="experience" className="bg-paper py-24 lg:py-32">
      <div className="container-edit">
        <SectionHeading title={t.experience.heading} tone="light" />

        <div className="relative mt-16 lg:mt-24">
          {/* Timeline spine */}
          <div
            className="absolute left-4 top-2 z-0 h-[calc(100%-1rem)] w-px bg-ink/20 lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="relative z-10 space-y-14 lg:space-y-4">
            {experience.map((entry, i) => {
              const isEven = i % 2 === 0;
              const content = getExperienceContent(entry);

              return (
                <li
                  key={entry.id}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-x-16 lg:py-8"
                >
                  {/* Timeline dot */}
                  <span
                    className="absolute left-4 top-1.5 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-gold bg-paper lg:left-1/2"
                    aria-hidden="true"
                  />

                  <div className={isEven ? "lg:order-1" : "lg:order-2"} />

                  <Reveal
                    className={`relative z-10 pl-10 lg:pl-0 ${
                      isEven
                        ? "lg:order-2 lg:pl-16"
                        : "lg:order-1 lg:pr-16 lg:text-right"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedExperience(entry)}
                      className="card-glow w-full cursor-pointer rounded-2xl border border-ink/10 bg-paper-soft p-6 text-left shadow-card transition-all hover:border-gold/50 hover:shadow-gold-glow"
                    >
                      <p className="eyebrow text-gold-dim">
                        {entry.period}
                      </p>

                      <h3 className="mt-2 font-display text-xl text-ink">
                        {content.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-ink-muted">
                        {content.organization}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                        {content.description}
                      </p>

                      {content.tags && (
                        <div
                          className={`mt-4 flex flex-wrap gap-2 ${
                            isEven ? "" : "lg:justify-end"
                          }`}
                        >
                          {content.tags.map((tag) => (
                            <span
                              key={tag}
                              className="tag-pill border-ink/15 text-ink-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {entry.certificates &&
                        entry.certificates.length > 0 && (
                          <div
                            className={`mt-5 flex items-center gap-2 text-xs font-medium text-gold-dim ${
                              isEven ? "" : "lg:justify-end"
                            }`}
                          >
                            <FileText size={14} />

                            {entry.certificates.length}{" "}
                            {entry.certificates.length === 1
                              ? language === "de"
                                ? "Zertifikat"
                                : "Certificate"
                              : language === "de"
                              ? "Zertifikate"
                              : "Certificates"}

                            <span>→</span>
                          </div>
                        )}
                    </button>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Experience details modal */}
      {selectedExperience && (
        <Modal
          isOpen={Boolean(selectedExperience)}
          onClose={() => setSelectedExperience(null)}
          labelledBy={`experience-${selectedExperience.id}-${uniqueId}-title`}
        >
          {(() => {
            const content = getExperienceContent(selectedExperience);

            return (
              <>
                <p className="eyebrow text-gold">
                  {selectedExperience.period}
                </p>

                <h3
                  id={`experience-${selectedExperience.id}-${uniqueId}-title`}
                  className="mt-3 font-display text-2xl leading-snug text-bone sm:text-3xl"
                >
                  {content.role}
                </h3>

                <p className="mt-2 text-bone-muted">
                  {content.organization}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-bone-muted">
                  {content.description}
                </p>

                {content.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {content.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill border-bone/15 text-bone-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {selectedExperience.certificates &&
                  selectedExperience.certificates.length > 0 && (
                    <div className="mt-8">
                      <p className="eyebrow text-gold">
                        {language === "de"
                          ? "Zertifikate"
                          : "Certificates"}
                      </p>

                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {selectedExperience.certificates.map(
                          (certificate) => (
                            <a
                              key={certificate.title}
                              href={certificate.image}
                              target="_blank"
                              rel="noreferrer"
                              className="group overflow-hidden rounded-xl border border-bone/10 bg-void-soft transition-colors hover:border-gold/50"
                            >
                              <div className="aspect-[4/3] overflow-hidden">
                                <img
                                  src={certificate.image}
                                  alt={certificate.title}
                                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                              </div>

                              <div className="p-3">
                                <p className="text-xs leading-relaxed text-bone-muted">
                                  {certificate.title}
                                </p>

                                <p className="mt-1 text-xs text-gold">
                                  {language === "de"
                                    ? "Zertifikat ansehen →"
                                    : "View Certificate →"}
                                </p>
                              </div>
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </>
            );
          })()}
        </Modal>
      )}
    </section>
  );
}