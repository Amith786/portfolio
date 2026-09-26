import { projects } from "../../data/projects";
import { useLanguage } from "../../lib/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-paper py-24 lg:py-32">
      <div className="container-edit">
        <SectionHeading title={t.projects.heading} tone="light" />
        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delayMs={(i % 3) * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
