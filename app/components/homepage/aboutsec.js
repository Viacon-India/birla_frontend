
"use client";

import React, { useEffect } from "react";
import Image from "next/image";

// Import your assets
import trust from "../../assets/images/about-icon1.png";
import icon from "../../assets/images/about-icon2.png";
import icon1 from "../../assets/images/about-icon3.png";
import icon2 from "../../assets/images/about-icon4.png";
import img1 from "../../assets/images/about-img-1.jpg";
import img2 from "../../assets/images/about-img-2.jpg";
import img3 from "../../assets/images/about-img-3.jpg";
import img4 from "../../assets/images/about-img-4.jpg";
import GradualSpacing from "@/components/GradualSpacing";

export default function AboutSec() {
  return (
    <>
      <section className="split-section-wrapper mt-[120px]">
        <div className="container mx-auto">
        <div class="new">
            <span className="section-heading">company brief</span>
            <div className="section-title-wrapper">
              <GradualSpacing className="section-title" text="About Us" />
            </div>
          </div>
        <div className="hoverBoxContainer mt-8">
         
          <div
            className="split-section split-section1"
            data-aos="zoom-out-right"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <div className="split-images">
              <Image src={img1} alt="card" className="object-cover" />
            </div>
            <div className="split-details">
              <div className="detail">
                <div className="imageHeading">
                  <p
                    style={{
                      backgroundImage: `url(${trust.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <h2 className="about-usp-title">Legacy of Trust</h2>
                </div>
                <p className="about-usp-detail">
                  With a rich heritage spanning over three decades, Birla Tyres
                  has built a reputation for reliability and excellence in the
                  tyre industry. Over the past three decades, we have achieved
                  numerous milestones, which is a testament to our commitment to
                  quality and customer focus. We take pride in being a trusted
                  partner for drivers across the country.
                </p>
                <a class="tertiary-button" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div
            className="split-section split-section2"
            data-aos="zoom-out-left"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <div className="split-images">
              <Image src={img2} alt="card" className="object-cover" />
            </div>
            <div className="split-details">
              <div className="detail">
                <div className="imageHeading">
                  <p
                    style={{
                      backgroundImage: `url(${icon.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <h3 className="about-usp-title">Vast Range of Products</h3>
                </div>
                <p className="about-usp-detail">
                  Our company is proud to offer a comprehensive tyre portfolio
                  that caters to the diverse and unique needs of our customers.
                  With our extensive range of products, including Truck Bus Bias
                  (TBB) tyres, agricultural tyres, and off-the-road tyres, we
                  are equipped to provide solutions for various applications and
                  industries.
                </p>
                <a class="tertiary-button" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div
            className="split-section split-section3"
            data-aos="zoom-out-right"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <div className="split-images">
              <Image src={img3} alt="card" className="object-cover" />
            </div>
            <div className="split-details">
              <div className="detail">
                <div className="imageHeading">
                  <p
                    style={{
                      backgroundImage: `url(${icon1.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <h3 className="about-usp-title">
                    Commitment to Quality Excellence
                  </h3>
                </div>
                <p className="about-usp-detail">
                  At Birla Tyres, we continuously invest in research and
                  development to stay at the forefront of tyre technology. Our
                  dedicated R&D team works tirelessly to innovate and introduce
                  advanced features that enhance performance, safety, and
                  durability.
                </p>
                <a class="tertiary-button" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div
            className="split-section split-section4"
            data-aos="zoom-out-left"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <div className="split-images">
              <Image src={img4} alt="card" className="object-cover" />
            </div>
            <div className="split-details">
              <div className="detail">
                <div className="imageHeading">
                  <p
                    style={{
                      backgroundImage: `url(${icon2.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <h3 className="about-usp-title">Customer-Centric Approach</h3>
                </div>
                <p className="about-usp-detail">
                  Our customer-centric approach is the cornerstone of our
                  business philosophy. We prioritize understanding and
                  addressing the unique needs and preferences of our customers,
                  ensuring that every interaction and product is tailored to
                  deliver exceptional value.
                </p>
                <a class="tertiary-button" href="#">
                  Read more
                </a>
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </section>
    </>
  );
}
