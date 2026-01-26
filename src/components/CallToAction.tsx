import Image from "next/image";

const letters = [
  { src: "/letters/M.svg", className: "absolute top-[8%] left-[5%] w-40 md:w-64 opacity-80" },
  { src: "/letters/O.svg", className: "absolute top-[5%] right-[8%] w-36 md:w-56 opacity-75" },
  { src: "/letters/M-1.svg", className: "absolute top-[45%] left-[2%] w-32 md:w-52 opacity-70" },
  { src: "/letters/E.svg", className: "absolute top-[40%] right-[3%] w-36 md:w-56 opacity-75" },
  { src: "/letters/N.svg", className: "absolute bottom-[15%] left-[6%] w-40 md:w-60 opacity-70" },
  { src: "/letters/T.svg", className: "absolute bottom-[20%] right-[5%] w-32 md:w-52 opacity-75" },
  { src: "/letters/U.svg", className: "absolute bottom-[8%] right-[20%] w-36 md:w-56 opacity-70" },
];

export function CallToAction() {
  return (
    <section id="attend" className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
      {letters.map((letter, i) => (
        <Image
          key={i}
          src={letter.src}
          alt=""
          width={280}
          height={280}
          className={letter.className}
          aria-hidden="true"
        />
      ))}
      
      <h2 className="text-5xl md:text-7xl mb-12 font-display relative z-10">
        you <em>belong</em> here.
      </h2>
      <a
        href="https://lu.ma/moment.um?utm_source=momentum_website"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-xl font-medium hover:bg-neutral-200 transition-colors relative z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        attend a session
      </a>
    </section>
  );
}
