import { useState } from "react";
import { ExternalLink, LayoutGrid } from "lucide-react";
import type { Project } from "../../data/projects";
import { useLanguage } from "../../lib/LanguageContext";
import { GithubIcon } from "../ui/BrandIcons";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import { ProjectModal } from "./ProjectModal";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const hasImage = Boolean(project.image);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="card-glow flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-bone/10 bg-void-soft hover:border-gold/50 hover:shadow-gold-glow"
      >
        <div className="aspect-[16/10] w-full">
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <PlaceholderImage
              icon={LayoutGrid}
              label={project.category}
              className="h-full w-full"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="eyebrow text-gold">{project.category}</p>

          <h3 className="mt-2 font-display text-xl leading-snug text-bone">
            {project.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-muted">
            {project.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="tag-pill border-bone/15 text-bone-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
              className="rounded-full bg-gold px-4 py-2 text-xs font-medium tracking-wide text-void transition-colors hover:bg-gold-bright"
            >
              {t.projects.readMore}
            </button>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="grid h-9 w-9 place-items-center rounded-full border border-bone/20 text-bone transition-colors hover:border-gold hover:text-gold"
              >
                <GithubIcon size={15} />
              </a>
            ) : null}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                onClick={(e) => e.stopPropagation()}
                className="grid h-9 w-9 place-items-center rounded-full border border-bone/20 text-bone transition-colors hover:border-gold hover:text-gold"
              >
                <ExternalLink size={15} />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <ProjectModal
        project={project}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}