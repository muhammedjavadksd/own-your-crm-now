import { Users } from "lucide-react";
import { site, stats } from "@/data/content";

export default function StatsStrip() {
  return (
    <section className="section section--tight">
      <div className="wrap">
        <div className="panel">
          <div>
            <span className="badge">
              <Users size={14} /> {stats.badge}
            </span>
            <h2 className="h2">{stats.title}</h2>
            <p className="lede">{stats.text}</p>
            <div className="cta-row">
              <a className="btn btn--primary" href="#pricing">
                {site.ctaPrimary}
              </a>
            </div>
          </div>

          <div className="stat-grid">
            {stats.tiles.map((tile) => (
              <div className="stat" key={tile.label}>
                <div className="stat__value">{tile.value}</div>
                <div className="stat__label">{tile.label}</div>
                <p className="stat__note">{tile.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
