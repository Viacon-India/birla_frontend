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
import load from "../../assets/images/load-rated.png";
import pattern from "../../assets/images/pattern.png";
import construction from "../../assets/images/axle.png";
import Product from "@/app/components/product/card";

gsap.registerPlugin(ScrollTrigger);

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
  }, [Data]);

  return (
    <section className="product-sec sec-gap">
      {Data?.data && Data.data.length > 0 &&
        <div className="container mx-auto overflow-hidden">
          <div className="upper-title-sec flex gap-3 lg:gap-0 flex-col lg:flex-row justify-between items-end">
            <div className="self-start">
              {Heading &&
                <span className="section-heading">{Heading}</span>
              }
              {Title &&
                <div className="section-title-wrapper">
                  <GradualSpacing className="section-title-home" text={Title} />
                </div>
              }
            </div>
            <div className="cat-btn-sec flex items-center gap-3 relative z-10">
              {Data.data.map((tab) => ( tab.attributes?.name &&
                <button
                  key={tab.id}
                  className={`tablinks cat-btn uppercase ${activeTab === tab.attributes.name ? "active-cat-btn" : "" }`}
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
                <>
                  <Swiper
                    // navigation={true}
                    // modules={[Navigation]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween:30,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween:10,
                      },
                      1280: {
                        slidesPerView: 3,
                        spaceBetween:40,
                      },
                    }}
                    spaceBetween={50}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    className="myProductSwiper"
                  >
                    {tab.attributes.products.data.map((product) => (
                      <SwiperSlide key={product.id}>
                        <Product data={product.attributes} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {tab.attributes?.permalink &&
                    <div className="mt-5 2xl:mt-[32px]">
                      <Link href={tab.attributes.permalink} className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2">
                        <span data-hover="View The Complete Range">View The Complete Range</span>
                      </Link>
                    </div>
                  }
                </>
              }
            </div>
          ))}
        </div>
      }
    </section>
  );
}
