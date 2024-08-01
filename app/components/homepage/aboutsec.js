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



// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
// import img1 from "../../assets/images/about-img1.jpg";
// import img2 from "../../assets/images/about-img2.jpg";
// import img3 from "../../assets/images/about-img3.jpg";
// import img4 from "../../assets/images/about-img4.jpg";
// import trust from "../../assets/images/trust-icon.png";
// import icon from "../../assets/images/icon.png";
// import icon1 from "../../assets/images/icon1.png";
// import icon2 from "../../assets/images/icon2.png";
// import TypingAnimation from "@/components/TypingAnimation";
// import tiger from "../../assets/images/tiger-mask.png"
// import ring1 from "../../assets/images/ring1.png"
// import ring2 from "../../assets/images/ring2.png"




// const Aboutsec = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   useEffect(() => {
   

//     gsap.to(".card__aside",{
//       ScrollTrigger:{
//         trigger: ".card__aside",
//         scroller:"body",
//         start:'top 90%',
//         end:'top 60%',
//         markers:true,
//         pin:true,
//         scrub:2,
        
//       }
//     })
//     let panels = gsap.utils.toArray(".card__content");
//     panels.forEach((item, i) => {
//       const contentElements = item.querySelectorAll(".card__inner > *");

//       contentElements.forEach((el, i) => {
//         gsap.set(el, {
//           y: 0,
//           opacity: 0,
//         });
//       });

//       ScrollTrigger.create({
//         trigger: item,
//         // markers: true,

//         pin: true,

//         // start: "50% 50%",
//         // end: "bottom+=50% 50%",

//         start: "top 20%",
//         end: "bottom 20%",

//         snap: { snapTo: [0.5], duration: 1, delay: 0 },

//         onEnter: ({ progress, direction, isActive }) => {
//           console.log("onEnter", progress, direction, isActive);
//           gsap.fromTo(
//             contentElements,
//             { y: 80, opacity: 0 },
//             { y: 0, opacity: 1, stagger: 0.05 }
//           );
//         },
//         onLeave: ({ progress, direction, isActive }) => {
//           console.log("onLeave", progress, direction, isActive);
//           gsap.fromTo(
//             contentElements,
//             { y: 0, opacity: 1 },
//             { y: -80, opacity: 0, stagger: 0.05 }
//           );
//         },
//         onLeaveBack: ({ progress, direction, isActive }) => {
//           console.log("onLeaveBack", progress, direction, isActive);
//           gsap.fromTo(
//             contentElements,
//             { y: 0, opacity: 1 },
//             { y: -80, opacity: 0, stagger: 0.05 }
//           );
//         },
//         onEnterBack: ({ progress, direction, isActive }) => {
//           console.log("onEnterBack", progress, direction, isActive);
//           gsap.fromTo(
//             contentElements,
//             { y: -80, opacity: 0 },
//             { y: 0, opacity: 1, stagger: 0.05 }
//           );
//         },
//       });
//     });
//   }, []);

//   return (
//     <div className="about-sec mt-[100px] relative">
//       <section class="container mx-auto">
//         <span className="section-heading">company brief</span>
//         {/* <h3 className="section-title">About us</h3> */}
//         <div className="section-title-wrapper">
//           <TypingAnimation className="section-title" text="About us" />
//         </div>
//         <ul class="list relative">
//           <li class="list__item">
//             <article class="verticle-card">
//               <section class="card__content">
//                 <section class="card__inner">
//                   <Image
//                     src={trust}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />
//                   <h2 className="about-usp-title">Legacy of Trust</h2>
//                   <p className="about-usp-detail">
//                   With a rich heritage spanning over three decades, Birla Tyres has built a reputation for reliability and excellence in the tyre industry. Over the past three decades, we have achieved numerous milestones, which is a testament to our commitment to quality and customer focus. We take pride in being a trusted partner for drivers across the country.
//                   </p>
//                 </section>
//               </section>
//               <div class="card__aside">
//                     <Image
//                       src={img1}
//                       alt="card"
//                       className="w-full h-full object-cover rounded-[12px]"
//                     />
//                   </div>

//             </article>
//           </li>
//           <li class="list__item">
//             <article class="verticle-card">
//               <section class="card__content">
//                 <section class="card__inner">
//                   <Image
//                     src={icon}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />
//                   <h2 className="about-usp-title">Vast Range of Products</h2>
//                   <p className="about-usp-detail">
//                   Our company is proud to offer a comprehensive tyre portfolio that caters to the diverse and unique needs of our customers. With our extensive range of products, including Truck Bus Bias (TBB) tyres, agricultural tyres, and off-the-road tyres, we are equipped to provide solutions for various applications and industries.
//                   </p>
//                 </section>
//               </section>
//               <div class="card__aside">
//                     <Image
//                       src={img1}
//                       alt="card"
//                       className="w-full h-full object-cover rounded-[12px]"
//                     />
//                   </div>
//             </article>
//           </li>
//           <li class="list__item">
//             <article class="verticle-card">
//               <section class="card__content">
//                 <section class="card__inner">
//                   <Image
//                     src={icon1}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />
//                   <h2 className="about-usp-title">Commitment to Quality Excellence</h2>
//                   <p className="about-usp-detail">
//                   At Birla Tyres, we continuously invest in research and development to stay at the forefront of tyre technology. Our dedicated R&D team works tirelessly to innovate and introduce advanced features that enhance performance, safety and durability. Every tyre produced by Birla Tyres undergoes rigorous testing and quality checks at various stages of production to ensure that it meets our stringent standards for performance and safety.
//                   </p>
//                 </section>
//               </section>
//               <div class="card__aside">
//                     <Image
//                       src={img1}
//                       alt="card"
//                       className="w-full h-full object-cover rounded-[12px]"
//                     />
//                   </div>
//             </article>
//           </li>
//           <li class="list__item">
//             <article class="verticle-card">
//               <section class="card__content">
//                 <section class="card__inner">
//                   <Image
//                     src={icon2}
//                     alt="card"
//                     className="w-10 h-10 object-cover"
//                   />
//                   <h2 className="about-usp-title">Customer-Centric Approach</h2>
//                   <p className="about-usp-detail">
//                   Our customer-centric approach is the cornerstone of our business philosophy. We prioritize understanding and addressing the unique needs and preferences of our customers, ensuring that every interaction and product is tailored to deliver exceptional value.
//                   </p>
//                 </section>
//               </section>
//               <div class="card__aside">
//                     <Image
//                       src={img1}
//                       alt="card"
//                       className="w-full h-full object-cover rounded-[12px]"
//                     />
//                   </div>
//             </article>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };






export default Aboutsec;
