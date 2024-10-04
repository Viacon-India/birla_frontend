"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { PageBanner } from "../../components/pageCommon/pageCommon";
import Image from "next/image";
import Banner from "../../assets/images/esg-banner.jpg";
import Man1 from "../../assets/images/esg-man1.jpg";
import Man2 from "../../assets/images/esg-man2.jpg";
import Man3 from "../../assets/images/esg-man3.jpg";
import Man4 from "../../assets/images/esg-man4.jpg";
import Man5 from "../../assets/images/esg-man5.jpg";
import Man6 from "../../assets/images/esg-man6.jpg";
import Man7 from "../../assets/images/esg-man7.jpg";
import Man8 from "../../assets/images/esg-man8.jpg";
import esg1 from "../../assets/images/esg1.png";
import esg2 from "../../assets/images/esg2.png";
import esg3 from "../../assets/images/esg3.png";
import esg4 from "../../assets/images/esg4.png";
import LastBg from "../../assets/images/esg-next.png";
import { PageEnd } from "../../components/pageCommon/pageCommon";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionSelection from "@/app/components/selection/sectionLayout";

export default function Esg({params}) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  console.log(pageData);

  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/esg"))
    .then((res) => res.json())
    .then((pages) => {
      setPageData(pages);
    });
  }, []);


  return (
    <>
      <Navbar />
      <PageBanner Title="ESG" StaticBanner={Banner} />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        <SectionSelection key={section.id} section={section} />
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={LastBg} />
      <Footer />
    </>
  );
}



