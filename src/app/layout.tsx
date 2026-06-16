import type { Metadata } from "next";
import { Amiri, Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const amiri = Amiri({
variable: "--font-amiri",
subsets: ["arabic"],
weight: ["400", "700"],
});

const tajawal = Tajawal({
variable: "--font-tajawal",
subsets: ["arabic"],
weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
metadataBase: new URL("https://minshawi-platform.vercel.app"),

title: "المصحف الثاني للشيخ محمد صديق المنشاوي",

description:
"الموقع الرسمي لنشر التسجيلات النادرة للمصحف الثاني للشيخ محمد صديق المنشاوي.",

keywords: [
"المنشاوي",
"المصحف الثاني",
"محمد صديق المنشاوي",
"تلاوات نادرة",
"قرآن كريم",
"تجويد",
"مرتل",
"استماع للقرآن",
"تحميل القرآن",
],

verification: {
google: "ZG1BtCDa-sdnz2Ng41hRczEtCE8UQiGsHCQd8GljozU",
},

openGraph: {
title: "المصحف الثاني للشيخ محمد صديق المنشاوي",
description:
"الموقع الرسمي لنشر التسجيلات النادرة للمصحف الثاني للشيخ محمد صديق المنشاوي.",
images: [{ url: "/og-image.jpg" }],
},
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
    <html
      lang="ar"
      dir="rtl"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${amiri.variable} ${tajawal.variable} antialiased font-sans min-h-screen flex flex-col relative bg-background text-foreground`}
      >
        <div 
          className="fixed inset-0 z-[-1] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f766e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        ></div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
