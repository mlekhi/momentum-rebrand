const steps = [
  { text: "50 minutes of work* time.", hasAsterisk: true, color: "bg-[#5EECC7]" },
  { text: "10 minute break.", hasAsterisk: false, color: "bg-[#F9D76D]" },
  { text: "50 minutes of work* time.", hasAsterisk: true, color: "bg-[#E86EBF]" },
  { text: "demos to wrap up!", hasAsterisk: false, color: "bg-[#E86EBF]" },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-32 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
        how it works...
      </h2>
      <div className="relative">
        {/* Rainbow gradient line */}
        <div 
          className="absolute left-[7px] top-2 w-0.5 bottom-2 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #5EECC7, #F9D76D, #E86EBF)"
            }}
        />
        
        {steps.map((item, i) => (
          <div key={i} className="relative flex items-start gap-4 pb-6 last:pb-0 group">
            {/* Dot */}
            <div className={`relative z-10 w-4 h-4 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 mt-1`}>
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
            
            {/* Content */}
            <div className="flex-1 flex justify-between items-baseline">
              <p className="text-lg md:text-xl">
                {item.text}
              </p>
              {item.hasAsterisk && (
                <span className="text-sm text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  *no school or job work allowed :)
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
