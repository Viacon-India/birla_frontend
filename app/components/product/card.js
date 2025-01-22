"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import loadImage from "../../assets/images/load.png";
import traImage from "../../assets/images/tra.png";
import patternImage from "../../assets/images/pattern.png";
import constructionImage from "../../assets/images/axle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSearchParams } from "next/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Product({ data }) {
  const searchParams = new URLSearchParams(useSearchParams());
  const sub_segment = searchParams.get("sub_segment");
  const machinery = searchParams.get("machinery");
  const rim_recommended = searchParams.get("rim_recommended");
  const size = searchParams.get("size");
  const pattern_type = searchParams.get("pattern_type");

  const [filteredSizes, setFilteredSizes] = useState([]);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".new-product-card-image",
  //     { scale: "0.2", opacity: 0.9, transition: "1s" },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       duration: 0.1,
  //       // ease: "power1.out",
  //       scrollTrigger: {
  //         trigger: ".product-sec",
  //         start: "top 55%",
  //         end: "top 55%",
  //         scrub: 1,
  //         // markers: true,
  //       },
  //     }
  //   );
  //   if(machinery) {
  //     const getSizesFromUSA = (data) => {
  //       if(data?.tables &&
  //         data.tables?.table &&
  //         data.tables.table.length > 0) {
  //         let sizes = [];
  //         data.tables.table.forEach((tableEntry) => {
  //           if (tableEntry.standard === 'USA') {
  //             tableEntry.row.forEach((rowEntry) => {
  //               if (rowEntry.machinery && rowEntry.machinery.name === machinery) {
  //                 sizes.push(rowEntry.size);
  //               }
  //               // if ((rowEntry.machinery && rowEntry.machinery.name === machinery) && (rowEntry.size && rowEntry.size === size)) {
  //               //   sizes.push(rowEntry.size);
  //               // }
  //             });
  //           }
  //         });
  //         return sizes;
  //       }
  //     };
  //     setFilteredSizes(getSizesFromUSA(data));
  //   }
  // }, [data]);

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
    const filterSizes = (data) => {
      if (data?.tables && data.tables?.table && data.tables.table.length > 0) {
        let sizes = [];
        data.tables.table.forEach((tableEntry) => {
          if (tableEntry.standard === "USA") {
            tableEntry.row.forEach((rowEntry) => {
              const matchesFilters = [
                !machinery ||
                  (rowEntry.machinery && rowEntry.machinery.name === machinery),
                !rim_recommended ||
                  rowEntry.rim_recommended === rim_recommended,
                !size || rowEntry.size === size,
                !pattern_type || rowEntry.pattern_type === pattern_type,
                !sub_segment || rowEntry.sub_segment === sub_segment,
              ].every(Boolean);

              if (matchesFilters) {
                sizes.push(rowEntry.size);
              }
            });
          }
        });
        return sizes;
      }
      return [];
    };

    setFilteredSizes(filterSizes(data));
  }, [machinery, rim_recommended, size, pattern_type, sub_segment, data]);

  return (
    <div className="new-product-card">
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
        <div className="flex gap-8 px-4 pt-4 xl:justify-between">
          {data?.type && (
            <div className="new-product-iconListSec flex flex-col gap-6 2xl:gap-10">
              {data.type?.load && (
                <div className="flex gap-[6px] items-center">
                  <Image src={loadImage} alt="icon" />
                  <span>
                    <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      Load Type
                    </p>
                    <p className="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.load}
                    </p>
                  </span>
                </div>
              )}
              {data.type?.tra && (
                <div className="flex gap-[6px] items-center">
                  <Image src={traImage} alt="icon" />
                  <span>
                    <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      TRA
                    </p>
                    <p className="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.tra}
                    </p>
                  </span>
                </div>
              )}
              {data.type?.pattern && (
                <div className="flex gap-[6px] items-center">
                  <Image alt="icon" src={patternImage} />
                  <span>
                    <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      Pattern
                    </p>
                    <p className="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.pattern}
                    </p>
                  </span>
                </div>
              )}
              {data.type?.construction && (
                <div className="flex gap-[6px] items-center">
                  <Image alt="icon" src={constructionImage} />
                  <span>
                    <p className="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                      Construction
                    </p>
                    <p className="text-[15px] !text-[#727C8D] !mb-0">
                      {data.type.construction}
                    </p>
                  </span>
                </div>
              )}
            </div>
          )}
          <div className="w-[136px] h-[195px] 2xl:w-[196px] 2xl:h-[280px] translate-y-[-30px]">
            <figure className="new-product-card-image">
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
      <div className="new-product-card-detail">
        <div className="flex">
          <div className="flex flex-col w-full">
            <Link href={data?.permalink}>
              <h2 className="line-clamp-1">{data?.title}</h2>
            </Link>
            <p className="!h-[44px] !w-[95%] !line-clamp-2">
              {data?.description}
            </p>
          </div>
          {data?.vehicle_types && data.vehicle_types.length > 0 && (
            <div
              className="tooltip"
              data-tip={data.vehicle_types
                .map((vehicle) => vehicle.name)
                .join(", ")}
            >
              <div className="w-[72px] h-[48px] bg-[#E2DCF4] rounded-[12px] p-2">
                <div className="overflow-x-hidden">
                  <div className="h-8 animate-[moveLtoR_4s_infinite] flex justify-center items-center gap-1 w-max">
                    {data.vehicle_types.map(
                      (vehicle) =>
                        vehicle?.icon && (
                          <figure key={vehicle.id}>
                            <Image
                              src={getStrapiMedia(vehicle.icon?.url)}
                              className="h-8 w-full object-contain"
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {data.vehicle_types?.data && data.vehicle_types.data.length > 0 && (
            <div className="w-[72px] h-[48px] bg-[#E2DCF4] rounded-[12px] p-2">
              <div className="overflow-hidden">
                <div className="h-8 animate-[moveLtoR_4s_infinite] flex justify-center items-center gap-1 w-max">
                  {data.vehicle_types.data.map(
                    (vehicle) =>
                      vehicle.attributes.icon?.data && (
                        <Image
                          src={getStrapiMedia(
                            vehicle.attributes.icon.data.attributes?.url
                          )}
                          className="h-8 w-full object-contain"
                          width={vehicle.attributes.icon.data.attributes?.width}
                          height={
                            vehicle.attributes.icon.data.attributes?.height
                          }
                          key={vehicle.id}
                          alt={
                            vehicle.attributes.icon.data.attributes
                              ?.alternativeText
                              ? vehicle.attributes.icon.data.attributes
                                  .alternativeText
                              : "icon"
                          }
                        />
                      )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {filteredSizes && filteredSizes.length > 0 && (
          <div className="flex gap-3 mt-2 relative">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={2.5}
              freeMode={true}
              className="chipSwiper !w-[85%] !ml-0 !static"
            >
              {filteredSizes
                .sort((a, b) => {
                  let valueA, valueB;
                  const sortOrder = "asc"; // intial order
                  const [sizeA, sizeB] = a ? a.split("-").map(Number) : [0, 0];
                  const [sizeC, sizeD] = b ? b.split("-").map(Number) : [0, 0];
                  valueA = sizeA * 1000 + sizeB;
                  valueB = sizeC * 1000 + sizeD;
                  if (sortOrder === "asc") {
                    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
                  } else {
                    return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
                  }
                })
                .map((row, index) => (
                  <SwiperSlide className="!w-fit" key={index}>
                    <button className="size-chip">{row}</button>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        )}
        {!filteredSizes.length > 0 &&
          data?.tables &&
          data.tables?.table &&
          data.tables.table.length > 0 &&
          data.tables.table.map(
            (table) =>
              table?.standard &&
              table.standard == "USA" &&
              table?.row &&
              table.row.length > 0 && (
                <div className="flex gap-3 mt-2 relative" key={table.id}>
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
                        <button className="size-chip">{row.size}</button>
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
