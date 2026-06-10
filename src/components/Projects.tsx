import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionTitle eyebrow="03 / Selected work" title="Ideas built around business value." description="A growing body of work shaped by everyday problems, product thinking, and a drive to make useful things." />
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}
