"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
  className?: string;
}

export default function ProjectCard({
  project,
  index = 0,
  featured = false,
  className = "",
}: ProjectCardProps) {
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className={`group relative flex flex-col overflow-hidden rounded-[28px] border-2 border-navy/10 bg-canvas transition-colors duration-300 hover:border-navy/60 ${className}`}
    >
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: `${project.accent}22` }}
      >
        <div className={`relative w-full ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image
            src={project.image}
            alt={`${project.title} interface mockup`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-navy sm:text-[1.7rem]">
            {project.title}
          </h3>
          <span className="mt-1 flex h-9 w-9 shrink-0 -translate-x-1 items-center justify-center rounded-full border-2 border-navy/15 text-navy opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:border-navy group-hover:opacity-100">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 12L12 4M12 4H5M12 4V11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <p className="text-base leading-relaxed text-slate">{project.caption}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
