"use client";

import { useState } from "react";
import { blogs } from "@/lib/blogData";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import SectionHeader from "../shared/SectionHeader";

type Blog = (typeof blogs)[number];

export default function BlogSection() {
  const [selected, setSelected] = useState<Blog | null>(null);

  return (
    <section id="blog" className="section">
      <div className="container-custom">
        <SectionHeader
          index="05"
          title="Blogs"
          subtitle="Things I learned, things I broke"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {blogs.map((blog, i) => (
            <BlogCard
              key={i}
              blog={blog}
              index={i}
              onClick={() => setSelected(blog)}
            />
          ))}
        </div>

        <p className="font-mono text-[10px] text-white/15 tracking-widest mt-8">
          // more coming soon · published on medium
        </p>
      </div>

      <BlogModal blog={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
