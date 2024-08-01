"use client";

import React, { useEffect }  from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import tyre1 from "../../assets/images/tyre1.png";
import tyre2 from "../../assets/images/tyre2.png";
import tyre3 from "../../assets/images/tyre3.png";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import GradualSpacing from "@/components/GradualSpacing";
import prodSvg from "../../assets/images/product-svg.png";
import tyreMark from "../../assets/images/tyreMark.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Product() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

 
 
    gsap.fromTo(".product-card-image ", {
      top: "-154px",
      opacity: 0.9,
      position:"absolute",
    },{
      top: 0,
      position:"absolute",
      opacity: 1,
      duration: 0.5,
      // stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".product-sec",
        start: "top 60%",
        end: "top 20%",
        scrub: 2,
        // markers: true, // Optional: For debugging, remove or set to false in production
      },
    });
 

 
  }, []);












  return (
    <section className="product-sec mt-[100px]">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec flex justify-between items-end">
          <div className="new">
            <span className="section-heading">our products</span>
            {/* <h3 className="section-title">product range</h3> */}
            <div className="section-title-wrapper">
              <GradualSpacing
                className="section-title"
                text="Featuring Our Product Range"
              />
            </div>
          </div>
          <div class="cat-btn-sec flex items-center gap-3">
            <button className="cat-btn active-cat-btn">TBB</button>
            <button className="cat-btn">Otr</button>
            <button className="cat-btn !capitalize">Agriculture</button>
          </div>
        </div>
        <div class="product-slider mt-[140px] pb-[100px]">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper !overflow-visible"
          >
            <SwiperSlide>
              <Image
                className="absolute right-[20px] top-[-100%] -z-1"
                src={tyreMark}
                alt="card"
              />
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre1}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <Image className="w-[65px] h-8" src={prodSvg} alt="card" />
                  </div>
                  <h2>Truck Bus Bias</h2>
                  <p>Fortifying Commercial Vehicles</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="absolute right-[20px] top-[-100%] -z-1"
                src={tyreMark}
                alt="card"
              />
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre2}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <Image className="w-[65px] h-8" src={prodSvg} alt="card" />
                  </div>
                  <h2>Ultra Miler Platina</h2>
                  <p>Lorem Ipsum product short details</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="absolute right-[20px] top-[-100%] -z-1"
                src={tyreMark}
                alt="card"
              />
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre3}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <Image className="w-[65px] h-8" src={prodSvg} alt="card" />
                  </div>
                  <h2>Road Miler</h2>
                  <p>Lorem Ipsum product short details</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="absolute right-[20px] top-[-100%] -z-1"
                src={tyreMark}
                alt="card"
              />
              <div className="product-card">
                <span class="product-card-tag">Premium</span>
                <figure>
                  <Image
                    className="product-card-image"
                    src={tyre1}
                    alt="card"
                  />
                </figure>
                <div class="product-card-detail">
                  <div className="product-svg-wrapper">
                    <Image className="w-[65px] h-8" src={prodSvg} alt="card" />
                  </div>
                  <h2>Truck Bus Bias</h2>
                  <p>Fortifying Commercial Vehicles</p>
                  <Link href="" className="primary-btn w-fit !px-6">
                    Explore Products
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
