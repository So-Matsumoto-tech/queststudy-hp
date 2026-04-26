/**
 * Schema.org JSON-LD builders.
 *
 * 戻り値は plain object として返し、`<script type="application/ld+json">`
 * に流し込む。schema-dts などの追加依存は入れず、Schema.org の最小限
 * のフィールドだけを書く。
 */

export const SITE_URL = 'https://queststudy.jp';
export const SITE_NAME = 'QuestStudy';
const FOUNDER_NAME = '松本壮';

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: 'QuestStudy（屋号）',
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512x512.png`,
    email: 'info@queststudy.jp',
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      jobTitle: 'AI ドリブン経営戦略立案者',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
    },
    sameAs: ['https://x.com/queststudy_jp'],
    description:
      '中学受験 × AI × RPGで、親子の対立をなくす、データドリブン学習プラットフォーム。',
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'ja-JP',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbListSchema(
  items: ReadonlyArray<BreadcrumbItem>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function softwareApplicationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'マナ・マスタークロニクル',
    alternateName: 'Mana Master Chronicle',
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'Test Preparation',
    operatingSystem: 'Web (Chrome / Safari / Edge), iOS 15+, Android 10+',
    inLanguage: 'ja-JP',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: '中学受験生・保護者',
    },
    description:
      '中学受験の単元を 86 ゾーンに展開し、SM-2 アルゴリズムと AI で個別最適化する RPG 型学習アプリ。',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/PreOrder',
      availabilityStarts: '2026-08-01',
      description: '今夏ベータテスト開始予定（無料）',
    },
    creator: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function personSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: FOUNDER_NAME,
    jobTitle: 'AI ドリブン経営戦略立案者',
    description:
      '2027 年に中学受験を控える娘の父親であり、QuestStudy（マナ・マスタークロニクル）の個人事業開発者。',
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: '早稲田大学',
    },
    url: `${SITE_URL}/story`,
    sameAs: ['https://x.com/queststudy_jp'],
  };
}
