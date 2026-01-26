const steps = [
  { text: "50 minutes of work* time.", hasAsterisk: true, color: "bg-[#5EECC7]" },
  { text: "10 minute break.", hasAsterisk: false, color: "bg-[#F9D76D]" },
  { text: "50 minutes of work* time.", hasAsterisk: true, color: "bg-[#E86EBF]" },
  { text: "demos to wrap up!", hasAsterisk: false, color: "bg-[#E86EBF]" },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
        how it works...
      </h2>
      <div className="relative">
        {/* Rainbow gradient line */}
        <div 
          className="absolute left-[11px] top-3 w-1 bottom-3 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #5EECC7, #F9D76D, #E86EBF)"
            }}
        />
        
        {steps.map((item, i) => (
          <div key={i} className="relative flex items-start gap-6 pb-12 last:pb-0 group">
            {/* Dot */}
            <div className={`relative z-10 w-6 h-6 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 mt-1`}>
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-xl md:text-2xl">
                {item.text}
                {item.hasAsterisk && (
                  <span className="ml-2 text-sm text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    *no school or job work allowed :)
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
