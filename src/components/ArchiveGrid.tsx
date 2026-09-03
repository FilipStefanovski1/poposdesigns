"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ArchiveCategory } from "@/types/project";
import type { ArchiveItem } from "@/lib/projects";

const FILTERS: { label: string; value: ArchiveCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Sports Design", value: "sports-design" },
  { label: "Illustration", value: "illustration" },
];

export default function ArchiveGrid({ items }: { items: ArchiveItem[] }) {
  const [filter, setFilter] = useState<ArchiveCategory | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.archiveCategory === filter)),
    [items, filter]
  );

  return (
    <div>
      <div className="flex h-14 items-center gap-6 border-b border-border px-6 sm:h-16 sm:px-10">
        {FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setFilter(option.value)}
            className={`relative py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-200 sm:text-sm ${
              filter === option.value ? "text-navy" : "text-slate hover:text-navy"
            }`}
          >
            {option.label}
            {filter === option.value ? (
              <span className="absolute -bottom-px left-0 h-[2px] w-full bg-primary" />
            ) : null}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-3">
        {visible.map((item, index) => (
          <Link
            key={`${item.projectSlug}-${index}`}
            href={`/work/${item.projectSlug}`}
            className="group relative block aspect-[4/5] overflow-hidden border border-border bg-mist/40 transition-colors duration-200 hover:border-primary"
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />

            <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-navy/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <path d="M3.5 3V1.75C3.5 1.34 3.84 1 4.25 1H10.25C10.66 1 11 1.34 11 1.75V7.75C11 8.16 10.66 8.5 10.25 8.5H9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {item.assetCount} {item.assetCount === 1 ? "Design" : "Designs"}
            </span>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent p-4 pt-12">
              <div>
                <span className="block text-sm font-semibold text-white">{item.projectTitle}</span>
                <span className="block text-[11px] uppercase tracking-[0.08em] text-white/70">
                  {item.projectCategory} · {item.year}
                </span>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:border-white">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
