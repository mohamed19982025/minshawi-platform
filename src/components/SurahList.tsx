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
      <div className="max-w-xl mx-auto relative mb-12">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن اسم السورة..."
          className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary outline-none text-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary shadow-sm transition"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={24} />
        </div>
      </div>

      {filteredSurahs.length === 0 ? (
        <div className="text-center text-gray-500 py-12 text-lg">
          لا توجد نتائج للبحث عن "{query}".
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSurahs.map((surah) => (
            <SurahCard key={surah.id} surah={surah} />
          ))}
        </div>
      )}
    </>
  );
}
