export async function GET() {
  // Fallback and normalize domain
  let domain = process.env.DOMAIN_NAME || "https://www.example.com";
  domain = domain.replace(/\/$/, ""); // remove trailing slash

  // Helper: fetch collection
  async function fetchCollection(endpoint) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}?populate=deep`,
        { cache: "no-store" }
      );
      if (res.ok) {
        const data = await res.json();
        return data?.data || [];
      } else {
        console.error(`Strapi error on ${endpoint}:`, res.status);
        return [];
      }
    } catch (err) {
      console.error(`Failed to fetch ${endpoint}:`, err);
      return [];
    }
  }

  // Fetch all collections in parallel
  const [pages, blogs, products] = await Promise.all([
    fetchCollection("pages"),
    fetchCollection("blogs"),
    fetchCollection("products"),
  ]);

  // Combine entries
  const allEntries = [
    ...pages.map((item) => ({
      permalink:
        item.permalink ||
        item.attributes?.permalink ||
        item.attributes?.slug ||
        "",
      updatedAt: item.attributes?.updatedAt || item.updatedAt,
      type: "page",
    })),
    ...blogs.map((item) => ({
      permalink:
        item.permalink ||
        item.attributes?.permalink ||
        item.attributes?.slug ||
        "",
      updatedAt: item.attributes?.updatedAt || item.updatedAt,
      type: "blog",
    })),
    ...products.flatMap((item) => {
      const productAttr = item.attributes || item;

      const productUrl =
        productAttr.permalink ||
        productAttr.slug ||
        "";
      const productUpdated = productAttr.updatedAt || new Date().toISOString();

      // Segment URL if available
      const segmentUrl =
        productAttr.segment?.permalink || productAttr.segment?.slug || null;

      const entries = [
        {
          permalink: productUrl,
          updatedAt: productUpdated,
          type: "product",
        },
      ];

      if (segmentUrl) {
        entries.push({
          permalink: segmentUrl,
          updatedAt: productUpdated,
          type: "segment",
        });
      }

      return entries;
    }),
  ];

  // Deduplicate by permalink
  const seen = new Set();
  const uniqueEntries = allEntries.filter((entry) => {
    if (!entry.permalink) return false;
    if (seen.has(entry.permalink)) return false;
    seen.add(entry.permalink);
    return true;
  });

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
${uniqueEntries
  .map((entry) => {
    let permalink = entry.permalink || "";
    permalink = "/" + permalink.replace(/^\/+/, ""); // ensure single leading slash
    const url = `${domain}${permalink}`;
    const updated = entry.updatedAt || new Date().toISOString();

    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${updated}</lastmod>
  </url>`;
  })
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
