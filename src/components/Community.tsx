import Link from "next/link";

const GradientWord = ({ children, gradient }: { children: React.ReactNode; gradient: string }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{ backgroundImage: gradient }}
  >
    {children}
  </span>
);

export function Community() {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto text-center">
      <p className="text-3xl md:text-4xl leading-relaxed mb-8">
        <span className="text-neutral-500">⁂</span> this is a home for the
        <br />
        <GradientWord gradient="linear-gradient(135deg, #FFEEBB, #FF6B6B)">makers</GradientWord>,{" "}
        <GradientWord gradient="linear-gradient(135deg, #E040FB, #FF4081)">artists</GradientWord>,{" "}
        <GradientWord gradient="linear-gradient(135deg, #B388FF, #7C4DFF)">filmmakers</GradientWord>,
        <br />
        <GradientWord gradient="linear-gradient(135deg, #4DD0E1, #2196F3)">learners</GradientWord>,{" "}
        <GradientWord gradient="linear-gradient(135deg, #4DB6AC, #26A69A)">researchers</GradientWord>,{" "}
        <GradientWord gradient="linear-gradient(135deg, #A5D6A7, #66BB6A)">creatives</GradientWord>,
        <br />
        <GradientWord gradient="linear-gradient(135deg, #FFEEBB, #80CBC4)">founders</GradientWord>,{" "}
        <GradientWord gradient="linear-gradient(135deg, #80CBC4, #A5D6A7)">movers</GradientWord>, &{" "}
        <GradientWord gradient="linear-gradient(135deg, #FFEEBB, #F48FB1)">shakers</GradientWord>.
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
