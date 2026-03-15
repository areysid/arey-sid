"use client";

import SectionHeader from "../shared/SectionHeader";
import ContactHeading from "./ContactHeading";
import ContactLinks from "./ContactLinks";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <SectionHeader
          index="04"
          title="Contact"
          subtitle="Get in touch"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <ContactHeading />
          <ContactLinks />
        </div>

        {/* Footer */}
        <div className="mt-24 pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/15 tracking-widest">
            © {new Date().getFullYear()} Sidharth Malpani
          </span>
          <span className="font-mono text-[10px] text-white/10 tracking-widest">
            built with next.js
          </span>
        </div>
      </div>
    </section>
  );
}
