import type { ProjectAsset } from "@/types/project";
import { groupAssets, type AssetBlock } from "@/lib/projects";
import AssetFrame, { AssetGroup } from "./AssetFrame";

function blockLength(block: AssetBlock) {
  return block.kind === "single" ? 1 : block.assets.length;
}

export default function AssetStream({ assets }: { assets: ProjectAsset[] }) {
  const blocks = groupAssets(assets);

  const indexed = blocks.reduce<{ block: AssetBlock; startIndex: number }[]>((acc, block) => {
    const previous = acc[acc.length - 1];
    const startIndex = previous ? previous.startIndex + blockLength(previous.block) : 1;
    return [...acc, { block, startIndex }];
  }, []);

  return (
    <div className="flex flex-col gap-16 py-16 sm:gap-24 sm:py-24">
      {indexed.map(({ block, startIndex }, i) =>
        block.kind === "single" ? (
          <AssetFrame key={i} asset={block.asset} index={startIndex} />
        ) : (
          <AssetGroup key={i} block={block} startIndex={startIndex} />
        )
      )}
    </div>
  );
}
