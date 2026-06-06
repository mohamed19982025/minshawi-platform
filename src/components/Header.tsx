"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith('/management-panel-8f3e91')) return null;

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="شعار المصحف الثاني" width={50} height={50} className="rounded-full bg-white p-1" />
          <div>
            <h1 className="text-xl font-bold font-(family-name:--font-amiri)">المصحف الثاني</h1>
            <p className="text-xs opacity-90">للشيخ محمد صديق المنشاوي</p>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-sm font-semibold">
            <li><Link href="/" className="hover:text-secondary transition-colors">الرئيسية</Link></li>
            <li><Link href="/surahs" className="hover:text-secondary transition-colors">جميع السور</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">عن المشروع</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
