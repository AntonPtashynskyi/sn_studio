const fs = require("fs");
const path = require("path");

const baseUrl = "https://inbrows.pl";
const languages = ["pl", "en", "ua", "ru"];

function scanDir(dir, prefix = "") {
  const items = fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true })
    : [];
  let urls = [];

  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      // Skip private folders and parallel routes (slots)
      if (item.name.startsWith("_") || item.name.startsWith("@")) continue;

      // Handle route groups: traverse but don't add to URL
      const isRouteGroup = item.name.startsWith("(") && item.name.endsWith(")");
      const nextPrefix = isRouteGroup ? prefix : `${prefix}/${item.name}`;

      const hasPage = ["page.js", "page.jsx", "page.ts", "page.tsx"].some(
        (ext) => fs.existsSync(path.join(full, ext))
      );
      
      // Only add URL if it's not a route group (route groups don't have their own page usually, or if they do, it's the parent's page? No, (group)/page.js is /)
      // Actually, (group)/page.js maps to / (if at root) or /parent (if nested).
      // So if isRouteGroup is true, we use 'prefix'.
      if (hasPage) urls.push(nextPrefix);
      
      urls.push(...scanDir(full, nextPrefix));
    }
  }
  return urls;
}

(async () => {
  const appDir = path.join(process.cwd(), "src", "app");
  let urls = [];

  for (const lang of languages) {
    const langDir = path.join(appDir, "[lang]");
    // Add root language page
    urls.push(`/${lang}`);
    urls.push(...scanDir(langDir, `/${lang}`));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", xml);
  console.log("Sitemap generated!");
})();
