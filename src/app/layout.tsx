import type { Metadata, Viewport } from 'next';
import { BIZ_UDPGothic, Inter } from 'next/font/google';
import './globals.css';
import './v2.css';

const bizUdp = BIZ_UDPGothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-biz-udp',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://queststudy.jp'),
  title: {
    default: 'QuestStudy — 中学受験 × AI × RPGで、親子の対立をなくす。',
    template: '%s | QuestStudy',
  },
  description:
    '中学受験の家庭学習を、RPGで楽しく。SM-2アルゴリズムとAIで、お子様専用の忘却曲線に合わせた最適な復習を実現。今夏ベータテスト開始予定。',
  keywords: [
    '中学受験',
    '家庭学習',
    'RPG',
    '忘却曲線',
    'SM-2',
    'EdTech',
    'SAPIX',
    '四谷大塚',
    'AI教育',
  ],
  publisher: 'QuestStudy',
  openGraph: {
    title: 'QuestStudy',
    description: '挑め、クエスト。エンディングは「合格」だ。',
    url: 'https://queststudy.jp',
    siteName: 'QuestStudy',
    locale: 'ja_JP',
    type: 'website',
    // OG image は src/app/opengraph-image.tsx で動的生成（next/og）。
    // images: は明示しない — Next.js のファイルベース規約に任せる。
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuestStudy',
    description: '挑め、クエスト。エンディングは「合格」だ。',
    creator: '@queststudy_jp',
    // images: 同上。Twitter クライアントは og:image にフォールバック。
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon-180x180.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QuestStudy',
  url: 'https://queststudy.jp',
  logo: 'https://queststudy.jp/icon-512x512.png',
  sameAs: ['https://x.com/queststudy_jp'],
  description:
    '中学受験 × AI × RPGで、親子の対立をなくす、データドリブン学習プラットフォーム。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bizUdp.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
