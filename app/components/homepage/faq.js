"use client";

import React, { useState } from "react";
import Image from "next/image";
import gallary1 from "../../assets/images/blog1.jpg";
import gallary2 from "../../assets/images/blog2.jpg";
import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import faqImage from "../../assets/images/faq-img.jpg";

export default function Faq() {

  const [activeTab, setActiveTab] = useState("faq");

  return (
    <section className="faq-sec mt-10 md:mt-[60px] 2xl:mt-[100px] mb-[60px] md:mb-[80px] 2xl:mb-[120px] relative">
      <div className="container mx-auto overflow-hidden relative">
        <div className="flex gap-2 items-center absolute !right-[20px] md:right-[64px] 2xl:right-0 top-[54px] md:top-[32px] z-20">
          <button
            className={`cat-btn ${activeTab === "faq" ? "active-cat-btn" : ""}`}
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
                  class="w-full md:w-[50%]"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <figure className="w-full h-[360px] 2xl:h-[550px] mb-0">
                    <Image
                      className="w-full h-full object-cover rounded-[12px]"
                      src={faqImage}
                      alt="faqImg"
                    />
                  </figure>
                </div>
                <div
                  class="faq-accordion md:w-[50%]"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title">What is TBB</div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">
                      What is the basic information about tyres?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">
                      How good are TBB tires?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">
                      What is the main purpose of a tyre?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">
                      Where are TBB tires made?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">
                      What is tyre famous for?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                      </p>
                    </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet
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
