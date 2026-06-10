import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div><strong>Solomon Phelembe</strong><span>Flutter/Dart Developer &amp; IT Graduate</span></div>
        <p>&copy; 2026 Solomon Khothalang Phelembe. Built with Next.js, TypeScript, and Tailwind CSS.</p>
        <a href="#top" aria-label="Back to top"><ArrowUp /></a>
      </div>
    </footer>
  );
}
