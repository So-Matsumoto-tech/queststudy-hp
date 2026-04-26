import Link from 'next/link';
import { SITE, FOOTER_COLUMNS } from '@/lib/constants';

export function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-container">
        <div className="v2-footer-grid">
          <div>
            <div className="v2-footer-brand-name">{SITE.name}</div>
            <p className="v2-footer-brand-tagline">
              中学受験 × AI × RPG で、親子の対立をなくす。
            </p>
            <a
              href={SITE.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-footer-x"
            >
              {SITE.xHandle}
            </a>
          </div>

          {Object.values(FOOTER_COLUMNS).map((col) => (
            <div key={col.title} className="v2-footer-col">
              <div className="v2-footer-col-title">{col.title}</div>
              <ul>
                {col.links.map((link) => {
                  const isExternal = 'external' in link && link.external;
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>{link.label}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="v2-footer-bottom">
          <div>© {SITE.year} {SITE.name}</div>
          <div>
            queststudy.jp · {SITE.xHandle} · EST.{SITE.launchYear}
          </div>
        </div>
      </div>
    </footer>
  );
}
