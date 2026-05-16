import { Code2, Palette, Briefcase, TrendingUp } from "lucide-react";
import ValuePropCard from "./ValuePropCard";

export default function ValueProps() {
  return (
    <section >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What I Bring to the Table
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ValuePropCard
            icon={<Code2 size={32} />}
            title="Modern Full‑Stack Development"
            description="I build clean, scalable applications using React, TypeScript, Node.js, Express, and Laravel — with a focus on maintainable, component‑driven architecture."
          />

          <ValuePropCard
            icon={<Palette size={32} />}
            title="Strong UI/UX Focus"
            description="I create interfaces that feel intuitive, modern, and user‑friendly. My work blends clean design with practical usability to deliver polished experiences."
          />

          <ValuePropCard
            icon={<Briefcase size={32} />}
            title="Real Project Experience"
            description="From safety apps to event management systems and full CRUD platforms, I’ve built real, functional projects that solve real problems."
          />

          <ValuePropCard
            icon={<TrendingUp size={32} />}
            title="Continuous Learning & Growth"
            description="My journey from early HTML sites to modern React builds shows my commitment to improving, adapting, and mastering new technologies."
          />
        </div>
      </div>
    </section>
  );
}
