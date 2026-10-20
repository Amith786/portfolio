import { useState } from "react";
import { journals } from "../../data/research";
import { conferences } from "../../data/conferences";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { JournalCard } from "./JournalCard";
import { ConferenceCard } from "./ConferenceCard";

type Tab = "journals" | "conferences";
type ConferenceView = "author" | "presenter";

export function Research() {
  const { t, language } = useLanguage();

  const [tab, setTab] = useState<Tab>("journals");
  const [conferenceView, setConferenceView] =
    useState<ConferenceView>("author");

  const isGerman = language === "de";

  const visibleConferences = conferences.filter(
    (entry) => entry.category === conferenceView
  );

  return (
    <section
      id="research"
      className="bg-paper py-24 lg:py-32"
    >
      <div className="container-edit">
        <SectionHeading
          title={t.research.heading}
          tone="light"
        />

        {/* =====================================================
            MAIN RESEARCH SELECTOR
            ===================================================== */}

        <Reveal className="mt-10">
          <div
            role="tablist"
            aria-label={
              isGerman
                ? "Forschungskategorien"
                : "Research categories"
            }
            className="inline-flex rounded-full border border-ink/15 p-1"
          >
            <button
              id="research-tab-journals"
              role="tab"
              aria-selected={tab === "journals"}
              aria-controls="research-panel-journals"
              onClick={() => setTab("journals")}
              className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                tab === "journals"
                  ? "bg-ink text-paper"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.research.journals}
            </button>

            <button
              id="research-tab-conferences"
              role="tab"
              aria-selected={tab === "conferences"}
              aria-controls="research-panel-conferences"
              onClick={() => setTab("conferences")}
              className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                tab === "conferences"
                  ? "bg-ink text-paper"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.research.conferences}
            </button>
          </div>
        </Reveal>

        {/* =====================================================
            JOURNALS
            ===================================================== */}

        {tab === "journals" && (
          <div
            id="research-panel-journals"
            role="tabpanel"
            aria-labelledby="research-tab-journals"
            className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {journals.map((entry) => (
              <JournalCard
                key={entry.id}
                entry={entry}
              />
            ))}
          </div>
        )}

        {/* =====================================================
            CONFERENCES
            ===================================================== */}

        {tab === "conferences" && (
          <div
            id="research-panel-conferences"
            role="tabpanel"
            aria-labelledby="research-tab-conferences"
            className="mt-10"
          >
            {/* Conference heading + selector */}

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow text-gold-dim">
                  {isGerman
                    ? "Konferenzaktivitäten"
                    : "Conference Activity"}
                </p>

                <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                  {conferenceView === "author"
                    ? isGerman
                      ? "Autor / Co-Autor"
                      : "Author / Co-author"
                    : isGerman
                    ? "Präsentationen von Forschungsarbeiten"
                    : "Research Paper Presentations"}
                </h3>
              </div>

              {/* Conference type switcher */}

              <div
                role="tablist"
                aria-label={
                  isGerman
                    ? "Konferenztyp"
                    : "Conference type"
                }
                className="flex w-fit shrink-0 rounded-full border border-ink/15 p-1"
              >
                <button
                  id="conference-tab-author"
                  role="tab"
                  aria-selected={conferenceView === "author"}
                  aria-controls="conference-panel-author"
                  onClick={() =>
                    setConferenceView("author")
                  }
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    conferenceView === "author"
                      ? "bg-ink text-paper"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {isGerman ? "Autor" : "Author"}
                </button>

                <button
                  id="conference-tab-presenter"
                  role="tab"
                  aria-selected={
                    conferenceView === "presenter"
                  }
                  aria-controls="conference-panel-presenter"
                  onClick={() =>
                    setConferenceView("presenter")
                  }
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    conferenceView === "presenter"
                      ? "bg-ink text-paper"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {isGerman
                    ? "Präsentator"
                    : "Presenter"}
                </button>
              </div>
            </div>

            {/* Conference cards */}

            <div
              id={`conference-panel-${conferenceView}`}
              role="tabpanel"
              aria-labelledby={`conference-tab-${conferenceView}`}
              className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {visibleConferences.length > 0 ? (
                visibleConferences.map((entry) => (
                  <ConferenceCard
                    key={entry.id}
                    entry={entry}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-ink/10 bg-paper-soft p-8 text-sm text-ink-muted">
                  {isGerman
                    ? "Derzeit sind keine Konferenzaktivitäten in dieser Kategorie verfügbar."
                    : "No conference activities are currently available in this category."}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}