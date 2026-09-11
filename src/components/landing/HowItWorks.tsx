import { CalendarClock } from "lucide-react";
import { howItWorks, site } from "@/data/content";

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{howItWorks.eyebrow}</span>
          <h2 className="h2">{howItWorks.title}</h2>
        </div>

        <div className="steps">
          {howItWorks.steps.map((step, i) => (
            <div className="card" key={step.title}>
              <span className="step__num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <p className="scarcity">
          <CalendarClock size={18} />
          {howItWorks.scarcity}
        </p>

        <div className="cta-center">
          <a className="btn btn--primary" href="#pricing">
            {site.ctaPrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
