"use client";

import { Float } from "../pageCommon/pageCommon";
import React, { useRef, useState, useEffect } from "react";
import $ from "jquery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import {
  Autoplay,
  Pagination,
  EffectFade,
  EffectCreative,
} from "swiper/modules";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import LetterPullup from "@/components/LetterPullup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MainButton } from "../pageCommon/pageCommon";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  $("#preloader").css("transition", "transform 2s linear"); // Set transition
  const handleVideoEnd = () => {
    $("#preloader").css("transform", "translateY(-150%)");
  };

  useEffect(() => {
    gsap.fromTo(
      ".sideNav-wrapper",
      { right: "-48px" },
      {
        right: "0px",
        scrollTrigger: {
          trigger: ".media-sec-marker",
          scroller: "body",
          start: "top top",
          end: "top 60%",
          scrub: 2,
          // markers: true
        },
      }
    );

    gsap.fromTo(
      ".sideNav-wrapper",
      { right: "0px" },
      {
        right: "-48px",
        scrollTrigger: {
          trigger: ".video-content",
          scroller: "body",
          start: "top 40%",
          end: "top top",
          scrub: 2,
          // markers: true
        },
      }
    );
  });

  return (
    <div className="relative">
      <div id="preloader" className="loader-sec">
        <div class="video-wrapper">
          <video
            className="w-full h-fit object-contain"
            autoPlay
            muted
            onEnded={handleVideoEnd}
          >
            <source src={"/assets/videos/tyre-loader-6.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <Float />

      <Swiper
        loop={true}
        speed={3000}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            // translate: [0, 0, -300],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Autoplay, EffectFade, Pagination]}
        className="mySwiper relative !pt-[58px] md:!pt-0 !h-[264px] md:!h-full"
      >
        <div class="w-full">
          <div class="container mx-auto">
            <div class="multi-btn-sec">
              <Link href="find-tyre" className="primary-btn-1">
                Find a Tyre
              </Link>
              <Link href="dealer-locator" className="primary-btn-2">
                Find a Dealer
              </Link>
            </div>
          </div>
        </div>
        <SwiperSlide>
          <div class="swiper-card-main">
            <span className="slider-overlay"></span>
            <div className="w-full !h-full md:!h-[100vh] flex items-end pb-8 md:pb-[60px]">
              <video
                className="absolute top-0 w-full h-fit object-contain"
                loop
                autoPlay
                muted
              >
                <source src={"/assets/videos/TBB-3.mov"} type="video/mp4" />
              </video>
              <div className="container mx-auto">
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading hidden md:block"
                    text="Truck Bus Bias"
                  />
                  <GradualSpacing
                    className="hero-sec-heading md:hidden"
                    text="TBB"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Progess in Every Mile"}
                    delay={0.05}
                  />
                  <Link href="/products/truck-bus-bias" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="swiper-card-main">
            <span className="slider-overlay"></span>
            <div className="w-full !h-full md:!h-[100vh] flex items-end pb-8 md:pb-[60px]">
              <video
                className="absolute top-0 w-full h-fit object-contain"
                loop
                autoPlay
                muted
              >
                <source src={"/assets/videos/OTR.mp4"} type="video/mp4" />
              </video>
              <div className="container mx-auto">
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading hidden md:block"
                    text="Off The Road"
                  />
                  <GradualSpacing
                    className="hero-sec-heading md:hidden"
                    text="OTR"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Ready for Every Challenge"}
                    delay={0.05}
                  />
                  <Link href="/products/off-the-road" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="swiper-card-main">
            <span className="slider-overlay"></span>
            <div className="w-full !h-full md:!h-[100vh] flex items-end pb-8 md:pb-[60px]">
              <video
                className="absolute top-0 w-full h-fit object-contain"
                loop
                autoPlay
                muted
              >
                <source src={"/assets/videos/AGRI-10.mp4"} type="video/mp4" />
              </video>
              <div className="container mx-auto">
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading hidden md:block"
                    text="Agriculture"
                  />
                  <GradualSpacing
                    className="hero-sec-heading md:hidden"
                    text="AGRI"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Strength in Every Turn"}
                    delay={0.05}
                  />
                  <Link href="/products/agriculture" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="relative w-full flex md:hidden gap-2 p-2">
        <Link href="" className="primary-btn-1 !w-[50%] !justify-center">
          Find a Tyre
        </Link>
        <Link href="" className="primary-btn-2 !w-[50%] !justify-center">
          Find a Dealer
        </Link>
      </div>
    </div>
  );
}
