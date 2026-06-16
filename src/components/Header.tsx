"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith('/management-panel-8f3e91')) return null;

  return (
    <header className="sticky top-0 z-50 glass shadow-sm border-b border-primary/10 animate-fade-in">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-secondary transition-colors duration-300">
            <Image src="/logo.png" alt="شعار المصحف الثاني" width={50} height={50} className="object-cover bg-white p-0.5" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold font-(family-name:--font-amiri) text-primary group-hover:text-secondary transition-colors duration-300">المصحف الثاني</h1>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">للشيخ محمد صديق المنشاوي</p>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center gap-4 md:gap-8 text-sm md:text-base font-bold text-foreground/80">
            <li>
              <Link href="/" className={`hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300 ${pathname === '/' ? 'text-primary after:w-full' : ''}`}>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/surahs" className={`hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300 ${pathname?.startsWith('/surahs') ? 'text-primary after:w-full' : ''}`}>
                جميع السور
              </Link>
            </li>
            <li>
              <Link href="/about" className={`hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300 ${pathname === '/about' ? 'text-primary after:w-full' : ''}`}>
                عن المشروع
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
