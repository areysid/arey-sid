"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "../shared/SectionHeader";

type Project = (typeof projects)[number];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <SectionHeader
          index="02"
          title="Projects"
          subtitle="Things I've built"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
