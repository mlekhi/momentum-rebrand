"use client";

import Image from "next/image";
import { ShootingStars } from "./ShootingStars";
import { StarsBackground } from "./StarsBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <StarsBackground count={40} />
      <ShootingStars />
      
      <Image
        src="/LOGO.svg"
        alt="Momentum logo"
        width={320}
        height={320}
        className="mb-8 relative z-10"
        priority
      />
      <Image
        src="/TEXT.svg"
        alt="momentum"
        width={400}
        height={70}
        className="mb-6 relative z-10"
      />
      <p className="text-base md:text-lg text-neutral-400 text-center max-w-lg relative z-10">
        come create with us.{" "}
        <a
          href="https://lu.ma/moment.um?utm_source=momentum_website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          sundays at noon in london, ontario.
        </a>
      </p>
    </section>
  );
}
