"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
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
import "swiper/css/navigation";
import GradualSpacing from "@/components/GradualSpacing";
import prodSvg from "../../assets/images/product-svg.png";
import prodSvg2 from "../../assets/images/product-svg2.png";
import prodSvg3 from "../../assets/images/product-svg3.png";
import ultra from "../../assets/images/ultra-trac.svg";
import iconW2img from "../../assets/images/iconW2img.png";
import chakra from "../../assets/images/chakra-svg.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import load from "../../assets/images/load.png";
import pattern from "../../assets/images/pattern.png";
import construction from "../../assets/images/axle.jpg";

gsap.registerPlugin(ScrollTrigger);

const productData = {
  TBB: [
    {
      title: "Ultra Drive Platina",
      description: "High Mileage Premium Lug",
      image: tyre1,
      icon: prodSvg,
      size: ["10.00-20", "8.25-20"],
    },
    {
      title: "Ultra Miler Platina",
      description: "High Mileage Premium Rib",
      image: tyre2,
      icon: prodSvg,
      size: ["10.00-20", "8.25-20"],
    },
    {
      title: "Rustom",
      description: "Regional Semi Lug",
      image: tyre3,
      icon: iconW2img,
      size: ["9.00-20"],
    },
  ],
  OTR: [
    {
      title: "Kalapatthar",
      description: "Premium tyre for the toughest mining envs.",
      image: tyre4,
      icon: prodSvg2,
      size: ["9.00-20(16PR)", "10.00-20(18PR)", "11.00-20 (18PR)", "12.00-20 (18PR)", "12.00-24 (20PR)" ]
    },
    {
      title: "Kalapatthar Plus",
      description: "Premium tyre for the toughest mining envs.",
      image: tyre5,
      icon: ultra,
      size: ["9.00-20(16PR)", "10.00-20(18PR)", "11.00-20 (18PR)", "12.00-20 (18PR)", "12.00-24 (20PR)" ]
    },
    {
      title: "Grader Max",
      description: "Premium Grader Tyre",
      image: tyre6,
      icon: prodSvg2,
      size: ["13.00-24(12PR)", "13.00-24(16PR)", "14.00-24(12PR)", "14.00-24(16PR)"]
    },
  ],
  AGRI: [
    {
      title: "Shaan",
      description: "Durable Front Tractor Tyre",
      image: tyre7,
      icon: prodSvg3,
      size: ["6.00-16", "7.50-16", "7.50-16", "6.50-20"]
    },
    {
      title: "Shaan+",
      description: "Durable Rear Tractor Tyre",
      image: tyre8,
      icon: prodSvg3,
      size: ["12.4-28", "13.6-28", "14.9-28", "16.9-28", "18.4-30"]
    },
    {
      title: "Chakra",
      description: "Tractor Trailer Tyre",
      image: tyre9,
      icon: chakra,
      size: ["9.00-16"],
    },
  ],
};

export default function NewProduct() {
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
          start: "top 65%",
          end: "top 65%",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section className="product-sec mt-[60px] 2xl:mt-[100px]">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec flex justify-between items-end">
          <div className="new">
            <span className="section-heading">our products</span>
            <div className="section-title-wrapper">
              <GradualSpacing
                className="section-title"
                text="Featuring Our Product Range"
              />
            </div>
          </div>
          <div className="cat-btn-sec flex items-center gap-3 relative z-10">
            {["TBB", "OTR", "AGRI"].map((tab) => (
              <button
                key={tab}
                className={`tablinks cat-btn ${
                  activeTab === tab ? "active-cat-btn" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {Object.keys(productData).map((tab) => (
          <div
            key={tab}
            id={tab}
            className={`tabcontent product-slider mt-5 2xl:mt-[32px] pb-[60px] 2xl:pb-[100px] ${
              activeTab === tab ? "" : "hidden"
            }`}
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={50}
              freeMode={true}
              pagination={{ clickable: true }}
              className="mySwiper !overflow-visible"
            >
              {productData[tab].map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="new-product-card">
                    <span className="new-product-card-tag">Premium</span>
                    <div class="flex gap-8 px-4 pt-4">
                      <div class="new-product-iconListSec flex flex-col gap-6 2xl:gap-10">
                        <div class="flex gap-[6px] items-center">
                          <Image src={load} alt="icon" />
                          <span>
                            <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                              Load Type
                            </p>
                            <p className="text-[15px] !text-[#727C8D] !mb-0">
                              Moderate
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
                              Lug
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
                              Bias
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
                      <h2>{product.title}</h2>
                      <p className="!h-[44px] !w-[75%] !line-clamp-2">
                        {product.description}
                      </p>
                      <div class="flex gap-3 mt-2 relative">
                        <Swiper
                          navigation={true}
                          modules={[Navigation]}
                          spaceBetween={10}
                          slidesPerView={1.2}
                          freeMode={true}
                          className="chipSwiper !w-[90%] !ml-0 !static"
                        >
                          {product.size.map((size, ind) => (
                            <SwiperSlide className="!w-fit" key={ind}>
                              <button className="size-chip" >
                                {size}
                              </button>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <div className="new-product-svg-wrapper">
                        <Image
                          className="h-8 object-contain"
                          src={product.icon}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
}
