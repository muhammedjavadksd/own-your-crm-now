import { useEffect, useState } from "react";
import { Boxes } from "lucide-react";
import { site } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "header header--scrolled" : "header"}>
      <div className="wrap header__inner">
        <a className="mark" href="#top">
          <span className="mark__icon">
            <Boxes size={16} />
          </span>
          {site.brand}
        </a>
        <a className="btn btn--primary" href="#pricing">
          <span className="header__full">{site.ctaPrimary}</span>
          <span className="header__short">{site.ctaPrimaryShort}</span>
        </a>
      </div>
    </header>
  );
}
