import { getStrapiMedia } from "@/lib/utils";
import { CollectionTypeSeo } from "@/app/components/pageCommon/pageCommon";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import PageSelection from "@/app/components/selection/pageLayout";

export async function generateMetadata({ params }) {
  const slugs = params.slug;
  const lastSlug = slugs?.at(-1);

  try {
    const res = await fetch(getStrapiMedia(`/api/pages/${lastSlug}`), {
      next: { revalidate: 10 }, // cache/revalidate every 60s
    });

    if (!res.ok) throw new Error("Page not found");
    const pageData = await res.json();

    const attrs = pageData?.data?.attributes || {};

    return {
      title: attrs.seo_title || attrs.title || "",
      description: attrs.seo_description || "Default Description",
      keywords: attrs.seo_keywords || "",
      openGraph: {
        title: attrs.seo_title,
        description: attrs.seo_description,
        url: process.env.DOMAIN_NAME + (attrs.permalink || ""),
        siteName: "Birla Tyres",
        images: attrs.seo_image?.data
          ? [
              {
                url: getStrapiMedia(attrs.seo_image.data.attributes?.url),
                width: attrs.seo_image.data.attributes?.width,
                height: attrs.seo_image.data.attributes?.height,
                type: attrs.seo_image.data.attributes?.mime,
              },
            ]
          : [],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: attrs.seo_title,
        description: attrs.seo_description,
        images: attrs.seo_image?.data
          ? [getStrapiMedia(attrs.seo_image.data.attributes?.url)]
          : [],
      },
      alternates: {
        canonical: process.env.DOMAIN_NAME + (attrs.permalink || ""),
      },
    };
  } catch (error) {
    return {
      title: "Page Not Found",
      description: "404 error",
    };
  }
}

export default async function Page({ params }) {
  const slugs = params.slug;
  const lastSlug = slugs?.at(-1);

  let pageData = null;
  let sidebar = [];
  let page = "";

  try {
    const response = await fetch(getStrapiMedia(`/api/pages/${lastSlug}`), {
      next: { revalidate: 10 },
    });

    if (!response.ok) throw new Error("Page fetch failed");
    pageData = await response.json();

    if (lastSlug === "contact-us") {
      page = "contact-us";
    } else {
      page = "pages";
    }
  } catch (err) {
    if (slugs?.at(-2) === "investor-relations") {
      const tabResponse = await fetch(
        getStrapiMedia("/api/investor-relations-sidebar?populate=*"),
        { next: { revalidate: 60 } }
      );
      const pageSidebar = await tabResponse.json();
      sidebar = pageSidebar.data.attributes.pages.data;
      page = "InvestorRelations";
    } else {
      page = "error404";
    }
  }

  return (
    <>
      <Navbar />
      <PageSelection page={page} pageData={pageData} sidebar={sidebar} slugs={slugs} />
      <Footer />
    </>
  );
}