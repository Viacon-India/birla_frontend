"use client";

import React, { useEffect, useState } from "react";
import SectionSelection from "@/app/components/section/section";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import { PageBanner } from "@/app/components/pageCommon/pageCommon";
import { PageEnd } from "@/app/components/pageCommon/pageCommon";
import life9 from "@/app/assets/images/life9.png";

export default function LifeAtBirla({params}) {
  const slugs = params.slug;
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(getStrapiMedia("/api/pages/life-at-birla-tyres"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title={pageData?.title} Banner={pageData?.hero} />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        <SectionSelection key={section.id} section={section} />
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={life9} Background={true}/>
      <Footer />
    </>
  );
}
