import Link from "next/link";

export function Community() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto text-center">
      <p className="text-3xl md:text-4xl leading-relaxed mb-8">
        <span className="text-neutral-500">⁂</span> this is a home for the
        <br />
        <span className="text-orange-400">makers</span>, <span className="text-pink-400">artists</span>, <span className="text-purple-400">filmmakers</span>,
        <br />
        <span className="text-blue-400">learners</span>, <span className="text-cyan-400">researchers</span>, <span className="text-green-400">creatives</span>,
        <br />
        <span className="text-yellow-400">founders</span>, <span className="text-red-400">movers</span>, & <span className="text-emerald-400">shakers</span>.
      </p>
      <p className="text-lg text-neutral-400">
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
      </p>
    </section>
  );
}

