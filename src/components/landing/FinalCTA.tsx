import { finalCta, site } from "@/data/content";

export default function FinalCTA() {
  return (
    <section id="contact" className="section section--dark glow grid-lines final">
      <div className="wrap">
        <h2 className="h2">{finalCta.title}</h2>
        <p className="lede">{finalCta.text}</p>
        <div className="cta-row">
          <a className="btn btn--primary" href={site.mailto}>
            {finalCta.primary}
          </a>
          <a
            className="btn btn--ghost"
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            {finalCta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
