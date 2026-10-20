import { useId, type ReactNode } from "react";
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

function DetailBlock({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6">
      <p className="eyebrow text-gold">{heading}</p>
      <div className="mt-2 leading-relaxed text-bone-muted">
        {children}
      </div>
    </div>
  );
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const { t, language } = useLanguage();
  const uniqueId = useId();

  const titleId = `project-${project.id}-${uniqueId}-title`;

  const relatedPaper = journals.find(
    (journal) => journal.id === project.researchPaperId,
  );

  const isGerman = language === "de";

  const labels = {
    overview: isGerman ? "Überblick" : "Overview",
    problem: isGerman ? "Problemstellung" : "Problem",
    solution: isGerman ? "Lösung" : "Solution",
    architecture: isGerman ? "Architektur" : "Architecture",
    methodology: isGerman ? "Methodik" : "Methodology",
    dataset: isGerman ? "Datensatz" : "Dataset",
    results: isGerman ? "Ergebnisse" : "Results",
    relatedResearch: isGerman
      ? "Verwandte Forschung"
      : "Related Research",
    viewResearch: isGerman
      ? "Im Forschungsbereich ansehen →"
      : "View in Research section →",
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      labelledBy={titleId}
    >
      <div className="overflow-hidden rounded-xl border border-bone/10">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="aspect-[16/9] h-full w-full object-cover"
          />
        ) : (
          <PlaceholderImage
            icon={LayoutGrid}
            label={project.category}
            className="aspect-[16/9] w-full"
          />
        )}
      </div>

      <p className="eyebrow mt-6 text-gold">
        {project.category}
      </p>

      <h3
        id={titleId}
        className="mt-2 font-display text-2xl leading-snug text-bone sm:text-3xl"
      >
        {project.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tag-pill border-bone/20 text-bone-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <DetailBlock heading={labels.overview}>
        {project.detail.overview}
      </DetailBlock>

      {project.detail.problem && (
        <DetailBlock heading={labels.problem}>
          {project.detail.problem}
        </DetailBlock>
      )}

      {project.detail.solution && (
        <DetailBlock heading={labels.solution}>
          {project.detail.solution}
        </DetailBlock>
      )}

      {project.detail.architecture && (
        <DetailBlock heading={labels.architecture}>
          {project.detail.architecture}
        </DetailBlock>
      )}

      {project.detail.methodology && (
        <DetailBlock heading={labels.methodology}>
          {project.detail.methodology}
        </DetailBlock>
      )}

      {project.detail.datasetInfo && (
        <DetailBlock heading={labels.dataset}>
          {project.detail.datasetInfo}
        </DetailBlock>
      )}

      {project.detail.metrics &&
        project.detail.metrics.length > 0 && (
          <div className="mt-8">
            <p className="eyebrow text-gold">
              {labels.results}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.detail.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-bone/15 bg-void p-4 text-center"
                >
                  <p className="font-display text-xl text-gold-bright">
                    {metric.value}
                  </p>

                  <p className="mt-1 text-[0.7rem] tracking-wide text-bone-muted">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      {project.detail.screenshots &&
        project.detail.screenshots.length > 0 && (
          <div className="mt-8">
            <p className="eyebrow text-gold">
              {isGerman ? "Screenshots" : "Screenshots"}
            </p>

            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {project.detail.screenshots.map(
                (screenshot, index) => (
                  <img
                    key={`${screenshot}-${index}`}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full rounded-xl border border-bone/10 object-cover"
                  />
                ),
              )}
            </div>
          </div>
        )}

      {relatedPaper && (
        <div className="mt-8 rounded-xl border border-bone/10 bg-void-soft p-5">
          <p className="eyebrow text-gold">
            {labels.relatedResearch}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-bone-muted">
            <span className="text-bone">
              {relatedPaper.title}
            </span>
          </p>

          <a
            href="#research"
            onClick={onClose}
            className="mt-3 inline-flex text-sm font-medium text-gold transition-colors hover:text-gold-bright"
          >
            {labels.viewResearch}
          </a>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tag-pill border-bone/25 text-bone transition-colors hover:border-gold hover:text-gold-bright"
          >
            <GithubIcon size={13} />
            {t.projects.github}
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tag-pill border-bone/25 text-bone transition-colors hover:border-gold hover:text-gold-bright"
          >
            <ExternalLink size={13} />
            {t.projects.liveDemo}
          </a>
        )}
      </div>
    </Modal>
  );
}