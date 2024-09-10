"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import { Float } from "../../../components/pageCommon/pageCommon";
import { MainButton } from "../../../components/pageCommon/pageCommon";
import Banner from "../../../assets/images/man1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import man2 from "../../../assets/images/man2.jpg";
import man3 from "../../../assets/images/man3.jpg";
import BGTiger from "../../../assets/images/tiger-mask3.png";
import man4 from "../../../assets/images/man4.jpg";
import man5 from "../../../assets/images/man5.jpg";
import man6 from "../../../assets/images/man6.jpg";
import man8 from "../../../assets/images/man8.png";
import man9 from "../../../assets/images/man9.png";
import man10 from "../../../assets/images/man10.png";
import man11 from "../../../assets/images/man11.png";
import man12 from "../../../assets/images/man12.jpg";
import man13 from "../../../assets/images/man13.jpg";
import man14 from "../../../assets/images/man14.jpg";
import man15 from "../../../assets/images/man15.jpg";
import tiger from "../../../assets/images/tiger.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function Manufacturing() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init();
    if (counter > 300) return;

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 300) {
          clearInterval(interval);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <Navbar />
      <PageBanner Title="Manufacturing" StaticBanner={Banner} />
      <section className="page-content-sec mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>{counter}</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>{counter}</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>{counter}</h3>
              </div>
              <p>lorem ipsum dolor ut amet maximus dilam</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="w-full md:w-[50%]">
              <span
                className="section-heading"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                our Manufacturing excellence
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                  Where quality meets innovation
                </h3>
              </div>
            </div>
            <div className="w-full md:w-[50%] box-content-sec">
              <p data-aos="fade-left" data-aos-duration="500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in.
              </p>
              <p data-aos="fade-left" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-10 relative">
            <figure className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-full p-7 z-10">
              <Image
                data-aos="zoom-in"
                data-aos-duration="2000"
                src={tiger}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man8}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-down-left"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man9}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man10}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man11}
                alt="img"
              />
            </figure>
          </div>
          <div className="manufacture-slider-sec">
            <span className="section-heading">our Safety Philosophy</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">
                Commitment to a safe & sustainable workplace
              </h3>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-6 2xl:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
              vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
              laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
              maximus mollis diam, vel varius sapien suscipit eget. Cras
              sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Donec vitae mi
              vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet
              pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus
              mollis diam.
            </p>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-6 2xl:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
              vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
              laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
              maximus mollis diam, vel varius sapien suscipit eget. Cras
              sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Donec vitae mi
              vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet
              pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus
              mollis diam.
            </p>
            <div class="mt-5 2xl:mt-8">
              <Swiper
                speed={2400}
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
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3.2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiperManufacture"
              >
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man4}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-1</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man5}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-2</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man6}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-3</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man4}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-1</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man5}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-2</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man6}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-3</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="mt-5 2xl:mt-8">
              <Swiper
                speed={1500}
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
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3.2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiperManufacture"
              >
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man12}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-1</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man13}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-2</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man14}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-3</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man12}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-1</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man13}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-2</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man14}
                        alt="card"
                      />
                    </figure>
                    <h2>Safety Philosophy-3</h2>
                    <p>
                      Maecenas dignissim justo eget nulla rutrum molestie
                      Maecenas dignissim justo eget nulla rutrum....
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F8] py-8 md:py-12 2xl:py-[60px] my-8 md:my-12 2xl:my-[60px] overflow-hidden">
        <div className="container mx-auto">
          <div className="excellence-sec">
            <span className="section-heading">our people</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">The heart of our manufacturing excellence</h3>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-4 md:mt-6 2xl:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
              <div class="w-full md:w-[45%] h-fit md:sticky top-[90px]">
                <figure
                  className="w-full h-[300px] md:h-[450px] 2xl:h-[600px] mb-0"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <Image
                    className="w-full h-full object-cover rounded-[12px] shadow-xl"
                    src={man15}
                    alt="faqImg"
                  />
                </figure>
              </div>
              <div
                class="accordion-list-sec h-[300px] md:h-[450px] 2xl:h-[600px] overflow-y-auto md:w-[55%]"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title">Capability point 1</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 2</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 3</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 4</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 5</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Capability point 6</div>
                  <div className="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-4 md:mt-6 2xl:mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget.</p>
          </div>
        </div>
      </section>
      <PageEnd
        Title="Leadership"
        TitleLink="/users/product"
        EndStaticImage={man3}
      />
      <Footer />
    </>
  );
}
