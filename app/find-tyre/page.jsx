"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Float } from "../components/pageCommon/pageCommon";
import Banner from "../assets/images/find1.jpg";
import find2 from "../assets/images/find2.png";
import { PageEnd } from "../components/pageCommon/pageCommon";

export default function FindTyre() {
  const [activeTab, setActiveTab] = useState("TBB");
  return (
    <>
      <Navbar />
      <section className="top-banner-sec">
        <span className="tyre-overlay"></span>
        <div className="relative">
          <Float />
          <div className="relative">
            <div className="w-full h-[40vh] md:h-[80vh] flex items-start">
              <div class="container mx-auto pt-5 pb-[60px] flex">
                <div className="flex flex-col justify-between h-full w-full md:w-1/2 gap-[200px]">
                  <div class="flex flex-col gap-5 relative z-10">
                    <Link href="dealer-locator" className="primary-btn-2">
                      Find a Dealer
                    </Link>
                  </div>
                  <div className="relative flex flex-col gap-2 md:gap-6 z-10">
                    <h3 className="text-white text-[56px] font-bold ">
                      Find A Tyre
                    </h3>
                    <p className="text-white text-[16px] md:text-[20px]">
                      Use the filters to get type the product or you can simply
                      search by it’s name.
                    </p>
                    <div className="tyre-input-sec relative">
                      <svg
                        className="absolute top-1/2 translate-y-[-50%] left-4"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4748_44438)">
                          <path
                            d="M9.21503 16.182C13.306 16.182 16.6224 12.8656 16.6224 8.7746C16.6224 4.6836 13.306 1.36719 9.21503 1.36719C5.12403 1.36719 1.80762 4.6836 1.80762 8.7746C1.80762 12.8656 5.12403 16.182 9.21503 16.182Z"
                            stroke="#A0A3BD"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.4741 18.0339L14.4463 14.0061"
                            stroke="#A0A3BD"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4748_44438">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0.141602)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <input
                        className="bg-white pl-12 py-4 outline-none rounded-[50px] w-full"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <div className="filter-form w-full md:w-1/2">
                  <div className="form-content relative z-10">
                    <div className="form-btn-sec">
                      <button
                        className={`form-btn ${
                          activeTab === "TBB" ? "form-active-btn" : ""
                        }`}
                        onClick={() => setActiveTab("TBB")}
                      >
                        TBB
                      </button>
                      <button
                        className={`form-btn ${
                          activeTab === "OTR" ? "form-active-btn" : ""
                        }`}
                        onClick={() => setActiveTab("OTR")}
                      >
                        OTR
                      </button>
                      <button
                        className={`form-btn ${
                          activeTab === "AGRI" ? "form-active-btn" : ""
                        }`}
                        onClick={() => setActiveTab("AGRI")}
                      >
                        AGRI
                      </button>
                    </div>
                    {activeTab === "TBB" && (
                      <div id="TBB">
                        <form className="w-full flex flex-col gap-3 md:gap-5">
                          <div className="form-row">
                            <label className="contact-label" htmlFor="">
                              Select Machinery
                            </label>
                            <select className="contact-select" name="" id="">
                              <option value="">
                                Tell us the type of query
                              </option>
                              <option value="Query Type 1">Query Type 1</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="form-row">
                            <label className="contact-label" htmlFor="">
                              Describe your query
                            </label>
                            <input
                              className="contact-input"
                              type="text"
                              placeholder="Describe your thoughts"
                            />
                          </div>
                          <Link
                            href="thankyou"
                            className="primary-btn w-fit flip-animate-2"
                          >
                            <span data-hover="Send Your Query">
                              Send Your Query
                            </span>
                          </Link>
                        </form>
                      </div>
                    )}
                    {activeTab === "OTR" && (
                      <div id="OTR">
                        <form className="w-full flex flex-col gap-3 md:gap-5">
                          <div className="form-row">
                            <label className="contact-label" htmlFor="">
                              Query type
                            </label>
                            <input
                              className="contact-input"
                              type="text"
                              placeholder="Tell us the type of query"
                            />
                          </div>
                          <div className="form-row">
                            <label className="contact-label" htmlFor="">
                              Describe your query
                            </label>
                            <input
                              className="contact-input"
                              type="text"
                              placeholder="Describe your thoughts"
                            />
                          </div>
                          <Link
                            href="thankyou"
                            className="primary-btn w-fit flip-animate-2"
                          >
                            <span data-hover="Send Your Query">
                              Send Your Query
                            </span>
                          </Link>
                        </form>
                      </div>
                    )}
                    {activeTab === "AGRI" && (
                      <div id="AGRI">
                        <form className="w-full flex flex-col gap-3 md:gap-5">
                          <div className="form-row">
                            <label className="contact-label" htmlFor="">
                              Query type
                            </label>
                            <input
                              className="contact-input"
                              type="text"
                              placeholder="Tell us the type of query"
                            />
                          </div>
                          <Link
                            href="thankyou"
                            className="primary-btn w-fit flip-animate-2"
                          >
                            <span data-hover="Send Your Query">
                              Send Your Query
                            </span>
                          </Link>
                        </form>
                      </div>
                    )}
                  </div>
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
      <section className="dealer-sec mt-8 md:mt-12 2xl:mt-[60px] relative overflow-hidden">
        <div className="container mx-auto overflow-hidden"></div>
      </section>
      <PageEnd
        Title="Find A Dealer"
        TitleLink="/users/product"
        EndStaticImage={find2}
      />
      <Footer />
    </>
  );
}
