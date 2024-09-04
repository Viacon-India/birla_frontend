"use client";

import React, { useEffect, useState } from "react";
import GradualSpacing from "@/components/GradualSpacing";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/images/sus1.jpg";
import Separator from "../assets/images/esg-separator.jpg";
import Man1 from "../assets/images/esg-man1.jpg";
import Man2 from "../assets/images/esg-man2.jpg";
import Man3 from "../assets/images/esg-man3.jpg";
import LastBg from "../assets/images/sus10.png";
import PageEnd from "../components/pageEnd/pageEnd";
import BGTiger from "../assets/images/tiger-mask3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Sustainability() {
  const [activeTab, setActiveTab] = useState("tab-1");

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
                    text="ESG Initiatives"
                    padding="5"
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
