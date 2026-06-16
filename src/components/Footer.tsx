"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/management-panel-8f3e91')) return null;

  return (
    <footer className="glass-card mt-auto border-t border-primary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start animate-fade-in-up">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-bold text-primary font-(family-name:--font-amiri) text-lg">المصحف الثاني</span>
            <br />
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="/about" className="hover:text-secondary transition-colors">عن المشروع</Link>
            <Link href="/surahs" className="hover:text-secondary transition-colors">قائمة السور</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
