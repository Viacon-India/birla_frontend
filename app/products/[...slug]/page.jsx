"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getStrapiMedia } from "@/lib/utils";
import { Navigation } from "swiper/modules";
import "aos/dist/aos.css";
import "swiper/css/navigation";
import GradualSpacing from "@/components/GradualSpacing";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Product from "../../components/product/card";
import { PageBanner } from "../../components/pageCommon/pageCommon";
import { PageEnd } from "../../components/pageCommon/pageCommon";
import chakra from "../../assets/images/chakra-icon.png";
import prodSvg from "../../assets/images/product-svg.png";
import prodSvg2 from "../../assets/images/product-svg2.png";
import prodSvg3 from "../../assets/images/product-svg3.png";
import ultra from "../../assets/images/ultra-trac.svg";
import Banner from "../../assets/images/investor-relation-banner.jpg";
import LastBg from "../../assets/images/investor-relation-next.png";
import load from "../../assets/images/load.png";
import pattern from "../../assets/images/pattern.png";
import construction from "../../assets/images/axle.jpg";

import tyre1 from "../../assets/images2/tyre1.png";
import tyre2 from "../../assets/images2/tyre2.png";
import tyre3 from "../../assets/images2/tyre3.png";
import tyre4 from "../../assets/images2/tyre4.png";
import tyre5 from "../../assets/images2/tyre5.png";
import tyre6 from "../../assets/images2/tyre6.png";
import tyre7 from "../../assets/images2/tyre7.png";
import tyre8 from "../../assets/images2/tyre8.png";
import tyre9 from "../../assets/images2/tyre9.png";
import tyre10 from "../../assets/images2/tyre10.png";
import tyre11 from "../../assets/images2/tyre11.png";
import tyre12 from "../../assets/images2/tyre12.png";
import tyre13 from "../../assets/images2/tyre13.png";
import tyre14 from "../../assets/images2/tyre14.png";
import tyre15 from "../../assets/images2/tyre15.png";
import tyre16 from "../../assets/images2/tyre16.png";
import tyre17 from "../../assets/images2/tyre17.png";
import tyre18 from "../../assets/images2/tyre18.png";
import tyre19 from "../../assets/images2/tyre19.png";
import tyre20 from "../../assets/images2/tyre20.png";
import tyre21 from "../../assets/images2/tyre21.png";
import tyre22 from "../../assets/images2/tyre22.png";
import tyre23 from "../../assets/images2/tyre23.png";
import tyre24 from "../../assets/images2/tyre24.png";
import tyre25 from "../../assets/images2/tyre25.png";
import tyre26 from "../../assets/images2/tyre26.png";
import tyre27 from "../../assets/images2/tyre27.png";
import tyre28 from "../../assets/images2/tyre28.png";
import tyre29 from "../../assets/images2/tyre29.png";
import tyre30 from "../../assets/images2/tyre30.png";
import tyre31 from "../../assets/images2/tyre31.png";
import tyre32 from "../../assets/images2/tyre32.png";
import tyre33 from "../../assets/images2/tyre33.png";

export default function Page({ params }) {
  const slugs = params.slug;
  const sub_selection = slugs[1];

  const [pageData, setPageData] = useState([]);

  //   sub_selection ? console.log(sub_selection):console.log('Not Present');
  console.log(pageData);

  useEffect(() => {
    fetch(getStrapiMedia("/api/segments/" + slugs[0]))
      .then((res) => res.json())
      .then((page) => {
        setPageData(page);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner
        Title={pageData.title}
        Banner={pageData.hero}
        StaticBanner={Banner}
      />
      <section className="product-sec mt-10 md:mt-[60px] 2xl:mt-[100px]">
        <div className="container mx-auto overflow-hidden flex flex-col gap-10">
          <div className="upper-title-sec flex gap-3 md:gap-0 flex-col md:flex-row justify-between items-end">
            <div className="self-start">
              {slugs[0] == "truck-bus-bias" && (
                <>
                  <span className="section-heading">
                    Truck Bus Bias segment
                  </span>
                  <div className="section-title-wrapper">
                    <GradualSpacing
                      className="section-title"
                      text="Find the perfect Truck Bus Bias tyre"
                    />
                  </div>
                </>
              )}
              {slugs[0] == "off-the-road" && (
                <>
                  <span className="section-heading">OFF THE ROAD SEGMENT</span>
                  <div className="section-title-wrapper">
                    <GradualSpacing
                      className="section-title"
                      text="Find the perfect Off The Road tyre"
                    />
                  </div>
                </>
              )}
              {slugs[0] == "agriculture" && (
                <>
                  <span className="section-heading">agriculture segment</span>
                  <div className="section-title-wrapper">
                    <GradualSpacing
                      className="section-title"
                      text="Find the Perfect Agriculture Tyre"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="cat-btn-sec flex items-center gap-3 relative z-10">
              <Link href="#" className="flex items-center gap-2 text-primary border border-primary rounded-[4px] p-1 text-[16px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.875 9.875V14.25C14.875 14.4158 14.8092 14.5747 14.6919 14.6919C14.5747 14.8092 14.4158 14.875 14.25 14.875H1.75C1.58424 14.875 1.42527 14.8092 1.30806 14.6919C1.19085 14.5747 1.125 14.4158 1.125 14.25V9.875M4.71875 6.59461L8 9.875L11.2812 6.59461M8 1.125V9.8727"
                    stroke="#F5811E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Download Product Catalogue
              </Link>
            </div>
          </div>
          <div className="bg-[#F4F5F6] rounded-xl flex gap-4 p-6 items-end">
            {slugs[0] == "off-the-road" && (
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="font-semibold text-[#1A1D21] capitalize"
                  for="sub-selection"
                >
                  Select Sub-section
                </label>
                <select
                  name="sub-selection"
                  className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
                >
                  {sub_selection ? (
                    <>
                      {sub_selection == "mining" ? (
                        <option value="mining" selected>
                          Mining
                        </option>
                      ) : (
                        <option value="mining">Mining</option>
                      )}
                      {sub_selection == "industrial" ? (
                        <option value="industrial" selected>
                          Industrial
                        </option>
                      ) : (
                        <option value="industrial">Industrial</option>
                      )}
                    </>
                  ) : (
                    <>
                      <option value="">Sub-section</option>
                      <option value="mining">Mining</option>
                      <option value="industrial">Industrial</option>
                    </>
                  )}
                </select>
              </div>
            )}
            <div className="flex flex-col gap-1 w-full">
              <label
                className="font-semibold text-[#1A1D21] capitalize"
                for="machinery"
              >
                Select Machinery
              </label>
              <select
                name="machinery"
                className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
              >
                <option value="">Eg. Tipper truck</option>
                <option value="machinery-1">Machinery 1</option>
                <option value="machinery-2">Machinery 2</option>
                <option value="machinery-3">Machinery 3</option>
                <option value="machinery-4">Machinery 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                className="font-semibold text-[#1A1D21] capitalize"
                for="rim"
              >
                Select Rim
              </label>
              <select
                name="rim"
                className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
              >
                <option value="">Eg. 18.5</option>
                <option value="rim-1">Rim 1</option>
                <option value="rim-2">Rim 2</option>
                <option value="rim-3">Rim 3</option>
                <option value="rim-4">Rim 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                className="font-semibold text-[#1A1D21] capitalize"
                for="size"
              >
                Select Size
              </label>
              <select
                name="size"
                className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
              >
                <option value="">Eg. 10.00 - 16SL</option>
                <option value="size-1">Size 1</option>
                <option value="size-2">Size 2</option>
                <option value="size-3">Size 3</option>
                <option value="size-4">Size 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                className="font-semibold text-[#1A1D21] capitalize"
                for="pattern"
              >
                Select Pattern
              </label>
              <select
                name="pattern"
                className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
              >
                <option value="">Eg. SM 48 (GK)</option>
                <option value="pattern-1">Pattern 1</option>
                <option value="pattern-2">Pattern 2</option>
                <option value="pattern-3">Pattern 3</option>
                <option value="pattern-4">Pattern 4</option>
              </select>
            </div>
            <button className="tablinks cat-btn active-cat-btn items-center gap-1 !w-full max-h-[46px] !h-full !text-[18px] leading-[27.75px]">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33216 1.59992C7.95438 1.59992 6.69883 1.93325 5.5655 2.59992C4.43216 3.26658 3.52105 4.1777 2.83216 5.33325C2.14327 6.48881 1.79883 7.74436 1.79883 9.09992C1.79883 10.4555 2.14327 11.711 2.83216 12.8666C3.52105 14.0221 4.43216 14.9333 5.5655 15.5999C6.69883 16.2666 7.95438 16.5999 9.33216 16.5999C10.1766 16.5999 10.9988 16.4555 11.7988 16.1666C12.5988 15.8777 13.3322 15.4888 13.9988 14.9999L17.1322 18.0666C17.2655 18.2444 17.4544 18.3333 17.6988 18.3333C17.9433 18.3333 18.1433 18.2555 18.2988 18.0999C18.4544 17.9444 18.5322 17.7444 18.5322 17.4999C18.5322 17.2555 18.4433 17.0666 18.2655 16.9333L15.1988 13.7999C15.6877 13.1333 16.0766 12.3999 16.3655 11.5999C16.6544 10.7999 16.7988 9.9777 16.7988 9.13325C16.7988 7.75547 16.4655 6.48881 15.7988 5.33325C15.1322 4.1777 14.2211 3.26658 13.0655 2.59992C11.9099 1.93325 10.6655 1.59992 9.33216 1.59992ZM9.33216 3.26658C10.3988 3.26658 11.3766 3.53325 12.2655 4.06658C13.1544 4.59992 13.8544 5.31103 14.3655 6.19992C14.8766 7.08881 15.1322 8.05547 15.1322 9.09992C15.1322 10.1444 14.8766 11.1221 14.3655 12.0333C13.8544 12.9444 13.1544 13.6555 12.2655 14.1666C11.3766 14.6777 10.3988 14.9333 9.33216 14.9333C8.2655 14.9333 7.28772 14.6777 6.39883 14.1666C5.50994 13.6555 4.79883 12.9444 4.26549 12.0333C3.73216 11.1221 3.46549 10.1444 3.46549 9.09992C3.46549 8.05547 3.73216 7.08881 4.26549 6.19992C4.79883 5.31103 5.50994 4.59992 6.39883 4.06658C7.28772 3.53325 8.2655 3.26658 9.33216 3.26658Z"
                  fill="white"
                />
              </svg>
              Search
            </button>
          </div>
          <div className="grid grid-cols-3 gap-[50px]">
            {slugs[0] == "truck-bus-bias" && (
              <>
                <Product
                  type="Premium"
                  load="Moderate"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre1}
                  productName="Ultra Drive Platina"
                  productDescription="Wide and deep shoulder"
                  icon={prodSvg}
                  sizes={["10.00-20", "8.25-20"]}
                />
                <Product
                  type="Premium"
                  load="Moderate"
                  pattern="Rib"
                  construction="Bias"
                  productImage={tyre2}
                  productName="Ultra Miler Platina"
                  productDescription="Reinforced shoulder rib and grooves"
                  icon={prodSvg}
                  sizes={["10.00-20", "8.25-20"]}
                />
                <Product
                  type="Premium"
                  load="Rated"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre3}
                  productName="Zeta+DLX"
                  productDescription="Strong casing for more load carrying"
                  icon={prodSvg}
                  sizes={["10.00-20", "8.25-20"]}
                />
                <Product
                  type="Standard"
                  load="Heavy"
                  pattern="Rib"
                  construction="Bias"
                  productImage={tyre4}
                  productName="Road Miler"
                  productDescription="Reinforced bead construction"
                  icon={prodSvg}
                  sizes={["10.00-20", "8.25-20"]}
                />
                <Product
                  type="Standard"
                  load="Heavy"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre5}
                  productName="XPL LG"
                  productDescription="Reinforced dual bead construction"
                  icon={prodSvg}
                  sizes={["10.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Heavy"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre6}
                  productName="XPL+"
                  productDescription="Reinforced bead construction"
                  icon={prodSvg}
                  sizes={["10.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Moderate"
                  pattern="Rib"
                  construction="Bias"
                  productImage={tyre7}
                  productName="339+"
                  productDescription="Equally spaced tiebar and higher non skid depth"
                  icon={prodSvg}
                  sizes={["10.00-20", "9.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Moderate"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre8}
                  productName="Samson"
                  productDescription="Higher air volume for carrying extra load"
                  icon={prodSvg}
                  sizes={["9.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Moderate"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre9}
                  productName="Ultra"
                  productDescription="Higher air volume with strong casing"
                  icon={prodSvg}
                  sizes={["10.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Moderate"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre10}
                  productName="Ultra+"
                  productDescription="Strong casing for wider range of applications"
                  icon={prodSvg}
                  sizes={["10.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre11}
                  productName="111"
                  productDescription="Cross lug design for good traction"
                  icon={prodSvg}
                  sizes={["12.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre12}
                  productName="112"
                  productDescription="Longer tyre life and reliabe performace"
                  icon={prodSvg}
                  sizes={["11.00-20", "10.00-20", "9.00-20", "8.25-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre13}
                  productName="112 Platinum"
                  productDescription="Durable casing to carry extra load capacity"
                  icon={prodSvg}
                  sizes={["10.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Rib"
                  construction="Bias"
                  productImage={tyre14}
                  productName="333"
                  productDescription="Druable casing for longer life"
                  icon={prodSvg}
                  sizes={["12.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Rib"
                  construction="Bias"
                  productImage={tyre15}
                  productName="334"
                  productDescription="Stong casing for more load carrying"
                  icon={prodSvg}
                  sizes={["11.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Rib"
                  construction="Bias"
                  productImage={tyre16}
                  productName="334*"
                  productDescription="Strong casing for more load carrying"
                  icon={prodSvg}
                  sizes={["9.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Rib"
                  construction="Bias"
                  productImage={tyre17}
                  productName="339"
                  productDescription="High mileage tread for longer life"
                  icon={prodSvg}
                  sizes={["10.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Semi Lug"
                  construction="Bias"
                  productImage={tyre18}
                  productName="Rustom"
                  productDescription="Cut and cheap resistant tread compound"
                  icon={prodSvg}
                  sizes={["9.00-20"]}
                />
                <Product
                  type="Standard"
                  load="Rated"
                  pattern="Lug"
                  construction="Bias"
                  productImage={tyre19}
                  productName="Tison DLX"
                  productDescription="Durable casing for retread"
                  icon={prodSvg}
                  sizes={["10.00-20", "8.25-20"]}
                />
              </>
            )}
            {slugs[0] == "off-the-road" && (
              <>
                <Product
                  type="Premium"
                  productImage={tyre20}
                  productName="Kalapatthar (new)"
                  productDescription="Specially designed tread compound for cut and chip resistance"
                  icon={prodSvg2}
                  sizes={[
                    "12.00-24",
                    "12.00-20",
                    "11.00-20",
                    "10.00-20",
                    "9.00-20",
                  ]}
                />
                <Product
                  type="Premium"
                  productImage={tyre21}
                  productName="Kalapatthar Plus (new)"
                  productDescription="Strongly bonded casing designed for mine application"
                  icon={ultra}
                  sizes={[
                    "12.00-24",
                    "12.00-20",
                    "11.00-20",
                    "10.00-20",
                    "9.00-20",
                  ]}
                />
                <Product
                  type="Premium"
                  productImage={tyre22}
                  productName="Ultra Trac"
                  productDescription="Stronger carcass to resist impact failure"
                  icon={prodSvg2}
                  sizes={[
                    "24.00-35",
                    "21.00-35",
                    "18.00-33",
                    "18.00-25",
                    "14.00-24",
                    "12.00-24",
                  ]}
                />
                <Product
                  type="Premium"
                  productImage={tyre23}
                  productName="Grader Max"
                  productDescription="Reliable under extrme service conditions"
                  icon={prodSvg2}
                  sizes={["14.00-24", "13.00-24"]}
                />
                <Product
                  type="Premium"
                  productImage={tyre24}
                  productName="Ultra Grip"
                  productDescription="Trouble free under severe service conditions"
                  icon={prodSvg2}
                  sizes={[
                    "29.05-25",
                    "26.05-25",
                    "23.05-25",
                    "20.05-25",
                    "17.05-25",
                    "14.00-25",
                  ]}
                />
                <Product
                  type="Premium"
                  productImage={tyre25}
                  productName="Ultra Trac"
                  productDescription="Customized tread compound for excellent performance"
                  icon={prodSvg2}
                  sizes={["26.05-25"]}
                />
                <Product
                  type="Premium"
                  productImage={tyre26}
                  productName="Loader Max"
                  productDescription="Superior casing strength to resist impact damage"
                  icon={prodSvg2}
                  sizes={["16.09-28"]}
                />
                <Product
                  type="Premium"
                  productImage={tyre27}
                  productName="Ultra Trac"
                  productDescription="Stronger carcass to resist impact failure"
                  icon={prodSvg2}
                  sizes={["12.05/80-18"]}
                />
                <Product
                  type="Premium"
                  productImage={tyre28}
                  productName="Ultra Port"
                  productDescription="Rugged shoulder to provide excellent grip"
                  icon={prodSvg2}
                  sizes={["18.00-25"]}
                />
              </>
            )}
            {slugs[0] == "agriculture" && (
              <>
                <Product
                  type="Premium"
                  productImage={tyre29}
                  productName="Farm Haul Platina"
                  productDescription="Higher mileage, cut and tear resistant treat compound"
                  icon={chakra}
                  sizes={["13.06-28", "12.04-28"]}
                />
                <Product
                  type="Premium"
                  productImage={tyre30}
                  productName="Farm Haul Platina (new)"
                  productDescription="Suitable for both haulage and agricultureculture"
                  icon={chakra}
                  sizes={["6.00-16"]}
                />
                <Product
                  type="Standard"
                  productImage={tyre31}
                  productName="Shaan"
                  productDescription="Longer life and more mileage"
                  icon={prodSvg3}
                  sizes={["7.50-16", "6.50-20", "6.00-16"]}
                />
                <Product
                  type="Standard"
                  productImage={tyre32}
                  productName="Shaan+"
                  productDescription="Better tyre floatation compound ensures longer life"
                  icon={prodSvg3}
                  sizes={[
                    "18.4-30",
                    "16.09-28",
                    "14.09-28",
                    "13.06-28",
                    "12.04-28",
                  ]}
                />
                <Product
                  type="Standard"
                  productImage={tyre33}
                  productName="Chakra"
                  productDescription="Superior tread compound provides less cut and chipping"
                  icon={chakra}
                  sizes={["9.00-16"]}
                />
              </>
            )}
          </div>
        </div>
      </section>
      <PageEnd
        EndPageData={pageData?.end}
        EndStaticImage={LastBg}
      />
      <Footer />
    </>
  );
}
