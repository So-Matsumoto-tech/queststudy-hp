import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: '保護者の方へ',
  description:
    'マナ・マスタークロニクルは今夏ベータテスト開始予定です。最新情報はXで発信しています。',
};

export default function ForParentsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center pt-32 pb-24">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-widest text-brand-brass mb-6">
              今夏ベータテスト開始
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-brand-parchment mb-6 leading-snug">
              保護者の方へ
            </h1>
            <p className="text-brand-parchment/75 text-base md:text-lg leading-relaxed mb-10">
              マナ・マスタークロニクルは現在開発中です。<br />
              今夏、ベータテストの開始を予定しています。<br />
              最新情報は X にてご案内します。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href={SITE.xUrl} variant="primary" external>
                Xをフォローする
              </Button>
              <Button href="/" variant="secondary">
                トップへ戻る
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
