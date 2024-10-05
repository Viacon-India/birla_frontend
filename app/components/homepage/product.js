"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import tyre1 from "../../assets/images/tyre1.png";
import tyre2 from "../../assets/images/tyre2.png";
import tyre3 from "../../assets/images/tyre3.png";
import tyre4 from "../../assets/images/tyre4.png";
import tyre5 from "../../assets/images/tyre5.png";
import tyre6 from "../../assets/images/tyre6.png";
import tyre7 from "../../assets/images/tyre7.png";
import tyre8 from "../../assets/images/tyre8.png";
import tyre9 from "../../assets/images/tyre9.png";
import tyre10 from "../../assets/images/tyre-totate.gif";
import GradualSpacing from "@/components/GradualSpacing";
import prodSvg from "../../assets/images/product-svg.png";
import tbbIcon from "../../assets/images/tbb-icon.png";
import prodSvg2 from "../../assets/images/product-svg2.png";
import prodSvg3 from "../../assets/images/product-svg3.png";
import grader from "../../assets/images/grader-icon.png";
// import ultra from "../../assets/images/ultra-trac.svg";
import iconW2img from "../../assets/images/iconW2img.png";
import chakra from "../../assets/images/chakra-icon.png";
// import chakra from "../../assets/images/chakra-icon2.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import load from "../../assets/images/load.png";
import pattern from "../../assets/images/pattern.png";
import construction from "../../assets/images/axle.jpg";
import Product from "@/app/components/product/card";

gsap.registerPlugin(ScrollTrigger);

const productData = {
  TBB: [
    {
      title: "Ultra Drive Platina",
      tag: "Premium",
      description: "High Mileage Premium Lug",
      image: tyre1,
      icon: tbbIcon,
      size: ["8.25-20", "10.00-20"],
      load: "Moderate",
      pattern: "Lug",
      construction: "Bias",
      toolTip: "Truck Bus",
    },
    {
      title: "Ultra Miler Platina",
      tag: "Premium",
      description: "High Mileage Premium Rib",
      image: tyre2,
      icon: tbbIcon,
      size: ["8.25-20", "10.00-20"],
      load: "Moderate",
      pattern: "Rib",
      construction: "Bias",
      toolTip: "Truck Bus",
    },
    {
      title: "Rustom",
      description: "Regional Semi Lug",
      tag: "Premium",
      image: tyre3,
      icon: tbbIcon,
      size: ["9.00-20"],
      load: "Rated",
      pattern: "Semi Lug",
      construction: "Bias",
      toolTip: "Truck Bus",
    },
  ],
  OTR: [
    {
      title: "Kalapatthar",
      tag: "Premium",
      description: "Standard tyre for the toughest mining environment.",
      image: tyre4,
      icon: prodSvg,
      size: ["9.00-20", "10.00-20", "11.00-20", "12.00-20", "12.00-24"],
      load: "Lorem",
      pattern: "Lorem Ipsum",
      construction: "Lorem",
      toolTip: "Tipper Truck",
    },
    {
      title: "Kalapatthar Plus",
      tag: "Premium",
      description: "Premium tyre for the toughest mining environment.",
      image: tyre5,
      icon: prodSvg,
      size: ["9.00-20", "10.00-20", "11.00-20", "12.00-20", "12.00-24"],
      load: "Lorem",
      pattern: "Lorem Ipsum",
      construction: "Lorem",
      toolTip: "Tipper Truck",
    },
    {
      title: "Grader Max",
      tag: "Premium",
      description: "Premium Grader Tyre",
      image: tyre6,
      icon: grader,
      size: ["13.00-24", "14.00-24"],
      load: "Lorem",
      pattern: "Lorem Ipsum",
      construction: "Lorem",
      toolTip: "Grader",
    },
  ],
  AGRI: [
    {
      title: "Shaan+",
      tag: "Standard",
      description: "Suitable for haulage & agri applications",
      image: tyre8,
      icon: prodSvg3,
      size: ["12.4-28", "13.6-28", "14.9-28", "16.9-28", "18.4-30"],
      load: "Lorem",
      pattern: "Lorem Ipsum",
      construction: "Lorem",
      toolTip: "Tractor",
    },
    {
      title: "Shaan",
      tag: "Standard",
      description: "Longer Life & More Mileage",
      image: tyre7,
      icon: prodSvg3,
      size: ["6.00-16", "6.50-20", "7.50-16"],
      load: "Lorem",
      pattern: "Lorem Ipsum",
      construction: "Lorem",
      toolTip: "Tractor",
    },
    {
      title: "Chakra",
      tag: "Standard",
      description: "Tractor Trailer Tyre",
      image: tyre9,
      icon: chakra,
      size: ["9.00-16"],
      load: "Lorem",
      pattern: "Lorem Ipsum",
      construction: "Lorem",
      toolTip: "Tractor Trailer",
    },
  ],
};

export default function Products({ Heading='', Title='', Data={}}) {
  const [activeTab, setActiveTab] = useState("TBB");

  // Define the animation function
  const animateProductCardImage = () => {
    gsap.fromTo(
      ".new-product-card-image",
      { scale: "0.4", opacity: 0.9, position: "absolute" },
      {
        scale: 1,
        position: "absolute",
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    );
  };

  // Call the animation function on tab change
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    animateProductCardImage();
  };

  useEffect(() => {
    gsap.fromTo(
      ".new-product-card-image",
      { scale: "0.2", opacity: 0.9, transition: "1s" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.1,
        // ease: "power1.out",
        scrollTrigger: {
          trigger: ".product-sec",
          start: "top 55%",
          end: "top 55%",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section className="product-sec sec-gap">
      {Data?.data && Data.data.length > 0 &&
        <div className="container mx-auto overflow-hidden">
          <div className="upper-title-sec flex gap-3 md:gap-0 flex-col md:flex-row justify-between items-end">
            <div className="self-start">
              {Heading &&
                <span className="section-heading">{Heading}</span>
              }
              {Title &&
                <div className="section-title-wrapper">
                  <GradualSpacing className="section-title" text={Title} />
                </div>
              }
            </div>
            <div className="cat-btn-sec flex items-center gap-3 relative z-10">
              {Data.data.map((tab) => ( tab.attributes?.name &&
                <button
                  key={tab.id}
                  className={`tablinks cat-btn ${activeTab === tab.attributes.name ? "active-cat-btn" : "" }`}
                  onClick={() => handleTabClick(tab.attributes.name)}
                >
                  {tab.attributes.name}
                </button>
              ))}
            </div>
          </div>

          {Data.data.map((tab) => ( tab.attributes?.name &&
            <div
              key={tab.id}
              id={tab.attributes.name}
              className={`tabcontent product-slider mt-5 2xl:mt-[32px] ${
                activeTab === tab.attributes.name ? "" : "hidden"
              }`}
            >
              {tab.attributes.products?.data &&
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                  spaceBetween={50}
                  freeMode={true}
                  pagination={{ clickable: true }}
                  className="myProductSwiper !overflow-visible"
                >
                  {tab.attributes.products.data.map((product) => (
                    <SwiperSlide key={product.id}>
                      <Product data={product.attributes} />
                      {/* <div className="new-product-card">
                        <span
                          className={
                            product.tag === "Premium"
                              ? "prem-product-card-tag"
                              : "new-product-card-tag"
                          }
                        >
                          {product.tag}
                        </span>

                        <div class="flex gap-8 px-4 pt-4">
                          <div class="new-product-iconListSec flex flex-col gap-6 2xl:gap-10">
                            <div class="flex gap-[6px] items-center">
                              <Image src={load} alt="icon" />
                              <span>
                                <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                                  Load Type
                                </p>
                                <p className="text-[15px] !text-[#727C8D] !mb-0">
                                  {product.load}
                                </p>
                              </span>
                            </div>
                            <div class="flex gap-[6px] items-center">
                              <Image src={pattern} alt="icon" />
                              <span>
                                <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                                  Pattern
                                </p>
                                <p className="text-[15px] !text-[#727C8D] !mb-0">
                                  {product.pattern}
                                </p>
                              </span>
                            </div>
                            <div class="flex gap-[6px] items-center">
                              <Image src={construction} alt="icon" />
                              <span>
                                <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                                  Construction
                                </p>
                                <p className="text-[15px] !text-[#727C8D] !mb-0">
                                  {product.construction}
                                </p>
                              </span>
                            </div>
                          </div>
                          <figure>
                            <Image
                              className="new-product-card-image"
                              src={product.image}
                              alt="card"
                            />
                          </figure>
                        </div>
                        <div className="new-product-card-detail">
                          <div className="flex">
                            <div className="flex flex-col w-full">
                              <h2>{product.title}</h2>
                              <p className="!h-[44px] !w-[75%] !line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                            <div
                              className="new-product-svg-wrapper tooltip"
                              data-tip={product.toolTip}
                            >
                              <Image
                                className="h-8 object-contain"
                                src={product.icon}
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div class="flex gap-3 mt-2 relative">
                            <Swiper
                              navigation={true}
                              modules={[Navigation]}
                              spaceBetween={10}
                              slidesPerView={2.5}
                              freeMode={true}
                              className="chipSwiper !w-[85%] !ml-0 !static"
                            >
                              {product.size.map((size, ind) => (
                                <SwiperSlide className="!w-fit" key={ind}>
                                  <button className="size-chip">{size}</button>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                          
                        </div>
                      </div> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              }
            </div>
          ))}
        </div>
      }
    </section>
  );
}
