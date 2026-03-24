"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";

interface Blog {
  title: string;
  summary: string;
  readTime: string;
  tags: string[];
  medium: string;
  date: string;
  issue: string;
}

interface BlogModalProps {
  blog: Blog | null;
  onClose: () => void;
}

export default function BlogModal({ blog, onClose }: BlogModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {blog && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-2xl mx-auto bg-[#0a0a0a] border border-white/10 overflow-hidden max-h-[85vh] flex flex-col"
          >
            {/* Newspaper texture overlay */}
            <div className="absolute inset-0 opacity-[0.015] bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,white_24px,white_25px)] pointer-events-none" />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white/30 hover:text-white/80 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Masthead */}
            <div className="border-b-[3px] border-white/20 px-8 pt-8 pb-4 shrink-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] text-white/20 tracking-widest">
                  {blog.issue} · Est. 2026 · Dehradun, India
                </span>
                <span className="font-mono text-[10px] text-white/20 tracking-widest">
                  {blog.date}
                </span>
              </div>
              <h1 className="font-display text-2xl md:text-3xl font-black text-white/90 tracking-tight text-center py-2">
                Sidharth Chronicles
              </h1>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-[10px] text-white/20 tracking-widest px-2">
                  {blog.readTime}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </div>

            {/* Headline */}
            <div className="px-8 pt-6 pb-4 border-b border-white/8 shrink-0">
              <h2 className="font-display text-xl md:text-2xl font-bold text-white/90 leading-tight text-center">
                {blog.title}
              </h2>
              {/* Tags as dateline */}
              <p className="font-mono text-[10px] text-white/25 tracking-widest text-center mt-3 uppercase">
                {blog.tags.join(" · ")}
              </p>
            </div>

            {/* Body */}
            <div className="px-8 py-6 overflow-y-auto flex-1">
              {blog.summary.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="font-mono text-xs text-white/45 leading-relaxed italic mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="px-8 py-5 border-t border-white/8 shrink-0 flex items-center justify-between">
              <span className="font-mono text-[10px] text-white/20 tracking-widest">
                // full story on medium
              </span>
              <a
                href={blog.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-white/60 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2"
              >
                Read full story <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
