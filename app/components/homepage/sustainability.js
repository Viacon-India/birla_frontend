"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradualSpacing from "@/components/GradualSpacing";
import { getStrapiMedia } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Sustainability({ Heading='', Title='', Description='', Video=''}) {
  useEffect(() => {
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
          {Heading &&
            <span className="section-heading">{Heading}</span>
          }
          {Title &&
            <div className="section-title-wrapper">
              <GradualSpacing className="section-title" text={Title} />
            </div>
          }
          {Description &&
            <p className="text-[#3D434C] text-[14px] md:text-[16px] 2xl:text-[18px] font-medium leading-[1.7] mt-5 2xl:mt-8">{Description}</p>
          }
        </div>
      </div>
      <div class="video-content">
        <video className="sustainabilityVideo" loop autoPlay muted>
          {Video?.data &&
            <source src={getStrapiMedia(Video.data.attributes?.url)} type="video/mp4" />
          }
        </video>
      </div>
    </section>
  );
}
