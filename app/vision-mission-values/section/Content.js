"use client";

import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import Image from "next/image";
import Vision from "../../assets/images/Vision.jpg";
import MissionBackground from "../../assets/images/mission-background.jpg";
import ValuesBackground from "../../assets/images/values-background.jpg";



export default function NewAbout() {
  return (
    <section className="overflow-hidden">
      <div className="container mx-auto">
        <div className="flex gap-10 py-[60px]">
          <figure className="pl-[23px] mt-[23px] relative w-[40.5%]">
            <Image src={Vision} className="w-full rounded-xl relative z-1" />
            <svg className="absolute left-[-10px] top-[-23px] w-full h-full" width="503" height="363" viewBox="0 0 503 363" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.40654 362.089C4.47325 360.873 2.12695 358.527 0.910563 355.593L1.83429 355.21C1.29703 353.915 1 352.493 1 351V344.946H0V332.839H1V320.732H0V308.625H1V296.518H0V284.411H1V272.304H0V260.196H1V248.089H0V235.982H1V223.875H0V211.768H1V199.661H0V187.554H1V175.446H0V163.339H1V151.232H0V139.125H1V127.018H0V114.911H1V102.804H0V90.6964H1V78.5893H0V66.4821H1V54.375H0V42.2679H1V30.1607H0V18.0536H1V12C1 10.5067 1.29703 9.0852 1.83429 7.78961L0.910566 7.40655C2.12695 4.47327 4.47326 2.12695 7.40655 0.910568L7.7896 1.83429C9.0852 1.29703 10.5066 1 12 1H17.9873V0H29.9623V1H41.9373V0H53.9123V1H65.8873V0H77.8624V1H89.8373V0H101.812V1H113.787V0H125.762V1H137.737V0H149.712V1H161.687V0H173.662V1H185.637V0H197.612V1H209.587V0H221.562V1H233.537V0H245.512V1H257.487V0H269.462V1H281.437V0H293.412V1H305.387V0H317.362V1H329.337V0H341.312V1H353.287V0H365.262V1H377.237V0H389.212V1H401.187V0H413.162V1H425.137V0H437.112V1H449.087V0H461.062V1H473.037V0H485.012V1H491C492.493 1 493.915 1.29703 495.21 1.83429L495.593 0.910563C498.527 2.12695 500.873 4.47326 502.089 7.40654L501.166 7.7896C501.703 9.08519 502 10.5066 502 12V18.1751H503V30.5253H502V42.8755H503V55.2257H502V67.5759H503V79.9261H502V92.2763H503V104.627H502V116.977H503V129.327H502V141.677H503V154.027H502V166.378H503V178.728H502V191.078H503V203.428H502V215.778H503V228.129H502V234.304C502 237.643 500.483 240.802 497.876 242.89L493.321 246.537L493.947 247.317L484.838 254.611L484.213 253.83L475.105 261.124L475.73 261.904L466.622 269.198L465.997 268.417L456.888 275.711L457.513 276.491L448.405 283.785L447.78 283.004L438.672 290.298L439.297 291.078L430.189 298.372L429.564 297.591L420.455 304.885L421.08 305.666L411.972 312.959L411.347 312.178L402.239 319.472L402.864 320.253L393.756 327.546L393.131 326.766L384.022 334.059L384.647 334.84L375.539 342.133L374.914 341.353L365.806 348.646L366.431 349.427L357.323 356.72L356.697 355.94L352.143 359.586C350.192 361.149 347.767 362 345.268 362H339.316V363H327.414V362H315.512V363H303.609V362H291.707V363H279.804V362H267.902V363H256V362H244.097V363H232.195V362H220.292V363H208.39V362H196.488V363H184.585V362H172.683V363H160.78V362H148.878V363H136.975V362H125.073V363H113.171V362H101.268V363H89.3657V362H77.4633V363H65.5609V362H53.6585V363H41.756V362H29.8536V363H17.9512V362H12C10.5066 362 9.08519 361.703 7.78959 361.166L7.40654 362.089Z" stroke="#F5811E" stroke-width="2" stroke-dasharray="12 12"/>
            </svg>
          </figure>
          <div className="w-[59.5%] flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-3">
              <span className="section-heading">Vision</span>
              <div className="section-title-wrapper">
                <GradualSpacing className="section-title" text="Our Vision" />
              </div>
            </div>
            <p>Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur maximus mollis diam, vel varius sapien suscipit eget. Cras sollicitudin ligula at volutpat ultrices.  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.</p>
          </div>
        </div>
        <div className="py-[60px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">Mission</span>
            <div className="section-title-wrapper">
              <GradualSpacing className="section-title" text="Our Mission" />
            </div>
          </div>
          <div className="relative flex items-center">
            <Image src={MissionBackground} className="w-full rounded-xl" />
            <div className="absolute flex gap-8 mx-8">
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mb-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Mission point 1</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mt-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Mission point 2</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mb-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Mission point 3</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 mt-11">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Mission point 4</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-6 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="py-[60px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">Values</span>
            <div className="section-title-wrapper">
              <GradualSpacing className="section-title" text="Our Values" />
            </div>
          </div>
          <div className="relative flex items-center">
            <Image src={ValuesBackground} className="w-full rounded-xl" />
            <div className="absolute flex flex-col gap-8 ml-20 2xl:ml-28">
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Value point 1</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Value point 2</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Value point 3</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg p-[20px] flex flex-col gap-3 w-[400px]">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#E0E1F5] rounded-xl py-[14px] px-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7.66724H17" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M1 1H17V18.7778C17 19.3671 16.7592 19.9324 16.3305 20.3491C15.9019 20.7659 15.3205 21 14.7143 21H3.28571C2.67951 21 2.09812 20.7659 1.66947 20.3491C1.24082 19.9324 1 19.3671 1 18.7778V1Z" stroke="#1A1D21" stroke-width="1.5" stroke-linejoin="round"/>
                      <path d="M5.57031 12.1113H6.71317M11.2846 12.1113H12.4275M5.57031 16.5558H6.71317M11.2846 16.5558H12.4275" stroke="#1A1D21" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[#1A1D21] text-[22px] leading-[33px] font-semibold">Value point 4</h3>
                </div>
                <p className="text-[#3D434C] font-oak-sans text-base line-clamp-4 2xl:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
