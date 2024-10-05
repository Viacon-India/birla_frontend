"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Autoplay, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

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
import mask1 from "../../assets/images/iconmask-1.png";
import mask2 from "../../assets/images/iconmask-2.png";
import mask3 from "../../assets/images/iconmask-3.png";
import mask4 from "../../assets/images/iconmask-4.png";
import Triangle1 from "../../assets/images/triangle1.png";
import img5 from "../../assets/images/about-img-5.jpg";

import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

export default function NewAbout() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="new-about-slider sec-gap overflow-hidden h-[100%]">
      <div className="container mx-auto">
        {/* <span className="section-heading">company brief</span>
        <div className="section-title-wrapper">
          <GradualSpacing className="section-title" text="About Us" />
        </div>
        <Swiper
          speed={2000}
          effect={"fade"}
          spaceBetween={10}
          modules={[Autoplay, EffectFade, FreeMode, Thumbs, Controller]}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          className="mySwiper3 mt-5 2xl:mt-8"
        >
          <SwiperSlide>
            <Image src={img1} className="newAboutImg" alt="img"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img2} className="newAboutImg" alt="img"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img3} className="newAboutImg" alt="img"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img4} className="newAboutImg" alt="img"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img1} className="newAboutImg !hidden" alt="img"/>
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
                <h2 className="about-usp-title-2">Legacy of Trust</h2>
              </div>
              <p className="about-usp-detail-2">
                With a rich heritage spanning over three decades, Birla Tyres
                has built a reputation for reliability and excellence in the
                tyre industry. Over the past three decades, we have achieved
                numerous milestones, which is a testament to our commitment to
                quality and customer focus. We take pride in being a trusted
                partner for drivers across the country.
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
                <h2 className="about-usp-title-2">Vast Range of Products</h2>
              </div>
              <p className="about-usp-detail-2">
                Our company is proud to offer a comprehensive tyre portfolio
                that caters to the diverse and unique needs of our customers.
                With our extensive range of products, including Truck Bus Bias
                (TBB) tyres, agricultural tyres, and off-the-road tyres, we are
                equipped to provide solutions for various applications and
                industries.
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
                <h2 className="about-usp-title-2">
                  Commitment to Excellence
                </h2>
              </div>
              <p className="about-usp-detail-2">
                At Birla Tyres, we continuously invest in research and
                development to stay at the forefront of tyre technology. Our
                dedicated R&D team works tirelessly to innovate and introduce
                advanced features that enhance performance, safety and
                durability.
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
                <h2 className="about-usp-title-2">Customer Centricity</h2>
              </div>
              <p className="about-usp-detail-2">
                Our customer-centric approach is the cornerstone of our business
                philosophy. We prioritize understanding and addressing the
                unique needs and preferences of our customers, ensuring that
                every interaction and product is tailored to deliver exceptional
                value.
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
                <h2 className="about-usp-title-2">Legacy of Trust</h2>
              </div>
              <p className="about-usp-detail-2">
                With a rich heritage spanning over three decades, Birla Tyres
                has built a reputation for reliability and excellence in the
                tyre industry. Over the past three decades, we have achieved
                numerous milestones, which is a testament to our commitment to
                quality and customer focus. We take pride in being a trusted
                partner for drivers across the country.
              </p>
              <Link href="" className="about-button">
                Read more
              </Link>
              <Image className="maskIcon" src={mask1} alt="img"/>
            </div>
          </SwiperSlide>
        </Swiper> */}
        <div className="flex items-start flex-col-reverse md:flex-row gap-4 md:gap-8 2xl:gap-[60px]">
          <figure
            className="w-full md:w-[45%] h-[350px] md:h-[480px] relative glare"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <Image
              className="absolute -z-1 w-[90%] h-[90%]"
              src={Triangle1}
              alt="triangle"
            />
            <Image
              className="translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 w-[90%] h-[90%] rounded-[12px]"
              src={img5}
              alt="img"
            />
          </figure>
          <div className="box-content-sec relative md:w-[55%] flex flex-col">
            <span className="section-heading">CORPORATE</span>
            <div className="section-title-wrapper mb-6 md:mb-8 2xl:mb-10">
              <GradualSpacing className="section-title" text="About Us" />
            </div>
            <p data-aos="fade-left" data-aos-duration="1000">
            Birla Tyres was established in 1991 and has a rich heritage of excellence. Over the past 3 decades, Birla Tyres had built a reputation for quality and was recognized as one of the best tyre manufacturers in India.
            </p>
            <p data-aos="fade-left" data-aos-duration="1500">
            <strong>Dalmia Bharat Refractories Limited (DBRL)</strong> along with their strategic partner, <strong>Himadri Speciality Chemical Limited (HSCL)</strong> have acquired Birla Tyres Limited&apos;s tyre business through a resolution plan approved by the National Company Law Tribunal in October 2023. This strategic partnership marks the beginning of an exciting new chapter, where our combined expertise, resources, and innovative spirit will drive us to achieve greater heights.
            </p>
            <p data-aos="fade-left" data-aos-duration="1500">
            Under the visionary leadership of <strong>Mr. Anurag Choudhary</strong> and a robust management team, we are set to transform the tyre industry, delivering unparalleled value to our customers and stakeholders. With a shared vision and commitment to excellence, we look forward to a future filled with remarkable achievements and ground-breaking advancements.
            </p>
            <Link href="about-us/corporate/who-we-are" className="more-btn">
              Know More
            </Link>
            <div class="line-loader self-end">
              <div class="bar bar1"></div>
              <div class="bar bar2"></div>
              <div class="bar bar3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
