# دليل النشر (Deployment Guide)

المشروع مبني باستخدام Next.js 15 ويمكن نشره بسهولة على أي سيرفر أو منصة تدعم تشغيل Node.js.

## النشر على سيرفر VPS (Ubuntu / Debian) - الطريقة الموصى بها
بما أن المشروع يعتمد على SQLite لحفظ البيانات ورفع الملفات الصوتية مباشرة إلى المجلد `public/audio`، يُفضل بشدة نشره على سيرفر VPS بدلاً من خدمات Serverless (مثل Vercel) لضمان عدم فقدان الملفات المرفوعة حديثاً.

### الخطوات:
1. تثبيت Node.js (إصدار 20 فأعلى) و PM2.
2. نسخ ملفات المشروع إلى السيرفر.
3. تشغيل الأوامر التالية:
   ```bash
   npm install
   npx prisma generate
   npx prisma db push
   npm run build
   pm2 start npm --name "minshawi" -- run start
   ```
4. إعداد **Nginx** كـ Reverse Proxy لتوجيه حركة المرور إلى المنفذ `3000`.

## ملاحظة بشأن Vercel
إذا كنت ترغب باستخدام Vercel، ستحتاج إلى:
1. استبدال SQLite بـ PostgreSQL (مثلاً Vercel Postgres).
2. استبدال التخزين المحلي لملفات الصوت بصور/صوتيات سحابية مثل AWS S3، R2 أو UploadThing، لأن Vercel هي بيئة للقراءة فقط في وقت التشغيل ولا تدعم حفظ الملفات بعد رفعها.
