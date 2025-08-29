// app/[...slug]/page.jsx

import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import PageSelection from "@/app/components/selection/pageLayout";
import { getStrapiMedia } from "@/lib/utils";

// fetch data from Strapi
async function getPageData(page, endPoint) {
  try {
    const res = await fetch(getStrapiMedia(`/api/${page}/${endPoint}`), {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const slugs = params.slug;
  const page = slugs?.[1]?.includes("-bt-") ? "products" : "segments";
  const endPoint = slugs?.at(-2) === "page" ? slugs.at(-3) : slugs.at(-1);

  const data = await getPageData(page, endPoint);

  // ✅ Strapi REST gives array → pick first item
  const attrs = Array.isArray(data) ? data[0] : data || {};

  return {
    title: attrs.seo_title || attrs.title || "Default Title",
    description:
      attrs.seo_description || attrs.description || "Default description",
    keywords: attrs.seo_keywords || "",
    openGraph: {
      title: attrs.seo_title || attrs.title,
      description: attrs.seo_description || attrs.description,
      url: attrs.permalink || null,
      images: attrs.hero?.url
        ? [
            {
              url: getStrapiMedia(attrs.hero.url),
              alt: attrs.hero?.alternativeText || attrs.title || "",
            },
          ]
        : [],
    },
    alternates: {
      canonical: attrs.permalink || null,
    },
  };
}

export default async function Page({ params }) {
  const slugs = params.slug;
  const page = slugs?.[1]?.includes("-bt-") ? "products" : "segments";
  const endPoint = slugs?.at(-2) === "page" ? slugs.at(-3) : slugs.at(-1);
  const pagination = slugs?.at(-2) === "page" ? slugs.at(-1) : 1;

  const pageData = await getPageData(page, endPoint);

  return (
    <>
      <Navbar />
      <PageSelection page={page} pageData={pageData} pagination={pagination} />
      <Footer />
    </>
  );
}
