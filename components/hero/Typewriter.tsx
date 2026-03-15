"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function Typewriter({
  text,
  delay = 0,
  speed = 45,
  className = "",
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="inline-block w-0.5 h-4 bg-white/70 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}
