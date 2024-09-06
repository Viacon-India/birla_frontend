"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import "aos/dist/aos.css";
import GradualSpacing from "@/components/GradualSpacing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Float from "../components/float/float";
import {PageEnd} from "../components/pageCommon/pageCommon";
import {Files} from "../components/section/section";
import {Table} from "../components/section/section";
import {Address} from "../components/section/section";

import Banner from "../assets/images/investor-relation-banner.jpg";
import LastBg from "../assets/images/investor-relation-next.png";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';


export default function Page({ params }) {
  const slugs = params.slug.reverse();
  const parent_slug = slugs[1]; // investor-relation

  const [investorRelationData, setInvestorRelationData] = useState([]);
  const [investorRelationTable, setInvestorRelationTable] = useState([]);

  console.log(investorRelationData.section);
  
  useEffect(() => {
    fetch(getStrapiMedia("/api/investor-relation/"+slugs[0]))
      .then((res) => res.json())
      .then((investor_relation) => {
        setInvestorRelationData(investor_relation.data.attributes);
      });

    fetch(getStrapiMedia("/api/investor-relations?populate[fields][0]=title&populate[fields][1]=slug"))
      .then((tab) => tab.json())
      .then((investor_relation_table) => {
        setInvestorRelationTable(investor_relation_table.data);
      });
  }, []);

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
                  <Link href="dealer-locator" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="relative z-10">
                  <GradualSpacing
                    className="top-banner-sec-heading"
                    text={investorRelationData.title}
                    paddingLeft="pl-5"
                    paddingRight="pr-5"
                  />
                </div>
              </div>
            </div>
            {investorRelationData.hero?.data ? (
              investorRelationData.hero.data.attributes.ext == '.mp4' ?
              <video className="absolute top-0 w-full h-full object-cover" loop autoPlay muted>
                <source src={getStrapiMedia(investorRelationData.hero.data.attributes.url)} type="video/mp4" />
              </video> :
              <Image src={getStrapiMedia(investorRelationData.hero.data.attributes.url)} width={investorRelationData.hero.data.attributes.width} height={investorRelationData.hero.data.attributes.height} alt={investorRelationData.hero.data.attributes?.alternativeText ? investorRelationData.hero.data.attributes.alternativeText: "Hero-Banner" } className="absolute top-0 w-full h-full object-cover" />
            ) : (
              <Image src={Banner} alt="Hero-Banner" className="absolute top-0 w-full h-full object-cover" />
            )}
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F8] pt-10 md:pt-[60px]">
        <div className="container mx-auto grid grid-cols-12 gap-10">
          {investorRelationTable.length > 0 &&
            <div className="col-span-3 bg-primary border border-primary rounded-xl h-fit text-white font-[17px] leading-[17px] flex flex-col overflow-hidden sticky top-[125px] md:[145px]">
              {investorRelationTable.map((tab) => (
                tab.attributes.slug == slugs[0] ?
                <span className="px-5 py-[10px] bg-[#FEEFE2] text-primary" key={tab.id}>{tab.attributes.title}</span> :
                <Link href={tab.attributes.permalink} className="px-5 py-[10px]" key={tab.id}>{tab.attributes.title}</Link>
              ))}
            </div>
          }
          {investorRelationData.section && 
            <div className={'flex flex-col gap-10 '+ (investorRelationTable.length > 0?'col-span-9':'col-span-12')}>
              {investorRelationData.section.map((section) => (
                <div className="bg-white border border-[#DEE1E5] rounded-xl p-[60px] flex flex-col gap-10 h-fit w-full" key={section.id}>
                  {section?.files && <Files section={section} />}
                  {section?.table && <Table section={section} />}
                  {section?.details && <Address section={section} />}
                </div>
              ))}
            </div>
          }
        </div>
      </section>
      <PageEnd
        Title={investorRelationData?.name ? investorRelationData.name : '' }
        TitleLink={investorRelationData?.link ? investorRelationData.link : '' }
        Background='bg-[#F8F8F8]'
        EndImageSrc={investorRelationData.next?.data ? getStrapiMedia(investorRelationData.next.data.attributes.url) : LastBg }
        EndImageW={investorRelationData.next?.data ? investorRelationData.next.data.attributes.width : '' }
        EndImageH={investorRelationData.next?.data ? investorRelationData.next.data.attributes.height : '' }
        EndImageAlt={investorRelationData.next?.data ? investorRelationData.next.data.attributes.alternativeText : '' }
      />
      <Footer />
    </>
  );
}
