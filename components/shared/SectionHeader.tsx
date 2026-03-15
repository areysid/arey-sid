"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-end gap-6 border-b border-white/7 pb-6"
    >
      <span className="font-mono text-[10px] text-white/15 tracking-widest mb-1">
        {index}
      </span>
      <div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white/90 leading-none">
          {title}
        </h2>
        <p className="font-mono text-xs text-white/30 mt-1 tracking-wider">{subtitle}</p>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="ml-auto h-px bg-gradient-to-r from-white/15 to-transparent flex-1 mb-2"
      />
    </motion.div>
  );
}
