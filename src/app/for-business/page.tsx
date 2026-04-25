import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: '事業について',
  description:
    'QuestStudy は個人事業としてスタートしたばかりのプロジェクトです。詳細は近日公開いたします。',
};

export default function ForBusinessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center pt-32 pb-24">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-widest text-brand-brass mb-6">
              Coming Soon
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-brand-parchment mb-6 leading-snug">
              事業について
            </h1>
            <p className="text-brand-parchment/75 text-base md:text-lg leading-relaxed mb-10">
              準備中です。詳細は近日公開いたします。
            </p>
            <div className="mb-10">
              <a
                href={`mailto:${SITE.email}`}
                className="font-mono text-sm tracking-widest text-brand-brass hover:text-brand-parchment transition-colors"
              >
                {SITE.email}
              </a>
            </div>
            <Button href="/" variant="secondary">
              トップへ戻る
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
