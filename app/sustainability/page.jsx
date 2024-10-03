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
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto">
          <div className="parallax-main-wrapper">
            <h2 className="text-secondary text-[20px] md:text-[28px] 2xl:text-[32px] leading-[1.2] font-bold mb-6 md:mb-8 2xl:mb-10">
              Our commitment to sustainability binds us together and serves as a
              constant driving force to achieve excellence for our stakeholders
              and the planet as a whole.
            </h2>
            <div className="parallax-main">
              <div id="parallax" className="parallax-item">
                <div
                  className="parallax-card"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <Image src={susIcon1} alt="icon" />
                  <h3>Planet</h3>
                </div>
                <div
                  className="parallax-card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="300"
                >
                  <Image src={susIcon2} alt="icon" />
                  <h3>People</h3>
                </div>
                <div
                  className="parallax-card"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="600"
                >
                  <Image src={susIcon3} alt="icon" />
                  <h3>Communities</h3>
                </div>
                <div
                  className="parallax-card"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="900"
                >
                  <Image src={susIcon4} alt="icon" />
                  <h3>Governance</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto">
          <div className="pillar-sec">
            <div className="flex items-start flex-col md:flex-row gap-4 md:gap-8 2xl:gap-[60px] !pb-[100px]">
              <figure
                className="w-full md:w-[45%] h-[480px] relative glare"
                data-aos="flip-right"
                data-aos-duration="1500"
              >
                <Image
                  className="absolute -z-1 w-[90%] h-[90%]"
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
                  KEy pillars
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
                      <p>Promoting sustainable practices for the Planet</p>
                    </div>
                  </div>
                  <div className="pillar-box">
                    <div className="pillar-list">
                      <p>Nurturing our People & Communities</p>
                    </div>
                  </div>
                  <div className="pillar-box">
                    <div className="pillar-list">
                      <p>Engaging with Key Stakeholders</p>
                    </div>
                  </div>
                  <div className="pillar-box">
                    <div className="pillar-list">
                      <p>
                        Ensuring Health, Safety, and Environmental
                        Responsibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={LastBg} />
      <Footer />
    </>
  );
}
