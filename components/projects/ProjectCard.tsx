"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  extraLink?: { label: string; url: string };
  status: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  position: "active" | "left" | "right" | "hidden";
  onClick: () => void;
}

const statusColors: Record<string, string> = {
  "In Progress":        "text-yellow-400/70 border-yellow-400/20",
  "Live":               "text-green-400/70 border-green-400/20",
  "Production":         "text-emerald-400/80 border-emerald-400/25",
  "Archived":           "text-white/30 border-white/10",
  "Infra Offline":      "text-orange-400/60 border-orange-400/15",
  "Local / GitHub Only":"text-blue-400/50 border-blue-400/15",
};

const variants = {
  active: {
    x: "0%",
    scale: 1,
    opacity: 1,
    zIndex: 20,
    filter: "blur(0px)",
  },
  left: {
    x: "calc(-100% - 24px)",
    scale: 0.88,
    opacity: 0.18,
    zIndex: 10,
    filter: "blur(1.5px)",
  },
  right: {
    x: "calc(100% + 24px)",
    scale: 0.88,
    opacity: 0.18,
    zIndex: 10,
    filter: "blur(1.5px)",
  },
  hidden: {
    x: "0%",
    scale: 0.8,
    opacity: 0,
    zIndex: 0,
    filter: "blur(4px)",
  },
};

export default function ProjectCard({ project, index, position, onClick }: ProjectCardProps) {
  const isActive = position === "active";
  const isSide   = position === "left" || position === "right";

  return (
    <motion.div
      animate={position}
      variants={variants}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      onClick={isActive ? onClick : undefined}
      className={`
        absolute inset-0
        border border-white/7 bg-white/[0.02]
        transition-colors duration-500
        ${isActive ? "hover:bg-white/[0.04] hover:border-white/[0.14] cursor-pointer group" : ""}
        ${isSide   ? "cursor-default pointer-events-none" : ""}
      `}
    >
      {/* inner padding container */}
      <div className="h-full flex flex-col p-8 md:p-10">

        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/15 tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`font-mono text-[10px] border px-2 py-0.5 tracking-wider ${
                statusColors[project.status] ?? "text-white/30 border-white/10"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Link icons — only visible on active */}
          {isActive && (
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-white/40 hover:text-white/90 transition-colors"
                  title="GitHub"
                >
                  <Github size={15} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-white/40 hover:text-white/90 transition-colors"
                  title="Live site"
                >
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.extraLink && (
                <a
                  href={project.extraLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[11px] text-white/40 hover:text-white/90 transition-colors"
                  title={project.extraLink.label}
                >
                  ↗
                </a>
              )}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white/85 group-hover:text-white transition-colors mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-xs md:text-sm text-white/40 leading-relaxed mb-8 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[10px] text-white/30 border-white/10 bg-transparent px-2 py-0.5 rounded-none"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Click hint */}
        {isActive && (
          <p className="font-mono text-[10px] text-white/15 tracking-widest mt-6 uppercase">
            click to expand ↗
          </p>
        )}
      </div>

      {/* Bottom hover line */}
      {isActive && (
        <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-linear-to-r from-white/30 to-transparent transition-all duration-500" />
      )}
    </motion.div>
  );
}