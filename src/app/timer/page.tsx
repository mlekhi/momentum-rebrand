"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const phases = [
  { name: "work", label: "work time", duration: 50 * 60 },
  { name: "break", label: "break", duration: 10 * 60 },
  { name: "work", label: "work time", duration: 50 * 60 },
  { name: "demos", label: "demos", duration: 0 },
];

export default function Timer() {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [timeLeft, setTimeLeft] = useState(phases[0].duration);
  const [isRunning, setIsRunning] = useState(false);

  const phase = phases[currentPhase];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const nextPhase = useCallback(() => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase((prev) => prev + 1);
      setTimeLeft(phases[currentPhase + 1].duration);
    }
  }, [currentPhase]);

  const reset = () => {
    setCurrentPhase(0);
    setTimeLeft(phases[0].duration);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Play sound or notification here if desired
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning && phase.name !== "demos") {
      nextPhase();
    }
  }, [timeLeft, isRunning, phase.name, nextPhase]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-black text-white">
      <Image
        src="/LOGO.svg"
        alt="Momentum"
        width={80}
        height={80}
        className="mb-8 opacity-70"
      />

      <div className="flex gap-2 mb-12">
        {phases.map((p, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === currentPhase
                ? "bg-white"
                : i < currentPhase
                ? "bg-white/50"
                : "bg-white/20"
            }`}
          />
        ))}
      </div>

      <p className="text-xl md:text-2xl text-neutral-400 mb-4">{phase.label}</p>

      {phase.name === "demos" ? (
        <h1 className="text-7xl md:text-9xl font-display mb-12">🎉</h1>
      ) : (
        <h1 className="text-7xl md:text-9xl font-mono font-light mb-12 tabular-nums">
          {formatTime(timeLeft)}
        </h1>
      )}

      <div className="flex gap-4">
        {phase.name !== "demos" && (
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            {isRunning ? "pause" : "start"}
          </button>
        )}
        <button
          onClick={nextPhase}
          disabled={currentPhase >= phases.length - 1}
          className="px-6 py-3 border border-white/30 rounded-full text-lg font-medium hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          skip
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 border border-white/30 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
        >
          reset
        </button>
      </div>

      <p className="mt-16 text-sm text-neutral-500">
        {currentPhase + 1} of {phases.length}
      </p>
    </main>
  );
}

