import { Section } from "@/components/ui/Section";
import { ProjectsClient } from "./ProjectsClient";

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      kicker="Projects"
      title="Things I've built."
      lead="Products, platforms, security tooling, open source and experiments. Different problems, one throughline: systems designed to last."
    >
      <ProjectsClient />
    </Section>
  );
}

export default Projects;
