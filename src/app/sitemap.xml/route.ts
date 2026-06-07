import fs from 'fs';
import path from 'path';
import { GeneratedEntity } from '../../../scripts/generate-seo-entities';

const SITE_URL = 'https://loancalculatorhub.com';

// Segment sizes (Google limit is 50k, but we keep it smaller for faster parsing)
const SITEMAP_MAX_URLS = 10000;

function generateSitemapIndex(clusters: string[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  clusters.forEach(cluster => {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${SITE_URL}/sitemap-${cluster}.xml</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  });

  xml += `</sitemapindex>`;
  return xml;
}

export async function GET() {
  try {
    // 1. Read the generated ontology file
    const dataPath = path.join(process.cwd(), 'data', 'generated', 'seo-pages.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const entities: GeneratedEntity[] = JSON.parse(fileContents);

    // 2. Identify unique clusters based on loanType
    const clusterTypes = Array.from(new Set(entities.map(e => e.loanType)));
    const clusters = clusterTypes.map(type => `${type}-loan-calculator`);

    // Add the root sitemap (for hub pages)
    clusters.unshift('root');

    // 3. Generate the XML Index
    const indexXml = generateSitemapIndex(clusters);

    return new Response(indexXml, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
      },
    });

  } catch (error) {
    console.error("Failed to generate sitemap index:", error);
    return new Response('Error generating sitemap index', { status: 500 });
  }
}
