import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SERVICE_PAGES } from '../data/services';
import { BLOG_POSTS } from '../data/blog';

export default function SitemapPage() {
  const pageUrl = 'https://azoneprojects.com/sitemap';

  const sections = [
    {
      heading: 'Main Pages',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Pricing & Rates in AED', href: '/pricing' },
        { label: 'Student Reviews & Testimonials', href: '/testimonials' },
        { label: 'Contact Us', href: '/#contact' },
      ],
    },
    {
      heading: 'Academic Writing Services',
      links: SERVICE_PAGES.map(s => ({
        label: s.title,
        href: `/services/${s.slug}`,
      })),
    },
    {
      heading: 'Blog & Guides',
      links: [
        { label: 'Blog Home', href: '/blog' },
        ...BLOG_POSTS.map(p => ({ label: p.title, href: `/blog/${p.slug}` })),
      ],
    },
    {
      heading: 'Other Languages',
      links: [
        { label: 'مساعدة في الواجبات – Arabic Assignment Help', href: '/ar/services/assignment-help' },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Site Map – Azone Projects UAE</title>
        <meta name="description" content="Full sitemap of Azone Projects – academic writing services, blog posts, pricing, and more across Dubai, Sharjah & Abu Dhabi." />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://azoneprojects.com/" },
              { "@type": "ListItem", "position": 2, "name": "Sitemap", "item": pageUrl },
            ],
          })}
        </script>
      </Helmet>


      <main className="pt-2xl pb-3xl bg-background">
        <div className="section-container px-margin-mobile md:px-margin-desktop">
          <nav className="flex text-sm text-on-surface-variant mb-xl font-label-md">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-on-surface font-medium">Sitemap</span>
          </nav>

          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-2xl">
            Site Map – Azone Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2xl">
            {sections.map(section => (
              <div key={section.heading} className="bg-surface border border-surface-dim rounded-lg p-xl shadow-sm">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-lg pb-sm border-b border-surface-dim">
                  {section.heading}
                </h2>
                <ul className="space-y-sm">
                  {section.links.map(link => (
                    <li key={link.href} className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary text-sm">arrow_right</span>
                      <Link
                        to={link.href}
                        className="text-body-md text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

    </>
  );
}
