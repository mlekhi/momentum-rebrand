import Image from "next/image";

export function Explore() {
  return (
    <section className="px-6 py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto">
        <div className="flex-1 text-left">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            explore your curiosity.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-8">
            we host weekly co-working sessions for you to work on your passion projects with likeminded people.
          </p>
          <a
            href="https://lu.ma/moment.um?utm_source=momentum_website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            attend a session
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/LOGO.svg"
            alt="Momentum logo"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
