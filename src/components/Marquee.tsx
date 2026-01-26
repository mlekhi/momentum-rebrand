"use client";

import { useEffect, useRef } from "react";

const members = [
  "Maya is developing yaps: a mobile game about her pet dog.",
  "Atnasia is building @nasiacooks into a gut-friendly food platform on instagram.",
  "Daniel is writing a blog about startups & developments in climate tech.",
  "Arianna is writing poetry to compile and publish a collection.",
  "Robin is developing a machine learning research paper club and building his own series of video generation models.",
  "Xander is building hollo, an aesthetic holographic display device that you can talk to and interact with.",
  "Vincent is working on @in.intuition, a personal blog at the intersection of technology, philosophical musings, and the self.",
];

export function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 bg-neutral-900 overflow-hidden">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {[...members, ...members].map((member, i) => (
          <span key={i} className="mx-8 text-lg opacity-80">
            {member} •
          </span>
        ))}
      </div>
    </section>
  );
}

