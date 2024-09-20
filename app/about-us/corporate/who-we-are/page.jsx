"use client";

import React, { useState, useEffect } from "react";
import { getStrapiMedia } from "@/lib/utils";
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
import SectionSelection, {
  CommonSec,
} from "../../../components/section/section";
import { title } from "process";
import { Accordion } from "@/app/components/section/section";

export default function WhoWeAre({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/who-we-are"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  // Accordion-sec-data
  const accordion = {
    __component: "section.accordion",
    heading: "What Sets us Apart",
    title: "Our Path to Excellence",
    preAccordion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin ligula at volutpat ultrices.",
    images: [
      {
        url: who9,
        alt: "faqImg",
      },
    ],
    accordion: [
      {
        title: "Capability point 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Capability point 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Capability point 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Capability point 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Capability point 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Capability point 6",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    postAccordion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  };

  // Tiger  Mask section
  const tigerMarkSection = {
    __component: "section.tigerMark",
    heading: "About Us",
    title: "Our Journey",
    images: [
      {
        url: tigerMask,
        alt: "tigermark",
      },
    ],
    tigerMarkDetail: [
      {
        description:
          "Birla Tyres was established in 1991 and has a rich heritage of excellence. Over the past 3 decades, Birla Tyres had built a reputation for quality and was recognized as one of the best tyre manufacturers in India. The registered office of Birla Tyres is located in Kolkata while the state-of-the-art manufacturing plant is located at Balasore, Odisha. The plant spans over an area of 195 acres and produces high-quality tyres catering to a wide variety of applications (commercial, agricultural, off-the-road, etc.)",
      },
      {
        description:
          "Dalmia Bharat Refractories Limited (DBRL) along with their strategic partner, Himadri Speciality Chemical Limited (HSCL) have acquired Birla Tyres Limited's tyre business through a resolution plan approved by the National Company Law Tribunal in October 2023.",
      },
    ],
  };

  // common sec
  const CommonSec = {
    __component: "section.commonsec",
    heading: "joint ownership",
    title: "Himadri Speciality Chemical Limited (HSCL)",
    commonSecDetail: [
      {
        description:
          "Himadri Speciality Chemical Ltd is a global speciality chemical conglomerate with a strong focus on research and development (R&D), innovation and sustainability.",
      },
      {
        description:
          "As pioneer in the production of lithium-ion battery materials in India, it continuously develops and innovates raw materials of lithium-ion battery value chain. It’s diverse product portfolio includes speciality carbon black, coal tar pitch, refined naphthalene, advance materials, SNF, speciality oils, power, etc. catering to various industries such as lithium-ion batteries, paints, plastics, tyres, aluminium, graphite electrodes, agrochemicals, defence and construction chemicals. Himadri operates in both domestic and international markets, exporting to 54 countries across the globe.",
      },
      {
        description:
          "With a strong commitment to safety and sustainability, it has 8 zero-liquid discharge manufacturing facilities and utilize in-house clean and green power for more than 90% of its energy needs. Through its dedication to R&D, new business opportunities and sustainability, Himadri is making a positive impact on the industry, both in India and globally.",
      },
      {
        description:
          "Himadri, as a manufacturer of carbon black, has a deep understanding of the tyre industry. Having successfully forward integrated from Oil to Carbon Black, then to Speciality Carbon Black, Himadri thus stands at the threshold of an exciting transformation moving forward towards end customer, venturing into the world of Tyres. Birla Tyres has strong synergies with Himadri operations and aligns strategically with the company’s overall objective of being a lead player in EV space.",
      },
    ],
    button: "Know More",
    buttonLink : "https://www.himadri.com/",
    image: {
      url: who4,
      alt: "img",
    },
  };

  // common-sec -2
  const CommonSec2 = {
    __component: "section.commonsec",
    heading: "joint ownership",
    title: "Dalmia Bharat Refractories Limited (DBRL)",
    commonSecDetail: [
      {
        description:
          "Dalmia Bharat Refractories Limited (DBRL) is a prominent Indian company with a rich legacy dating back to 1939. In a strategic move to streamline operations and explore new avenues of growth, DBRL has divested its entire refractory business, except for the magnesia carbon business and its manufacturing located in China. DBRL's unwavering commitment to growth and innovation is exemplified by its recent acquisition of Birla Tyres Limited's tyre business - this bold venture into a domain entirely new to DBRL's established expertise signifies the company's unwavering spirit of exploration and adaptability.",
      },
      {
        description:
          "This strategic partnership marks the beginning of an exciting new chapter, where our combined expertise, resources, and innovative spirit will drive us to achieve greater heights. Together, we are poised to revolutionize the tyre industry, delivering unparalleled value to our customers and stakeholders. With a shared vision and commitment to excellence, we look forward to a future filled with remarkable achievements and ground-breaking advancements.",
      },
    ],
    postCommonSec : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam.",
    button: "Know More",
    buttonLink : "https://dalmiaocl.com/",
    image: {
      url: who5,
      alt: "img",
    },
  };

  return (
    <>
      <Navbar />
      <PageBanner
        Title={pageData?.title}
        Banner={pageData?.hero}
        StaticBanner={Banner}
      />
      <SectionSelection section={tigerMarkSection} />
      <section className="mt-6 md:mt-8 2xl:mt-10">
        <div className="container mx-auto">
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
        </div>
      </section>
      <SectionSelection section={CommonSec} />
      <SectionSelection section={CommonSec2} right={true}/>
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
                <li>
                  Robust and reliable tyres for trucks, buses, ultra-light
                  truck, etc.
                </li>
                <li>
                  Enhanced load-carrying capacity and 360-degree impact
                  resistance for optimal performance
                </li>
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
                <li>
                  Heavy-duty and resilient tyres designed for Construction,
                  industrial and mining equipment
                </li>
                <li>
                  Superior traction and extended mileage,complemented by
                  value-added services, for stress-free use in challenging
                  terrains
                </li>
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
                <li>
                  Durable and dependable tyres designed for tractors,
                  harvesters, and other agricultural machinery
                </li>
                <li>
                  Multi-purpose tread optimized for traction and impact
                  resistance on both farm and road(haulage)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <SectionSelection section={accordion} />
      <PageEnd EndPageData={pageData?.end} EndStaticImage={who10} />
      <Footer />
    </>
  );
}
