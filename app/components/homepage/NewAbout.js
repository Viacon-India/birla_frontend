"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import $ from "jquery";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import icon1 from "../../assets/images/about-icon1.png";
import icon2 from "../../assets/images/about-icon2.png";
import icon3 from "../../assets/images/about-icon3.png";
import icon4 from "../../assets/images/about-icon4.png";
import icon5 from "../../assets/images/about-icon5.png";
import icon6 from "../../assets/images/about-icon6.png";
import icon7 from "../../assets/images/about-icon7.png";
import icon8 from "../../assets/images/about-icon8.png";
import img1 from "../../assets/images/about-img-1.jpg";
import img2 from "../../assets/images/about-img-2.jpg";
import img3 from "../../assets/images/about-img-3.jpg";
import img4 from "../../assets/images/about-img-4.jpg";
import img1H from "../../assets/images/about-icon1.png";
import GradualSpacing from "@/components/GradualSpacing";

export default function NewAbout() {

  useEffect(() => {
    $(".detail1")
      .unbind()
      .mouseenter(function () {
        $(".detail1Img").fadeIn(600);
        $(".detail2Img").fadeOut(600);
        $(".detail3Img").fadeOut(600);
        $(".detail4Img").fadeOut(600);
      });
    $(".detail2")
      .unbind()
      .mouseenter(function () {
        // $('.detail2Img').fadeIn(600);
        // $('.detail1Img').fadeOut(600);
        $(".detail1Img").fadeOut(600);
        $(".detail2Img").fadeIn(600);
        $(".detail3Img").fadeOut(600);
        $(".detail4Img").fadeOut(600);
      });
    $(".detail3")
      .unbind()
      .mouseenter(function () {
        $(".detail1Img").fadeOut(600);
        $(".detail2Img").fadeOut(600);
        $(".detail3Img").fadeIn(600);
        $(".detail4Img").fadeOut(600);
      });
    $(".detail4")
      .unbind()
      .mouseenter(function () {
        $(".detail1Img").fadeOut(600);
        $(".detail2Img").fadeOut(600);
        $(".detail3Img").fadeOut(600);
        $(".detail4Img").fadeIn(600);
      });

    if (
      $(".swiper-slide-active")
        .children()
        .children(".detail")
        .hasClass("detail1")
    ) {
      $(".detail1Img").fadeIn(600);
      $(".detail2Img").fadeOut(600);
      $(".detail3Img").fadeOut(600);
      $(".detail4Img").fadeOut(600);
    } else if (
      $(".swiper-slide-active")
        .children()
        .children(".detail")
        .hasClass("detail2")
    ) {
      $(".detail1Img").fadeOut(600);
      $(".detail2Img").fadeIn(600);
      $(".detail3Img").fadeOut(600);
      $(".detail4Img").fadeOut(600);
    } else if (
      $(".swiper-slide-active")
        .children()
        .children(".detail")
        .hasClass("detail3")
    ) {
      $(".detail1Img").fadeOut(600);
      $(".detail2Img").fadeOut(600);
      $(".detail3Img").fadeIn(600);
      $(".detail4Img").fadeOut(600);
    } else if (
      $(".swiper-slide-active")
        .children()
        .children(".detail")
        .hasClass("detail4")
    ) {
      $(".detail1Img").fadeOut(600);
      $(".detail2Img").fadeOut(600);
      $(".detail3Img").fadeOut(600);
      $(".detail4Img").fadeIn(600);
    }
  }, []);

  return (
    <section className="split-section-wrapper mt-[100px]">
      <div className="container mx-auto hoverBoxContainer-2">
        <span className="section-heading">company brief</span>
        <div className="section-title-wrapper">
          <GradualSpacing className="section-title" text="About Us" />
        </div>
        <div
          className="split-section split-section1 w-[100vw]"
          data-aos="zoom-out-right"
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          <div className="split-images">
            <Image
              src={img1}
              alt="card"
              className="object-cover detailImg detail1Img"
            />
            <Image
              src={img2}
              alt="card"
              className="object-cover detailImg detail2Img"
            />
            <Image
              src={img3}
              alt="card"
              className="object-cover detailImg detail3Img"
            />
            <Image
              src={img4}
              alt="card"
              className="object-cover detailImg detail4Img"
            />
          </div>

          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={2.08}
            speed={1000}
            autoplay={{
              // delay: 6000,
              pauseOnMouseEnter: true,
              
            }}
            modules={[Autoplay]}
            className="mySwiper split-details"
          >
            <SwiperSlide>
              <div className="swiper-card-main relative">
                <div className="detail detail1">
                  <div className="imageHeading">
                    <p
                      className="colorHIcon"
                      style={{
                        backgroundImage: `url(${icon1.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <p
                      className="colorIcon"
                      style={{
                        backgroundImage: `url(${icon5.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <h2 className="about-usp-title">Legacy of Trust</h2>
                  </div>
                  <p className="about-usp-detail">
                    With a rich heritage spanning over three decades, Birla
                    Tyres has built a reputation for reliability and excellence
                    in the tyre industry. Over the past three decades, we have
                    achieved numerous milestones, which is a testament to our
                    commitment to quality and customer focus. We take pride in
                    being a trusted partner for drivers across the country.
                  </p>
                  <a class="tertiary-button" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-card-main relative">
                <div className="detail detail2">
                  <div className="imageHeading">
                    <p
                      className="colorHIcon"
                      style={{
                        backgroundImage: `url(${icon2.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <p
                      className="colorIcon"
                      style={{
                        backgroundImage: `url(${icon6.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <h2 className="about-usp-title">Vast Range of Products</h2>
                  </div>
                  <p className="about-usp-detail">
                  Our company is proud to offer a comprehensive tyre portfolio that caters to the diverse and unique needs of our customers. With our extensive range of products, including Truck Bus Bias (TBB) tyres, agricultural tyres, and off-the-road tyres, we are equipped to provide solutions for various applications and industries.
                  </p>
                  <a class="tertiary-button" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-card-main relative">
                <div className="detail detail3">
                  <div className="imageHeading">
                    <p
                      className="colorHIcon"
                      style={{
                        backgroundImage: `url(${icon3.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <p
                      className="colorIcon"
                      style={{
                        backgroundImage: `url(${icon7.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <h2 className="about-usp-title">Commitment to Quality Excellence</h2>
                  </div>
                  <p className="about-usp-detail">
                  At Birla Tyres, we continuously invest in research and development to stay at the forefront of tyre technology. Our dedicated R&D team works tirelessly to innovate and introduce advanced features that enhance performance, safety and durability.
                  </p>
                  <a class="tertiary-button" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-card-main relative">
                <div className="detail detail4">
                  <div className="imageHeading">
                    <p
                      className="colorHIcon"
                      style={{
                        backgroundImage: `url(${icon4.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <p
                      className="colorIcon"
                      style={{
                        backgroundImage: `url(${icon8.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <h2 className="about-usp-title">Customer-Centric Approach</h2>
                  </div>
                  <p className="about-usp-detail">
                  Our customer-centric approach is the cornerstone of our business philosophy. We prioritize understanding and addressing the unique needs and preferences of our customers, ensuring that every interaction and product is tailored to deliver exceptional value.
                  </p>
                  <a class="tertiary-button" href="#">
                    Read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
