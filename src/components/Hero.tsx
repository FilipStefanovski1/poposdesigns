"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import Doodle from "./Doodle";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-28 pb-24 sm:px-10 sm:pt-36 sm:pb-32"
    >
      <Doodle
        variant="scribble"
        size={70}
        rotate={-6}
        duration={9}
        className="absolute left-[6%] top-24 hidden opacity-70 md:block"
      />
      <Doodle
        variant="swirl"
        size={56}
        rotate={10}
        duration={8}
        delay={0.4}
        className="absolute right-[10%] top-16 hidden opacity-60 md:block"
      />
      <Doodle
        variant="star"
        size={24}
        rotate={-4}
        duration={6}
        delay={0.2}
        className="absolute right-[18%] bottom-16 hidden opacity-70 sm:block"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="relative inline-block px-8 py-5"
        >
          <span className="relative z-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.25em] text-slate">
            Web3 Product Design Studio
          </span>
          <Doodle
            variant="oval"
            stretch
            rotate={-1}
            duration={10}
            drift={3}
            className="absolute inset-0 h-full w-full opacity-40"
          />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-display text-5xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-6xl md:text-7xl"
        >
          Designing products people{" "}
          <span className="relative inline-block">
            actually
            <Doodle
              variant="underline"
              stretch
              duration={7}
              drift={2}
              color="var(--color-primary-dark)"
              className="absolute -bottom-3 left-1/2 h-4 w-[112%] -translate-x-1/2"
            />
          </span>{" "}
          love.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="max-w-xl text-lg leading-relaxed text-slate sm:text-xl"
        >
          I help Web3 teams build products that feel simple, polished, and
          memorable.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="relative mt-2 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="#work" variant="primary">
            View Projects
          </Button>
          <Button href="https://www.instagram.com/popodesignss/" variant="secondary">
            Get in Touch
          </Button>

          <div className="pointer-events-none absolute -right-16 top-full hidden -translate-y-2 flex-col items-center pt-2 text-primary-dark sm:flex">
            <Doodle
              variant="arrow"
              size={44}
              rotate={-100}
              duration={6}
              className="rotate-[-100deg]"
            />
            <span className="font-hand -mt-1 text-lg text-slate">start here</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
