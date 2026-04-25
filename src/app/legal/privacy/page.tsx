import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    'QuestStudyにおける個人情報の取り扱い方針。収集情報、利用目的、未成年者への配慮、開示請求方法を記載。',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <article className="mx-auto max-w-prose text-brand-parchment/85">
            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-brand-brass">
              Legal · Privacy Policy
            </div>
            <h1 className="mb-2 font-display text-4xl md:text-5xl text-brand-parchment leading-tight">
              プライバシーポリシー
            </h1>
            <p className="mb-12 text-sm text-brand-parchment/60">
              施行日：2026年5月2日（初版） 運営者：QuestStudy（屋号） / 松本壮
            </p>

            <section className="space-y-10 text-base leading-relaxed">
              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  1. 事業者情報
                </h2>
                <p>
                  屋号：QuestStudy
                  <br />
                  代表者：松本壮
                  <br />
                  連絡先：{SITE.email}
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  2. 収集する個人情報
                </h2>
                <p>
                  当サービスは以下の情報を取得する場合があります。
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-1 text-brand-parchment/80">
                  <li>氏名、メールアドレス、パスワード（ハッシュ化して保存）</li>
                  <li>お子様の学年、通塾状況等のプロフィール情報</li>
                  <li>学習行動データ（正答率、回答時間、プレイ時間等）</li>
                  <li>利用デバイス情報、ブラウザ種別、IPアドレス</li>
                  <li>Cookieおよび類似技術で取得する情報</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  3. 利用目的
                </h2>
                <ul className="list-disc pl-6 space-y-1 text-brand-parchment/80">
                  <li>サービスの提供・改善および新機能の開発</li>
                  <li>保護者の方への学習状況のご報告</li>
                  <li>SM-2アルゴリズム等の個別最適化</li>
                  <li>お問い合わせへの対応およびユーザーサポート</li>
                  <li>利用状況の分析による品質向上</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  4. 第三者提供
                </h2>
                <p>
                  取得した個人情報は、法令に基づく場合を除き、ご本人の同意なく第三者に提供することはありません。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  5. 保存期間
                </h2>
                <p>
                  アカウントの有効期間中および退会後1年間保存します。ただし、法令上の保存義務がある場合はそれに従います。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  6. 開示・訂正・削除請求
                </h2>
                <p>
                  ご自身の個人情報の開示・訂正・削除をご希望の場合、{SITE.email}{' '}
                  までメールにてご連絡ください。ご本人確認の上、適切に対応いたします。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  7. 未成年者への特別な配慮
                </h2>
                <p>
                  13歳未満のお子様が当サービスを利用される場合、保護者の方の同意が必要です。保護者アカウントとの紐付けにより管理を行います。個人情報の収集・利用にあたっては、適切な配慮を行います。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  8. Cookieの使用
                </h2>
                <p>
                  当サービスではCookieおよび類似技術を使用します。ブラウザの設定により、Cookieの受け入れを拒否することが可能ですが、一部機能が利用できなくなる場合があります。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  9. アクセス解析ツール
                </h2>
                <p>
                  利用状況の分析のため、Google Analytics 4を使用する場合があります。収集される情報は匿名であり、個人を特定するものではありません。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">
                  10. 改定
                </h2>
                <p>
                  本プライバシーポリシーは、法令の改正その他の必要に応じて改定することがあります。重要な変更については、当サイト上で30日以上前に告知します。
                </p>
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-brand-parchment/10 text-xs text-brand-parchment/50">
              本ポリシーは初版（v1 ドラフト）です。本公開前に専門家レビューを経て正式版に差し替えられます。
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
