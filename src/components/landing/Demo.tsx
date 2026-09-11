import { demo } from "@/data/content";

export default function Demo() {
  return (
    <section id="demo" className="section glow">
      <div className="wrap">
        <div className="head head--center">
          <span className="eyebrow">{demo.eyebrow}</span>
          <h2 className="h2">{demo.title}</h2>
          <p className="lede">{demo.subhead}</p>
        </div>

        <div className="demo-frame">
          <div className="browser">
            <div className="browser__bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <div className="browser__body">
              <div className="blocks">
                <span className="bar bar--accent" />
                <span className="bar" />
                <span className="bar bar--w80" />
                <span className="bar bar--w60" />
                <span className="bar bar--w80" />
                <span className="bar bar--w40" />
              </div>
              <div>
                <div className="tiles">
                  <span className="tile" />
                  <span className="tile" />
                  <span className="tile" />
                </div>
                <div className="chart">
                  <i style={{ height: "40%" }} />
                  <i style={{ height: "78%" }} />
                  <i style={{ height: "54%" }} />
                  <i style={{ height: "66%" }} />
                  <i style={{ height: "34%" }} />
                  <i style={{ height: "58%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="phone">
            <span className="phone__notch" />
            <div className="phone__card">
              <span className="bar bar--accent bar--w60" />
              <span className="bar bar--w80" />
              <span className="bar bar--w40" />
            </div>
            <div className="phone__card">
              <span className="bar bar--w80" />
              <span className="bar bar--w60" />
            </div>
            <div className="phone__card">
              <span className="bar bar--w40" />
              <span className="bar bar--accent bar--w80" />
            </div>
          </div>
        </div>

        <div className="cta-center">
          <a className="btn btn--primary" href={demo.ctaHref}>
            {demo.cta}
          </a>
        </div>
        <p className="demo-note" style={{ textAlign: "center" }}>
          {demo.note}
        </p>
      </div>
    </section>
  );
}
