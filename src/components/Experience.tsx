import { experience } from "@/data/experience";
import ExperienceTimeline from "./ExperienceTimeline";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle eyebrow="04 / Experience" title="Built in code. Grounded in operations." description="My path connects technical learning with direct experience in retail, customer service, sales, and support." />
        <ExperienceTimeline items={experience} />
      </div>
    </section>
  );
}
