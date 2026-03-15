"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10"
    >
      <p className="font-mono text-xs text-white/25 tracking-widest uppercase mb-4">
        <span className="text-green-400/60">●</span> Open to opportunities
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white/90 leading-tight mb-4">
        Let's build
        <br />
        <span className="text-white/20">something.</span>
      </h2>
      <p className="font-mono text-xs text-white/30 leading-relaxed max-w-sm">
        Whether it's a full-time role, freelance project, or just a good conversation
        about tech — my inbox is always open.
      </p>
    </motion.div>
  );
}
