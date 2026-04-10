"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const letters = [
  { src: "/letters/M.svg", className: "absolute top-[8%] left-[5%] w-40 md:w-64 opacity-80" },
  { src: "/letters/O.svg", className: "absolute top-[5%] right-[8%] w-36 md:w-56 opacity-75" },
  { src: "/letters/M-1.svg", className: "absolute top-[45%] left-[2%] w-32 md:w-52 opacity-70" },
  { src: "/letters/E.svg", className: "absolute top-[40%] right-[3%] w-36 md:w-56 opacity-75" },
  { src: "/letters/N.svg", className: "absolute bottom-[15%] left-[6%] w-40 md:w-60 opacity-70" },
  { src: "/letters/T.svg", className: "absolute bottom-[20%] right-[5%] w-32 md:w-52 opacity-75" },
  { src: "/letters/U.svg", className: "absolute bottom-[8%] right-[20%] w-36 md:w-56 opacity-70" },
];

export function CallToAction() {
  return (
    <section id="attend" className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          className={letter.className}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: parseFloat(letter.className.match(/opacity-(\d+)/)?.[1] ?? "70") / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.08 }}
        >
          <Image src={letter.src} alt="" width={280} height={280} aria-hidden="true" />
        </motion.div>
      ))}

      <motion.h2
        className="text-5xl md:text-7xl mb-12 font-display relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        come <em>create</em> with us.
      </motion.h2>

      <motion.a
        href="https://lu.ma/moment.um?utm_source=momentum_website"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-xl font-medium hover:bg-neutral-200 transition-colors relative z-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        join momentum
      </motion.a>
    </section>
  );
}
