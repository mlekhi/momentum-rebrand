"use client";

import { useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-sm">
      <a href="/">
        <Image
          src="/TEXT.svg"
          alt="momentum"
          width={150}
          height={45}
          className="h-8 w-auto"
        />
      </a>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
        <span className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="flex flex-col p-6 gap-4">
            <a
              href="https://lu.ma/moment.um?utm_source=momentum_website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Attend
            </a>
            <a
              href="https://buymeacoffee.com/moment.um"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Contribute
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

