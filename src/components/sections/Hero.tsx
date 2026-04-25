import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

/**
 * Hero section.
 *
 * The hero image has display text ("挑め、クエスト。") baked into the
 * artwork for typographic fidelity. We still render the text in the
 * DOM via `sr-only` so screen readers + SEO crawlers read it.
 *
 * CTAs are real DOM elements layered over the image.
 */
export function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/hero/QuestStudy_HP_Hero_1920x1080.png"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 100vw, 0px"
        className="hidden md:block object-cover object-left"
        aria-hidden="true"
      />
      <Image
        src="/hero/QuestStudy_HP_Hero_Mobile_1080x1920.png"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 100vw, 0px"
        className="block md:hidden object-cover"
        aria-hidden="true"
      />

      <h1 id="hero-heading" className="sr-only">
        {SITE.tagline} — 中学受験 × AI × RPGで、親子の対立をなくす。
      </h1>

      <div className="relative z-10 mt-auto w-full pb-[30vh] md:pb-[28vh]">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-3 md:flex-row md:gap-4">
            <Button href="/for-parents" variant="primary">
              <span className="hidden sm:inline">▶ ゲームを試す（今夏ベータテスト開始）</span>
              <span className="sm:hidden">▶ ゲームを試す（今夏）</span>
            </Button>
          </div>
          <p className="mt-3 text-xs font-mono tracking-widest text-brand-parchment/60">
            ベータテスト参加者を募集予定。準備が整い次第ご案内します。
          </p>
        </div>
      </div>
    </section>
  );
}
