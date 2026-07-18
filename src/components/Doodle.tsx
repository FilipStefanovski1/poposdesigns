"use client";

import { motion } from "framer-motion";

type DoodleVariant = "arrow" | "circle" | "oval" | "scribble" | "underline" | "star" | "swirl";

interface DoodleProps {
  variant: DoodleVariant;
  className?: string;
  size?: number;
  color?: string;
  rotate?: number;
  duration?: number;
  delay?: number;
  drift?: number;
  /** Fill the parent box exactly (ignores intrinsic aspect ratio) instead of using a fixed size. */
  stretch?: boolean;
}

const PATHS: Record<DoodleVariant, { viewBox: string; content: React.ReactNode }> = {
  arrow: {
    viewBox: "0 0 100 90",
    content: (
      <>
        <path
          d="M8 12 C 30 8, 55 20, 62 48 C 66 62, 60 72, 52 78"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M34 68 C 40 74, 46 77, 52 78 C 49 71, 47 64, 47 57"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  circle: {
    viewBox: "0 0 100 100",
    content: (
      <path
        d="M52 12 C 74 10, 90 26, 88 48 C 86 72, 66 90, 42 88 C 20 86, 8 68, 10 46 C 12 24, 30 10, 50 12 C 56 13, 58 15, 55 16"
        fill="none"
        strokeLinecap="round"
      />
    ),
  },
  oval: {
    viewBox: "0 0 320 110",
    content: (
      <path
        d="M52 20 C 120 6, 220 6, 278 24 C 308 34, 310 66, 276 84 C 210 102, 100 100, 44 82 C 12 72, 8 40, 34 26 C 38 24, 44 22, 50 22"
        fill="none"
        strokeLinecap="round"
      />
    ),
  },
  scribble: {
    viewBox: "0 0 100 60",
    content: (
      <path
        d="M4 30 C 14 10, 22 46, 32 26 C 42 8, 48 44, 58 24 C 66 10, 74 40, 84 22 C 88 16, 92 20, 96 16"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  underline: {
    viewBox: "0 0 140 20",
    content: (
      <path
        d="M4 12 C 30 4, 60 16, 90 8 C 105 4, 122 12, 136 8"
        fill="none"
        strokeLinecap="round"
      />
    ),
  },
  star: {
    viewBox: "0 0 40 40",
    content: (
      <path
        d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  swirl: {
    viewBox: "0 0 60 60",
    content: (
      <path
        d="M12 40 C 4 28, 10 12, 26 10 C 42 8, 52 22, 44 34 C 38 43, 24 42, 22 32 C 20 24, 28 18, 34 24"
        fill="none"
        strokeLinecap="round"
      />
    ),
  },
};

export default function Doodle({
  variant,
  className = "",
  size = 48,
  color = "var(--color-navy)",
  rotate = 0,
  duration = 7,
  delay = 0,
  drift = 8,
  stretch = false,
}: DoodleProps) {
  const { viewBox, content } = PATHS[variant];

  return (
    <motion.svg
      viewBox={viewBox}
      preserveAspectRatio={stretch ? "none" : "xMidYMid meet"}
      width={stretch ? undefined : size}
      height={stretch ? undefined : size}
      className={`pointer-events-none select-none ${className}`}
      style={{ stroke: color, strokeWidth: 3, transform: `rotate(${rotate}deg)` }}
      animate={{ y: [0, -drift, 0], rotate: [rotate, rotate + 3, rotate] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {content}
    </motion.svg>
  );
}
