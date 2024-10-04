"use client";

import React, { useState, useEffect } from "react";
import { getStrapiMedia } from "@/lib/utils";
import SectionSelection from "@/app/components/selection/sectionLayout";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import { PageBanner } from "@/app/components/pageCommon/pageCommon";
import { PageEnd } from "@/app/components/pageCommon/pageCommon";
import Banner from "@/app/assets/images/who1.jpg";
import who10 from "@/app/assets/images/who10.jpg";


export default function WhoWeAre({ params }) {
  const slugs = params.slug;
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(getStrapiMedia("/api/pages/who-we-are"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);


  return (
    <>
      <Navbar />
      <PageBanner
        Title={pageData?.title}
        Banner={pageData?.hero}
        StaticBanner={Banner}
      />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        <SectionSelection key={section.id} section={section} />
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={who10} />
      <Footer />
    </>
  );
}
