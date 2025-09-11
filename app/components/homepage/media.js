"use client";
import React, { use } from "react";
import { useState, useEffect } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import TypingAnimation from "@/components/TypingAnimation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function Media({ Heading = "", Title = "" }) {
  const [pageData, setPageData] = useState([]);
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };
  useEffect(() => {
    fetch(
      getStrapiMedia(
        "/api/media-presences?sort[0]=date:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=link&populate[image][fields][0]=name&populate[image][fields][1]=width&populate[image][fields][2]=height&populate[image][fields][3]=url&populate[image][fields][4]=alternativeText&pagination[pageSize]=3&pagination[page]=1"
      )
    )
      .then((res) => res.json())
      .then((page) => {
        setPageData(page);
      });
    AOS.init();
  }, [Heading]);

  return (
    <section className="media-sec sec-gap" id="media-sec">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-title-sec">
          {Heading && <span className="section-heading">{Heading}</span>}
          {Title && (
            <div className="section-title-wrapper">
              <TypingAnimation className="section-title-home" text={Title} />
            </div>
          )}
          {pageData?.data && pageData.data.length > 0 && (
            <div className="mt-5 2xl:mt-10">
              <Swiper
                navigation={true}
                // freeMode={true}
                // speed={2400}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 48,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper !px-6"
              >
                {pageData.data.map(
                  (media) =>
                    media.attributes?.link && (
                      <SwiperSlide key={media.id}>
                        <div
                          className="media-card"
                          data-aos="fade-right"
                          data-aos-duration="1500"
                        >
                          {media.attributes.image?.data && (
                            <figure>
                              <Link
                                target="_blank"
                                href={media.attributes.link}
                              >
                                <Image
                                  className="media-card-image"
                                  src={getStrapiMedia(
                                    media.attributes.image.data.attributes.url
                                  )}
                                  width={
                                    media.attributes.image.data.attributes.width
                                  }
                                  height={
                                    media.attributes.image.data.attributes
                                      .height
                                  }
                                  alt={
                                    media.attributes.image.data.attributes
                                      .alternativeText
                                  }
                                  priority={true}
                                />
                              </Link>
                              <span></span>
                            </figure>
                          )}
                          <div className="media-card-detail">
                            <div className="flex justify-between items-center mb-3">
                              <span className="card-cat">Media</span>
                              {media.attributes?.date && (
                                <span className="card-date">
                                  {formatDate(media.attributes.date)}
                                </span>
                              )}
                            </div>
                            <h2 className="media-title">
                              <Link
                                target="_blank"
                                href={media.attributes.link}
                              >
                                {media.attributes?.title}
                              </Link>
                            </h2>
                            {media.attributes?.description && (
                              <p className="media-detail">
                                {media.attributes.description}
                              </p>
                            )}
                            <Link
                              target="_blank"
                              href={media.attributes.link}
                              className="primary-btn w-fit !px-6 flip-animate-2"
                            >
                              <span data-hover="Read More">Read More</span>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                )}
                {pageData.data.map(
                  (media) =>
                    media.attributes?.link && (
                      <SwiperSlide key={media.id}>
                        <div
                          className="media-card"
                          data-aos="fade-right"
                          data-aos-duration="1500"
                        >
                          {media.attributes.image?.data && (
                            <figure>
                              <Link
                                target="_blank"
                                href={media.attributes.link}
                              >
                                <Image
                                  className="media-card-image"
                                  src={getStrapiMedia(
                                    media.attributes.image.data.attributes.url
                                  )}
                                  width={
                                    media.attributes.image.data.attributes.width
                                  }
                                  height={
                                    media.attributes.image.data.attributes
                                      .height
                                  }
                                  alt={
                                    media.attributes.image.data.attributes
                                      .alternativeText
                                  }
                                  priority={true}
                                />
                              </Link>
                              <span></span>
                            </figure>
                          )}
                          <div className="media-card-detail">
                            <div className="flex justify-between items-center mb-3">
                              <span className="card-cat">Media</span>
                              {media.attributes?.date && (
                                <span className="card-date">
                                  {formatDate(media.attributes.date)}
                                </span>
                              )}
                            </div>
                            <h2 className="media-title">
                              <Link
                                target="_blank"
                                href={media.attributes.link}
                              >
                                {media.attributes?.title}
                              </Link>
                            </h2>
                            {media.attributes?.description && (
                              <p className="media-detail">
                                {media.attributes.description}
                              </p>
                            )}
                            <Link
                              target="_blank"
                              href={media.attributes.link}
                              className="primary-btn w-fit !px-6 flip-animate-2"
                            >
                              <span data-hover="Read More">Read More</span>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                )}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
