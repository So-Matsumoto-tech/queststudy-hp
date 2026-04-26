import type { MetadataRoute } from 'next';

const BASE_URL = 'https://queststudy.jp';

interface PageEntry {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}

// 優先順位とクロール頻度はサイトの目的（マーケティング → 保護者導線が
// 主要 KPI）から逆算して設定。法務系は更新頻度が低くインデックス優先度
// も下げる。
const PAGES: ReadonlyArray<PageEntry> = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/for-parents', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/story', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/for-business', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/legal/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/legal/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/legal/tokushoho', changeFrequency: 'yearly', priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
