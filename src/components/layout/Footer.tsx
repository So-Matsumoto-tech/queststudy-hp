import Link from 'next/link';
import { Logo } from './Logo';
import { Container } from '@/components/ui/Container';
import { SITE, FOOTER_COLUMNS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-brand-parchment/10 bg-brand-night text-brand-parchment/75">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo height={44} showText={false} />
            <p className="mt-4 font-display text-base leading-relaxed text-brand-parchment">
              挑め、クエスト。
            </p>
            <a
              href={SITE.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-xs tracking-widest hover:text-brand-brass transition-colors"
            >
              {SITE.xHandle}
            </a>
          </div>

          {Object.values(FOOTER_COLUMNS).map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-mono text-xs uppercase tracking-widest text-brand-brass">
                {col.title}
              </div>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => {
                  const isExternal = 'external' in link && link.external;
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-parchment transition-colors whitespace-pre-line"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="hover:text-brand-parchment transition-colors whitespace-pre-line"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-brand-parchment/10 pt-8 text-xs text-brand-parchment/50 md:flex-row md:items-center md:justify-between">
          <div>
            © {SITE.year} {SITE.name}
          </div>
          <div className="flex gap-3 font-mono tracking-widest">
            <span>queststudy.jp</span>
            <span aria-hidden>·</span>
            <span>{SITE.xHandle}</span>
            <span aria-hidden>·</span>
            <span>EST.{SITE.launchYear}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
