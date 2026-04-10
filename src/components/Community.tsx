"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const GradientWord = ({ children, gradient }: { children: React.ReactNode; gradient: string }) => (
  <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>
    {children}
  </span>
);

const wordVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export function Community() {
  return (
    <section className="px-6 pt-32 pb-24 max-w-6xl mx-auto text-center">
      <motion.p
        className="text-3xl md:text-4xl leading-relaxed mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.span className="text-neutral-500" variants={wordVariant}>⁂</motion.span>{" "}
        <motion.span variants={wordVariant}>this is a home for the</motion.span>
        <br />
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #FFEEBB, #FF6B6B)">makers</GradientWord></motion.span>
        {", "}
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #E040FB, #FF4081)">artists</GradientWord></motion.span>
        {", "}
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #B388FF, #7C4DFF)">filmmakers</GradientWord></motion.span>
        {","}
        <br />
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #4DD0E1, #2196F3)">learners</GradientWord></motion.span>
        {", "}
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #4DB6AC, #26A69A)">researchers</GradientWord></motion.span>
        {", "}
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #A5D6A7, #66BB6A)">creatives</GradientWord></motion.span>
        {","}
        <br />
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #FFEEBB, #80CBC4)">founders</GradientWord></motion.span>
        {", "}
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #80CBC4, #A5D6A7)">movers</GradientWord></motion.span>
        {", & "}
        <motion.span variants={wordVariant}><GradientWord gradient="linear-gradient(135deg, #FFEEBB, #F48FB1)">shakers</GradientWord></motion.span>
        {"."}
      </motion.p>

      <motion.p
        className="text-lg text-neutral-400"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        momentum is a node of{" "}
        <Link
          href="https://socratica.info"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          Socratica
        </Link>
        , a global creative community.
        <br />
        <Link
          href="https://map.socratica.info/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          find us worldwide →
        </Link>
      </motion.p>
    </section>
  );
}
