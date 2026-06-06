import Link from 'next/link';
import SurahCard from '@/components/SurahCard';
import surahs from '@/data/surahs.json';

export default async function Home() {
  const surahsCount = surahs.length;
  // Sort by createdAt desc, take 3
  const recentSurahs = [...surahs].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-(family-name:--font-amiri) text-primary mb-6">
          المصحف الثاني
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          هذا الموقع مخصص لنشر التسجيلات النادرة للمصحف الثاني للشيخ محمد صديق المنشاوي -رحمه الله-، بجودة عالية، مع إمكانية الاستماع المباشر والتحميل.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/surahs" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition shadow-lg w-full sm:w-auto">
            استعرض جميع السور ({surahsCount})
          </Link>
          <Link href="/about" className="bg-white dark:bg-gray-800 text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-lg w-full sm:w-auto border border-primary/20">
            عن المشروع
          </Link>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold font-(family-name:--font-amiri) flex items-center gap-2">
            <span className="w-2 h-8 bg-secondary rounded-full"></span>
            أحدث الإضافات
          </h3>
          <Link href="/surahs" className="text-primary font-medium hover:underline">
            عرض الكل &larr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentSurahs.map((surah) => (
             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
             // @ts-ignore
            <SurahCard key={surah.id} surah={surah} />
          ))}
        </div>
      </section>
    </div>
  );
}
