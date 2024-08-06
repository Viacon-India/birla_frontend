// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import img1 from "../../assets/images/mask1.png";
// import img2 from "../../assets/images/mask2.png";
// import img3 from "../../assets/images/mask3.png";
// import img4 from "../../assets/images/mask4.png";
// import tiger from "../../assets/images/tiger.png";
// import icon1 from "../../assets/images/icon1.png";
// import icon2 from "../../assets/images/icon2.png";
// import icon3 from "../../assets/images/icon3.png";
// import icon4 from "../../assets/images/icon4.png";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import TypingAnimation from "@/components/TypingAnimation";
// import GradualSpacing from "@/components/GradualSpacing";

// export default function Aboutsec() {
//   useEffect(() => {
//     AOS.init();
//   }, []);
//   return (
//     <section className="about-sec mt-[100px]">
//       <div className="container mx-auto">
//         <div className="about-main">
//           <span className="section-heading">company brief</span>
//           {/* <h3 className="section-title">About us</h3> */}
//           <div className="section-title-wrapper">
//             <TypingAnimation className="section-title" text="About us" />
//           </div>
//           <div class="flex flex-col lg:flex-row gap-[50px] mt-8">
//             <div class="about-img-sec w-[45%]">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-[70px] relative">
//                 <figure className="about-centre-fig">
//                   <Image
//                     src={tiger}
//                     alt="card"
//                     className="w-full h-full object-cover "
//                     data-aos="zoom-in-down"
//                   />
//                 </figure>
//                 <figure
//                   className="w-full h-[200px]"
//                   data-aos="fade-up-right"
//                   data-aos-duration="5000"
//                 >
//                   <Image
//                     src={img1}
//                     alt="card"
//                     className="w-full h-full object-cover rounded-[8px]"
//                   />
//                 </figure>
//                 <figure className="w-full h-[200px]" data-aos="fade-up-left">
//                   <Image
//                     src={img2}
//                     alt="card"
//                     className="w-full h-full object-cover rounded-[8px]"
//                   />
//                 </figure>
//                 <figure className="w-full h-[200px]" data-aos="fade-up-right">
//                   <Image
//                     src={img3}
//                     alt="card"
//                     className="w-full h-full object-cover rounded-[8px]"
//                   />
//                 </figure>
//                 <figure className="w-full h-[200px]" data-aos="fade-up-left">
//                   <Image
//                     src={img4}
//                     alt="card"
//                     className="w-full h-full object-cover rounded-[8px]"
//                   />
//                 </figure>
//               </div>
//             </div>
//             <div className="about-desc-sec w-[55%]">
//               {/* <h2 className="about-heading">
//                 The journey of the global innovative tyre conglomerate.
//               </h2> */}
//               <GradualSpacing className="about-heading" text="The journey of the global innovative tyre conglomerate." />
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
//                 <div className="about-usp" data-aos="fade-up-left" data-aos-delay="200">
//                   <Image
//                     src={icon1}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />

//                   <h2 className="about-usp-title">Special Financing Offers</h2>
//                   <p className="about-usp-detail">
//                     Lorem ipsum dolor sit amet, contur adipiscing elit.
//                   </p>
//                 </div>
//                 <div className="about-usp" data-aos="fade-up-left" data-aos-delay="400">
//                   <Image
//                     src={icon2}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />

//                   <h2 className="about-usp-title">Special Financing Offers</h2>
//                   <p className="about-usp-detail">
//                     Lorem ipsum dolor sit amet, contur adipiscing elit.
//                   </p>
//                 </div>
//                 <div className="about-usp" data-aos="fade-up-left" data-aos-delay="600">
//                   <Image
//                     src={icon3}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />

//                   <h2 className="about-usp-title">Special Financing Offers</h2>
//                   <p className="about-usp-detail">
//                     Lorem ipsum dolor sit amet, contur adipiscing elit.
//                   </p>
//                 </div>
//                 <div className="about-usp" data-aos="fade-up-left" data-aos-delay="800">
//                   <Image
//                     src={icon4}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />

//                   <h2 className="about-usp-title">Special Financing Offers</h2>
//                   <p className="about-usp-detail">
//                     Lorem ipsum dolor sit amet, contur adipiscing elit.
//                   </p>
//                 </div>
//               </div>
//               <Link href="" className="primary-btn w-fit mt-6 !px-6">
//                 Read More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import trust from "../../assets/images/trust-icon.png";
import icon from "../../assets/images/icon.png";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import img1 from "../../assets/images/about-img-1.jpg";
import img2 from "../../assets/images/about-img-2.jpg";
import img3 from "../../assets/images/about-img-3.jpg";
import img4 from "../../assets/images/about-img-4.jpg";
import TypingAnimation from "@/components/TypingAnimation";
import ring3 from "../../assets/images/ring3.png";

export default function AboutSec() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const images = gsap.utils.toArray(".split-images .image:not(:first-child)");
    const details = gsap.utils.toArray(
      ".split-details .detail:not(:first-child)"
    );

    gsap.set(images, { yPercent: 101 });

    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: ".split-section",
        start: "top top",
        end: "bottom bottom",
        pin: ".split-images",
      });

      details.forEach((detail, index) => {
        let target = detail.querySelector("h3");
        let animation = gsap
          .timeline()
          .to(images[index], { yPercent: 0, ease: "power1", duration: 0.5 });

        ScrollTrigger.create({
          trigger: target,
          start: "top 90%",
          end: "top 30%",
          animation: animation,
          scrub: 0.1,
          snap: 1,
        //   markers: true
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>

      <section className="split-section-wrapper" >

        <div class="container mx-auto">
          <div className="split-section">

            <div className="split-images">
            <div
        class="mainBg"
        style={{
          backgroundImage: `url(${ring3.src})`,
          backgroundSize: "cover",
          height:"100vh",
          width: "132vw",
          position: "absolute",
          zIndex:0,
          
        }}
      ></div>
      <span className="section-heading" style={{
        position: "fixed",
        top:"100px",
        left:0,
      }}>company brief</span>
          <div className="section-title-wrapper">
            <h2 className="about-title" style={{
              position: "fixed",
              top:"118px",
              left:0
            }}>
              About Us
            </h2>
          </div>
              <div className="images-wrapper rounded-[20px]">
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${img1.src})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${img2.src})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${img3.src})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${img4.src})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="split-details">
              <div className="details-wrapper">
                <div className="detail">
                  {/* <Image
                     src={trust}
                     alt="card"
                     className="w-10 h-10 object-cover"
                   /> */}
                  <p
                    style={{
                      backgroundImage: `url(${trust.src})`,
                      backgroundSize: "cover",
                      width: "61px",
                      height: "60px",
                      display: "block",
                    }}
                  ></p>
                  <h2 className="about-usp-title">Legacy of Trust</h2>
                  <p className="about-usp-detail">
                    With a rich heritage spanning over three decades, Birla
                    Tyres has built a reputation for reliability and excellence
                    in the tyre industry. Over the past three decades, we have
                    achieved numerous milestones, which is a testament to our
                    commitment to quality and customer focus. We take pride in
                    being a trusted partner for drivers across the country.
                  </p>
                </div>
                <div className="detail">
                  <p
                    style={{
                      backgroundImage: `url(${icon.src})`,
                      backgroundSize: "cover",
                      width: "61px",
                      height: "60px",
                      display: "block",
                    }}
                  ></p>
                  <h3 className="about-usp-title">Vast Range of Products</h3>
                  <p className="about-usp-detail">
                    Our company is proud to offer a comprehensive tyre portfolio
                    that caters to the diverse and unique needs of our
                    customers. With our extensive range of products, including
                    Truck Bus Bias (TBB) tyres, agricultural tyres, and
                    off-the-road tyres, we are equipped to provide solutions for
                    various applications and industries.
                  </p>
                </div>
                <div className="detail">
                  <p
                    style={{
                      backgroundImage: `url(${icon1.src})`,
                      backgroundSize: "cover",
                      width: "61px",
                      height: "60px",
                      display: "block",
                    }}
                  ></p>
                  <h3 className="about-usp-title">
                    Commitment to Quality Excellence
                  </h3>
                  <p className="about-usp-detail">
                    At Birla Tyres, we continuously invest in research and
                    development to stay at the forefront of tyre technology. Our
                    dedicated R&D team works tirelessly to innovate and
                    introduce advanced features that enhance performance, safety
                    and durability. Every tyre produced by Birla Tyres undergoes
                    rigorous testing and quality checks at various stages of
                    production to ensure that it meets our stringent standards
                    for performance and safety.
                  </p>
                </div>
                <div className="detail">
                  <p
                    style={{
                      backgroundImage: `url(${icon2.src})`,
                      backgroundSize: "cover",
                      width: "61px",
                      height: "60px",
                      display: "block",
                    }}
                  ></p>
                  <h3 className="about-usp-title">Customer-Centric Approach</h3>
                  <p className="about-usp-detail">
                    Our customer-centric approach is the cornerstone of our
                    business philosophy. We prioritize understanding and
                    addressing the unique needs and preferences of our
                    customers, ensuring that every interaction and product is
                    tailored to deliver exceptional value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
