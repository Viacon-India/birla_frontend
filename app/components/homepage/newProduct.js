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
import axle from "../../assets/images/axle.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const productData = {
  TBB: [
    {
      title: "Ultra Drive Platina",
      description: "High Mileage Premium Lug",
      image: tyre1,
      icon: prodSvg,
    },
    {
      title: "Ultra Miler Platina",
      description: "High Mileage Premium Rib",
      image: tyre2,
      icon: prodSvg,
    },
    {
      title: "Rustom",
      description: "Regional Semi Lug",
      image: tyre3,
      icon: iconW2img,
    },
  ],
  OTR: [
    {
      title: "Kalapatthar",
      description: "Premium tyre for the toughest mining envs.",
      image: tyre4,
      icon: prodSvg2,
    },
    {
      title: "Kalapatthar Plus",
      description: "Premium tyre for the toughest mining envs.",
      image: tyre5,
      icon: ultra,
    },
    {
      title: "Grader Max",
      description: "Premium Grader Tyre",
      image: tyre6,
      icon: prodSvg2,
    },
  ],
  AGRI: [
    {
      title: "Shaan",
      description: "Durable Front Tractor Tyre",
      image: tyre7,
      icon: prodSvg3,
    },
    {
      title: "Shaan+",
      description: "Durable Rear Tractor Tyre",
      image: tyre8,
      icon: prodSvg3,
    },
    {
      title: "Chakra",
      description: "Tractor Trailer Tyre",
      image: tyre9,
      icon: chakra,
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
    AOS.init();
  }, []);

  return (
    <section className="product-sec mt-[100px]">
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
            className={`tabcontent product-slider mt-[32px] pb-[100px] ${
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
                    <div class="flex gap-8 px-6 pt-6">
                      <div class="new-product-iconListSec flex flex-col gap-10">
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
                          <Image src={axle} alt="icon" />
                          <span>
                            <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                              Axle
                            </p>
                            <p className="text-[15px] !text-[#727C8D] !mb-0">
                              Driver/Rear
                            </p>
                          </span>
                        </div>
                      </div>
                      <figure>
                        <Image
                          className="new-product-card-image"
                          src={product.image}
                          alt="card"
                          data-aos="zoom-in-left"
                          data-aos-duration="1000"
                        />
                      </figure>
                    </div>
                    <div className="new-product-card-detail">
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
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
