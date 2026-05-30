import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles hash-based anchor scrolling for React Router SPAs.
 * When navigating to /#services, /#about etc. from any page,
 * this hook waits for the DOM to render then smoothly scrolls
 * to the target element.
 */
export function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // No hash — scroll to top of page on route change
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Hash present — wait for React to paint then scroll
    const id = hash.replace('#', '');
    const attempt = (retries = 10) => {
      const el = document.getElementById(id);
      if (el) {
        // Offset for sticky header (~73px)
        const headerOffset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (retries > 0) {
        // Element not in DOM yet — retry after short delay
        setTimeout(() => attempt(retries - 1), 80);
      }
    };

    // Small delay to let React render the new route first
    setTimeout(attempt, 100);
  }, [pathname, hash]);
}
