import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy/[0.06] bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-navy"
        >
          popos<span className="text-primary-dark">.</span>designs
        </Link>

        <nav className="hidden items-center gap-9 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://www.instagram.com/popodesignss/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-navy px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-mist"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
