"use client";

import React, { useEffect, useState, useRef } from "react";
import { Autoplay, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Link from "next/link";
import Image from "next/image";
import Hero from "../../../assets/images/vision-hero.jpg";
import NextChapter from "../../../assets/images/vision-next-chapter.png";
import BGTiger from "../../../assets/images/tiger-mask3.png";
import Vision from "../../../assets/images/vision.jpg";
import Triangle1 from "../../../assets/images/triangle1.png";
import AOS from "aos";
import "aos/dist/aos.css";

import icon1 from "../../../assets/images/about-icon1.png";
import icon2 from "../../../assets/images/about-icon2.png";
import icon3 from "../../../assets/images/about-icon3.png";
import icon4 from "../../../assets/images/about-icon4.png";
import icon5 from "../../../assets/images/about-icon5.png";
import icon6 from "../../../assets/images/about-icon6.png";
import icon7 from "../../../assets/images/about-icon7.png";
import icon8 from "../../../assets/images/about-icon8.png";
import img1 from "../../../assets/images/mission-img-1.jpg";
import img2 from "../../../assets/images/mission-img-2.jpg";
import img3 from "../../../assets/images/mission-img-3.jpg";
import img4 from "../../../assets/images/mission-img-4.jpg";
import img5 from "../../../assets/images/mission-img-5.jpg";
import img6 from "../../../assets/images/mission-img-6.jpg";
import img7 from "../../../assets/images/mission-img-7.jpg";
import img8 from "../../../assets/images/mission-img-8.jpg";
import mask1 from "../../../assets/images/iconmask-1.png";
import mask2 from "../../../assets/images/iconmask-2.png";
import mask3 from "../../../assets/images/iconmask-3.png";
import mask4 from "../../../assets/images/iconmask-4.png";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

export default function Leadership() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Navbar />
      <PageBanner Title="Vision, Mission & Values" StaticBanner={Hero} />
      <section className="relative">
        <div className="container mx-auto">
          <div className="section-layer mt-8 md:mt-12 2xl::mt-[60px] overflow-hidden">
            <figure
              className="w-full md:w-[45%] h-[350px] md:h-[480px] relative glare"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-full h-full"
                src={Triangle1}
                alt="triangle"
              />
              <Image
                className="translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 w-[90%] h-[90%] rounded-[12px]"
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
          <div className="mt-8 md:mt-12 2xl:mt-[60px] flex flex-col gap-10 overflow-hidden">
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
                      <Image className="colorIcon" src={icon1} alt="img"/>
                      <Image className="colorHIcon" src={icon5} alt="img"/>
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
                    <Image className="maskIcon" src={mask1} alt="img"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon2} alt="img"/>
                      <Image className="colorHIcon" src={icon6} alt="img"/>
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
                    <Image className="maskIcon" src={mask2} alt="img"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon3} alt="img"/>
                      <Image className="colorHIcon" src={icon7} alt="img"/>
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
                    <Image className="maskIcon" src={mask3} alt="img"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon4} alt="img"/>
                      <Image className="colorHIcon" src={icon8} alt="img"/>
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
                    <Image className="maskIcon" src={mask4} alt="img"/>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="!hidden md:!flex">
                  <div class="new-about-card">
                    <div class="about-icon-wrapper">
                      <Image className="colorIcon" src={icon1} alt="img"/>
                      <Image className="colorHIcon" src={icon5} alt="img"/>
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
                    <Image className="maskIcon" src={mask1} alt="img"/>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="flex flex-col gap-10 relative">
            <div className="flex flex-col gap-3">
              <span className="section-heading">Values</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">Our Values</h3>
              </div>
            </div>
            <div className="mission-card-sec">
              <div className="sticky-container md:top-[120px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img5}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg1">
                      Integrity
                    </h2>
                    <p className="text-[16px] text-[#3D434C] pt-3">
                      We shall be thoroughly professional in all our activities
                      with absolute honesty and will never compromise on our
                      principles in any way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sticky-container top-[140px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img6}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg2">
                      Excellence 
                    </h2>
                    <p className="text-[16px] text-[#3D434C] pt-3">
                      We will always strive to achieve the best level of
                      performance in whatever we do and continuously improve
                      ourselves in order to reach that level.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sticky-container top-[160px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img7}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg3">Safety</h2>
                    <p className="text-[16px] text-[#3D434C] pt-3">
                      The safety of our stakeholders - employees, suppliers,
                      buyers and society, is of utmost importance to us and we
                      will never settle for any practice which puts it in
                      danger.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sticky-container top-[180px]">
                <div
                  className="mission-card"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[380px] md:h-[500px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src={img8}
                      alt="card-one"
                    />
                    <span className="mission-card-overlay"></span>
                  </figure>
                  <div className="mission-box">
                    <h2 className="vision-title title-before-svg4">
                      Sustainability
                    </h2>
                    <p className="text-[16px] text-[#3D434C] pt-3">
                      We will carry out all our business activities to
                      positively contribute to the creation of a better tomorrow
                      for our future generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEnd
        Title="R&D"
        TitleLink="/users/product"
        EndStaticImage={NextChapter}
      />
      <Footer />
    </>
  );
}
