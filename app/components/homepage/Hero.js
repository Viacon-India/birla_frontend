"use client";

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
import { MainButton, SmallButton } from "../pageCommon/pageCommon";

export default function Hero({ Data }) {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const [storedValue, setStoredValue] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = sessionStorage.getItem("preloader");
      setStoredValue(value);
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("preloader", "watched");
    }
  };

  // Preloader Video Ends
  const handleVideoEnd = () => {
    $("#preloader").css("transform", "translateY(-150%)");
    handleSave();
    setIsPreloaderComplete(true); // Set preloader completion state
  };

  const handleSwiperVideoPlay = (videoElement) => {
    if (!isPreloaderComplete) return; // Ensure videos start only after preloader finishes

    videoElement.currentTime = 0;
    videoElement.play();

    videoElement.addEventListener("ended", () => {
      if (swiperRef.current && swiperRef.current.slideNext) {
        swiperRef.current.slideNext();
      }
    });
  };

  useEffect(() => {
    $("#preloader").css("transition", "transform 1.5s linear");
  }, [Data]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = sessionStorage.getItem("preloader");
      if (value === "watched") {
        setIsPreloaderComplete(true);
      }
      setStoredValue(value);
    }
  }, []);

  return (
    <div className="relative pb-5 pd:pb-8 xl:pb-[50px] 2xl:pb-[75px]">
      {storedValue !== "watched" && (
        <div id="preloader" className="loader-sec">
          <div className="video-wrapper">
            <video
              className="w-full h-fit object-contain"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
            >
              <source
                src={"/assets/videos/tyre-loader-6.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {(storedValue === "watched" || isPreloaderComplete) &&
        Data?.data?.length > 0 && (
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setTimeout(() => {
                if (swiper && swiper.slides && swiper.activeIndex >= 0) {
                  const activeSlide = swiper.slides[swiper.activeIndex];

                  if (activeSlide) {
                    const videoElement = activeSlide.querySelector("video");

                    if (videoElement) {
                      handleSwiperVideoPlay(videoElement);
                    }
                  }
                }
              }, 100); // Delay to ensure smooth transition
            }}
            loop={true}
            speed={3000}
            effect={"creative"}
            creativeEffect={{
              prev: { shadow: true },
              next: { translate: ["100%", 0, 0] },
            }}
            pagination={{ clickable: true }}
            autoplay={false}
            modules={[EffectCreative, Autoplay, EffectFade, Pagination]}
            className="mySwiper relative !pt-[74px] md:!pt-0 !h-[264px] md:!h-[430px] lg:!h-[550px] xl:!h-[100vh]"
          >
            <div className="w-full">
              <div className="container mx-auto">
                <MainButton />
              </div>
            </div>

            {Data.data.map((slider) =>
              slider.attributes?.permalink ? (
                <SwiperSlide key={slider.id}>
                  <div className="swiper-card-main">
                    <span className="slider-overlay"></span>
                    <div className="w-full !h-full flex items-end pb-8 md:pb-2 lg:pb-[24px] xl:pb-[60px]">
                      {slider.attributes?.hero && (
                        <video
                          className="absolute top-0 w-full h-auto object-contain"
                          loop={false}
                          muted
                          playsInline
                          preload="auto"
                          onPlay={(e) => handleSwiperVideoPlay(e.target)}
                        >
                          <source
                            src={getStrapiMedia(
                              slider.attributes.hero?.data?.attributes.url
                            )}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      <div className="container mx-auto">
                        <div className="swiper-card relative z-10">
                          {slider.attributes?.title && (
                            <GradualSpacing
                              className="hero-sec-heading hidden md:block !uppercase"
                              text={slider.attributes.title}
                            />
                          )}
                          {slider.attributes?.title && (
                            <GradualSpacing
                              className="hero-sec-heading md:hidden"
                              text={slider.attributes.name}
                            />
                          )}
                          {slider.attributes?.tag_line && (
                            <LetterPullup
                              className="section-subheading"
                              words={slider.attributes.tag_line}
                              delay={0.05}
                            />
                          )}
                          <Link
                            href={slider.attributes.permalink}
                            className="explore-btn"
                          >
                            <span>Explore Now</span>
                            <div className="wave"></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ) : null
            )}

            {/* Static Slide for Additional Video */}
            <SwiperSlide>
              <div className="swiper-card-main">
                <div className="w-full !h-full flex items-end pb-8 md:pb-2 lg:pb-[24px] xl:pb-[60px]">
                  <video
                    className="absolute top-0 w-full h-auto object-contain"
                    loop={false}
                    muted
                    playsInline
                    preload="auto"
                    onPlay={(e) => handleSwiperVideoPlay(e.target)}
                  >
                    <source
                      src="/assets/videos/tyre-loader-6.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      <SmallButton />
    </div>
  );
}
