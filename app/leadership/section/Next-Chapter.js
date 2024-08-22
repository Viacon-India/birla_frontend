"use client";

import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import Image from "next/image";
import NextChapter from "../../assets/images/next-chapter.png";
import BGTiger from "../../assets/images/tiger-mask3.png";


export default function NewAbout() {
  return (
    <section className="mt-10 md:mt-[60px] 2xl:mt-[100px] overflow-hidden flex">
            <Image src={NextChapter} className="absolute left-0 h-[200px] w-[60%]" />
        <div className="container mx-auto relative h-[200px] flex items-end justify-end">
            <Image src={BGTiger} className="absolute right-[20%]" />
            <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21]">
                Next Page:
                <Link className="tertiary-button" href="/users/product">
                    Why Join Us
                </Link>
            </p>
        </div>
    </section>
  );
}
