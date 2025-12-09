export function generatePageMetadata({ lang, slug, meta }) {
  const { ENVIRONMENT_VAR } = process.env;
  const baseUrl = ENVIRONMENT_VAR === "development" ? "http://localhost:3000" : "https://inbrows.pl";
  const canonicalUrl = `${baseUrl}/${lang}/${slug}`;

  // Generate hreflang alternates for all languages
  const languages = ['pl', 'en', 'ua', 'ru'];
  const languageAlternates = {};
  languages.forEach(locale => {
    languageAlternates[locale] = `${baseUrl}/${locale}/${slug}`;
  });

  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      images: [`${baseUrl}/api/og-image`],
      type: "website",
      locale: lang,
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      site: canonicalUrl,
      images: [`${baseUrl}/api/og-image`],
    },
  };
}
