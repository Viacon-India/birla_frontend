"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Import your assets
import trust from "../../../assets/images/trust-icon.png";
import icon from "../../../assets/images/icon.png";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import img1 from "../../../assets/images/about-img1.jpg";
import img2 from "../../../assets/images/about-img2.jpg";
import img3 from "../../../assets/images/about-img3.jpg";
import img4 from "../../../assets/images/about-img4.jpg";
import GradualSpacing from "@/components/GradualSpacing";

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();
//-------------------Media Query for Laptop
    mm.add("(max-width: 1440px)", () => {
      // Gsap for About Us Image
      gsap.utils.toArray(".split-images").forEach((images) => {
        gsap.fromTo(
          images,
          {
            x: -150,
            opacity: 0,
            rotation: -5,
            scale: 2.5,
            zIndex: 99,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
            rotation: 0,
            scale: 1,
            zIndex: 0,
            scrollTrigger: {
              trigger: images,
              start: "top 0",
              end: "top -50%",
              scrub: 2,
              // markers: true,
            },
          }
        );
      });
      // Gsap for About Us Details
      gsap.utils.toArray(".split-details").forEach((details) => {
        gsap.fromTo(
          details,
          {
            x: 150,
            opacity: 0,
            rotation: 5,
            scale: 2.5,
            zIndex: 99,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
            rotation: 0,
            scale: 1,
            zIndex: 0,
            scrollTrigger: {
              trigger: details,
              start: "top 0",
              end: "top -50%",
              scrub: 2,
              // markers: true, // Optional: For debugging, remove or set to false in production
            },
          }
        );
      });
    });
//-------------------Media Query for Desktop
    mm.add("(min-width: 1441px)", () => {
      // Gsap for About Us Image
      gsap.utils.toArray(".split-images").forEach((images) => {
        gsap.fromTo(
          images,
          {
            x: -150,
            opacity: 0,
            rotation: -5,
            scale: 2.5,
            zIndex: 99,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
            rotation: 0,
            scale: 1,
            zIndex: 0,
            scrollTrigger: {
              trigger: images,
              start: "top 20%",
              end: "top -30%",
              scrub: 2,
              // markers: true,
            },
          }
        );
      });
      // Gsap for About Us Details
      gsap.utils.toArray(".split-details").forEach((details) => {
        gsap.fromTo(
          details,
          {
            x: 150,
            opacity: 0,
            rotation: 5,
            scale: 2.5,
            zIndex: 99,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.out",
            rotation: 0,
            scale: 1,
            zIndex: 0,
            scrollTrigger: {
              trigger: details,
              start: "top 20%",
              end: "top -30%",
              scrub: 2,
              // markers: true, // Optional: For debugging, remove or set to false in production
            },
          }
        );
      });
    });
  }, []);

  return (
    <section className="split-section-wrapper mt-[100px]">
      <div className="container mx-auto">
        <span className="section-heading">company brief</span>
        <div className="section-title-wrapper">
          <GradualSpacing className="section-title" text="About Us" />
        </div>
        <div className="split-section split-section1">
          <div className="split-images">
            <Image src={img1} alt="card" className="object-cover" />
          </div>
          <div className="split-details">
            <div className="detail">
              <p
                style={{
                  backgroundImage: `url(${trust.src})`,
                  backgroundSize: "cover",
                  width: "61px",
                  height: "60px",
                  display: "block",
                }}
              ></p>
              <h2 className="about-usp-title">Legacy of Trust</h2>
              <p className="about-usp-detail">
                With a rich heritage spanning over three decades, Birla Tyres
                has built a reputation for reliability and excellence in the
                tyre industry. Over the past three decades, we have achieved
                numerous milestones, which is a testament to our commitment to
                quality and customer focus. We take pride in being a trusted
                partner for drivers across the country.
              </p>
            </div>
          </div>
        </div>

        <div className="split-section split-section2">
          <div className="split-images">
            <Image src={img2} alt="card" className="object-cover" />
          </div>
          <div className="split-details">
            <div className="detail">
              <p
                style={{
                  backgroundImage: `url(${icon.src})`,
                  backgroundSize: "cover",
                  width: "61px",
                  height: "60px",
                  display: "block",
                }}
              ></p>
              <h3 className="about-usp-title">Vast Range of Products</h3>
              <p className="about-usp-detail">
                Our company is proud to offer a comprehensive tyre portfolio
                that caters to the diverse and unique needs of our customers.
                With our extensive range of products, including Truck Bus Bias
                (TBB) tyres, agricultural tyres, and off-the-road tyres, we are
                equipped to provide solutions for various applications and
                industries.
              </p>
            </div>
          </div>
        </div>

        <div className="split-section split-section3">
          <div className="split-images">
            <Image src={img3} alt="card" className="object-cover" />
          </div>
          <div className="split-details">
            <div className="detail">
              <p
                style={{
                  backgroundImage: `url(${icon1.src})`,
                  backgroundSize: "cover",
                  width: "61px",
                  height: "60px",
                  display: "block",
                }}
              ></p>
              <h3 className="about-usp-title">
                Commitment to Quality Excellence
              </h3>
              <p className="about-usp-detail">
                At Birla Tyres, we continuously invest in research and
                development to stay at the forefront of tyre technology. Our
                dedicated R&D team works tirelessly to innovate and introduce
                advanced features that enhance performance, safety, and
                durability. Every tyre produced by Birla Tyres undergoes
                rigorous testing and quality checks at various stages of
                production to ensure that it meets our stringent standards for
                performance and safety.
              </p>
            </div>
          </div>
        </div>

        <div className="split-section split-section4">
          <div className="split-images">
            <Image src={img4} alt="card" className="object-cover" />
          </div>
          <div className="split-details">
            <div className="detail">
              <p
                style={{
                  backgroundImage: `url(${icon2.src})`,
                  backgroundSize: "cover",
                  width: "61px",
                  height: "60px",
                  display: "block",
                }}
              ></p>
              <h3 className="about-usp-title">Customer-Centric Approach</h3>
              <p className="about-usp-detail">
                Our customer-centric approach is the cornerstone of our business
                philosophy. We prioritize understanding and addressing the
                unique needs and preferences of our customers, ensuring that
                every interaction and product is tailored to deliver exceptional
                value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
