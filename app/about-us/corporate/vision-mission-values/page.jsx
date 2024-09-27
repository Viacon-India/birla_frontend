"use client";

import React, { useEffect, useState, useRef } from "react";
import { getStrapiMedia } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Link from "next/link";
import Image from "next/image";
import Hero from "../../../assets/images/vision-hero.jpg";
import NextChapter from "../../../assets/images/vision-next-chapter.png";
import BGTiger from "../../../assets/images/tiger-mask3.png";
import Vision from "../../../assets/images/vision.jpg";
import Triangle1 from "../../../assets/images/triangle1.png";
import AOS from "aos";
import "aos/dist/aos.css";

import icon1 from "../../../assets/images/about-icon1.png";
import icon2 from "../../../assets/images/about-icon2.png";
import icon3 from "../../../assets/images/about-icon3.png";
import icon4 from "../../../assets/images/about-icon4.png";
import icon5 from "../../../assets/images/about-icon5.png";
import icon6 from "../../../assets/images/about-icon6.png";
import icon7 from "../../../assets/images/about-icon7.png";
import icon8 from "../../../assets/images/about-icon8.png";
import img1 from "../../../assets/images/mission-img-1.jpg";
import img2 from "../../../assets/images/mission-img-2.jpg";
import img3 from "../../../assets/images/mission-img-3.jpg";
import img4 from "../../../assets/images/mission-img-4.jpg";
import img5 from "../../../assets/images/mission-img-5.jpg";
import img6 from "../../../assets/images/mission-img-6.jpg";
import img7 from "../../../assets/images/mission-img-7.jpg";
import img8 from "../../../assets/images/mission-img-8.jpg";
import mask1 from "../../../assets/images/iconmask-1.png";
import mask2 from "../../../assets/images/iconmask-2.png";
import mask3 from "../../../assets/images/iconmask-3.png";
import mask4 from "../../../assets/images/iconmask-4.png";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";
import vision1 from "../../../assets/images/vision1.jpg";
import vision2 from "../../../assets/images/vision2.jpg";
import vision3 from "../../../assets/images/vision3.jpg";
import vision4 from "../../../assets/images/vision4.jpg";
import man9 from "../../../assets/images/man9.png";
import man10 from "../../../assets/images/man10.png";
import man11 from "../../../assets/images/man11.png";
import tiger from "../../../assets/images/tiger8.png";
import SectionSelection from "@/app/components/selection/sectionLayout";

export default function Leadership({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/vision-mission-values"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  });


  return (
    <>
      <Navbar />
      <PageBanner Title="Vision, Mission & Values" StaticBanner={Hero} />
      {pageData?.section &&
        pageData.section.length > 0 &&
        pageData.section.map((section) => (
          <SectionSelection key={section.id} section={section} />
        ))}

      <PageEnd EndPageData={pageData?.end} EndStaticImage={NextChapter} />
      <Footer />
    </>
  );
}
