import { Plus } from "lucide-react";
import { faq } from "@/data/content";

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <div className="head head--center">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="h2">{faq.title}</h2>
        </div>

        <div className="faq-list">
          {faq.items.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <Plus size={18} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
