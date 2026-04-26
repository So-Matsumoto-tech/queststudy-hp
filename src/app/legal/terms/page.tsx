import type { Metadata } from 'next';
import Link from 'next/link';
import { V2Header } from '@/components/v2/V2Header';
import { V2Footer } from '@/components/v2/V2Footer';

export const metadata: Metadata = {
  title: '利用規約',
  description:
    'QuestStudyおよび関連サービスの利用規約。適用範囲、禁止事項、免責、知的財産権、準拠法。',
};

interface Article {
  num: string;
  title: string;
  body: React.ReactNode;
}

const ARTICLES: ReadonlyArray<Article> = [
  {
    num: '第1条',
    title: '適用範囲',
    body: (
      <p>
        本規約は、QuestStudy（以下「当サービス」）が提供する一切のサービスに適用されます。ユーザーが当サービスを利用した時点で、本規約に同意したものとみなします。
      </p>
    ),
  },
  {
    num: '第2条',
    title: '定義',
    body: (
      <p>
        本規約における「ユーザー」とは、当サービスを利用する個人または法人をいいます。「コンテンツ」とは、当サービスを通じて提供されるすべての情報、画像、テキスト、プログラム等をいいます。
      </p>
    ),
  },
  {
    num: '第3条',
    title: 'サービス内容',
    body: (
      <p>
        当サービスは、中学受験生およびその保護者を対象とした学習支援サービスを提供します。サービスの内容は、運営上の必要に応じて変更される場合があります。
      </p>
    ),
  },
  {
    num: '第4条',
    title: 'アカウント登録',
    body: (
      <p>
        当サービスの一部機能を利用するには、アカウント登録が必要です。登録情報は正確かつ最新のものを提供してください。アカウントの管理はユーザーの責任において行うものとします。
      </p>
    ),
  },
  {
    num: '第5条',
    title: '料金および支払い',
    body: (
      <p>
        有料プランの料金および支払い方法は、当サービス内で明示します。支払いはクレジットカードまたは当サービスが指定する方法で行うものとします。
      </p>
    ),
  },
  {
    num: '第6条',
    title: '禁止事項',
    body: (
      <>
        <p>ユーザーは以下の行為を行ってはなりません。</p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当サービスのサーバー、ネットワークの機能を破壊・妨害する行為</li>
          <li>当サービスの運営を妨害する行為</li>
          <li>他のユーザーに関する個人情報を収集・蓄積する行為</li>
          <li>他のユーザーに成りすます行為</li>
          <li>逆コンパイル、逆アセンブル等の行為</li>
          <li>有料コンテンツを不正に取得、転売、再配布する行為</li>
          <li>当サービスの承認していない商用利用</li>
        </ul>
      </>
    ),
  },
  {
    num: '第7条',
    title: '知的財産権',
    body: (
      <p>
        当サービス内のすべてのコンテンツ（テキスト、画像、プログラム、アルゴリズム等）に関する著作権その他の知的財産権は、QuestStudyまたは正当な権利者に帰属します。ユーザーは、権利者の事前許諾なく、これらを複製・転載・改変・二次利用してはなりません。
      </p>
    ),
  },
  {
    num: '第8条',
    title: '免責事項',
    body: (
      <p>
        当サービスは、情報の正確性・完全性について保証するものではありません。メンテナンスや不可抗力によるサービス停止、データ損失等について、当サービスは責任を負わないものとします。ただし、当サービスに故意または重大な過失がある場合はこの限りではありません。
      </p>
    ),
  },
  {
    num: '第9条',
    title: '解約・退会',
    body: (
      <p>
        ユーザーはいつでもアカウントを解約・退会できます。退会後の個人情報の取り扱いは、プライバシーポリシーに従います。
      </p>
    ),
  },
  {
    num: '第10条',
    title: '規約の変更',
    body: (
      <p>
        当サービスは、必要と判断した場合、ユーザーに通知することなく本規約を変更することがあります。変更後の規約は、当サービス上に掲示された時点から効力を生じるものとします。
      </p>
    ),
  },
  {
    num: '第11条',
    title: '準拠法',
    body: <p>本規約の解釈および適用は、日本法に準拠するものとします。</p>,
  },
  {
    num: '第12条',
    title: '管轄裁判所',
    body: (
      <p>
        本規約に関して生じた一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
      </p>
    ),
  },
] as const;

export default function TermsPage() {
  return (
    <main className="v2-bg" id="main">
      <V2Header />

      <header className="v2-page-header">
        <div className="v2-container">
          <span className="v2-page-eyebrow">LEGAL · TERMS OF SERVICE</span>
          <h1 className="v2-page-title">利用規約</h1>
          <p className="v2-page-meta">
            施行日：2026年5月2日（初版） ／ 運営者：QuestStudy（屋号） / 松本壮
          </p>
        </div>
      </header>

      <div className="v2-container">
        <article className="v2-legal-article">
          {ARTICLES.map((a) => (
            <section key={a.num}>
              <h2>
                {a.num}（{a.title}）
              </h2>
              {a.body}
            </section>
          ))}

          <p className="v2-legal-disclaimer">
            本規約は初版（v1 ドラフト）です。本公開前に専門家レビューを経て正式版に差し替えられます。
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
