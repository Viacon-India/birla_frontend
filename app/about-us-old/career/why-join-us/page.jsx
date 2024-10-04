"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import SectionSelection from "@/app/components/selection/sectionLayout";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Banner from "../../../assets/images/join1.jpg";
import Link from "next/link";
import Image from "next/image";
import join2 from "../../../assets/images/join2.png";
import join3 from "../../../assets/images/join3.jpg";
import join4 from "../../../assets/images/join4.jpg";
import join5 from "../../../assets/images/join5.jpg";
import join6 from "../../../assets/images/join6.jpg";
import join7 from "../../../assets/images/join7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function JoinUs({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/why-join-us"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="why join us" StaticBanner={Banner} />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        <SectionSelection key={section.id} section={section} />
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={join5} />
      <Footer />
    </>
  );
}
