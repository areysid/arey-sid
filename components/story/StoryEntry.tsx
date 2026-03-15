"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StoryEntryProps {
  entry: {
    year: string;
    commit: string;
    message: string;
    body: string;
    tags: string[];
    project: {
      label: string;
      github: string;
      live: string;
    } | null;
  };
  index: number;
  isLast: boolean;
}

export default function StoryEntry({ entry, index, isLast }: StoryEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* Left: year + spine */}
      <div className="flex flex-col items-center shrink-0 w-16">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-mono text-[10px] text-white/20 tracking-widest mb-2"
        >
          {entry.year}
        </motion.span>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-2 h-2 rounded-full border border-white/25 bg-[#080808] shrink-0 relative z-10"
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2"
          />
        )}
      </div>

      {/* Right: content */}
      <div className="pb-14 flex-1">
        {/* Commit line */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 mb-4"
        >
          <span className="font-mono text-[11px] text-white/20">$</span>
          <span className="font-mono text-sm text-white/70 font-medium">
            git commit
          </span>
          <span className="font-mono text-sm text-white/30">-m</span>
          <span className="font-mono text-sm text-green-400/60">
            &quot;{entry.commit}&quot;
          </span>
        </motion.div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.22, duration: 0.5 }}
          className="font-mono text-xs text-white/25 mb-4 tracking-wider italic"
        >
          // {entry.message}
        </motion.p>

        {/* Body — expands in */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={inView ? { opacity: 1, height: "auto" } : {}}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="font-mono text-xs text-white/45 leading-relaxed mb-5 max-w-2xl">
            {entry.body}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {entry.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-mono text-[10px] text-white/25 border-white/8 bg-transparent px-2 py-0.5 rounded-none"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Project link if exists */}
          {entry.project && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-3 mt-2"
            >
              <span className="font-mono text-[10px] text-white/15 tracking-widest">
                // attached
              </span>
              <a
                href={entry.project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-white/40 hover:text-white/80 border border-white/8 hover:border-white/20 px-3 py-1.5 transition-all duration-200"
              >
                <ArrowUpRight size={10} />
                {entry.project.label}
              </a>
              <a
                href={entry.project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-white/40 hover:text-white/80 border border-white/8 hover:border-white/20 px-3 py-1.5 transition-all duration-200"
              >
                <Github size={10} />
                source
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
