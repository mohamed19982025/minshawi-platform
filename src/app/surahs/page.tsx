import SurahList from '@/components/SurahList';
import surahs from '@/data/surahs.json';

export const metadata = {
  title: 'جميع السور - المصحف الثاني',
  description: 'استعرض جميع السور المتوفرة من المصحف الثاني للشيخ محمد صديق المنشاوي.',
};

export default async function SurahsPage() {
  const sortedSurahs = [...surahs].sort((a, b) => a.number - b.number);

  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-in-up">
        <div className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full mb-6 font-bold text-sm border border-primary/20">
          المكتبة الصوتية
        </div>
        <h1 className="text-5xl md:text-6xl font-bold font-(family-name:--font-amiri) text-foreground mb-6 drop-shadow-sm">جميع السور</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          استمع إلى <span className="font-bold text-primary text-2xl">{sortedSurahs.length}</span> سورة متوفرة حالياً من تسجيلات المصحف الثاني المكتشفة، مرتبة حسب ترتيب المصحف الشريف.
        </p>
      </div>

      <SurahList initialSurahs={sortedSurahs} />
    </div>
  );
}
