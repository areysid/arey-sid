"use client";

import { motion } from "framer-motion";

export default function StoryHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="flex items-center gap-3 mt-8 mb-10"
    >
      <span className="font-mono text-[11px] text-white/20 tracking-widest">
        // each entry expands as you scroll — read the log
      </span>
      <motion.span
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="text-white/15 text-xs"
      >
        →
      </motion.span>
    </motion.div>
  );
}
