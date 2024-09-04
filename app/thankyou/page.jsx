"use client";

import { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import Image from "next/image";
import thank from "../assets/images/thank-img.png";
import BGTiger2 from "../assets/images/tiger-mask3.png";

export default function Thankyou() {
  return (
    <>
      <Navbar />
      <section className="top-banner-sec bg-[#F8F8F8] relative pb-[60px]">
        <Float />
        <div className="container mx-auto">
          <div className="thank-main flex flex-col md:flex-row items-center gap-4 md:gap-6 2xl:gap-10 mt-[60px]">
            <div className="thank-img-sec bg-[#FFFFFF] border border-[#DEE1E5] p-6 md:p-5 rounded-[12px] w-full md:w-[45%]">
              <figure className="w-[full] h-[480px]">
                <Image className="w-full h-full object-cover rounded-[6px]" src={thank} alt="img" />
              </figure>
            </div>
            <div className="thank-detail flex flex-col gap-[60px] relative overflow-hidden">
              <Image
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                src={BGTiger2}
                alt=""
              />

              <span className="section-heading 2xl:!text-[28px]">
                Thankyou for connecting with Birla Tyres
              </span>
              <h3 className="section-title 2xl:!text-[60px]">We have received your message!</h3>
              <h2 className="text-[32px] font-medium text-[#1A1D21]">
                Your query will be answered shortly.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
