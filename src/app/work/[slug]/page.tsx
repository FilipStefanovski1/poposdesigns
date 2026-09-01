import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getProjectBySlug, getNextProject } from "@/lib/projects";
import AssetStream from "@/components/AssetStream";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Popo.Designs`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const nextProject = getNextProject(slug);

  return (
    <>
      <article className="pb-8 pt-10 sm:pt-14">
        <div className="flex flex-col gap-6 px-6 sm:px-10 lg:px-16">
          <Link
            href="/"
            className="w-fit border-b border-transparent text-sm font-semibold text-slate transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            &larr; Back to work
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate">
              <span>{project.categories.join(" / ")}</span>
              <span className="h-1 w-1 bg-slate" />
              <span>{project.year}</span>
            </div>
            <h1 className="max-w-xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-4xl">
              {project.title}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-slate">
              {project.description}
            </p>
          </div>
        </div>

        <AssetStream assets={project.assets} />
      </article>

      <div className="border-t border-border px-6 py-14 sm:px-10 lg:px-16">
        <Link href={`/work/${nextProject.slug}`} className="group flex items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              Next Project
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight text-navy transition-colors duration-200 group-hover:text-primary sm:text-3xl">
              {nextProject.title}
            </span>
          </div>
          <span className="text-2xl text-slate transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary">
            &rarr;
          </span>
        </Link>
      </div>
    </>
  );
}
