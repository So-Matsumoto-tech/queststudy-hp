import type { Metadata } from 'next';
import Link from 'next/link';
import { V2Header } from '@/components/v2/V2Header';
import { V2Footer } from '@/components/v2/V2Footer';
import RevealOnView from '@/components/ui/RevealOnView';
import JsonLd from '@/components/seo/JsonLd';
import HeroDecor from '@/components/v2/HeroDecor';
import { SITE } from '@/lib/constants';
import { SITE_URL, breadcrumbListSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: '事業について',
  description:
    'QuestStudy は個人事業としてスタートしたばかりのプロジェクトです。事業パートナーの募集は現在行っておりません。',
  alternates: {
    canonical: '/for-business',
  },
};

interface StatusItem {
  num: string;
  title: string;
  desc: string;
}

const STATUS: ReadonlyArray<StatusItem> = [
  {
    num: '01',
    title: '個人事業として開始',
    desc:
      'QuestStudy は個人事業としてスタートしたばかりのプロジェクトです。代表は AI ドリブン経営戦略立案者として企業に在籍中。',
  },
  {
    num: '02',
    title: 'パートナー募集は未実施',
    desc:
      '現在、事業パートナーの公募は行っておりません。製品の確からしさを検証する段階に注力しています。',
  },
  {
    num: '03',
    title: '今後のご案内',
    desc:
      '法人化・事業展開のご案内は、準備が整い次第改めて公開します。お問い合わせは下記メールまでお気軽にどうぞ。',
  },
] as const;

export default function ForBusinessPage() {
  return (
    <main className="v2-bg" id="main">
      <JsonLd
        data={breadcrumbListSchema([
          { name: 'ホーム', url: SITE_URL },
          { name: '事業について', url: `${SITE_URL}/for-business` },
        ])}
      />
      <V2Header />

      {/* ── Hero ── */}
      <section className="v2-hero" aria-labelledby="business-heading">
        <HeroDecor />
        <div className="v2-container v2-hero-content">
          <div style={{ maxWidth: 760 }}>
            <span className="v2-hero-tag">FOR BUSINESS</span>
            <h1 id="business-heading" className="v2-hero-title">
              事業について<span className="v2-hero-title-mark">。</span>
            </h1>
            <p className="v2-hero-subtitle">
              QuestStudy は
              <span className="v2-hero-subtitle-mark">個人事業</span>
              として
              <br />
              スタートしたばかりのプロジェクトです。
            </p>
            <p className="v2-hero-sub">
              事業パートナーの公募は現在行っておりません。
              <br />
              準備が整い次第、改めてご案内します。
              <br />
              ご相談・お問い合わせは下記までお気軽にどうぞ。
            </p>
            <div className="v2-cta-row">
              <a
                href={`mailto:${SITE.email}`}
                className="v2-btn v2-btn-primary"
              >
                {SITE.email}
                <span className="v2-btn-arrow" aria-hidden>
                  →
                </span>
              </a>
              <Link href="/" className="v2-btn v2-btn-ghost">
                トップへ戻る
              </Link>
            </div>
            <p className="v2-hero-note">
              ご返信は数営業日内を目安にしておりますが、
              開発状況により前後する場合があります。
            </p>
          </div>
        </div>
      </section>

      {/* ── Status (3 facts) ── */}
      <section className="v2-section v2-pillars-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-section-eyebrow">CURRENT STATUS</div>
            <h2 className="v2-h2">いまの事業ステータス。</h2>
            <p className="v2-section-lead">
              個人事業として静かに走り出した QuestStudy の、
              事業面の現在地をお伝えします。
            </p>
          </RevealOnView>

          <div className="v2-pillar-grid">
            {STATUS.map((s, i) => (
              <RevealOnView key={s.num} delay={i * 100}>
                <article className="v2-pillar-card">
                  <div className="v2-pillar-kicker">{s.num}</div>
                  <h3 className="v2-pillar-title">{s.title}</h3>
                  <p className="v2-pillar-desc">{s.desc}</p>
                </article>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact callout ── */}
      <section className="v2-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-callout-card">
              <div className="v2-callout-text">
                <div className="v2-section-eyebrow">CONTACT</div>
                <h2 className="v2-callout-title">
                  ご相談・取材・パートナーシップのお問い合わせ。
                </h2>
                <p className="v2-callout-desc">
                  個人事業段階のため、すべてのお問い合わせに
                  お応えできない場合があります。
                  教育・受験 × AI 領域の取材や具体的な提携の
                  お話は、メールにて承ります。
                </p>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="v2-btn v2-btn-secondary"
              >
                メールで連絡する
                <span className="v2-btn-arrow" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </RevealOnView>
        </div>
      </section>

      <V2Footer />
    </main>
  );
}
