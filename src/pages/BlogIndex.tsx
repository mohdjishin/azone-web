import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';

export default function BlogIndex() {
  const pageUrl = 'https://azoneprojects.com/blog';

  return (
    <>
      <Helmet>
        <title>Assignment Help Blog UAE – Tips, Guides & Academic Advice | Azone Projects</title>
        <meta name="description" content="Read the latest articles on academic writing, university survival, and digital solutions in Dubai, Sharjah & Abu Dhabi." />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <main className="pt-2xl pb-3xl bg-background">
        <div className="section-container px-margin-mobile md:px-margin-desktop">
          
          <nav className="flex text-sm text-on-surface-variant mb-xl font-label-md">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-on-surface font-medium">Blog</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-2xl">
            <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md tracking-widest uppercase mb-md">
              <span className="w-8 h-[1px] bg-outline" />
              Latest Articles
            <span className="w-8 h-[1px] bg-outline" />
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md">
            The Azone Projects Blog
          </h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Expert advice, academic writing tips, and digital strategy insights for students and businesses in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-background border border-surface-dim rounded-lg overflow-hidden flex flex-col hover:border-outline transition-all duration-300 shadow-sm hover:shadow-md group">
              <Link to={`/blog/${post.slug}`} className="block h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600" height="208"
                />
              </Link>
              <div className="p-xl flex flex-col flex-grow">
                <div className="flex items-center gap-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">
                  <span className="material-symbols-outlined text-sm">calendar_month</span>
                  {post.date}
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-md leading-tight">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-body-md text-on-surface-variant mb-lg flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-md border-t border-surface-dim">
                  <Link to={`/blog/${post.slug}`} className="text-primary font-label-md uppercase tracking-wider hover:text-accent transition-colors flex items-center gap-xs">
                    Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        </div>
      </main>
    </>
  );
}
