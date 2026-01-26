const steps = [
  "50 minutes of work* time.",
  "10 minute break.",
  "50 minutes of work* time.",
  "Demos to wrap up!",
];

export function HowItWorks() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
        how it works...
      </h2>
      <div className="flex flex-col gap-8 pl-8 border-l-2 border-orange-500">
        {steps.map((item, i) => (
          <div key={i} className="relative pl-8">
            <div className="absolute -left-[25px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500" />
            <p className="text-xl md:text-2xl">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

