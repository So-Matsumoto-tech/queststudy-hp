'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SITE } from '@/lib/constants';
import LogoMark from './LogoMark';

export function V2Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`v2-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="v2-container v2-nav-inner">
        <Link
          href="/"
          aria-label={`${SITE.name} ホーム`}
          className="v2-nav-logo"
        >
          <LogoMark size={28} variant="horizontal" />
        </Link>

        <div className="v2-nav-actions">
          <a
            href={SITE.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) @queststudy_jp"
            className="v2-nav-icon"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.3 2h2.85l-6.22 7.11L18.3 18h-5.74l-4.49-5.87L2.87 18H0l6.66-7.6L0 2h5.86l4.06 5.37L14.3 2Zm-1 14.28h1.58L5.07 3.64H3.37L13.3 16.28Z" />
            </svg>
          </a>
          <Link href="/for-parents" className="v2-btn v2-btn-primary">
            <span style={{ display: 'inline' }} className="v2-nav-cta-full">
              ▶ ゲームを試す（今夏ベータ）
            </span>
            <span className="v2-btn-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
