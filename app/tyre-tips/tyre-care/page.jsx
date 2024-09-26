"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import SectionSelection from "@/app/components/section/section";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import Banner from "@/app/assets/images/tyre-care1.jpg";
import man3 from "@/app/assets/images/man3.jpg";
import { PageBanner } from "@/app/components/pageCommon/pageCommon";
import { PageEnd } from "@/app/components/pageCommon/pageCommon";
import LastBg from "../../assets/images/guide7.png";

export default function Manufacturing({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(getStrapiMedia("/api/pages/tyre-care"))
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
      {pageData?.section &&
        pageData.section.length > 0 &&
        pageData.section.map((section) => (
          <SectionSelection key={section.id} section={section} />
        ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={LastBg} />
      <Footer />
    </>
  );
}
