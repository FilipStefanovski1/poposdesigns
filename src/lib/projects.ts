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
 * One tile per project for the homepage archive (its cover image), rather
 * than one tile per individual asset. A project with many similar designs
 * (e.g. MZT Skopje's matchday graphics) still gets a single entry here;
 * the full set lives on its /work/[slug] case-study page.
 */
export function getArchiveItems(): ArchiveItem[] {
  return projects.map((project) => ({
    image: project.cover,
    alt: project.title,
    archiveCategory: project.archiveCategory,
    projectTitle: project.title,
    projectSlug: project.slug,
    projectCategory: project.categories[0] ?? "",
    year: project.year,
  }));
}
