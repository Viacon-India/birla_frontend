"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
import Banner from "../assets/images/sus1.jpg";
import LastBg from "../assets/images/sus10.png";
import { PageBanner } from "../components/pageCommon/pageCommon";
import { PageEnd } from "../components/pageCommon/pageCommon";
import AOS from "aos";
import "aos/dist/aos.css";
import life2 from "../assets/images/life2.jpg";
import life3 from "../assets/images/life3.jpg";
import life4 from "../assets/images/life4.jpg";
import life5 from "../assets/images/life5.jpg";
import life6 from "../assets/images/life6.jpg";
import life7 from "../assets/images/life7.jpg";
import life8 from "../assets/images/life8.jpg";
import life10 from "../assets/images/life10.jpg";
import life11 from "../assets/images/life11.jpg";
import life12 from "../assets/images/life12.jpg";
import life13 from "../assets/images/life13.jpg";
import life14 from "../assets/images/life14.jpg";
import life15 from "../assets/images/life15.jpg";
import life16 from "../assets/images/life16.jpg";
import life17 from "../assets/images/life17.jpg";
import life18 from "../assets/images/life18.jpg";
import life19 from "../assets/images/life19.jpg";

import sus2 from "../assets/images/sus2.jpg";
import susIcon1 from "../assets/images/sus-icon1.png";
import susIcon2 from "../assets/images/sus-icon2.png";
import susIcon3 from "../assets/images/sus-icon3.png";
import susIcon4 from "../assets/images/sus-icon4.png";
import Triangle1 from "../assets/images/triangle1.png";
import tigerMask from "../assets/images/tiger-mask2.png";
import SectionSelection from "@/app/components/selection/sectionLayout";

export default function Sustainability({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    AOS.init();

    fetch(getStrapiMedia("/api/pages/sustainability"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);


  return (
    <>
      <Navbar />
      <PageBanner Title="Sustainability" StaticBanner={Banner} />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        <SectionSelection key={section.id} section={section} />
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={LastBg} />
      <Footer />
    </>
  );
}
