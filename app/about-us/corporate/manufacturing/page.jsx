"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import SectionSelection from "../../../components/section/section";
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
import man5 from "../../../assets/images/man5.png";
import man6 from "../../../assets/images/man6.png";
import man8 from "../../../assets/images/man8.png";
import man7 from "../../../assets/images/man7.png";
import man9 from "../../../assets/images/man9.png";
import man10 from "../../../assets/images/man10.png";
import man11 from "../../../assets/images/man11.png";
import man12 from "../../../assets/images/man12.jpg";
import man13 from "../../../assets/images/man13.jpg";
import man14 from "../../../assets/images/man14.jpg";
import man15 from "../../../assets/images/man15.jpg";
import man16 from "../../../assets/images/man16.png";
import man17 from "../../../assets/images/man17.png";
import man18 from "../../../assets/images/man18.png";
import man19 from "../../../assets/images/man19.png";
import man20 from "../../../assets/images/man20.png";
import man21 from "../../../assets/images/man21.png";
import man22 from "../../../assets/images/man22.jpg";
import man23 from "../../../assets/images/man23.jpg";
import man24 from "../../../assets/images/man24.jpg";
import tiger from "../../../assets/images/tiger.png";
import tigerMask from "../../../assets/images/tiger-mask2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function Manufacturing({ params }) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/manufacturing"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="Manufacturing" StaticBanner={Banner} />
      {pageData?.section &&
        pageData.section.length > 0 &&
        pageData.section.map((section) => (
          <SectionSelection key={section.id} section={section} />
        ))}
      <section className="page-content-sec mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="manufacture-slider-sec">
            <div class="mt-5 md:mt-10 2xl:mt-12">
              <div className="section-title-wrapper">
                <h3 className="section-title">Core Safety Rules</h3>
              </div>
              <h3 className="text-[24px] 2xl:text-[32px] text-secondary mt-6 2xl:mt-8">
                For Employees:
              </h3>
              <Swiper
                navigation={true}
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
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 48,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 48,
                  },
                }}
                modules={[Autoplay, Navigation]}
                className="myValueSwiper !px-6 mt-3 2xl:mt-5"
              >
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man4}
                        alt="card"
                      />
                    </figure>
                    <h2>Wear mandated Personal Protective Equipment</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man5}
                        alt="card"
                      />
                    </figure>
                    <h2>Trained/authorised operates equipment/vehicle</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man6}
                        alt="card"
                      />
                    </figure>
                    <h2>Ensure Machine Guarding</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man7}
                        alt="card"
                      />
                    </figure>
                    <h2>Exercise Lock, Tag & Try</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man16}
                        alt="card"
                      />
                    </figure>
                    <h2>Fall protection is Must</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man17}
                        alt="card"
                      />
                    </figure>
                    <h2>Electrical Work by Certified & Authorised</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man18}
                        alt="card"
                      />
                    </figure>
                    <h2>Check Confined Space</h2>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="mb-6 md:mb-10 2xl:mb-[60px]">
              <h3 className="text-[24px] 2xl:text-[32px] text-secondary mt-6 2xl:mt-8">
                For Executives:
              </h3>
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
                    slidesPerView: 3,
                    spaceBetween: 48,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiperManufacture mt-3 2xl:mt-5"
              >
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man19}
                        alt="card"
                      />
                    </figure>
                    <h2>Permit to work for all Non-Standard activities</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man20}
                        alt="card"
                      />
                    </figure>
                    <h2>Risk assessment for all activities</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="phil-card">
                    <figure>
                      <Image
                        className="phil-card-image"
                        src={man21}
                        alt="card"
                      />
                    </figure>
                    <h2>SWI/SOP for all Standard activities</h2>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={man3} />
      <Footer />
    </>
  );
}
