import Link from 'next/link';
import { Play } from 'lucide-react';

interface SurahProps {
  surah: {
    number: number;
    name: string;
    slug: string;
    duration: string;
  };
}

export default function SurahCard({ surah }: SurahProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-4 group">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
        {surah.number}
      </div>
      <div>
        <h3 className="text-2xl font-bold font-(family-name:--font-amiri) mb-1">سورة {surah.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{surah.duration}</p>
      </div>
      <div className="flex gap-2 w-full mt-2">
        <Link href={`/surahs/${surah.slug}`} className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          <Play size={18} /> استماع
        </Link>
      </div>
    </div>
  );
}
