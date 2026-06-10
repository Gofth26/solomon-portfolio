"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "chrisspk803@gmail.com", href: "mailto:chrisspk803@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/Gofth26", href: "https://github.com/Gofth26" },
  { icon: Linkedin, label: "LinkedIn", value: "Solomon Phelembe", href: "https://za.linkedin.com/in/solomon-phelembe-57271b1a4" },
  { icon: MessageCircle, label: "WhatsApp", value: "+27 64 746 5064", href: "https://wa.me/27647465064" },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="contact-panel">
          <div className="contact-copy"><span className="eyebrow"><span />05 / Contact</span><h2>Let&apos;s build something useful.</h2><p>Interested in working together, reviewing my projects, or discussing an IT opportunity? Let&apos;s connect.</p><div className="availability"><span /> Open to opportunities and collaborations</div></div>
          <div className="contact-links">
            {contacts.map((contact) => <a href={contact.href} key={contact.label} target="_blank" rel="noreferrer"><contact.icon /><div><span>{contact.label}</span><strong>{contact.value}</strong></div><ArrowUpRight /></a>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
