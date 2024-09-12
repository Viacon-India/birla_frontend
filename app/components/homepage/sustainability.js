"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradualSpacing from "@/components/GradualSpacing";


export default function Sustainability() {
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(".sustainabilityVideo", {
      width: "100%",
      height: "100%",
      borderRadius: "20px",
      boxShadow : "0px -10px 10px rgba(0, 0, 0, 0.25)",
      scrollTrigger: {
        trigger: ".video-content",
        scroller: "body",
        start: "top 70%",
        end: "bottom 40%",
        scrub: 2,
        // markers: true
      },
    });
  }, []);

  return (
    <section className="sustainability-sec sec-gap relative">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          <span className="section-heading">go green</span>
          <div className="section-title-wrapper">
            <GradualSpacing className="section-title" text="Sustainability" />
          </div>
          <p className="text-[#3D434C] text-[14px] md:text-[16px] 2xl:text-[18px] font-medium leading-[1.7] mt-5 2xl:mt-8">
          Our unwavering commitment to sustainability is deeply rooted in our operations. Our factory is a testament to this, housing a diverse array of plants that enhance our environment and symbolize our dedication to preserving nature. We believe in nurturing our products and the planet simultaneously. Birla Tyres ensures a greener future for generations to come.
          </p>
        </div>
      </div>
          <div class="video-content">
            <video className="sustainabilityVideo" loop autoPlay muted>
              <source src={"/assets/videos/vid11.mp4"} type="video/mp4" />
            </video>
          </div>
    </section>
  );
}
