import { useState } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Enterprise Web Development', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formBody = new FormData();
    formBody.append('name', formData.name);
    formBody.append('email', formData.email);
    formBody.append('subject', formData.subject);
    formBody.append('message', formData.message);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzdyIYLgoyi4MPXrqXS6C7zEWebqg9gR4hJj2ORH3BpDOt0cpEpaghNjBZuQWAo06nN/exec', {
        method: 'POST',
        body: formBody,
        mode: 'no-cors'
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: 'Enterprise Web Development', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>

      <main>
        {/* ═══════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-background py-2xl px-margin-mobile md:px-margin-desktop border-b border-surface-dim">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            <div className="z-10 max-w-2xl">
              <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md text-label-md tracking-widest uppercase mb-lg">
                <span className="w-8 h-[1px] bg-outline" />
                Established 2019
              </span>
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-lg leading-tight">
                Expert Digital Solutions &amp; <br />
                <span className="text-on-surface-variant font-medium">Academic Support</span> in UAE
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-xl max-w-xl leading-relaxed">
                Empowering businesses with cutting-edge technology and supporting students through institutional-grade academic consulting. A unified, elite approach to growth.
              </p>
              <div className="flex flex-wrap gap-md items-center">
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className="bg-primary text-on-primary px-xl py-md rounded font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all hover:shadow-lg cursor-pointer"
                >
                  Get Started
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                  className="border border-outline-variant text-on-surface px-xl py-md rounded font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container transition-all cursor-pointer"
                >
                  Explore Services
                </a>
              </div>
            </div>
            <div className="relative group w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden border border-surface-dim shadow-sm">
              <img
                alt="Azone Projects UAE – Expert Assignment Help, Web Development and Digital Marketing in Dubai, Sharjah & Abu Dhabi"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/hero_agency.png"
                width="1200" height="600"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            TRUST BAR
        ═══════════════════════════════════════════════ */}
        <section className="bg-surface-container py-lg border-b border-surface-dim">
          <div className="section-container px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-md">
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest whitespace-nowrap">
              Trusted By
            </p>
            <div className="w-full h-[1px] bg-outline-variant hidden md:block" />
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-md md:gap-xl opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-headline-sm font-medium text-on-surface">DUBAI TECH</span>
              <span className="font-headline-sm font-medium text-on-surface">UAE UNIVERSITY</span>
              <span className="font-headline-sm font-medium text-on-surface">KHALIFA EDU</span>
              <span className="font-headline-sm font-medium text-on-surface">AD GLOBAL</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            SERVICES
        ═══════════════════════════════════════════════ */}
        <section className="py-2xl px-margin-mobile md:px-margin-desktop bg-background" id="services">
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-2xl gap-lg">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md text-label-md tracking-widest uppercase mb-md">
                  <span className="w-8 h-[1px] bg-outline" />
                  What We Do
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Our Core Expertise</h2>
                <p className="text-body-lg text-on-surface-variant">
                  Strategic execution across digital and academic landscapes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-lg">
              {[
                { icon: 'terminal', title: 'Web Development', slug: '/#contact', desc: 'Custom-built enterprise solutions and dynamic websites engineered for scalability and performance.' },
                { icon: 'monitoring', title: 'SEO Optimization', slug: '/#contact', desc: 'Data-driven search engine optimization strategies to dominate rankings and drive organic growth.' },
                { icon: 'account_balance', title: 'Academic Consulting', slug: '/services/essay-writing', desc: 'Professional support for higher education students, providing guidance on assignments and rigorous research.' },
                { icon: 'view_in_ar', title: '3D Printing', slug: '/#contact', desc: 'Rapid prototyping, custom enclosures, and precision-grade scale models using FDM and resin 3D printing technologies.' },
                { icon: 'memory', title: 'Electronics & IoT', slug: '/#contact', desc: 'Arduino, Raspberry Pi, and ESP32-based solutions — from smart irrigation systems to industrial sensor networks.' },
                { icon: 'edit_document', title: 'Dissertation Help', slug: '/services/dissertation-help', desc: 'Expert dissertation help for UAE students. Full chapters or complete dissertations, delivered on time.' },
              ].map((s) => (
                <Link
                  key={s.title}
                  to={s.slug}
                  className="group border border-surface-dim p-lg md:p-xl hover:border-outline hover:shadow-md transition-all duration-300 bg-surface relative overflow-hidden flex flex-col cursor-pointer"
                >
                  <span className="material-symbols-outlined text-4xl text-primary mb-lg font-light transition-transform group-hover:-translate-y-1">
                    {s.icon}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">{s.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mb-lg flex-grow">{s.desc}</p>
                  <span className="mt-auto text-primary font-label-md uppercase tracking-wider flex items-center gap-xs group-hover:text-accent transition-colors">
                    Learn More <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            STATS
        ═══════════════════════════════════════════════ */}
        <section className="py-xl bg-surface-container border-y border-surface-dim">
          <div className="section-container px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-lg md:gap-xl">
              {[
                { value: '300+', label: 'Active Clients' },
                { value: '1.2k', label: 'Projects Done' },
                { value: '98%', label: 'Success Rate' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-outline-variant pl-md md:pl-lg">
                  <div className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-xs">{stat.value}</div>
                  <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            ABOUT
        ═══════════════════════════════════════════════ */}
        <section className="py-2xl px-margin-mobile md:px-margin-desktop bg-background" id="about">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
            <div className="order-2 lg:order-1 relative h-[350px] md:h-[600px]">
              <img
                alt="Azone Projects FZC – Academic Consulting and Digital Solutions company based in Sharjah, UAE"
                className="w-full h-full object-cover rounded"
                src="/frassociates.png"
                loading="lazy" width="800" height="600"
              />
            </div>
            <div className="order-1 lg:order-2 max-w-xl">
              <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md text-label-md tracking-widest uppercase mb-md">
                <span className="w-8 h-[1px] bg-outline" />
                About Us
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Pioneering Excellence Since 2019</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-md leading-relaxed">
                AZONE PROJECTS was founded in the heart of the UAE with a clear mission: to bridge the gap between complex digital requirements and institutional academic standards.
              </p>
              <p className="text-on-surface-variant font-body-md text-body-md mb-xl leading-relaxed">
                Over the years, we have evolved into a premier multi-disciplinary consultancy. Our heritage is built on absolute transparency and a relentless pursuit of operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-lg">
                <div className="flex items-center gap-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Licensed in UAE</span>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Top Rated Agency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            PORTFOLIO (Component)
        ═══════════════════════════════════════════════ */}
        <div className="border-t border-surface-dim">
          <Portfolio />
        </div>

        {/* ═══════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════ */}
        <section className="py-2xl px-margin-mobile md:px-margin-desktop bg-surface-container border-t border-surface-dim">
          <div className="max-w-3xl mx-auto">
            <div className="mb-xl text-center">
              <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md text-label-md tracking-widest uppercase mb-md mx-auto justify-center">
                <span className="w-8 h-[1px] bg-outline" />
                FAQ
                <span className="w-8 h-[1px] bg-outline" />
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-sm">
              {[
                { q: 'What services do you provide exactly?', a: 'We offer a comprehensive suite of digital services including bespoke web development, advanced SEO, and rigorous academic consulting for university students in the UAE.' },
                { q: 'Is your academic help ethical?', a: "Absolutely. We provide high-level consulting and tutoring designed to elevate students' understanding and refine their research capabilities, strictly adhering to institutional academic integrity guidelines." },
                { q: 'How long do projects typically take?', a: 'Project timelines are defined by scope. Enterprise web deployments range from 6-12 weeks, whereas SEO engagements are typically 6-month minimum strategic partnerships.' },
              ].map((faq) => (
                <details key={faq.q} className="group bg-surface rounded-sm p-lg border border-surface-dim hover:border-outline-variant transition-colors">
                  <summary className="flex justify-between items-center cursor-pointer list-none font-headline-sm text-headline-sm text-on-surface">
                    {faq.q}
                    <span className="material-symbols-outlined font-light group-open:rotate-45 transition-transform">add</span>
                  </summary>
                  <p className="mt-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            CONTACT
        ═══════════════════════════════════════════════ */}
        <section className="py-2xl px-margin-mobile md:px-margin-desktop bg-background border-t border-surface-dim" id="contact">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-2xl">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md text-label-md tracking-widest uppercase mb-md">
                <span className="w-8 h-[1px] bg-outline" />
                Get In Touch
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">Initiate a Consultation</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-xl leading-relaxed">
                Detail your requirements below. Our senior consultants will review your inquiry and respond within 24 hours.
              </p>
              <div className="space-y-lg border-t border-surface-dim pt-xl">
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-on-surface font-light">business</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-xs">Headquarters</p>
                    <p className="text-on-surface-variant font-body-md text-body-md">Business Bay, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex items-start gap-md">
                  <span className="material-symbols-outlined text-on-surface font-light">mail</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface uppercase tracking-wider mb-xs">Direct Inquiry</p>
                    <p className="text-on-surface-variant font-body-md text-body-md">hello@azoneprojects.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface border border-surface-dim p-md md:p-xl rounded">
              <form className="space-y-lg" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm">Full Name</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-surface-container border-0 border-b border-outline-variant p-sm focus:border-primary focus:ring-0 outline-none transition-colors font-body-md rounded-none" placeholder="Enter your name" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm">Email Address</label>
                    <input required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-surface-container border-0 border-b border-outline-variant p-sm focus:border-primary focus:ring-0 outline-none transition-colors font-body-md rounded-none" placeholder="Enter your email" type="email" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm">Area of Interest</label>
                  <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-surface-container border-0 border-b border-outline-variant p-sm focus:border-primary focus:ring-0 outline-none transition-colors font-body-md rounded-none appearance-none">
                    <option>Enterprise Web Development</option>
                    <option>Strategic SEO Optimization</option>
                    <option>Institutional Academic Support</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface uppercase tracking-wider mb-sm">Project Details</label>
                  <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-surface-container border-0 border-b border-outline-variant p-sm focus:border-primary focus:ring-0 outline-none transition-colors font-body-md rounded-none resize-none" placeholder="Describe your objectives..." rows={4} />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-sm bg-[#e8f5e9] text-[#2e7d32] rounded border border-[#a5d6a7] font-body-md">
                    Thank you! Your inquiry has been sent successfully. We will get back to you within 24 hours.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-sm bg-[#ffebee] text-[#c62828] rounded border border-[#ef9a9a] font-body-md">
                    Oops! Something went wrong. Please try again or contact us directly via email or WhatsApp.
                  </div>
                )}

                <button disabled={isSubmitting} className="bg-primary text-on-primary px-xl py-md rounded font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all w-full disabled:opacity-70" type="submit">
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}

export default App;
