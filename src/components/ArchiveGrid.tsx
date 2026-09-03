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
      <div className="flex h-14 items-center gap-8 border-b border-border px-6 sm:h-16 sm:px-10">
        {FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setFilter(option.value)}
            className={`text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-200 sm:text-sm ${
              filter === option.value ? "text-primary" : "text-slate hover:text-navy"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-3">
        {visible.map((item, index) => (
          <Link key={`${item.projectSlug}-${index}`} href={`/work/${item.projectSlug}`} className="group block">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-2.5 flex items-baseline justify-between gap-3">
              <span className="border-b border-transparent text-xs font-medium uppercase tracking-[0.05em] text-navy transition-colors duration-200 group-hover:border-primary sm:text-sm">
                {item.projectTitle}
              </span>
              <span className="shrink-0 text-[11px] uppercase tracking-[0.05em] text-slate">
                {String(item.assetCount).padStart(2, "0")} {item.assetCount === 1 ? "Work" : "Works"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
