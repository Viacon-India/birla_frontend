"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import img1 from "../../assets/images/truck1.jpg";
import img2 from "../../assets/images/truck2.jpg";
import img3 from "../../assets/images/truck3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "@/components/TypingAnimation";
import GradualSpacing from "@/components/GradualSpacing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "process";

export default function Innovation({ Heading='', Title='', Data={}}) {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    AOS.init();

    gsap.fromTo(
      ".innovation-sec .container ",
      {
        x: "-100%",
        opacity: 0,
        rotation: 5,
        // scale: 2.5,
        zIndex: 99,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
        rotation: 0,
        // scale: 1,
        zIndex: 0,
        scrollTrigger: {
          trigger: ".innovation-sec",
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
          // markers: true, // Optional: For debugging, remove or set to false in production
        },
      }
    );
  }, []);
  return (
    <section className="innovation-sec sec-gap">
      <div className="container mx-auto">
        <div className="upper-title-sec flex justify-between items-end">
          <div className="new">
            {Heading &&
              <span className="section-heading">{Heading}</span>
            }
            {Title &&
              <div className="section-title-wrapper">
                <GradualSpacing className="section-title" text={Title} />
              </div>
            }
          </div>
        </div>
        {Data?.data && Data.data.length > 0 &&
          <div class="innovative-slider mt-5 2xl:mt-8">
            <Swiper
              navigation={true}
              freeMode={true}
              speed={2400}
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
                  slidesPerView: 3,
                  spaceBetween: 48,
                },
              }}
              modules={[FreeMode, Autoplay, Navigation]}
              className="mySwiper !px-6"
            >
              {Data.data.map((slider) => ( slider.attributes?.permalink &&
                <SwiperSlide key={slider.id}>
                  <div
                    className="innovation-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {slider.attributes.featured?.data &&
                      <figure>
                        <Link href={slider.attributes.permalink}>
                          <Image
                            className="innovation-card-image"
                            src={getStrapiMedia(slider.attributes.featured.data.attributes?.url)}
                            width={slider.attributes.featured.data.attributes?.width}
                            height={slider.attributes.featured.data.attributes?.height}
                            alt={slider.attributes.featured.data.attributes?.alternativeText}
                          />
                        </Link>
                      </figure>
                    }
                    {slider.attributes?.title &&
                      <h2>{slider.attributes.title}</h2>
                    }
                    {slider.attributes?.tag_line &&
                      <p>{slider.attributes.tag_line}</p>
                    }
                    <Link
                      href={slider.attributes.permalink}
                      className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                    >
                      <span data-hover="Explore Products">Explore Products</span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
              {Data.data.map((slider) => ( slider.attributes?.permalink &&
                <SwiperSlide key={slider.id}>
                  <div
                    className="innovation-card"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    {slider.attributes.featured?.data &&
                      <figure>
                        <Link href={slider.attributes.permalink}>
                          <Image
                            className="innovation-card-image"
                            src={getStrapiMedia(slider.attributes.featured.data.attributes?.url)}
                            width={slider.attributes.featured.data.attributes?.width}
                            height={slider.attributes.featured.data.attributes?.height}
                            alt={slider.attributes.featured.data.attributes?.alternativeText}
                          />
                        </Link>
                      </figure>
                    }
                    {slider.attributes?.title &&
                      <h2>{slider.attributes.title}</h2>
                    }
                    {slider.attributes?.tag_line &&
                      <p>{slider.attributes.tag_line}</p>
                    }
                    <Link
                      href={slider.attributes.permalink}
                      className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
                    >
                      <span data-hover="Explore Products">Explore Products</span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }
      </div>
    </section>
  );
}
