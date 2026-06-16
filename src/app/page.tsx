import Link from "next/link";
import SurahCard from "@/components/SurahCard";
import surahs from "@/data/surahs.json";

export default async function Home() {
const surahsCount = surahs.length;

const sortedSurahs = [...surahs].sort(
(a, b) =>
new Date(b.createdAt).getTime() -
new Date(a.createdAt).getTime()
);

const latestSurah = sortedSurahs[0];
const recentSurahs = sortedSurahs.slice(0, 3);

return ( <div className="container mx-auto px-4 py-12">

```
  {/* Hero Section */}
  <section className="text-center max-w-4xl mx-auto mb-16">
    <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 font-medium">
      ✨ تسجيلات نادرة تُنشر لأول مرة
    </div>

    <h1 className="text-5xl md:text-6xl font-bold font-(family-name:--font-amiri) text-primary mb-6 leading-tight">
      المصحف الثاني
      <br />
      للشيخ محمد صديق المنشاوي
    </h1>

    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
      مشروع يهدف إلى جمع وحفظ ونشر التسجيلات النادرة للمصحف الثاني
      للشيخ محمد صديق المنشاوي رحمه الله، وإتاحتها للاستماع المباشر
      والتحميل بأعلى جودة ممكنة.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="/surahs"
        className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition shadow-lg w-full sm:w-auto"
      >
        استعرض جميع السور ({surahsCount})
      </Link>

      <Link
        href="/about"
        className="bg-white dark:bg-gray-800 text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-lg border border-primary/20 w-full sm:w-auto"
      >
        عن المشروع
      </Link>
    </div>
  </section>

  {/* Stats */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow text-center">
      <div className="text-4xl font-bold text-primary mb-2">
        {surahsCount}
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        سورة متوفرة حالياً
      </div>
    </div>

    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow text-center">
      <div className="text-2xl font-bold text-primary mb-2">
        {latestSurah?.name}
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        أحدث إضافة للموقع
      </div>
    </div>

    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow text-center">
      <div className="text-2xl font-bold text-primary mb-2">
        مستمر
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        البحث عن التسجيلات النادرة
      </div>
    </div>
  </section>

  {/* Latest Surah */}
  {latestSurah && (
    <section className="mb-16">
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8 md:p-12 shadow-xl">

        <div className="mb-4 text-yellow-300 font-bold">
          ✨ أحدث إضافة للموقع
        </div>

        <h2 className="text-4xl font-bold mb-4 font-(family-name:--font-amiri)">
          سورة {latestSurah.name}
        </h2>

        <p className="text-lg opacity-95 mb-6 max-w-2xl">
          تمت إضافة هذه السورة حديثاً ضمن مشروع المصحف الثاني،
          ويمكنك الاستماع إليها مباشرة أو زيارة صفحتها الخاصة.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <span className="bg-white/20 px-4 py-2 rounded-full">
            مدة التلاوة: {latestSurah.duration}
          </span>

          <Link
            href={`/surahs/${latestSurah.slug}`}
            className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            استمع الآن
          </Link>
        </div>
      </div>
    </section>
  )}

  {/* Recent Surahs */}
  <section>
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-3xl font-bold font-(family-name:--font-amiri) flex items-center gap-3">
        <span className="w-2 h-10 bg-secondary rounded-full"></span>
        أحدث الإضافات
      </h3>

      <Link
        href="/surahs"
        className="text-primary font-bold hover:underline"
      >
        عرض جميع السور
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recentSurahs.map((surah) => (
        <SurahCard
          key={surah.id}
          // @ts-ignore
          surah={surah}
        />
      ))}
    </div>
  </section>
</div>
```

);
}
