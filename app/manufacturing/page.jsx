"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Banner from "../assets/images/man1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import man2 from "../assets/images/man2.jpg";
import man3 from "../assets/images/man3.jpg";
import BGTiger from "../assets/images/tiger-mask3.png";
import man4 from "../assets/images/man4.jpg";
import man5 from "../assets/images/man5.jpg";
import man6 from "../assets/images/man6.jpg";

export default function Manufacturing() {
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
                    text="Manufacturing"
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10">
            <div className="box-card">
              <div>
                <h3>1234</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
            <div className="box-card">
              <div>
                <h3>1234</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
            <div className="box-card">
              <div>
                <h3>1234</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
            <div className="box-card">
              <div>
                <h3>1234</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="w-full md:w-[48%]">
              <span className="section-heading">Manufacturing Facility</span>
              <div className="section-title-wrapper">
                <GradualSpacing
                  className="section-title"
                  text="Headline for manufacturing facility goes here"
                />
              </div>
            </div>
            <div className="w-full md:w-[50%] box-content-sec">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in.
              </p>
              <p>
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
          <figure className="w-full h-full">
            <Image className="w-full h-full object-cover" src={man2} alt="" />
          </figure>
          <div className="manufacture-slider-sec">
            <span className="section-heading">Safety Philosophy</span>
            <div className="section-title-wrapper">
              <GradualSpacing
                className="section-title"
                text="Headline for safety philosophy goes here"
              />
            </div>
            <div class="mt-5 2xl:mt-8">
              <Swiper
                speed={2400}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3.2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiperManufacture"
              >
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man4}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-1</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man5}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-2</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man6}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-3</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man4}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-1</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man5}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-2</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man6}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-3</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
        <Image
          src={man3}
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
              Board of Directors
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
