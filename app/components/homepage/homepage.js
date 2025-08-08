import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";

import { SingleTypeSeo, Popup } from "@/app/components/pageCommon/pageCommon";

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

export default function Homepage() {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(getStrapiMedia("/api/home"))
      .then((res) => res.json())
      .then((page) => {
        setPageData(page);
      });
  }, []);
  return (
    <>
      <SingleTypeSeo pageData={pageData} page="website" />
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
