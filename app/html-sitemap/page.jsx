import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Link from "next/link";

async function fetchCollection(endpoint) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${endpoint}?populate=*`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      return data?.data || [];
    }
    return [];
  } catch {
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

  const allEntries = [
    ...pages.map((item) => ({
      url: `${domain}${item.permalink || "/" + item.slug || ""}`.replace(
        /\/+$/,
        ""
      ),
      title: item.title || item.slug || "Untitled",
      type: "Page",
    })),
    ...blogs.map((item) => ({
      url: `${domain}${item.permalink || "/blogs/" + item.slug}`.replace(
        /\/+$/,
        ""
      ),
      title: item.title || item.slug || "Untitled",
      type: "Blog",
    })),
    ...products.map((item) => ({
      url: `${domain}${item.permalink || "/products/" + item.slug}`.replace(
        /\/+$/,
        ""
      ),
      title: item.title || item.slug || "Untitled",
      type: "Product",
    })),
  ];

  allEntries.sort((a, b) => a.url.localeCompare(b.url));

  return (
    <>
      <Navbar />
      <section className="py-[100px]">
        <div className="container mx-auto">
          <h1 className="text-[24px] text-black font-semibold">Sitemap</h1>
          <ul className="flex flex-col gap-2 mt-6 text-[15px] md:text-[18px]">
            <li>
              <Link href={domain + "/"}>Home : {" "}</Link>
              <Link href={domain + "/"} className="text-[#888888] hover:text-primary hover:underline">{domain + "/"}</Link>
            </li>
            {allEntries.map((entry, idx) => (
              <li key={idx}>
                <Link href={entry.url} target="_blank" rel="noopener noreferrer">
                  {entry.title} : {" "}
                  <span className="text-[#888888] hover:text-primary hover:underline">{entry.url}</span>
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
