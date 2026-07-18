"use client";

import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "primary" | "secondary";
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide font-body transition-colors duration-200";

const variants = {
  primary: "bg-navy text-canvas hover:bg-navy/90",
  secondary: "bg-transparent text-navy border-2 border-navy hover:bg-mist",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
