import { Navbar } from "@/components/Navbar/Navbar";
import { Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import MobileMenu from "@/components/Navbar/MobileMenu";
import DesktopMenu from "@/components/Navbar/DesktopMenu";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import GTMNoScript from "@/components/Analytics/GTMNoScript";
import CookieConsent from "@/components/CookieConsent/CookieConsent";

import "./globals.scss";
import { getMetadata } from "../actions";


export async function generateMetadata(data) {
  const { lang } = data.params;
  const metaData = await getMetadata(lang);
  const { ENVIRONMENT_VAR } = process.env;

  const baseUrl = ENVIRONMENT_VAR === "development" ? "http://localhost:3000" : "https://inbrows.pl";
  const canonicalUrl = `${baseUrl}/${lang}`;

  // Generate hreflang alternates for all languages
  // Using proper locale codes and adding x-default
  const languageAlternates = {
    'pl': `${baseUrl}/pl`,
    'en': `${baseUrl}/en`,
    'uk': `${baseUrl}/ua`,
    'ru': `${baseUrl}/ru`,
    'x-default': `${baseUrl}/pl`, // Default to Polish
  };

  return {
    robots: "index, follow",
    metadataBase: new URL("https://inbrows.pl"),
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      images: [`${baseUrl}/api/og-image`],
      type: 'website',
      url: canonicalUrl,
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      site: canonicalUrl,
      title: metaData.title,
      images: [`${baseUrl}/api/og-image`],
      description: metaData.description,
    }
  };
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap", // Optimize font loading - show fallback font while loading
  preload: true,
  fallback: ["system-ui", "arial"],
});

export default async function RootLayout({
  children,
  contact_form,
  params: { lang },
}) {
  return (
    <html lang={lang}>
      <head>
        <GoogleAnalytics gtmId="GTM-MKH85PQM" />
      </head>
      <body className={`${montserrat.variable} font-sans`} data-version="v.1.0">
        <GTMNoScript gtmId="GTM-MKH85PQM" />
        <Navbar>
          <MobileMenu pageLanguage={lang} />
          <DesktopMenu pageLanguage={lang} />
        </Navbar>
        <main className="main-content">{children}</main>
        <Footer pageLanguage={lang} />
        {contact_form}
        <CookieConsent lang={lang} />
      </body>
    </html>
  );
}
