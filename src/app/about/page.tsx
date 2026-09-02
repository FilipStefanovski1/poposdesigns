import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Popo Designs",
  description:
    "Marko, a 21-year-old graphic designer from Skopje, Macedonia. Popo is a reflection of his work, interests and ongoing growth as a designer.",
};

const DISCIPLINES = [
  "Sports Design",
  "Branding",
  "Digital Content",
  "Campaigns",
  "Posters",
  "Illustration",
  "Photo Editing",
];

export default function AboutPage() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="flex max-w-2xl flex-col gap-10">
        <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl">
          I&apos;m Marko, a 21-year-old graphic designer from Skopje, Macedonia,
          with over four years of experience in design.
        </h1>

        <div className="flex flex-col gap-6 text-base leading-relaxed text-slate sm:text-lg">
          <p>
            What began as a personal interest gradually developed into a
            genuine passion and a career in graphic design. My work is
            primarily focused on sports, branding and digital content, while
            I also explore areas such as campaigns, posters, illustration and
            photo editing.
          </p>

          <p>
            I&apos;m particularly passionate about sports design and the role
            visuals play in creating identity, emotion and connection.
            Whether working with a sports club, developing a brand or
            exploring a personal concept, I aim to create work that is
            purposeful, distinctive and visually engaging.
          </p>

          <p className="text-navy">
            Popo is a reflection of my work, interests and ongoing growth as
            a designer.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-6">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate">
            Disciplines
          </span>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-navy">
            {DISCIPLINES.map((discipline, index) => (
              <span key={discipline} className="flex items-center gap-3">
                {discipline}
                {index < DISCIPLINES.length - 1 ? <span className="text-border">/</span> : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
