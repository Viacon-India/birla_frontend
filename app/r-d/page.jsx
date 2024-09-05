"use client";

import React, { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Banner from "../assets/images/res1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import res2 from "../assets/images/res2.jpg";
import res3 from "../assets/images/res3.jpg";
import res4 from "../assets/images/res4.jpg";
import res5 from "../assets/images/res5.jpg";
import BGTiger from "../assets/images/tiger-mask3.png";
import Triangle1 from "../assets/images/triangle1.png";
import Triangle2 from "../assets/images/triangle2.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Research() {
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
                    text="Research & Development"
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
      <section className="mt-[60px]">
        <div className="container mx-auto mt-6 md:mt-10">
          <div className="section-layer !pb-[100px]">
            <figure
              className="w-full md:w-[45%] h-[480px] relative glare"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-full h-full"
                src={Triangle1}
                alt="triangle"
              />
              <Image
                className="translate-x-8 translate-y-8 w-[90%] h-[90%] rounded-[12px]"
                src={res5}
                alt="img"
              />
            </figure>
            <div className="box-content-sec relative md:w-[55%] flex flex-col">
              <span
                className="section-heading"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                starting off
              </span>
              <div
                className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h3 className="section-title">Introduction To R&D</h3>
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
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F8] py-[60px] mb-[80px] 2xl:mb-[60px]">
        <div className="container mx-auto">
          <div className="excellence-sec">
            <span className="section-heading">What’s next</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Our Capabilities</h3>
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
              <div class="w-full md:w-[45%] h-fit md:sticky top-[90px]">
                <figure
                  className="w-full mb-0"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <Image
                    className="w-full h-full object-cover rounded-[12px] shadow-xl"
                    src={res3}
                    alt="faqImg"
                  />
                </figure>
              </div>
              <div
                class="accordion-list-sec md:w-[55%]"
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
          </div>
        </div>
      </section>
      <section className="mb-[80px] 2xl:mb-[60px]">
        <div className="container mx-auto">
          <div className="section-layer">
            <div className="box-content-sec relative md:w-[55%] flex flex-col">
              <span
                data-aos="fade-left"
                data-aos-duration="1000"
                className="section-heading"
              >
                What’s next
              </span>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
              >
                <h3 className="section-title">Current Focus of R&D</h3>
              </div>
              <p data-aos="fade-left" data-aos-duration="1000">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices.
              </p>
              <p data-aos="fade-left" data-aos-duration="1500">
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                eget. Cras sollicitudin ligula at volutpat ultrices. Donec vitae
                mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            </div>
            <figure
              className="w-full md:w-[45%] h-[480px] relative glare"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-full h-full"
                src={Triangle2}
                alt="triangle"
              />
              <Image
                className="w-[90%] h-[90%] translate-y-8 translate-x-8 rounded-[12px]"
                src={res2}
                alt="img"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
        <Image
          src={res4}
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
            Next Page:
            <Link
              className="text-[#F5811E] font-medium flex items-center gap-1"
              href="/users/product"
            >
              Manufacturing
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
