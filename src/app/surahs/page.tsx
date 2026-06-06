import SurahList from '@/components/SurahList';
import surahs from '@/data/surahs.json';

export const metadata = {
  title: 'جميع السور - المصحف الثاني',
  description: 'استعرض جميع السور المتوفرة من المصحف الثاني للشيخ محمد صديق المنشاوي.',
};

export default async function SurahsPage() {
  const sortedSurahs = [...surahs].sort((a, b) => a.number - b.number);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold font-(family-name:--font-amiri) text-primary mb-4">جميع السور</h1>
        <p className="text-gray-600 dark:text-gray-300">
          استمع إلى {sortedSurahs.length} سورة متوفرة حالياً من تسجيلات المصحف الثاني.
        </p>
      </div>

      <SurahList initialSurahs={sortedSurahs} />
    </div>
  );
}
