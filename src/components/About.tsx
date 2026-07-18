import SectionTitle from "./SectionTitle";
import Doodle from "./Doodle";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:px-10 sm:py-32">
      <Doodle
        variant="scribble"
        size={64}
        rotate={-8}
        duration={9}
        className="absolute right-[8%] top-10 hidden opacity-40 lg:block"
      />

      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="About"
          title="Good products aren't accidents."
          align="center"
          className="mx-auto"
        />
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-slate sm:text-xl">
          I focus on product design, frontend, and branding — turning complex
          Web3 products into experiences people actually understand. Every
          screen, flow, and interaction is considered, so the end result
          feels less like software and more like something someone made with
          you in mind.
        </p>
      </div>
    </section>
  );
}
