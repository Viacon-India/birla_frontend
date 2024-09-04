"use client";

import React, { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Banner from "../assets/images/life1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import BGTiger from "../assets/images/tiger-mask3.png";
import life9 from "../assets/images/life9.png";
import tigerMask from "../assets/images/tiger-mask2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import life2 from "../assets/images/life2.jpg";
import life3 from "../assets/images/life3.jpg";
import life4 from "../assets/images/life4.jpg";
import life5 from "../assets/images/life5.jpg";
import life6 from "../assets/images/life6.jpg";
import life7 from "../assets/images/life7.jpg";
import life8 from "../assets/images/life8.jpg";

export default function LifeAtBirla() {
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
                    text="Life At BIRLA TYRES"
                    padding="5"
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
      <section className="page-content-sec bg-[#F4F4F4]">
        <div className="container mx-auto flex flex-col">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 py-[60px]">
            <div className="w-full md:w-[50%] relative">
              <Image
                alt="mask"
                src={tigerMask}
                className="absolute left-0 top-0"
              />
              <span
                className="section-heading"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Employee Engagement
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                  Headline for employee engagement goes here
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
          <div className="gallery-sec flex flex-wrap justify-between gap-3 2xl:gap-4">
            <figure className="w-[29%] h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life2}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-[49%] h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life3}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-[19%] h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life4}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-[19%] h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life5}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-[19%] h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life6}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-[29%] h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life7}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-[29%] h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life8}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
          </div>
          <div className="section-layer !items-center pt-[60px] md:pt-[120px]">
            <div
              className="box-title-sec w-full md:w-[45%] relative"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Image
                alt="mask"
                src={tigerMask}
                className="absolute left-0 top-[-220px]"
              />
              <span className="section-heading">
                Be A Part of our talent pool
              </span>
              <div className="section-title-wrapper">
                <h3 className="section-title">What’s Your Talent?</h3>
              </div>
              <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6] mt-6">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="form-content"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <form className="w-full flex flex-col gap-3 md:gap-5">
                  <div>
                    <span className="section-heading">Job Opportunity</span>
                    <div className="section-title-wrapper">
                      <h3 className="section-title">Job Application Form</h3>
                    </div>
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      First name
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="Your preferred name"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      Last name
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="Your family name"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      Contact number
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="+91 (555) 000-0000"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      E-mail address
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      Your Specialization
                    </label>
                    <select className="contact-select" name="" id="">
                      <option value="">Tell us your role</option>
                      <option value="Query Type 1">Role Type 1</option>
                      <option value="Query Type 2">Role Type 2</option>
                      <option value="Query Type 3">Role Type 3</option>
                      <option value="Query Type 4">Role Type 4</option>
                    </select>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="contact-label" htmlFor="">
                      Upload resume
                    </label>
                    <div className="relative border border-[#727C8D] rounded-[8px]">
                      <input
                        className="contact-input w-full rounded-[8px]"
                        type="none"
                        placeholder="Upload Word/PDF file (size max 5 mb)"
                      />
                      <input type="file" />
                    </div>
                  </div>
                  <Link
                    href="thankyou"
                    className="primary-btn w-fit flip-animate-2"
                  >
                    <span data-hover="Submit Your Application">
                      Submit Your Application
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex pt-10 md:pt-[60px] 2xl:pt-[100px] overflow-hidden bg-[#F4F4F4]">
        <Image
          src={life9}
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
              Categories - TBB
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
