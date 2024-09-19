"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
// import Banner from "../../../assets/images/res1.jpg";
import Link from "next/link";
import Image from "next/image";
import res2 from "../../../assets/images/res2.jpg";
import res3 from "../../../assets/images/res3.jpg";
import res4 from "../../../assets/images/res4.jpg";
import res5 from "../../../assets/images/res5.jpg";
import res6 from "../../../assets/images/res6.jpg";
import res7 from "../../../assets/images/res7.jpg";
import res8 from "../../../assets/images/res8.jpg";
import Triangle1 from "../../../assets/images/triangle1.png";
import Triangle2 from "../../../assets/images/triangle2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";
import SectionSelection from "@/app/components/section/section";

export default function Research({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);

  console.log(pageData);

  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/research-and-development"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  // Accordion-sec-data
  const accordion = {
    __component: "section.accordion",
    heading: "R&D capabilities",
    title: "Driven by Innovation & Excellence",
    images: [
      {
        url: res6,
        alt: "Img",
      },
      {
        url: res7,
        alt: "Img",
      },
      {
        url: res8,
        alt: "Img",
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
  };

  // CommonSec
  const commonsec = {
    __component: "section.commonsec",
    heading: "Introduction to R&D",
    title: "Legacy of Innovation",
    commonSecDetail: [
      {
        description:
          "Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin ligula at volutpat ultrices.  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.",
      },
      {
        description:
          "Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin ligula at volutpat ultrices.  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.",
      },
    ],
    button: "Know More",
    images: [
      {
        url: Triangle1,
        alt: "img",
      },
      {
        url: res5,
        alt: "img",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <PageBanner
        Title="Research & Development"
        StaticBanner={"/assets/videos/research.mp4"}
        extension=".mp4"
      />
      <SectionSelection section={commonsec} />
      <SectionSelection section={accordion} Background={true} />
      <section className="overflow-hidden mt-8 md:mt-12 2xl:mt-[60px]">
        <div className="container mx-auto">
          <div className="flex items-start flex-col md:flex-row-reverse gap-4 md:gap-8 2xl:gap-[60px]">
            <figure
              className="w-full md:w-[45%] h-[350px] md:h-[480px] relative glare"
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
                src={res2}
                alt="img"
              />
            </figure>
            <div className="box-content-sec relative md:w-[55%] flex flex-col">
              <span
                data-aos="fade-right"
                data-aos-duration="1000"
                className="section-heading"
              >
                Key Focus Areas
              </span>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
              >
                <h3 className="section-title">What&apos;s Next?</h3>
              </div>
              <p data-aos="fade-right" data-aos-duration="1000">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices.
              </p>
              <p data-aos="fade-right" data-aos-duration="1500">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={res4} />
      <Footer />
    </>
  );
}
