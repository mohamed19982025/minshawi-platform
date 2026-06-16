import Link from "next/link";
import SurahCard from "@/components/SurahCard";
import surahs from "@/data/surahs.json";

export default function Home() {
const surahsCount = surahs.length;

const latestSurah = surahs[surahs.length - 1];

const recentSurahs = [...surahs]
.reverse()
.slice(0, 3);

return ( <div className="container mx-auto px-4 py-12">

  {/* Hero */}
  <section className="text-center mb-20 mt-8 max-w-4xl mx-auto relative animate-fade-in-up">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 dark:bg-primary/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
    
    <div className="inline-block glass text-secondary px-6 py-2.5 rounded-full mb-8 font-bold text-sm md:text-base shadow-sm border border-secondary/20 hover:border-secondary/50 transition-colors cursor-default">
      ✨ تسجيلات نادرة تُنشر لأول مرة
    </div>

    <h1 className="text-5xl md:text-7xl font-bold font-(family-name:--font-amiri) text-primary mb-6 drop-shadow-sm leading-tight">
      المصحف الثاني
      <br />
      <span className="text-4xl md:text-5xl text-foreground mt-4 block">للشيخ محمد صديق المنشاوي</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
      مشروع يهدف إلى جمع وحفظ ونشر ما يتم العثور عليه من تسجيلات المصحف الثاني
      النادرة للشيخ محمد صديق المنشاوي رحمه الله، وإتاحتها للاستماع المباشر
      والتحميل بأفضل جودة ممكنة.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
      <Link
        href="/surahs"
        className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-800 dark:hover:bg-teal-600 transition-all duration-300 shadow-[0_0_20px_rgba(15,118,110,0.3)] hover:shadow-[0_0_25px_rgba(15,118,110,0.5)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2 group"
      >
        استعرض جميع السور ({surahsCount})
      </Link>

      <Link
        href="/about"
        className="glass-card text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/5 transition-all duration-300 border-2 border-primary/20 w-full sm:w-auto hover:-translate-y-1"
      >
        عن المشروع
      </Link>
    </div>
  </section>

  {/* Latest Surah */}
  {latestSurah && (
    <section className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="relative overflow-hidden bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-12 shadow-2xl text-center group border border-primary-foreground/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -ml-32 -mb-32"></div>

        <div className="relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-secondary-foreground dark:text-secondary px-4 py-1.5 rounded-full font-bold mb-6 text-sm">
            ✨ أحدث إضافة للموقع
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-(family-name:--font-amiri) text-white drop-shadow-md">
            سورة {latestSurah.name}
          </h2>

          <p className="mb-8 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            تمت إضافة هذه السورة حديثاً ضمن مشروع جمع تسجيلات المصحف الثاني.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="glass px-6 py-3 rounded-full text-white border-white/20 font-medium">
              مدة التلاوة: {latestSurah.duration}
            </span>

            <Link
              href={`/surahs/${latestSurah.slug}`}
              className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              استمع الآن
            </Link>
          </div>
        </div>
      </div>
    </section>
  )}

  {/* Stats */}
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>

    <div className="glass-card rounded-[2rem] p-8 text-center group hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <span className="text-3xl font-bold text-primary group-hover:text-white">{surahsCount}</span>
      </div>
      <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">
        سورة متوفرة حالياً
      </div>
    </div>

    <div className="glass-card rounded-[2rem] p-8 text-center group hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
        <span className="text-xl font-bold text-secondary group-hover:text-white font-(family-name:--font-amiri)">{latestSurah?.name}</span>
      </div>
      <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">
        أحدث إضافة
      </div>
    </div>

    <div className="glass-card rounded-[2rem] p-8 text-center group hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <span className="text-2xl font-bold text-primary group-hover:text-white font-(family-name:--font-amiri)">مستمر</span>
      </div>
      <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">
        البحث عن التسجيلات
      </div>
    </div>

  </section>

  {/* Recent Surahs */}
  <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>

    <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">

      <h3 className="text-3xl font-bold font-(family-name:--font-amiri) text-foreground">
        أحدث الإضافات
      </h3>

      <Link
        href="/surahs"
        className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-1"
      >
        عرض الكل <span aria-hidden="true">&larr;</span>
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
);
}
