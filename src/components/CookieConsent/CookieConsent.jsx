"use client"

import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export default function CookieConsent({ lang }) {
  const [cookies, setCookie] = useCookies(['cookie-consent']);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!cookies['cookie-consent']) {
      setShowBanner(true);
    }
  }, [cookies]);

  const acceptCookies = () => {
    setCookie('cookie-consent', 'accepted', {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax'
    });
    setShowBanner(false);

    // Init Google Analytics after accept
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  };

  const declineCookies = () => {
    setCookie('cookie-consent', 'declined', {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax'
    });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const translations = {
    pl: {
      message: 'Ta strona używa plików cookie, aby poprawić Twoje doświadczenie. Kontynuując przeglądanie, zgadzasz się na użycie plików cookie.',
      accept: 'Akceptuję',
      decline: 'Odrzuć'
    },
    en: {
      message: 'This site uses cookies to improve your experience. By continuing to browse, you agree to the use of cookies.',
      accept: 'Accept',
      decline: 'Decline'
    },
    ua: {
      message: 'Цей сайт використовує файли cookie для покращення вашого досвіду. Продовжуючи перегляд, ви погоджуєтеся на використання файлів cookie.',
      accept: 'Прийняти',
      decline: 'Відхилити'
    },
    ru: {
      message: 'Этот сайт использует файлы cookie для улучшения вашего опыта. Продолжая просмотр, вы соглашаетесь на использование файлов cookie.',
      accept: 'Принять',
      decline: 'Отклонить'
    }
  };

  const t = translations[lang] || translations.pl;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left flex-1">
          {t.message}
        </p>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-6 py-2 border border-white rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            {t.decline}
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
