/**
 * QuestStudy global constants — v2.1 (コピー再調整)
 *
 * 変更点：
 *  - お子さん → お子様
 *  - PARENT_CARD title に改行
 *  - PARENT_CARD lead に改行・新文言
 *  - PARENT_CARD points を新版に差し替え
 *  - BUSINESS_CARD lead を改行で見やすく
 */

export const SITE = {
  name: 'QuestStudy',
  url: 'https://queststudy.jp',
  xHandle: '@queststudy_jp',
  xUrl: 'https://x.com/queststudy_jp',
  email: 'info@queststudy.jp',
  tagline: '挑め、クエスト。エンディングは「合格」だ。',
  subTagline: '— a study in memory, mapped nightly.',
  description:
    '中学受験の家庭学習を、RPGで楽しく。SM-2アルゴリズムとAIで、お子様専用の忘却曲線に合わせた最適な復習を実現。2027年受験生の父親が個人事業として開発中。',
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
      { label: 'マナ・マスタークロニクル\n（今夏ベータテスト予定）', href: '/for-parents' },
      { label: 'ベータ事前登録', href: '/for-parents' },
    ],
  },
  business: {
    title: 'Business',
    links: [
      { label: '事業について', href: '/for-business' },
      { label: 'お問い合わせ', href: `mailto:${SITE.email}`, external: true },
    ],
  },
} as const;

export const PARENT_CARD = {
  title: 'お子様の中学受験を、\nゲームに変える。',
  lead:
    '「勉強しなさい」「わからない」で毎日していた家庭が、\nお子様自身で画面を開き学習する家庭に変わります。',
  points: [
    'RPGで魔法やアイテムを集めるうちにお子様自身がレベルアップ',
    '一人一人の忘却曲線に応じてAIが問題をセレクト',
    '親御様に向けた成績ダッシュボードでお子様の成長を見える化',
  ],
  ctaLabel: '保護者の方へ',
  ctaHref: '/for-parents',
  kicker: 'FOR PARENTS',
} as const;

export const BUSINESS_CARD = {
  title: '事業について。',
  lead:
    'QuestStudy は個人事業としてスタートしたばかりです。\n事業パートナーの募集は現在行っておりません。\n準備が整い次第、改めてご案内します。',
  points: [] as readonly string[],
  ctaLabel: '詳細を見る',
  ctaHref: '/for-business',
  kicker: 'FOR BUSINESS',
} as const;
