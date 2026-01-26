import Image from "next/image";

export function Navbar() {
  return (
    <nav className="px-6 py-4 flex justify-between items-center">
      <a href="/">
        <Image
          src="/TEXT.svg"
          alt="momentum"
          width={150}
          height={45}
          className="h-8 w-auto"
        />
      </a>
      
      <div className="flex gap-6">
        <a
          href="https://lu.ma/moment.um?utm_source=momentum_website"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base hover:opacity-70 transition-opacity"
        >
          attend
        </a>
        <a
          href="/timer"
          className="text-base hover:opacity-70 transition-opacity"
        >
          timer
        </a>
        <a
          href="https://buymeacoffee.com/moment.um"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base hover:opacity-70 transition-opacity"
        >
          contribute
        </a>
      </div>
    </nav>
  );
}
