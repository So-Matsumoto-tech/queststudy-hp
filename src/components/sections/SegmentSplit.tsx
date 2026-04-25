import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PARENT_CARD, BUSINESS_CARD } from '@/lib/constants';

interface SegmentCardProps {
  variant: 'parent' | 'business';
  kicker: string;
  title: string;
  lead: string;
  points: readonly string[];
  ctaLabel: string;
  ctaHref: string;
}

function SegmentCard({
  variant,
  kicker,
  title,
  lead,
  points,
  ctaLabel,
  ctaHref,
}: SegmentCardProps) {
  const isParent = variant === 'parent';
  const surface = isParent
    ? 'border-brand-brass/40 bg-gradient-to-br from-brand-brass/10 to-transparent'
    : 'border-brand-celestial/40 bg-brand-night/60';

  return (
    <Link
      href={ctaHref}
      className={`group flex flex-col h-full rounded-sm border p-8 md:p-10 lg:p-12 transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-brand-brass ${surface}`}
    >
      <div className="mb-4 font-mono text-xs tracking-widest text-brand-brass">
        {kicker}
      </div>
      <h3 className="mb-5 min-h-[5rem] md:min-h-[6rem] font-display text-2xl md:text-3xl leading-snug text-brand-parchment whitespace-pre-line">
        {title}
      </h3>
      <p className="mb-6 min-h-[7rem] text-sm md:text-base leading-relaxed text-brand-parchment/80 whitespace-pre-line">
        {lead}
      </p>
      {points.length > 0 && (
        <ul className="mb-8 space-y-2 text-sm text-brand-parchment/75">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-brand-brass shrink-0" aria-hidden>
                ・
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand-parchment group-hover:text-brand-brass transition-colors">
        {ctaLabel}
        <span aria-hidden>▶</span>
      </span>
    </Link>
  );
}

export function SegmentSplit() {
  return (
    <section className="relative w-full bg-brand-night py-20 md:py-28">
      <Container>
        <div className="mb-12 text-center">
          <div className="font-mono text-xs tracking-widest text-brand-brass">
            ─── CHOOSE YOUR ATLAS ───
          </div>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <SegmentCard variant="parent" {...PARENT_CARD} />
          <SegmentCard variant="business" {...BUSINESS_CARD} />
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/story"
            className="inline-block font-display text-xl md:text-2xl text-brand-parchment underline underline-offset-8 decoration-brand-brass/60 hover:decoration-brand-brass hover:text-brand-brass transition-colors"
          >
            開発者ストーリー / プロフィール
          </Link>
        </p>
      </Container>
    </section>
  );
}
