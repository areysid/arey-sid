"use client";

import { useMemo } from "react";
import { useRef } from "react";
import { skills } from "@/lib/data";
import SkillCategory from "./SkillCategory";
import SectionHeader from "../shared/SectionHeader";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  const grouped = useMemo(() => {
    return skills.reduce<Record<string, typeof skills>>((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeader
          index="01"
          title="Skills"
          subtitle="Technologies I work with"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {Object.entries(grouped).map(([category, categorySkills], i) => (
            <SkillCategory
              key={category}
              category={category}
              skills={categorySkills}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}