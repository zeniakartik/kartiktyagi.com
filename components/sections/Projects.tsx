import { Section } from "@/components/ui/Section";
import { ProjectsClient } from "./ProjectsClient";

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      kicker="Projects"
      title="Things I've built."
    >
      <ProjectsClient />
    </Section>
  );
}

export default Projects;
