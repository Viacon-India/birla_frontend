"use client";

import React, { useEffect, useState } from "react";
import GradualSpacing from "@/components/GradualSpacing";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/images/esg-banner.jpg";
import Separator from "../assets/images/esg-separator.jpg";
import Man1 from "../assets/images/esg-man1.jpg";
import Man2 from "../assets/images/esg-man2.jpg";
import Man3 from "../assets/images/esg-man3.jpg";
import LastBg from "../assets/images/esg-next.png";
import BGTiger from "../assets/images/tiger-mask3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Esg() {
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
                  <Link href="" className="primary-btn-2">
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
                  Sub-headline for ESG goes here
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
      <section className="mt-[60px]">
        <div class="w-[100%] mt-4 2xl:mt-8 ">
          <video className="!w-full" loop autoPlay muted>
            <source src={"/assets/videos/vid5.mp4"} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">key objectives</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Headline for ESG principles</h3>
            </div> data-aos="fade-down" data-aos-duration="2000"
          </div>
          <div>
            <div className="flex justify-between text-[#4F5662] ">
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-1"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-1")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  Planet
                </h2>
                <p className="text-left w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </button>
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-2"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-2")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  Communities
                </h2>
                <p className="text-left w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </button>
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-3"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-3")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  People
                </h2>
                <p className="text-left w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </button>
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-4"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-4")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  Governance
                </h2>
                <p className="text-left w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </button>
            </div>
            {activeTab === "tab-1" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1000">
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1500">
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="2000">
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-2" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  Sonec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1000">
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1500">
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="2000">
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-3" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1000">
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1500">
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="2000">
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-4" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1000">
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="1500">
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure className="w-1/3" data-aos="fade-down" data-aos-duration="2000">
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
        <Image
          src={LastBg}
          alt="bottom-img"
          className="absolute left-0 h-[200px] w-[60%]"
        />
        <div className="container mx-auto relative h-[200px] flex items-end justify-end">
          <Image
            src={BGTiger}
            alt="bottom-img"
            className="absolute right-[20%]"
          />
          <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4">
            Next Page :
            <Link
              className="text-[#F5811E] font-medium flex items-center gap-1"
              href="/users/product"
            >
              Tyre Care & Road Safety
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                  stroke="#F5811E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
