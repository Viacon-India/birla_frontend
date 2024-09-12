"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {  FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import img1 from "../../assets/images/truck1.jpg";
import img2 from "../../assets/images/truck2.jpg";
import img3 from "../../assets/images/truck3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "@/components/TypingAnimation";
import GradualSpacing from "@/components/GradualSpacing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Innovation() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    AOS.init();

    gsap.fromTo(
      ".innovation-sec .container ",
      {
        x: "-100%",
        opacity: 0,
        rotation: 5,
        // scale: 2.5,
        zIndex: 99,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
        rotation: 0,
        // scale: 1,
        zIndex: 0,
        scrollTrigger: {
          trigger: ".innovation-sec",
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
          // markers: true, // Optional: For debugging, remove or set to false in production
        },
      }
    );
  }, []);
  return (
    <section className="innovation-sec sec-gap">
      <div className="container mx-auto">
        <div className="upper-title-sec flex justify-between items-end">
          <div className="new">
            <span className="section-heading">our Segments</span>
            {/* <h3 className="section-title">Our Innovations. Your Solution</h3> */}
            <div className="section-title-wrapper">
              <GradualSpacing
                className="section-title"
                text="Trusted Tyres For Every Terrain"
              />
            </div>
          </div>
          {/* <Link className="tertiary-button !hidden md:!flex" href="/users/product">
            Discover Our Categories
          </Link> */}
        </div>
        <div class="innovative-slider mt-5 2xl:mt-8">
          <Swiper
            freeMode={true}
            speed= {2400}
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
                spaceBetween : 20
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 48
              },
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img1}
                    alt="card"
                  />
                </figure>
                <h2>Truck Bus Bias</h2>
                <p>Fortifying Commercial Vehicles</p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                >
                  <span data-hover="Explore Products">Explore Products</span>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img2}
                    alt="card"
                  />
                </figure>
                <h2>Off The Road</h2>
                <p>Designed for Durability & Strength</p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                >
                  <span data-hover="Explore Products">Explore Products</span>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img3}
                    alt="card"
                  />
                </figure>
                <h2>Agriculture</h2>
                <p>The Power to Strengthen Fields</p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                >
                  <span data-hover="Explore Products">Explore Products</span>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img1}
                    alt="card"
                  />
                </figure>
                <h2>Truck Bus Bias</h2>
                <p>Fortifying Commercial Vehicles</p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                >
                  <span data-hover="Explore Products">Explore Products</span>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img2}
                    alt="card"
                  />
                </figure>
                <h2>Off The Road</h2>
                <p>Designed for Durability & Strength</p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                >
                  <span data-hover="Explore Products">Explore Products</span>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img3}
                    alt="card"
                  />
                </figure>
                <h2>Agriculture</h2>
                <p>The Power to Strengthen Fields</p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                >
                  <span data-hover="Explore Products">Explore Products</span>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
