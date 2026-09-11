import { Check, Sparkles } from "lucide-react";
import { hero, site } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="section section--dark glow grid-lines hero">
      <div className="wrap hero__grid">
        <span className="hero__pill">
          <Sparkles size={14} /> {hero.eyebrow}
        </span>
        <h1>
          {hero.titleStart}
          <span className="accent">{hero.titleAccent}</span>
          {hero.titleEnd}
        </h1>
        <p className="hero__sub">{hero.subhead}</p>

        <div className="checkrow">
          {hero.checklist.map((item) => (
            <span key={item}>
              <Check size={15} /> {item}
            </span>
          ))}
        </div>

        <div className="cta-row">
          <a className="btn btn--primary" href="#pricing">
            {site.ctaPrimary}
          </a>
          <a className="btn btn--ghost" href="#demo">
            {site.ctaSecondary}
          </a>
        </div>

        <p className="hero__note">{hero.note}</p>

        <div className="funnel">
          <p className="funnel__title">Live pipeline</p>
          <div className="funnel__stack">
            {hero.funnel.map((stage, i) => (
              <div
                key={stage.label}
                className={`funnel__stage funnel__stage--${i + 1}${
                  stage.active ? " funnel__stage--active" : ""
                }`}
              >
                <span>{stage.label}</span>
                <span>{stage.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
