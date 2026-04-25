import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description:
    'QuestStudyの特定商取引法に基づく表記。販売業者情報、商品価格、支払方法、返品条件等を記載。',
};

export default function TokushohoPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <article className="mx-auto max-w-prose text-brand-parchment/85">
            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-brand-brass">
              Legal · Act on Specified Commercial Transactions
            </div>
            <h1 className="mb-2 font-display text-4xl md:text-5xl text-brand-parchment leading-tight">
              特定商取引法に基づく表記
            </h1>
            <p className="mb-12 text-sm text-brand-parchment/60">
              最終更新：2026年5月2日（初版）
            </p>

            <div className="overflow-hidden rounded-sm border border-brand-parchment/10">
              <dl className="divide-y divide-brand-parchment/10">
                {[
                  ['販売業者', 'QuestStudy（屋号）'],
                  ['運営責任者', '松本壮'],
                  [
                    '所在地',
                    '請求があった場合に遅滞なく開示します。',
                  ],
                  [
                    '電話番号',
                    '請求があった場合に遅滞なく開示します。',
                  ],
                  ['メールアドレス', SITE.email],
                  [
                    '販売価格',
                    'Standard ¥1,480/月・¥14,800/年 ／ Pro ¥3,980/月・¥39,800/年 ／ Ultra ¥7,980/月・¥79,800/年（税込）',
                  ],
                  [
                    '商品代金以外の必要料金',
                    'インターネット接続料金、通信料金はお客様のご負担となります。',
                  ],
                  [
                    '支払方法',
                    'クレジットカード、Apple Pay、Google Pay',
                  ],
                  ['支払時期', 'ご購入時、または契約期間の自動更新時'],
                  [
                    '商品引渡時期',
                    '決済完了後、即時アクセス可能となります。',
                  ],
                  [
                    '返品・キャンセル条件',
                    'デジタルコンテンツの性質上、決済完了後の返品は原則として承っておりません。ただし、初回登録から14日間は全機能を無料でお試しいただけます。',
                  ],
                  [
                    '動作環境',
                    'モダンブラウザ（Chrome / Safari / Edge 最新版）、iOS 15以上、Android 10以上',
                  ],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 px-5 py-5"
                  >
                    <dt className="font-mono text-xs uppercase tracking-widest text-brand-brass md:pt-0.5">
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base text-brand-parchment/85 leading-relaxed">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-16 pt-8 border-t border-brand-parchment/10 text-xs text-brand-parchment/50">
              本表記は初版（v1 ドラフト）です。決済機能実装前に正式版に差し替えられます。
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
