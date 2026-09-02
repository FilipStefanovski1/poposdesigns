import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/popodesignss/" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:flex lg:w-[30%] lg:flex-col lg:border-r lg:border-border lg:bg-canvas lg:px-12 lg:py-12 xl:px-14">
      <div className="flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="Popo.Designs" width={36} height={36} className="rounded-[8px]" />
          <span className="font-display text-lg font-semibold leading-none tracking-tight text-navy">
            Popo
            <br />
            <span className="text-primary">.Designs</span>
          </span>
        </Link>
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate">
          Graphic Designer | Visuals that stick.
        </span>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="w-fit text-lg font-medium text-navy/70 transition-colors duration-200 hover:text-navy"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="w-fit text-xs font-semibold uppercase tracking-[0.1em] text-slate transition-colors duration-200 hover:text-navy"
          >
            {link.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
