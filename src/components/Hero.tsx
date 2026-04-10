"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShootingStars } from "./ShootingStars";
import { StarsBackground } from "./StarsBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <StarsBackground count={40} />
      <ShootingStars />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mb-8"
      >
        <Image
          src="/LOGO.svg"
          alt="Momentum logo"
          width={320}
          height={320}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="relative z-10 mb-6"
      >
        <Image
          src="/TEXT.svg"
          alt="momentum"
          width={400}
          height={70}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        className="text-base md:text-lg text-neutral-400 text-center max-w-lg relative z-10"
      >
        come create with us.{" "}
        <a
          href="https://lu.ma/moment.um?utm_source=momentum_website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          sundays at noon in london, ontario.
        </a>
      </motion.p>
    </section>
  );
}
