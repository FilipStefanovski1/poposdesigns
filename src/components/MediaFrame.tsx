import Image from "next/image";

interface MediaFrameProps {
  image: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Use light placeholder styling on dark (navy/blue) surfaces. */
  invert?: boolean;
  /** Apply a subtle scale on hover (pair with a `group` ancestor). */
  hoverScale?: boolean;
}

export default function MediaFrame({
  image,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  invert = false,
  hoverScale = false,
}: MediaFrameProps) {
  if (image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${hoverScale ? "transition-transform duration-700 ease-out group-hover:scale-[1.03]" : ""}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border ${
        invert ? "border-white/15 bg-white/5" : "border-border bg-mist/40"
      } ${className}`}
    >
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          invert ? "text-white/50" : "text-slate"
        }`}
      >
        Image coming soon
      </span>
    </div>
  );
}
