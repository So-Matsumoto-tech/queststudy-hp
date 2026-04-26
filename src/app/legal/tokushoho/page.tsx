import type { Metadata } from 'next';
import Link from 'next/link';
import { V2Header } from '@/components/v2/V2Header';
import { V2Footer } from '@/components/v2/V2Footer';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description:
    'QuestStudyの特定商取引法に基づく表記。販売業者情報、商品価格、支払方法、返品条件等を記載。',
};

const ROWS: ReadonlyArray<readonly [string, string]> = [
  ['販売業者', 'QuestStudy（屋号）'],
  ['運営責任者', '松本壮'],
  ['所在地', '請求があった場合に遅滞なく開示します。'],
  ['電話番号', '請求があった場合に遅滞なく開示します。'],
  ['メールアドレス', SITE.email],
  [
    '販売価格',
    'Standard ¥1,480/月・¥14,800/年 ／ Pro ¥3,980/月・¥39,800/年 ／ Ultra ¥7,980/月・¥79,800/年（税込）',
  ],
  [
    '商品代金以外の必要料金',
    'インターネット接続料金、通信料金はお客様のご負担となります。',
  ],
  ['支払方法', 'クレジットカード、Apple Pay、Google Pay'],
  ['支払時期', 'ご購入時、または契約期間の自動更新時'],
  ['商品引渡時期', '決済完了後、即時アクセス可能となります。'],
  [
    '返品・キャンセル条件',
    'デジタルコンテンツの性質上、決済完了後の返品は原則として承っておりません。ただし、初回登録から14日間は全機能を無料でお試しいただけます。',
  ],
  [
    '動作環境',
    'モダンブラウザ（Chrome / Safari / Edge 最新版）、iOS 15以上、Android 10以上',
  ],
] as const;

export default function TokushohoPage() {
  return (
    <main className="v2-bg" id="main">
      <V2Header />

      <header className="v2-page-header">
        <div className="v2-container">
          <span className="v2-page-eyebrow">
            LEGAL · ACT ON SPECIFIED COMMERCIAL TRANSACTIONS
          </span>
          <h1 className="v2-page-title">特定商取引法に基づく表記</h1>
          <p className="v2-page-meta">最終更新：2026年5月2日（初版）</p>
        </div>
      </header>

      <div className="v2-container">
        <article className="v2-legal-article">
          <dl className="v2-legal-dl">
            {ROWS.map(([k, v]) => (
              <div key={k} className="v2-legal-dl-row">
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <p className="v2-legal-disclaimer">
            本表記は初版（v1 ドラフト）です。決済機能実装前に正式版に差し替えられます。
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
