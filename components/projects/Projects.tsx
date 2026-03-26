"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "../shared/SectionHeader";

type Project = (typeof projects)[number];

function getPosition(
  cardIndex: number,
  activeIndex: number,
  total: number
): "active" | "left" | "right" | "hidden" {
  if (cardIndex === activeIndex) return "active";

  // immediate neighbours only get the "sliver" treatment
  const prev = (activeIndex - 1 + total) % total;
  const next = (activeIndex + 1) % total;

  if (cardIndex === prev) return "left";
  if (cardIndex === next) return "right";
  return "hidden";
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected,    setSelected]    = useState<Project | null>(null);

  const total = projects.length;

  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total),         [total]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (selected) return; // don't hijack when modal is open
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, selected]);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <SectionHeader
          index="02"
          title="Projects"
          subtitle="Things I've built"
        />

        {/* ── Carousel ─────────────────────────────────────────────── */}
        <div className="mt-12 relative">

          {/* Card stage — fixed height so arrows stay anchored */}
          <div className="relative h-[480px] md:h-[420px] mx-auto max-w-2xl overflow-visible">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                position={getPosition(i, activeIndex, total)}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>

          {/* ── Arrow buttons ──────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="
                flex items-center justify-center
                w-9 h-9 border border-white/10
                text-white/35 hover:text-white/80 hover:border-white/25
                transition-all duration-200
              "
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`
                    transition-all duration-300 rounded-none
                    ${i === activeIndex
                      ? "w-5 h-px bg-white/60"
                      : "w-1.5 h-px bg-white/20 hover:bg-white/35"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next project"
              className="
                flex items-center justify-center
                w-9 h-9 border border-white/10
                text-white/35 hover:text-white/80 hover:border-white/25
                transition-all duration-200
              "
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Keyboard hint */}
          <p className="text-center font-mono text-[10px] text-white/15 tracking-widest mt-4 uppercase">
            ← → arrow keys to navigate
          </p>
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}