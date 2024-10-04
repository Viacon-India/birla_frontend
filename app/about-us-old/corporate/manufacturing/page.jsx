"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import "swiper/css/navigation";
import SectionSelection from "../../../components/selection/sectionLayout";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Banner from "../../../assets/images/man1.jpg";
import man3 from "../../../assets/images/man3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function Manufacturing({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/manufacturing"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="Manufacturing" StaticBanner={Banner} />
      {pageData?.section &&
        pageData.section.length > 0 &&
        pageData.section.map((section) => (
          <SectionSelection key={section.id} section={section} />
        ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={man3} />
      <Footer />
    </>
  );
}
