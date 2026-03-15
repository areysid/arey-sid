"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  extraLink?: { label: string; url: string };
  status: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-xl mx-auto border border-white/10 bg-[#0e0e0e] p-8"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/30 hover:text-white/80 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Status */}
            <span className="font-mono text-[10px] text-white/25 tracking-widest uppercase">
              {project.status}
            </span>

            {/* Title */}
            <h3 className="font-display text-2xl font-bold text-white/90 mt-2 mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-mono text-xs text-white/45 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-mono text-[10px] text-white/35 border-white/10 bg-transparent px-2 py-0.5 rounded-none"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white/90 transition-colors border border-white/10 hover:border-white/25 px-4 py-2"
                >
                  <Github size={12} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white/90 transition-colors border border-white/10 hover:border-white/25 px-4 py-2"
                >
                  <ArrowUpRight size={12} /> Live Site
                </a>
              )}
              {project.extraLink && (
                <a
                  href={project.extraLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white/90 transition-colors border border-white/10 hover:border-white/25 px-4 py-2"
                >
                  <ArrowUpRight size={12} /> {project.extraLink.label}
                </a>
              )}
              {!project.github && !project.live && !project.extraLink && (
                <span className="font-mono text-[10px] text-white/20">
                  no links available
                </span>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}