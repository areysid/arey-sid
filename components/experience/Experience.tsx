"use client";

import { experience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import SectionHeader from "../shared/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <SectionHeader
          index="03"
          title="Experience"
          subtitle="Where I've been"
        />

        <div className="mt-12 ml-2">
          {experience.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
