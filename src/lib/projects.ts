import { projects } from "@/data/projects";
import type { ArchiveCategory, ProjectAsset } from "@/types/project";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}

export type AssetBlock =
  | { kind: "single"; asset: ProjectAsset }
  | { kind: "group"; layout: "two-column" | "grid"; assets: ProjectAsset[] };

/** Groups consecutive "two-column" / "grid" assets so they render together. */
export function groupAssets(assets: ProjectAsset[]): AssetBlock[] {
  const blocks: AssetBlock[] = [];
  let i = 0;
  while (i < assets.length) {
    const asset = assets[i];
    if (asset.layout === "two-column" || asset.layout === "grid") {
      const group: ProjectAsset[] = [asset];
      let j = i + 1;
      while (j < assets.length && assets[j].layout === asset.layout) {
        group.push(assets[j]);
        j++;
      }
      blocks.push({ kind: "group", layout: asset.layout, assets: group });
      i = j;
    } else {
      blocks.push({ kind: "single", asset });
      i++;
    }
  }
  return blocks;
}

export interface ArchiveItem {
  image: string;
  alt: string;
  archiveCategory: ArchiveCategory;
  projectTitle: string;
  projectSlug: string;
  projectCategory: string;
  year: string;
}

/**
 * Flattens every project's assets into one interleaved list for the
 * homepage archive. Round-robin across projects rather than grouped by
 * client, so the grid reads as a body of individual outputs.
 */
export function getArchiveItems(): ArchiveItem[] {
  const queues = projects.map((project) => ({ project, assets: [...project.assets] }));
  const items: ArchiveItem[] = [];
  let remaining = queues.reduce((sum, q) => sum + q.assets.length, 0);

  while (remaining > 0) {
    for (const queue of queues) {
      const asset = queue.assets.shift();
      if (!asset) continue;
      items.push({
        image: asset.image,
        alt: asset.alt,
        archiveCategory: asset.archiveCategory,
        projectTitle: queue.project.title,
        projectSlug: queue.project.slug,
        projectCategory: queue.project.categories[0] ?? "",
        year: queue.project.year,
      });
      remaining--;
    }
  }

  return items;
}
