import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import type { BlogPostData } from '../data/blog';

export default function BlogPost({ post }: { post: BlogPostData }) {
  const pageUrl = `https://azoneprojects.com/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Azone Projects UAE</title>
        <meta name="description" content={post.metaDesc} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.metaDesc,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "datePublished": new Date(post.date).toISOString(),
            "publisher": {
              "@type": "Organization",
              "name": "Azone Projects FZC",
              "logo": {
                "@type": "ImageObject",
                "url": "https://azoneprojects.com/assets/img/Azok.png"
              }
            }
          })}
        </script>

        {/* Task 4D: BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://azoneprojects.com/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://azoneprojects.com/blog" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": pageUrl }
            ]
          })}
        </script>
      </Helmet>


      <main className="pt-2xl pb-3xl bg-background">
        <div className="section-container px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          
          <nav className="flex flex-wrap text-sm text-on-surface-variant mb-xl font-label-md">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-on-surface font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>

          <article className="bg-surface border border-surface-dim rounded-lg overflow-hidden shadow-sm">
            {/* Hero Image */}
            <div className="h-64 md:h-96 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                width="1200" height="384"
                fetchPriority="high"
              />
            </div>
            <div className="p-lg md:p-2xl">
              <div className="mb-xl border-b border-surface-dim pb-lg">
              <div className="flex items-center gap-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-md">
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                {post.date}
                <span className="mx-2">•</span>
                <span className="material-symbols-outlined text-sm">edit</span>
                {post.author}
              </div>
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-lg">
                {post.title}
              </h1>
            </div>

            {/* Render the HTML content safely */}
            <div 
              className="prose prose-invert max-w-none 
                prose-headings:font-headline-md prose-headings:text-on-surface 
                prose-p:text-body-lg prose-p:text-on-surface-variant prose-p:leading-relaxed 
                prose-a:text-primary hover:prose-a:text-accent prose-a:transition-colors
                prose-ul:text-on-surface-variant prose-ul:list-disc prose-ul:ml-lg
                prose-strong:text-on-surface"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            <div className="mt-2xl pt-xl border-t border-surface-dim text-center">
              <p className="font-headline-sm text-on-surface mb-md">Need expert academic assistance?</p>
              <a 
                href={`https://wa.me/971556230065?text=${encodeURIComponent(`Hi, I read your blog post on ${post.title} and need help.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-sm bg-primary text-on-primary px-xl py-md rounded font-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md"
              >
                <span className="material-symbols-outlined">chat</span>
                Chat with our UAE Experts
              </a>
            </div>
            </div>{/* end p-lg md:p-2xl */}
          </article>

        </div>
      </main>

    </>
  );
}
