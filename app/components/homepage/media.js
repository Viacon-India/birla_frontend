import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import gallary1 from "../../assets/images/gallary1.jpg";
import gallary2 from "../../assets/images/gallary2.jpg";
import gallary3 from "../../assets/images/gallary3.jpg";
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Media() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".media-sec .upper-title-sec ",
      {
        x: "100%",
        opacity: 0,
        rotation: 5,
        // scale: 2.5,
        zIndex: 99,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
        rotation: 0,
        // scale: 1,
        zIndex: 0,
        scrollTrigger: {
          trigger: ".media-sec",
          start: "top 20%",
          end: "top 0%",
          scrub: 2,
          // markers: true, // Optional: For debugging, remove or set to false in production
        },
      }
    );
  }, []);
  return (
    <section className="media-sec mt-[100px]">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          <span className="section-heading">our presence</span>
          {/* <h3 className="section-title">Media Presence</h3> */}
          <div className="section-title-wrapper">
            <GradualSpacing className="section-title" text="Media Presence" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-10">
            <div class="media-card">
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
                  2024 BMW ALPINA XB7 with exclusive details, extraordinary
                </h2>
                <p className="media-detail">
                  Maecenas dignissim justo eget nulla rutrum molestie Maecenas
                  dignissim justo eget nulla rutrum....
                </p>
                <Link href="" className="primary-btn w-fit !px-6">
                  Read more
                </Link>
              </div>
            </div>
            <div class="media-card">
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
                  2024 BMW ALPINA XB7 with exclusive details, extraordinary
                </h2>
                <p className="media-detail">
                  Maecenas dignissim justo eget nulla rutrum molestie Maecenas
                  dignissim justo eget nulla rutrum....
                </p>
                <Link href="" className="primary-btn w-fit !px-6">
                  Read more
                </Link>
              </div>
            </div>
            <div class="media-card">
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
                <Link href="" className="primary-btn w-fit !px-6">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
