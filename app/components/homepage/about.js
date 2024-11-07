"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getStrapiMedia } from "@/lib/utils";
import { Autoplay, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

import icon1 from "../../assets/images/about-icon1.png";
import icon2 from "../../assets/images/about-icon2.png";
import icon3 from "../../assets/images/about-icon3.png";
import icon4 from "../../assets/images/about-icon4.png";
import icon5 from "../../assets/images/about-icon5.png";
import icon6 from "../../assets/images/about-icon6.png";
import icon7 from "../../assets/images/about-icon7.png";
import icon8 from "../../assets/images/about-icon8.png";
import img1 from "../../assets/images/about-img-1.jpg";
import img2 from "../../assets/images/about-img-2.jpg";
import img3 from "../../assets/images/about-img-3.jpg";
import img4 from "../../assets/images/about-img-4.jpg";
import img1H from "../../assets/images/about-icon1.png";
import GradualSpacing from "@/components/GradualSpacing";
import mask1 from "../../assets/images/iconmask-1.png";
import mask2 from "../../assets/images/iconmask-2.png";
import mask3 from "../../assets/images/iconmask-3.png";
import mask4 from "../../assets/images/iconmask-4.png";
import Triangle1 from "../../assets/images/triangle1.png";
import img5 from "../../assets/images/about-img-5.jpg";

import { FreeMode, Thumbs, EffectFade } from "swiper/modules";

export default function NewAbout({Data}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return ( Data &&
    <section className="new-about-slider sec-gap overflow-hidden h-[100%]">
      <div className="container mx-auto">
        <div className="flex items-start flex-col-reverse lg:flex-row gap-4 lg:gap-8 2xl:gap-[60px]">
          {Data?.image?.data &&
            <figure
              className="w-full lg:w-[45%] h-[350px] md:h-[420px] xl:h-[480px] relative glare"
              data-aos="flip-right"
              data-aos-duration="1500"
            >
              {Data?.triangle &&
                <Image
                  className="absolute -z-1 w-[90%] h-[90%]"
                  src={Triangle1}
                  alt="triangle"
                />
              }
              <Image
                className="translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 w-[90%] h-[90%] rounded-[12px]"
                src={getStrapiMedia(Data.image.data.attributes?.url)}
                width={Data.image.data.attributes?.width}
                height={Data.image.data.attributes?.height}
                alt={Data.image.data.attributes?.alternativeText}
              />
            </figure>
          }
          <div className="box-content-sec relative lg:w-[55%] flex flex-col">
            {Data?.heading &&
              <span className="section-heading">{Data.heading}</span>
            }
            {Data?.title &&
              <div className="section-title-wrapper mb-6 md:mb-8 2xl:mb-10">
                <GradualSpacing className="section-title" text={Data.title} />
              </div>
            }
            {Data?.content && Data.content.length > 0 && (
              <BlocksRenderer
                content={Data.content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p data-aos="fade-left" data-aos-duration="1000">
                      {children}
                    </p>
                  ),
                  heading: ({ children, level }) => {
                    switch (level) {
                      case 1:
                        return <h1>{children}</h1>;
                      case 2:
                        return <h2>{children}</h2>;
                      case 3:
                        return (
                          <h3 data-aos="fade-left" data-aos-duration="1000">
                            {children}
                          </h3>
                        );
                      case 4:
                        return <h4>{children}</h4>;
                      case 5:
                        return <h5>{children}</h5>;
                      case 6:
                        return <h6>{children}</h6>;
                      default:
                        return <h1>{children}</h1>;
                    }
                  },
                  list: (props) => {
                    if (props.format === "ordered") {
                      return (
                        <ol data-aos="fade-left" data-aos-duration="1000">
                          {props.children}
                        </ol>
                      );
                    }
                    return (
                      <ul data-aos="fade-left" data-aos-duration="1000">
                        {props.children}
                      </ul>
                    );
                  },
                  "list-item": (props) => <li>{props.children}</li>,
                  link: ({ children, url }) => (
                    <Link href={url}>{children}</Link>
                  ),
                }}
                modifiers={{
                  bold: ({ children }) => <strong>{children}</strong>,
                  italic: ({ children }) => (
                    <span className="italic">{children}</span>
                  ),
                }}
              />
            )}
            {Data?.link &&
              <Link href={Data.link} className="more-btn">
                Know More
              </Link>
            }
            <div class="line-loader self-end">
              <div class="bar bar1"></div>
              <div class="bar bar2"></div>
              <div class="bar bar3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
