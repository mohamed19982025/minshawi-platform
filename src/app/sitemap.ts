import { MetadataRoute } from 'next';
import surahs from '@/data/surahs.json';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const surahUrls = surahs.map((surah) => ({
    url: `http://localhost:3000/surahs/${surah.slug}`,
    lastModified: new Date(surah.updatedAt),
  }));

  return [
    {
      url: 'http://localhost:3000',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3000/surahs',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3000/about',
      lastModified: new Date(),
    },
    ...surahUrls,
  ];
}
