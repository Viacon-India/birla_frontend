"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import gallary1 from "../../assets/images/blog1.jpg";
import gallary2 from "../../assets/images/blog2.jpg";
import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import faqImage from "../../assets/images/faq-img.jpg";
import Triangle1 from "../../assets/images/triangle1.png"

export default function Faq() {
  const [activeTab, setActiveTab] = useState("faq");
  useEffect(() => {
    var newPanel = document.getElementsByClassName("ham-accordion active")[0]
      .nextElementSibling;
    newPanel.style.maxHeight = newPanel.scrollHeight + "px";

    var acc2 = document.getElementsByClassName("ham-accordion");
    for (var j = 0; j < acc2.length; j++) {
      acc2[j].addEventListener("click", function () {
        this.classList.toggle("active");
        this.classList.toggle("after:content-['_-']");
        this.classList.toggle("after:content-['_+']");
        var newPanel = this.nextElementSibling;
        if (newPanel.style.maxHeight) {
          newPanel.style.maxHeight = null;
        } else {
          newPanel.style.maxHeight = newPanel.scrollHeight + "px";
        }
      });
    }
  }, []);

  return (
    <section className="faq-sec sec-gap mb-[60px] md:mb-[100px] 2xl:mb-[150px] relative">
      <div className="container mx-auto overflow-hidden relative">
        <div class="relative">
          <div className="flex gap-2 items-center absolute right-0 top-[54px] md:top-[32px] z-20">
            <button
              className={`cat-btn ${
                activeTab === "faq" ? "active-cat-btn" : ""
              }`}
              onClick={() => setActiveTab("faq")}
            >
              FAQs
            </button>
            <button
              className={`cat-btn ${activeTab === "blog" ? "active" : ""}`}
              onClick={() => setActiveTab("blog")}
            >
              Blog
            </button>
          </div>
        </div>

        {activeTab === "faq" && (
          <div className="content-wrapper" id="faq">
            <div className="upper-sec">
              <span className="section-heading">FAQS</span>
              <div className="section-title-wrapper">
                <GradualSpacing
                  className="section-title"
                  text="Frequently Asked Questions"
                />
              </div>
              <p className="text-[#3D434C] text-[14px] md:text-[16px] 2xl:text-[18px] font-medium leading-[1.7] !mt-14 md:!mt-6 2xl:mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
                <div
                  class="w-full md:w-[45%]"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <figure
                    className="w-full h-[350px] md:h-[420px] 2xl:h-[520px] relative glare"
                    data-aos="flip-right"
                    data-aos-duration="1500"
                  >
                    <Image
                      className="absolute -z-1 w-[90%] h-[90%]"
                      src={Triangle1}
                      alt="triangle"
                    />
                    <Image
                      className="translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 w-[90%] h-[90%] rounded-[12px]"
                      src={faqImage}
                      alt="img"
                    />
                  </figure>
                </div>
                <div
                  class="faq-accordion md:w-[55%] max-h-[360px] md:max-h-[420px] 2xl:max-h-[520px] overflow-y-auto relative z-4"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div class="accordion-content-wrapper">
                    <h4 className="accordion-title ham-accordion after:top-[0.9rem] after:content-['_-'] active">
                      What is TBB
                    </h4>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl.
                    </p>
                  </div>
                  <div class="accordion-content-wrapper">
                    <h4 className="accordion-title ham-accordion after:top-[0.9rem] after:content-['_+']">
                      What is the basic information about tyres?
                    </h4>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl.
                    </p>
                  </div>
                  <div class="accordion-content-wrapper">
                    <h4 className="accordion-title ham-accordion after:top-[0.9rem] after:content-['_+']">
                      How good are TBB tires?
                    </h4>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl.
                    </p>
                  </div>
                  <div class="accordion-content-wrapper">
                    <h4 className="accordion-title ham-accordion after:top-[0.9rem] after:content-['_+']">
                      What is the main purpose of a tyre?
                    </h4>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl.
                    </p>
                  </div>
                  <div class="accordion-content-wrapper">
                    <h4 className="accordion-title ham-accordion after:top-[0.9rem] after:content-['_+']">
                      Where are TBB tires made?
                    </h4>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl.
                    </p>
                  </div>
                  <div class="accordion-content-wrapper">
                    <h4 className="accordion-title ham-accordion after:top-[0.9rem] after:content-['_+']">
                      What is tyre famous for?
                    </h4>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Donec vitae mi vulputate, suscipit urna in,
                      malesuada nisl.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div className="content-wrapper" id="blog">
            <span className="section-heading">Posts</span>
            <div className="section-title-wrapper">
              <GradualSpacing className="section-title" text="Blog" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !mt-14 md:!mt-6 2xl:mt-10">
              <div
                className="media-card"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <figure>
                  <Image
                    className="media-card-image"
                    src={gallary1}
                    alt="card"
                  />
                </figure>
                <div className="media-card-detail">
                  <div className="flex justify-between items-center mb-3">
                    <span className="card-cat">Blog</span>
                    <span className="card-date">24 June 2024</span>
                  </div>
                  <h2 className="media-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="media-detail">
                    Maecenas dignissim justo eget nulla rutrum molestie Maecenas
                    dignissim justo eget nulla rutrum....
                  </p>
                  <Link
                    href=""
                    className="primary-btn w-fit !px-6 flip-animate-2"
                  >
                    <span data-hover="Read More">Read More</span>
                  </Link>
                </div>
              </div>
              <div
                className="media-card"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <figure>
                  <Image
                    className="media-card-image"
                    src={gallary2}
                    alt="card"
                  />
                </figure>
                <div className="media-card-detail">
                  <div className="flex justify-between items-center mb-3">
                    <span className="card-cat">Blog</span>
                    <span className="card-date">24 June 2024</span>
                  </div>
                  <h2 className="media-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h2>
                  <p className="media-detail">
                    Maecenas dignissim justo eget nulla rutrum molestie Maecenas
                    dignissim justo eget nulla rutrum....
                  </p>
                  <Link
                    href=""
                    className="primary-btn w-fit !px-6 flip-animate-2"
                  >
                    <span data-hover="Read More">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
