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

  const sections = [
    {
      right: null,
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
      image: {
          url: res5,
          alt: "img",
        }
    },
    {
      background: true,
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
    },
    {
      right: true,
      __component: "section.commonsec",
      heading: "Key Focus Areas",
      title: "What's Next?",
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
      image: {
          url: res2,
          alt: "img",
        }
    }
  ]

  return (
    <>
      <Navbar />
      <PageBanner
        Title="Research & Development"
        StaticBanner={"/assets/videos/research.mp4"}
        extension=".mp4"
      />
      {sections.length > 0 && sections.map((section) => (
        <SectionSelection key={section.id} section={section} Background={section?.background} right={section?.right}/>
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={res4} />
      <Footer />
    </>
  );
}
