import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import gallary1 from "../../assets/images/gallary1-original.webp";
import gallary2 from "../../assets/images/gallary2-original.jpg";
import gallary3 from "../../assets/images/gallary3.jpg";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Media() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="media-sec mt-10 md:mt-[60px] 2xl:mt-[100px] mb-[60px] md:mb-[80px] 2xl:mb-[120px]">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          <span className="section-heading">our presence</span>
          <div className="section-title-wrapper">
            <GradualSpacing className="section-title" text="Media Presence" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 2xl:mt-8">
            <div
              class="media-card"
              data-aos="fade-right"
              data-aos-duration="1000"
              // data-aos-offset="650"
            >
              <figure>
                <Image className="media-card-image" src={gallary1} alt="card" />
                <span></span>
              </figure>
              <div className="media-card-detail">
                <div className="flex justify-between items-center mb-3">
                  <span className="card-cat">Blogs</span>
                  <span className="card-date">24 June 2024</span>
                </div>
                <h2 className="media-title">
                  Birla Tyres to re-enter mkt with new products in Q4
                </h2>
                <p className="media-detail">
                  Birla Tyres is likely to re-enter the market with a new range of products in the fourth quarter of this fiscal, said Anurag Choudhary....
                </p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-6 flip-animate-2"
                >
                  <span data-hover="Read More">Read More</span>
                </Link>
              </div>
            </div>
            <div
              class="media-card"
              data-aos="fade-right"
              data-aos-duration="1500"
              // data-aos-offset="650"
            >
              <figure>
                <Image className="media-card-image" src={gallary2} alt="card" />
                <span></span>
              </figure>
              <div className="media-card-detail">
                <div className="flex justify-between items-center mb-3">
                  <span className="card-cat">Blogs</span>
                  <span className="card-date">24 June 2024</span>
                </div>
                <h2 className="media-title">
                  Birla Tyres set to roll again, acquisition finalised by consortium of Himadri and Dalmia
                </h2>
                <p className="media-detail">
                Birla Tyres will resurface on Indian roads a year from now, courtesy the new owners of the company and the brand....
                </p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-6 flip-animate-2"
                >
                  <span data-hover="Read More">Read More</span>
                </Link>
              </div>
            </div>
            {/* <div
              class="media-card"
              data-aos="fade-right"
              data-aos-duration="2000"
              // data-aos-offset="650"
            >
              <figure>
                <Image className="media-card-image" src={gallary3} alt="card" />
                <span></span>
              </figure>
              <div className="media-card-detail">
                <div className="flex justify-between items-center mb-3">
                  <span className="card-cat">Blogs</span>
                  <span className="card-date">24 June 2024</span>
                </div>
                <h2 className="media-title">
                  2024 BMW ALPINA XB7 with exclusive details, extraordinary
                </h2>
                <p className="media-detail">
                  Maecenas dignissim justo eget nulla rutrum molestie Maecenas
                  dignissim justo eget nulla rutrum....
                </p>
                <Link
                  href="#"
                  className="primary-btn w-fit !px-6 flip-animate-2"
                >
                  <span data-hover="Read More">Read More</span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="media-sec-marker"></div>
    </section>
  );
}
