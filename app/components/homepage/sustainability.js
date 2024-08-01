"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/Scrolltrigger";
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
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
        // markers: true
      },
    });
  }, []);

  return (
    <section className="sustainability-sec mt-[100px] relative">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          <span className="section-heading">go green</span>
          <div className="section-title-wrapper">
            <GradualSpacing className="section-title" text="Sustainability" />
          </div>
          <p className="text-[#3D434C] text-[18px] font-medium leading-[1.7] mt-6">
            Lorem ipsum dolor sit amet, contur adipiscing elit. Maecenas
            dignissim justo eget nulla rutrum molestie et. Lorem ipsum dolor sit
            amet, contur adipiscing elit. Maecenas dignissim justo eget nulla
            rutrum molestie et. Lorem ipsum dolor sit amet.
          </p>
          <div class="video-content">
            <video className="sustainabilityVideo" loop autoPlay muted>
              <source src={"/assets/videos/vid6.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
