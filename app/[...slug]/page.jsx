"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import "aos/dist/aos.css";
import GradualSpacing from "@/components/GradualSpacing";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {Float} from "../components/pageCommon/pageCommon";
import {MainButton} from "../components/pageCommon/pageCommon";
import {PageBanner} from "../components/pageCommon/pageCommon";
import {PageEnd} from "../components/pageCommon/pageCommon";
import SectionSelection from "../components/section/section";

import Banner from "../assets/images/investor-relation-banner.jpg";
import LastBg from "../assets/images/investor-relation-next.png";

export default function Page({ params }) {
  const slugs = params.slug.reverse();
  const parent_slug = slugs[1]; // investor-relation

  const [investorRelationData, setInvestorRelationData] = useState([]);
  const [investorRelationTable, setInvestorRelationTable] = useState([]);

  // console.log(investorRelationData.section);
  
  useEffect(() => {
    fetch(getStrapiMedia("/api/investor-relation/"+slugs[0])).then((res) => res.json()).then((investor_relation) => {
      setInvestorRelationData(investor_relation.data.attributes);
    });

    parent_slug == 'investor-relation' && fetch(getStrapiMedia("/api/investor-relations?populate[fields][0]=title&populate[fields][1]=slug")).then((tab) => tab.json()).then((investor_relation_table) => {
      setInvestorRelationTable(investor_relation_table.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title={investorRelationData.title} Banner={investorRelationData.hero} StaticBanner={Banner} />
      <section className="bg-[#F8F8F8] pt-10 md:pt-[60px]">
        <div className="container mx-auto grid grid-cols-12 gap-10">
          {investorRelationTable.length > 0 &&
            <div className="col-span-3 bg-primary border border-primary rounded-xl h-fit text-white font-[17px] leading-[17px] flex flex-col overflow-hidden sticky top-[125px] md:[145px] max-h-[80vh] overflow-y-auto">
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
                  <SectionSelection section={section} />
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
        EndImage={investorRelationData.next}
        EndStaticImage={LastBg}
      />
      <Footer />
    </>
  );
}
