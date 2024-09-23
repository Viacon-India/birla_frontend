"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Banner from "../../../assets/images/life1.jpg";
import Link from "next/link";
import Image from "next/image";
import life9 from "../../../assets/images/life9.png";
import tigerMask from "../../../assets/images/tiger-mask2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import life2 from "../../../assets/images/lifea.jpg";
import life3 from "../../../assets/images/lifeb.jpg";
import life4 from "../../../assets/images/lifec.jpg";
import life5 from "../../../assets/images/lifed.jpg";
import life6 from "../../../assets/images/lifee.jpg";
import life7 from "../../../assets/images/lifef.jpg";
import life8 from "../../../assets/images/life8.jpg";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";
import SectionSelection from "@/app/components/section/section";

export default function LifeAtBirla({params}) {
  const slugs = params.slug;

  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    AOS.init();
    fetch(getStrapiMedia("/api/pages/life-at-birla-tyres"))
    .then((res) => res.json())
    .then((pages) => {
      setPageData(pages);
    });
  }, []);

  const tigerMarkSection = {
    __component: "section.tigerMark",
    heading: "Employee Engagement",
    title: "Journey from Fantastic Candidate Experience to Excellent Employee Experience ",
    images: [
      {
        url: tigerMask,
        alt: "tigermark",
      },
    ],
    tigerMarkDetail: [
      {
        description:
          "Our commitment to create an atmosphere where every employee feels respected, empowered and inspired to contribute to the company’s success is embodied in the vision of the organization. We aim to create an inclusive, respectful, and equitable work environment that values diversity and encourages creativity.",
      },
      {
        description:
          "Recognizing human capital as a key driver of our business, we strive to offer diverse and challenging opportunities that lead to fulfilling careers. We uphold the core values of Commitment to Excellence, Agility, Reliability and Empathy. ",
      },
      {
        description:
          "Our rewards and recognition policy and talent engagement activities are designed to acknowledge and appreciate employees' exceptional performance, dedication, contributions, creativity and collaboration.",
      },

    ],
  };




  return (
    <>
      <Navbar />
      <PageBanner Title="Life At BIRLA TYRES" StaticBanner={Banner} />
      <SectionSelection section={tigerMarkSection} Background={true} />
      <section className="page-content-sec bg-[#F8F8F8]">
        <div className="container mx-auto flex flex-col">
          <div className="gallery-sec grid grid-cols-4 gap-3 2xl:gap-4 pt-6 md:pt-10 2xl:pt-[60px]">
            <figure
              className="w-full h-[316px] mb-0"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Image
                src={life2}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure
              className="w-full h-[316px] mb-0 col-span-2"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Image
                src={life3}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure
              className="w-full h-[316px] mb-0"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Image
                src={life4}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure
              className="w-full h-[316px] mb-0 col-span-2"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Image
                src={life5}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure
              className="w-full h-[316px] mb-0"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Image
                src={life6}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
            <figure
              className="w-full h-[316px] mb-0"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <Image
                src={life7}
                alt="bottom-img"
                className="gallery-sec-image"
              />
            </figure>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-4 md:gap-8 2xl:gap-[60px] pt-[60px] md:pt-[120px]">
            <div
              className="box-title-sec w-full md:w-[45%] relative"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="section-heading">Job Application Form</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">
                  Want to leverage your Talent? Let us know!
                </h3>
              </div>
              <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6] mt-6">
                Are you a domain expert or a beginner? What are the skills that
                make you stand out? Let us know what you are good at. Even if
                you do not have any specific skills but you have potential and
                want to have a fulfilling career, <strong>join us!</strong>
              </p>
              <Image alt="mask" src={tigerMask} className="" />
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="form-content"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <form className="w-full flex flex-col gap-3 md:gap-5">
                  <div>
                    <span className="text-primary text-[32px] md:text-[36px] 2xl:text-[48px] font-bold">
                      Job Application Form
                    </span>
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      First name
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="Your preferred name"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      Last name
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="Your family name"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      E-mail address
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      Contact number
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      placeholder="+91 (555) 000-0000"
                    />
                  </div>
                  <div className="form-row">
                    <label className="contact-label" htmlFor="">
                      Your Specialization
                    </label>
                    <select className="contact-select" name="" id="">
                      <option value="">Tell us your role</option>
                      <option value="Query Type 1">Production</option>
                      <option value="Query Type 2">Engineering</option>
                      <option value="Query Type 3">Quality</option>
                      <option value="Query Type 4">HSE</option>
                      <option value="Query Type 1">Logistics & PPC</option>
                      <option value="Query Type 2">Procurement & Stores</option>
                      <option value="Query Type 3">Sales & Marketing</option>
                      <option value="Query Type 4">R&D and Technology</option>
                      <option value="Query Type 1">Finance & Accounts</option>
                      <option value="Query Type 2">HR, ER & Administration</option>
                      <option value="Query Type 3">Legal & Compliance</option>
                      <option value="Query Type 4">Industrial Engineering & Manufacturing Excellence</option>
                      <option value="Query Type 1">Corporate Strategy</option>
                      <option value="Query Type 2">IT</option>

                    </select>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="contact-label" htmlFor="">
                      Upload Resume
                    </label>
                    <div className="relative border border-[#727C8D] rounded-[8px]">
                      <input
                        className="contact-input w-full rounded-[8px]"
                        type="none"
                        placeholder="Upload Word/PDF file (size max 5 mb)"
                      />
                      <input type="file" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-[14px] text-[#000000]">
                      Yes - I confirm that I am over 18 years old. By submitting
                      this form, you agree to the Terms and conditions and have
                      read the{" "}
                      <span className="underline underline-offset-1 cursor-pointer">
                        privacy notice.
                      </span>
                    </span>
                  </div>
                  <Link
                    href="thankyou"
                    className="primary-btn w-fit flip-animate-2"
                  >
                    <span data-hover="Submit Your Application">
                      Submit Your Application
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={life9} Background={true}/>
      <Footer />
    </>
  );
}
