"use client";

import React, { useEffect, useState } from "react";
import GradualSpacing from "@/components/GradualSpacing";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/images/sus1.jpg";
import LastBg from "../assets/images/sus10.png";
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
import sus2 from "../assets/images/sus2.jpg";
import susIcon1 from "../assets/images/sus-icon1.png";
import susIcon2 from "../assets/images/sus-icon2.png";
import susIcon3 from "../assets/images/sus-icon3.png";
import susIcon4 from "../assets/images/sus-icon4.png";
import Triangle1 from "../assets/images/triangle1.png";

export default function Sustainability() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Navbar />
      <section className="top-banner-sec">
        <div className="relative">
          <Float />
          <div className="relative">
            <div className="w-full h-[40vh] md:h-[80vh] flex items-end">
              <div class="container mx-auto flex flex-col justify-between h-full pt-5 pb-[60px]">
                <div class="flex flex-col gap-5 relative z-10">
                  <Link href="" className="primary-btn-1">
                    Find a Tyre
                  </Link>
                  <Link href="dealer-locator" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="relative z-10">
                  <GradualSpacing
                    className="top-banner-sec-heading"
                    text="Sustainability"
                    paddingLeft="pl-5"
                    paddingRight="pr-5"
                  />
                </div>
              </div>
            </div>
            <Image
              src={Banner}
              alt="Hero-Banner"
              className="absolute top-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="w-full md:w-1/2">
              <span
                className="section-heading"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                our green initiative
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                  Sub-headline for sustainability goes here
                </h3>
              </div>
            </div>
            <div className="w-full md:w-[45%] box-content-sec">
              <p data-aos="fade-left" data-aos-duration="500">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <p data-aos="fade-left" data-aos-duration="1000">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <p data-aos="fade-left" data-aos-duration="1500">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
            </div>
          </div>
          <div className="parallax-main">
            <div id="parallax" className="parallax-item">
              <div className="parallax-card" data-aos="fade-up" data-aos-duration="500">
                <Image src={susIcon1} alt="icon" />
                <h3>Planet</h3>
              </div>
              <div className="parallax-card" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                <Image src={susIcon2} alt="icon" />
                <h3>People</h3>
              </div>
              <div className="parallax-card" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
                <Image src={susIcon3} alt="icon" />
                <h3>Communities</h3>
              </div>
              <div className="parallax-card" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="900">
                <Image src={susIcon4} alt="icon" />
                <h3>Governance</h3>
              </div>
            </div>
          </div>
          <div className="sustainability-card-sec">
            <span
              className="section-heading"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              key objectives
            </span>
            <div
              className="section-title-wrapper"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="section-title">
                Headline for sustainability principles
              </h3>
            </div>
            <p className="text-[20px] font-medium text-[#000000] mt-6">
              As an organization, we are fully aligned with the universal
              principles of United Nations Global Compact (UNGC) and the United
              Nations Sustainable Development Goals (UNSDGs) to build a
              sustainable future for all stakeholders and future generations to
              come.
            </p>
            <div className="grid grid-cols-5 gap-4 mt-6">
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life2}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">No Poverty</span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life3}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">Zero Hunger</span>
              </figure>
              <figure
                className="sustainability-figure col-span-2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life4}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Good Health & Well-being
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life5}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Quality Education
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life6}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">Gender Equality</span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life7}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Clean Water & Sanitation
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life8}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Affordable Clean Energy
                </span>
              </figure>
              <figure
                className="sustainability-figure col-span-2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life2}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Decent Work & Economic Growth
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life2}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Reduced Inequalities
                </span>
              </figure>
              <figure
                className="sustainability-figure col-span-2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life3}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Industry, Innovation, Infrastructure
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life4}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Sustainable Communities
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life5}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">Climate Action</span>
              </figure>
              <figure
                className="sustainability-figure col-span-2"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life6}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Responsible Consumption & Production
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life7}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">Life On Water</span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life8}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">Life On Land</span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life2}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Peace, Justice, Institutions
                </span>
              </figure>
            </div>
          </div>
          <div className="pillar-sec">
            <div className="container mx-auto">
              <div className="section-layer !pb-[100px]">
                <figure
                  className="w-full md:w-[45%] h-[480px] relative glare"
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <Image
                    className="absolute -z-1 w-full h-full"
                    src={Triangle1}
                    alt="triangle"
                  />
                  <Image
                    className="translate-x-8 translate-y-8 w-[90%] h-[90%] rounded-[12px]"
                    src={sus2}
                    alt="img"
                  />
                </figure>
                <div className="box-content-sec relative md:w-[55%] flex flex-col">
                  <span
                    className="section-heading"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    KEy pillers
                  </span>
                  <div
                    className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <h3 className="section-title">
                      KEY PILLARS OF OUR SUSTAINABILITY JOURNEY
                    </h3>
                  </div>
                  <div
                    className="pillar-list-sec"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <div className="pillar-box">
                      <div className="pillar-list">
                        <h3>Key pillar-1</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur amet
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <div className="pillar-box">
                      <div className="pillar-list">
                        <h3>Key pillar-2</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur amet
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <div className="pillar-box">
                      <div className="pillar-list">
                        <h3>Key pillar-3</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur amet
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                    <div className="pillar-box">
                      <div className="pillar-list">
                        <h3>Key pillar-4</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur amet
                          adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEnd
        Title="ESG"
        TitleLink="/users/product"
        EndImageSrc={LastBg}
        // Background={true}
        // EndImageW="840"
        // EndImageH="200"
        EndImageAlt="bottom-img"
      />
      <Footer />
    </>
  );
}
