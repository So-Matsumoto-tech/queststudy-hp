import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { SegmentSplit } from '@/components/sections/SegmentSplit';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SegmentSplit />
      </main>
      <Footer />
    </>
  );
}
