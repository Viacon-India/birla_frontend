"use client";

import React, { useEffect } from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Banner from "../../../assets/images/who1.jpg";
import Link from "next/link";
import Image from "next/image";
import tigerMask from "../../../assets/images/tiger-mask2.png";
import who2 from "../../../assets/images/who2.jpg";
import who3 from "../../../assets/images/who3.jpg";
import who4 from "../../../assets/images/who4.jpg";
import who5 from "../../../assets/images/who5.jpg";
import who6 from "../../../assets/images/who6.jpg";
import who7 from "../../../assets/images/who7.jpg";
import who8 from "../../../assets/images/who8.jpg";
import who9 from "../../../assets/images/who9.jpg";
import who10 from "../../../assets/images/who10.jpg";
import Triangle1 from "../../../assets/images/triangle1.png";
import Triangle2 from "../../../assets/images/triangle2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="WHO WE ARE" StaticBanner={Banner} />
      <section className="page-content-sec mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden">
        <div className="container mx-auto">
          <div className="sub-section-wrapper">
            <div className="section-layer">
              <div
                className="box-title-sec w-full md:w-[45%] relative"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Image
                  alt="mask"
                  src={tigerMask}
                  className="absolute left-0 top-0"
                />
                <span className="section-heading">About Us</span>
                <div className="section-title-wrapper">
                  <h3 className="section-title">Our Journey</h3>
                </div>
              </div>
              <div className="box-content-sec w-full md:w-[60%] relative">
                <p data-aos="fade-left" data-aos-duration="1000">
                  Birla Tyres was established in 1991 and has a rich heritage of
                  excellence. Over the past 3 decades, Birla Tyres had built a
                  reputation for quality and was recognized as one of the best
                  tyre manufacturers in India. The registered office of Birla
                  Tyres is located in Kolkata while the state-of-the-art
                  manufacturing plant is located at Balasore, Odisha. The plant
                  spans over an area of 195 acres and produces high-quality
                  tyres catering to a wide variety of applications (commercial,
                  agricultural, off-the-road, etc.)
                </p>
                <p data-aos="fade-left" data-aos-duration="1000">
                  Dalmia Bharat Refractories Limited (DBRL) along with their
                  strategic partner, Himadri Speciality Chemical Limited (HSCL)
                  have acquired Birla Tyres Limited&apos;s tyre business through a
                  resolution plan approved by the National Company Law Tribunal
                  in October 2023.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-8 xl:gap-[60px] w-full">
              <figure className="w-1/2">
                <Image
                  className="w-full rounded-[12px]"
                  src={who2}
                  alt=""
                  data-aos="flip-up"
                  data-aos-duration="1500"
                />
              </figure>
              <figure className="w-1/2">
                <Image
                  className="w-full rounded-[12px]"
                  src={who3}
                  alt=""
                  data-aos="flip-up"
                  data-aos-duration="1500"
                />
              </figure>
            </div>
            <div className="section-layer md:mt-[60px]">
              <figure
                className="w-full md:w-[40%] h-[350px] md:h-[480px] relative glare"
                data-aos="flip-right"
                data-aos-duration="1500"
              >
                <Image
                  className="absolute -z-1 w-[90%] h-[90%]"
                  src={Triangle1}
                  alt="triangle"
                />
                <Image
                  className="absolute left-4 md:left-8 top-4 md:top-8 w-[90%] h-[90%] rounded-[12px]"
                  src={who4}
                  alt="img"
                />
              </figure>
              <div className="box-content-sec relative md:w-[60%]">
                <span className="section-heading">joint ownership</span>
                <div className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10">
                  <h3
                    className="section-title"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Himadri Speciality Chemical Limited (HSCL)
                  </h3>
                </div>
                <p data-aos="fade-left" data-aos-duration="200">
                  Himadri Speciality Chemical Ltd is a global speciality
                  chemical conglomerate with a strong focus on research and
                  development (R&D), innovation and sustainability.
                </p>
                <p data-aos="fade-left" data-aos-duration="500">
                  As pioneer in the production of lithium-ion battery materials
                  in India, it continuously develops and innovates raw materials
                  of lithium-ion battery value chain. It’s diverse product
                  portfolio includes speciality carbon black, coal tar pitch,
                  refined naphthalene, advance materials, SNF, speciality oils,
                  power, etc. catering to various industries such as lithium-ion
                  batteries, paints, plastics, tyres, aluminium, graphite
                  electrodes, agrochemicals, defence and construction chemicals.
                  Himadri operates in both domestic and international markets,
                  exporting to 54 countries across the globe.
                </p>
                <p data-aos="fade-left" data-aos-duration="1000">
                  With a strong commitment to safety and sustainability, it has
                  8 zero-liquid discharge manufacturing facilities and utilize
                  in-house clean and green power for more than 90% of its energy
                  needs. Through its dedication to R&D, new business
                  opportunities and sustainability, Himadri is making a positive
                  impact on the industry, both in India and globally.
                </p>
                <p data-aos="fade-left" data-aos-duration="1500">
                  Himadri, as a manufacturer of carbon black, has a deep
                  understanding of the tyre industry. Having successfully
                  forward integrated from Oil to Carbon Black, then to
                  Speciality Carbon Black, Himadri thus stands at the threshold
                  of an exciting transformation moving forward towards end
                  customer, venturing into the world of Tyres. Birla Tyres has
                  strong synergies with Himadri operations and aligns
                  strategically with the company&apos;s overall objective of
                  being a lead player in EV space.
                </p>

                <Link
                  href="https://www.himadri.com/"
                  target="_blank"
                  className="more-btn"
                >
                  Know More
                </Link>
                <div class="line-loader absolute right-0 bottom-0">
                  <div class="bar bar1"></div>
                  <div class="bar bar2"></div>
                  <div class="bar bar3"></div>
                </div>
              </div>
            </div>
            <div className="section-layer">
              <div className="box-content-sec relative md:w-[60%]">
                <span className="section-heading">joint ownership</span>
                <div className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10">
                  <h3
                    className="section-title"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    Dalmia Bharat Refractories Limited (DBRL)
                  </h3>
                </div>
                <p data-aos="fade-left" data-aos-duration="500">
                  Dalmia Bharat Refractories Limited (DBRL) is a prominent
                  Indian company with a rich legacy dating back to 1939. In a
                  strategic move to streamline operations and explore new
                  avenues of growth, DBRL has divested its entire refractory
                  business, except for the magnesia carbon business and its
                  manufacturing located in China. DBRL&apos;s unwavering commitment
                  to growth and innovation is exemplified by its recent
                  acquisition of Birla Tyres Limited&apos;s tyre business - this bold
                  venture into a domain entirely new to DBRL&apos;s established
                  expertise signifies the company&apos;s unwavering spirit of
                  exploration and adaptability.
                </p>
                <p data-aos="fade-left" data-aos-duration="1000">
                  This strategic partnership marks the beginning of an exciting
                  new chapter, where our combined expertise, resources, and
                  innovative spirit will drive us to achieve greater heights.
                  Together, we are poised to revolutionize the tyre industry,
                  delivering unparalleled value to our customers and
                  stakeholders. With a shared vision and commitment to
                  excellence, we look forward to a future filled with remarkable
                  achievements and ground-breaking advancements.
                </p>

                <Link
                  href="https://dalmiaocl.com/"
                  target="_blank"
                  className="more-btn"
                >
                  Know More
                </Link>
                <div class="line-loader absolute right-0 bottom-0">
                  <div class="bar bar1"></div>
                  <div class="bar bar2"></div>
                  <div class="bar bar3"></div>
                </div>
              </div>
              <figure
                className="w-full md:w-[40%] h-[350px] md:h-[480px] relative glare"
                data-aos="flip-left"
                data-aos-duration="1500"
              >
                <Image
                  className="absolute -z-1 w-[90%] h-[90%] right-0"
                  src={Triangle2}
                  alt="triangle"
                />
                <Image
                  className="w-[90%] h-[90%] absolute right-4 md:right-8 top-4 md:top-8 rounded-[12px]"
                  src={who5}
                  alt="img"
                />
              </figure>
            </div>
            <p
              className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6] mb-3 md:mb-10 2xl:mb-[60px]"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
              vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
              laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
              maximus mollis diam, vel varius sapien suscipit eget. Cras
              sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Donec vitae mi
              vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet
              pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus
              mollis diam.
            </p>
          </div>
        </div>
      </section>
      <section className="vast-product-sec bg-[#F4F5F6] py-6 md:py-10 2xl:py-[60px] overflow-hidden">
        <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
          <div>
            <span className="section-heading">OUR VAST RANGE OF PRODUCTS</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Tailored to Your Needs</h3>
            </div>
          </div>
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            At Birla Tyres, we offer a comprehensive range of high-quality tyres
            designed to cater to various vehicles and terrains. We understand
            that different vehicles, driving conditions and needs require
            specific tyre characteristics. Our wide range ensures that we have
            the perfect tyre for every vehicle and driving need - whether it’s
            ensuring the durability and performance of commercial vehicles,
            supporting the efficiency of agricultural machinery, or enhancing
            the capabilities of off-road equipment, our tyres are designed to
            meet the highest standards of quality and reliability. Our product
            portfolio includes:
          </p>
          <div className="grid grid-cols1 md:grid-cols-3 gap-6 md:gap-10">
            <div
              className="vast-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <figure>
                <Image className="vast-card-image" src={who6} alt="card" />
              </figure>
              <h2>Truck Bus Bias</h2>
              <ul>
                <li>Robust and reliable tyres for trucks, buses, ultra-light truck, etc.</li>
                <li>Enhanced load-carrying capacity and 360-degree impact resistance for optimal performance</li>
              </ul>
            </div>
            <div
              className="vast-card"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="200"
            >
              <figure>
                <Image className="vast-card-image" src={who7} alt="card" />
              </figure>
              <h2>Off The Road</h2>
              <ul>
                <li>Heavy-duty and resilient tyres designed for Construction, industrial and mining equipment</li>
                <li>Superior traction and extended mileage,complemented by value-added services, for stress-free use in challenging terrains</li>
              </ul>
            </div>
            <div
              className="vast-card"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="300"
            >
              <figure>
                <Image className="vast-card-image" src={who8} alt="card" />
              </figure>
              <h2>Agriculture</h2>
              <ul>
                <li>Durable and dependable tyres designed for tractors, harvesters, and other agricultural machinery</li>
                <li>Multi-purpose tread optimized for traction and impact resistance on both farm and road(haulage)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="excellence-sec pt-6 md:pt-10 2xl:pt-[60px] overflow-hidden">
        <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
          <div>
            <span className="section-heading">What Sets us Apart</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Our Path to Excellence</h3>
            </div>
          </div>
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
            laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
            maximus mollis diam, vel varius sapien suscipit eget. Cras
            sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit
            urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et
            pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel
            varius sapien suscipit eget. Cras sollicitudin ligula at volutpat
            ultrices.
          </p>
          <div class="flex flex-col md:flex-row gap-4 md:gap-10">
            <div class="w-full md:w-[40%] h-fit md:sticky top-[90px]">
              <figure
                className="w-full h-[350px] md:h-[450px] 2xl:h-[600px] mb-0"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  className="w-full h-full object-cover rounded-[12px]"
                  src={who9}
                  alt="faqImg"
                />
              </figure>
            </div>
            <div
              class="accordion-list-sec w-full md:w-[60%] h-[350px] md:h-[450px] 2xl:h-[600px] overflow-y-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title">Capability point 1</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title">Capability point 2</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title">Capability point 3</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title">Capability point 4</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title">Capability point 5</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title">Capability point 6</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
            laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
            maximus mollis diam, vel varius sapien suscipit eget. Cras
            sollicitudin ligula at volutpat ultrices.
          </p>
        </div>
      </section>
      <PageEnd
        Title="Vision, Mission & Values"
        TitleLink="/about-us/corporate/vision-mission-values"
        EndStaticImage={who10}
      />
      <Footer />
    </>
  );
}
