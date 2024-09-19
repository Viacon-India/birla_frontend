"use client";

import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

import loadImage from "../../assets/images/load.png";
import patternImage from "../../assets/images/pattern.png";
import constructionImage from "../../assets/images/axle.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";

export default function SectionSelection({ data }) {
  return (
    <div class="new-product-card">
      <Link href={data.permalink}>
        <span
          className={
            data.premium ? "prem-product-card-tag" : "new-product-card-tag"
          }
        >
          {data.premium ? "Premium" : "Standard"}
        </span>
        <div class="flex gap-8 px-4 pt-4">
          <div class="new-product-iconListSec flex flex-col gap-6 2xl:gap-10">
            <div class="flex gap-[6px] items-center">
              <Image src={loadImage} alt="icon" />
              <span>
                <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                  Load Type
                </p>
                <p class="text-[15px] !text-[#727C8D] !mb-0">
                  {data?.type?.load ? data.type.load : "--"}
                </p>
              </span>
            </div>
            <div class="flex gap-[6px] items-center">
              <Image alt="icon" src={patternImage} />
              <span>
                <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                  Pattern
                </p>
                <p class="text-[15px] !text-[#727C8D] !mb-0">
                  {data?.type?.pattern ? data.type.pattern : "--"}
                </p>
              </span>
            </div>
            <div class="flex gap-[6px] items-center">
              <Image alt="icon" src={constructionImage} />
              <span>
                <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                  Construction
                </p>
                <p class="text-[15px] !text-[#727C8D] !mb-0">
                  {data?.type?.construction ? data.type.construction : "--"}
                </p>
              </span>
            </div>
          </div>
          {data?.gallery && data.gallery.length > 0 && (
            <figure>
              <Image
                class="new-product-card-image"
                src={getStrapiMedia(data.gallery[0]?.url)}
                width={data.gallery[0]?.width}
                height={data.gallery[0]?.height}
                alt={
                  data.gallery[0]?.alternativeText
                    ? data.gallery[0].alternativeText
                    : "product"
                }
              />
            </figure>
          )}
        </div>
      </Link>
      <div class="new-product-card-detail">
        <div className="flex gap">
          <div className="flex flex-col w-full">
            <Link href={data?.permalink}>
              <h2 className="line-clamp-1">{data?.title}</h2>
            </Link>
            <p class="!h-[44px] !w-[95%] !line-clamp-2">{data?.description}</p>
          </div>
          {data?.vehicle_types &&
            data.vehicle_types.map((vehicle) => (
              <div
                class="new-product-svg-wrapper tooltip"
                data-tip={vehicle.name}
              >
                {vehicle?.icon && (
                  <Image
                    src={getStrapiMedia(vehicle.icon?.url)}
                    class="h-8 object-contain"
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
            ))}
        </div>
        {data?.section &&
          data.section[0].__component == "collection.product-table" && (
            <div class="flex gap-3 mt-2 relative">
              {data.section[0]?.row && (
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={2.5}
                  freeMode={true}
                  className="chipSwiper !w-[85%] !ml-0 !static"
                >
                  {data.section[0].row.map((row) => (
                    <SwiperSlide className="!w-fit" key={row.id}>
                      <button class="size-chip">{row.size}</button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          )}
      </div>
    </div>
  );
}
