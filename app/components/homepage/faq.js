"use client";

import React, { useState } from "react";
import Image from "next/image";
import gallary1 from "../../assets/images/gallary1-original.webp";
import gallary2 from "../../assets/images/gallary2-original.jpg";
import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import faqImage from "../../assets/images/faq-img.jpg";

export default function Faq() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("faq");

  return (
    <section className="faq-sec mt-10 md:mt-[60px] 2xl:mt-[100px] mb-[60px] md:mb-[80px] 2xl:mb-[120px] relative">
      <div className="container mx-auto overflow-hidden relative">
        <div className="flex gap-2 items-center absolute right-0 top-0 z-20">
          <button
            className={`cat-btn ${activeTab === "faq" ? "active" : ""}`}
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

        {/* Conditionally render sections based on the active tab */}
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
              <p className="text-[#3D434C] text-[14px] md:text-[16px] 2xl:text-[18px] font-medium leading-[1.7] mt-5 2xl:mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
              </p>
              <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
                <div class="w-full md:w-[50%] h-fit sticky top-0">
                  <figure className="w-full h-[360px] 2xl:h-[550px] mb-0">
                    <Image
                      className="w-full h-full object-cover rounded-[12px]"
                      src={faqImage}
                      alt="faqImg"
                    />
                  </figure>
                </div>
                <div class="accordion-list-sec md:w-[50%]">
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title">Lorem ipsum question 1</div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">Lorem ipsum question 2</div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">Lorem ipsum question 3</div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">Lorem ipsum question 4</div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">Lorem ipsum question 5</div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title">Lorem ipsum question 6</div>
                    <div className="collapse-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Donec vitae mi vulputate, suscipit urna
                        in, malesuada nisl. Pellentesque laoreet pretium nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <div className="grid grid-cols-2 gap-8 mt-5 2xl:mt-10">
              <div
                className="media-card"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <figure>
                  <Link
                    target="_blank"
                    href="https://timesofindia.indiatimes.com/city/kolkata/birla-tyres-to-re-enter-market-with-new-products-in-q4/articleshow/111793517.cms"
                  >
                    <Image
                      className="media-card-image"
                      src={gallary1}
                      alt="card"
                    />
                  </Link>
                </figure>
                <div className="media-card-detail">
                  <div className="flex justify-between items-center mb-3">
                    <span className="card-cat">Media</span>
                    <span className="card-date">24 June 2024</span>
                  </div>
                  <h2 className="media-title">
                    <Link
                      target="_blank"
                      href="https://timesofindia.indiatimes.com/city/kolkata/birla-tyres-to-re-enter-market-with-new-products-in-q4/articleshow/111793517.cms"
                    >
                      Birla Tyres to re-enter mkt with new products in Q4
                    </Link>
                  </h2>
                  <p className="media-detail">
                    Birla Tyres is likely to re-enter the market with a new
                    range of products in the fourth quarter of this fiscal, said
                    Anurag Choudhary....
                  </p>
                  <Link
                    target="_blank"
                    href="https://timesofindia.indiatimes.com/city/kolkata/birla-tyres-to-re-enter-market-with-new-products-in-q4/articleshow/111793517.cms"
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
                  <Link
                    target="_blank"
                    href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                  >
                    <Image
                      className="media-card-image"
                      src={gallary2}
                      alt="card"
                    />
                  </Link>
                </figure>
                <div className="media-card-detail">
                  <div className="flex justify-between items-center mb-3">
                    <span className="card-cat">Media</span>
                    <span className="card-date">24 June 2024</span>
                  </div>
                  <h2 className="media-title">
                    <Link
                      target="_blank"
                      href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
                    >
                      Birla Tyres set to roll again, acquisition finalised by
                      consortium of Himadri and Dalmia
                    </Link>
                  </h2>
                  <p className="media-detail">
                    Birla Tyres will resurface on Indian roads a year from now,
                    courtesy the new owners of the company and the brand....
                  </p>
                  <Link
                    target="_blank"
                    href="https://www.telegraphindia.com/business/birla-tyres-set-to-roll-again-acquisition-finalised-by-consortium-of-himadri-and-dalmia/cid/1977074"
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
