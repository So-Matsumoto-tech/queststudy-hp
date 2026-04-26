import type { Metadata } from 'next';
import Link from 'next/link';
import { V2Header } from '@/components/v2/V2Header';
import { V2Footer } from '@/components/v2/V2Footer';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    'QuestStudyにおける個人情報の取り扱い方針。収集情報、利用目的、未成年者への配慮、開示請求方法を記載。',
};

export default function PrivacyPage() {
  return (
    <main className="v2-bg" id="main">
      <V2Header />

      <header className="v2-page-header">
        <div className="v2-container">
          <span className="v2-page-eyebrow">LEGAL · PRIVACY POLICY</span>
          <h1 className="v2-page-title">プライバシーポリシー</h1>
          <p className="v2-page-meta">
            施行日：2026年5月2日（初版） ／ 運営者：QuestStudy（屋号） / 松本壮
          </p>
        </div>
      </header>

      <div className="v2-container">
        <article className="v2-legal-article">
          <section>
            <h2>1. 事業者情報</h2>
            <p>
              屋号：QuestStudy
              <br />
              代表者：松本壮
              <br />
              連絡先：{SITE.email}
            </p>
          </section>

          <section>
            <h2>2. 収集する個人情報</h2>
            <p>当サービスは以下の情報を取得する場合があります。</p>
            <ul>
              <li>氏名、メールアドレス、パスワード（ハッシュ化して保存）</li>
              <li>お子様の学年、通塾状況等のプロフィール情報</li>
              <li>学習行動データ（正答率、回答時間、プレイ時間等）</li>
              <li>利用デバイス情報、ブラウザ種別、IPアドレス</li>
              <li>Cookieおよび類似技術で取得する情報</li>
            </ul>
          </section>

          <section>
            <h2>3. 利用目的</h2>
            <ul>
              <li>サービスの提供・改善および新機能の開発</li>
              <li>保護者の方への学習状況のご報告</li>
              <li>SM-2アルゴリズム等の個別最適化</li>
              <li>お問い合わせへの対応およびユーザーサポート</li>
              <li>利用状況の分析による品質向上</li>
            </ul>
          </section>

          <section>
            <h2>4. 第三者提供</h2>
            <p>
              取得した個人情報は、法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2>5. 保存期間</h2>
            <p>
              アカウントの有効期間中および退会後1年間保存します。ただし、法令上の保存義務がある場合はそれに従います。
            </p>
          </section>

          <section>
            <h2>6. 開示・訂正・削除請求</h2>
            <p>
              ご自身の個人情報の開示・訂正・削除をご希望の場合、{SITE.email}{' '}
              までメールにてご連絡ください。ご本人確認の上、適切に対応いたします。
            </p>
          </section>

          <section>
            <h2>7. 未成年者への特別な配慮</h2>
            <p>
              13歳未満のお子様が当サービスを利用される場合、保護者の方の同意が必要です。保護者アカウントとの紐付けにより管理を行います。個人情報の収集・利用にあたっては、適切な配慮を行います。
            </p>
          </section>

          <section>
            <h2>8. Cookieの使用</h2>
            <p>
              当サービスではCookieおよび類似技術を使用します。ブラウザの設定により、Cookieの受け入れを拒否することが可能ですが、一部機能が利用できなくなる場合があります。
            </p>
          </section>

          <section>
            <h2>9. アクセス解析ツール</h2>
            <p>
              利用状況の分析のため、Google Analytics 4を使用する場合があります。収集される情報は匿名であり、個人を特定するものではありません。
            </p>
          </section>

          <section>
            <h2>10. 改定</h2>
            <p>
              本プライバシーポリシーは、法令の改正その他の必要に応じて改定することがあります。重要な変更については、当サイト上で30日以上前に告知します。
            </p>
          </section>

          <p className="v2-legal-disclaimer">
            本ポリシーは初版（v1 ドラフト）です。本公開前に専門家レビューを経て正式版に差し替えられます。
          </p>

          <div className="v2-legal-back">
            <Link href="/" className="v2-btn v2-btn-ghost">
              ← トップへ戻る
            </Link>
          </div>
        </article>
      </div>

      <V2Footer />
    </main>
  );
}
