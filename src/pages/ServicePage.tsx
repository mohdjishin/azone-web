import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import type { ServiceData } from '../data/services';
import { SERVICE_PAGES } from '../data/services';

export default function ServicePage({ service }: { service: ServiceData }) {
  // Find related services objects
  const relatedServices = SERVICE_PAGES.filter(s => service.relatedSlugs.includes(s.slug));

  const pageUrl = `https://azoneprojects.com/services/${service.slug}`;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <link rel="canonical" href={pageUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        
        {/* Task 4A: LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Azone Projects FZC",
            "url": "https://azoneprojects.com",
            "logo": "https://azoneprojects.com/assets/img/Azok.png",
            "image": "https://azoneprojects.com/assets/img/Azok.png",
            "description": service.metaDesc,
            "telephone": "+971556230065",
            "email": "projects.azone@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "SPC, Al Zahia Area, Sheikh Mohammed Bin Zayed Rd",
              "addressLocality": "Sharjah",
              "addressRegion": "Sharjah",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.3463,
              "longitude": 55.4209
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "AED 150 - AED 5000",
            "areaServed": ["Dubai", "Sharjah", "Abu Dhabi", "UAE"]
          })}
        </script>

        {/* Task 4B: FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": service.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

        {/* Task 4C: Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.title,
            "provider": { "@type": "LocalBusiness", "name": "Azone Projects FZC" },
            "areaServed": "UAE",
            "description": service.intro,
            "url": pageUrl
          })}
        </script>

        {/* Task 4D: BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://azoneprojects.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://azoneprojects.com/#services" },
              { "@type": "ListItem", "position": 3, "name": service.title, "item": pageUrl }
            ]
          })}
        </script>
      </Helmet>


      <main className="pt-2xl pb-3xl bg-background">
        <div className="section-container px-margin-mobile md:px-margin-desktop">
          
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-on-surface-variant mb-xl font-label-md">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-on-surface font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md">
                {service.h1}
              </h1>
              
              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-2xl">
                {service.intro}
              </p>

              <div className="mb-2xl">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Why Choose Us in Dubai, Sharjah & Abu Dhabi?</h2>
                <ul className="space-y-md">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-md">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <span className="text-body-md text-on-surface-variant leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-2xl bg-surface border border-surface-dim p-xl rounded-lg">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">How It Works</h2>
                <div className="space-y-lg">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex items-start gap-lg border-b border-surface-dim pb-md last:border-0 last:pb-0">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-headline-sm font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">{step.step}</h3>
                        <p className="text-body-md text-on-surface-variant">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-2xl">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Frequently Asked Questions</h2>
                <div className="space-y-lg">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-surface-container p-lg rounded border border-surface-dim">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm flex items-center gap-sm">
                        <span className="material-symbols-outlined text-primary">help</span>
                        {faq.q}
                      </h3>
                      <p className="text-body-md text-on-surface-variant">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-xl">
                {/* CTA Box */}
                <div className="bg-surface border border-surface-dim p-xl rounded-lg shadow-sm text-center">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Need Urgent Help?</h3>
                  <p className="text-body-md text-on-surface-variant mb-lg">
                    Our team in UAE is available 24/7. Get a free quote instantly.
                  </p>
                  <a 
                    href={`https://wa.me/971556230065?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-sm bg-primary text-on-primary w-full py-md rounded font-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    WhatsApp Us Now
                  </a>
                </div>

                {/* Internal Links */}
                <div className="bg-surface border border-surface-dim p-xl rounded-lg shadow-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-lg pb-sm border-b border-surface-dim">
                    Related Services
                  </h3>
                  <div className="flex flex-col gap-md">
                    {relatedServices.map(related => (
                      <Link 
                        key={related.slug} 
                        to={`/services/${related.slug}`}
                        className="text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-sm"
                      >
                        <span className="material-symbols-outlined text-sm">arrow_right</span>
                        {related.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

    </>
  );
}
