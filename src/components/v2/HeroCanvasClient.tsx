'use client';

import dynamic from 'next/dynamic';

// R3F は重く WebGL も必要なので CSR & 遅延ロード。
// `dynamic({ ssr: false })` は Client Component 内でのみ使えるため、
// この薄いラッパーを Server Component の page.tsx から呼ぶ。
const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
  loading: () => null,
});

export default HeroCanvas;
