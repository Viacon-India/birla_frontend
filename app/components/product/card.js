"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import loadImage from "../../assets/images/load.png";
import traImage from "../../assets/images/tra.png";
import patternImage from "../../assets/images/pattern.png";
import constructionImage from "../../assets/images/axle.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Product({ data }) {
  useEffect(() => {
    gsap.fromTo(
      ".new-product-card-image",
      { scale: "0.2", opacity: 0.9, transition: "1s" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.1,
        // ease: "power1.out",
        scrollTrigger: {
          trigger: ".product-sec",
          start: "top 55%",
          end: "top 55%",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <div class="new-product-card">
      <Link href={data.permalink}>
        <span
          className={
            data.premium
              ? "prem-product-card-tag prem-product-tag"
              : "new-product-card-tag"
          }
        >
          {data.premium ? "Premium" : "Standard"}
        </span>
        <div class="flex gap-8 px-4 pt-4 xl:justify-between">
          {data?.type && (
            <div class="new-product-iconListSec flex flex-col gap-6 2xl:gap-10">
              {data.type?.load && (
                <div class="flex gap-[6px] items-center">
                  <Image src={loadImage} alt="icon" />
                  <span>
                    <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      Load Type
                    </p>
                    <p class="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.load}
                    </p>
                  </span>
                </div>
              )}
              {data.type?.tra && (
                <div class="flex gap-[6px] items-center">
                  <Image src={traImage} alt="icon" />
                  <span>
                    <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      TRA
                    </p>
                    <p class="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.tra}
                    </p>
                  </span>
                </div>
              )}
              {data.type?.pattern && (
                <div class="flex gap-[6px] items-center">
                  <Image alt="icon" src={patternImage} />
                  <span>
                    <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      Pattern
                    </p>
                    <p class="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.pattern}
                    </p>
                  </span>
                </div>
              )}
              {data.type?.construction && (
                <div class="flex gap-[6px] items-center">
                  <Image alt="icon" src={constructionImage} />
                  <span>
                    <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      Construction
                    </p>
                    <p class="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.construction}
                    </p>
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="w-[145px] h-[195px] 2xl:w-[180px] 2xl:h-[280px] translate-y-[-30px]">
            <figure class="new-product-card-image">
              {data?.gallery && data.gallery.length > 0 && (
                <Image
                  src={getStrapiMedia(data.gallery[0]?.url)}
                  width={data.gallery[0]?.width}
                  height={data.gallery[0]?.height}
                  alt={
                    data.gallery[0]?.alternativeText
                      ? data.gallery[0].alternativeText
                      : "product"
                  }
                />
              )}
              {data.gallery?.data && data.gallery.data.length > 0 && (
                <Image
                  src={getStrapiMedia(data.gallery.data[0].attributes?.url)}
                  width={data.gallery.data[0].attributes?.width}
                  height={data.gallery.data[0].attributes?.height}
                  alt={
                    data.gallery.data[0].attributes?.alternativeText
                      ? data.gallery.data[0].attributes.alternativeText
                      : "product"
                  }
                />
              )}
            </figure>
          </div>
        </div>
      </Link>
      <div class="new-product-card-detail">
        <div className="flex">
          <div className="flex flex-col w-full">
            <Link href={data?.permalink}>
              <h2 className="line-clamp-1">{data?.title}</h2>
            </Link>
            <p class="!h-[44px] !w-[95%] !line-clamp-2">{data?.description}</p>
          </div>
          {/* {data?.vehicle_types && data.vehicle_types.length > 0 && data.vehicle_types.map((vehicle) => (
            <div
              class="w-[72px] h-[48px] bg-[#E2DCF4] rounded-[12px] flex justify-center items-center p-2 tooltip"
              data-tip={vehicle.name}
              key={vehicle.id}
            >
            
              {vehicle?.icon && (
                <Image
                  src={getStrapiMedia(vehicle.icon?.url)}
                  class="h-8 object-cover animate-[moveLtoR_6s_infinite]"
                  width={vehicle.icon?.width}
                  height={vehicle.icon?.height}
                  alt={
                    vehicle.icon?.alternativeText
                      ? vehicle.icon.alternativeText
                      : "icon"
                  }
                />
              )}
            </div>
          ))} */}
          {data?.vehicle_types &&
            data.vehicle_types.length > 0 &&
            <div className="w-[72px] h-[48px] bg-[#E2DCF4] rounded-[12px] p-2">
              <div className="overflow-x-hidden">
                <div className="h-8 object-cover animate-[moveLtoR_6s_infinite] flex justify-center items-center gap-1 w-max">
                  {data.vehicle_types.map((vehicle) => (
                    vehicle?.icon && (
                      <figure key={vehicle.id} className="tooltip" data-tip={vehicle.name}>
                        <Image
                          src={getStrapiMedia(vehicle.icon?.url)}
                          class="h-8 w-full object-cover"
                          width={vehicle.icon?.width}
                          height={vehicle.icon?.height}
                          alt={
                            vehicle.icon?.alternativeText
                              ? vehicle.icon.alternativeText
                              : "icon"
                          }
                        />
                        {/* <span className=" absolute left-0 top-[-20px] bg-red-600">{vehicle.name}</span> */}
                      </figure>
                    )
                  ))}
                </div>
              </div>
            </div>
          }
          {data.vehicle_types?.data &&
            data.vehicle_types.data.length > 0 &&
            <div className="w-[72px] h-[48px] bg-[#E2DCF4] rounded-[12px] p-2">
              <div className="overflow-hidden">
                <div className="h-8 object-cover animate-[moveLtoR_6s_infinite] flex justify-center items-center gap-1 w-max">
                  {data.vehicle_types.data.map((vehicle) => (
                      vehicle.attributes.icon?.data && (
                        <Image
                          src={getStrapiMedia(
                            vehicle.attributes.icon.data.attributes?.url
                          )}
                          class="h-8 w-full object-cover"
                          width={vehicle.attributes.icon.data.attributes?.width}
                          height={vehicle.attributes.icon.data.attributes?.height}
                          key={vehicle.id}
                          alt={
                            vehicle.attributes.icon.data.attributes?.alternativeText
                              ? vehicle.attributes.icon.data.attributes
                                  .alternativeText
                              : "icon"
                          }
                        />
                      )
                  ))}
                </div>
              </div>
            </div>
          }
        </div>
        {data?.tables &&
          data.tables?.table &&
          data.tables.table.length > 0 &&
          data.tables.table.map(
            (table) =>
              table?.standard &&
              table.standard == "USA" &&
              table?.row &&
              table.row.length > 0 && (
                <div class="flex gap-3 mt-2 relative" key={table.id}>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={2.5}
                    freeMode={true}
                    className="chipSwiper !w-[85%] !ml-0 !static"
                  >
                    {table.row.map((row) => (
                      <SwiperSlide className="!w-fit" key={row.id}>
                        <button class="size-chip">{row.size}</button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )
          )}
      </div>
    </div>
  );
}
