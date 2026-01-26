const steps = [
  { text: "50 minutes of work* time.", hasAsterisk: true },
  { text: "10 minute break.", hasAsterisk: false },
  { text: "50 minutes of work* time.", hasAsterisk: true },
  { text: "demos to wrap up!", hasAsterisk: false },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
        how it works...
      </h2>
      <div className="flex flex-col gap-8 pl-8 border-l-2 border-orange-500">
        {steps.map((item, i) => (
          <div key={i} className="relative pl-8 group">
            <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500" />
            <p className="text-xl md:text-2xl">
              {item.text}
              {item.hasAsterisk && (
                <span className="ml-2 text-sm text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  *no school or job work allowed :)
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
