
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import $ from 'jquery';
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

// Import your assets
// import trust from "../../assets/images/about-icon1.png";
import trust from "../../assets/images/about-icon1.png";
import icon from "../../assets/images/about-icon2.png";
import icon1 from "../../assets/images/about-icon3.png";
import icon2 from "../../assets/images/about-icon4.png";
import img1 from "../../assets/images/about-img-1.jpg";
import img2 from "../../assets/images/about-img-2.jpg";
import img3 from "../../assets/images/about-img-3.jpg";
import img4 from "../../assets/images/about-img-4.jpg";
// import img3 from "../../assets/images/about-img-3.jpg";
// import img4 from "../../assets/images/about-img-4.jpg";
import img1H from "../../assets/images/about-icon1.png";

export default function NewAbout() {
  useEffect(() => {
    $('.detail1').unbind().mouseenter(function () {
      $('.detail1Img').fadeIn(600);
      $('.detail2Img').fadeOut(600);
      $('.detail3Img').fadeOut(600);
      $('.detail4Img').fadeOut(600);
    });
    $('.detail2').unbind().mouseenter(function () {
      // $('.detail2Img').fadeIn(600);
      // $('.detail1Img').fadeOut(600);
      $('.detail1Img').fadeOut(600);
      $('.detail2Img').fadeIn(600);
      $('.detail3Img').fadeOut(600);
      $('.detail4Img').fadeOut(600);
    });
    $('.detail3').unbind().mouseenter(function () {
      $('.detail1Img').fadeOut(600);
      $('.detail2Img').fadeOut(600);
      $('.detail3Img').fadeIn(600);
      $('.detail4Img').fadeOut(600);
    });
    $('.detail4').unbind().mouseenter(function () {
      $('.detail1Img').fadeOut(600);
      $('.detail2Img').fadeOut(600);
      $('.detail3Img').fadeOut(600);
      $('.detail4Img').fadeIn(600);
    });


   
      
      if($('.swiper-slide-active').children().children('.detail').hasClass('detail1')){
        $('.detail1Img').fadeIn(600);
        $('.detail2Img').fadeOut(600);
        $('.detail3Img').fadeOut(600);
        $('.detail4Img').fadeOut(600);
      }
      else if($('.swiper-slide-active').children().children('.detail').hasClass('detail2')){
        $('.detail1Img').fadeOut(600);
        $('.detail2Img').fadeIn(600);
        $('.detail3Img').fadeOut(600);
        $('.detail4Img').fadeOut(600);
      }else if($('.swiper-slide-active').children().children('.detail').hasClass('detail3')){
        $('.detail1Img').fadeOut(600);
        $('.detail2Img').fadeOut(600);
        $('.detail3Img').fadeIn(600);
        $('.detail4Img').fadeOut(600);
      }else if($('.swiper-slide-active').children().children('.detail').hasClass('detail4')){
        $('.detail1Img').fadeOut(600);
        $('.detail2Img').fadeOut(600);
        $('.detail3Img').fadeOut(600);
        $('.detail4Img').fadeIn(600);
      }
  


  
  }, []);

  return (
    <section className="split-section-wrapper">
      <div className="container mx-auto hoverBoxContainer-2">
        <div className="split-section split-section1" data-aos="zoom-out-right" data-aos-easing="linear"
          data-aos-duration="900">
          <div className="split-images">
            <Image src={img1} alt="card" className="object-cover detailImg detail1Img" />
            <Image src={img2} alt="card" className="object-cover detailImg detail2Img" />
            <Image src={img3} alt="card" className="object-cover detailImg detail3Img" />
            <Image src={img4} alt="card" className="object-cover detailImg detail4Img" />

          </div>


          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={2.3}
            speed={1000}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            
            className="mySwiper split-details"
          >
            <SwiperSlide>
              <div className="swiper-card-main relative">
                <div className="detail detail1">
                  <div className="imageHeading">
                    <p className="colorHIcon"
                      style={{
                        backgroundImage: `url(${trust.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <p className="colorIcon"
                      style={{
                        backgroundImage: `url(${img1H.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <h2 className="about-usp-title">Legacy of Trust</h2>
                  </div>
                  <p className="about-usp-detail">
                    With a rich heritage spanning over three decades, Birla Tyres
                    has built a reputation for reliability and excellence in the
                    tyre industry. Over the past three decades, we have achieved
                    numerous milestones, which is a testament to our commitment
                    to quality and customer focus. We take pride in being a trusted
                    partner for drivers across the country.
                  </p>
                  <a class="tertiary-button" href="#">Read more</a>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="swiper-card-main relative">
              <div className="detail detail2">
                <div className="imageHeading">
                  <p className="colorHIcon"
                    style={{
                      backgroundImage: `url(${icon.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <p className="colorIcon"
                    style={{
                      backgroundImage: `url(${icon.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <h2 className="about-usp-title">Legacy of Trust</h2>
                </div>
                <p className="about-usp-detail">
                  With a rich heritage spanning over three decades, Birla Tyres
                  has built a reputation for reliability and excellence in the
                  tyre industry. Over the past three decades, we have achieved
                  numerous milestones, which is a testament to our commitment
                  to quality and customer focus. We take pride in being a trusted
                  partner for drivers across the country.
                </p>
                <a class="tertiary-button" href="#">Read more</a>
              </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-card-main relative">
                <div className="detail detail3">
                  <div className="imageHeading">
                    <p className="colorHIcon"
                      style={{
                        backgroundImage: `url(${icon1.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <p className="colorIcon"
                      style={{
                        backgroundImage: `url(${icon1.src})`,
                        backgroundSize: "cover",
                        width: "40px",
                        height: "40px",
                        display: "block",
                      }}
                    ></p>
                    <h2 className="about-usp-title">Legacy of Trust</h2>
                  </div>
                  <p className="about-usp-detail">
                    With a rich heritage spanning over three decades, Birla Tyres
                    has built a reputation for reliability and excellence in the
                    tyre industry. Over the past three decades, we have achieved
                    numerous milestones, which is a testament to our commitment
                    to quality and customer focus. We take pride in being a trusted
                    partner for drivers across the country.
                  </p>
                  <a class="tertiary-button" href="#">Read more</a>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="swiper-card-main relative">
              <div className="detail detail4">
                <div className="imageHeading">
                  <p className="colorHIcon"
                    style={{
                      backgroundImage: `url(${icon2.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <p className="colorIcon"
                    style={{
                      backgroundImage: `url(${icon2.src})`,
                      backgroundSize: "cover",
                      width: "40px",
                      height: "40px",
                      display: "block",
                    }}
                  ></p>
                  <h2 className="about-usp-title">Legacy of Trust</h2>
                </div>
                <p className="about-usp-detail">
                  With a rich heritage spanning over three decades, Birla Tyres
                  has built a reputation for reliability and excellence in the
                  tyre industry. Over the past three decades, we have achieved
                  numerous milestones, which is a testament to our commitment
                  to quality and customer focus. We take pride in being a trusted
                  partner for drivers across the country.
                </p>
                <a class="tertiary-button" href="#">Read more</a>
              </div>
            </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
}

