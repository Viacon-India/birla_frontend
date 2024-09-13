"use client";

import React, { useEffect } from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Link from "next/link";
import Image from "next/image";
import NextChapter from "../../../assets/images/next-chapter.png";
import Director1 from "../../../assets/images/director-1.jpg";
import Director2 from "../../../assets/images/director-2.jpg";
import Director3 from "../../../assets/images/director-3.jpg";
import BGTiger2 from "../../../assets/images/tiger-mask2.png";
import Hero from "../../../assets/images/leadership-hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Triangle1 from "../../../assets/images/triangle1.png";
import Triangle2 from "../../../assets/images/triangle2.png";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";
import coma1 from "../../../assets/images/coma1.png";
import coma2 from "../../../assets/images/coma2.png";

export default function Leadership() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="Leadership" StaticBanner={Hero} />

      <section className="mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden bg-[#F8F8F8]">
        <div className="container mx-auto flex flex-col gap-4 md:gap-10 2xl:gap-[60px]">

          <div className="flex flex-col md:flex-row items-start gap-10 p-10 bg-white border border-[#C9CDD3] rounded-[24px]">
            <figure
              className="w-full md:w-[50%] h-[480px] relative glare"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-full h-full"
                src={Triangle1}
                alt="triangle"
              />
              <Image
                className="absolute left-4 md:left-8 top-4 md:top-8 w-[90%] h-[90%] rounded-[12px]"
                src={Director1}
                alt="img"
              />
            </figure>
            <div className="flex flex-col justify-center gap-2 md:gap-6 w-[50%] relative overflow-hidden">
              <div className="flex flex-col gap-6">
                <Image
                  className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                  src={BGTiger2}
                  alt=""
                />
                <div className="flex gap-2 flex-col">
                  <h2
                    className="text-[48px] leading-[48px] font-bold text-secondary"
                    data-aos="fade-left"
                    data-aos-duration="200"
                  >
                    Anurag Choudhary
                  </h2>
                  <h3
                    className="uppercase text-primary font-medium text-2xl"
                    data-aos="fade-left"
                    data-aos-duration="400"
                  >
                    Director
                  </h3>
                </div>
                <div
                  class="flex gap-2"
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <p className="text-[#1A1D21] text-[24px] font-medium">
                    Follow:
                  </p>
                  <Link href="#">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 40 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.5455 0.5H5.45455C2.44208 0.5 0 2.94208 0 5.95455V35.0455C0 38.0579 2.44208 40.5 5.45455 40.5H34.5455C37.5579 40.5 40 38.0579 40 35.0455V5.95455C40 2.94208 37.5579 0.5 34.5455 0.5Z"
                        fill="#0077B5"
                      />
                      <path
                        d="M14.409 11.4091C14.409 12.0833 14.2091 12.7425 13.8345 13.3031C13.4599 13.8637 12.9274 14.3007 12.3045 14.5587C11.6816 14.8167 10.9961 14.8842 10.3348 14.7527C9.67353 14.6211 9.06609 14.2965 8.58932 13.8197C8.11255 13.3429 7.78787 12.7355 7.65633 12.0742C7.52479 11.4129 7.5923 10.7274 7.85032 10.1045C8.10835 9.48156 8.5453 8.94913 9.10592 8.57454C9.66655 8.19994 10.3257 8 10.9999 8C11.9041 8 12.7712 8.35917 13.4105 8.9985C14.0498 9.63783 14.409 10.5049 14.409 11.4091Z"
                        fill="white"
                      />
                      <path
                        d="M13.6363 17.0908V32.1522C13.6369 32.2633 13.6155 32.3734 13.5734 32.4762C13.5313 32.5791 13.4693 32.6726 13.391 32.7513C13.3126 32.8301 13.2195 32.8926 13.1169 32.9353C13.0143 32.978 12.9042 32.9999 12.7931 32.9999H9.19995C9.08884 33.0002 8.97877 32.9785 8.87605 32.9362C8.77334 32.8938 8.68002 32.8315 8.60145 32.7529C8.52289 32.6744 8.46062 32.5811 8.41824 32.4783C8.37586 32.3756 8.3542 32.2656 8.3545 32.1545V17.0908C8.3545 16.8666 8.44357 16.6515 8.60212 16.493C8.76068 16.3344 8.97572 16.2454 9.19995 16.2454H12.7931C13.017 16.246 13.2314 16.3353 13.3895 16.4938C13.5476 16.6523 13.6363 16.867 13.6363 17.0908Z"
                        fill="white"
                      />
                      <path
                        d="M32.4181 24.9317V32.2226C32.4184 32.3248 32.3985 32.426 32.3596 32.5204C32.3206 32.6149 32.2634 32.7007 32.1912 32.7729C32.1189 32.8452 32.0331 32.9024 31.9387 32.9414C31.8442 32.9803 31.743 33.0002 31.6409 32.9999H27.7772C27.6751 33.0002 27.5739 32.9803 27.4794 32.9414C27.385 32.9024 27.2992 32.8452 27.227 32.7729C27.1547 32.7007 27.0975 32.6149 27.0585 32.5204C27.0196 32.426 26.9997 32.3248 27 32.2226V25.1567C27 24.1022 27.3091 20.5385 24.2431 20.5385C21.8681 20.5385 21.3841 22.9772 21.2886 24.0726V32.2226C21.2886 32.4268 21.2083 32.6228 21.065 32.7683C20.9217 32.9137 20.7269 32.9969 20.5227 32.9999H16.7909C16.6889 32.9999 16.5879 32.9798 16.4938 32.9407C16.3996 32.9016 16.3141 32.8443 16.2421 32.7721C16.1701 32.6999 16.113 32.6142 16.0742 32.5199C16.0354 32.4256 16.0156 32.3246 16.0159 32.2226V17.0249C16.0156 16.9229 16.0354 16.8219 16.0742 16.7276C16.113 16.6333 16.1701 16.5476 16.2421 16.4754C16.3141 16.4032 16.3996 16.3459 16.4938 16.3068C16.5879 16.2678 16.6889 16.2476 16.7909 16.2476H20.5227C20.7288 16.2476 20.9265 16.3295 21.0723 16.4753C21.2181 16.6211 21.3 16.8188 21.3 17.0249V18.3385C22.1818 17.0158 23.4886 15.9954 26.2772 15.9954C32.4545 15.9954 32.4181 21.7635 32.4181 24.9317Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>
                <p
                  className="text-[17px] leading-[27px] font-oak-sans text-[#606977]"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  Anurag Choudhary is a visionary leader who has spearheaded the transformation of Himadri from a coal tar pitch manufacturer to a global leader in the carbon segment. 
                </p>
                <p
                  className="text-[17px] leading-[27px] font-oak-sans text-[#606977]"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  Under his leadership, the company has achieved market dominance in its core products and expanded into new areas -  carbon black, lithium-ion battery materials, and construction chemicals. He was instrumental in bringing in institutional investors as Himadri&apos;s equity partners. Recognizing the transformative potential of electric vehicles and energy storage, he is pioneering the development of lithium-ion battery materials in India.
                </p>
                <p
                  className="text-[17px] leading-[27px] font-oak-sans text-[#606977]"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  His leadership has been a driving force behind Himadri&apos;s transformative growth – Himadri has achieved a significant milestone of becoming debt-free by following disciplined capital deployment and efficient working capital utilization. Birla Tyres is a strategic fit for Himadri and aligns with the company&apos;s play in the electric vehicle (EV) space. Under his guidance, Birla Tyres has been completely revitalized after years of inactivity. His passion and exceptional leadership will continue to propel Birla Tyres to aggressive growth path & newer heights.
                </p>
                <div class="line-loader self-end">
                  <div class="bar bar1"></div>
                  <div class="bar bar2"></div>
                  <div class="bar bar3"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start gap-10 p-10 bg-white border border-[#C9CDD3] rounded-[24px]">
            <div className="flex flex-col justify-between w-[50%]">
              <div className="flex flex-col justify-start gap-2 md:gap-6 relative overflow-hidden">
                <Image
                  className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                  src={BGTiger2}
                  alt=""
                />
                <div className="flex flex-col gap-5">
                  <div className="flex gap-2 flex-col">
                    <h2
                      className="capitalize text-[42px] 2xl:text-[48px] leading-[48px] font-bold text-secondary"
                      data-aos="fade-right"
                      data-aos-duration="800"
                    >
                      Amit Choudhary
                    </h2>
                    <h3
                      className="uppercase text-primary font-medium text-2xl"
                      data-aos="fade-right"
                      data-aos-duration="800"
                    >
                      Director
                    </h3>
                  </div>
                  <div
                    class="flex gap-2"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    <p className="text-[#1A1D21] text-[24px] font-medium">
                      Follow:
                    </p>
                    <Link href="#">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.5455 0.5H5.45455C2.44208 0.5 0 2.94208 0 5.95455V35.0455C0 38.0579 2.44208 40.5 5.45455 40.5H34.5455C37.5579 40.5 40 38.0579 40 35.0455V5.95455C40 2.94208 37.5579 0.5 34.5455 0.5Z"
                          fill="#0077B5"
                        />
                        <path
                          d="M14.409 11.4091C14.409 12.0833 14.2091 12.7425 13.8345 13.3031C13.4599 13.8637 12.9274 14.3007 12.3045 14.5587C11.6816 14.8167 10.9961 14.8842 10.3348 14.7527C9.67353 14.6211 9.06609 14.2965 8.58932 13.8197C8.11255 13.3429 7.78787 12.7355 7.65633 12.0742C7.52479 11.4129 7.5923 10.7274 7.85032 10.1045C8.10835 9.48156 8.5453 8.94913 9.10592 8.57454C9.66655 8.19994 10.3257 8 10.9999 8C11.9041 8 12.7712 8.35917 13.4105 8.9985C14.0498 9.63783 14.409 10.5049 14.409 11.4091Z"
                          fill="white"
                        />
                        <path
                          d="M13.6363 17.0908V32.1522C13.6369 32.2633 13.6155 32.3734 13.5734 32.4762C13.5313 32.5791 13.4693 32.6726 13.391 32.7513C13.3126 32.8301 13.2195 32.8926 13.1169 32.9353C13.0143 32.978 12.9042 32.9999 12.7931 32.9999H9.19995C9.08884 33.0002 8.97877 32.9785 8.87605 32.9362C8.77334 32.8938 8.68002 32.8315 8.60145 32.7529C8.52289 32.6744 8.46062 32.5811 8.41824 32.4783C8.37586 32.3756 8.3542 32.2656 8.3545 32.1545V17.0908C8.3545 16.8666 8.44357 16.6515 8.60212 16.493C8.76068 16.3344 8.97572 16.2454 9.19995 16.2454H12.7931C13.017 16.246 13.2314 16.3353 13.3895 16.4938C13.5476 16.6523 13.6363 16.867 13.6363 17.0908Z"
                          fill="white"
                        />
                        <path
                          d="M32.4181 24.9317V32.2226C32.4184 32.3248 32.3985 32.426 32.3596 32.5204C32.3206 32.6149 32.2634 32.7007 32.1912 32.7729C32.1189 32.8452 32.0331 32.9024 31.9387 32.9414C31.8442 32.9803 31.743 33.0002 31.6409 32.9999H27.7772C27.6751 33.0002 27.5739 32.9803 27.4794 32.9414C27.385 32.9024 27.2992 32.8452 27.227 32.7729C27.1547 32.7007 27.0975 32.6149 27.0585 32.5204C27.0196 32.426 26.9997 32.3248 27 32.2226V25.1567C27 24.1022 27.3091 20.5385 24.2431 20.5385C21.8681 20.5385 21.3841 22.9772 21.2886 24.0726V32.2226C21.2886 32.4268 21.2083 32.6228 21.065 32.7683C20.9217 32.9137 20.7269 32.9969 20.5227 32.9999H16.7909C16.6889 32.9999 16.5879 32.9798 16.4938 32.9407C16.3996 32.9016 16.3141 32.8443 16.2421 32.7721C16.1701 32.6999 16.113 32.6142 16.0742 32.5199C16.0354 32.4256 16.0156 32.3246 16.0159 32.2226V17.0249C16.0156 16.9229 16.0354 16.8219 16.0742 16.7276C16.113 16.6333 16.1701 16.5476 16.2421 16.4754C16.3141 16.4032 16.3996 16.3459 16.4938 16.3068C16.5879 16.2678 16.6889 16.2476 16.7909 16.2476H20.5227C20.7288 16.2476 20.9265 16.3295 21.0723 16.4753C21.2181 16.6211 21.3 16.8188 21.3 17.0249V18.3385C22.1818 17.0158 23.4886 15.9954 26.2772 15.9954C32.4545 15.9954 32.4181 21.7635 32.4181 24.9317Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <p
                  className="text-[17px] leading-[27px] font-oak-sans text-[#606977]"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  Amit Choudhary leverages his extensive expertise and strong
                  leadership skills to play a pivotal role in driving project
                  expansions and overseeing implementation activities.
                </p>
                <p
                  className="text-[17px] leading-[27px] font-oak-sans text-[#606977]"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  Under his leadership, Himadri has experienced remarkable
                  multi-fold capacity expansions across all business verticals,
                  highlighting his strategic acumen and steadfast dedication to
                  the company’s growth. Additionally, he also guides the Human
                  Resource function, where his adept mentorship fosters a
                  cohesive and empowered team that embodies the company’s values
                  and aspirations. His commitment to nurturing talent and
                  building a strong organizational culture will be instrumental
                  in driving Birla Tyres’ long-term success.
                </p>
              </div>
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            </div>
            <figure
              className="w-full md:w-[50%] h-[480px] relative glare"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-full h-full"
                src={Triangle2}
                alt="triangle"
              />
              <Image
                className="w-[90%] h-[90%] absolute right-4 md:right-8 top-4 md:top-8 rounded-[12px]"
                src={Director2}
                alt="img"
              />
            </figure>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-10 p-10 bg-white border border-[#C9CDD3] rounded-[24px]">
            <figure
              className="w-full md:w-[50%] h-[480px] relative glare"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              <Image
                className="absolute -z-1 w-full h-full"
                src={Triangle1}
                alt="triangle"
              />
              <Image
                className="absolute left-4 md:left-8 top-4 md:top-8 w-[90%] h-[90%] rounded-[12px]"
                src={Director3}
                alt="img"
              />
            </figure>
            <div className="flex flex-col justify-between w-[50%] overflow-hidden">
              <div className="flex flex-col justify-start gap-2 md:gap-6 relative ">
                <Image
                  className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                  src={BGTiger2}
                  alt=""
                />
                <div className="flex flex-col gap-5">
                  <div className="gap-2 flex flex-col">
                    <h2
                      className="capitalize text-[42px] 2xl:text-[48px] leading-[48px] font-bold text-secondary"
                      data-aos="fade-left"
                      data-aos-duration="400"
                    >
                      Shyam Sundar Choudhary
                    </h2>
                    <h3
                      className="uppercase text-primary font-medium text-2xl"
                      data-aos="fade-left"
                      data-aos-duration="600"
                    >
                      Director
                    </h3>
                  </div>
                  <div
                    class="flex gap-2"
                    data-aos="fade-left"
                    data-aos-duration="800"
                  >
                    <p className="text-[#1A1D21] text-[24px] font-medium">
                      Follow:
                    </p>
                    <Link href="#">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 40 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M34.5455 0.5H5.45455C2.44208 0.5 0 2.94208 0 5.95455V35.0455C0 38.0579 2.44208 40.5 5.45455 40.5H34.5455C37.5579 40.5 40 38.0579 40 35.0455V5.95455C40 2.94208 37.5579 0.5 34.5455 0.5Z"
                          fill="#0077B5"
                        />
                        <path
                          d="M14.409 11.4091C14.409 12.0833 14.2091 12.7425 13.8345 13.3031C13.4599 13.8637 12.9274 14.3007 12.3045 14.5587C11.6816 14.8167 10.9961 14.8842 10.3348 14.7527C9.67353 14.6211 9.06609 14.2965 8.58932 13.8197C8.11255 13.3429 7.78787 12.7355 7.65633 12.0742C7.52479 11.4129 7.5923 10.7274 7.85032 10.1045C8.10835 9.48156 8.5453 8.94913 9.10592 8.57454C9.66655 8.19994 10.3257 8 10.9999 8C11.9041 8 12.7712 8.35917 13.4105 8.9985C14.0498 9.63783 14.409 10.5049 14.409 11.4091Z"
                          fill="white"
                        />
                        <path
                          d="M13.6363 17.0908V32.1522C13.6369 32.2633 13.6155 32.3734 13.5734 32.4762C13.5313 32.5791 13.4693 32.6726 13.391 32.7513C13.3126 32.8301 13.2195 32.8926 13.1169 32.9353C13.0143 32.978 12.9042 32.9999 12.7931 32.9999H9.19995C9.08884 33.0002 8.97877 32.9785 8.87605 32.9362C8.77334 32.8938 8.68002 32.8315 8.60145 32.7529C8.52289 32.6744 8.46062 32.5811 8.41824 32.4783C8.37586 32.3756 8.3542 32.2656 8.3545 32.1545V17.0908C8.3545 16.8666 8.44357 16.6515 8.60212 16.493C8.76068 16.3344 8.97572 16.2454 9.19995 16.2454H12.7931C13.017 16.246 13.2314 16.3353 13.3895 16.4938C13.5476 16.6523 13.6363 16.867 13.6363 17.0908Z"
                          fill="white"
                        />
                        <path
                          d="M32.4181 24.9317V32.2226C32.4184 32.3248 32.3985 32.426 32.3596 32.5204C32.3206 32.6149 32.2634 32.7007 32.1912 32.7729C32.1189 32.8452 32.0331 32.9024 31.9387 32.9414C31.8442 32.9803 31.743 33.0002 31.6409 32.9999H27.7772C27.6751 33.0002 27.5739 32.9803 27.4794 32.9414C27.385 32.9024 27.2992 32.8452 27.227 32.7729C27.1547 32.7007 27.0975 32.6149 27.0585 32.5204C27.0196 32.426 26.9997 32.3248 27 32.2226V25.1567C27 24.1022 27.3091 20.5385 24.2431 20.5385C21.8681 20.5385 21.3841 22.9772 21.2886 24.0726V32.2226C21.2886 32.4268 21.2083 32.6228 21.065 32.7683C20.9217 32.9137 20.7269 32.9969 20.5227 32.9999H16.7909C16.6889 32.9999 16.5879 32.9798 16.4938 32.9407C16.3996 32.9016 16.3141 32.8443 16.2421 32.7721C16.1701 32.6999 16.113 32.6142 16.0742 32.5199C16.0354 32.4256 16.0156 32.3246 16.0159 32.2226V17.0249C16.0156 16.9229 16.0354 16.8219 16.0742 16.7276C16.113 16.6333 16.1701 16.5476 16.2421 16.4754C16.3141 16.4032 16.3996 16.3459 16.4938 16.3068C16.5879 16.2678 16.6889 16.2476 16.7909 16.2476H20.5227C20.7288 16.2476 20.9265 16.3295 21.0723 16.4753C21.2181 16.6211 21.3 16.8188 21.3 17.0249V18.3385C22.1818 17.0158 23.4886 15.9954 26.2772 15.9954C32.4545 15.9954 32.4181 21.7635 32.4181 24.9317Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <p
                  className="text-[17px] leading-[27px] font-oak-sans text-[#606977]"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  Shyam Sundar Choudhary has been the executive director of
                  Himadri since its commencement. He is a commerce graduate and
                  has decades of experience in Industrial and Commercial
                  activities.
                </p>
                <p
                  className="text-[17px] leading-[27px] font-oak-sans text-[#606977]"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  Shyam Sundar Choudhary is responsible for the project
                  expansions and implementation activities within the group. His
                  ability to navigate complex challenges and deliver results has
                  been proven time and again. His strategic vision and hands-on
                  approach ensure that projects are executed efficiently and
                  effectively - he has successfully commissioned various new
                  projects of the company way ahead of the scheduled time
                  delivering the state of art technology plants.
                </p>
              </div>
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <PageEnd
        Title="Why Join Us"
        TitleLink="/users/product"
        EndStaticImage={NextChapter}
      />
      <Footer />
    </>
  );
}
