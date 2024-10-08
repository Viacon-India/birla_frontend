"use client";

import { Float } from "../pageCommon/pageCommon";
import React, { useRef, useState, useEffect } from "react";
import { getStrapiMedia } from "@/lib/utils";
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

gsap.registerPlugin(ScrollTrigger);

export default function Hero({Data={}}) {
  
  const handleVideoEnd = () => {
    $("#preloader").css("transform", "translateY(-150%)");
  };
  
  useEffect(() => {
    $("#preloader").css("transition", "transform 2s linear"); // Set transition
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
  }, [Data]);

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
      {Data?.data && Data.data.length > 0 &&
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
              <MainButton />
            </div>
          </div>
          {Data.data.map((slider) => ( slider.attributes?.permalink &&
            <SwiperSlide key={slider.id}>
              <div class="swiper-card-main">
                <span className="slider-overlay"></span>
                <div className="w-full !h-full md:!h-[100vh] flex items-end pb-8 md:pb-[60px]">
                  {slider.attributes?.hero &&
                    <video
                      className="absolute top-0 w-full h-fit object-contain"
                      loop
                      autoPlay
                      muted
                    >
                      <source src={getStrapiMedia(slider.attributes.hero?.data.attributes.url)} type="video/mp4" />
                    </video>
                  }
                  <div className="container mx-auto">
                    <div className="swiper-card relative z-10">
                      {slider.attributes?.title &&
                        <GradualSpacing
                          className="hero-sec-heading hidden md:block !uppercase"
                          text={slider.attributes.title}
                        />
                      }
                      {slider.attributes?.title &&
                        <GradualSpacing
                          className="hero-sec-heading md:hidden"
                          text={slider.attributes.name}
                        />
                      }
                      {slider.attributes?.tag_line &&
                        <LetterPullup
                          className="section-subheading"
                          words={slider.attributes.tag_line}
                          delay={0.05}
                        />
                      }
                      <Link href={slider.attributes.permalink} class="explore-btn">
                        <span>Explore Now</span>
                        <div class="wave"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  );
}
