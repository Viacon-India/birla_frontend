"use client";

import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {Float} from "../components/pageCommon/pageCommon";
import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import Image from "next/image";
import who10 from "../assets/images/contact-img.jpg";
import BGTiger from "../assets/images/tiger-mask3.png";
import BGTiger2 from "../assets/images/tiger-mask2.png";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <>
      <Navbar />
      <section className="top-banner-sec bg-[#F8F8F8] relative">
        <Float />
        <div className="container mx-auto">
          <div className="contact-main flex flex-col md:flex-row items-center gap-4 md:gap-6 2xl:gap-10 mt-[60px]">
            <div className="contact-detail w-full md:w-1/2 flex flex-col gap-4 md:gap-6 xl:gap-10 overflow-hidden relative">
              <Image
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] "
                src={BGTiger2}
                alt="img"
              />
              <div className="contact-title-wrapper">
                <span className="section-heading">Let’s get connected</span>
                <div className="section-title-wrapper">
                  <h3 className="section-title">Want To Connect?</h3>
                </div>
              </div>
              <div className="contact-detail-box">
                <h3>Sales Inquiry</h3>
                <p>(347) 438-7215</p>
                <p>(920) 948-1722</p>
                <p>kurt_bates@outlook.com</p>
                <p>judith403@gmail.com</p>
              </div>
              <div className="contact-detail-box">
                <h3>Investor Inquiry</h3>
                <p>paula611@gmail.com</p>
                <p>r.g.rhodes@aol.com</p>
              </div>
              <div className="contact-detail-box">
                <h3>Registered Office</h3>
                <p>(917) 339-6416</p>
                <p>k.r.mastrangelo@outlook.com</p>
                <p>605 Dog Hill Lane, Topeka</p>
                <p>KS 66603</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="form-content">
                <div className="form-btn-sec">
                  <button
                    className={`form-btn ${
                      activeTab === "general" ? "form-active-btn" : ""
                    }`}
                    onClick={() => setActiveTab("general")}
                  >
                    General Inquiry
                  </button>
                  <button
                    className={`form-btn ${
                      activeTab === "partner" ? "form-active-btn" : ""
                    }`}
                    onClick={() => setActiveTab("partner")}
                  >
                    Partner Inquiry
                  </button>
                </div>
                {activeTab === "general" && (
                  <div id="general">
                    <form className="w-full flex flex-col gap-3 md:gap-5">
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Query type
                        </label>
                        <select className="contact-select" name="" id="">
                          <option value="">Tell us the type of query</option>
                          <option value="Query Type 1">Query Type 1</option>
                          <option value="Query Type 2">Query Type 2</option>
                          <option value="Query Type 3">Query Type 3</option>
                          <option value="Query Type 4">Query Type 4</option>
                        </select>
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Describe your query
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="Describe your thoughts"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          First name
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="Your preferred name"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Last name
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="Your family name"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Contact number
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="+91 (555) 000-0000"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          E-mail address
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="example@email.com"
                        />
                      </div>
                      <Link
                        href="thankyou"
                        className="primary-btn w-fit flip-animate-2"
                      >
                        <span data-hover="Send Your Query">
                          Send Your Query
                        </span>
                      </Link>
                    </form>
                  </div>
                )}
                {activeTab === "partner" && (
                  <div id="partner">
                    <form className="w-full flex flex-col gap-3 md:gap-5">
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Query type
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="Tell us the type of query"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Describe your query
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="Describe your thoughts"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          First name
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="Your preferred name"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Last name
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="Your family name"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          Contact number
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="+91 (555) 000-0000"
                        />
                      </div>
                      <div className="form-row">
                        <label className="contact-label" htmlFor="">
                          E-mail address
                        </label>
                        <input
                          className="contact-input"
                          type="text"
                          placeholder="example@email.com"
                        />
                      </div>
                      <Link
                        href="thankyou"
                        className="primary-btn w-fit flip-animate-2"
                      >
                        <span data-hover="Send Your Query">
                          Send Your Query
                        </span>
                      </Link>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden">
          <Image
            src={who10}
            alt="bottom-img"
            className="absolute left-0 h-[200px] w-[60%]"
          />
          <div className="container mx-auto relative h-[200px] flex items-end justify-end">
            <Image
              src={BGTiger}
              alt="bottom-img"
              className="absolute right-[20%]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
