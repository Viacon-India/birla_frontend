"use client";

import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import GradualSpacing from "@/components/GradualSpacing";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <>
      <Navbar />
      <section className="top-banner-sec bg-[#F8F8F8] relative">
        <Float />
        <div className="container mx-auto">
          <div className="contact-main flex flex-col md:flex-row items-center gap-4 md:gap-6 2xl:gap-10 mt-[60px]">
            <div className="contact-detail w-full md:w-1/2 flex flex-col gap-4 md:gap-6 xl:gap-10">
              <div className="contact-title-wrapper">
                <span className="section-heading">Let’s get connected</span>
                <div className="section-title-wrapper">
                  <GradualSpacing
                    className="section-title"
                    text="Want To Connect?"
                  />
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
                    <form>
                      <label htmlFor=""></label>
                      <input type="text" />
                    </form>
                  </div>
                )}
                {activeTab === "partner" && <div id="partner">partner</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
