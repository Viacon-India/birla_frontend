"use client";

import React, { useEffect, useState } from "react";
import SectionSelection from "@/app/components/selection/sectionLayout";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import { PageBanner } from "@/app/components/pageCommon/pageCommon";
import { PageEnd } from "@/app/components/pageCommon/pageCommon";
import res4 from "@/app/assets/images/res4.jpg";

export default function Research({ params }) {
  const slugs = params.slug;
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(getStrapiMedia("/api/pages/research-and-development"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title={pageData?.title} Banner={pageData?.hero} StaticBanner={"/assets/videos/research.mp4"} extension=".mp4" />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        <SectionSelection key={section.id} section={section} />
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={res4} />
      <Footer />
    </>
  );
}
