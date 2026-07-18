import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import Doodle from "./Doodle";

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 sm:px-10 sm:py-32">
      <Doodle
        variant="circle"
        size={90}
        rotate={4}
        duration={11}
        className="absolute -left-2 top-8 hidden opacity-30 lg:block"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects that made an impact."
          description="A handful of Web3 products I've helped design, brand, and build from the ground up."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured={index === 0}
              className={index === 0 ? "sm:col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
