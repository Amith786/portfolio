import type { ReactNode } from "react";
import { ExternalLink, LayoutGrid } from "lucide-react";
import type { Project } from "../../data/projects";
import { journals } from "../../data/research";
import { useLanguage } from "../../lib/LanguageContext";
import { GithubIcon } from "../ui/BrandIcons";
import { Modal } from "../ui/Modal";
import { PlaceholderImage } from "../ui/PlaceholderImage";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

function DetailBlock({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mt-6">
      <p className="eyebrow text-gold">{heading}</p>
      <div className="mt-2 leading-relaxed text-bone-muted">{children}</div>
    </div>
  );
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t } = useLanguage();
  const titleId = `project-${project.id}-title`;
  const relatedPaper = journals.find((j) => j.id === project.researchPaperId);

  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy={titleId}>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <PlaceholderImage icon={LayoutGrid} label={project.category} className="h-full w-full" />
        )}
      </div>

      <p className="eyebrow mt-6 text-gold">{project.category}</p>
      <h3 id={titleId} className="mt-2 font-display text-2xl leading-snug text-bone sm:text-3xl">
        {project.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill border-bone/20 text-bone-muted">
            {tag}
          </span>
        ))}
      </div>

      <DetailBlock heading="Overview">{project.detail.overview}</DetailBlock>
      {project.detail.problem && <DetailBlock heading="Problem">{project.detail.problem}</DetailBlock>}
      {project.detail.solution && <DetailBlock heading="Solution">{project.detail.solution}</DetailBlock>}
      {project.detail.architecture && (
        <DetailBlock heading="Architecture">{project.detail.architecture}</DetailBlock>
      )}
      {project.detail.methodology && (
        <DetailBlock heading="Methodology">{project.detail.methodology}</DetailBlock>
      )}
      {project.detail.datasetInfo && (
        <DetailBlock heading="Dataset">{project.detail.datasetInfo}</DetailBlock>
      )}

      {project.detail.metrics && project.detail.metrics.length > 0 && (
        <div className="mt-6">
          <p className="eyebrow text-gold">Results</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.detail.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-bone/15 bg-void p-4 text-center"
              >
                <p className="font-display text-xl text-gold-bright">{metric.value}</p>
                <p className="mt-1 text-[0.7rem] tracking-wide text-bone-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedPaper && (
        <p className="mt-6 text-sm text-bone-muted/80">
          Related research: <span className="text-bone">{relatedPaper.title}</span> — see the
          Research section for details.
        </p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="tag-pill border-bone/25 text-bone hover:border-gold hover:text-gold-bright"
          >
            <GithubIcon size={13} /> {t.projects.github}
          </a>
        ) : (
          <span className="tag-pill border-bone/10 text-bone-muted/50">
            <GithubIcon size={13} /> {t.projects.github}: to be added
          </span>
        )}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="tag-pill border-bone/25 text-bone hover:border-gold hover:text-gold-bright"
          >
            <ExternalLink size={13} /> {t.projects.liveDemo}
          </a>
        ) : null}
      </div>
    </Modal>
  );
}
