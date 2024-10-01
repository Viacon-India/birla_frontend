"use client";

import { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Float, MainButton } from "../components/pageCommon/pageCommon";
import Banner from "../assets/images/find1.jpg";
import find2 from "../assets/images/find2.png";
import { PageEnd } from "../components/pageCommon/pageCommon";
import Product from "@/app/components/product/card";

export default function FindTyre() {
  const [activeTab, setActiveTab] = useState("TBB");
  const [pageData, setPageData] = useState([]);
  const handleClick = (e) => {
    setActiveTab(e);
    fetchData(e);
  };
  const fetchData = async (e) => {
    fetch(getStrapiMedia("/api/products?filters[segment][name]="+e)).then((res) => res.json()).then((page) => {
      setPageData(page);
    });
  };
  useEffect(() => {
    fetchData(activeTab);
  }, []);
  

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
                <div className="flex flex-col justify-between h-full w-full md:w-1/2 gap-[100px] 2xl:gap-[200px]">
                  <MainButton />
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
                <div className="filter-form w-full md:w-1/2 md:mx-[200px]">
                  <div className="form-content relative z-10">
                    <div className="form-btn-sec">
                      <button
                        className={`form-btn ${
                          activeTab === "TBB" ? "form-active-btn" : ""
                        }`}
                        onClick={() => handleClick("TBB")}
                      >
                        TBB
                      </button>
                      <button
                        className={`form-btn ${
                          activeTab === "OTR" ? "form-active-btn" : ""
                        }`}
                        onClick={() => handleClick("OTR")}
                      >
                        OTR
                      </button>
                      <button
                        className={`form-btn ${
                          activeTab === "AGRI" ? "form-active-btn" : ""
                        }`}
                        onClick={() => handleClick("AGRI")}
                      >
                        AGRI
                      </button>
                    </div>
                    {activeTab === "TBB" && (
                      <div id="TBB">
                        <form className="w-full flex flex-col gap-2 2xl:gap-5">
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Machinery
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. Tipper truck</option>
                              <option value="Query Type 1">Query Type 1</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Rim
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. 18.5</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Size
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. 10.00 - 16SL</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Pattern
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. SM 48 (GK)</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <Link
                            href="thankyou"
                            className="primary-btn !w-full flip-animate-2 after:!hidden text-center !flex !justify-center !items-center"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.13197 0.599918C6.75419 0.599918 5.49863 0.93325 4.3653 1.59992C3.23197 2.26658 2.32086 3.1777 1.63197 4.33325C0.943077 5.48881 0.598633 6.74436 0.598633 8.09992C0.598633 9.45547 0.943077 10.711 1.63197 11.8666C2.32086 13.0221 3.23197 13.9333 4.3653 14.5999C5.49863 15.2666 6.75419 15.5999 8.13197 15.5999C8.97641 15.5999 9.79863 15.4555 10.5986 15.1666C11.3986 14.8777 12.132 14.4888 12.7986 13.9999L15.932 17.0666C16.0653 17.2444 16.2542 17.3333 16.4986 17.3333C16.7431 17.3333 16.9431 17.2555 17.0986 17.0999C17.2542 16.9444 17.332 16.7444 17.332 16.4999C17.332 16.2555 17.2431 16.0666 17.0653 15.9333L13.9986 12.7999C14.4875 12.1333 14.8764 11.3999 15.1653 10.5999C15.4542 9.79992 15.5986 8.9777 15.5986 8.13325C15.5986 6.75547 15.2653 5.48881 14.5986 4.33325C13.932 3.1777 13.0209 2.26658 11.8653 1.59992C10.7097 0.93325 9.4653 0.599918 8.13197 0.599918ZM8.13197 2.26658C9.19863 2.26658 10.1764 2.53325 11.0653 3.06658C11.9542 3.59992 12.6542 4.31103 13.1653 5.19992C13.6764 6.08881 13.932 7.05547 13.932 8.09992C13.932 9.14436 13.6764 10.1221 13.1653 11.0333C12.6542 11.9444 11.9542 12.6555 11.0653 13.1666C10.1764 13.6777 9.19863 13.9333 8.13197 13.9333C7.0653 13.9333 6.08752 13.6777 5.19863 13.1666C4.30974 12.6555 3.59863 11.9444 3.0653 11.0333C2.53197 10.1221 2.2653 9.14436 2.2653 8.09992C2.2653 7.05547 2.53197 6.08881 3.0653 5.19992C3.59863 4.31103 4.30974 3.59992 5.19863 3.06658C6.08752 2.53325 7.0653 2.26658 8.13197 2.26658Z"
                                fill="white"
                              />
                            </svg>
                            <span data-hover="Search">Search</span>
                          </Link>
                        </form>
                      </div>
                    )}
                    {activeTab === "OTR" && (
                      <div id="OTR">
                        <form className="w-full flex flex-col gap-2 2xl:gap-5">
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Sub-section
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. SM 48 (GK)</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Machinery
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. Tipper truck</option>
                              <option value="Query Type 1">Query Type 1</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Rim
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. 18.5</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Size
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. 10.00 - 16SL</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Pattern
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. SM 48 (GK)</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <Link
                            href="thankyou"
                            className="primary-btn !w-full flip-animate-2 after:!hidden text-center !flex !justify-center !items-center"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.13197 0.599918C6.75419 0.599918 5.49863 0.93325 4.3653 1.59992C3.23197 2.26658 2.32086 3.1777 1.63197 4.33325C0.943077 5.48881 0.598633 6.74436 0.598633 8.09992C0.598633 9.45547 0.943077 10.711 1.63197 11.8666C2.32086 13.0221 3.23197 13.9333 4.3653 14.5999C5.49863 15.2666 6.75419 15.5999 8.13197 15.5999C8.97641 15.5999 9.79863 15.4555 10.5986 15.1666C11.3986 14.8777 12.132 14.4888 12.7986 13.9999L15.932 17.0666C16.0653 17.2444 16.2542 17.3333 16.4986 17.3333C16.7431 17.3333 16.9431 17.2555 17.0986 17.0999C17.2542 16.9444 17.332 16.7444 17.332 16.4999C17.332 16.2555 17.2431 16.0666 17.0653 15.9333L13.9986 12.7999C14.4875 12.1333 14.8764 11.3999 15.1653 10.5999C15.4542 9.79992 15.5986 8.9777 15.5986 8.13325C15.5986 6.75547 15.2653 5.48881 14.5986 4.33325C13.932 3.1777 13.0209 2.26658 11.8653 1.59992C10.7097 0.93325 9.4653 0.599918 8.13197 0.599918ZM8.13197 2.26658C9.19863 2.26658 10.1764 2.53325 11.0653 3.06658C11.9542 3.59992 12.6542 4.31103 13.1653 5.19992C13.6764 6.08881 13.932 7.05547 13.932 8.09992C13.932 9.14436 13.6764 10.1221 13.1653 11.0333C12.6542 11.9444 11.9542 12.6555 11.0653 13.1666C10.1764 13.6777 9.19863 13.9333 8.13197 13.9333C7.0653 13.9333 6.08752 13.6777 5.19863 13.1666C4.30974 12.6555 3.59863 11.9444 3.0653 11.0333C2.53197 10.1221 2.2653 9.14436 2.2653 8.09992C2.2653 7.05547 2.53197 6.08881 3.0653 5.19992C3.59863 4.31103 4.30974 3.59992 5.19863 3.06658C6.08752 2.53325 7.0653 2.26658 8.13197 2.26658Z"
                                fill="white"
                              />
                            </svg>
                            <span data-hover="Search">Search</span>
                          </Link>
                        </form>
                      </div>
                    )}
                    {activeTab === "AGRI" && (
                      <div id="AGRI">
                        <form className="w-full flex flex-col gap-2 2xl:gap-5">
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Machinery
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. Tipper truck</option>
                              <option value="Query Type 1">Query Type 1</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Rim
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. 18.5</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Size
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. 10.00 - 16SL</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <div className="tyre-form-row">
                            <label className="tyre-form-label" htmlFor="">
                              Select Pattern
                            </label>
                            <select className="tyre-form-select" name="" id="">
                              <option value="">Eg. SM 48 (GK)</option>
                              <option value="Eg. 18.5">Eg. 18.5</option>
                              <option value="Query Type 2">Query Type 2</option>
                              <option value="Query Type 3">Query Type 3</option>
                              <option value="Query Type 4">Query Type 4</option>
                            </select>
                          </div>
                          <Link
                            href="thankyou"
                            className="primary-btn !w-full flip-animate-2 after:!hidden text-center !flex !justify-center !items-center"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.13197 0.599918C6.75419 0.599918 5.49863 0.93325 4.3653 1.59992C3.23197 2.26658 2.32086 3.1777 1.63197 4.33325C0.943077 5.48881 0.598633 6.74436 0.598633 8.09992C0.598633 9.45547 0.943077 10.711 1.63197 11.8666C2.32086 13.0221 3.23197 13.9333 4.3653 14.5999C5.49863 15.2666 6.75419 15.5999 8.13197 15.5999C8.97641 15.5999 9.79863 15.4555 10.5986 15.1666C11.3986 14.8777 12.132 14.4888 12.7986 13.9999L15.932 17.0666C16.0653 17.2444 16.2542 17.3333 16.4986 17.3333C16.7431 17.3333 16.9431 17.2555 17.0986 17.0999C17.2542 16.9444 17.332 16.7444 17.332 16.4999C17.332 16.2555 17.2431 16.0666 17.0653 15.9333L13.9986 12.7999C14.4875 12.1333 14.8764 11.3999 15.1653 10.5999C15.4542 9.79992 15.5986 8.9777 15.5986 8.13325C15.5986 6.75547 15.2653 5.48881 14.5986 4.33325C13.932 3.1777 13.0209 2.26658 11.8653 1.59992C10.7097 0.93325 9.4653 0.599918 8.13197 0.599918ZM8.13197 2.26658C9.19863 2.26658 10.1764 2.53325 11.0653 3.06658C11.9542 3.59992 12.6542 4.31103 13.1653 5.19992C13.6764 6.08881 13.932 7.05547 13.932 8.09992C13.932 9.14436 13.6764 10.1221 13.1653 11.0333C12.6542 11.9444 11.9542 12.6555 11.0653 13.1666C10.1764 13.6777 9.19863 13.9333 8.13197 13.9333C7.0653 13.9333 6.08752 13.6777 5.19863 13.1666C4.30974 12.6555 3.59863 11.9444 3.0653 11.0333C2.53197 10.1221 2.2653 9.14436 2.2653 8.09992C2.2653 7.05547 2.53197 6.08881 3.0653 5.19992C3.59863 4.31103 4.30974 3.59992 5.19863 3.06658C6.08752 2.53325 7.0653 2.26658 8.13197 2.26658Z"
                                fill="white"
                              />
                            </svg>
                            <span data-hover="Search">Search</span>
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
        <div className="container mx-auto overflow-hidden">
          <span className="section-heading">Find A Tyre</span>
          <div className="section-title-wrapper">
            <h3 className="section-title">Birla Tyre Products</h3>
          </div>
          {pageData.length > 0 && (
            <>
              <h3 className="text-[#1A1D21] text-[24px] md:text-[28px] 2xl:text-[32px] font-bold pt-4 md:pt-6 2xl:pt-10">Showing {pageData.length} matching products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 2xl:gap-10 mt-6 md:mt-8 2xl:mt-10">
                {pageData.map((product) => (
                  <Product key={product.id} data={product} />
                ))}
              </div>
            </>
          )}
        </div>
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
