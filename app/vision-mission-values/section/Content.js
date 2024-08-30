"use client";

import GradualSpacing from "@/components/GradualSpacing";
import Image from "next/image";
import Vision from "../../assets/images/vision.jpg";
import MissionBackground from "../../assets/images/mission-background.jpg";
import ValuesBackground from "../../assets/images/values-background.jpg";

export default function NewAbout() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto">
        <div className="flex gap-10 py-[60px]">
          <figure className="relative w-[50%]">
            <Image src={Vision} className="w-full rounded-xl relative z-1" />
          </figure>
          <div className="w-[50%] flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-3">
              <span className="section-heading">Vision</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">Our Vision</h3>
              </div>
            </div>
            <p>
              Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
              Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed.
              Curabitur maximus mollis diam, vel varius sapien suscipit eget.
              Cras sollicitudin ligula at volutpat ultrices. Donec vitae mi
              vulputate, suscipit urna in, malesuada nisl.
            </p>
          </div>
        </div>
        <div className="py-[60px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">Mission</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Our Mission</h3>
            </div>
          </div>
          <div className="relative flex items-center">
            <Image src={MissionBackground} className="w-full rounded-xl" />
            <div className="absolute flex gap-8 mx-8">
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mb-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Mission point 1
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mt-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Mission point 2
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mb-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Mission point 3
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mt-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Mission point 4
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[60px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">Values</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Our Values</h3>
            </div>
          </div>
          <div className="relative flex items-center">
            <Image src={ValuesBackground} className="w-full rounded-xl" />
            <div className="absolute flex flex-col gap-8 ml-20 2xl:ml-28">
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Value point 1
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Value point 2
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Value point 3
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.66724H17"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275"
                        stroke="#1A1D21"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">
                    Value point 4
                  </h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
