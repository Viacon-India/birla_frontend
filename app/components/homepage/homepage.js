import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";

import Link from "next/link";

import Hero from "./Hero"
import Innovation from "./innovation";
import Product from "./product";
import Dealer from "./dealer";
import Sustainability from "./sustainability";
import AboutUs from "./about"
import Media from "./media";
import Faq from "./faq"

export default function Homepage() {
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    fetch(getStrapiMedia("/api/home")).then((res) => res.json()).then((page) => {
      setPageData(page.data?.attributes);
    });
  }, []);
  return (
    <>
      <Hero Data={pageData?.categories}/>
      <Innovation Heading={pageData?.section1_heading} Title={pageData?.section1_title} Data={pageData?.categories}/>
      <Product Heading={pageData?.section2_heading} Title={pageData?.section2_title} Data={pageData?.categories}/>
      <Dealer Heading={pageData?.section3_heading} Title={pageData?.section3_title}/>
      <Sustainability Heading={pageData?.section4_heading} Title={pageData?.section4_title} Description={pageData?.section4_description} Video={pageData?.section4_video}/>
      <AboutUs Data={pageData?.section5}/>
      <Media Heading={pageData?.media_heading} Title={pageData?.media_title}/>
      <Faq Heading={pageData?.blog_heading} Title={pageData?.blog_title} Data={pageData?.faq}/>
 
    </>
  );
}
