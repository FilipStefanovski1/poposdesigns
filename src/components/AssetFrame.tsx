import MediaFrame from "./MediaFrame";
import type { ProjectAsset } from "@/types/project";
import type { AssetBlock } from "@/lib/projects";

const PAD = "px-6 sm:px-10 lg:px-16";

function Label({ asset, index }: { asset: ProjectAsset; index: number }) {
  if (!asset.context && !asset.caption && !asset.date) return null;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-xs font-semibold text-slate">
          {String(index).padStart(2, "0")}
        </span>
        {asset.context ? (
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-navy">
            {asset.context}
          </span>
        ) : null}
      </div>
      {asset.caption || asset.date ? (
        <span className="pl-7 text-xs text-slate">
          {[asset.caption, asset.date].filter(Boolean).join(" · ")}
        </span>
      ) : null}
    </div>
  );
}

/** All source imagery is native 4:5 (Instagram portrait). Layouts vary by width, not by cropping the frame. */
export default function AssetFrame({ asset, index }: { asset: ProjectAsset; index: number }) {
  if (asset.layout === "offset-left" || asset.layout === "offset-right") {
    const reverse = asset.layout === "offset-right";
    return (
      <div className={PAD}>
        <div
          className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-10 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <MediaFrame image={asset.image} alt={asset.alt} className="aspect-[4/5] w-full lg:w-[55%]" />
          <div className="lg:w-[35%]">
            <Label asset={asset} index={index} />
          </div>
        </div>
      </div>
    );
  }

  if (asset.layout === "full") {
    return (
      <div className={PAD}>
        <Label asset={asset} index={index} />
        <MediaFrame image={asset.image} alt={asset.alt} className="mt-4 aspect-[4/5] w-full" />
      </div>
    );
  }

  if (asset.layout === "wide") {
    return (
      <div className={PAD}>
        <Label asset={asset} index={index} />
        <MediaFrame image={asset.image} alt={asset.alt} className="mt-4 aspect-[4/5] w-full max-w-lg" />
      </div>
    );
  }

  if (asset.layout === "portrait") {
    return (
      <div className={PAD}>
        <Label asset={asset} index={index} />
        <MediaFrame image={asset.image} alt={asset.alt} className="mt-4 aspect-[4/5] w-full max-w-xs" />
      </div>
    );
  }

  return (
    <div className={PAD}>
      <div className="max-w-[200px]">
        <MediaFrame image={asset.image} alt={asset.alt} className="aspect-[4/5] w-full" />
        <div className="mt-4">
          <Label asset={asset} index={index} />
        </div>
      </div>
    </div>
  );
}

export function AssetGroup({
  block,
  startIndex,
}: {
  block: Extract<AssetBlock, { kind: "group" }>;
  startIndex: number;
}) {
  const cols = block.layout === "two-column" ? "sm:grid-cols-2" : "sm:grid-cols-3";
  return (
    <div className={PAD}>
      <div className={`grid grid-cols-2 gap-4 sm:gap-6 ${cols}`}>
        {block.assets.map((asset, i) => (
          <div key={i}>
            <MediaFrame image={asset.image} alt={asset.alt} className="aspect-[4/5] w-full" />
            <div className="mt-3">
              <Label asset={asset} index={startIndex + i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
