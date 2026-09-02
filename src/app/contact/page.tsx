import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Popo.Designs",
  description: "Available for selected projects. Get in touch.",
};

const LINKS = [
  {
    label: "Instagram",
    value: "@popodesignss",
    href: "https://www.instagram.com/popodesignss/",
  },
  { label: "LinkedIn", value: "linkedin.com", href: "https://linkedin.com" },
];

export default function ContactPage() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="flex max-w-xl flex-col gap-10">
        <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl">
          Available for
          <br />
          selected projects.
        </h1>

        <div className="flex flex-col gap-6 border-t border-border pt-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-baseline justify-between border-b border-transparent pb-2 transition-colors duration-200 hover:border-primary"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate">
                {link.label}
              </span>
              <span className="font-display text-lg font-semibold text-navy transition-colors duration-200 group-hover:text-primary sm:text-xl">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
