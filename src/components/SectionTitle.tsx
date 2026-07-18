"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-4 ${alignment} ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate">
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-slate sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
