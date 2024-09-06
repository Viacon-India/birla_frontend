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
import {PageEnd} from "../components/pageCommon/pageCommon"

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
                  {section?.title &&
                    <div className="section-title-wrapper">
                      <h2 className="section-title !text-[32px] !leading-[38px] !font-semibold">{section.title}</h2>
                    </div>
                  }
                  {section.files && section.files.map((files) => (
                    <div className="flex flex-col gap-6" key={files.id}>
                      {files.collection.length > 0 && files?.description &&
                        <h3 className="text-[#3D434C] font-medium text-[32px] leading-[32px]">{files.description}</h3>
                      }
                      {files.collection.length > 0 &&
                        <div className="grid grid-cols-2 gap-6">
                          {files.collection.map((collection) => (
                            collection.file?.data &&
                              <Link href={getStrapiMedia(collection.file.data.attributes.url)} className="flex gap-3 items-center w-fit" key={collection.id}>
                                <div className="p-2 bg-[#E0E1F5] rounded-xl"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20.25 15.75H17.625V20.25M19.875 18.375H17.625M4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75H4.5V20.25M4.5 12V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25M14.25 3L19.5 8.25M14.25 3V8.25H19.5M19.5 8.25V12M12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C14.0129 19.169 14.25 18.5967 14.25 18C14.25 17.4033 14.0129 16.831 13.591 16.409C13.169 15.9871 12.5967 15.75 12 15.75H10.6875V20.25H12Z" stroke="#2E3192" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg></div>
                                {collection?.name && 
                                  <p>{collection.name}</p>
                                }
                              </Link>
                          ))}
                        </div>
                      }
                    </div>
                  ))}
                  {section.table && section.table.map((tables) => (
                    <div className="flex flex-col gap-6" key={tables.id}>
                      {tables.row.length > 0 && tables?.description &&
                        <h3 className="text-[#3D434C] font-medium text-[32px] leading-[32px]">{tables.description}</h3>
                      }
                      {tables.row.length > 0 &&
                        <div class="relative overflow-x-auto">
                          <table class="w-full text-sm text-left rtl:text-right">
                            <thead class="font-semibold text-[16px] leading-[20px] text-secondary bg-[#E0E1F5]">
                              <tr>
                                <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                                  Sr. No.
                                </th>
                                <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                                  Product name
                                </th>
                                <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                                  Color
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {tables.row.map((rows, index) => (
                                <tr class="font-medium text-[14px] leading-[17px] text-[#3D434C]" key={rows.id}>
                                  <th scope="row" class="px-2 py-3 border border-[#C9CDD3]">{index+1}</th>
                                  {rows?.name && <th scope="row" class="px-2 py-3 border border-[#C9CDD3]">{rows.name}</th>}
                                  {rows?.status && <th scope="row" class="px-2 py-3 border border-[#C9CDD3]">{rows.status}</th>}
                                </tr>                               
                              ))}
                            </tbody>
                          </table>
                        </div>
                      }
                    </div>
                  ))}
                  {section.details && section.details.map((details) => (
                    <div className="flex flex-col gap-3" key={details.id}>
                      {details.content.length > 0 && details?.description &&
                        <h3 className="text-[#3D434C] font-medium text-[24px] leading-[32px]">{details.description}</h3>
                      }
                      {details.content.length > 0 &&  
                        <BlocksRenderer
                          content={details.content}
                          blocks={{
                            paragraph: ({ children }) => <p className="text-[#4F5662]">{children}</p>,
                            heading: ({ children, level }) => {
                              switch (level) {
                                case 1:
                                  return <Typography variant="h1">{children}</Typography>
                                case 2:
                                  return <Typography variant="h2">{children}</Typography>
                                case 3:
                                  return <Typography variant="h3">{children}</Typography>
                                case 4:
                                  return <Typography variant="h4">{children}</Typography>
                                case 5:
                                  return <Typography variant="h5">{children}</Typography>
                                case 6:
                                  return <Typography variant="h6">{children}</Typography>
                                default:
                                  return <Typography variant="h1">{children}</Typography>
                              }
                            },
                            link: ({ children, url }) => <Link href={url}>{children}</Link>,
                          }}
                          modifiers={{
                            bold: ({ children }) => <strong>{children}</strong>,
                            italic: ({ children }) => <span className="italic">{children}</span>,
                          }}
                        />
                      }
                    </div>
                  ))}
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
