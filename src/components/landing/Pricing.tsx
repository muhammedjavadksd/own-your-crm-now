import { Check } from "lucide-react";
import { pricing, site } from "@/data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="wrap">
        <div className="head head--center">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="h2">{pricing.title}</h2>
        </div>

        <div className="price-card">
          <span className="badge">One-time license</span>
          <div className="price-card__amount">{pricing.price}</div>
          <p className="price-card__caption">{pricing.priceCaption}</p>

          <ul className="check-list">
            {pricing.items.map((item) => (
              <li className="check" key={item}>
                <Check size={16} /> {item}
              </li>
            ))}
          </ul>

          <p className="guarantee">{pricing.guarantee}</p>

          <a className="btn btn--primary btn--block" href={site.mailto}>
            {pricing.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
