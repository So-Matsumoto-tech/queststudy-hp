import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: '利用規約',
  description:
    'QuestStudyおよび関連サービスの利用規約。適用範囲、禁止事項、免責、知的財産権、準拠法。',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <article className="mx-auto max-w-prose text-brand-parchment/85">
            <div className="mb-8 font-mono text-xs uppercase tracking-widest text-brand-brass">
              Legal · Terms of Service
            </div>
            <h1 className="mb-2 font-display text-4xl md:text-5xl text-brand-parchment leading-tight">
              利用規約
            </h1>
            <p className="mb-12 text-sm text-brand-parchment/60">
              施行日：2026年5月2日（初版） 運営者：QuestStudy（屋号） / 松本壮
            </p>

            <section className="space-y-10 text-base leading-relaxed">
              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第1条（適用範囲）</h2>
                <p>
                  本規約は、QuestStudy（以下「当サービス」）が提供する一切のサービスに適用されます。ユーザーが当サービスを利用した時点で、本規約に同意したものとみなします。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第2条（定義）</h2>
                <p>
                  本規約における「ユーザー」とは、当サービスを利用する個人または法人をいいます。「コンテンツ」とは、当サービスを通じて提供されるすべての情報、画像、テキスト、プログラム等をいいます。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第3条（サービス内容）</h2>
                <p>
                  当サービスは、中学受験生およびその保護者を対象とした学習支援サービスを提供します。サービスの内容は、運営上の必要に応じて変更される場合があります。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第4条（アカウント登録）</h2>
                <p>
                  当サービスの一部機能を利用するには、アカウント登録が必要です。登録情報は正確かつ最新のものを提供してください。アカウントの管理はユーザーの責任において行うものとします。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第5条（料金および支払い）</h2>
                <p>
                  有料プランの料金および支払い方法は、当サービス内で明示します。支払いはクレジットカードまたは当サービスが指定する方法で行うものとします。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第6条（禁止事項）</h2>
                <p>ユーザーは以下の行為を行ってはなりません。</p>
                <ul className="mt-3 list-disc pl-6 space-y-1 text-brand-parchment/80">
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
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第7条（知的財産権）</h2>
                <p>
                  当サービス内のすべてのコンテンツ（テキスト、画像、プログラム、アルゴリズム等）に関する著作権その他の知的財産権は、QuestStudyまたは正当な権利者に帰属します。ユーザーは、権利者の事前許諾なく、これらを複製・転載・改変・二次利用してはなりません。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第8条（免責事項）</h2>
                <p>
                  当サービスは、情報の正確性・完全性について保証するものではありません。メンテナンスや不可抗力によるサービス停止、データ損失等について、当サービスは責任を負わないものとします。ただし、当サービスに故意または重大な過失がある場合はこの限りではありません。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第9条（解約・退会）</h2>
                <p>
                  ユーザーはいつでもアカウントを解約・退会できます。退会後の個人情報の取り扱いは、プライバシーポリシーに従います。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第10条（規約の変更）</h2>
                <p>
                  当サービスは、必要と判断した場合、ユーザーに通知することなく本規約を変更することがあります。変更後の規約は、当サービス上に掲示された時点から効力を生じるものとします。
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第11条（準拠法）</h2>
                <p>本規約の解釈および適用は、日本法に準拠するものとします。</p>
              </div>

              <div>
                <h2 className="mb-3 font-display text-xl text-brand-parchment">第12条（管轄裁判所）</h2>
                <p>
                  本規約に関して生じた一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-brand-parchment/10 text-xs text-brand-parchment/50">
              本規約は初版（v1 ドラフト）です。本公開前に専門家レビューを経て正式版に差し替えられます。
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
