export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Decorative Decals */}
      <div className="absolute top-20 left-[10%] w-24 h-24 bg-orange-500 rounded-full opacity-80 blur-sm animate-bounce" />
      <div className="absolute top-40 right-[15%] w-16 h-16 bg-yellow-400 rounded-full opacity-70 blur-sm animate-pulse" />
      <div className="absolute bottom-32 left-[20%] w-20 h-20 bg-orange-400 rounded-full opacity-75 blur-sm animate-bounce delay-500" />

      <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-6 font-display">
        momentum
      </h1>
      <p className="text-xl md:text-2xl text-neutral-400 text-center max-w-lg">
        come create with us. sundays at noon in london, ontario.
      </p>
    </section>
  );
}

