"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, CheckCircle2, Code2, Sparkles } from "lucide-react";

const stats = [
  { value: "8", label: "Product concepts" },
  { value: "3+", label: "Years building" },
  { value: "Cum Laude", label: "IT graduate" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-grid" />
      <div className="container hero-layout">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
          <div className="availability"><span /> Available for IT opportunities</div>
          <p className="hero-kicker">Hello, I&apos;m Solomon Phelembe.</p>
          <h1>I turn real-world problems into <em>useful software.</em></h1>
          <p className="hero-intro">Flutter/Dart Developer &amp; IT Graduate building practical solutions for retail operations, productivity, finance, utilities, and business management.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View projects <ArrowDown size={18} /></a>
            <a href="#contact" className="button button-secondary">Contact me <ArrowUpRight size={18} /></a>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="hero-visual">
          <div className="window-bar"><div><span /><span /><span /></div><small>solomon.builds / workspace</small><Code2 size={16} /></div>
          <div className="dashboard">
            <div className="dashboard-top">
              <div><span className="mono-label">ACTIVE PROJECT</span><h3>AHEAD</h3><p>Retail expiry intelligence</p></div>
              <div className="pulse-orb"><Sparkles size={24} /></div>
            </div>
            <div className="metric-grid">
              <div className="metric"><span>Products tracked</span><strong>1,248</strong><small className="positive">+18% this month</small></div>
              <div className="metric"><span>Waste prevented</span><strong>R 12.4k</strong><small className="positive">Live estimate</small></div>
            </div>
            <div className="progress-card">
              <div><span>Release progress</span><strong>82%</strong></div>
              <div className="progress-track"><motion.span initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1.4, delay: 0.6 }} /></div>
            </div>
            <div className="activity-list">
              {["Expiry alert engine", "Manager sign-off workflow", "Owner analytics dashboard"].map((item, index) => (
                <div key={item}><CheckCircle2 size={16} /><span>{item}</span><small>0{index + 1}</small></div>
              ))}
            </div>
          </div>
          <div className="floating-tag"><span>Current focus</span><strong>Retail-tech systems</strong></div>
        </motion.div>
      </div>
    </section>
  );
}
