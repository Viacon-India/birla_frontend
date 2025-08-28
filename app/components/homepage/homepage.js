import React from "react";
import { getStrapiMedia } from "@/lib/utils";

import { Popup } from "@/app/components/pageCommon/pageCommon";

import Hero from "./Hero";
import Innovation from "./innovation";
import Product from "./product";
import Dealer from "./dealer";
import Sustainability from "./sustainability";
import AboutUs from "./about";
import Media from "./media";
// import dynamic from "next/dynamic";
import Faq from "./faq";
// const Faq = dynamic(() => import("./faq"), { ssr: false });
// import SingleTypeSeo from "@/app/components/pageCommon/singleTypeComponent";
import SchemaOrg from "@/app/components/pageCommon/SchemaOrg";

export default function Homepage({ pageData }) {
  // const [pageData, setPageData] = useState([]);

  // useEffect(() => {
  //   fetch(getStrapiMedia("/api/home"))
  //     .then((res) => res.json())
  //     .then((page) => {
  //       setPageData(page);
  //     });
  // }, []);
  const domain = process.env.DOMAIN_NAME;
  let schema = {}

  if (!pageData || !pageData.data) {
    return <div>Loading...</div>;
  }
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: pageData.data?.attributes?.title,
      url: domain + pageData.data?.attributes?.permalink,
      logo: getStrapiMedia(pageData?.seo_image?.url),
      description: pageData.seo_description,
    };
  return (
    <>
      {/* <SingleTypeSeo pageData={pageData} page="website" /> */}
      <SchemaOrg schema={schema} />
      <Hero Data={pageData.data?.attributes?.categories}/>
      <Popup />
      <Innovation
        Heading={pageData.data?.attributes?.section1_heading}
        Title={pageData.data?.attributes?.section1_title}
        Data={pageData.data?.attributes?.categories}
      />
      <Product
        Heading={pageData.data?.attributes?.section2_heading}
        Title={pageData.data?.attributes?.section2_title}
        Data={pageData.data?.attributes?.categories}
      />
      {/* <Dealer Heading={pageData.data?.attributes?.section3_heading} Title={pageData.data?.attributes?.section3_title}/> */}
      <Sustainability
        Heading={pageData.data?.attributes?.section4_heading}
        Title={pageData.data?.attributes?.section4_title}
        Description={pageData.data?.attributes?.section4_description}
        Video={pageData.data?.attributes?.section4_video}
      />
      <AboutUs Data={pageData.data?.attributes?.section5} />
      <Media
        Heading={pageData.data?.attributes?.media_heading}
        Title={pageData.data?.attributes?.media_title}
      />
      <Faq
        Heading={pageData.data?.attributes?.blog_heading}
        Title={pageData.data?.attributes?.blog_title}
        Data={pageData.data?.attributes?.faq}
      />
    </>
  );
}
