/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://inbrows.pl',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  i18n: {
    locales: ['en', 'pl', 'ru', 'ua'],
    defaultLocale: 'pl',
  },
};
