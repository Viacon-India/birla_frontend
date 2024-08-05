import React, { useEffect, useState } from "react";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import LetterPullup from "@/components/LetterPullup";


export default function Hero() {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    if (!slider) return; // Exit if slider not found

    const slides = Array.from(slider.querySelectorAll(".tiles"));
    const nav = slider.querySelector("nav");
    const navA = Array.from(nav.querySelectorAll("a"));
    let cur = 0;
    let slideInterval = setInterval(goNext, 3000);
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

    function goPrev() {
      cur = (cur - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function pauseSlideshow() {
      if (playing) {
        playing = false;
        clearInterval(slideInterval);
      } else {
        playing = true;
        slideInterval = setInterval(goNext, 4000);
      }
    }

    if (nav) {
      nav.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
          event.preventDefault();
          cur = navA.indexOf(event.target);
          updateSlider();
        }
      });
    }

    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");

    if (nextBtn) {
      nextBtn.addEventListener("click", function (event) {
        event.preventDefault();
        goNext();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function (event) {
        event.preventDefault();
        goPrev();
      });
    }

    slider.addEventListener("mouseenter", pauseSlideshow);
    slider.addEventListener("mouseleave", pauseSlideshow);

    // Cleanup on unmount
    return () => {
      clearInterval(slideInterval);
      slider.removeEventListener("mouseenter", pauseSlideshow);
      slider.removeEventListener("mouseleave", pauseSlideshow);
      if (nextBtn) {
        nextBtn.removeEventListener("click", goNext);
      }
      if (prevBtn) {
        prevBtn.removeEventListener("click", goPrev);
      }
      if (nav) {
        nav.removeEventListener("click", function (event) {
          if (event.target.tagName === "A") {
            event.preventDefault();
            cur = navA.indexOf(event.target);
            updateSlider();
          }
        });
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
                    <GradualSpacing className="hero-sec-heading" text="TBB" />
                    <LetterPullup
                      className="section-subheading"
                      words={"Fortifying Commercial Vehicles"}
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
                <source src={"/assets/videos/TBB-vid.mp4"} type="video/mp4" />
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
                    <GradualSpacing className="hero-sec-heading" text="OTR" />
                    <LetterPullup
                      className="section-subheading"
                      words={"Designed for Durability and Strength"}
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
                      words={"The Power To Strengthen Your Field"}
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
