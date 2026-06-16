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
    <div className="glass-card rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(15,118,110,0.12)] border border-primary/5 dark:border-primary/10 flex flex-col items-center text-center gap-4 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="w-20 h-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center text-primary font-bold text-2xl group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(15,118,110,0.3)] transition-all duration-300 relative">
        <span className="relative z-10">{surah.number}</span>
      </div>
      
      <div className="w-full">
        <h3 className="text-3xl font-bold font-(family-name:--font-amiri) mb-2 text-foreground group-hover:text-primary transition-colors">سورة {surah.name}</h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100/50 dark:bg-gray-800/50 inline-block px-3 py-1 rounded-full">{surah.duration}</p>
      </div>
      
      <div className="w-full mt-2">
        <Link 
          href={`/surahs/${surah.slug}`} 
          className="flex bg-primary/10 text-primary py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 items-center justify-center gap-2 group/btn relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-0"></div>
          <Play size={20} className="relative z-10 fill-current" /> 
          <span className="relative z-10">استماع</span>
        </Link>
      </div>
    </div>
  );
}
