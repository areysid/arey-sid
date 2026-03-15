"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillBar({ name, level, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs text-white/60 group-hover:text-white/90 transition-colors">
          {name}
        </span>
        <span className="font-mono text-[10px] text-white/25 group-hover:text-white/50 transition-colors">
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="h-px w-full bg-white/8 relative overflow-hidden">
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.06 + 0.2, duration: 0.9, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-linear-to-r from-white/60 to-white/20"
        />
        {/* Glow dot at end */}
        <motion.div
          initial={{ left: 0, opacity: 0 }}
          animate={inView ? { left: `${level}%`, opacity: 1 } : {}}
          transition={{ delay: index * 0.06 + 0.2, duration: 0.9, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/80"
        />
      </div>
    </motion.div>
  );
}
