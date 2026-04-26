const fs = require("fs");
const path = require("path");

const baseUrl = "https://inbrows.pl";
const languages = ["pl", "en", "ua", "ru"];

// Priority and changefreq by slug depth/type
function getUrlMeta(urlPath) {
  const slug = urlPath.replace(/^\/[a-z]{2}/, "");
  if (slug === "" || slug === "/") return { priority: "1.0", changefreq: "weekly" };
  if (slug === "/services" || slug === "/services/") return { priority: "0.9", changefreq: "weekly" };
  if (slug.includes("basic-brows") || slug.includes("lash-lamination")) return { priority: "0.8", changefreq: "monthly" };
  if (slug.includes("privacy-policy")) return { priority: "0.2", changefreq: "yearly" };
  return { priority: "0.7", changefreq: "monthly" };
}

function scanDir(dir, prefix = "") {
  const items = fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true })
    : [];
  let urls = [];

  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name.startsWith("_") || item.name.startsWith("@")) continue;

      const isRouteGroup = item.name.startsWith("(") && item.name.endsWith(")");
      const nextPrefix = isRouteGroup ? prefix : `${prefix}/${item.name}`;

      const hasPage = ["page.js", "page.jsx", "page.ts", "page.tsx"].some(
        (ext) => fs.existsSync(path.join(full, ext))
      );

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
    urls.push(`/${lang}`);
    urls.push(...scanDir(langDir, `/${lang}`));
  }

  const lastmod = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    const { priority, changefreq } = getUrlMeta(url);
    return `
  <url>
    <loc>${baseUrl}${url}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", xml);
  console.log("Sitemap generated!");
})();
