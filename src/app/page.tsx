import Link from "next/link";
import SurahCard from "@/components/SurahCard";
import surahs from "@/data/surahs.json";

export default function Home() {
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
  {/* Hero */}
  <section className="text-center mb-16 max-w-4xl mx-auto">
    <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 font-medium">
      ✨ تسجيلات نادرة تُنشر لأول مرة
    </div>

    <h1 className="text-5xl md:text-6xl font-bold font-(family-name:--font-amiri) text-primary mb-6">
      المصحف الثاني
      <br />
      للشيخ محمد صديق المنشاوي
    </h1>

    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
      مشروع يهدف إلى جمع وحفظ ونشر ما يتم العثور عليه من تسجيلات المصحف الثاني
      النادرة للشيخ محمد صديق المنشاوي رحمه الله، وإتاحتها للاستماع المباشر
      والتحميل بأفضل جودة ممكنة.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="/surahs"
        className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition shadow-lg w-full sm:w-auto"
      >
        استعرض جميع السور ({surahsCount})
      </Link>

      <Link
        href="/about"
        className="bg-white dark:bg-gray-800 text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-lg border border-primary/20 w-full sm:w-auto"
      >
        عن المشروع
      </Link>
    </div>
  </section>

  {/* Latest Surah */}
  {latestSurah && (
    <section className="mb-16">
      <div className="bg-primary text-white rounded-3xl p-8 md:p-10 shadow-xl text-center">

        <div className="text-yellow-300 font-bold mb-3">
          ✨ أحدث إضافة للموقع
        </div>

        <h2 className="text-4xl font-bold mb-4 font-(family-name:--font-amiri)">
          سورة {latestSurah.name}
        </h2>

        <p className="mb-6 text-lg opacity-90">
          تمت إضافة هذه السورة حديثاً ضمن مشروع المصحف الثاني.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-white/20 px-4 py-2 rounded-full">
            مدة التلاوة: {latestSurah.duration}
          </span>

          <Link
            href={`/surahs/${latestSurah.slug}`}
            className="bg-white text-primary px-6 py-2 rounded-full font-bold"
          >
            استمع الآن
          </Link>
        </div>
      </div>
    </section>
  )}

  {/* Stats */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow text-center">
      <div className="text-4xl font-bold text-primary mb-2">
        {surahsCount}
      </div>
      <div className="text-gray-500">
        سورة متوفرة حالياً
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow text-center">
      <div className="text-2xl font-bold text-primary mb-2">
        {latestSurah?.name}
      </div>
      <div className="text-gray-500">
        أحدث إضافة
      </div>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow text-center">
      <div className="text-2xl font-bold text-primary mb-2">
        مستمر
      </div>
      <div className="text-gray-500">
        البحث عن التسجيلات النادرة
      </div>
    </div>

  </section>

  {/* Recent Surahs */}
  <section>

    <div className="flex items-center justify-between mb-8">

      <h3 className="text-3xl font-bold font-(family-name:--font-amiri)">
        أحدث الإضافات
      </h3>

      <Link
        href="/surahs"
        className="text-primary font-medium hover:underline"
      >
        عرض الكل
      </Link>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recentSurahs.map((surah) => (
        <SurahCard
          key={surah.id}
          surah={surah}
        />
      ))}
    </div>

  </section>

</div>
```

);
}
