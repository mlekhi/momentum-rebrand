import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <Image
        src="/LOGO.svg"
        alt="Momentum logo"
        width={120}
        height={120}
        className="mb-8 opacity-50"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-display">
        you&apos;ve wandered off.
      </h1>
      <p className="text-neutral-400 mb-8 max-w-md">
        this page doesn&apos;t exist, but your next project could.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors"
      >
        back to momentum
      </Link>
    </main>
  );
}

