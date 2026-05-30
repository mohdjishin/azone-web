import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface PricingTier {
  level: string;
  service: string;
  price: string;
}

interface PricingMeta {
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  disclaimer: string;
  whatsappText: string;
  ctaLabel: string;
}

interface FreeFeature {
  label: string;
  icon: string;
}

interface PricingData {
  meta: PricingMeta;
  tiers: PricingTier[];
  freeFeatures: FreeFeature[];
}

export default function PricingPage() {
  const pageUrl = 'https://azoneprojects.com/pricing';
  const [data, setData] = useState<PricingData | null>(null);

  useEffect(() => {
    fetch('/data/pricing.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load pricing data', err));
  }, []);

  if (!data) {
    return (
      <div className="pt-2xl pb-3xl bg-background min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-primary mb-4 animate-bounce"></div>
          <p className="text-on-surface-variant font-medium">Loading pricing...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <main className="pt-2xl pb-3xl bg-background min-h-screen">
        <div className="section-container px-margin-mobile md:px-margin-desktop">
          
          <nav className="flex text-sm text-on-surface-variant mb-xl font-label-md">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-on-surface font-medium">Pricing</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-2xl">
            <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md tracking-widest uppercase mb-md">
              <span className="w-8 h-[1px] bg-outline" />
              Transparent Rates
            <span className="w-8 h-[1px] bg-outline" />
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md">
            {data.meta.h1}
          </h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            {data.meta.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-surface border border-surface-dim rounded-lg overflow-hidden shadow-sm mb-2xl animate-fade-in">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container border-b border-surface-dim">
                  <th className="py-md px-lg font-headline-sm text-on-surface">Academic Level</th>
                  <th className="py-md px-lg font-headline-sm text-on-surface">Service Type</th>
                  <th className="py-md px-lg font-headline-sm text-on-surface text-right">Starting Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-dim">
                {data.tiers.map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container/50 transition-colors">
                    <td className="py-md px-lg text-body-md text-on-surface-variant">{row.level}</td>
                    <td className="py-md px-lg text-body-md text-on-surface font-medium">{row.service}</td>
                    <td className="py-md px-lg text-body-md text-primary font-semibold text-right whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-md bg-surface-container border-t border-surface-dim text-center">
            <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">
              {data.meta.disclaimer}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {data.freeFeatures.map((feature, i) => (
            <div key={i} className="bg-surface border border-surface-dim p-lg rounded-lg text-center flex flex-col items-center gap-sm shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-3xl">{feature.icon}</span>
              <span className="font-headline-sm text-on-surface">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a 
            href={`https://wa.me/971556230065?text=${encodeURIComponent(data.meta.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-sm bg-primary text-on-primary px-2xl py-lg rounded font-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md transform hover:-translate-y-1"
          >
            <span className="material-symbols-outlined">request_quote</span>
            {data.meta.ctaLabel}
          </a>
        </div>

        </div>
      </main>
    </>
  );
}
