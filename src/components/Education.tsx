"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="education-section">
      <div className="container">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="education-banner">
          <div className="education-icon"><GraduationCap /></div>
          <div><span className="eyebrow"><span />Education</span><h2>Diploma in Information Technology</h2><p>Central University of Technology, Free State</p></div>
          <div className="cum-laude"><Award /><span>Completed</span><strong>Cum Laude</strong></div>
        </motion.div>
      </div>
    </section>
  );
}
