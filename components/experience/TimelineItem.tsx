"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="relative flex gap-8"
    >
      {/* Left: timeline spine */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.3, ease: "easeOut" }}
          className="w-2 h-2 rounded-full border border-white/30 bg-[#080808] mt-1.5 shrink-0 relative z-10"
        />
        {/* Vertical line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2"
          />
        )}
      </div>

      {/* Right: content */}
      <div className="pb-12">
        {/* Period */}
        <span className="font-mono text-[10px] text-white/20 tracking-widest">
          {item.period}
        </span>

        {/* Role + Company */}
        <h3 className="font-display text-lg font-bold text-white/85 mt-1">
          {item.role}
        </h3>
        <p className="font-mono text-xs text-white/30 mb-3 tracking-wider">
          {item.company}
        </p>

        {/* Description */}
        <p className="font-mono text-xs text-white/40 leading-relaxed mb-4 max-w-lg">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[10px] text-white/25 border-white/8 bg-transparent px-2 py-0.5 rounded-none"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
