import type { MetadataRoute } from 'next';

// Served at https://martiviconsulting.com/robots.txt (domain root).
// Lists the CAIB landing sitemap so Google can discover /caib/.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://martiviconsulting.com/caib/sitemap.xml',
  };
}
