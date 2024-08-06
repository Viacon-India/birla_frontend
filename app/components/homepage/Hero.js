import React, { useEffect, useState } from "react";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import LetterPullup from "@/components/LetterPullup";

export default function Hero() {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll(".tiles"));
    const nav = slider.querySelector("nav");
    const navA = Array.from(nav.querySelectorAll("a"));
    let cur = -1;
    let slideInterval = setInterval(goNext, 7000);
    let playing = true;

    function updateSlider() {
      navA.forEach((a, index) => {
        a.classList.toggle("current_dot", index === cur);
      });
      slides.forEach((slide, index) => {
        slide.classList.toggle("current", index === cur);
        slide.classList.toggle("prev", index < cur);
      });
    }

    function goNext() {
      cur = (cur + 1) % slides.length;
      updateSlider();
    }

    function startVideo() {
      const videoElement = document.querySelector(".your-video-class"); // Adjust selector as needed
      if (videoElement) {
        videoElement.play();
      }
    }

    // Start the video on page load
    startVideo();

    // Start slider functionality
    goNext();

    if (nav) {
      nav.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
          event.preventDefault();
          cur = navA.indexOf(event.target);
          updateSlider();
        }
      });
    }

    // Clean up interval on component unmount
    return () => {
      clearInterval(slideInterval);
      if (nav) {
        nav.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div className="relative">
      <section className="intro">
        <div className="slider">
          <div>
            <div className="tiles swiper-card-main relative">
              <span className="slider-overlay"></span>
              <div className="w-full h-[100vh] flex items-end pb-[60px]">
                <div class="container mx-auto flex flex-col justify-between h-[80%]">
                  <div class="flex flex-col gap-5 relative z-10">
                    <Link href="" className="primary-btn-1">
                      Find a Tyre
                    </Link>
                    <Link href="" className="primary-btn-2">
                      Find a Dealer
                    </Link>
                  </div>
                  <div className="swiper-card relative z-10">
                    <GradualSpacing className="hero-sec-heading" text="Truck Bus Bias" />
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
                <source src={"/assets/videos/TBB2.mp4"} type="video/mp4" />
              </video>
            </div>
            <div className="tiles swiper-card-main relative">
              <span className="slider-overlay"></span>
              <div className="w-full h-[100vh] flex items-end pb-[60px]">
                <div class="container mx-auto flex flex-col justify-between h-[80%]">
                  <div class="flex flex-col gap-5 relative z-10">
                    <Link href="" className="primary-btn-1">
                      Find a Tyre
                    </Link>
                    <Link href="" className="primary-btn-2">
                      Find a Dealer
                    </Link>
                  </div>
                  <div className="swiper-card relative z-10">
                    <GradualSpacing className="hero-sec-heading" text="Off The Road" />
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
            <div className="tiles swiper-card-main relative">
              <span className="slider-overlay"></span>
              <div className="w-full h-[100vh] flex items-end pb-[60px]">
                <div class="container mx-auto flex flex-col justify-between h-[80%]">
                  <div class="flex flex-col gap-5 relative z-10">
                    <Link href="" className="primary-btn-1">
                      Find a Tyre
                    </Link>
                    <Link href="" className="primary-btn-2">
                      Find a Dealer
                    </Link>
                  </div>
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
                <source src={"/assets/videos/AGR3.mp4"} type="video/mp4" />
              </video>
            </div>
          </div>
          <div>
            <nav>
              <a href="javascript:void(0)"></a>
              <a href="javascript:void(0)"></a>
              <a href="javascript:void(0)"></a>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
