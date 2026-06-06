import { MetadataRoute } from 'next';
import surahs from '@/data/surahs.json';

const BASE_URL = 'https://minshawi-platform.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const surahUrls = surahs.map((surah) => ({
    url: `${BASE_URL}/surahs/${surah.slug}`,
    lastModified: new Date(surah.updatedAt),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/surahs`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    ...surahUrls,
  ];
}
