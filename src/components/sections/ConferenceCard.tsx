import { useState } from "react";
import { FileText, MapPin } from "lucide-react";
import type { ConferenceEntry } from "../../data/conferences";
import { Modal } from "../ui/Modal";

function Field({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs tracking-wide text-bone-muted/60">{label}</p>
      <p className="mt-1 text-sm text-bone-muted">{value || "To be added"}</p>
    </div>
  );
}

export function ConferenceCard({ entry }: { entry: ConferenceEntry }) {
  const [open, setOpen] = useState(false);
  const titleId = `conference-${entry.id}-title`;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="card-glow w-full rounded-2xl border border-ink/10 bg-paper-soft p-7 text-left shadow-card hover:border-gold/50 hover:shadow-gold-glow"
      >
        <div className="flex items-center gap-2 text-ink-muted">
          <span className="text-xs">{entry.presentationStatus}</span>
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
          Expand details →
        </span>
      </button>

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

        <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {entry.category === "author" && entry.authors && (
            <Field
              label="Authors"
              value={entry.authors.join(", ")}
            />
          )}

          <Field label="Role" value={entry.role} />
          <Field label="Venue" value={entry.venue} />
          <Field label="Date" value={entry.date} />
          <Field label="Location" value={entry.location} />
          <Field label="Status" value={entry.presentationStatus} />
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {entry.paperUrl && (
            <a
              href={entry.paperUrl}
              target="_blank"
              rel="noreferrer"
              className="tag-pill border-bone/20 text-bone hover:border-gold hover:text-gold-bright"
            >
              <FileText size={13} />
              Paper
            </a>
          )}

          {entry.certificateUrl && (
            <a
              href={entry.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="tag-pill border-bone/20 text-bone hover:border-gold hover:text-gold-bright"
            >
              <FileText size={13} />
              Certificate
            </a>
          )}
        </div>
      </Modal>
    </>
  );
}