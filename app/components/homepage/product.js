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
import "swiper/css/navigation";
import GradualSpacing from "@/components/GradualSpacing";
import prodSvg from "../../assets/images/product-svg.png";
import tyreMark from "../../assets/images/tyreMark.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const productData = {
  TBB: [
    { title: "Truck Bus Bias", description: "Fortifying Commercial Vehicles", image: tyre1 },
    { title: "Ultra Miler Platina", description: "Lorem Ipsum product short details", image: tyre2 },
    { title: "Road Miler", description: "Lorem Ipsum product short details", image: tyre3 },
  ],
  OTR: [
    { title: "Bruck Bus Bias", description: "Fortifying Commercial Vehicles", image: tyre1 },
    { title: "Ultra Miler Platina", description: "Lorem Ipsum product short details", image: tyre2 },
    { title: "Road Miler", description: "Lorem Ipsum product short details", image: tyre3 },
  ],
  AGR: [
    { title: "Aruck Bus Bias", description: "Fortifying Commercial Vehicles", image: tyre1 },
    { title: "Ultra Miler Platina", description: "Lorem Ipsum product short details", image: tyre2 },
    { title: "Road Miler", description: "Lorem Ipsum product short details", image: tyre3 },
  ],
};

export default function Product() {
  const [activeTab, setActiveTab] = useState("TBB");

  useEffect(() => {
    gsap.fromTo(
      ".product-card-image",
      { top: "-154px", opacity: 0.9, position: "absolute" },
      {
        top: 0,
        position: "absolute",
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".product-sec",
          start: "top 60%",
          end: "top 20%",
          scrub: 2,
        },
      }
    );
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
            {["TBB", "OTR", "AGR"].map((tab) => (
              <button
                key={tab}
                className={`tablinks cat-btn ${activeTab === tab ? "active-cat-btn" : ""}`}
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
            className={`tabcontent product-slider mt-[140px] pb-[100px] ${activeTab === tab ? "" : "hidden"}`}
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{ clickable: true }}
              className="mySwiper !overflow-visible"
            >
              {productData[tab].map((product, index) => (
                <SwiperSlide key={index}>
                  <Image
                    className="absolute right-[20px] top-[-100%] -z-1"
                    src={tyreMark}
                    alt="card"
                  />
                  <div className="product-card">
                    <span className="product-card-tag">Premium</span>
                    <figure>
                      <Image
                        className="product-card-image"
                        src={product.image}
                        alt="card"
                      />
                    </figure>
                    <div className="product-card-detail">
                      <div className="product-svg-wrapper">
                        <Image className="w-[65px] h-8" src={prodSvg} alt="card" />
                      </div>
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <Link href="#" className="primary-btn w-fit !px-6">
                        Explore Products
                      </Link>
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
