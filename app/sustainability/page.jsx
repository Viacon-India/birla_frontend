"use client";

import React, { useEffect, useState } from "react";
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

export default function Sustainability() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Navbar />
      <PageBanner Title="Sustainability Overview" StaticBanner={Banner} />
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="w-full md:w-[40%] relative">
              <Image
                alt="mask"
                src={tigerMask}
                className="absolute left-10 top-[120px]"
              />
              <span
                className="section-heading"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Driving Change
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                  Committing to Sustainable Innovation in Every Mile
                </h3>
              </div>
            </div>
            <div className="w-full md:w-[60%] box-content-sec">
              <p data-aos="fade-left" data-aos-duration="500">
                Welcome to Birla Tyres, where sustainability guides us towards
                responsible growth and positive impact. From production to
                distribution, sustainability is embedded in every facet of our
                operations, reflecting our commitment to environmental
                stewardship and social progress. Enhancing operational
                efficiency and reducing resource consumption are crucial for
                minimizing our environmental footprint while maintaining our
                competitive edge.
              </p>
              <p data-aos="fade-left" data-aos-duration="1000">
                Innovation drives our sustainability strategy. Through
                continuous research and development, we create cutting-edge
                technologies and products that meet evolving environmental
                standards and exceed client expectations, positioning us as
                industry leaders in sustainable performance.
              </p>
              <p data-aos="fade-left" data-aos-duration="1500">
                We conserve natural resources by minimizing waste, optimizing
                water and energy use, and promoting recycling across our supply
                chain. Our commitment to the United Nations Sustainable
                Development Goals inspires our efforts to foster economic
                growth, social inclusivity, and environmental protection
                globally.
              </p>
              <p data-aos="fade-left" data-aos-duration="2000">
                At Birla Tyres, sustainability is key to long-term value
                creation. By integrating sustainability into our core values and
                promoting a culture of innovation and responsibility, we will
                create “Eco-tyres for a Cleaner Ride.”
              </p>
            </div>
          </div>
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
          <div className="sustainability-card-sec">
            <span
              className="section-heading"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Universal Principles
            </span>
            <div
              className="section-title-wrapper"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="section-title">Alignment to UNGC and UNSDGs</h3>
            </div>
            <p className="text-[20px] font-medium text-[#000000] mt-6">
              &quot;We tirelessly innovate, while ensuring every step reflects
              sustainability & resilience, and create a manufacturing process
              that harmonizes with nature. Aligned with the United Nations
              Global Compact (UNGC) and Sustainable Development Goals (UNSDGs),
              we are revving up towards a sustainable future for all
              stakeholders and future generations.&quot;
            </p>
            <div className="box-content-sec mt-6 md:mt-8 2xl:mt-10">
              <p>
                At Birla Tyres, sustainability is not just a goal but a guiding
                principle that shapes our journey towards a better future. We
                innovate tirelessly, integrating sustainability into every
                aspect of our operations and ensuring that each step we take
                embodies resilience & environmental responsibility. Our
                manufacturing processes are designed to harmonize with nature,
                thus minimizing our ecological footprint and maximizing
                efficiency.
              </p>
              <p>
                Aligned with the United Nations Global Compact (UNGC) and the
                Sustainable Development Goals (SDGs), we are committed to create
                a sustainable future for all stakeholders and future
                generations. These global frameworks inspire and drive our
                efforts to innovate sustainably, aiming to exceed environmental
                standards and societal expectations.
              </p>
              <p>
                Join us at Birla Tyres as we navigate towards a sustainable
                future. Together, we are shaping a world where responsible
                business practices and environmental stewardship go hand in
                hand, ensuring lasting prosperity and well-being for communities
                and the planet alike.
              </p>
            </div>
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
                  Good Health & Well-being
                </span>
              </figure>
              <figure
                className="sustainability-figure"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <Image
                  src={life19}
                  alt="bottom-img"
                  className="sustainability-image"
                />
                <span className="sustainability-overlay">
                  Partners For The Goal
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
                  src={life10}
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
                  src={life11}
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
                  src={life12}
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
                  src={life13}
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
                  src={life14}
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
                  src={life15}
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
                  src={life16}
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
                  src={life17}
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
                  src={life18}
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
        </div>
      </section>
      <PageEnd
        Title="ESG"
        TitleLink="/sustainability/esg"
        EndStaticImage={LastBg}
      />
      <Footer />
    </>
  );
}
