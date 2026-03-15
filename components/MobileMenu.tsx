"use client";

import { motion } from "framer-motion";

const links = [
    { label: "story", href: "#story" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
];

export default function MobileMenu({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
        >
            <nav className="container-custom flex flex-col py-4 gap-4">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="font-mono text-sm text-white/50 hover:text-white transition-colors py-1 tracking-widest uppercase"
                    >
                        ./{link.label}
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}