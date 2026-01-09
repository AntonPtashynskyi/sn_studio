"use client"

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Script from 'next/script';

export default function GoogleAnalytics({ gaId, gtmId }) {
  const [cookies] = useCookies(['cookie-consent']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Init basic state consent mode
    if (typeof window !== 'undefined' && window.gtag && mounted) {
      if (cookies['cookie-consent'] === 'accepted') {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': 'granted'
        });
      } else {
        window.gtag('consent', 'default', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied'
        });
      }
    }
  }, [cookies, mounted]);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  if (cookies['cookie-consent'] !== 'accepted') {
    return (
      <>
        {/* GTM - Only consent mode before acceptance */}
        {gtmId && (
          <Script
            id="gtm-consent"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  'analytics_storage': 'denied',
                  'ad_storage': 'denied'
                });
              `,
            }}
          />
        )}
        {/* GA - Only consent mode before acceptance */}
        {!gtmId && (
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
        )}
      </>
    );
  }

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');

              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
              });
            `,
          }}
        />
      )}

      {/* Google Analytics (if GTM is not used) */}
      {!gtmId && gaId && (
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
      )}
    </>
  );
}
