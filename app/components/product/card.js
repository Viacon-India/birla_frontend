"use client";

import Image from "next/image";

import loadImage from "../../assets/images/load.png";
import patternImage from "../../assets/images/pattern.png";
import constructionImage from "../../assets/images/axle.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function SectionSelection({
  type,
  load = "--",
  pattern = "--",
  construction = "--",
  productImage,
  productName,
  productDescription,
  icon,
  sizes,
}) {
  return (
    <div class="new-product-card">
      <span className={type === 'Premium' ? 'prem-product-card-tag' : 'new-product-card-tag'}>{type}</span>
      <div class="flex gap-8 px-4 pt-4">
        <div class="new-product-iconListSec flex flex-col gap-6 2xl:gap-10">
          <div class="flex gap-[6px] items-center">
            <Image src={loadImage} alt="icon" />
            <span>
              <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                Load Type
              </p>
              <p class="text-[15px] !text-[#727C8D] !mb-0">{load}</p>
            </span>
          </div>
          <div class="flex gap-[6px] items-center">
            <Image alt="icon" src={patternImage} />
            <span>
              <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                Pattern
              </p>
              <p class="text-[15px] !text-[#727C8D] !mb-0">{pattern}</p>
            </span>
          </div>
          <div class="flex gap-[6px] items-center">
            <Image alt="icon" src={constructionImage} />
            <span>
              <p class="text-[18px] font-semibold !text-[#727C8D] !mb-0">
                Construction
              </p>
              <p class="text-[15px] !text-[#727C8D] !mb-0">{construction}</p>
            </span>
          </div>
        </div>
        <figure>
          <Image alt="card" class="new-product-card-image" src={productImage} />
        </figure>
      </div>
      <div class="new-product-card-detail">
        <h2>{productName}</h2>
        <p class="!h-[44px] !w-[75%] !line-clamp-2">{productDescription}</p>
        <div class="flex gap-3 mt-2 relative">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2.5}
            freeMode={true}
            className="chipSwiper !w-[90%] !ml-0 !static"
          >
            {sizes.map((size, ind) => (
              <SwiperSlide className="!w-fit" key={ind}>
                <button class="size-chip">{size}</button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div class="new-product-svg-wrapper">
          <Image alt="icon" class="h-8 object-contain" src={icon} />
        </div>
      </div>
    </div>
  );
}
