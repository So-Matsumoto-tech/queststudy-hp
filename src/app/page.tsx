import Link from 'next/link';
import { V2Header } from '@/components/v2/V2Header';
import { V2Footer } from '@/components/v2/V2Footer';
import RevealOnView from '@/components/ui/RevealOnView';
import { PARENT_CARD, BUSINESS_CARD } from '@/lib/constants';

const STATS = [
  { num: '86', unit: 'ゾーン', label: '攻略できる単元' },
  { num: '2,416', unit: '問', label: '中学受験対応の良問' },
  { num: '31', unit: '職業', label: 'キャラクター成長' },
  { num: '594', unit: 'スキル', label: '教科別の魔法' },
];

export default function Page() {
  return (
    <main className="v2-bg" id="main">
      <V2Header />

      {/* ── Hero ── */}
      <section className="v2-hero" aria-labelledby="hero-heading">
        <div className="v2-container v2-hero-content">
          <div style={{ maxWidth: 760 }}>
            <span className="v2-hero-tag">CHALLENGE THE QUEST</span>
            <h1 id="hero-heading" className="v2-hero-title">
              挑め、<span className="v2-hero-title-mark">クエスト</span>。
            </h1>
            <p className="v2-hero-subtitle">
              エンディングは
              <span className="v2-hero-subtitle-mark">「合格」</span>
              だ。
            </p>
            <p className="v2-hero-sub">
              中学受験 × AI × RPG で、親子の対立をなくす。
              <br />
              解いた問題が経験値になり、間違えた問題は仲間と一緒に救い出す。
            </p>
            <div className="v2-cta-row">
              <Link href="/for-parents" className="v2-btn v2-btn-primary">
                ▶ ゲームを試す（今夏ベータテスト開始）
                <span className="v2-btn-arrow" aria-hidden>
                  →
                </span>
              </Link>
              <Link href="/story" className="v2-btn v2-btn-ghost">
                開発者プロフィール
              </Link>
            </div>
            <p className="v2-hero-note">
              ベータテスト参加者を募集予定。準備が整い次第ご案内します。
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

      {/* ── WHY WE BUILD ── */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-story-grid">
            <RevealOnView className="v2-story-quote">
              <div className="v2-quote-mark" aria-hidden>
                ❝
              </div>
              <blockquote className="v2-quote-body">
                親子の対立を、
                <br />
                <span className="v2-quote-mark-text">なくしたい</span>
                。
              </blockquote>
              <cite className="v2-quote-cite">— 開発思想</cite>
            </RevealOnView>

            <RevealOnView delay={140}>
              <div className="v2-section-eyebrow">WHY WE BUILD</div>
              <h2 className="v2-h2">
                「勉強しなさい」の100回より、
                <br />
                「次のゾーンが楽しみ」の1回。
              </h2>
              <p className="v2-prose">
                中学受験の現場では、保護者の声がけと子どもの反発が
                日常的に繰り返されます。
                私たちはそのループを断ち切りたくて、
                ロールプレイングゲームの構造に学習を埋め込みました。
              </p>
              <p className="v2-prose">
                正答すれば敵を倒せる、レベルアップで新しい職業に転職できる、
                クエストをクリアすれば仲間が増える ——
                <strong>子どもが自発的にマップを開きたくなる動機</strong>
                を、ゲームデザインの力で作っています。
              </p>
              <p className="v2-prose">
                同時に、保護者ダッシュボードで進捗・苦手単元・
                週次レポートを共有することで、家族で同じデータを
                見ながら次の一手を話し合える環境を提供します。
              </p>
            </RevealOnView>
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR ATLAS / Pillars ── */}
      <section className="v2-section v2-pillars-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-section-eyebrow">CHOOSE YOUR ATLAS</div>
            <h2 className="v2-h2">あなたの目的を、選んでください。</h2>
            <p className="v2-section-lead">
              保護者の方も、ビジネスパートナー候補の方も。
              QuestStudy を始めるための入り口は分かれています。
            </p>
          </RevealOnView>

          <div className="v2-pillar-grid">
            <RevealOnView delay={80}>
              <Link href={PARENT_CARD.ctaHref} className="v2-pillar-card">
                <div className="v2-pillar-kicker">{PARENT_CARD.kicker}</div>
                <h3 className="v2-pillar-title">{PARENT_CARD.title}</h3>
                <p className="v2-pillar-desc">{PARENT_CARD.lead}</p>
                <ul className="v2-pillar-list">
                  {PARENT_CARD.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <span className="v2-pillar-cta">
                  {PARENT_CARD.ctaLabel}
                  <span className="v2-btn-arrow" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </RevealOnView>

            <RevealOnView delay={160}>
              <Link href={BUSINESS_CARD.ctaHref} className="v2-pillar-card">
                <div className="v2-pillar-kicker">{BUSINESS_CARD.kicker}</div>
                <h3 className="v2-pillar-title">{BUSINESS_CARD.title}</h3>
                <p className="v2-pillar-desc">{BUSINESS_CARD.lead}</p>
                <span className="v2-pillar-cta">
                  {BUSINESS_CARD.ctaLabel}
                  <span className="v2-btn-arrow" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            </RevealOnView>
          </div>
        </div>
      </section>

      {/* ── Story callout ── */}
      <section className="v2-section">
        <div className="v2-container">
          <RevealOnView>
            <div className="v2-callout-card">
              <div className="v2-callout-text">
                <div className="v2-section-eyebrow">DEVELOPER</div>
                <h2 className="v2-callout-title">
                  開発者ストーリー / プロフィール
                </h2>
                <p className="v2-callout-desc">
                  2027 年に中学受験を控える娘の父親であり、
                  大手企業で AI ドリブン経営戦略立案を担当。
                  「学び方を変えれば、子どもは変われる」
                  — その確信から QuestStudy は生まれました。
                </p>
              </div>
              <Link href="/story" className="v2-btn v2-btn-secondary">
                プロフィールを見る
                <span className="v2-btn-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </RevealOnView>
        </div>
      </section>

      <V2Footer />
    </main>
  );
}
