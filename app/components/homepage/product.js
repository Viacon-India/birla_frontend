"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import tyre1 from "../../assets/images/tyre1.png";
import tyre2 from "../../assets/images/tyre2.png";
import tyre3 from "../../assets/images/tyre3.png";
import tyre4 from "../../assets/images/tyre4.png";
import tyre5 from "../../assets/images/tyre5.png";
import tyre6 from "../../assets/images/tyre6.png";
import tyre7 from "../../assets/images/tyre7.png";
import tyre8 from "../../assets/images/tyre8.png";
import tyre9 from "../../assets/images/tyre9.png";
import tyre10 from "../../assets/images/tyre-totate.gif";
import TypingAnimation from "@/components/TypingAnimation";
import prodSvg from "../../assets/images/product-svg.png";
import tbbIcon from "../../assets/images/tbb-icon.png";
import prodSvg2 from "../../assets/images/product-svg2.png";
import prodSvg3 from "../../assets/images/product-svg3.png";
import grader from "../../assets/images/grader-icon.png";
// import ultra from "../../assets/images/ultra-trac.svg";
import iconW2img from "../../assets/images/iconW2img.png";
import chakra from "../../assets/images/chakra-icon.png";
// import chakra from "../../assets/images/chakra-icon2.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import load from "../../assets/images/load-rated.png";
import pattern from "../../assets/images/pattern.png";
import construction from "../../assets/images/axle.png";
import Product from "@/app/components/product/card";
import ReCAPTCHA from "react-google-recaptcha";

gsap.registerPlugin(ScrollTrigger);

export default function Products({ Heading = "", Title = "", Data = {} }) {
  const [activeTab, setActiveTab] = useState("TBB");

  // Product catalogue form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    company_name: "",
    country_name: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) return alert("Verify CAPTCHA!");
    const res = await fetch('/api/submit-form', {
      method: 'POST',
      body: JSON.stringify({ captcha: captchaValue })
    });
    if(res.status !== 200 && res.success !== true) return alert("CAPTCHA verification failed");

    const payload = {
      data: {
        name: formData.name,
        email: formData.email,
        mobile_no: formData.mobile_no,
        company_name: formData.company_name,
        country_name: formData.country_name,
      },
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/product-catalogues`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        // Open PDF in new tab
        window.open("/assets/master-catalogue.pdf", "_blank");

        setFormData({
          name: "",
          email: "",
          mobile_no: "",
          company_name: "",
          country_name: "",
        });
        document.getElementById("my_modal_3").close();
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  // Define the animation function
  const animateProductCardImage = () => {
    gsap.fromTo(
      ".new-product-card-image",
      { scale: "0.4", opacity: 0.9, position: "absolute" },
      {
        scale: 1,
        position: "absolute",
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    );
  };

  // Call the animation function on tab change
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    animateProductCardImage();
  };

  useEffect(() => {
    gsap.fromTo(
      ".new-product-card-image",
      { scale: "0.2", opacity: 0.9, transition: "1s" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.1,
        // ease: "power1.out",
        scrollTrigger: {
          trigger: ".product-sec",
          start: "top 55%",
          end: "top 55%",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, [Data]);

  return (
    <section className="product-sec sec-gap">
      {Data?.data && Data.data.length > 0 && (
        <div className="container mx-auto overflow-hidden">
          <div className="upper-title-sec flex gap-3 lg:gap-0 flex-col lg:flex-row justify-between items-end">
            <div className="self-start">
              {Heading && <span className="section-heading">{Heading}</span>}
              {Title && (
                <div className="section-title-wrapper">
                  <TypingAnimation className="section-title-home" text={Title} />
                </div>
              )}
            </div>
            <div className="cat-btn-sec flex items-center gap-3 relative z-10">
              {Data.data.map(
                (tab) =>
                  tab.attributes?.name && (
                    <button
                      key={tab.id}
                      className={`tablinks cat-btn uppercase ${
                        activeTab === tab.attributes.name
                          ? "active-cat-btn"
                          : ""
                      }`}
                      onClick={() => handleTabClick(tab.attributes.name)}
                    >
                      {tab.attributes.name}
                    </button>
                  )
              )}
            </div>
          </div>

          {Data.data.map(
            (tab) =>
              tab.attributes?.name && (
                <div
                  key={tab.id}
                  id={tab.attributes.name}
                  className={`tabcontent product-slider mt-5 2xl:mt-[32px] ${
                    activeTab === tab.attributes.name ? "" : "hidden"
                  }`}
                >
                  {tab.attributes.products?.data && (
                    <>
                      <Swiper
                        // navigation={true}
                        // modules={[Navigation]}
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                          },
                          1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                          },
                          1280: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          },
                        }}
                        spaceBetween={50}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        className="myProductSwiper"
                      >
                        {tab.attributes.products.data.map((product) => (
                          <SwiperSlide key={product.id}>
                            <Product data={product.attributes} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {tab.attributes?.permalink && (
                        <div className="mt-5 2xl:mt-[32px] flex flex-col gap-1 md:flex-row justify-between">
                          <Link
                            href={tab.attributes.permalink}
                            className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                          >
                            <span data-hover="View The Complete Range">
                              View The Complete Range
                            </span>
                          </Link>
                          <Link
                            href="#"
                            className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                            onClick={() =>
                              document.getElementById("my_modal_3").showModal()
                            }
                          >
                            <span data-hover="Download Master Catalogue">
                              Download Master Catalogue
                            </span>
                          </Link>
                          <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                              <button
                                type="button"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() =>
                                  document.getElementById("my_modal_3").close()
                                }
                              >
                                ✕
                              </button>
                              <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3"
                              >
                                <div className="form-row">
                                  <label className="contact-label">
                                    Enter Your Name{" "}
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    className="contact-input"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="form-row">
                                  <label className="contact-label">
                                    Enter Your Email{" "}
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    className="contact-input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="form-row">
                                  <label className="contact-label">
                                    Enter Your Mobile Number{" "}
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    className="contact-input"
                                    type="tel"
                                    name="mobile_no"
                                    placeholder="Enter Your Mobile Number"
                                    value={formData.mobile_no}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="form-row">
                                  <label className="contact-label">
                                    Enter Your Company Name{" "}
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    className="contact-input"
                                    type="text"
                                    name="company_name"
                                    placeholder="Enter Your Company Name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="form-row">
                                  <label className="contact-label">
                                    Enter Your Country{" "}
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    className="contact-input"
                                    type="text"
                                    name="country_name"
                                    placeholder="Enter Your Country"
                                    value={formData.country_name}
                                    onChange={handleChange}
                                    required
                                  />
                                </div>

                                <div className="flex flex-col gap-1 justify-center mt-4">
                                  <ReCAPTCHA
                                    sitekey={
                                      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
                                    }
                                    onChange={(token) => setCaptchaValue(token)}
                                  />
                                  <button
                                    type="submit"
                                    className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2 self-center"
                                  >
                                    <span data-hover="Submit and Download">
                                      Submit and Download
                                    </span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </dialog>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )
          )}
        </div>
      )}
    </section>
  );
}
