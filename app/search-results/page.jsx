"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px] bg-[#F4F4F4]">
        <div className="container mx-auto">
          <span className="text-primary text-[20px] uppercase mb-3">
            Search Result
          </span>
          <h2 className="section-title">
            Found “24” results for your search “ truck tyre”
          </h2>
          <div className="relative mt-3 mb-10">
            <svg
            className="absolute top-[16px] left-[20px]"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7026 12.7032L16.4995 16.5001M14.625 8.0625C14.625 11.6869 11.6869 14.625 8.0625 14.625C4.43813 14.625 1.5 11.6869 1.5 8.0625C1.5 4.43813 4.43813 1.5 8.0625 1.5C11.6869 1.5 14.625 4.43813 14.625 8.0625Z"
                stroke="#1A1D21"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input className="w-full py-[10px] pl-10 border border-[#B3B8C2] bg-transparent rounded-[24px]" type="search" placeholder="search here" />
          </div>
          <div className="result-card p-4 bg-[#FFFFFF] rounded-[8px] mt-10">
            <h3 className="text-secondary text-[24px] lg:text-[28px] 2xl:text-[32px] font-bold leading-[1] mb-3">Truck Bus Bias - Homepage</h3>
            <Link className="text-primary text-[18px] lg:text-[20px]" href="/">http://www.birlatyre.com</Link>
            <p className="text-[#4F5662] text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] line-clamp-4 pt-3">Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue libero quis, commodo purus. Cras iaculis massa ut elit tempor malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt velit ullamcorper. Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar elit ut orci</p>
          </div>
          <div className="result-card p-4 bg-[#FFFFFF] rounded-[8px] mt-10">
            <h3 className="text-secondary text-[24px] lg:text-[28px] 2xl:text-[32px] font-bold leading-[1] mb-3">Truck Bus Bias - Homepage</h3>
            <Link className="text-primary text-[18px] lg:text-[20px]" href="/">http://www.birlatyre.com</Link>
            <p className="text-[#4F5662] text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] line-clamp-4 pt-3">Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue libero quis, commodo purus. Cras iaculis massa ut elit tempor malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt velit ullamcorper. Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar elit ut orci</p>
          </div>
          <div className="result-card p-4 bg-[#FFFFFF] rounded-[8px] mt-10">
            <h3 className="text-secondary text-[24px] lg:text-[28px] 2xl:text-[32px] font-bold leading-[1] mb-3">Truck Bus Bias - Homepage</h3>
            <Link className="text-primary text-[18px] lg:text-[20px]" href="/">http://www.birlatyre.com</Link>
            <p className="text-[#4F5662] text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] line-clamp-4 pt-3">Donec dictum tristique porta. Etiam convallis lorem lobortis nulla molestie, nec tincidunt ex ullamcorper. Quisque ultrices lobortis elit sed euismod. Duis in ultrices dolor, ac rhoncus odio. Suspendisse tempor sollicitudin dui sed lacinia. Nulla quis enim posuere, congue libero quis, commodo purus. Cras iaculis massa ut elit tempor malesuada. Pellentesque dictum elit quis diam tristique, sed tincidunt velit ullamcorper. Suspendisse potenti. Nam varius varius erat. Aliquam pulvinar elit ut orci</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
