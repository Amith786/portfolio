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
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>("journals");
  const [conferenceView, setConferenceView] =
    useState<ConferenceView>("author");

  const visibleConferences = conferences.filter(
    (entry) => entry.category === conferenceView
  );

  return (
    <section id="research" className="bg-paper py-24 lg:py-32">
      <div className="container-edit">
        <SectionHeading title={t.research.heading} tone="light" />

        {/* Main Research Selector */}
        <Reveal className="mt-10">
          <div
            role="tablist"
            aria-label="Research categories"
            className="inline-flex rounded-full border border-ink/15 p-1"
          >
            {(
              [
                ["journals", t.research.journals],
                ["conferences", t.research.conferences],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
                  tab === key
                    ? "bg-ink text-paper"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* JOURNALS */}
        {tab === "journals" && (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {journals.map((entry) => (
              <JournalCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}

        {/* CONFERENCES */}
        {tab === "conferences" && (
          <div className="mt-10">

            {/* Conference selector */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-gold-dim">
                  Conference Activity
                </p>

                <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
                  {conferenceView === "author"
                    ? "Author / Co-author"
                    : "Research Paper Presentations"}
                </h3>
              </div>

              {/* RIGHT SIDE SWITCHER */}
              <div
                role="tablist"
                aria-label="Conference type"
                className="flex shrink-0 rounded-full border border-ink/15 p-1"
              >
                <button
                  role="tab"
                  aria-selected={conferenceView === "author"}
                  onClick={() => setConferenceView("author")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    conferenceView === "author"
                      ? "bg-ink text-paper"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  Author
                </button>

                <button
                  role="tab"
                  aria-selected={conferenceView === "presenter"}
                  onClick={() => setConferenceView("presenter")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    conferenceView === "presenter"
                      ? "bg-ink text-paper"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  Presenter
                </button>
              </div>
            </div>

            {/* Conference cards */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {visibleConferences.map((entry) => (
                <ConferenceCard
                  key={entry.id}
                  entry={entry}
                />
              ))}
            </div>

          </div>
        )}
      </div>
    </section>
  );
}