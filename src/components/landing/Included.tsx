import {
  Apple,
  BookOpen,
  LayoutDashboard,
  Palette,
  ServerCog,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { included, site } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  LayoutDashboard,
  Smartphone,
  Apple,
  ServerCog,
  BookOpen,
  Palette,
};

export default function Included() {
  return (
    <section id="included" className="section section--dark glow grid-lines">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{included.eyebrow}</span>
          <h2 className="h2">{included.title}</h2>
          <p className="lede">{included.subhead}</p>
        </div>

        <div className="grid3">
          {included.items.map((item) => {
            const Icon = icons[item.icon] ?? LayoutDashboard;
            return (
              <div className="card card--dark" key={item.title}>
                <span className="icon-box">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
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
