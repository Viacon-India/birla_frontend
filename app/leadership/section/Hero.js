"use client";

import Float from "../../components/float/float";
import Hero from "../../assets/images/leadership-hero.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";

export default function Slider() {
  return (
    <div className="relative">
      <Float />
      <div className="relative">
        <div className="w-full h-[83vh] flex items-end 2xl:pb-[60px]">
          <div class="container mx-auto flex flex-col justify-around 2xl:justify-between h-[80%]">
            <div class="flex flex-col gap-5 relative z-10">
              <Link href="" className="primary-btn-1">
                Find a Tyre
              </Link>
              <Link href="" className="primary-btn-2">
                Find a Dealer
              </Link>
            </div>
            <div className="swiper-card relative z-10">
              <GradualSpacing
                className="leadership-hero-sec-heading font-bold text-[56px] text-[#1A1D21] bg-white"
                text="Leadership" padding="5"
              />
            </div>
          </div>
        </div>
        <Image
          src={Hero}
          alt="Hero-Banner"
          className="absolute top-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
