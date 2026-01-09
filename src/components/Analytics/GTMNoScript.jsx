"use client"

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function GTMNoScript({ gtmId }) {
  const [cookies] = useCookies(['cookie-consent']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Only render if cookies are accepted
  if (cookies['cookie-consent'] !== 'accepted' || !gtmId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
