"use client";

import { motion } from "framer-motion";

interface Blog {
  title: string;
  summary: string;
  readTime: string;
  tags: string[];
  medium: string;
  date: string;
  issue: string;
}

interface BlogCardProps {
  blog: Blog;
  index: number;
  onClick: () => void;
}

export default function BlogCard({ blog, index, onClick }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
      className="group relative border border-white/10 bg-white/1 hover:bg-white/3 transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,white_24px,white_25px)] pointer-events-none" />

      {/* Top rule */}
      <div className="border-b-2 border-white/20 mx-4 pt-4" />

      {/* Issue + date header */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2 border-b border-white/8">
        <span className="font-mono text-[10px] text-white/25 tracking-widest uppercase">
          {blog.issue}
        </span>
        <span className="font-mono text-[10px] text-white/20 tracking-widest">
          {blog.date}
        </span>
        <span className="font-mono text-[10px] text-white/20 tracking-widest">
          {blog.readTime}
        </span>
      </div>

      {/* Headline */}
      <div className="px-5 pt-4 pb-3 border-b border-white/8">
        <h2 className="font-display text-lg md:text-xl font-bold text-white/85 group-hover:text-white transition-colors duration-300 leading-tight">
          {blog.title}
        </h2>
      </div>

      {/* Summary excerpt */}
      <div className="px-5 py-4 border-b border-white/8">
        <p className="font-mono text-xs text-white/35 leading-relaxed italic line-clamp-3">
          {blog.summary.split("\n\n")[0]}
        </p>
      </div>

      {/* Footer: tags + read more */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex flex-wrap gap-1.5">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-white/25 tracking-widest uppercase"
            >
              {tag} ·
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px] text-white/30 group-hover:text-white/60 transition-colors tracking-widest uppercase">
          Read →
        </span>
      </div>
    </motion.div>
  );
}
