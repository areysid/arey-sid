"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import Typewriter from "./Typewriter";
import TerminalWidget from "./TerminalWidget";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HeroContent() {
  return (
    <div className="relative z-10 flex items-center min-h-screen container-custom pt-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: text content */}
        <div className="flex flex-col items-start">
          {/* Status badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
              available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient mb-4 leading-none"
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-white/20">{profile.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Typewriter tagline */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono text-sm text-white/50 mb-2"
          >
            <span className="text-white/20">$ </span>
            <Typewriter text={profile.tagline} delay={600} speed={40} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-mono text-xs text-white/25 mb-10 tracking-wider"
          >
            {profile.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase hover:bg-white/90 transition-colors"
            >
              View Work <ArrowRight size={12} />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/15 text-white/60 font-mono text-xs tracking-wider uppercase hover:border-white/40 hover:text-white/90 transition-all"
            >
              Contact
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/80 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/80 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: terminal widget */}
        <div className="hidden md:flex justify-center items-center">
          <TerminalWidget />
        </div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-white/20 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </div>
  );
}