"use client";

import { useState } from "react";
import SurahCard from "./SurahCard";
import { Search } from "lucide-react";

interface SurahListProps {
  initialSurahs: {
    id: string;
    number: number;
    name: string;
    slug: string;
    file: string;
    duration: string;
  }[];
}

export default function SurahList({ initialSurahs }: SurahListProps) {
  const [query, setQuery] = useState("");

  const filteredSurahs = initialSurahs.filter((surah) =>
    surah.name.includes(query)
  );

  return (
    <>
      <div className="max-w-2xl mx-auto relative mb-16 animate-fade-in-up">
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl -z-10"></div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن اسم السورة..."
          className="w-full pl-12 pr-6 py-5 rounded-full border-2 border-primary/20 focus:border-primary outline-none text-lg glass shadow-sm focus:shadow-[0_0_20px_rgba(15,118,110,0.15)] transition-all duration-300 text-foreground placeholder:text-gray-400"
        />
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/60">
          <Search size={28} />
        </div>
      </div>

      {filteredSurahs.length === 0 ? (
        <div className="text-center text-gray-500 py-16 text-xl font-medium animate-fade-in">
          لا توجد نتائج للبحث عن "<span className="text-primary">{query}</span>".
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {filteredSurahs.map((surah) => (
            <SurahCard key={surah.id} surah={surah} />
          ))}
        </div>
      )}
    </>
  );
}
