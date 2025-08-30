import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Link from "next/link";

async function fetchCollection(endpoint) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}?populate=*`,
      { next: { revalidate: 60 } } // ✅ cache with revalidation (avoid dynamic error)
    );
    if (res.ok) {
      const data = await res.json();
      return data?.data || [];
    }
    return [];
  } catch (err) {
    console.error(`Failed to fetch ${endpoint}:`, err);
    return [];
  }
}

export default async function HtmlSiteMap() {
  // Fetch all collections
  const [pages, blogs, products] = await Promise.all([
    fetchCollection("pages"),
    fetchCollection("blogs"),
    fetchCollection("products"),
  ]);

  const domain =
    process.env.DOMAIN_NAME?.replace(/\/$/, "") || "https://www.example.com";

  // Collect entries
  const allEntries = [
    // Pages
    ...pages.map((item) => ({
      url: `${domain}${item.permalink || "/" + item.slug || ""}`.replace(
        /\/+$/,
        ""
      ),
      title: item.title || item.slug || "Untitled",
      type: "Page",
    })),

    // Blogs
    ...blogs.map((item) => ({
      url: `${domain}${item.permalink || "/blogs/" + item.slug}`.replace(
        /\/+$/,
        ""
      ),
      title: item.title || item.slug || "Untitled",
      type: "Blog",
    })),

    // Product Segments (deduplicate later)
    ...products
      .map((item) => {
        if (!item.segment) return null;
        return {
          url: `${domain}${item.segment.permalink}`.replace(/\/+$/, ""),
          title: item.segment.title || item.segment.slug || "Untitled Segment",
          type: "Product Segment",
        };
      })
      .filter(Boolean),

    // Products
    ...products.map((item) => ({
      url: `${domain}${item.permalink || "/products/" + item.slug}`.replace(
        /\/+$/,
        ""
      ),
      title: item.title || item.slug || "Untitled",
      type: "Product",
    })),
  ];

  // Deduplicate (in case multiple products have the same segment)
  const uniqueEntries = Array.from(
    new Map(allEntries.map((entry) => [entry.url, entry])).values()
  );

  // Sort alphabetically
  uniqueEntries.sort((a, b) => a.url.localeCompare(b.url));

  return (
    <>
      <Navbar />
      <section className="py-[100px]">
        <div className="container mx-auto">
          <h1 className="text-[24px] text-black font-semibold">Sitemap</h1>
          <ul className="flex flex-col gap-2 mt-6 text-[15px] md:text-[18px]">
            {/* Home */}
            <li>
              <Link href={domain + "/"}>Home :{" "}</Link>
              <Link
                href={domain + "/"}
                className="text-[#888888] hover:text-primary hover:underline"
              >
                {domain + "/"}
              </Link>
            </li>

            {/* All Entries */}
            {uniqueEntries.map((entry, idx) => (
              <li key={idx}>
                <Link href={entry.url} target="_blank" rel="noopener noreferrer">
                  {entry.title} :{" "}
                  <span className="text-[#888888] hover:text-primary hover:underline">
                    {entry.url}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
