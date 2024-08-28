import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Banner from "../assets/images/who1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import tigerMask from "../assets/images/tiger-mask.png";
import who2 from "../assets/images/who2.jpg";
import who3 from "../assets/images/who3.jpg";
import who4 from "../assets/images/who4.jpg";
import who5 from "../assets/images/who5.jpg";
import who6 from "../assets/images/who6.jpg";
import who7 from "../assets/images/who7.jpg";
import who8 from "../assets/images/who8.jpg";
import who9 from "../assets/images/who9.jpg";
import who10 from "../assets/images/who10.jpg";
import BGTiger from "../assets/images/tiger-mask3.png";

export default function WhoWeAre() {
  return (
    <>
      <Navbar />
      <section className="top-banner-sec">
        <div className="relative">
          <Float />
          <div className="relative">
            <div className="w-full h-[40vh] md:h-[83vh] flex items-end 2xl:pb-[60px]">
              <div class="container mx-auto flex flex-col justify-around 2xl:justify-between h-full">
                <div class="flex flex-col gap-5 relative z-10">
                  <Link href="" className="primary-btn-1">
                    Find a Tyre
                  </Link>
                  <Link href="" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="relative z-10">
                  <GradualSpacing
                    className="top-banner-sec-heading"
                    text="WHO WE ARE"
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
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto">
          <span className="section-heading">Who we are</span>
          <div className="section-title-wrapper">
            <GradualSpacing
              className="section-title"
              text="Headline for who we are goes here"
            />
          </div>
          <div className="sub-section-wrapper">
            <div className="section-layer">
              <div className="box-title-sec w-full md:w-[30%] relative">
                <Image
                  alt="mask"
                  src={tigerMask}
                  className="absolute left-0 top-0"
                />
                <h3 className="text-[#1A1D21] text-[36px] font-bold">
                  Tagline for the who we are section goes here
                </h3>
              </div>
              <div className="box-content-sec w-full md:w-[70%] relative">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices.
                </p>
              </div>
            </div>
            <div className="section-layer">
              <figure>
                <Image src={who2} alt=""></Image>
              </figure>
              <figure>
                <Image src={who3} alt=""></Image>
              </figure>
            </div>
            <div className="section-layer">
              <figure className="w-full md:w-[45%]">
                <Image src={who4} alt="img" />
              </figure>
              <div className="box-content-sec relative md:w-[55%]">
                <span className="section-heading">Values & People</span>
                <div className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10">
                  <GradualSpacing
                    className="section-title"
                    text="Headline for Himadri"
                  />
                </div>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget.
                </p>

                <Link href="#" className="more-btn">
                  Know More
                </Link>
                <svg
                  className="absolute right-0 bottom-0"
                  width="128"
                  height="38"
                  viewBox="0 0 128 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.22649"
                    y1="36.9704"
                    x2="36.5818"
                    y2="1.61505"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="41.582"
                    y1="36.9704"
                    x2="69.8662"
                    y2="8.68611"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="74.8661"
                    y1="36.9704"
                    x2="96.0793"
                    y2="15.7572"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="101.079"
                    y1="36.9704"
                    x2="115.221"
                    y2="22.8282"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="120.222"
                    y1="36.9704"
                    x2="127.293"
                    y2="29.8993"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <div className="section-layer">
              <div className="box-content-sec relative md:w-[55%]">
                <span className="section-heading">Product development</span>
                <div className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10">
                  <GradualSpacing
                    className="section-title"
                    text="Headline for DBRL"
                  />
                </div>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget. Cras sollicitudin ligula at volutpat ultrices. Donec
                  vitae mi vulputate, suscipit urna in, malesuada nisl.
                </p>
                <p>
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl, et pulvinar massa eleifend
                  sed. Curabitur maximus mollis diam, vel varius sapien suscipit
                  eget.
                </p>

                <Link href="#" className="more-btn">
                  Know More
                </Link>
                <svg
                  className="absolute right-0 bottom-0"
                  width="128"
                  height="38"
                  viewBox="0 0 128 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.22649"
                    y1="36.9704"
                    x2="36.5818"
                    y2="1.61505"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="41.582"
                    y1="36.9704"
                    x2="69.8662"
                    y2="8.68611"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="74.8661"
                    y1="36.9704"
                    x2="96.0793"
                    y2="15.7572"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="101.079"
                    y1="36.9704"
                    x2="115.221"
                    y2="22.8282"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                  <line
                    x1="120.222"
                    y1="36.9704"
                    x2="127.293"
                    y2="29.8993"
                    stroke="#F5811E"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <figure className="w-full md:w-[45%]">
                <Image src={who5} alt="img" />
              </figure>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6] mb-3 md:mb-10 2xl:mb-[60px]">
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
          </div>
        </div>
      </section>
      <section className="vast-product-sec bg-[#F4F5F6] py-6 md:py-10 2xl:py-[60px]">
        <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
          <span className="section-heading">OUR VAST RANGE OF PRODUCTS</span>
          <div className="section-title-wrapper">
            <GradualSpacing
              className="section-title"
              text="Tailored to Your Needs"
            />
          </div>
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
            laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
            maximus mollis diam, vel varius sapien suscipit eget. Cras
            sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit
            urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et
            pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel
            varius sapien suscipit eget. Cras sollicitudin ligula at volutpat
            ultrices.
          </p>
          <div className="grid grid-cols1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="vast-card">
              <figure>
                <Image className="vast-card-image" src={who6} alt="card" />
              </figure>
              <h2>Truck Bus Bias</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl.
              </p>
            </div>
            <div className="vast-card">
              <figure>
                <Image className="vast-card-image" src={who7} alt="card" />
              </figure>
              <h2>Off The Road</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl.
              </p>
            </div>
            <div className="vast-card">
              <figure>
                <Image className="vast-card-image" src={who8} alt="card" />
              </figure>
              <h2>Agriculture</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                Pellentesque laoreet pretium nisl.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="excellence-sec pt-6 md:pt-10 2xl:pt-[60px]">
        <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
          <span className="section-heading">What Sets us Apart</span>
          <div className="section-title-wrapper">
            <GradualSpacing
              className="section-title"
              text="Our Path to Excellence"
            />
          </div>
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
            laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
            maximus mollis diam, vel varius sapien suscipit eget. Cras
            sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit
            urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et
            pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel
            varius sapien suscipit eget. Cras sollicitudin ligula at volutpat
            ultrices.
          </p>
          <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
            <div class="w-full md:w-[50%] h-fit md:sticky top-[90px]">
              <figure className="w-full mb-0">
                <Image
                  className="w-full h-full object-cover rounded-[12px]"
                  src={who9}
                  alt="faqImg"
                />
              </figure>
            </div>
            <div class="accordion-list-sec md:w-[50%]">
              <div className="collapse collapse-plus">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title">Capability point 1</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Donec vitae mi vulputate, suscipit urna in,
                    malesuada nisl. Pellentesque laoreet pretium nisl. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
            laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
            maximus mollis diam, vel varius sapien suscipit eget. Cras
            sollicitudin ligula at volutpat ultrices.
          </p>
        </div>
      </section>
      <section className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
        <Image
          src={who10}
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
              Vision, Mission & Values
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
