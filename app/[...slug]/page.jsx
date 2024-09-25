"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import "aos/dist/aos.css";
import GradualSpacing from "@/components/GradualSpacing";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import {PageBanner} from "../components/pageCommon/pageCommon";
import {PageEnd} from "../components/pageCommon/pageCommon";
import SectionSelection from "../components/section/section";

import Banner from "../assets/images/investor-relation-banner.jpg";
import LastBg from "../assets/images/investor-relation-next.png";

export default function Page({ params }) {
  const [slugs, setSlugs] = useState(params.slug);
 
  const [pageData, setPageData] = useState([]);
  const [sidebar, setSidebar] = useState([]);
 
  useEffect(() => {
    alert(slugs.at(-1));
 
    fetch(getStrapiMedia("/api/pages/"+slugs.at(-1))).then((res) => res.json()).then((page) => {
      setPageData(page);
    });
 
    slugs.at(-2) == 'investor-relations' && fetch(getStrapiMedia("/api/investor-relations-sidebar?populate=*")).then((tab) => tab.json()).then((pageSidebar) => {
      setSidebar(pageSidebar.data.attributes.pages.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title={pageData?.title} Banner={pageData?.hero} StaticBanner={Banner} />
      <section className="bg-[#F8F8F8] pt-10 md:pt-[60px]">
        <div className="container mx-auto grid grid-cols-12 gap-10">
          {sidebar.length > 0 &&
            <div className="col-span-3 bg-primary border border-primary rounded-xl h-fit text-white font-[17px] leading-[17px] flex flex-col overflow-hidden sticky top-[125px] md:[145px] max-h-[80vh] overflow-y-auto">
              {sidebar.map((tab) => (
                tab.attributes.slug == slugs.at(-1) ?
                <span className="px-5 py-[10px] bg-[#FEEFE2] text-primary" key={tab.id}>{tab.attributes.title}</span> :
                <Link href={tab.attributes.permalink} className="px-5 py-[10px]" key={tab.id}>{tab.attributes.title}</Link>
              ))}
            </div>
          }
          {pageData.section && 
            <div className={'flex flex-col gap-10 '+ (sidebar.length > 0?'col-span-9':'col-span-12')}>
              {pageData.section.map((section) => (
                <div className="bg-white border border-[#DEE1E5] rounded-xl p-[60px] flex flex-col gap-10 h-fit w-full" key={section.id}>
                  <SectionSelection section={section} />
                </div>
              ))}
            </div>
          }
        </div>
      </section>
      <PageEnd
        EndPageData={pageData?.end}
        Background='bg-[#F8F8F8]'
        EndStaticImage={LastBg}
      />
      <Footer />
    </>
  );
}
