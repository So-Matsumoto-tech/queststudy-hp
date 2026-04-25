import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-6">
        <Link
          href="/"
          aria-label={`${SITE.name} ホーム`}
          className="inline-flex items-center"
        >
          <Logo height={36} priority />
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={SITE.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) @queststudy_jp"
            className="text-brand-parchment/70 hover:text-brand-parchment transition-colors p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-brass"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.3 2h2.85l-6.22 7.11L18.3 18h-5.74l-4.49-5.87L2.87 18H0l6.66-7.6L0 2h5.86l4.06 5.37L14.3 2Zm-1 14.28h1.58L5.07 3.64H3.37L13.3 16.28Z" />
            </svg>
          </a>
          <Button href="/for-parents" variant="primary">
            <span className="hidden md:inline">▶ ゲームを試す（今夏ベータ）</span>
            <span className="md:hidden">▶ ベータ予告</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
