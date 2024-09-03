"use client";

import React, { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Banner from "../assets/images/life1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import join2 from "../assets/images/join2.png";
import join3 from "../assets/images/join3.jpg";
import BGTiger from "../assets/images/tiger-mask3.png";
import join4 from "../assets/images/join4.jpg";
import life5 from "../assets/images/life5.png";
import tigerMask from "../assets/images/tiger-mask2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LifeAtBirla() {
  useEffect(() => {
    AOS.init();
  }, []);
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
                    text="Life At BIRLA TYRES"
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
      <section className="page-content-sec bg-[#F4F4F4]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 py-[60px]">
            <div className="w-full md:w-[50%] relative">
              <Image
                alt="mask"
                src={tigerMask}
                className="absolute left-0 top-0"
              />
              <span
                className="section-heading"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Employee Engagement
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                  Headline for employee engagement goes here
                </h3>
              </div>
            </div>
            <div className="w-full md:w-[50%] box-content-sec">
              <p data-aos="fade-left" data-aos-duration="500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in.
              </p>
              <p data-aos="fade-left" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in.
              </p>
            </div>
          </div>
          
        </div>
      </section>
      <section className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
        <Image
          src={life5}
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
              Categories - TBB
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
