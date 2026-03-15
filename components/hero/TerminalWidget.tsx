"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";

const VALID_SECTIONS: Record<string, string> = {
  story: "#story",
  skills: "#skills",
  projects: "#projects",
  experience: "#experience",
  contact: "#contact",
  home: "#hero",
};

const BOOT_LINES = [
  { text: "Sidharth Malpani — Portfolio v1.0.0", delay: 0 },
  { text: "Loading modules... done", delay: 300 },
  { text: 'Type "help" for available commands', delay: 600 },
];

interface HistoryEntry {
  type: "input" | "output" | "error" | "success";
  text: string;
}

export default function TerminalWidget() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [bootDone, setBootDone] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null); // ref on the scrollable terminal body

  // Boot sequence
  useEffect(() => {
    BOOT_LINES.forEach(({ text, delay }) => {
      setTimeout(() => {
        setBootLines((prev) => [...prev, text]);
        if (delay === 600) setBootDone(true);
      }, delay + 400);
    });
  }, []);

  // Scroll terminal body internally using scrollTop — never touches page scroll
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, bootLines]);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) return;
    // Walk up DOM to get true absolute offsetTop
    let top = 0;
    let current: HTMLElement = el;
    while (current.offsetParent) {
      top += current.offsetTop;
      current = current.offsetParent as HTMLElement;
    }
    window.scrollTo({ top: top - 64, behavior: "instant" });
  };

  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();

    setHistory((prev) => [...prev, { type: "input", text: raw }]);

    if (!cmd) return;

    if (cmd === "help") {
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          text: "Available: cd <section>  |  ls  |  clear  |  whoami",
        },
      ]);
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "whoami") {
      setHistory((prev) => [
        ...prev,
        { type: "output", text: "sidharth — devops enthusiast & full-stack explorer" },
      ]);
      return;
    }

    if (cmd === "ls") {
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          text: Object.keys(VALID_SECTIONS).join("  "),
        },
      ]);
      return;
    }

    if (cmd.startsWith("cd ")) {
      const target = cmd.slice(3).trim();

      if (VALID_SECTIONS[target]) {
        setHistory((prev) => [
          ...prev,
          { type: "success", text: `→ navigating to /${target}` },
        ]);
        // Delay slightly so history state settles, then scroll page
        setTimeout(() => scrollToSection(VALID_SECTIONS[target]), 300);
        return;
      }

      setHistory((prev) => [
        ...prev,
        { type: "error", text: `cd: no such directory: ${target}` },
      ]);
      return;
    }

    setHistory((prev) => [
      ...prev,
      { type: "error", text: `bash: ${cmd}: command not found` },
    ]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.focus();
      }}
      onKeyDown={(e) => e.stopPropagation()}
      className="w-full max-w-sm border border-white/10 bg-black/60 backdrop-blur-sm cursor-text"
    >
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8 bg-white/2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <span className="ml-2 font-mono text-[10px] text-white/20 tracking-widest">
          bash — portfolio
        </span>
      </div>

      {/* Terminal body — scrollable via scrollTop only */}
      <div
        ref={bodyRef}
        className="p-4 h-52 overflow-y-auto font-mono text-xs flex flex-col gap-1 scrollbar-none"
      >
        {bootLines.map((line, i) => (
          <p key={i} className="text-white/25">
            {line}
          </p>
        ))}

        {bootDone && <p className="text-white/10 mb-1">─────────────────────</p>}

        {history.map((entry, i) => (
          <p
            key={i}
            className={
              entry.type === "input"
                ? "text-white/60"
                : entry.type === "success"
                ? "text-green-400/70"
                : entry.type === "error"
                ? "text-red-400/60"
                : "text-white/35"
            }
          >
            {entry.type === "input" && (
              <span className="text-white/20">$ </span>
            )}
            {entry.text}
          </p>
        ))}
      </div>

      {/* Input row */}
      {bootDone && (
        <div
          className="flex items-center gap-2 px-4 py-4 border-t border-white/10 bg-white/3"
          onClick={(e) => {
            e.stopPropagation();
            inputRef.current?.focus();
          }}
        >
          <span className="font-mono text-xs text-white/40 shrink-0 whitespace-nowrap">
            visitor@sidharth:~$
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent font-mono text-sm text-white/90 outline-none caret-white placeholder:text-white/30"
            placeholder="cd projects"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      )}
    </motion.div>
  );
}