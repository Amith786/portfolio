import { useState, type ComponentType } from "react";
import { ExternalLink, FileText, Quote } from "lucide-react";
import type { JournalEntry } from "../../data/research";
import { GithubIcon } from "../ui/BrandIcons";
import { Modal } from "../ui/Modal";

const statusStyles: Record<JournalEntry["status"], string> = {
  "With Editor": "border-amber-500/50 text-amber-600",
  "Peer Review": "border-slate/50 text-slate-bright",
  "Transfer Completed": "border-blue-500/50 text-blue-600",
  Published: "border-emerald-500/50 text-emerald-600",
};

function DetailLink({
  href,
  icon: Icon,
  label,
}: {
  href?: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="tag-pill border-ink/20 text-ink transition-colors hover:border-gold hover:text-gold-dim"
    >
      <Icon size={13} /> {label}
    </a>
  );
}

export function JournalCard({ entry }: { entry: JournalEntry }) {
  const [open, setOpen] = useState(false);
  const titleId = `journal-${entry.id}-title`;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="card-glow w-full rounded-2xl border border-ink/10 bg-paper-soft p-7 text-left shadow-card hover:border-gold/50 hover:shadow-gold-glow"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className={`tag-pill ${statusStyles[entry.status]}`}>
            {entry.status}
          </span>

          <span className="text-xs text-ink-muted">
            {entry.year}
          </span>
        </div>

        <h3 className="mt-4 font-display text-xl leading-snug text-ink sm:text-2xl">
          {entry.title}
        </h3>

        <p className="mt-2 text-sm text-ink-muted">
          {entry.authors.join(", ")}
        </p>

        <p className="mt-2 text-sm text-ink-muted">
          {entry.journal}
        </p>

        <span className="mt-5 inline-block text-xs font-medium tracking-wide text-gold-dim">
          View research details →
        </span>
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        labelledBy={titleId}
      >
        <span className={`tag-pill ${statusStyles[entry.status]}`}>
          {entry.status}
        </span>

        <h3
          id={titleId}
          className="mt-4 font-display text-2xl leading-snug text-bone sm:text-3xl"
        >
          {entry.title}
        </h3>

        <p className="mt-3 text-sm text-bone-muted">
          {entry.authors.join(", ")}
        </p>

        <p className="mt-1 text-sm text-bone-muted/70">
          {entry.journal}
        </p>

        <div className="mt-6">
          <p className="eyebrow text-gold">Latest Status</p>

          <p className="mt-2 leading-relaxed text-bone-muted">
            {entry.status}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <DetailLink
            href={entry.doi}
            icon={ExternalLink}
            label="DOI"
          />

          <DetailLink
            href={entry.publisherUrl}
            icon={ExternalLink}
            label="Publisher"
          />

          <DetailLink
            href={entry.pdfUrl}
            icon={FileText}
            label="PDF"
          />

          <DetailLink
            href={entry.githubUrl}
            icon={GithubIcon}
            label="GitHub"
          />

          <DetailLink
            href={entry.bibtex}
            icon={Quote}
            label="BibTeX"
          />
        </div>
      </Modal>
    </>
  );
}