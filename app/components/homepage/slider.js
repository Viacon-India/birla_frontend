"use client";

import {Float} from "../pageCommon/pageCommon";
import {MainButton} from "../pageCommon/pageCommon";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade'
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import LetterPullup from "@/components/LetterPullup";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Slider() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".sideNav-wrapper",
      { right: "-40px" },
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
        right: "-40px",
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
      <div className="loader-sec">
        <div class="video-wrapper">
          <video className="w-full h-fit object-contain" loop autoPlay muted>
            <source src={"/assets/videos/tyre-loader-2.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <Float />

      <Swiper
        loop={true}
        speed={3000}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-end pb-[60px]">
              <div class="container mx-auto flex flex-col justify-between h-[80%]">
                <MainButton />
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading"
                    text="Truck Bus Bias"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Progess in Every Mile"}
                    delay={0.05}
                  />
                  <Link href="#" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              loop
              autoPlay
              muted
            >
              <source src={"/assets/videos/TBB-1.mp4"} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-end pb-[60px]">
              <div class="container mx-auto flex flex-col justify-between h-[80%]">
                <MainButton />
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading"
                    text="Off The Road"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Ready for Every Challenge"}
                    delay={0.05}
                  />
                  <Link href="#" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              loop
              autoPlay
              muted
            >
              <source src={"/assets/videos/OTR-vid.mp4"} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-end pb-[60px]">
              <div class="container mx-auto flex flex-col justify-between h-[80%]">
                <MainButton />
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading"
                    text="Agriculture"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Strength in Every Turn"}
                    delay={0.05}
                  />
                  <Link href="#" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              loop
              autoPlay
              muted
            >
              <source src={"/assets/videos/AGR.mp4"} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
