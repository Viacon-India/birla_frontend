"use client";

import React, { useEffect } from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
// import Banner from "../../../assets/images/res1.jpg";
import Link from "next/link";
import Image from "next/image";
import res2 from "../../../assets/images/res2.jpg";
import res3 from "../../../assets/images/res3.jpg";
import res4 from "../../../assets/images/res4.jpg";
import res5 from "../../../assets/images/res5.jpg";
import res6 from "../../../assets/images/res6.jpg";
import res7 from "../../../assets/images/res7.jpg";
import res8 from "../../../assets/images/res8.jpg";
import Triangle1 from "../../../assets/images/triangle1.png";
import Triangle2 from "../../../assets/images/triangle2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function Research() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <PageBanner
        Title="Research & Development"
        StaticBanner={"/assets/videos/research.mp4"}
        extension=".mp4"
      />
      <section className="mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden">
        <div className="container mx-auto">
          <div className="section-layer">
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
                className="absolute left-4 md:left-8 top-4 md:top-8 w-[90%] h-[90%] rounded-[12px]"
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
                Introduction to R&D
              </span>
              <div
                className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h3 className="section-title">Legacy of Innovation</h3>
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
      <section className="bg-[#F8F8F8] py-8 md:py-12 2xl:py-[60px] my-8 md:my-12 2xl:my-[60px] overflow-hidden">
        <div className="container mx-auto">
          <div className="excellence-sec">
            <span className="section-heading">R&D capabilities</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">
                Driven by Innovation & Excellence
              </h3>
            </div>
            <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
              <div class="w-full md:w-[45%] h-fit md:sticky top-[90px] grid grid-cols-2 gap-4 md:gap-6">
                <Image
                  className="w-full h-[240px] 2xl:h-[265px] rounded-[12px] col-span-2"
                  src={res6}
                  alt="img"
                />
                <Image
                  className="w-full h-[180px] 2xl:h-[265px] rounded-[12px]"
                  src={res7}
                  alt="img"
                />
                <Image
                  className="w-full h-[180px] 2xl:h-[265px] rounded-[12px]"
                  src={res8}
                  alt="img"
                />
              </div>

              <div
                class="accordion-list-sec md:w-[55%] h-[350px] md:h-[450px] 2xl:h-[600px] overflow-y-auto"
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
      <section className="mb-8 md:mb-12 2xl:mb-[60px] overflow-hidden">
        <div className="container mx-auto">
          <div className="section-layer">
            <div className="box-content-sec relative md:w-[55%] flex flex-col">
              <span
                data-aos="fade-left"
                data-aos-duration="1000"
                className="section-heading"
              >
                Key Focus Areas
              </span>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
              >
                <h3 className="section-title">What&apos;s Next?</h3>
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
              className="w-full md:w-[45%] h-[350px] md:h-[480px] relative glare"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-[90%] h-[90%] right-0"
                src={Triangle2}
                alt="triangle"
              />
              <Image
                className="w-[90%] h-[90%] absolute right-4 md:right-8 top-4 md:top-8 rounded-[12px]"
                src={res2}
                alt="img"
              />
            </figure>
          </div>
        </div>
      </section>
      <PageEnd
        Title="Manufacturing"
        TitleLink="/about-us/corporate/manufacturing"
        EndStaticImage={res4}
      />
      <Footer />
    </>
  );
}
