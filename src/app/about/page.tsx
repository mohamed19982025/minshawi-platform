export const metadata = {
  title: 'عن المشروع - المصحف الثاني',
  description: 'نبذة عن مشروع المصحف الثاني للشيخ محمد صديق المنشاوي.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
        <h1 className="text-4xl font-bold font-(family-name:--font-amiri) text-primary mb-6 text-center">عن المشروع</h1>
        
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            مشروع "المصحف الثاني" هو مبادرة لجمع ونشر التسجيلات النادرة للشيخ القارئ محمد صديق المنشاوي -رحمه الله-.
          </p>
          <p>
            يُعد الشيخ المنشاوي من أبرز قراء القرآن الكريم في العالم الإسلامي، وتتميز تلاواته بالخشوع العميق والإتقان التام لأحكام التجويد.
          </p>
          <p>
            يهدف هذا الموقع إلى توفير هذه التسجيلات بجودة عالية للمسلمين في كافة أنحاء العالم، مع واجهة مستخدم حديثة تتيح الاستماع والتحميل بسهولة.
          </p>
          <p className="font-medium text-center mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
            نسأل الله أن يجعل هذا العمل صدقة جارية في ميزان حسنات الشيخ، وكل من ساهم في نشر هذه التلاوات.
            تم تنفيذ الموقع بواسطة المهندس سعد هرماش 
            صدقة جارية عن موتانا وجميع موتى المسلمين.
            
          </p>
        </div>
      </div>
    </div>
  );
}
