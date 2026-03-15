"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">

        {/* Logo / Name + Avatar */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
        >
          {/* Circular avatar */}
          <div className="relative w-7 h-7 rounded-full overflow-hidden ring-1 ring-white/15 group-hover:ring-white/35 transition-all duration-300">
            <Image
              src="/me.jpg"
              alt={profile.name}
              fill
              className="object-cover"
              sizes="28px"
            />
          </div>

          {/* Name */}
          <span className="font-mono text-sm text-white/70 group-hover:text-white transition-colors duration-200">
            <span className="text-white/25 mr-1">~/</span>
            {profile.name.split(" ")[0].toLowerCase()}
          </span>
        </a>

        {/* Desktop nav */}
        <NavLinks />

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </motion.header>
  );
}