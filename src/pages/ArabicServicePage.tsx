import { Helmet } from 'react-helmet-async';

export default function ArabicServicePage() {
  const pageUrl = 'https://azoneprojects.com/ar/services/assignment-help';

  return (
    <div dir="rtl" className="font-sans">
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>مساعدة في الواجبات دبي، كتابة الأبحاث الإمارات | Azone Projects</title>
        <meta name="description" content="نقدم أفضل خدمات مساعدة في الواجبات دبي، كتابة الأبحاث الإمارات، ومشاريع التخرج الشارقة. دعم أكاديمي موثوق للطلاب في أبوظبي وجميع أنحاء الإمارات." />
        <link rel="canonical" href={pageUrl} />
        
        {/* Hreflang for language alternatives */}
        <link rel="alternate" hrefLang="en" href="https://azoneprojects.com/services/essay-writing" />
        <link rel="alternate" hrefLang="ar" href={pageUrl} />

        {/* Task 4: Service Schema in Arabic */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "مساعدة أكاديمية",
            "provider": { "@type": "LocalBusiness", "name": "Azone Projects FZC" },
            "areaServed": "الإمارات العربية المتحدة",
            "description": "نقدم أفضل خدمات المساعدة الأكاديمية وكتابة الأبحاث لطلاب الجامعات في الإمارات.",
            "url": pageUrl
          })}
        </script>
      </Helmet>

      {/* Force English header for consistency, but you could translate it */}
      <div dir="ltr">
      </div>

      <main className="pt-2xl pb-3xl bg-background text-right" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
        <div className="section-container px-margin-mobile md:px-margin-desktop">
          
          <div className="max-w-4xl mx-auto">
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-lg leading-tight">
              مساعدة في الواجبات دبي وكتابة الأبحاث في الإمارات
            </h1>
            
            <div className="bg-surface border border-surface-dim p-xl rounded-lg shadow-sm mb-2xl">
              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-lg">
                هل تواجه صعوبة في إنجاز فروضك الجامعية في الوقت المحدد؟ نحن في <strong>Azone Projects</strong> نقدم أفضل <strong>مساعدة في الواجبات دبي</strong> لطلاب الجامعات. فريقنا من الخبراء الأكاديميين متخصص في <strong>كتابة الأبحاث الإمارات</strong> وتوفير <strong>مشاريع التخرج الشارقة</strong> بأعلى معايير الجودة والأمانة العلمية.
              </p>
              
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">لماذا تختار خدماتنا؟</h2>
              <ul className="list-disc list-inside text-on-surface-variant text-body-lg leading-relaxed mb-lg pr-md space-y-sm">
                <li>مساعدة أكاديمية أبوظبي ودبي والشارقة.</li>
                <li>محتوى أصلي 100% خالٍ من الانتحال العلمي (نقدم تقرير Turnitin مجاناً).</li>
                <li>خدمات طلابية الإمارات تشمل جميع التخصصات الأكاديمية (إدارة أعمال، هندسة، تقنية معلومات، والمزيد).</li>
                <li>دعم على مدار الساعة عبر الواتساب لتلبية الطلبات المستعجلة.</li>
                <li>أسعار تنافسية ومناسبة للطلاب مع إمكانية التعديل المجاني.</li>
              </ul>
              
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">خدماتنا الأكاديمية الشاملة</h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-lg">
                سواء كنت بحاجة إلى كتابة مقال بسيط، تحليل حالة دراسية، أو إعداد رسالة ماجستير كاملة، نحن هنا لمساعدتك. خبرائنا مطلعون على متطلبات الجامعات الكبرى في الإمارات ويضمنون لك الحصول على درجات متميزة.
              </p>
              
              <div className="mt-2xl text-center">
                <p className="font-headline-sm text-on-surface mb-md">تواصل معنا الآن للحصول على استشارة مجانية</p>
                <a 
                  href="https://wa.me/971556230065?text=مرحباً، أحتاج إلى مساعدة في واجبي الجامعي"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-sm bg-primary text-on-primary px-xl py-md rounded font-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md"
                >
                  تواصل عبر الواتساب
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <div dir="ltr">
      </div>
    </div>
  );
}
