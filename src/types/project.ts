/** How a single asset is composed within a project's case-study page. */
export type AssetLayout =
  | "full" // edge-to-edge, full viewport width
  | "wide" // full container width, short aspect
  | "portrait" // narrow column
  | "small" // small, surrounded by whitespace
  | "offset-left" // large, pushed left, metadata fills the right
  | "offset-right" // large, pushed right, metadata fills the left
  | "two-column" // paired side-by-side with the next asset of the same layout
  | "grid"; // grouped 3+ across, with the next assets of the same layout

/** Coarse grouping used by the homepage archive filter. */
export type ArchiveCategory = "sports-design" | "illustration";

export interface ProjectAsset {
  /** Path under /public/projects, e.g. "/projects/mzt-skopje/mzt-champions-celebration.png". */
  image: string;
  alt: string;
  layout: AssetLayout;
  archiveCategory: ArchiveCategory;
  /** Tiny uppercase label, e.g. "MATCHDAY", "FIXTURE ANNOUNCEMENT". */
  context?: string;
  /** Short descriptor, e.g. "MZT Skopje vs. Rabotnički". */
  caption?: string;
  /** e.g. "12 Oct 2025" or "2025". */
  date?: string;
}

export interface Project {
  slug: string;
  /** Project / brand-world title, e.g. "MZT Skopje". */
  title: string;
  client?: string;
  /** e.g. "2025–2026" or "2025". */
  year: string;
  /** e.g. ["Sports Design", "Social Media", "Matchday Graphics"]. */
  categories: string[];
  /** Short, design-focused case-study intro. Not corporate copy. */
  description: string;
  /** Primary image, used as this project's representative image where one is needed. */
  cover: string;
  /** The full case-study asset stream, in display order. First entry doubles as the opening visual. */
  assets: ProjectAsset[];
}
