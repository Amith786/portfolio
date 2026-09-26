import { useState } from "react";
import {
  ExternalLink,
  FileText,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Certification } from "../../data/certifications";
import { Modal } from "../ui/Modal";

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const certificateImages =
    certification.images && certification.images.length > 0
      ? certification.images
      : certification.image
        ? [certification.image]
        : [];

  const titleId = `certification-${certification.id}-title`;

  const nextImage = () => {
    if (certificateImages.length <= 1) return;

    setActiveImage((current) =>
      current === certificateImages.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    if (certificateImages.length <= 1) return;

    setActiveImage((current) =>
      current === 0 ? certificateImages.length - 1 : current - 1
    );
  };

  const handleOpen = () => {
    setActiveImage(0);
    setOpen(true);
  };

  return (
    <>
      {/* Certification Card */}
      <button
        type="button"
        onClick={handleOpen}
        className="card-glow flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper-soft text-left shadow-card transition-all hover:border-gold/50 hover:shadow-gold-glow"
      >
        {/* Certificate Preview */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
          {certificateImages.length > 0 ? (
            <img
              src={certificateImages[0]}
              alt={certification.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <Award size={42} className="text-ink/30" />
            </div>
          )}

          {/* Multiple image indicator */}
          {certificateImages.length > 1 && (
            <div className="absolute right-3 top-3 rounded-full bg-void/80 px-3 py-1 text-xs font-medium text-bone backdrop-blur-sm">
              {certificateImages.length} images
            </div>
          )}

          {/* Expired badge */}
          {certification.expired && (
            <div className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-bone backdrop-blur-sm">
              Expired
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="flex flex-1 flex-col p-6">
          <p className="eyebrow text-gold">{certification.date}</p>

          <h3 className="mt-2 font-display text-xl leading-snug text-ink">
            {certification.name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {certification.issuer}
          </p>

          {certification.skills && certification.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {certification.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="tag-pill border-ink/15 text-ink-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto pt-5">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-gold-dim">
              <FileText size={14} />
              View Certificate →
            </span>
          </div>
        </div>
      </button>

      {/* Certificate Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        labelledBy={titleId}
      >
        <div>
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-gold">{certification.date}</p>

              <h3
                id={titleId}
                className="mt-3 font-display text-2xl leading-snug text-bone sm:text-3xl"
              >
                {certification.name}
              </h3>

              <p className="mt-2 text-sm text-bone-muted">
                {certification.issuer}
              </p>
            </div>

            {certification.expired && (
              <span className="tag-pill border-red-400/40 text-red-300">
                Expired
              </span>
            )}
          </div>

          {/* Certificate Image */}
          {certificateImages.length > 0 && (
            <div className="mt-7">
              <div className="relative overflow-hidden rounded-xl border border-bone/10 bg-void-soft">
                <img
                  src={certificateImages[activeImage]}
                  alt={`${certification.name} certificate ${activeImage + 1}`}
                  className="max-h-[65vh] w-full object-contain"
                />

                {certificateImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous certificate"
                      className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-void/80 text-bone backdrop-blur-sm transition-colors hover:bg-gold hover:text-void"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next certificate"
                      className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-void/80 text-bone backdrop-blur-sm transition-colors hover:bg-gold hover:text-void"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Image counter */}
              {certificateImages.length > 1 && (
                <div className="mt-3 flex justify-center gap-2">
                  {certificateImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`View certificate image ${index + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeImage === index
                          ? "w-6 bg-gold"
                          : "w-2 bg-bone/30 hover:bg-bone/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Details */}
          <div className="mt-7 space-y-5">
            {certification.credentialId && (
              <div>
                <p className="eyebrow text-gold">Credential ID</p>
                <p className="mt-2 break-all text-sm text-bone-muted">
                  {certification.credentialId}
                </p>
              </div>
            )}

            {certification.description && (
              <div>
                <p className="eyebrow text-gold">About</p>
                <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                  {certification.description}
                </p>
              </div>
            )}

            {certification.skills && certification.skills.length > 0 && (
              <div>
                <p className="eyebrow text-gold">Skills</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tag-pill border-bone/15 text-bone-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-4 py-2 text-xs font-medium text-bone transition-colors hover:border-gold hover:text-gold"
              >
                <ExternalLink size={13} />
                Verify Credential
              </a>
            )}

            {certificateImages.length > 0 && (
              <a
                href={certificateImages[activeImage]}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-4 py-2 text-xs font-medium text-bone transition-colors hover:border-gold hover:text-gold"
              >
                <FileText size={13} />
                Open Certificate
              </a>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}