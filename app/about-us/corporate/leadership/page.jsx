"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Link from "next/link";
import Image from "next/image";
import NextChapter from "../../../assets/images/next-chapter.png";
import Director1 from "../../../assets/images/director-1.jpg";
import Director2 from "../../../assets/images/director-2.jpg";
import Director3 from "../../../assets/images/director-3.jpg";
import BGTiger2 from "../../../assets/images/tiger-mask2.png";
import Hero from "../../../assets/images/leadership-hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Triangle1 from "../../../assets/images/triangle1.png";
import Triangle2 from "../../../assets/images/triangle2.png";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";
import coma1 from "../../../assets/images/coma1.png";
import coma2 from "../../../assets/images/coma2.png";
import SectionSelection from "@/app/components/selection/sectionLayout";

export default function Leadership({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/leadership"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="Leadership" StaticBanner={Hero} />
      {pageData?.section &&
        pageData.section.length > 0 &&
        pageData.section.map((section) => (
          <SectionSelection key={section.id} section={section} />
        ))}
      <PageEnd
        EndPageData={pageData?.end}
        EndStaticImage={NextChapter}
        Background={true}
      />
      <Footer />
    </>
  );
}
