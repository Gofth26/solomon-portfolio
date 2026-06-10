"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle eyebrow="02 / Capabilities" title="A toolkit for practical products." description="Mobile-first development, reliable data, and the operational understanding to connect both." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="skill-card">
              <div className="skill-index">0{index + 1}</div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
