"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { storyEntries } from "./storyData";
import StoryEntry from "./StoryEntry";

export default function StoryLog() {
  const closingRef = useRef<HTMLDivElement>(null);
  const closingInView = useInView(closingRef, { once: true, margin: "-80px" });

  return (
    <div className="mt-4">
      {storyEntries.map((entry, i) => (
        <StoryEntry
          key={entry.year}
          entry={entry}
          index={i}
          isLast={i === storyEntries.length - 1}
        />
      ))}

      {/* Closing line */}
      <motion.div
        ref={closingRef}
        initial={{ opacity: 0, y: 12 }}
        animate={closingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="ml-22 pl-6 border-l border-white/5 py-4"
      >
        <p className="font-mono text-[11px] text-white/15 tracking-widest">
          $ git log --oneline
        </p>
        <p className="font-mono text-[11px] text-white/10 mt-1">
          4 commits · still pushing · no merge conflicts with curiosity
        </p>
      </motion.div>
    </div>
  );
}
