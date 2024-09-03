"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import GradualSpacing from "@/components/GradualSpacing";
import "aos/dist/aos.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import Link from "next/link";
import Image from "next/image";
import Banner from "../assets/images/investor-relation-banner.jpg";
import LastBg from "../assets/images/investor-relation-next.png";
import BGTiger from "../assets/images/tiger-mask3.png";


export default function page({ params }) {
  const slug = params.slug.pop();
  const [investorRelationData, setInvestorRelationData] = useState([]);
  useEffect(() => {
    fetch(getStrapiMedia("/api/investor-relation/"+slug))
      .then((res) => res.json())
      .then((investor_relation) => {
        setInvestorRelationData(investor_relation.data.attributes);
      });
  }, []);
  console.log(params);

  return (
    <>
      <Navbar />
      <section className="top-banner-sec bg-[#F8F8F8]">
        <div className="relative">
          <Float />
          <div className="relative">
            <div className="w-full h-[40vh] md:h-[80vh] flex items-end">
              <div class="container mx-auto flex flex-col justify-between h-full pt-5 pb-[60px]">
                <div class="flex flex-col gap-5 relative z-10">
                  <Link href="" className="primary-btn-1">
                    Find a Tyre
                  </Link>
                  <Link href="" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="relative z-10">
                  <GradualSpacing
                    className="top-banner-sec-heading"
                    text={investorRelationData.title}
                    padding="5"
                  />
                </div>
              </div>
            </div>
            {investorRelationData.hero?.data ? (
              <Image src={getStrapiMedia(investorRelationData.hero.data.attributes.url)} width={investorRelationData.hero.data.attributes.width} height={investorRelationData.hero.data.attributes.height} alt={investorRelationData.hero.data.attributes?.alternativeText ? investorRelationData.hero.data.attributes.alternativeText: "Hero-Banner" } className="absolute top-0 w-full h-full object-cover" /> 
            ) : (
              <Image src={Banner} alt="Hero-Banner" className="absolute top-0 w-full h-full object-cover" />
            )}
          </div>
        </div>
      </section>
      {investorRelationData.section && 
        <section className="bg-[#F8F8F8] pt-10 md:pt-[60px]">
          <div className="container mx-auto grid grid-cols-2 gap-10">
            {investorRelationData.section.map((section) => (
              <div className="bg-white border border-[#DEE1E5] rounded-xl p-[60px] flex flex-col gap-10 h-fit">
                {section?.title &&
                  <div className="section-title-wrapper">
                    <h2 className="section-title">{section.title}</h2>
                  </div>
                }
                {section.files && section.files.map((files) => (
                  <div className="flex flex-col gap-6">
                    {files.collection.length > 0 && files?.description &&
                      <h3 className="text-[#3D434C] font-semibold text-[32px] leading-[32px]">{files.description}</h3>
                    }
                    {files.collection.length > 0 && files.collection.map((collection) => (
                      collection.file?.data &&
                        <Link href={getStrapiMedia(collection.file.data.attributes.url)} className="flex gap-3 items-center w-fit">
                          <div className="p-2 bg-[#E0E1F5] rounded-xl"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 15.75H17.625V20.25M19.875 18.375H17.625M4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75H4.5V20.25M4.5 12V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25M14.25 3L19.5 8.25M14.25 3V8.25H19.5M19.5 8.25V12M12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C14.0129 19.169 14.25 18.5967 14.25 18C14.25 17.4033 14.0129 16.831 13.591 16.409C13.169 15.9871 12.5967 15.75 12 15.75H10.6875V20.25H12Z" stroke="#2E3192" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg></div>
                          {collection?.name && 
                            <p>{collection.name}</p>
                          }
                        </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      }
      <section className="relative flex pt-10 md:pt-[60px] 2xl:pt-[100px] overflow-hidden bg-[#F8F8F8]">
        {investorRelationData.next?.data ? (
          <Image src={getStrapiMedia(investorRelationData.next.data.attributes.url)} width={investorRelationData.next.data.attributes.width} height={investorRelationData.next.data.attributes.height} alt={investorRelationData.next.data.attributes?.alternativeText ? investorRelationData.next.data.attributes.alternativeText: "bottom-img" } className="absolute left-0 h-[200px] w-[60%]" /> 
        ) : (
          <Image src={LastBg} alt="bottom-img" className="absolute left-0 h-[200px] w-[60%]" />
        )}
        <div className="container mx-auto relative h-[200px] flex items-end justify-end">
          <Image
            src={BGTiger}
            alt="bottom-img"
            className="absolute right-[20%]"
          />
          {investorRelationData?.name && investorRelationData?.link &&
            <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4">
              Next Page :
              <Link
                className="text-[#F5811E] font-medium flex items-center gap-1"
                href={investorRelationData.link}
              >
                {investorRelationData.name}
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
          }
        </div>
      </section>
      <Footer />
    </>
  );
}
