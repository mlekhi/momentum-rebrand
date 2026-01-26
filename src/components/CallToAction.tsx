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
        className="inline-flex items-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-orange-600 transition-colors relative z-10"
      >
        attend a session
      </a>
    </section>
  );
}
