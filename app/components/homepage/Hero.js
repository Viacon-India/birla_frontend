"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade'
import Link from "next/link";
import GradualSpacing from "@/components/GradualSpacing";
import LetterPullup from "@/components/LetterPullup";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Hero() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".sideNav-wrapper",
      { right: "-40px" },
      {
        right: "0px",
        scrollTrigger: {
          trigger: ".media-sec-marker",
          scroller: "body",
          start: "top top",
          end: "top 60%",
          scrub: 2,
          // markers: true
        },
      }
    );

    gsap.fromTo(
      ".sideNav-wrapper",
      { right: "0px" },
      {
        right: "-40px",
        scrollTrigger: {
          trigger: ".video-content",
          scroller: "body",
          start: "top 40%",
          end: "top top",
          scrub: 2,
          // markers: true
        },
      }
    );
  });

  return (
    <div className="relative">
      <div className="loader-sec">
        <div class="video-wrapper">
          <video className="w-full h-fit object-contain" loop autoPlay muted>
            <source src={"/assets/videos/tyre-loader-2.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="sideNav-wrapper">
        <Link className="sideNav" href="">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3289_339)">
              <path
                d="M9 0C4.05176 0 0 4.05244 0 9C0 13.9482 4.05244 18 9 18C13.9482 18 18 13.9476 18 9C18 4.05176 13.9476 0 9 0ZM9 16.9453C4.61893 16.9453 1.05469 13.3811 1.05469 9C1.05469 4.61893 4.61893 1.05469 9 1.05469C13.3811 1.05469 16.9453 4.61893 16.9453 9C16.9453 13.3811 13.3811 16.9453 9 16.9453Z"
                fill="white"
              />
              <path
                d="M9 3.41016C5.91367 3.41016 3.41016 5.92191 3.41016 9C3.41016 12.0931 5.93015 14.5898 9 14.5898C12.0705 14.5898 14.5898 12.0921 14.5898 9C14.5898 5.92397 12.0883 3.41016 9 3.41016ZM9 10.1602C8.36032 10.1602 7.83984 9.63968 7.83984 9C7.83984 8.36032 8.36032 7.83984 9 7.83984C9.63968 7.83984 10.1602 8.36032 10.1602 9C10.1602 9.63968 9.63968 10.1602 9 10.1602ZM4.46484 9C4.46484 8.36252 4.59737 7.75552 4.83577 7.2047L6.87373 8.38133C6.81647 8.57785 6.78516 8.78522 6.78516 9C6.78516 9.21478 6.81647 9.42215 6.87373 9.61867L4.83577 10.7953C4.59737 10.2445 4.46484 9.63748 4.46484 9ZM11.1263 8.38133L13.1642 7.2047C13.4026 7.75552 13.5352 8.36252 13.5352 9C13.5352 9.63748 13.4026 10.2445 13.1642 10.7953L11.1263 9.61867C11.1835 9.42215 11.2148 9.21478 11.2148 9C11.2148 8.78522 11.1835 8.57785 11.1263 8.38133ZM12.6357 6.29201L10.5978 7.46864C10.3112 7.16968 9.94221 6.95091 9.52734 6.84915V4.49574C10.7964 4.64337 11.9074 5.3167 12.6357 6.29201ZM8.47266 4.49574V6.84915C8.05779 6.95091 7.68878 7.16968 7.40218 7.46864L5.36435 6.29201C6.09261 5.3167 7.2036 4.64337 8.47266 4.49574ZM5.36435 11.708L7.40218 10.5314C7.68878 10.8303 8.05779 11.0491 8.47266 11.1508V13.5043C7.2036 13.3566 6.09261 12.6833 5.36435 11.708ZM9.52734 13.5043V11.1508C9.94221 11.0491 10.3112 10.8303 10.5978 10.5314L12.6357 11.708C11.9074 12.6833 10.7964 13.3566 9.52734 13.5043Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3289_339">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Find a Tyre
        </Link>
        <Link className="sideNav" href="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 10.9053V16.25C3.75 16.4158 3.81585 16.5747 3.93306 16.6919C4.05027 16.8092 4.20924 16.875 4.375 16.875H15.625C15.7908 16.875 15.9497 16.8092 16.0669 16.6919C16.1842 16.5747 16.25 16.4158 16.25 16.25V10.9054M17.5 7.5V8.75C17.5 9.41304 17.2366 10.0489 16.7678 10.5178C16.2989 10.9866 15.663 11.25 15 11.25C14.337 11.25 13.7011 10.9866 13.2322 10.5178C12.7634 10.0489 12.5 9.41304 12.5 8.75M17.5 7.5L16.3795 3.5783C16.3422 3.44771 16.2634 3.33282 16.1549 3.25103C16.0465 3.16924 15.9144 3.125 15.7786 3.125H4.22144C4.08562 3.125 3.9535 3.16924 3.84507 3.25103C3.73664 3.33282 3.6578 3.44771 3.62049 3.5783L2.5 7.5M17.5 7.5H2.5M12.5 8.75V7.5M12.5 8.75C12.5 9.41304 12.2366 10.0489 11.7678 10.5178C11.2989 10.9866 10.663 11.25 10 11.25C9.33696 11.25 8.70107 10.9866 8.23223 10.5178C7.76339 10.0489 7.5 9.41304 7.5 8.75M7.5 8.75V7.5M7.5 8.75C7.5 9.41304 7.23661 10.0489 6.76777 10.5178C6.29893 10.9866 5.66304 11.25 5 11.25C4.33696 11.25 3.70107 10.9866 3.23223 10.5178C2.76339 10.0489 2.5 9.41304 2.5 8.75V7.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Find a Dealer
        </Link>
        <Link className="sideNav" href="">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.375H16.5M1.5 1.375V12C1.5 12.1658 1.56585 12.3247 1.68306 12.4419C1.80027 12.5592 1.95924 12.625 2.125 12.625H15.875C16.0408 12.625 16.1997 12.5592 16.3169 12.4419C16.4342 12.3247 16.5 12.1658 16.5 12V1.375M1.5 1.375L9 8.25L16.5 1.375"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ho@birlatyre.com
        </Link>
        <Link className="sideNav" href="">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4545 1.12502C11.514 1.40997 12.4801 1.96831 13.2559 2.74413C14.0317 3.51995 14.5901 4.48601 14.875 5.54553M9.80728 3.54043C10.443 3.7114 11.0226 4.04641 11.4881 4.5119C11.9536 4.97739 12.2886 5.55702 12.4596 6.19274M5.22471 7.75121C5.87302 9.07663 6.94739 10.1461 8.27575 10.7884C8.37294 10.8344 8.48045 10.8544 8.58769 10.8463C8.69493 10.8382 8.79822 10.8023 8.88737 10.7421L10.8433 9.43787C10.9298 9.38019 11.0293 9.345 11.1328 9.33548C11.2364 9.32597 11.3407 9.34244 11.4362 9.3834L15.0954 10.9516C15.2197 11.0044 15.3234 11.0962 15.3911 11.2131C15.4587 11.33 15.4865 11.4657 15.4702 11.5998C15.3546 12.5048 14.913 13.3366 14.2282 13.9395C13.5434 14.5424 12.6624 14.875 11.75 14.875C8.93207 14.875 6.22956 13.7556 4.23699 11.763C2.24442 9.77045 1.125 7.06794 1.125 4.25002C1.12505 3.33765 1.45765 2.45659 2.06053 1.77179C2.66341 1.087 3.49523 0.645437 4.40023 0.529781C4.53431 0.513556 4.67002 0.541343 4.78693 0.608955C4.90384 0.676567 4.99561 0.780341 5.04841 0.904643L6.61798 4.56698C6.65858 4.66171 6.67512 4.765 6.66614 4.86767C6.65715 4.97034 6.62291 5.0692 6.56647 5.15543L5.26676 7.14135C5.2076 7.23069 5.17263 7.33384 5.16526 7.44073C5.15789 7.54762 5.17837 7.6546 5.22471 7.75121Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          033-22624354
        </Link>
        <Link className="sideNav !bg-secondary" href="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 10C13 11.6569 11.6569 13 10 13V14.5C12.4853 14.5 14.5 12.4853 14.5 10H13ZM10 13C8.34315 13 7 11.6569 7 10H5.5C5.5 12.4853 7.51472 14.5 10 14.5V13ZM7 10C7 8.34315 8.34315 7 10 7V5.5C7.51472 5.5 5.5 7.51472 5.5 10H7ZM10 7C11.6569 7 13 8.34315 13 10H14.5C14.5 7.51472 12.4853 5.5 10 5.5V7ZM5.875 2.125H14.125V0.625H5.875V2.125ZM14.125 2.125C16.1961 2.125 17.875 3.80393 17.875 5.875H19.375C19.375 2.9755 17.0245 0.625 14.125 0.625V2.125ZM17.875 5.875V14.125H19.375V5.875H17.875ZM17.875 14.125C17.875 16.1961 16.1961 17.875 14.125 17.875V19.375C17.0245 19.375 19.375 17.0245 19.375 14.125H17.875ZM14.125 17.875H5.875V19.375H14.125V17.875ZM5.875 17.875C3.80393 17.875 2.125 16.1961 2.125 14.125H0.625C0.625 17.0245 2.9755 19.375 5.875 19.375V17.875ZM2.125 14.125V5.875H0.625V14.125H2.125ZM2.125 5.875C2.125 3.80393 3.80393 2.125 5.875 2.125V0.625C2.9755 0.625 0.625 2.9755 0.625 5.875H2.125Z"
              fill="#F4F5F6"
            />
            <path
              d="M14.875 6.25C15.4963 6.25 16 5.74632 16 5.125C16 4.50368 15.4963 4 14.875 4C14.2537 4 13.75 4.50368 13.75 5.125C13.75 5.74632 14.2537 6.25 14.875 6.25Z"
              fill="#F4F5F6"
            />
          </svg>
          Instagram
        </Link>
        <Link className="sideNav !bg-secondary" href="">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 7.50009V13.5001M8.25 10.1251C8.25 9.4289 8.52656 8.76122 9.01884 8.26893C9.51113 7.77665 10.1788 7.50009 10.875 7.50009C11.5712 7.50009 12.2389 7.77665 12.7312 8.26893C13.2234 8.76122 13.5 9.4289 13.5 10.1251V13.5001M5.25 7.50009V13.5001M1.5 0.75H16.5C16.9142 0.75 17.25 1.08579 17.25 1.5V16.5C17.25 16.9142 16.9142 17.25 16.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V1.5C0.75 1.08579 1.08579 0.75 1.5 0.75Z"
              stroke="#F4F5F6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.25 5.625C5.87132 5.625 6.375 5.12132 6.375 4.5C6.375 3.87868 5.87132 3.375 5.25 3.375C4.62868 3.375 4.125 3.87868 4.125 4.5C4.125 5.12132 4.62868 5.625 5.25 5.625Z"
              fill="#F4F5F6"
            />
          </svg>
          Linkedin
        </Link>
        <Link className="sideNav !bg-secondary" href="">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 19V8.50009C10 7.90335 10.2371 7.33105 10.659 6.9091C11.081 6.48714 11.6533 6.25009 12.25 6.25009H13.75M7 11.5001H13"
              stroke="#F4F5F6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Facebook
        </Link>
        <Link className="sideNav !bg-secondary" href="">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 7.61786L17.0302 0H15.4772L9.78685 6.61448L5.24198 0H0L6.87274 10.0023L0 17.9908H1.55305L7.56222 11.0056L12.3619 17.9908H17.6039L10.4763 7.61786H10.4767ZM8.34961 10.0904L7.65326 9.09439L2.11263 1.16911H4.49802L8.96937 7.56506L9.66572 8.56106L15.4779 16.8748H13.0926L8.34961 10.0908V10.0904Z"
              fill="#F4F5F6"
            />
          </svg>
          Twiter
        </Link>
        <Link className="sideNav !bg-secondary" href="">
          <svg
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8.99997L9.5 5.99997V12L14 8.99997Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.25 8.99997C1.25 11.7895 1.5382 13.4263 1.75729 14.2675C1.81585 14.4972 1.92832 14.7097 2.08537 14.8873C2.24241 15.0649 2.43952 15.2026 2.66037 15.2888C5.79883 16.4949 11 16.4618 11 16.4618C11 16.4618 16.2011 16.4949 19.3396 15.2888C19.5604 15.2026 19.7576 15.0649 19.9146 14.8873C20.0717 14.7097 20.1841 14.4972 20.2427 14.2675C20.4618 13.4263 20.75 11.7896 20.75 8.99997C20.75 6.21039 20.4618 4.57368 20.2427 3.73248C20.1841 3.50273 20.0717 3.29025 19.9146 3.11264C19.7576 2.93502 19.5605 2.79738 19.3396 2.71113C16.2012 1.50506 11 1.53818 11 1.53818C11 1.53818 5.79888 1.50506 2.66039 2.71112C2.43955 2.79737 2.24244 2.93501 2.08539 3.11262C1.92834 3.29024 1.81588 3.50272 1.75731 3.73246C1.53821 4.57366 1.25 6.21039 1.25 8.99997Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Youtube
        </Link>
      </div>

      <Swiper
        loop={true}
        speed={3000}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-end pb-[60px]">
              <div class="container mx-auto flex flex-col justify-between h-[80%]">
                <div class="flex flex-col gap-5 relative z-10">
                  <Link href="" className="primary-btn-1">
                    Find a Tyre
                  </Link>
                  <Link href="" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading"
                    text="Truck Bus Bias"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Progess in Every Mile"}
                    delay={0.05}
                  />
                  <Link href="#" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              loop
              autoPlay
              muted
            >
              <source src={"/assets/videos/TBB2.mp4"} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-end pb-[60px]">
              <div class="container mx-auto flex flex-col justify-between h-[80%]">
                <div class="flex flex-col gap-5 relative z-10">
                  <Link href="" className="primary-btn-1">
                    Find a Tyre
                  </Link>
                  <Link href="" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading"
                    text="Off The Road"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Ready for Every Challenge"}
                    delay={0.05}
                  />
                  <Link href="#" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              loop
              autoPlay
              muted
            >
              <source src={"/assets/videos/OTR-3.mp4"} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card-main relative">
            <span className="slider-overlay"></span>
            <div className="w-full h-[100vh] flex items-end pb-[60px]">
              <div class="container mx-auto flex flex-col justify-between h-[80%]">
                <div class="flex flex-col gap-5 relative z-10">
                  <Link href="" className="primary-btn-1">
                    Find a Tyre
                  </Link>
                  <Link href="" className="primary-btn-2">
                    Find a Dealer
                  </Link>
                </div>
                <div className="swiper-card relative z-10">
                  <GradualSpacing
                    className="hero-sec-heading"
                    text="Agriculture"
                  />
                  <LetterPullup
                    className="section-subheading"
                    words={"Strength in Every Turn"}
                    delay={0.05}
                  />
                  <Link href="#" class="explore-btn">
                    <span>Explore Now</span>
                    <div class="wave"></div>
                  </Link>
                </div>
              </div>
            </div>
            <video
              className="absolute top-0 w-full h-fit object-contain"
              loop
              autoPlay
              muted
            >
              <source src={"/assets/videos/AGR.mp4"} type="video/mp4" />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}