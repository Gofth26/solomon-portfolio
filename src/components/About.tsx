"use client";

import { motion } from "framer-motion";
import { Boxes, GraduationCap, Store, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";

const strengths = [
  { icon: Store, title: "Operational insight", text: "I understand the realities behind the software." },
  { icon: Boxes, title: "Product thinking", text: "I design systems around value, not just features." },
  { icon: Wrench, title: "Practical builder", text: "I turn ideas into usable, focused applications." },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionTitle eyebrow="01 / About" title="Technology shaped by real work." />
        <div className="about-grid">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="about-copy">
            <p className="large-copy">I&apos;m an IT graduate and Flutter developer who builds with one question in mind: <span>will this genuinely make someone&apos;s work or life easier?</span></p>
            <p>I completed my Diploma in Information Technology Cum Laude. My experience across retail operations, IT support, and software development helps me spot practical opportunities and build systems that fit the way people actually work.</p>
            <div className="education-chip"><GraduationCap /><div><strong>Diploma in Information Technology</strong><span>Central University of Technology - Cum Laude</span></div></div>
          </motion.div>
          <div className="strength-list">
            {strengths.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="strength-card">
                <item.icon /><div><strong>{item.title}</strong><p>{item.text}</p></div><span>0{index + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
