"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillBar from "./SkillBar";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  index: number;
}

const categoryIcons: Record<string, string> = {
  "Languages":       "◦",
  "Frontend":        "◈",
  "Database":        "◎",
  "DevOps & CI/CD":  "⬡",
  "Cloud Platforms": "△",
  "Miscellaneous":   "✦",
};

export default function SkillCategory({ category, skills, index }: SkillCategoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="border border-white/7 bg-white/2 hover:bg-white/4 hover:border-white/12 transition-all duration-500 p-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-white/20 text-lg">{categoryIcons[category] ?? "◦"}</span>
        <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
          {category}
        </span>
        <span className="ml-auto font-mono text-[10px] text-white/15">
          {skills.length} skills
        </span>
      </div>

      {/* Skill bars */}
      <div className="flex flex-col gap-5">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
        ))}
      </div>
    </motion.div>
  );
}