"use client";

import React, { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Banner from "../assets/images/join1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import join2 from "../assets/images/join2.png";
import join3 from "../assets/images/join3.jpg";
import BGTiger from "../assets/images/tiger-mask3.png";
import join4 from "../assets/images/join4.jpg";
import join5 from "../assets/images/join5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function JoinUs() {
  useEffect(() => {
    AOS.init();
  }, []);

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
                    text="why join us"
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
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="flex gap-4 md:gap-10 flex-col md:flex-row items-center">
            <figure
              className="w-full md:w-1/2"
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              <Image
                className="w-full h-full object-cover"
                src={join2}
                alt="img"
              />
            </figure>
            <div className="box-content-sec relative md:w-[50%]">
              <span className="section-heading" data-aos="fade-left" data-aos-duration="1200">Talent Philosophy</span>
              <div className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10" data-aos="fade-left" data-aos-duration="1400">
                <h3 className="section-title">
                  Headline for talent philosophy goes here
                </h3>
              </div>
              <p data-aos="fade-left" data-aos-duration="1600">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <p data-aos="fade-left" data-aos-duration="1800">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget.
              </p>

              <Link
                href="#"
                className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2 mt-7"
                data-aos="fade-left" data-aos-duration="2000"
              >
                <span data-hover="Explore Career Opportunities">
                  Explore Career Opportunities
                </span>
              </Link>
            </div>
          </div>
          <div className="testimonial-sec">
            <span className="section-heading">
              Headline for Our Talents goes here
            </span>
            <div className="section-title-wrapper">
              <h3 className="section-title">
                Headline for Our Talents goes here
              </h3>
            </div>
            <div className="grid grid-cols1 md:grid-cols-4 gap-6 md:gap-10 mt-6 md:mt-10 overflow-hidden">
              <div className="vast-card" data-aos="fade-down" data-aos-duration="500">
                <figure>
                  <Image className="vast-card-image" src={join3} alt="card" />
                </figure>
                <h2>Testimonial-1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
              <div className="vast-card" data-aos="fade-down" data-aos-duration="1000">
                <figure>
                  <Image className="vast-card-image" src={join4} alt="card" />
                </figure>
                <h2>Testimonial-2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
              <div className="vast-card" data-aos="fade-down" data-aos-duration="1500">
                <figure>
                  <Image className="vast-card-image" src={join3} alt="card" />
                </figure>
                <h2>Testimonial-3</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
              <div className="vast-card" data-aos="fade-down" data-aos-duration="2000">
                <figure>
                  <Image className="vast-card-image" src={join4} alt="card" />
                </figure>
                <h2>Testimonial-4</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
        <Image
          src={join5}
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
            Next Page :
            <Link
              className="text-[#F5811E] font-medium flex items-center gap-1"
              href="/users/product"
            >
              Life at BIRLA TYRES
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
