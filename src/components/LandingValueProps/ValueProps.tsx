import { Code2, Palette, Briefcase, TrendingUp } from "lucide-react";
import ValuePropCard from "./ValuePropCard";
import { useInView } from "../../hooks/useInView";

export default function ValueProps() {
  const vp1 = useInView();
  const vp2 = useInView();
  const vp3 = useInView();
  const vp4 = useInView();

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What I Bring to the Table
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            ref={vp1.ref}
            className={`vp-hidden ${vp1.isVisible ? "vp-visible" : ""} h-full`}
            style={{ animationDelay: "0.1s" }}
          >
            <ValuePropCard
              icon={<Code2 size={32} />}
              title="Modern Full‑Stack Development"
              description="I build clean, scalable applications using React, TypeScript, Node.js, Express, and Laravel — with a focus on maintainable, component‑driven architecture."
            />
          </div>

          <div
            ref={vp2.ref}
            className={`vp-hidden ${vp2.isVisible ? "vp-visible" : ""} h-full`}
            style={{ animationDelay: "0.2s" }}
          >
            <ValuePropCard
              icon={<Palette size={32} />}
              title="Strong UI/UX Focus"
              description="I create interfaces that feel intuitive, modern, and user‑friendly. My work blends clean design with practical usability to deliver polished experiences."
            />
          </div>

          <div
            ref={vp3.ref}
            className={`vp-hidden ${vp3.isVisible ? "vp-visible" : ""} h-full`}
            style={{ animationDelay: "0.3s" }}
          >
            <ValuePropCard
              icon={<Briefcase size={32} />}
              title="Real Project Experience"
              description="From safety apps to event management systems and full CRUD platforms, I’ve built real, functional projects that solve real problems."
            />
          </div>

          <div
            ref={vp4.ref}
            className={`vp-hidden ${vp4.isVisible ? "vp-visible" : ""} h-full`}
            style={{ animationDelay: "0.4s" }}
          >
            <ValuePropCard
              icon={<TrendingUp size={32} />}
              title="Continuous Learning & Growth"
              description="My journey from early HTML sites to modern React builds shows my commitment to improving, adapting, and mastering new technologies."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
