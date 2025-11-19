export function generatePageMetadata({ lang, slug, meta }) {
  const { ENVIRONMENT_VAR } = process.env;
  const baseUrl = ENVIRONMENT_VAR === "development" ? "http://localhost:3000" : "https://inbrows.pl";
  const canonicalUrl = `${baseUrl}/${lang}/${slug}`;

  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      images: [`${baseUrl}/api/og-image`],
      type: "website",
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
