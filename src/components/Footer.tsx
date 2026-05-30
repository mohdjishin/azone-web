import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-surface-dim pt-2xl pb-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-2xl">
        <div className="col-span-1 md:col-span-1">
          <div className="font-headline-sm text-headline-sm font-semibold text-primary uppercase tracking-wide mb-lg">
            AZONE PROJECTS
          </div>
          <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed pr-md">
            Empowering the UAE with premium digital solutions and elite academic consulting since 2019. Defined by precision and trust.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-wider">Expertise</h4>
          <ul className="space-y-sm text-on-surface-variant font-body-sm text-body-sm">
            <li><Link className="hover:text-primary transition-colors" to="/#services">Web Architecture</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/services/essay-writing">Academic Consulting</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/#services">Search Strategy</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/blog">Our Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-wider">Firm</h4>
          <ul className="space-y-sm text-on-surface-variant font-body-sm text-body-sm">
            <li><Link className="hover:text-primary transition-colors" to="/#about">About AZONE</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/#portfolio">Case Studies</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/pricing">Pricing & Rates</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/testimonials">Student Reviews</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/#contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface mb-lg uppercase tracking-wider">Compliance</h4>
          <ul className="space-y-sm text-on-surface-variant font-body-sm text-body-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Terms of Engagement</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Licensing Details</a></li>
            <li><Link className="hover:text-primary transition-colors" to="/sitemap">Site Map</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-lg border-t border-surface-dim flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-on-surface-variant font-body-sm text-body-sm">
          © 2025 AZONE PROJECTS FZC. All rights reserved.
        </p>
        <p className="text-on-surface-variant font-body-sm text-body-sm">
          Registered in Sharjah Publishing City Freezone, UAE.
        </p>
      </div>
    </footer>
  );
}
