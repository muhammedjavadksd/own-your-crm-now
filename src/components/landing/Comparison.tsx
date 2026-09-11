import { comparison, site } from "@/data/content";

export default function Comparison() {
  return (
    <section id="compare" className="section">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">{comparison.eyebrow}</span>
          <h2 className="h2">{comparison.title}</h2>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                {comparison.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr className="row--highlight">
                {comparison.highlight.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="footnote">{comparison.footnote}</p>

        <div className="cta-center">
          <a className="btn btn--primary" href="#pricing">
            {site.ctaPrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
