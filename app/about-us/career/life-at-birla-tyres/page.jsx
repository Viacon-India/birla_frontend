"use client";

import React, { useEffect } from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Banner from "../../../assets/images/life1.jpg";
import Link from "next/link";
import Image from "next/image";
import life9 from "../../../assets/images/life9.png";
import tigerMask from "../../../assets/images/tiger-mask2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import life2 from "../../../assets/images/life2.jpg";
import life3 from "../../../assets/images/life3.jpg";
import life4 from "../../../assets/images/life4.jpg";
import life5 from "../../../assets/images/life5.jpg";
import life6 from "../../../assets/images/life6.jpg";
import life7 from "../../../assets/images/life7.jpg";
import life8 from "../../../assets/images/life8.jpg";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function LifeAtBirla() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <PageBanner Title="Life At BIRLA TYRES" StaticBanner={Banner} />
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
          <div className="gallery-sec grid grid-cols-4 gap-3 2xl:gap-4">
            <figure className="w-full h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life2}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-full h-[316px] mb-0 col-span-2" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life3}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-full h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life4}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-full h-[316px] mb-0 col-span-2" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life5}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-full h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life6}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure className="w-full h-[316px] mb-0" data-aos="flip-left" data-aos-duration="1000">
              <Image
                src={life7}
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
      <PageEnd
        Title="Categories - TBB"
        TitleLink="/users/product"
        EndStaticImage={life9}
        Background={true}
      />
      <Footer />
    </>
  );
}
