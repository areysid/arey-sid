"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", value: "areysid", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: "sidharth-malpani", href: profile.linkedin },
];

export default function ContactLinks() {
  return (
    <div className="flex flex-col gap-4">
      {links.map(({ icon: Icon, label, value, href }, i) => (
        <motion.a
          key={label}
          href={href}
          target={label !== "Email" ? "_blank" : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 + 0.3, duration: 0.5, ease: "easeOut" }}
          className="group flex items-center gap-4 border border-white/7 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/14 transition-all duration-300 px-5 py-4"
        >
          <Icon size={14} className="text-white/25 group-hover:text-white/70 transition-colors shrink-0" />
          <div>
            <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase">{label}</p>
            <p className="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors mt-0.5">
              {value}
            </p>
          </div>
          <span className="ml-auto text-white/15 group-hover:text-white/50 transition-all group-hover:translate-x-1 duration-300">
            →
          </span>
        </motion.a>
      ))}
    </div>
  );
}
