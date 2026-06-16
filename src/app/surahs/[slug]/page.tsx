import { notFound } from 'next/navigation';
import AudioPlayer from '@/components/AudioPlayer';
import Link from 'next/link';
import { Download } from 'lucide-react';
import ShareButton from '@/components/ShareButton';
import surahs from '@/data/surahs.json';

export function generateStaticParams() {
  return surahs.map((surah) => ({
    slug: surah.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const surah = surahs.find(s => s.slug === slug);
  if (!surah) return { title: 'سورة غير موجودة' };
  
  return {
    title: `سورة ${surah.name} - المصحف الثاني`,
    description: `استمع لسورة ${surah.name} بصوت الشيخ محمد صديق المنشاوي - المصحف الثاني.`,
  };
}

export default async function SurahDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const surah = surahs.find(s => s.slug === slug);

  if (!surah) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <Link href="/surahs" className="hover:text-primary transition-colors">المكتبة الصوتية</Link>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="text-primary font-bold">سورة {surah.name}</span>
        </div>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-primary/10 text-center mb-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-pulse-slow"></div>
          
          {/* Decorative glowing background elements */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="w-28 h-28 mx-auto bg-primary/5 border-2 border-primary/20 rounded-full flex items-center justify-center text-primary text-4xl font-bold mb-8 shadow-inner relative">
              <span className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></span>
              {surah.number}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-(family-name:--font-amiri) text-foreground mb-4 drop-shadow-sm">
              سورة {surah.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mb-10 font-(family-name:--font-tajawal)">
              الشيخ محمد صديق المنشاوي
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <span className="glass px-6 py-2.5 rounded-full text-sm font-bold border-primary/20 text-foreground">
                مدة التلاوة: {surah.duration}
              </span>
            </div>

            <div className="mb-12">
              <AudioPlayer surahSlug={surah.slug} audioUrl={surah.file.startsWith('http') ? surah.file : `/audio/${surah.file}`} />
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-primary/10 flex-wrap relative z-10">
              <a href={surah.file.startsWith('http') ? surah.file : `/audio/${surah.file}`} target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 text-foreground hover:text-white transition-all duration-300 font-bold bg-primary/10 hover:bg-primary px-6 py-3 rounded-xl border border-primary/20 hover:shadow-[0_0_20px_rgba(15,118,110,0.3)] hover:-translate-y-1">
                <Download size={20} /> تحميل الملف بجودة عالية
              </a>
              <ShareButton title={`سورة ${surah.name}`} text={`استمع لسورة ${surah.name} بصوت الشيخ محمد صديق المنشاوي - المصحف الثاني`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
