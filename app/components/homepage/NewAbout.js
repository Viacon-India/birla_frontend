"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
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
import mask1 from "../../assets/images/iconmask-1.png"
import mask2 from "../../assets/images/iconmask-2.png"
import mask3 from "../../assets/images/iconmask-3.png"
import mask4 from "../../assets/images/iconmask-4.png"

import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

export default function NewAbout() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="new-about-slider mt-[100px]">
      <div className="container mx-auto">
        <span className="section-heading">company brief</span>
        <div className="section-title-wrapper">
          <GradualSpacing className="section-title" text="About Us" />
        </div>
        <Swiper
          loop={true}
          speed={2000}
          effect={"fade"}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, EffectFade, FreeMode, Thumbs]}
          className="mySwiper2 mt-8"
        >
          <SwiperSlide>
            <Image src={img1} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img2} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img3} className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img4} className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>

        <Swiper
          loop={true}
          slidesPerView={2.1}
          speed={2000}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={setThumbsSwiper}
          effect={"fade"}
          watchSlidesProgress={true}
          modules={[Autoplay, FreeMode, Thumbs]}
          className="mySwiper translate-y-[-30%] w-[96%]"
        >
          <SwiperSlide>
            <div class="new-about-card">
              <Image className="colorIcon" src={icon1} />
              <Image className="colorHIcon" src={icon5} />
              <h2 className="about-usp-title-2">Legacy of Trust</h2>
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
              <Image className="maskIcon" src={mask1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="new-about-card">
              <Image className="colorIcon" src={icon2} />
              <Image className="colorHIcon" src={icon6} />
              <h2 className="about-usp-title-2">Vast Range of Products</h2>
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
              <Image className="maskIcon" src={mask2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="new-about-card">
              <Image className="colorIcon" src={icon3} />
              <Image className="colorHIcon" src={icon7} />
              <h2 className="about-usp-title-2">
                Commitment to Quality Excellence
              </h2>
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
              <Image className="maskIcon" src={mask3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="new-about-card">
              <Image className="colorIcon" src={icon4} />
              <Image className="colorHIcon" src={icon8} />
              <h2 className="about-usp-title-2">Customer-Centric Approach</h2>
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
              <Image className="maskIcon" src={mask4} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
