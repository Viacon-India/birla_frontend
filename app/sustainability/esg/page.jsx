"use client";

import React, { useEffect, useState } from "react";
import GradualSpacing from "@/components/GradualSpacing";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { PageBanner } from "../../components/pageCommon/pageCommon";
import Link from "next/link";
import Image from "next/image";
import Banner from "../../assets/images/esg-banner.jpg";
import Separator from "../../assets/images/esg-separator.jpg";
import Man1 from "../../assets/images/esg-man1.jpg";
import Man2 from "../../assets/images/esg-man2.jpg";
import Man3 from "../../assets/images/esg-man3.jpg";
import LastBg from "../../assets/images/esg-next.png";
import { PageEnd } from "../../components/pageCommon/pageCommon";
import AOS from "aos";
import "aos/dist/aos.css";
import tigerMask from "../../assets/images/tiger-mask2.png";

export default function Esg() {
  const [activeTab, setActiveTab] = useState("tab-1");

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Navbar />
      <PageBanner Title="ESG" StaticBanner={Banner} />
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="w-full md:w-1/2 relative">
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
                ESG
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                  Driving Innovation Toward a Cleaner Planet!
                </h3>
              </div>
            </div>
            <div className="w-full md:w-[45%] box-content-sec">
              <p data-aos="fade-left" data-aos-duration="500">
                At Birla Tyres, we are committed to leading the way in
                sustainability within our industry. By prioritizing ESG
                (Environmental, Social, and Governance), we address vital
                challenges such as environmental stewardship and social
                responsibility, paving the way towards a brighter, eco-friendly
                future. Our innovative manufacturing processes emphasizing the
                use of recycled materials and renewable resources dramatically
                reduce our environmental footprint and uplift local communities.
                Every tyre we produce embodies our steadfast dedication to
                excellence and sustainability, and ensures road safety while
                nurturing the health of our planet. Join us on this inspiring
                journey where quality meets conscience, and together, let&apos;s
                create a world where every journey contributes to a more vibrant
                tomorrow!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[60px]">
        <div class="w-[100%] mt-4 2xl:mt-8 ">
          <video className="!w-full" loop autoPlay muted>
            <source src={"/assets/videos/vid5.mp4"} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">key objectives</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Headline for ESG principles</h3>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[#4F5662] ">
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-1"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-1")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  Planet
                </h2>
              </button>
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-2"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-2")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  Communities
                </h2>
                <p className="text-left w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </button>
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-3"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-3")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  People
                </h2>
                <p className="text-left w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </button>
              <button
                className={`w-1/4 flex flex-col items-start gap-5 pb-5 ${
                  activeTab === "tab-4"
                    ? "border-b-[6px] border-[#2E3192] !text-[#1A202C]"
                    : ""
                }`}
                onClick={() => setActiveTab("tab-4")}
              >
                <h2 className="text-[32px] font-semibold leading-[38.4px]">
                  Governance
                </h2>
                <p className="text-left w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </button>
            </div>
            {activeTab === "tab-1" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  At Birla Tyres, we embed environmental stewardship deeply into
                  our operations. Through innovative practices, we minimize our
                  environmental footprint and conserve natural resources. From
                  sustainable sourcing to eco-friendly product development,
                  every decision reflects our commitment to preserve the planet
                  for the future. By investing in green technologies, advancing
                  circular economy initiatives, and setting ambitious
                  environmental goals, we are turning miles into smiles for the
                  Planet.
                </p>
                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-2" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  Recognizing the significant influence of our operations on
                  communities, our organization upholds a strong commitment to
                  ESG principles. By practicing responsible sourcing, engaging
                  in community initiatives, and adhering to ethical business
                  practices, we build enduring relationships and promote
                  sustainable benefits. Our focus reaches beyond production; we
                  actively empower and support local communities, demonstrating
                  our dedication to sustainable development and a positive
                  legacy for future generations.
                </p>

                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-3" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  At Birla Tyres, we center our commitment to prioritize people.
                  Ensuring the well-being and growth of our employees and
                  stakeholders is foundational. We nurture an inclusive, safe,
                  and dynamic environment that supports everyone&apos;s success.
                  Through investments in skills, diversity promotion, and fair
                  labor practices, we enable our workforce to actively advance
                  our sustainable ambitions. Leveraging our commitment to
                  people-centered ESG practices, we are revving up towards a
                  better tomorrow and fostering positive impact on individuals
                  as well as communities.
                </p>
                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-4" && (
              <div className="bg-[#F4F5F6] flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl">
                <p>
                  We integrate ESG principles with a focus on robust governance.
                  We prioritize transparency, accountability, and ethical
                  conduct throughout our operations. Our governance framework
                  facilitates thoughtful decision-making that respects the needs
                  of stakeholders - from shareholders to local communities. We
                  adhere rigorously to regulations and foster a culture of
                  integrity that enhances trust in our business practices, thus
                  reinforcing our organizational resilience and commitment to
                  sustainable growth and lasting value creation.
                </p>

                <div className="flex justify-between gap-[35px] overflow-hidden">
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/3"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-[250px] object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <PageEnd
        Title="Tyre Guide"
        TitleLink="/tyre-tips/tyre-guide"
        EndStaticImage={LastBg}
      />
      <Footer />
    </>
  );
}
