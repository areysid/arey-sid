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
  onClick: () => void;
}

const statusColors: Record<string, string> = {
  "In Progress": "text-yellow-400/70 border-yellow-400/20",
  "Live":        "text-green-400/70 border-green-400/20",
  "Production":  "text-emerald-400/80 border-emerald-400/25",
  "Archived":    "text-white/30 border-white/10",
};

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
      className="group relative border border-white/7 bg-white/2 hover:bg-white/4 hover:border-white/14 transition-all duration-500 p-6 cursor-pointer"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
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

        {/* Link icons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white/40 hover:text-white/90 transition-colors"
              title="GitHub"
            >
              <Github size={14} />
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
              <ArrowUpRight size={14} />
            </a>
          )}
          {project.extraLink && (
            <a
              href={project.extraLink.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono text-[10px] text-white/40 hover:text-white/90 transition-colors"
              title={project.extraLink.label}
            >
              ↗
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-white/85 group-hover:text-white transition-colors mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-mono text-xs text-white/35 leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="font-mono text-[10px] text-white/30 border-white/10 bg-transparent px-2 py-0.5 rounded-none"
          >
            {tag}
          </Badge>
        ))}
        {project.tags.length > 4 && (
          <span className="font-mono text-[10px] text-white/20">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>

      {/* Bottom hover line */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-linear-to-r from-white/30 to-transparent transition-all duration-500" />
    </motion.div>
  );
}