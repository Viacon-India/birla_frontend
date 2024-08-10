
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade'
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import img1 from "../../assets/images/about-img-1.jpg"
import img2 from "../../assets/images/about-img-2.jpg"
import img3 from "../../assets/images/about-img-3.jpg"
import img4 from "../../assets/images/about-img-4.jpg"
import trust from "../../assets/images/about-icon1.png";
import icon from "../../assets/images/about-icon2.png";
import icon1 from "../../assets/images/about-icon3.png";
import icon2 from "../../assets/images/about-icon4.png";


export default function NewAbout() {
  return (
    <>
      <section class="new-about-sec relative z-20">
        <div class="flex items-center mt-[120px] relative">
        <div class="about-description-sec w-[35%] pl-[100px]">
          <svg
            class="absolute left-0 top-0"
            width="211"
            height="240"
            viewBox="0 0 211 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.3799 0.933924C77.413 0.685517 77.6249 0.5 77.8755 0.5H119.858C120.16 0.5 120.393 0.766337 120.353 1.06608L104.62 119.066C104.587 119.314 104.375 119.5 104.124 119.5H62.1422C61.8398 119.5 61.6066 119.234 61.6466 118.934L77.3799 0.933924Z"
              stroke="#F5811E"
            />
            <path
              d="M16.3799 120.934C16.413 120.686 16.6249 120.5 16.8755 120.5H58.8578C59.1602 120.5 59.3934 120.766 59.3534 121.066L43.6201 239.066C43.587 239.314 43.3751 239.5 43.1245 239.5H1.14218C0.839789 239.5 0.606603 239.234 0.646569 238.934L16.3799 120.934Z"
              stroke="#F5811E"
            />
            <path
              d="M167.38 0.933924C167.413 0.685517 167.625 0.5 167.876 0.5H209.858C210.16 0.5 210.393 0.766337 210.353 1.06608L194.62 119.066C194.587 119.314 194.375 119.5 194.124 119.5H152.142C151.84 119.5 151.607 119.234 151.647 118.934L167.38 0.933924Z"
              stroke="#2E3192"
            />
            <path
              d="M106.38 120.934C106.413 120.686 106.625 120.5 106.876 120.5H148.858C149.16 120.5 149.393 120.766 149.353 121.066L133.62 239.066C133.587 239.314 133.375 239.5 133.124 239.5H91.1422C90.8398 239.5 90.6066 239.234 90.6466 238.934L106.38 120.934Z"
              stroke="#2E3192"
            />
          </svg>
          <h3 class="section-heading">
            ABOUT Birla tyres <span class="loader-line"></span>
          </h3>
          <h2 class="section-title">
            The journey of the global innovative tyre conglomerate. 
          </h2>
        </div>
        <div class="about-slider-sec w-[65%]">
        <Swiper
        navigation={true}
        loop={true}
        speed={3000}
        effect={'fade'}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper !relative"
      >
        <SwiperSlide>
        <div class="about-card">
                  <figure class="about-img-part">
                    <Image
                      class="w-full h-full object-cover"
                      src={img1}
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                  <p
                    style={{
                      backgroundImage: `url(${trust.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>

                    <h2 class="about-card-title">Legacy of Trust</h2>
                    <p class="about-card-desc">
                      With a rich heritage spanning over three decades, Birla
                      Tyres has built a reputation for reliability and
                      excellence in the tyre industry. Over the past three
                      decades, we have achieved numerous milestones, which is a
                      testament to our commitment to quality and customer focus.
                      We take pride in being a trusted partner for drivers
                      across the country.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="about-card">
                  <figure class="about-img-part">
                  <Image
                      class="w-full h-full object-cover"
                      src={img2}
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                  <p
                    style={{
                      backgroundImage: `url(${icon.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>

                    <h2 class="about-card-title">Vast Range of Products</h2>
                    <p class="about-card-desc">
                      Our company is proud to offer a comprehensive tyre
                      portfolio that caters to the diverse and unique needs of
                      our customers. With our extensive range of products,
                      including Truck Bus Bias (TBB) tyres, agricultural tyres,
                      and off-the-road tyres, we are equipped to provide
                      solutions for various applications and industries.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="about-card">
                  <figure class="about-img-part">
                  <Image
                      class="w-full h-full object-cover"
                      src={img3}
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                  <p
                    style={{
                      backgroundImage: `url(${icon1.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                    <h2 class="about-card-title">
                      Commitment to Quality Excellence
                    </h2>
                    <p class="about-card-desc">
                      Quality is at the core of everything we do. The name
                      “Birla Tyres” is associated with quality and trust in the
                      market, even for customers who have not used our tyres in
                      the past.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="about-card">
                  <figure class="about-img-part">
                  <Image
                      class="w-full h-full object-cover"
                      src={img4}
                      alt="banner"
                    />
                  </figure>
                  <div class="about-detail-sec">
                  <p
                    style={{
                      backgroundImage: `url(${icon2.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                    <h2 class="about-card-title">Customer-Centric Approach</h2>
                    <p class="about-card-desc">
                      Our company is proud to offer a comprehensive tyre
                      portfolio that caters to the diverse and unique needs of
                      our customers. With our extensive range of products,
                      including Truck Bus Bias (TBB) tyres, agricultural tyres,
                      and off-the-road tyres, we are equipped to provide
                      solutions for various applications and industries.
                    </p>
                    <a class="read-btn" href="">
                      Read More{" "}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.5"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
      </section>
    </>
  );
}




