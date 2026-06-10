"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/data/experience";

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <motion.article key={`${item.role}-${item.company}`} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="timeline-item">
          <div className="timeline-marker"><span /></div>
          <div className="timeline-period">{item.period}</div>
          <div className="timeline-content">
            <h3>{item.role}</h3><span>{item.company}</span>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
