"use client";
import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
import Link from "next/link";
import GradualSpacing from "../../components/GradualSpacing";

export default function Blogs() {}
// export default function Blogs({ Data = {} }) {
//   const [pageData, setPageData] = useState([]);
//   const formatDate = (dateString) => {
//     const options = { day: "2-digit", month: "long", year: "numeric" };
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB", options);
//   };

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?sort[0]=date:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=link&fields[4]=slug&populate[image][fields][0]=name&populate[image][fields][1]=width&populate[image][fields][2]=height&populate[image][fields][3]=url&populate[image][fields][4]=alternativeText&pagination[pageSize]=2&pagination[page]=1`
//         );

//         const data = await res.json();
//         setPageData(data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <section className="faq-sec sec-gap !pb-[60px] md:!pb-[100px] 2xl:!pb-[150px] relative">
//         <div className="container mx-auto overflow-hidden relative">
//           {Data?.title && (
//             <div className="section-title-wrapper">
//               <GradualSpacing
//                 className="section-title-home"
//                 text={Data.title}
//               />
//             </div>
//           )}
//           {pageData?.data && pageData.data.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 !mt-14 md:!mt-6 2xl:mt-10">
//               {pageData.data.map(
//                 (blog) =>
//                   blog.attributes?.link && (
//                     <div
//                       key={blog.id}
//                       className="media-card"
//                       data-aos="fade-right"
//                       data-aos-duration="1000"
//                     >
//                       {blog.attributes.image?.data && (
//                         <figure>
//                           <Link href={`/blogs/${blog.attributes.slug}`}>
//                             <Image
//                               className="media-card-image"
//                               src={getStrapiMedia(
//                                 blog.attributes.image.data.attributes.url
//                               )}
//                               width={
//                                 blog.attributes.image.data.attributes.width
//                               }
//                               height={
//                                 blog.attributes.image.data.attributes.height
//                               }
//                               alt={
//                                 blog.attributes.image.data.attributes
//                                   .alternativeText
//                               }
//                             />
//                           </Link>
//                         </figure>
//                       )}
//                       <div className="media-card-detail">
//                         <div className="flex justify-between items-center mb-3">
//                           <span className="card-cat">Blog</span>
//                           {blog.attributes?.date && (
//                             <span className="card-date">
//                               {formatDate(blog.attributes.date)}
//                             </span>
//                           )}
//                         </div>
//                         {blog.attributes?.title && (
//                           <Link href={`/blogs/${blog.attributes.slug}`}>
//                             <h2 className="media-title">
//                               {blog.attributes.title}
//                             </h2>
//                           </Link>
//                         )}
//                         {blog.attributes?.description && (
//                           <p className="media-detail">
//                             {blog.attributes.description}
//                           </p>
//                         )}
//                         <Link
//                           href={`/blogs/${blog.attributes.slug}`}
//                           className="primary-btn w-fit !px-6 flip-animate-2"
//                         >
//                           <span data-hover="Read More">Read More</span>
//                         </Link>
//                       </div>
//                     </div>
//                   )
//               )}
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }
