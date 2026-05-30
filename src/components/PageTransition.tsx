import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wraps each route in a smooth fade+slide-up animation.
 * Triggers on every pathname change via React Router.
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset to invisible
    el.style.opacity = '0';
    el.style.transform = 'none';
    el.style.transition = 'none';

    // Force reflow
    void el.offsetHeight;

    // Smooth animate in
    el.style.transition = 'opacity 0.25s ease-in-out';
    el.style.opacity = '1';
  }, [pathname]);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
