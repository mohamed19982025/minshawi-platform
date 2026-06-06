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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">الرئيسية</Link>
          <span className="mx-2">/</span>
          <Link href="/surahs" className="hover:text-primary">السور</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">سورة {surah.name}</span>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 dark:border-gray-700 text-center mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary to-secondary"></div>
          
          <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary text-3xl font-bold mb-6">
            {surah.number}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-(family-name:--font-amiri) text-primary mb-4">
            سورة {surah.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            الشيخ محمد صديق المنشاوي
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <span className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              مدة التلاوة: {surah.duration}
            </span>
          </div>

          <AudioPlayer surahSlug={surah.slug} audioUrl={surah.file.startsWith('http') ? surah.file : `/audio/${surah.file}`} />
          
          <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex-wrap">
            <a href={surah.file.startsWith('http') ? surah.file : `/audio/${surah.file}`} target="_blank" rel="noopener noreferrer" download className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition font-medium bg-gray-50 dark:bg-gray-900 px-4 py-2 rounded-lg">
              <Download size={20} /> تحميل الملف
            </a>
            <ShareButton title={`سورة ${surah.name}`} text={`استمع لسورة ${surah.name} بصوت الشيخ محمد صديق المنشاوي`} />
          </div>
        </div>
      </div>
    </div>
  );
}
