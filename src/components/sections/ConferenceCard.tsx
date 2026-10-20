import { useId, useState } from "react";
import { FileText, MapPin } from "lucide-react";
import type { ConferenceEntry } from "../../data/conferences";
import { useLanguage } from "../../lib/LanguageContext";
import { Modal } from "../ui/Modal";

function Field({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <p className="text-xs tracking-wide text-bone-muted/60">
        {label}
      </p>

      <p className="mt-1 text-sm text-bone-muted">
        {value || "To be added"}
      </p>
    </div>
  );
}

export function ConferenceCard({
  entry,
}: {
  entry: ConferenceEntry;
}) {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  const isGerman = language === "de";

  const uniqueId = useId();
  const titleId = `conference-${entry.id}-${uniqueId}-title`;

  const translatedRole = (() => {
    if (!isGerman) return entry.role;

    switch (entry.role) {
      case "Co-author":
        return "Co-Autor";

      case "Presenter":
        return "Präsentator";

      case "Author & Presenter":
        return "Autor & Präsentator";

      default:
        return entry.role;
    }
  })();

  const translatedStatus = (() => {
    if (!isGerman) return entry.presentationStatus;

    switch (entry.presentationStatus) {
      case "Research Paper Presented":
        return "Forschungsarbeit präsentiert";

      case "Published":
        return "Veröffentlicht";

      default:
        return entry.presentationStatus;
    }
  })();

  return (
    <>
      {/* =====================================================
          CONFERENCE CARD
          ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-controls={titleId}
        className="card-glow w-full rounded-2xl border border-ink/10 bg-paper-soft p-7 text-left shadow-card hover:border-gold/50 hover:shadow-gold-glow"
      >
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="text-xs">
            {translatedStatus}
          </span>
        </div>

        <h3 className="mt-4 font-display text-xl leading-snug text-ink sm:text-2xl">
          {entry.paperTitle}
        </h3>

        <p className="mt-2 text-sm text-ink-muted">
          {entry.conferenceTitle}
        </p>

        {(entry.venue || entry.date) && (
          <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-muted">
            <MapPin size={13} />

            {[entry.venue, entry.location, entry.date]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}

        <span className="mt-5 inline-block text-xs font-medium tracking-wide text-gold-dim">
          {isGerman
            ? "Details anzeigen →"
            : "Expand details →"}
        </span>
      </button>

      {/* =====================================================
          CONFERENCE MODAL
          ===================================================== */}

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        labelledBy={titleId}
      >
        <h3
          id={titleId}
          className="font-display text-2xl leading-snug text-bone sm:text-3xl"
        >
          {entry.paperTitle}
        </h3>

        <p className="mt-2 text-bone-muted">
          {entry.conferenceTitle}
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entry.category === "author" &&
            entry.authors && (
              <Field
                label={isGerman ? "Autoren" : "Authors"}
                value={entry.authors.join(", ")}
              />
            )}

          <Field
            label={isGerman ? "Rolle" : "Role"}
            value={translatedRole}
          />

          <Field
            label={
              isGerman
                ? "Veranstaltungsort"
                : "Venue"
            }
            value={entry.venue}
          />

          <Field
            label={isGerman ? "Datum" : "Date"}
            value={entry.date}
          />

          <Field
            label={isGerman ? "Ort" : "Location"}
            value={entry.location}
          />

          <Field
            label={isGerman ? "Status" : "Status"}
            value={translatedStatus}
          />
        </div>

        {/* =================================================
            PAPER / CERTIFICATE LINKS
            ================================================= */}

        <div className="mt-7 flex flex-wrap gap-2.5">
          {entry.paperUrl && (
            <a
              href={entry.paperUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="tag-pill border-bone/20 text-bone hover:border-gold hover:text-gold-bright"
            >
              <FileText size={13} />
              {isGerman
                ? "Publikation"
                : "Paper"}
            </a>
          )}

          {entry.certificateUrl && (
            <a
              href={entry.certificateUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) =>
                event.stopPropagation()
              }
              className="tag-pill border-bone/20 text-bone hover:border-gold hover:text-gold-bright"
            >
              <FileText size={13} />
              {isGerman
                ? "Zertifikat"
                : "Certificate"}
            </a>
          )}
        </div>
      </Modal>
    </>
  );
}