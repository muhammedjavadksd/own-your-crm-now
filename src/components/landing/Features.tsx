import { Check } from "lucide-react";
import { features, site } from "@/data/content";

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{features.eyebrow}</span>
          <h2 className="h2">{features.title}</h2>
          <p className="lede">{features.subhead}</p>
        </div>

        <div className="grid3">
          {features.groups.map((group) => (
            <div className="card" key={group.tag}>
              <span className="tag">{group.tag}</span>
              <h3>{group.title}</h3>
              <ul className="check-list">
                {group.items.map((item) => (
                  <li className="check" key={item}>
                    <Check size={15} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-center">
          <a className="btn btn--primary" href="#pricing">
            {site.ctaPrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
