"use client";

import React, { useEffect } from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Banner from "../../../assets/images/join1.jpg";
import Link from "next/link";
import Image from "next/image";
import join2 from "../../../assets/images/join2.png";
import join3 from "../../../assets/images/join3.jpg";
import join4 from "../../../assets/images/join4.jpg";
import join5 from "../../../assets/images/join5.jpg";
import join6 from "../../../assets/images/join6.jpg";
import join7 from "../../../assets/images/join7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../../../components/pageCommon/pageCommon";
import { PageEnd } from "../../../components/pageCommon/pageCommon";

export default function JoinUs() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <PageBanner Title="why join us" StaticBanner={Banner} />
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
          <div className="flex gap-4 md:gap-10 flex-col md:flex-row items-center">
            <figure
              className="w-full md:w-1/2"
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              <Image
                className="w-full h-full object-cover"
                src={join2}
                alt="img"
              />
            </figure>
            <div className="box-content-sec relative md:w-[50%]">
              <span
                className="section-heading"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                Empowering People, Elevating Success
              </span>
              <div
                className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
                data-aos="fade-left"
                data-aos-duration="1400"
              >
                <h3 className="section-title">Our Talent Philosophy</h3>
              </div>
              <p data-aos="fade-left" data-aos-duration="1600">
                At Birla Tyres, we believe in creating a collaborative and
                supportive environment where our people can grow, learn and
                thrive. By empowering our people, we acknowledge their strengths
                and abilities, enabling them to excel and achieve exceptional
                results. We provide the necessary tools, training and
                opportunities for growth and sustainability.
              </p>
              <p data-aos="fade-left" data-aos-duration="1800">
                We embrace diversity and inclusion by appreciating unique
                perspectives and experiences. Our extensive footprint across
                geographies allows our talents to explore various cultures and
                dynamics.
              </p>

              <Link
                href="#"
                className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2 mt-7"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <span data-hover="Explore Career Opportunities">
                  Explore Career Opportunities
                </span>
              </Link>
            </div>
          </div>
          <div className="testimonial-sec">
            <span className="section-heading">Our People’s Voices</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">Our Talents</h3>
            </div>
            <div className="grid grid-cols1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-10 overflow-hidden">
              <div
                className="testimonial-card"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <figure className="w-40% h-[320px]">
                  <Image className="vast-card-image" src={join3} alt="card" />
                </figure>
                <div className="testimonial-card-detail-wrapper">
                  <h2 className="testimonial-card-title">Mr. Ashish Srivastava:<br></br> Head, Engineering</h2>
                  <p className="testimonial-card-detail">
                    &quot;Joining Birla Tyres has been an exhilarating journey for
                    me. From a warm welcome to an inspiring vision shared by
                    leadership, I have felt truly at home here. The team&apos;s
                    collaborative sprit and dedication to innovation deeply
                    resonates within me. I am grateful to be part of such
                    forward-thinking organization&quot;
                  </p>
                </div>
              </div>
              <div
                className="testimonial-card"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <figure className="w-40% h-[320px]">
                  <Image className="vast-card-image" src={join4} alt="card" />
                </figure>
                <div className="testimonial-card-detail-wrapper">
                  <h2 className="testimonial-card-title">Mr. Amarendra Palai:<br></br>
                  Sr. Manager, Costing</h2>
                  <p className="testimonial-card-detail">
                  &quot;Since I set foot into the organization, I have had numerous chances to be part of something exciting, to be able to learn new things as well as demonstrate my strong commitment and contribution. First week into my job, I realized that I am surrounded by experienced and hardworking people.
                  The culture is transparent and every employee irrespective of their position is given a chance to be heard. The organization has a young generation with contemporary, innovative and entrepreneurial approach that distinguishes it from its’ peers. It provides a very conducive environment to learn, grow and prosper.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageEnd
        Title="Life at BIRLA TYRES"
        TitleLink="/about-us/career/life-at-birla-tyres"
        EndStaticImage={join5}
      />
      <Footer />
    </>
  );
}
