import ArchiveGrid from "@/components/ArchiveGrid";
import { getArchiveItems } from "@/lib/projects";

export default function Home() {
  const items = getArchiveItems();
  return <ArchiveGrid items={items} />;
}
