"use client";

import { useEffect, useRef } from "react";

export default function Home() {
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

  const members = [
    "Maya is developing Yaps: a mobile game about her pet dog.",
    "Atnasia is building @nasiacooks, into a gut-friendly food platform on Instagram.",
    "Daniel is writing a blog about startups & developments in climate tech.",
    "Arianna is writing poetry to compile and publish a collection.",
    "Robin is developing a machine learning research paper club and building his own series of video generation models.",
    "Xander is building Hollo, an aesthetic holographic display device that you can talk to and interact with.",
    "Vincent is working on @in.intuition, a personal blog at the intersection of technology, philosophical musings, and the self.",
  ];

  const tags = ["Learners", "Researchers", "Founders", "Makers", "Artists", "Creatives"];

  return (
    <div className="min-h-screen bg-amber-50 text-neutral-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
        {/* Decorative Decals */}
        <div className="absolute top-20 left-[10%] w-24 h-24 bg-orange-500 rounded-full opacity-80 blur-sm animate-bounce" />
        <div className="absolute top-40 right-[15%] w-16 h-16 bg-yellow-400 rounded-full opacity-70 blur-sm animate-pulse" />
        <div className="absolute bottom-32 left-[20%] w-20 h-20 bg-orange-400 rounded-full opacity-75 blur-sm animate-bounce delay-500" />

        <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-6">
          momentum
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 text-center max-w-lg">
          come create with us. sundays at noon in london, ontario.
        </p>
      </section>

      {/* Explore Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          explore your curiosity.
        </h2>
        <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
          we host weekly co-working sessions for you to work on your passion projects with likeminded people.
        </p>
        <a
          href="#attend"
          className="inline-flex items-center gap-3 bg-neutral-900 text-amber-50 px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Attend a Session
        </a>
      </section>

      {/* Marquee Section */}
      <section className="py-16 bg-neutral-900 text-amber-50 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[...members, ...members].map((member, i) => (
            <span key={i} className="mx-8 text-lg opacity-80">
              {member} •
            </span>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          how it works...
        </h2>
        <div className="flex flex-col gap-8 pl-8 border-l-2 border-orange-500">
          {[
            "50 minutes of work* time.",
            "10 minute break.",
            "50 minutes of work* time.",
            "Demos to wrap up!",
          ].map((item, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500" />
              <p className="text-xl md:text-2xl">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tags Banner */}
      <section className="py-12 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
        <div className="flex flex-wrap justify-center gap-4 px-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-lg font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* You Belong Here Section */}
      <section id="attend" className="px-6 py-32 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-12">
          you belong here.
        </h2>
        <a
          href="https://lu.ma/socratica"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-orange-600 transition-colors"
        >
          Attend a Session
        </a>
      </section>
    </div>
  );
}
