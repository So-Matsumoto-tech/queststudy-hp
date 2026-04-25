/**
 * QuestStudy global constants.
 * Centralize all site metadata so copy changes happen in one place.
 */

export const SITE = {
  name: 'QuestStudy',
  url: 'https://queststudy.jp',
  xHandle: '@queststudy_jp',
  xUrl: 'https://x.com/queststudy_jp',
  email: 'info@queststudy.jp',
  appUrl:
    process.env.NEXT_PUBLIC_APP_URL ||
    'https://mana-master-chronicle.vercel.app',
  tagline: '挑め、クエスト。エンディングは「合格」だ。',
  subTagline: '— a study in memory, mapped nightly.',
  description:
    '中学受験の家庭学習を、RPGで楽しく。SM-2アルゴリズムとAIで、お子さん専用の忘却曲線に合わせた最適な復習を実現。2027年受験生の父親が個人事業として開発中。',
  founder: '松本壮',
  year: 2026,
  launchYear: 'MMXXVI',
  bearing: 'BEARING 2027.02',
  coords: "N 35°41'   ·   E 139°46'",
} as const;

export const SPECIMEN_NUMBERS = [
  { num: '86', label1: 'ZONES', label2: 'CHARTED' },
  { num: '2,416', label1: 'PROBLEMS', label2: 'CATALOGUED' },
  { num: '31', label1: 'VOCATIONS', label2: 'IN ROTATION' },
  { num: '594', label1: 'SKILLS', label2: 'DOCUMENTED' },
] as const;

export const FOOTER_COLUMNS = {
  product: {
    title: 'Product',
    links: [
      { label: 'マナ・マスタークロニクル', href: SITE.appUrl, external: true },
      { label: '攻略データノート（近日）', href: '/for-parents/shop' },
      { label: 'ベータ募集', href: '/for-parents/beta' },
    ],
  },
  business: {
    title: 'Business',
    links: [
      { label: '事業について', href: '/for-business' },
      { label: 'お問い合わせ', href: `mailto:${SITE.email}`, external: true },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'プライバシーポリシー', href: '/legal/privacy' },
      { label: '利用規約', href: '/legal/terms' },
      { label: '特定商取引法に基づく表記', href: '/legal/tokushoho' },
    ],
  },
} as const;

export const PARENT_CARD = {
  title: 'お子さんの中学受験を、ゲームに変える。',
  lead:
    '「勉強しなさい」で毎晩衝突していた家庭が、子どもが自分から画面を開く家庭に変わります。月額¥1,480から、14日間はすべての機能を無料でお試しいただけます。',
  points: [
    'RPGで子どもが自分から学習マップを開く',
    'SM-2アルゴリズムで「ちょうど忘れそうな時」に復習',
    '親ダッシュボードで弱点・進捗が一目でわかる',
  ],
  ctaLabel: '保護者の方へ（プラン・機能を見る）',
  ctaHref: '/for-parents',
  kicker: 'FOR PARENTS',
} as const;

export const BUSINESS_CARD = {
  title: 'データ駆動型EdTechへの参画を検討される方へ。',
  lead:
    '中学受験市場（約3,000億円）の「AI・データ空白地帯」に、1名体制で静かに参入する個人事業的スタートアップです。4層Moat構造と、月11.5時間で回る無人化設計が競争優位の源泉です。',
  points: [
    '年商1,000万円到達に必要な有料会員は329名（小さく濃く）',
    'LTV ¥84,333 / 許容CAC ¥28,111 のユニットエコノミクス',
    '2027年2月ローンチに向けてベータ稼働開始（2026年8月）',
  ],
  ctaLabel: '事業パートナーの方へ（資料・連絡先）',
  ctaHref: '/for-business',
  kicker: 'FOR BUSINESS',
} as const;
