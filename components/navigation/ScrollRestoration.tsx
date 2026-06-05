'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }

    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [pathname]);

  return null;
}
