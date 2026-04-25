import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: '開発者ストーリー / プロフィール',
  description:
    'QuestStudy のプロフィールと開発者ストーリー。',
};

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <Container>
          <article className="mx-auto max-w-prose space-y-16">

            {/* ----- プロフィール ----- */}
            <section>
              <div className="font-mono text-xs uppercase tracking-widest text-brand-brass mb-3">
                Profile
              </div>
              <h1 className="font-display text-3xl md:text-5xl text-brand-parchment mb-8 leading-tight">
                プロフィール
              </h1>

              <div className="space-y-5 text-base md:text-lg leading-loose text-brand-parchment/85">
                <p className="font-display text-xl md:text-2xl text-brand-parchment">
                  QuestStudy 今冬創業予定
                </p>
                <p>
                  現在は大手企業で、AIドリブン経営戦略立案の仕事をしています。
                </p>
                <p>
                  2027年に中学受験を控える娘のために、
                  中学受験 × AI × RPG の学習アプリ「マナ・マスタークロニクル」を個人事業として開発中です。
                </p>
                <p>
                  他、AIを活用した学習アプリをユーザーの声を反映させながら開発予定です。
                  共同開発者である娘や多くのご家庭の悩みに応えていきます。
                </p>

                <p className="font-display text-lg md:text-xl text-brand-brass leading-relaxed pt-4">
                  「学び方を変えれば、子どもは変われる」
                </p>

                <p>
                  高3の夏、総合偏差値35でしたが、早稲田大学への進学は人生を<br />
                  大きく変えました。勉強には勉強の仕方があります。
                </p>
                <p>勉強は本来、楽しいもの、それがわかるだけで世界が変わってきます。</p>
                <p>中学受験で毎日言い合いをする必要はあるでしょうか。</p>
                <p>勉強が嫌いになっていないでしょうか。</p>
                <p>興味関心を失っていないでしょうか。</p>
                <p>
                  父親としての経験と現在のAIドリブン経営の戦略立案者としての知見を活かし、日本の教育文化が少しでも変われば嬉しく思います。
                </p>
              </div>
            </section>

            {/* ----- 開発者ストーリー ----- */}
            <section className="pt-10 border-t border-brand-parchment/10">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-brass mb-3">
                Developer Story · Coming Soon
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-brand-parchment mb-4 leading-tight">
                開発者ストーリー
              </h2>
              <p className="text-brand-parchment/70 text-base md:text-lg">
                全文公開は5月を予定しています。
              </p>
            </section>

            {/* ----- CTA ----- */}
            <div className="pt-10 border-t border-brand-parchment/10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={SITE.xUrl} variant="primary" external>
                Xをフォローする
              </Button>
              <Button href="/" variant="secondary">
                トップへ戻る
              </Button>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
