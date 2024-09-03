"use client";

import React, { useEffect, useState } from "react";
import { Autoplay, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import Image from "next/image";
import Float from "../components/float/float";
import Hero from "../assets/images/vision-hero.jpg";
import NextChapter from "../assets/images/vision-next-chapter.png";
import BGTiger from "../assets/images/tiger-mask3.png";
import Vision from "../assets/images/vision.jpg";
import MissionBackground from "../assets/images/mission-background.jpg";
import ValuesBackground from "../assets/images/values-background.jpg";
import Triangle1 from "../assets/images/triangle1.png";
import AOS from "aos";
import "aos/dist/aos.css";

import icon1 from "../assets/images/about-icon1.png";
import icon2 from "../assets/images/about-icon2.png";
import icon3 from "../assets/images/about-icon3.png";
import icon4 from "../assets/images/about-icon4.png";
import icon5 from "../assets/images/about-icon5.png";
import icon6 from "../assets/images/about-icon6.png";
import icon7 from "../assets/images/about-icon7.png";
import icon8 from "../assets/images/about-icon8.png";
import img1 from "../assets/images/mission-img-1.jpg";
import img2 from "../assets/images/mission-img-2.jpg";
import img3 from "../assets/images/mission-img-3.jpg";
import img4 from "../assets/images/mission-img-4.jpg";
import mask1 from "../assets/images/iconmask-1.png";
import mask2 from "../assets/images/iconmask-2.png";
import mask3 from "../assets/images/iconmask-3.png";
import mask4 from "../assets/images/iconmask-4.png";

import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

export default function Leadership() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Navbar />
      <section className="top-banner-sec">
        <div className="relative">
          <Float />
          <div className="relative">
            <div className="w-full h-[40vh] md:h-[80vh] flex items-end">
              <div class="container mx-auto flex flex-col justify-between h-full pt-5 pb-[60px]">
                <div class="flex flex-col gap-5 relative z-10">
                  <Link href="" className="primary-btn-1">
                    Find a Tyre
                  </Link>
                  <Link href="" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="relative z-10">
                  <GradualSpacing
                    className="top-banner-sec-heading"
                    text="Vision, Mission & Values"
                    padding="5"
                  />
                </div>
              </div>
            </div>
            <Image
              src={Hero}
              alt="Hero-Banner"
              className="absolute top-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="container mx-auto">
          <div className="section-layer md:mt-[60px]">
            <figure
              className="w-full md:w-[45%] h-[480px] relative glare"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-full h-full"
                src={Triangle1}
                alt="triangle"
              />
              <Image
                className="translate-x-8 translate-y-8 w-[90%] h-[90%] rounded-[12px]"
                src={Vision}
                alt="img"
              />
            </figure>
            <div className="box-content-sec relative md:w-[55%] flex flex-col">
              <span className="section-heading">Vision</span>
              <div className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10">
                <h3
                  className="section-title"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  Our Vision
                </h3>
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <p data-aos="fade-left" data-aos-duration="1500">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget.
              </p>
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            </div>
          </div>
          <div className="mt-[60px] flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="section-heading">Mission</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">Our Mission</h3>
              </div>
            </div>
            <div className="new-about-slider">
              <Swiper
                speed={2000}
                effect={"fade"}
                spaceBetween={10}
                modules={[Autoplay, EffectFade, FreeMode, Thumbs, Controller]}
                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
                className="mySwiper3"
              >
                <SwiperSlide>
                  <Image
                    src={img1}
                    className="newAboutImg object-cover"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={img2}
                    className="newAboutImg object-cover"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={img3}
                    className="newAboutImg object-cover"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={img4}
                    className="newAboutImg object-cover"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={img1}
                    className="newAboutImg !hidden"
                    alt="image"
                  />
                </SwiperSlide>
              </Swiper>

              <Swiper
                speed={2000}
                autoplay={{
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, FreeMode, Thumbs, Controller]}
                thumbs={{ swiper: thumbsSwiper }}
                effect={"fade"}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 2.1,
                  },
                }}
                className="mySwiper2 translate-y-[-25%] md:translate-y-[-40%] 2xl:translate-y-[-30%] w-[100%] md:w-[96%]"
              >
                <SwiperSlide>
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon1} />
                      <Image className="colorHIcon" src={icon5} />
                      <h2 className="about-usp-title-2">Mission headline 1</h2>
                    </div>
                    <p className="about-usp-detail-2">
                      With a rich heritage spanning over three decades, Birla
                      Tyres has built a reputation for reliability and
                      excellence in the tyre industry. Over the past three
                      decades, we have achieved numerous milestones, which is a
                      testament to our commitment to quality and customer focus.
                      We take pride in being a trusted partner for drivers
                      across the country.
                    </p>
                    <Link href="" className="about-button">
                      Read more
                    </Link>
                    <Image className="maskIcon" src={mask1} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon2} />
                      <Image className="colorHIcon" src={icon6} />
                      <h2 className="about-usp-title-2">Mission headline 2</h2>
                    </div>
                    <p className="about-usp-detail-2">
                      Our company is proud to offer a comprehensive tyre
                      portfolio that caters to the diverse and unique needs of
                      our customers. With our extensive range of products,
                      including Truck Bus Bias (TBB) tyres, agricultural tyres,
                      and off-the-road tyres, we are equipped to provide
                      solutions for various applications and industries.
                    </p>
                    <Link href="" className="about-button">
                      Read more
                    </Link>
                    <Image className="maskIcon" src={mask2} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon3} />
                      <Image className="colorHIcon" src={icon7} />
                      <h2 className="about-usp-title-2">Mission headline 3</h2>
                    </div>
                    <p className="about-usp-detail-2">
                      At Birla Tyres, we continuously invest in research and
                      development to stay at the forefront of tyre technology.
                      Our dedicated R&D team works tirelessly to innovate and
                      introduce advanced features that enhance performance,
                      safety and durability.
                    </p>
                    <Link href="" className="about-button">
                      Read more
                    </Link>
                    <Image className="maskIcon" src={mask3} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon4} />
                      <Image className="colorHIcon" src={icon8} />
                      <h2 className="about-usp-title-2">Mission headline 4</h2>
                    </div>
                    <p className="about-usp-detail-2">
                      Our customer-centric approach is the cornerstone of our
                      business philosophy. We prioritize understanding and
                      addressing the unique needs and preferences of our
                      customers, ensuring that every interaction and product is
                      tailored to deliver exceptional value.
                    </p>
                    <Link href="" className="about-button">
                      Read more
                    </Link>
                    <Image className="maskIcon" src={mask4} />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!hidden md:!flex">
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon1} />
                      <Image className="colorHIcon" src={icon5} />
                      <h2 className="about-usp-title-2">Mission headline 1</h2>
                    </div>
                    <p className="about-usp-detail-2">
                      With a rich heritage spanning over three decades, Birla
                      Tyres has built a reputation for reliability and
                      excellence in the tyre industry. Over the past three
                      decades, we have achieved numerous milestones, which is a
                      testament to our commitment to quality and customer focus.
                      We take pride in being a trusted partner for drivers
                      across the country.
                    </p>
                    <Link href="" className="about-button">
                      Read more
                    </Link>
                    <Image className="maskIcon" src={mask1} />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="section-heading">Values</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">Our Values</h3>
              </div>
            </div>
            <div className="mission-card-sec">
              <div className="mission-card sticky top-0">
                <figure className="w-full h-[500px]">
                  <Image
                    className="w-full h-full object-cover rounded-[16px]"
                    src={img1}
                    alt="card-one"
                  />
                </figure>
                <div className="mission-box">
                  <h2 className="vision-title">Value point 1</h2>
                  <p className="text-[16px] text-[#3D434C] pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="mission-card">
                <figure className="w-full h-[500px]">
                  <Image
                    className="w-full h-full object-cover rounded-[16px]"
                    src={img2}
                    alt="card-one"
                  />
                </figure>
                <div className="mission-box">
                  <h2 className="vision-title">Value point 1</h2>
                  <p className="text-[16px] text-[#3D434C] pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="mission-card">
                <figure className="w-full h-[500px]">
                  <Image
                    className="w-full h-full object-cover rounded-[16px]"
                    src={img3}
                    alt="card-one"
                  />
                </figure>
                <div className="mission-box">
                  <h2 className="vision-title">Value point 1</h2>
                  <p className="text-[16px] text-[#3D434C] pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              {/* <div className="mission-card">
                <figure className="w-full h-[500px]">
                  <Image
                    className="w-full h-full object-cover rounded-[16px]"
                    src={img4}
                    alt="card-one"
                  />
                </figure>
                <div className="mission-box">
                  <h2 className="vision-title">Value point 1</h2>
                  <p className="text-[16px] text-[#3D434C] pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
        <Image
          src={NextChapter}
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
            Next Page:
            <Link
              className="text-[#F5811E] font-medium flex items-center gap-1"
              href="/users/product"
            >
              Vision, Mission & Values
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
