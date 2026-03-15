"use client";

import SectionHeader from "../shared/SectionHeader";
import StoryHint from "./StoryHint";
import StoryLog from "./StoryLog";

export default function StorySection() {
  return (
    <section id="story" className="section">
      <div className="container-custom">
        <SectionHeader
          index="00"
          title="My Story"
          subtitle="4 years, one commit at a time"
        />
        <StoryHint />
        <StoryLog />
      </div>
    </section>
  );
}
