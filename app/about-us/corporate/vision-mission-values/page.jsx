"use client";

import React, { useEffect, useState, useRef } from "react";
import { getStrapiMedia } from "@/lib/utils";
import { Autoplay, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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

import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

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
      <section className="relative mt-8 md:mt-12 2xl:mt-[60px]">
        <div className="container mx-auto">
          <div className="overflow-hidden">
            <span className="section-heading">Vision</span>
            <div className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10">
              <h3
                className="section-title"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Our Vision
              </h3>
            </div>
            <div className="relative rounded-[12px] overflow-hidden">
              <figure className="relative w-full h-[350px] md:h-[450px] 2xl:h-[600px] rounded-[12px] group">
                <Image src={Vision} className="w-full h-full" alt="img" />
                <span className="vision-overlay">
                  Empowering journeys with innovative & customer-friendly
                  solutions for a greener world
                </span>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container mx-auto">
          <div className="mt-8 md:mt-12 2xl:mt-[60px] flex flex-col gap-10 relative">
            <div className="flex flex-col gap-3">
              <span className="section-heading">Mission</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">Our Mission</h3>
              </div>
            </div>
            <div className="mission-card-sec">
              <div className="sticky-container md:top-[120px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img5}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg1"></h2>
                    <p className="text-[16px] md:text-[24px] text-[#3D434C] pt-3">
                      Lead the tyre industry with innovative solutions,
                      exceptional quality and commitment to safety
                    </p>
                  </div>
                </div>
              </div>
              <div className="sticky-container top-[140px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img6}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg2"></h2>
                    <p className="text-[16px] md:text-[24px] text-[#3D434C] pt-3">
                      Remain customer centric to continue being the preferred
                      choice of tyre for customers worldwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="sticky-container top-[160px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img7}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg3"></h2>
                    <p className="text-[16px] md:text-[24px] text-[#3D434C] pt-3">
                      Create an environment where talented individuals are drawn
                      to join, grow, and contribute to form a strong & happy
                      team
                    </p>
                  </div>
                </div>
              </div>
              <div className="sticky-container top-[180px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img8}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg4 text-center"></h2>
                    <p className="text-[16px] md:text-[24px] text-[#3D434C] pt-3">
                      Build a sustainable and responsible business to advance
                      the environmental, social and economic well being of
                      society
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-12 2xl:mt-[60px] flex flex-col gap-10 relative">
            <div className="flex flex-col gap-3">
              <span className="section-heading">values</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">Our Values</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-10 relative">
              <figure className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-full p-7 z-10">
                <Image
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  src={tiger}
                  alt="img"
                />
                <span className="text-primary font-bold text-[22px] md:text-[36px] 2xl:text-[48px] uppercase absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  CARE
                </span>
              </figure>
              <div className="relative overflow-hidden rounded-[12px] group">
                <figure
                  className="w-full h-full"
                  data-aos="fade-down-right"
                  data-aos-duration="1000"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={vision1}
                    alt="img"
                  />
                  <div className="value-overlay bg-secondary opacity-75">
                    <h3 className="first-letter:text-secondary">
                      Commitment to Excellence
                    </h3>
                    <p>
                      We will relentlessly explore the limits of what’s
                      achievable, pursue excellence across all dimensions, and
                      champion continuous improvement for superior outcomes
                    </p>
                  </div>
                </figure>
              </div>
              <div className="relative overflow-hidden rounded-[12px] group">
                <figure
                  className="w-full h-full"
                  data-aos="fade-down-left"
                  data-aos-duration="1000"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={vision2}
                    alt="img"
                  />
                  <div className="value-overlay bg-primary opacity-75">
                    <h3 className="first-letter:text-primary">Agility</h3>
                    <p>
                      We will demonstrate Agile behavior in all actions and
                      innovate continuously to respond to evolving customer
                      needs
                    </p>
                  </div>
                </figure>
              </div>
              <div className="relative overflow-hidden rounded-[12px] group">
                <figure
                  className="w-full h-full"
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={vision3}
                    alt="img"
                  />
                  <div className="value-overlay bg-primary opacity-75">
                    <h3 className="first-letter:text-primary">Reliability</h3>
                    <p>
                      We will consistently deliver on our promises to customers
                      and stakeholders and exceed their expectations –
                      reliability is embedded in our DNA
                    </p>
                  </div>
                </figure>
              </div>
              <div className="relative overflow-hidden rounded-[12px] group">
                <figure
                  className="w-full h-full"
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={vision4}
                    alt="img"
                  />
                  <div className="value-overlay bg-secondary opacity-75">
                    <h3 className="first-letter:text-secondary">Empathy</h3>
                    <p>
                      We will foster a culture of empathy, where understanding
                      and compassion drive our interactions, ensuring every
                      individual feels heard & valued
                    </p>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={NextChapter} />
      <Footer />
    </>
  );
}
