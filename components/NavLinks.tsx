"use client";

const links = [
    { label: "story", href: "#story" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
];

export default function NavLinks() {
    return (
        <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="font-mono text-xs text-white/40 hover:text-white/90 transition-colors duration-200 tracking-widest uppercase"
                >
                    {link.label}
                </a>
            ))}
        </nav>
    );
}