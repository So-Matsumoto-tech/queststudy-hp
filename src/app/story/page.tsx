import type { Metadata } from 'next';
import Link from 'next/link';
import { V2Header } from '@/components/v2/V2Header';
import { V2Footer } from '@/components/v2/V2Footer';
import RevealOnView from '@/components/ui/RevealOnView';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: '開発者ストーリー / プロフィール',
  description:
    'QuestStudy 開発者プロフィール。AI ドリブン経営戦略立案者として企業に在籍中。2027 年中学受験を控える娘のために、中学受験 × AI × RPG の学習アプリ「マナ・マスタークロニクル」を個人事業として開発中。',
};

interface Highlight {
  num: string;
  title: string;
  desc: string;
}

const HIGHLIGHTS: ReadonlyArray<Highlight> = [
  {
    num: '01',
    title: '学び方の力',
    desc:
      '高 3 夏に総合偏差値 35 から早稲田大学へ。「勉強には勉強の仕方がある」という確信の原点。',
  },
  {
    num: '02',
    title: 'AI × 戦略',
    desc:
      '大手企業で AI ドリブン経営戦略立案を担当。\n設計と意思決定の知見を、子どもの学習体験に。',
  },
  {
    num: '03',
    title: '父として',
    desc:
      '2027 年に中学受験を控える娘の父。\n娘自身が共同開発者であり、\n最初のプレイテスター。',
  },
] as const;

export default function StoryPage() {
  return (
    <main className="v2-bg" id="main">
      <V2Header />

      {/* ── Hero ── */}
      <section className="v2-hero" aria-labelledby="story-heading">
        <div className="v2-container v2-hero-content">
          <div style={{ maxWidth: 760 }}>
            <span className="v2-hero-tag">PROFILE</span>
            <h1 id="story-heading" className="v2-hero-title">
              プロ<span className="v2-hero-title-mark">フィール</span>。
            </h1>
            <p className="v2-hero-subtitle">
              QuestStudy
              <span className="v2-hero-subtitle-mark">今冬創業予定</span>
              。
            </p>
            <p className="v2-hero-sub">
              中学受験 × AI × RPG で、親子の対立をなくす。
              <br />
              個人事業としてスタートしたばかりのプロジェクトを、
              誰がどんな思いで作っているか。
            </p>
          </div>
        </div>
      </section>

      {/* ── Profile (story-grid) ── */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-story-grid">
            <RevealOnView className="v2-story-quote">
              <div className="v2-quote-mark" aria-hidden>
                ❝
              </div>
              <blockquote className="v2-quote-body">
                学び方を変えれば、
                <br />
                <span className="v2-quote-mark-text">
                  子どもは変われる
                </span>
                。
              </blockquote>
              <cite className="v2-quote-cite">— 開発者</cite>
            </RevealOnView>

            <RevealOnView delay={140}>
              <div className="v2-section-eyebrow">DEVELOPER</div>
              <h2 className="v2-h2">
                父親として、
                <br />
                AI 経営戦略の立案者として。
              </h2>
              <p className="v2-prose">
                現在は大手企業で、AI ドリブン経営戦略立案の仕事をしています。
                <br />
                2027 年に中学受験を控える娘のために、
                中学受験 × AI × RPG の学習アプリ
                <br />
                「マナ・マスタークロニクル」を個人事業として開発中です。
              </p>
              <p className="v2-prose">
                他、AI を活用した学習アプリをユーザーの声を反映させながら
                開発予定です。
                <br />
                共同開発者である娘や、多くのご家庭の悩みに応えていきます。
              </p>
              <p className="v2-prose">
                高 3 の夏、総合偏差値 35 でしたが、早稲田大学への進学は
                人生を大きく変えました。
                <strong>勉強には勉強の仕方があります。</strong>
                <br />
                勉強は本来、楽しいもの —
                それがわかるだけで世界が変わってきます。
              </p>
              <p className="v2-prose">
                中学受験で毎日言い合いをする必要はあるでしょうか。
                <br />
                勉強が嫌いになっていないでしょうか。
                <br />
                興味関心を失っていないでしょうか。
                <br />
                父親としての経験と、AI ドリブン経営の戦略立案者としての知見を
                活かし、
                <br />
                日本の教育文化が少しでも変われば嬉しく思います。
              </p>
            </RevealOnView>
          </div>
        </div>
      </section>

      {/* ── Highlights (3 cards) ── */}
      <section className="v2-section v2-pillars-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-section-eyebrow">HIGHLIGHTS</div>
            <h2 className="v2-h2">3 つの軸で、QuestStudy を作っています。</h2>
          </RevealOnView>

          <div className="v2-pillar-grid">
            {HIGHLIGHTS.map((h, i) => (
              <RevealOnView key={h.num} delay={i * 100}>
                <article className="v2-pillar-card">
                  <div className="v2-pillar-kicker">{h.num}</div>
                  <h3 className="v2-pillar-title">{h.title}</h3>
                  <p className="v2-pillar-desc">{h.desc}</p>
                </article>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      {/* ── Developer story · coming soon ── */}
      <section className="v2-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-callout-card">
              <div className="v2-callout-text">
                <div className="v2-section-eyebrow">
                  DEVELOPER STORY · COMING SOON
                </div>
                <h2 className="v2-callout-title">
                  開発者ストーリー、5 月に全文公開予定。
                </h2>
                <p className="v2-callout-desc">
                  なぜ受験 × ゲーム という組み合わせに辿り着いたのか。
                  <br />
                  娘との共同開発で何が起きたのか。
                  <br />
                  AI ドリブン経営戦略の現場で得た学びを、
                  どう学習体験に落とし込んだのか。
                  <br />
                  続きは X で先行アナウンスします。
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

      {/* ── CTA ── */}
      <section className="v2-section">
        <div className="v2-container" style={{ textAlign: 'center' }}>
          <Link href="/" className="v2-btn v2-btn-ghost">
            ← トップへ戻る
          </Link>
        </div>
      </section>

      <V2Footer />
    </main>
  );
}
