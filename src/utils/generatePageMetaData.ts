export function generatePageMetadata({ lang, slug, meta }) {
  const { ENVIRONMENT_VAR } = process.env;
  const baseUrl = ENVIRONMENT_VAR === "development" ? "http://localhost:3000" : "https://inbrows.pl";

  // Normalize slug to avoid double slashes
  const normalizedSlug = slug ? slug : '';
  const slugPath = normalizedSlug ? `/${normalizedSlug}` : '';
  const canonicalUrl = `${baseUrl}/${lang}${slugPath}`;

  // Generate hreflang alternates for all languages
  // Using proper locale codes: pl-PL, en-US, uk-UA, ru-RU
  const languages = {
    'pl': `${baseUrl}/pl${slugPath}`,
    'en': `${baseUrl}/en${slugPath}`,
    'uk': `${baseUrl}/ua${slugPath}`,
    'ru': `${baseUrl}/ru${slugPath}`,
    'x-default': `${baseUrl}/pl${slugPath}`, // Default to Polish
  };

  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical: canonicalUrl,
      languages: languages,
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
