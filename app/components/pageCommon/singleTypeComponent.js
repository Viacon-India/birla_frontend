
import { getStrapiMedia } from "@/lib/utils";
// import { Helmet } from "react-helmet";

export function SingleTypeSeo({ pageData, page = "page" }) {
  const domain = process.env.DOMAIN_NAME;
  let schema = {};
  if (page == "page") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: pageData.data?.attributes?.title,
      url: domain + pageData.data?.attributes?.permalink,
      logo: getStrapiMedia(pageData?.seo_image?.url),
      description: pageData.seo_description,
    };
  }
  if (page == "website") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageData.data?.attributes?.title,
      url: domain,
      description: pageData.seo_description,
    };
  }
  return (
    <>
      {pageData.data?.attributes?.title && (
        <title>{pageData.data.attributes.title}</title>
      )}
      {pageData.data?.attributes?.seo_description && (
        <meta
          name="description"
          content={pageData.data.attributes.seo_description}
        />
      )}
      {pageData.data?.attributes?.seo_keywords && (
        <meta name="keywords" content={pageData.data.attributes.seo_keywords} />
      )}
      {page && <meta property="og:type" content={page} />}
      <meta property="og:site_name" content="Birla Tyres" />
      {pageData.data?.attributes?.seo_title && (
        <meta
          property="og:title"
          content={pageData.data.attributes.seo_title}
        />
      )}
      {pageData.data?.attributes?.seo_description && (
        <meta
          property="og:description"
          content={pageData.data.attributes.seo_description}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image"
          content={getStrapiMedia(
            pageData.data.attributes.seo_image.data.attributes?.url
          )}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image:width"
          content={pageData.data.attributes.seo_image.data.attributes?.width}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image:height"
          content={pageData.data.attributes.seo_image.data.attributes?.height}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image:type"
          content={pageData.data.attributes.seo_image.data.attributes?.mime}
        />
      )}
      {pageData.data?.attributes?.permalink && (
        <meta
          property="og:url"
          content={domain + pageData.data.attributes.permalink}
        />
      )}
      {pageData.data?.attributes?.permalink && (
        <link
          rel="canonical"
          href={domain + pageData.data.attributes.permalink}
        />
      )}
      {pageData.data?.attributes?.seo_title && (
        <meta
          name="twitter:card"
          content={pageData.data.attributes.seo_title}
        />
      )}
      {pageData.data?.attributes?.seo_title && (
        <meta
          name="twitter:title"
          content={pageData.data.attributes.seo_title}
        />
      )}
      {pageData.data?.attributes?.seo_description && (
        <meta
          name="twitter:description"
          content={pageData.data.attributes.seo_description}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          name="twitter:image"
          content={getStrapiMedia(
            pageData.data.attributes.seo_image.data.attributes?.url
          )}
        />
      )}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    {/* </Helmet> */}
    </>
  );
}
