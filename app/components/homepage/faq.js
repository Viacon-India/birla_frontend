"use client";

import React from "react";
import Image from "next/image";
import faqImage from "../../assets/images/faq-img.jpg";
import GradualSpacing from "@/components/GradualSpacing";

export default function Faq() {
  return (
    <section className="faq-sec mt-10 md:mt-[60px] 2xl:mt-[100px] mb-[60px] md:mb-[80px] 2xl:mb-[120px] relative">
      <div className="container mx-auto overflow-hidden">
        <div className="upper-sec">
          <span className="section-heading">FAQS</span>
          <div className="section-title-wrapper">
            <GradualSpacing
              className="section-title"
              text="Frequently Asked Questions"
            />
          </div>
          <p className="text-[#3D434C] text-[14px] md:text-[16px] 2xl:text-[18px] font-medium leading-[1.7] mt-5 2xl:mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            vitae mi vulputate, suscipit urna in, malesuada nisl. Pellentesque
            laoreet pretium nisl, et pulvinar massa eleifend sed. Curabitur
            maximus mollis diam, vel varius sapien suscipit eget. Cras
            sollicitudin ligula at volutpat ultrices. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit,
          </p>
        </div>
        <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-8 2xl:mt-10">
          <div class="w-full md:w-[50%] h-fit sticky top-0">
            <figure className="w-full h-[350px] md:h-[450px] 2xl:h-[650px] mb-0">
              <Image
                className="w-full h-full object-cover rounded-[12px]"
                src={faqImage}
                alt="faqImg"
              />
            </figure>
          </div>
          <div class="accordion-list-sec md:w-[50%]">
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title">Lorem ipsum question 1</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 2</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 3</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 4</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 5</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 6</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 7</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 8</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 9</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
                  Pellentesque laoreet pretium nisl. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">Lorem ipsum question 10</div>
              <div className="collapse-content">
                <p>
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
