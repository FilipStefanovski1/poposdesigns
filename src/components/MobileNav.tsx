"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/popodesignss/" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40 border-b border-border bg-canvas lg:hidden">
      <div className="flex items-center justify-between px-6 py-5">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <Image src="/logo-mark.png" alt="Popo.Designs" width={28} height={28} className="rounded-[6px]" />
          <span className="font-display text-base font-semibold tracking-tight text-navy">
            Popo<span className="text-primary">.Designs</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="text-xs font-semibold uppercase tracking-[0.15em] text-navy"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col justify-between bg-navy px-6 py-10 text-white"
          >
            <div className="flex flex-col gap-8">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
                Graphic Designer | Visuals that stick.
              </span>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-semibold tracking-tight"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-fit text-xs font-semibold uppercase tracking-[0.15em] text-white/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
