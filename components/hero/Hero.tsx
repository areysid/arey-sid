"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

// Dynamically import Three.js canvas — avoids SSR issues
const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--bg-hero-gradient)" }}
    >
      {/* Three.js particle background */}
      <ParticleField />

      {/* Radial vignette overlay */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,#080808_100%)]" />

      {/* Content */}
      <HeroContent />
    </section>
  );
}
