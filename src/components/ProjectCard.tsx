"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, CircleDot } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article layout initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: (index % 2) * 0.08 }} className={`project-card accent-${project.accent}`}>
      <div className="project-card-top">
        <div className="project-number">0{index + 1}</div>
        <div className="status"><CircleDot size={14} />{project.status}</div>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="feature-row">{project.features.slice(0, 3).map((feature) => <span key={feature}>{feature}</span>)}</div>
      <div className="tech-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <button className="case-button" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? "Close case study" : "View case study"} <ChevronDown className={open ? "rotated" : ""} size={17} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="case-study">
            <div className="case-study-inner">
              <div><small>Problem</small><p>{project.problem}</p></div>
              <div><small>Solution</small><p>{project.solution}</p></div>
              <div><small>Business value</small><p>{project.businessValue}</p></div>
              <div><small>Future improvements</small><ul>{project.future.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <a href="#contact">Discuss this project <ArrowUpRight size={16} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
