"use client";

import React, { useEffect, useState } from "react";
import GradualSpacing from "@/components/GradualSpacing";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/images/testimonial1.jpg";
import LastBg from "../assets/images/testimonial2.png";
import { PageEnd } from "../components/pageCommon/pageCommon";
import AOS from "aos";
import "aos/dist/aos.css";
import icon1 from "../assets/images/about-icon1.png";
import icon5 from "../assets/images/about-icon5.png";
import mask1 from "../assets/images/iconmask-1.png";

export default function Testimonials() {
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
                  <Link href="dealer-locator" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="relative z-10">
                  <GradualSpacing
                    className="top-banner-sec-heading"
                    text="Testimonials"
                    paddingLeft="pl-5"
                    paddingRight="pr-5"
                  />
                </div>
              </div>
            </div>
            <Image
              src={Banner}
              alt="Hero-Banner"
              className="absolute top-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-6 2xl:gap-10">
          <div className="upper-content-sec">
            <span
              className="section-heading"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Testimonial Statement
            </span>
            <div
              className="section-title-wrapper"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="section-title">Headline for testimonial</h3>
            </div>
            <div className="box-content-sec mt-6 2xl:mt-10">
              <p data-aos="fade-left" data-aos-duration="500">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
            </div>
          </div>
          <div className="testimonial-card-sec grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10">
            <div class="testimonial-card group">
              <Image className="colorHIcon" src={icon5} />
              <p className="testimonial-card-detail">
                "Initially we were only using Competitor 1’s tyres. We then
                fitted Birla Tyre Ultra Miler against Competitor 1 99 and found
                that the mileage of Ultra Miler was far better than Competitor
                1’s 99. In respect to CPKM we found Ultra Miler is better. We
                also did a fitment test of Ultra Drive against Competitor 1’s
                99. Results are surprising – in respect to CPKM or mileage Birla
                Ultra Drive is much better. Now we are regularly using Birla
                Tyre Ultra Drive and Ultra Miler in our vehicles and also
                recommend them to other owners."
              </p>
              <h2 className="testimonial-card-title">
                Anil Jolly, Jolly Transport Co.{" "}
              </h2>
              <span className="testimonial-card-place">
                Lucknow, November 2017
              </span>
              <Image className="maskIcon" src={mask1} />
            </div>
          </div>
        </div>
      </section>
      <PageEnd
        // Title="ESG"
        // TitleLink="/users/product"
        EndImageSrc={LastBg}
        // Background={true}
        // EndImageW="840"
        // EndImageH="200"
        EndImageAlt="bottom-img"
      />
      <Footer />
    </>
  );
}
