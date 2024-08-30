"use client";

import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import Image from "next/image";
import NextChapter from "../../assets/images/next-chapter.png";
import BGTiger from "../../assets/images/tiger-mask3.png";

export default function NewAbout() {
  return (
    <section className="pt-10 md:pt-[60px] 2xl:pt-[100px] overflow-hidden flex bg-[#F8F8F8]">
      <Image
        src={NextChapter}
        alt="bottom-img"
        className="absolute left-0 h-[200px] w-[60%]"
      />
      <div className="container mx-auto relative h-[200px] flex items-end justify-end">
        <Image
          src={BGTiger}
          alt="bottom-img"
          className="absolute right-[20%]"
        />
        <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4">
          Next Page:
          <Link
            className="text-[#F5811E] font-medium flex items-center gap-1"
            href="/users/product"
          >
            Why Join Us
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                stroke="#F5811E"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </p>
      </div>
    </section>
  );
}
