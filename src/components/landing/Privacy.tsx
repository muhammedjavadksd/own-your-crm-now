import {
  Check,
  EyeOff,
  Lock,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { privacy, site } from "@/data/content";

const icons: Record<string, LucideIcon> = { EyeOff, TrendingUp, Lock };

export default function Privacy() {
  return (
    <>
      <section id="privacy" className="section">
        <div className="wrap">
          <div className="head head--center">
            <h2 className="h2">{privacy.pain.title}</h2>
            <p className="lede">{privacy.pain.subhead}</p>
          </div>

          <div className="grid3">
            {privacy.pain.cards.map((card) => {
              const Icon = icons[card.icon] ?? Lock;
              return (
                <div className="card" key={card.title}>
                  <span className="icon-box icon-box--light">
                    <Icon size={20} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <div className="response">
            <h2 className="h2">{privacy.response.title}</h2>
            <p className="lede">{privacy.response.text}</p>
            <ul className="check-list">
              {privacy.response.points.map((point) => (
                <li className="check" key={point}>
                  <Check size={16} /> {point}
                </li>
              ))}
            </ul>
            <div className="cta-row">
              <a className="btn btn--primary" href="#pricing">
                {privacy.response.ctaPrimary}
              </a>
              <a className="btn btn--outline" href={site.mailtoSetup}>
                {privacy.response.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
