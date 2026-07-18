import Doodle from "./Doodle";

const LINKS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@popos.designs" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-navy/[0.06] px-6 py-14 sm:px-10">
      <Doodle
        variant="star"
        size={28}
        rotate={-8}
        className="absolute right-10 top-8 hidden opacity-70 sm:block"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg font-semibold text-navy">
            popos.designs
          </span>
          <p className="font-hand text-xl text-slate">
            &copy; {new Date().getFullYear()} — made with care, somewhere with good coffee.
          </p>
        </div>

        <div className="flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
