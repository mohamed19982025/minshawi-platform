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
return ( <html
   lang="ar"
   dir="rtl"
   className="scroll-smooth"
   data-scroll-behavior="smooth"
 >
<body
className={`${amiri.variable} ${tajawal.variable} antialiased font-sans min-h-screen flex flex-col`}
> <Header /> <main className="flex-grow">{children}</main> <Footer /> </body> </html>
);
}
