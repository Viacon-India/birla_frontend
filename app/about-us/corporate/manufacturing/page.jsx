"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay } from "swiper/modules";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import { Float } from "../../../components/pageCommon/pageCommon";
import { MainButton } from "../../../components/pageCommon/pageCommon";
import Banner from "../../../assets/images/man1.jpg";
import Link from "next/link";
import Image from "next/image";
import GradualSpacing from "@/components/GradualSpacing";
import man2 from "../../../assets/images/man2.jpg";
import man3 from "../../../assets/images/man3.jpg";
import BGTiger from "../../../assets/images/tiger-mask3.png";
import man4 from "../../../assets/images/man4.jpg";
import man5 from "../../../assets/images/man5.jpg";
import man6 from "../../../assets/images/man6.jpg";
import man8 from "../../../assets/images/man8.png";
import man7 from "../../../assets/images/man7.jpg";
import man9 from "../../../assets/images/man9.png";
import man10 from "../../../assets/images/man10.png";
import man11 from "../../../assets/images/man11.png";
import man12 from "../../../assets/images/man12.jpg";
import man13 from "../../../assets/images/man13.jpg";
import man14 from "../../../assets/images/man14.jpg";
import man15 from "../../../assets/images/man15.jpg";
import man16 from "../../../assets/images/man16.jpg";
import man17 from "../../../assets/images/man17.jpg";
import man18 from "../../../assets/images/man18.jpg";
import man19 from "../../../assets/images/man19.jpg";
import man20 from "../../../assets/images/man20.jpg";
import man21 from "../../../assets/images/man21.jpg";
import tiger from "../../../assets/images/tiger.png";
import tigerMask from "../../../assets/images/tiger-mask2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function Manufacturing() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init();
    if (counter > 300) return;

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 300) {
          clearInterval(interval);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <Navbar />
      <PageBanner Title="Manufacturing" StaticBanner={Banner} />
      <section className="page-content-sec mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>300 tpd</h3>
              </div>
              <h2>Production Capacity</h2>
              <p>(all 3 segments)</p>
            </div>
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>8 inch - 34 inch</h3>
              </div>
              <h2>Range of Tyres Manufactured</h2>
              <p>(Rim Sizes)</p>
            </div>
            <div
              className="box-card"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div>
                <h3>37.8%</h3>
              </div>
              <h2>Greenery Coverage in Plant</h2>
              <p>(Well-planned layout taking environment into consideration)</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
            <div className="w-full md:w-[40%]">
              <span
                className="section-heading"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                our Manufacturing excellence
              </span>
              <div
                className="section-title-wrapper"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3 className="section-title">
                Where Quality Meets Innovation
                </h3>
                <Image
                  alt="mask"
                  src={tigerMask}
                  className="absolute left-10 top-[120px]"
                />
              </div>
            </div>
            <div className="w-full md:w-[60%] box-content-sec">
              <p data-aos="fade-left" data-aos-duration="500">
                We take pride in our state-of-the-art manufacturing facility
                located in Balasore, Odisha. Our plant is a testament to our
                commitment to quality, innovation, and sustainability in tyre
                production. Equipped with the latest technology and machinery,
                our facility operates with eco-friendly practices. Our team of
                highly skilled engineers, technicians, and workers are our asset
                and they constitute the backbone of our manufacturing
                excellence.
              </p>
              <p data-aos="fade-left" data-aos-duration="1000">
                At our plant, we emphasize rigorous quality control measures
                including multiple stages of testing and inspection,
                traceability, visual management, stringent safety protocols and
                the continuous review and evaluation of our workers’ skill sets.
                We also focus on our employee’s training and career growth
                opportunities. Additionally, we collaborate closely with our
                suppliers, supporting their training and development to ensure a
                steady supply of high-quality raw materials, which is crucial
                for our manufacturing process.
              </p>
              <p data-aos="fade-left" data-aos-duration="1500">
                By maintaining a single plant, we ensure close control over the
                manufacturing process, delivering tyres that meet the specific
                needs of our diverse clientele. Our plant is equipped to handle
                custom orders by quick setup changes, allowing us to produce
                tyres that meet specific requirements for various applications,
                from commercial to off-the road vehicles. We are committed to
                continuous improvement - through regular QMS/supplier audits and
                feedback mechanisms, we constantly seek ways to enhance our
                manufacturing processes and product quality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-10 relative">
            <figure className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-full p-7 z-10">
              <Image
                data-aos="zoom-in"
                data-aos-duration="2000"
                src={tiger}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man8}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-down-left"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man9}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man10}
                alt="img"
              />
            </figure>
            <figure
              className="w-full h-full"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <Image
                className="w-full h-full object-cover"
                src={man11}
                alt="img"
              />
            </figure>
          </div>
          <div className="manufacture-slider-sec">
            <span className="section-heading">our Safety Philosophy</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">
                Commitment to a Safe & Sustainable Workplace
              </h3>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-6 2xl:mt-10">
              Safety is our top priority; it’s a core value that guides every
              action we take. Our goal is to become a zero accident company,
              positioning ourselves as a best-in-class organization for safety
              performance and leadership. This commitment extends to safeguard
              the health and safety of not only our employees but also
              contractors, visitors, customers and any other individuals who
              might get impacted by our activities. While working to achieve and
              maintain our zero-accident goal, we remain firmly dedicated to
              integrating safety in every aspect of our operations. Our
              commitment to safety ensures that every team member can work
              confidently and efficiently, knowing that their well-being is our
              top concern. Our employees undergo comprehensive safety training
              programs that cover all aspects of their work.
            </p>
            <ul className="mt-4 md:mt-6 2xl:mt-10 pl-4">
              <li className="list-disc text-[14px] md:text-[16px] 2xl:text-[17px] mt-4">
                A Risk-Based approach and mapping have been initiated for all
                routine and non-routine activities. The newly implemented
                Permit-to-Work system includes Risk Assessment before the
                commencement of work involving all relevant departments. This
                approach significantly reduces the chances of incidents during
                activity execution, with every individual connected to the
                activity.
              </li>
              <li className="list-disc text-[14px] md:text-[16px] 2xl:text-[17px] mt-4">
                A protocol has been established and implemented for Safety
                Audits, proactively involving shop floor employees to identify
                and correct unsafe conditions and procedures.
              </li>
              <li className="list-disc text-[14px] md:text-[16px] 2xl:text-[17px] mt-4">
                Regular training sessions and safety drills are conducted to
                ensure emergency preparedness
              </li>
            </ul>
            <div class="mt-5 md:mt-10 2xl:mt-12">
              <span className="section-heading">our Safety rules</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">Core Safety Rules</h3>
              </div>
              <h3 className="text-[24px] md:text-[30px] 2xl:text-[32px] font-bold text-secondary mt-6 md:mt-8 2xl:mt-10">
                For Employees:
              </h3>
              <Swiper
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
                    slidesPerView: 3.2,
                    spaceBetween: 48,
                  },
                  1024: {
                    slidesPerView: 4.2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiperManufacture mt-6 md:mt-8 2xl:mt-10"
              >
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man4}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Wear mandated Personal Protective Equipment
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man5}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Trained/authorised operates equipment/vehicle
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man6}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Ensure Machine Guarding
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man7}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Exercise Lock, Tag & Try
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man16}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Fall protection is Must
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man17}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Electrical Work by Certified & Authorised
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man18}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Check Confined Space
                    </h2>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="mt-5 2xl:mt-8">
              <h3 className="text-[24px] md:text-[30px] 2xl:text-[32px] font-bold text-secondary mt-6 md:mt-8 2xl:mt-10">
                For Executives:
              </h3>
              <Swiper
                speed={1500}
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
                modules={[Autoplay]}
                className="mySwiperManufacture mt-6 md:mt-8 2xl:mt-10"
              >
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man19}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Permit to work for all Non-Standard activities
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man20}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      Risk assessment for all activities
                    </h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="vast-card">
                    <figure>
                      <Image
                        className="vast-card-image"
                        src={man21}
                        alt="card"
                      />
                    </figure>
                    <h2 className="!text-[20px] !font-semibold">
                      SWI/SOP for all Standard activities
                    </h2>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F8F8] py-8 md:py-12 2xl:py-[60px] my-8 md:my-12 2xl:my-[60px] overflow-hidden">
        <div className="container mx-auto">
          <div className="excellence-sec">
            <span className="section-heading">our people</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">
              The Heart of Our Manufacturing Excellence
              </h3>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-4 md:mt-6 2xl:mt-10">
              At the core of our manufacturing success is our dedicated team of
              engineers, technicians, and workers. Their expertise and
              commitment drive our innovation and ensure the highest quality in
              every product we create. Here’s what makes our team exceptional:
            </p>
            <div class="flex flex-col md:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
              <div class="w-full md:w-[45%] h-fit md:sticky top-[90px]">
                <figure
                  className="w-full h-[300px] md:h-[450px] 2xl:h-[600px] mb-0"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <Image
                    className="w-full h-full object-cover rounded-[12px] shadow-xl"
                    src={man15}
                    alt="faqImg"
                  />
                </figure>
              </div>
              <div
                class="accordion-list-sec people-accordion h-[300px] md:h-[450px] 2xl:h-[600px] overflow-y-auto md:w-[55%]"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title">Expertise and Skill</div>
                  <div className="collapse-content">
                    <p>
                      Our team comprises highly skilled professionals, including
                      machinists, welders, electricians, and maintenance
                      technicians. Their technical proficiency and attention to
                      detail are crucial in maintaining our high standards of
                      production.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Innovation and Engineering</div>
                  <div className="collapse-content">
                    <p>
                    Our manufacturing and quality control engineers are constantly pushing the boundaries of what’s possible. They design and refine our production processes, ensuring efficiency and excellence at every stage.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Leadership and Management</div>
                  <div className="collapse-content">
                    <p>
                    Our production managers and supervisors play a pivotal role in coordinating activities and meeting production targets. Our Plant leadership ensures that our operations run smoothly and efficiently.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Support and Development</div>
                  <div className="collapse-content">
                    <p>
                    Our human resources team is dedicated to fostering a supportive and inclusive workplace. They handle recruitment, training, and employee well-being, ensuring that our team members feel valued and empowered.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Commitment to Diversity and Inclusion</div>
                  <div className="collapse-content">
                    <p>
                    We are proud to champion gender diversity and promote self-management within our workforce. We believe that a diverse and inclusive environment leads to more innovative solutions and a more engaged team.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Quality and Precision</div>
                  <div className="collapse-content">
                    <p>
                    From assemblers to inspectors, every team member is committed to delivering products that meet the highest quality standards. Their meticulous work ensures that our customers receive only the best.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-plus">
                  <input type="radio" name="my-accordion-3" />
                  <div className="collapse-title">Continuous Improvement</div>
                  <div className="collapse-content">
                    <p>
                    We invest in the professional development of our employees, providing opportunities for growth and learning. This commitment not only enhances our operational efficiency but also solidifies our reputation as an industry leader.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-4 md:mt-6 2xl:mt-10">
              Our people are the driving force behind our success, and we are
              dedicated to creating an environment where they can thrive.
              Together, we are building a future of excellence and innovation.
            </p>
          </div>
        </div>
      </section>
      <PageEnd
        Title="Leadership"
        TitleLink="/about-us/corporate/leadership/"
        EndStaticImage={man3}
      />
      <Footer />
    </>
  );
}
