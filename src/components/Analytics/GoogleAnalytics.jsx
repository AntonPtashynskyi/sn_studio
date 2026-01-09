"use client"

import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Script from 'next/script';

export default function GoogleAnalytics({ gaId }) {
  const [cookies] = useCookies(['cookie-consent']);

  useEffect(() => {
    // Init basic state consent mode
    if (typeof window !== 'undefined' && window.gtag) {
      if (cookies['cookie-consent'] === 'accepted') {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      } else {
        window.gtag('consent', 'default', {
          'analytics_storage': 'denied'
        });
      }
    }
  }, [cookies]);

  if (cookies['cookie-consent'] !== 'accepted') {
    return (
      <>
        <Script
          id="google-analytics-consent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
      </>
    );
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'update', {
              'analytics_storage': 'granted'
            });
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
