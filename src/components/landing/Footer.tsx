import { footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>{footer.copyright}</p>
        <nav>
          {footer.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
