"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import img1 from "../../assets/images/truck1.jpg";
import img2 from "../../assets/images/truck2.jpg";
import img3 from "../../assets/images/truck3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "@/components/TypingAnimation";
import GradualSpacing from "@/components/GradualSpacing";

export default function Innovation() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="innovation-sec mt-[100px]">
      <div className="container mx-auto">
        <div className="upper-title-sec flex justify-between items-end">
          <div className="new">
            <span className="section-heading">our Segments</span>
            {/* <h3 className="section-title">Our Innovations. Your Solution</h3> */}
            <div className="section-title-wrapper">
              <GradualSpacing className="section-title" text="Our Innovations. Your Solution" />
            </div>
          </div>
          <Link className="tertiary-button" href="">
            Discover Our Categories
          </Link>
        </div>
        <div class="innovative-slider mt-8">
          <Swiper
            slidesPerView={3}
            spaceBetween={48}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="innovation-card" data-aos="fade-up" data-aos-duration="2000">
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img1}
                    alt="card"
                  />
                </figure>
                <h2>Truck Bus Bias</h2>
                <p>Fortifying Commercial Vehicles</p>
                <Link href="" className="primary-btn w-fit !px-6">
                  Explore Products
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up" data-aos-duration="2000"
                data-aos-delay="500"
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
                <Link href="" className="primary-btn w-fit !px-6">
                  Explore Products
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up" data-aos-duration="2000"
                data-aos-delay="1000"
              >
                <figure>
                  <Image
                    className="innovation-card-image"
                    src={img3}
                    alt="card"
                  />
                </figure>
                <h2>Agriculture</h2>
                <p>The Power to Strengthen Your Fields</p>
                <Link href="" className="primary-btn w-fit !px-6">
                  Explore Products
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="innovation-card"
                data-aos="fade-up" data-aos-duration="2000"
                data-aos-delay="1500"
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
                <Link href="" className="primary-btn w-fit !px-6">
                  Explore Products
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
