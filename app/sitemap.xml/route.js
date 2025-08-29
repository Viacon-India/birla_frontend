export async function GET() {
  // Fallback and normalize domain
  let domain = process.env.DOMAIN_NAME || "https://www.example.com";
  // Remove trailing slash if present
  domain = domain.replace(/\/$/, "");

  // Helper: fetch collection
  async function fetchCollection(endpoint) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}?populate=*`,
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

  // Combine them with permalink handling
  const allEntries = [
    ...pages.map((item) => ({
      ...item.attributes,
      permalink: item.permalink || item.attributes?.permalink || item.attributes?.slug || "",
      type: "page",
      updatedAt: item.attributes?.updatedAt || item.updatedAt,
    })),
    ...blogs.map((item) => ({
      ...item.attributes,
      permalink: item.permalink || item.attributes?.permalink || item.attributes?.slug || "",
      type: "blog",
      updatedAt: item.attributes?.updatedAt || item.updatedAt,
    })),
    ...products.map((item) => ({
      ...item.attributes,
      permalink: item.permalink || item.attributes?.permalink || item.attributes?.slug || "",
      type: "product",
      updatedAt: item.attributes?.updatedAt || item.updatedAt,
    })),
  ];

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
${allEntries
  .map((entry) => {
    let permalink = entry.permalink || "";
    // Ensure permalink starts with a single slash
    permalink = "/" + permalink.replace(/^\/+/, "");
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
