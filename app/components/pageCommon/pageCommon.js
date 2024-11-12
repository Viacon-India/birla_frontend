"use client";

import { Helmet } from 'react-helmet';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import GradualSpacing from "@/components/GradualSpacing";
import { cn } from "@/lib/utils";
import Tiger from "../../assets/images/tiger-mask3.png";

export function MainButton() {
  const pathname = usePathname();
  return (
    <div
      class={
        pathname == "/"
          ? "multi-btn-sec"
          : "hidden md:flex flex-col gap-5 relative z-10"
      }
    >
      {pathname != "/find-tyre" && (
        <Link href="/find-tyre" className="primary-btn-1">
          Find a Tyre
        </Link>
      )}
      {/* {pathname != "/find-dealer" && (
        <Link href="/find-dealer" className="primary-btn-2">
          Find a Dealer
        </Link>
      )} */}
    </div>
  );
}

export function SmallButton() {
  const pathname = usePathname();
  return (
    <div class="relative w-full flex md:hidden gap-2 p-2">
      {pathname != "/find-tyre" && (
        <Link
          href="/find-tyre"
          className="primary-btn-1 !w-[50%] !justify-center"
        >
          Find a Tyre
        </Link>
      )}
      {/* {pathname != "/find-dealer" && (
        <Link
          href="/find-dealer"
          className="primary-btn-2 !w-[50%] !justify-center"
        >
          Find a Dealer
        </Link>
      )} */}
    </div>
  );
}

export function PageBanner({ Title, Banner, StaticBanner, extension }) {
  return (
    <section className="top-banner-sec bg-[#F8F8F8]">
      <div className="relative">
        <span className="banner-overlay"></span>
        <div className="relative">
          <div className="w-full h-[40vh] xl:h-[80vh] flex items-end">
            <div class="container mx-auto flex flex-col justify-end md:justify-between h-full pt-8 xl:pt-5 pb-3 md:pb-6 xl:pb-[60px]">
              <MainButton />
              <div className="relative z-10">
                <GradualSpacing
                  className="top-banner-sec-heading hidden md:flex"
                  text={Title}
                />
                <h1 className="top-banner-sec-heading md:hidden">{Title}</h1>
              </div>
            </div>
          </div>
          {Banner?.url && (
            Banner.ext == ".mp4" ? (
              <video
                className="absolute top-0 w-full h-full object-cover"
                loop
                autoPlay
                muted
              >
                <source src={getStrapiMedia(Banner.url)} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={getStrapiMedia(Banner.url)}
                width={Banner.width}
                height={Banner.height}
                alt={
                  Banner?.alternativeText
                    ? Banner.alternativeText
                    : "Hero-Banner"
                }
                className="absolute top-0 w-full h-full object-cover"
              />
            )
          )}
        </div>
      </div>
      <SmallButton />
    </section>
  );
}

export function Float(data) {
  return ( data &&
    <div className="sideNav-wrapper">
      {data.data.map((item) => (item?.permalink &&
        <Link className="sideNav" href={item.permalink} key={item.id}>
          {item.icon?.data &&
            <Image
              src={getStrapiMedia(item.icon.data.attributes?.url)}
              width={item.icon.data.attributes?.width}
              height={item.icon.data.attributes?.height}
              alt={item.icon.data.attributes?.alternativeText}
            />
          }
          {item?.name}
        </Link>
      ))}
    </div>
  );
}
 

export function PageEnd({ EndPageData, EndStaticImage, Background }) {
  return (
    <section
      className={cn(
        "relative hidden xl:flex pt-10 md:pt-[60px] 2xl:pt-[100px] overflow-hidden",
        EndPageData?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      {EndPageData && EndPageData?.image ? (
        <Image
          src={getStrapiMedia(EndPageData.image.url)}
          width={EndPageData.image.width}
          height={EndPageData.image.height}
          alt={
            EndPageData.image?.alternativeText
              ? EndPageData.image.alternativeText
              : "Hero-Banner"
          }
          className="absolute left-0 h-[200px] w-[60%]"
        />
      ) : (
        <Image
          src={EndStaticImage}
          alt="bottom-img"
          className="absolute left-0 h-[200px] w-[60%]"
        />
      )}
      <div className="container mx-auto relative h-[200px] flex items-end justify-end">
        <Image src={Tiger} alt="bottom-img" className="absolute right-[20%]" />
        {EndPageData?.page ? (
          <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4 relative z-5">
            Next Page:
            <Link
              className="text-[#F5811E] font-medium flex items-center gap-1"
              href={EndPageData.page.permalink}
            >
              {EndPageData.page.title}
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                  stroke="#F5811E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </p>
        ) : (
          EndPageData?.segment && (
            <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4 relative z-5">
              Next Page:
              <Link
                className="text-[#F5811E] font-medium flex items-center gap-1"
                href={EndPageData.segment.permalink}
              >
                Products - {EndPageData.segment.title}
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                    stroke="#F5811E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </p>
          )
        )}
      </div>
    </section>
  );
}


export function SingleTypeSeo({pageData, page='page'}){
  const domain = process.env.DOMAIN_NAME;
  let schema = {};
  if(page=='page'){
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": pageData.data?.attributes?.title,
      "url": domain+pageData.data?.attributes?.permalink,
      "logo": getStrapiMedia(pageData?.seo_image?.url),
      "description": pageData.seo_description,
    };
  }
  if(page=='website'){
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": pageData.data?.attributes?.title,
      "url": domain,
      "description": pageData.seo_description,
    };
  }
  return(
    <Helmet>
      {pageData.data?.attributes?.title && <title>{pageData.data.attributes.title}</title>}
      {pageData.data?.attributes?.seo_description && <meta name="description" content={pageData.data.attributes.seo_description} />}
      {pageData.data?.attributes?.seo_keywords && <meta name="keywords" content={pageData.data.attributes.seo_keywords} />}
      {page && <meta property="og:type" content={page} />}
      <meta property="og:site_name" content="Birla Tyres" />
      {pageData.data?.attributes?.seo_title && <meta property="og:title" content={pageData.data.attributes.seo_title} />}
      {pageData.data?.attributes?.seo_description && <meta property="og:description" content={pageData.data.attributes.seo_description} />}
      {pageData.data?.attributes.seo_image?.data && 
        <>
          <meta property="og:image" content={getStrapiMedia(pageData.data.attributes.seo_image.data.attributes?.url)} />
          <meta property="og:image:width" content={pageData.data.attributes.seo_image.data.attributes?.width} />
          <meta property="og:image:height" content={pageData.data.attributes.seo_image.data.attributes?.height} />
          <meta property="og:image:type" content={pageData.data.attributes.seo_image.data.attributes?.mime} />
        </>
      }
      {pageData.data?.attributes?.permalink && <meta property="og:url" content={domain+pageData.data.attributes.permalink} />}
      {pageData.data?.attributes?.permalink && <link rel="canonical" href={domain+pageData.data.attributes.permalink} />}
      {pageData.data?.attributes?.seo_title && <meta name="twitter:card" content={pageData.data.attributes.seo_title} />}
      {pageData.data?.attributes?.seo_title && <meta name="twitter:title" content={pageData.data.attributes.seo_title} />}
      {pageData.data?.attributes?.seo_description && <meta name="twitter:description" content={pageData.data.attributes.seo_description} />}
      {pageData.data?.attributes.seo_image?.data && <meta name="twitter:image" content={getStrapiMedia(pageData.data.attributes.seo_image.data.attributes?.url)} />}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
 
export function CollectionTypeSeo({page, pageData}){
  const domain = process.env.DOMAIN_NAME;
  let schema = {};
  if(page=='product'){
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": pageData?.title,
      "image": getStrapiMedia(pageData?.seo_image?.url),
      "description": pageData?.seo_description,
    };
  }
  if(page=='category'){
    schema = {
      "@context": "https://schema.org",
      "@type": "ProductCollection",
      "name": pageData?.title,
      "description": pageData?.seo_description,
      "url": domain+pageData?.permalink,
      "itemListElement": pageData?.products.map((product) => ({
        "@type": "Product",
        "name": product?.title,
        "url": product?.permalink,
        "image": getStrapiMedia(product?.seo_image?.url),
        "description": pageData?.seo_description,
      })),
    };
  }
  if(page=='page'){
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": pageData.title,
      "url": domain+pageData.permalink,
      "logo": getStrapiMedia(pageData?.seo_image?.url),
      "description": pageData.seo_description,
    };
  }
  return(
    <Helmet>
      {pageData?.title && <title>{pageData.title}</title>}
      {pageData?.seo_description && <meta name="description" content={pageData.seo_description} />}
      {pageData?.seo_keywords && <meta name="keywords" content={pageData.seo_keywords} />}
      {page && <meta property="og:type" content={page!='ContactUs'?page:'page'} />}
      <meta property="og:site_name" content="Birla Tyres" />
      {pageData?.seo_title && <meta property="og:title" content={pageData.seo_title} />}
      {pageData?.seo_description && <meta property="og:description" content={pageData.seo_description} />}
      {pageData?.seo_image && 
        <>
          <meta property="og:image" content={getStrapiMedia(pageData.seo_image?.url)} />
          <meta property="og:image:width" content={pageData.seo_image?.width} />
          <meta property="og:image:height" content={pageData.seo_image?.height} />
          <meta property="og:image:type" content={pageData.seo_image?.mime} />
        </>
      }
      {pageData?.permalink && <meta property="og:url" content={domain+pageData.permalink} />}
      {pageData?.permalink && <link rel="canonical" href={domain+pageData.permalink} />}
      {pageData?.seo_title && <meta name="twitter:card" content={pageData.seo_title} />}
      {pageData?.seo_title && <meta name="twitter:title" content={pageData.seo_title} />}
      {pageData?.seo_description && <meta name="twitter:description" content={pageData.seo_description} />}
      {pageData?.seo_image && <meta name="twitter:image" content={getStrapiMedia(pageData.seo_image?.url)} />}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}