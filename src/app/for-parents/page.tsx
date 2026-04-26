import type { Metadata } from 'next';
import Link from 'next/link';
import { V2Header } from '@/components/v2/V2Header';
import { V2Footer } from '@/components/v2/V2Footer';
import RevealOnView from '@/components/ui/RevealOnView';
import JsonLd from '@/components/seo/JsonLd';
import HeroDecor from '@/components/v2/HeroDecor';
import { SITE, PARENT_CARD } from '@/lib/constants';
import {
  SITE_URL,
  breadcrumbListSchema,
  softwareApplicationSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: '保護者の方へ',
  description:
    'マナ・マスタークロニクルは中学受験の家庭学習をRPGに変える学習アプリです。SM-2アルゴリズムとAIで忘却曲線に最適化された復習を実現。今夏ベータテスト開始予定。',
  alternates: {
    canonical: '/for-parents',
  },
};

const STATS = [
  { num: '86', unit: 'ゾーン', label: '攻略できる単元' },
  { num: '2,416', unit: '問', label: '中学受験対応の良問' },
  { num: '31', unit: '職業', label: 'キャラクター成長' },
  { num: '594', unit: 'スキル', label: '教科別の魔法' },
];

interface FeatureItem {
  num: string;
  title: string;
  desc: string;
}

const FEATURES: ReadonlyArray<FeatureItem> = [
  {
    num: '01',
    title: 'RPG として、勉強する',
    desc:
      '中学受験の単元をゾーンとして配置。問題を解くたびに敵を倒し、レベルが上がる。「もう一問解こう」が自然と続く構造',
  },
  {
    num: '02',
    title: 'AI が導く、苦手の発見',
    desc:
      'SM-2 アルゴリズムに沿って、お子様一人一人の忘却曲線に応じてAIが問題をセレクト。浅い記憶を深い長期記憶に変える設計',
  },
  {
    num: '03',
    title: '保護者ダッシュボードで、見える化',
    desc:
      '進捗・苦手単元・週次レポートを共有。家族で同じデータを見ながら、次の一手を話し合える環境を提供します',
  },
] as const;

export default function ForParentsPage() {
  return (
    <main className="v2-bg" id="main">
      <JsonLd
        data={breadcrumbListSchema([
          { name: 'ホーム', url: SITE_URL },
          { name: '保護者の方へ', url: `${SITE_URL}/for-parents` },
        ])}
      />
      <JsonLd data={softwareApplicationSchema()} />
      <V2Header />

      {/* ── Hero ── */}
      <section className="v2-hero" aria-labelledby="parents-heading">
        <HeroDecor />
        <div className="v2-container v2-hero-content">
          <div style={{ maxWidth: 760 }}>
            <span className="v2-hero-tag">FOR PARENTS</span>
            <h1 id="parents-heading" className="v2-hero-title">
              保護者の<span className="v2-hero-title-mark">方へ</span>。
            </h1>
            <p className="v2-hero-subtitle">
              {PARENT_CARD.title.replace('\n', '')}
            </p>
            <p className="v2-hero-sub">
              {PARENT_CARD.lead}
              <br />
              <strong>マナ・マスタークロニクル</strong>は今夏ベータテストを開始予定です。
            </p>
            <div className="v2-cta-row">
              <a
                href={SITE.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-primary"
              >
                X でベータ予告をフォロー
                <span className="v2-btn-arrow" aria-hidden>
                  →
                </span>
              </a>
              <Link href="/" className="v2-btn v2-btn-ghost">
                トップへ戻る
              </Link>
            </div>
            <p className="v2-hero-note">
              ベータテスト参加者を募集予定。準備が整い次第、X にてご案内します。
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="v2-strip" aria-label="サービス規模">
        <div className="v2-container">
          <div className="v2-strip-grid">
            {STATS.map((s, i) => (
              <RevealOnView key={s.label} delay={i * 80}>
                <div className="v2-strip-item">
                  <div className="v2-num v2-strip-num">
                    {s.num}
                    <span className="v2-strip-num-unit">{s.unit}</span>
                  </div>
                  <div className="v2-strip-rule" />
                  <div className="v2-strip-label">{s.label}</div>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY (親子の対立を、なくす) ── */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-story-grid">
            <RevealOnView className="v2-story-quote">
              <div className="v2-quote-mark" aria-hidden>
                ❝
              </div>
              <blockquote className="v2-quote-body">
                毎日の言い合いを、
                <br />
                <span className="v2-quote-mark-text">なくしたい</span>
                。
              </blockquote>
              <cite className="v2-quote-cite">— 開発思想</cite>
            </RevealOnView>

            <RevealOnView delay={140}>
              <div className="v2-section-eyebrow">WHY WE BUILD</div>
              <h2 className="v2-h2">
                「勉強しなさい」が
                <br />
                家庭から、消える。
              </h2>
              <p className="v2-prose">
                中学受験の現場では、保護者の声がけと子どもの反発が
                日常的に繰り返されます。私たちはそのループを
                断ち切りたくて、ロールプレイングゲームの構造に
                学習を埋め込みました。
              </p>
              <p className="v2-prose">
                正答すれば敵を倒せる、レベルアップで新しい職業に転職できる、
                クエストをクリアすれば仲間が増える ——
                <strong>子どもが自発的にマップを開きたくなる動機</strong>
                を、ゲームデザインの力で作っています。
              </p>
              <p className="v2-prose">
                同時に保護者の方へは、進捗・苦手単元・週次レポートを
                ダッシュボードでお届けします。家族で同じデータを見ながら、
                次の一手を話し合える環境を提供します。
              </p>
            </RevealOnView>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="v2-section v2-pillars-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-section-eyebrow">HOW IT WORKS</div>
            <h2 className="v2-h2">3 つのしくみで、続く学習に。</h2>
            <p className="v2-section-lead">
              ゲームとして成立する楽しさと、教育として機能する精度。
              両立させるための設計を、保護者の方にもお見せします。
            </p>
          </RevealOnView>

          <div className="v2-pillar-grid">
            {FEATURES.map((f, i) => (
              <RevealOnView key={f.num} delay={i * 100}>
                <article className="v2-pillar-card">
                  <div className="v2-pillar-kicker">{f.num}</div>
                  <h3 className="v2-pillar-title">{f.title}</h3>
                  <p className="v2-pillar-desc">{f.desc}</p>
                </article>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beta announcement callout ── */}
      <section className="v2-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-callout-card">
              <div className="v2-callout-text">
                <div className="v2-section-eyebrow">BETA · COMING SOON</div>
                <h2 className="v2-callout-title">
                  今夏、ベータテストを開始します。
                </h2>
                <p className="v2-callout-desc">
                  ベータテスト参加者を募集予定です。
                  準備が整い次第、X にてご案内します。
                  最新情報・開発の進捗は
                  {SITE.xHandle} で発信中。
                </p>
              </div>
              <a
                href={SITE.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-secondary"
              >
                X をフォロー
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
