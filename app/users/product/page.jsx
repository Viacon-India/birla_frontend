"use client"

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";


// Import your assets
import trust from "../../assets/images/truck-icon.png";
import icon from "../../assets/images/icon.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import img1 from "../../assets/images/about-img-1.jpg";
import img2 from "../../assets/images/about-img-2.jpg";
import img3 from "../../assets/images/about-img-3.jpg";
import img4 from "../../assets/images/about-img-4.jpg";

const ProductPage = async () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".split-details").forEach((details) => {
      gsap.fromTo(
        details,
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          zIndex: 99,
        },
        {
          x: 150,
          opacity: 0,
          duration: 0.2,
          stagger: 0.1,
          ease: "power1.out",
          rotation: 5,
          scale: 1.2,
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

    gsap.utils.toArray(".split-images").forEach((images) => {
      gsap.fromTo(
        images,
        {
          x: 0,
          opacity: 1,
          rotation: 0.5,
          scale: 1,
          zIndex: 99,
        },
        {
          x: -150,
          opacity: 0,
          duration: 0.2,
          stagger: 0.1,
          ease: "power1.out",
          rotation: -5,
          scale: 1.2,
          zIndex: 0,
          scrollTrigger: {
            trigger: images,
            start: "top 0",
            end: "top -50%",
            scrub: 2,
            // markers: true, // Optional: For debugging, remove or set to false in production
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* <h1>product page</h1>
  <div className="new grid grid-cols-4 gap-4">
    {posts.map(post=>
    <div className="card w-96 bg-base-100 shadow-xl" key={post.id}>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        <div className="card-actions justify-end">
          <Link href={`/users/product/${post.id}`} className="btn btn-primary">See detail</Link>
          </div>
        </div>
    </div>
    )}
  </div> */}
      <section className="split-section-wrapper">
        <div className="container mx-auto">
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
                  (TBB) tyres, agricultural tyres, and off-the-road tyres, we
                  are equipped to provide solutions for various applications and
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
                  Our customer-centric approach is the cornerstone of our
                  business philosophy. We prioritize understanding and
                  addressing the unique needs and preferences of our customers,
                  ensuring that every interaction and product is tailored to
                  deliver exceptional value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
