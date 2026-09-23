// Genera public/sitemap.xml a partir de las rutas estáticas y de las carpetas
// de perfiles detectadas en src/img/scorts/*/profile.json. Se ejecuta antes
// de cada build (ver "prebuild" en package.json) para mantenerlo actualizado.
import { readdirSync, existsSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const SITE_URL = "https://kalixscort.com";

const staticRoutes = [
  { path: "/bucaramanga", changefreq: "weekly", priority: "1.0" },
  { path: "/bucaramanga/catalogo", changefreq: "daily", priority: "0.9" },
  { path: "/trabaja-con-nosotros", changefreq: "monthly", priority: "0.5" },
  { path: "/contacto", changefreq: "monthly", priority: "0.5" },
  { path: "/terminos-y-condiciones", changefreq: "yearly", priority: "0.3" },
];

const scortsDir = join(root, "src/img/scorts");
const profileRoutes = existsSync(scortsDir)
  ? readdirSync(scortsDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && existsSync(join(scortsDir, entry.name, "profile.json")))
      .map((entry) => ({ path: `/bucaramanga/catalogo/${entry.name}`, changefreq: "weekly", priority: "0.8" }))
  : [];

const routes = [...staticRoutes, ...profileRoutes];
const today = new Date().toISOString().split("T")[0];

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf-8");
console.log(`sitemap.xml generado con ${routes.length} rutas.`);
