"use client";

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/management-panel-8f3e91')) return null;

  return (
    <footer className="bg-background text-foreground py-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm mt-auto">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} المصحف الثاني للشيخ محمد صديق المنشاوي. </p>
      </div>
    </footer>
  );
}
