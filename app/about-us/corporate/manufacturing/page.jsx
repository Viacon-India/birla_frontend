"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import {Float} from "../../../components/pageCommon/pageCommon";
import {MainButton} from "../../../components/pageCommon/pageCommon";
import Banner from "../../../assets/images/man1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import man2 from "../../../assets/images/man2.jpg";
import man3 from "../../../assets/images/man3.jpg";
import BGTiger from "../../../assets/images/tiger-mask3.png";
import man4 from "../../../assets/images/man4.jpg";
import man5 from "../../../assets/images/man5.jpg";
import man6 from "../../../assets/images/man6.jpg";
import man8 from "../../../assets/images/man8.png";
import man9 from "../../../assets/images/man9.png";
import man10 from "../../../assets/images/man10.png";
import man11 from "../../../assets/images/man11.png";
import man12 from "../../../assets/images/man12.jpg";
import man13 from "../../../assets/images/man13.jpg";
import man14 from "../../../assets/images/man14.jpg";
import tiger from "../../../assets/images/tiger.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Manufacturing() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init();
    if (counter > 300) return;

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 300) {
          clearInterval(interval);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <Navbar />
      <section className="top-banner-sec">
        <div className="relative">
          <Float />
          <div className="relative">
            <div className="w-full h-[40vh] md:h-[80vh] flex items-end">
              <div class="container mx-auto flex flex-col justify-between h-full pt-5 pb-[60px]">
                <MainButton />
                <div className="relative z-10">
                  <GradualSpacing
                    className="top-banner-sec-heading"
                    text="Manufacturing"
                    paddingLeft="pl-5"
                    paddingRight="pr-5"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>{counter}</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>{counter}</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>{counter}</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="w-full md:w-[50%]">
              <span
                className="section-heading"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                our Manufacturing excellence
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                  Where quality meets innovation
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
          <div className="grid grid-cols-2 gap-6 md:gap-10 relative">
            <figure className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <Image
                data-aos="zoom-out"
                data-aos-duration="2000"
                src={tiger}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man8}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-down-left"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man9}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man10}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man11}
                alt="img"
              />
            </figure>
          </div>
          <div className="manufacture-slider-sec">
            <span className="section-heading">our Safety Philosophy</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">
                Commitment to a safe & sustainable workplace
              </h3>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-6 2xl:mt-10">
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
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-6 2xl:mt-10">
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
            <div class="mt-5 2xl:mt-8">
              <Swiper
                speed={1500}
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
                        src={man12}
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
                        src={man13}
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
                        src={man14}
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
                        src={man12}
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
                        src={man13}
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
                        src={man14}
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
