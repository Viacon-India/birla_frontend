"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { PageBanner } from "../../components/pageCommon/pageCommon";
import Image from "next/image";
import Banner from "../../assets/images/esg-banner.jpg";
import Man1 from "../../assets/images/esg-man1.jpg";
import Man2 from "../../assets/images/esg-man2.jpg";
import Man3 from "../../assets/images/esg-man3.jpg";
import Man4 from "../../assets/images/esg-man4.jpg";
import Man5 from "../../assets/images/esg-man5.jpg";
import Man6 from "../../assets/images/esg-man6.jpg";
import Man7 from "../../assets/images/esg-man7.jpg";
import Man8 from "../../assets/images/esg-man8.jpg";
import esg1 from "../../assets/images/esg1.png";
import esg2 from "../../assets/images/esg2.png";
import esg3 from "../../assets/images/esg3.png";
import esg4 from "../../assets/images/esg4.png";
import LastBg from "../../assets/images/esg-next.png";
import { PageEnd } from "../../components/pageCommon/pageCommon";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionSelection from "@/app/components/section/section";

export default function Esg({params}) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  const [activeTab, setActiveTab] = useState("tab-1");

  console.log(pageData);

  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/esg"))
    .then((res) => res.json())
    .then((pages) => {
      setPageData(pages);
    });
  }, []);


  return (
    <>
      <Navbar />
      <PageBanner Title="ESG" StaticBanner={Banner} />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        <SectionSelection key={section.id} section={section} />
      ))}
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">Lorem Ipsum</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Headline for ESG principles</h3>
            </div>
          </div>
          <div>
            <div className="flex gap-6 justify-between text-[#4F5662] ">
              <button
                className={`w-1/4 flex items-center gap-5 justify-center bg-[#FEEFE2] rounded-tl-[12px] rounded-tr-[12px] p-5 ${
                  activeTab === "tab-1" ? "bg-primary !text-[#FFFFFF]" : ""
                }`}
                onClick={() => setActiveTab("tab-1")}
              >
                <Image src={esg1} alt="img" />
                <h2 className="text-[28px] 2xl:text-[32px] font-medium leading-[38.4px]">
                  Planet
                </h2>
              </button>
              <button
                className={`w-1/4 flex items-center gap-5 justify-center bg-[#FEEFE2] rounded-tl-[12px] rounded-tr-[12px] p-5 ${
                  activeTab === "tab-2" ? "bg-primary !text-[#FFFFFF]" : ""
                }`}
                onClick={() => setActiveTab("tab-2")}
              >
                <Image src={esg2} alt="img" />
                <h2 className="text-[28px] 2xl:text-[32px] font-medium">Communities</h2>
              </button>
              <button
                className={`w-1/4 flex items-center gap-5 justify-center bg-[#FEEFE2] rounded-tl-[12px] rounded-tr-[12px] p-5 ${
                  activeTab === "tab-3" ? "bg-primary !text-[#FFFFFF]" : ""
                }`}
                onClick={() => setActiveTab("tab-3")}
              >
                <Image src={esg3} alt="img" />
                <h2 className="text-[28px] 2xl:text-[32px] font-medium">People</h2>
              </button>
              <button
                className={`w-1/4 flex items-center gap-5 justify-center bg-[#FEEFE2] rounded-tl-[12px] rounded-tr-[12px] p-5 ${
                  activeTab === "tab-4" ? "bg-primary !text-[#FFFFFF]" : ""
                }`}
                onClick={() => setActiveTab("tab-4")}
              >
                <Image src={esg4} alt="img" />
                <h2 className="text-[28px] 2xl:text-[32px] font-medium leading-[38.4px]">
                  Governance
                </h2>
              </button>
            </div>
            {activeTab === "tab-1" && (
              <div className="bg-[#FFFFFFF] border-2 border-primary rounded-bl-[12px] rounded-br-[12px] border-t-0 flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl overflow-hidden">
                <p data-aos="fade-down" data-aos-duration="1000">
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
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man1}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man2}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-2" && (
              <div className="bg-[#FFFFFFF] border-2 border-primary rounded-bl-[12px] rounded-br-[12px] border-t-0 flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl overflow-hidden">
                <p data-aos="fade-down" data-aos-duration="1000">
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
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man3}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man4}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-3" && (
              <div className="bg-[#FFFFFFF] border-2 border-primary rounded-bl-[12px] rounded-br-[12px] border-t-0 flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl overflow-hidden">
                <p data-aos="fade-down" data-aos-duration="1000">
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
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man5}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man6}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
            {activeTab === "tab-4" && (
              <div className="bg-[#FFFFFFF] border-2 border-primary rounded-bl-[12px] rounded-br-[12px] border-t-0 flex flex-col text-[#4F5662] gap-6 p-10 !pt-6 rounded-b-xl overflow-hidden">
                <p data-aos="fade-down" data-aos-duration="1000">
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
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={Man7}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                  <figure
                    className="w-1/2 h-[260px] 2xl:h-[320px]"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    <Image
                      src={Man8}
                      alt="Hero-Banner"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={LastBg} />
      <Footer />
    </>
  );
}
