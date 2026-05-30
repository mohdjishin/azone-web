import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const links = [
    { label: 'Home', href: '/', active: true },
    { label: 'Services', href: '/#services' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-surface-dim">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-md max-w-[1440px] mx-auto">
        <Link className="flex items-center gap-sm group" to="/">
            <img
              alt="Azone Projects Logo"
              className="h-10 object-contain"
              src="/logo.png"
              width="40" height="40"
            />
          <span className="font-headline-sm text-headline-sm font-semibold tracking-wide text-primary uppercase">
            AZONE
          </span>
        </Link>

        {/* Desktop Nav — only shown md+ */}
        <div className="hidden md:flex items-center gap-xs lg:gap-md xl:gap-lg">
          {links.map((link) => (
            <Link
              key={link.label}
              className={`nav-link whitespace-nowrap text-sm lg:text-body-md px-1 ${
                link.label === 'Pricing' || link.label === 'Testimonials'
                  ? 'hidden lg:block'
                  : ''
              } ${link.active ? 'active text-primary font-medium' : 'text-on-surface-variant hover:text-primary'} transition-colors`}
              to={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <a 
            href="https://wa.me/971556230065?text=Hi, I would like to consult with Azone Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-primary text-on-primary px-lg py-sm rounded hover:bg-secondary transition-all font-label-md text-label-md uppercase tracking-wider whitespace-nowrap"
          >
            Consult Now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-on-surface transition-all ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-on-surface transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-on-surface transition-all ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-[calc(100vh-73px)] overflow-y-auto border-t border-surface-dim bg-surface px-margin-mobile py-lg space-y-md shadow-lg animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.label}
              className={`block font-body-md text-body-md py-sm transition-colors ${link.active ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-primary'}`}
              to={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://wa.me/971556230065?text=Hi, I would like to consult with Azone Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex w-full justify-center items-center gap-2 bg-primary text-on-primary px-lg py-sm rounded font-label-md text-label-md uppercase tracking-wider mt-md active:bg-secondary"
            onClick={() => setMobileOpen(false)}
          >
            Consult Now
          </a>
        </div>
      )}
    </header>
  );
}
