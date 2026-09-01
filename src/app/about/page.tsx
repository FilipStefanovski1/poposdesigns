import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Popo.Designs",
  description:
    "Popo is an independent multidisciplinary graphic design practice working across branding, sports and campaigns.",
};

const DISCIPLINES = [
  "Branding",
  "Sports Design",
  "Social Media",
  "Posters",
  "Illustration",
  "Campaigns",
  "Digital Artwork",
  "Photo Editing",
];

export default function AboutPage() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
      <div className="flex max-w-2xl flex-col gap-10">
        <h1 className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl">
          Popo is an independent
          <br />
          multidisciplinary graphic
          <br />
          design practice.
        </h1>

        <p className="text-base leading-relaxed text-slate sm:text-lg">
          Working mostly across sport and culture: matchday graphics,
          fixture announcements, campaign visuals and the occasional
          illustration or kit concept made just to make it.
        </p>

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
