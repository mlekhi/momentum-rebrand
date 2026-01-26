import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <Image
        src="/LOGO.svg"
        alt="Momentum logo"
        width={320}
        height={320}
        className="mb-8"
        priority
      />
      <Image
        src="/TEXT.svg"
        alt="momentum"
        width={400}
        height={70}
        className="mb-6"
      />
      <p className="text-base md:text-lg text-neutral-400 text-center max-w-lg">
        come create with us.{" "}
        <a
          href="https://lu.ma/moment.um?utm_source=momentum_website"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          saturdays at noon in london, ontario.
        </a>
      </p>
    </section>
  );
}
