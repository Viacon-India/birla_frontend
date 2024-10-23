"use client";

import React, { useState, useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getStrapiMedia } from "@/lib/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gallary1 from "../../assets/images/blog1.jpg";
import gallary2 from "../../assets/images/blog2.jpg";
import GradualSpacing from "@/components/GradualSpacing";
import Link from "next/link";
import faqImage from "../../assets/images/faq-img.jpg";
import Triangle1 from "../../assets/images/triangle1.png"

export default function Faq({Heading='', Title='', Data={}}) {
  const [activeTab, setActiveTab] = useState("faq");
  const [pageData, setPageData] = useState([]);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  useEffect(() => {
    fetch(getStrapiMedia("/api/blogs?sort[0]=date:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=link&populate[image][fields][0]=name&populate[image][fields][1]=width&populate[image][fields][2]=height&populate[image][fields][3]=url&populate[image][fields][4]=alternativeText&pagination[pageSize]=2&pagination[page]=1")).then((res) => res.json()).then((page) => {
      setPageData(page);
    });


  }, []);

  var acc = document.getElementsByClassName("ham-accordion");
  var i;
  
  // Open the first accordion by default
  if (acc.length > 0) {
    acc[0].classList.add("accActive");
    var firstPanel = acc[0].nextElementSibling;
    firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
  }
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      for (var j = 0; j < acc.length; j++) {
        if (acc[j] !== this) {
          acc[j].classList.remove("accActive");
          var otherPanel = acc[j].nextElementSibling;
          if (otherPanel.style.maxHeight) {
            otherPanel.style.maxHeight = null;
          }
        }
      }
  
      this.classList.toggle("accActive");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
  
  return (
    <section className="faq-sec sec-gap !pb-[60px] md:!pb-[100px] 2xl:!pb-[150px] relative">
      <div className="container mx-auto overflow-hidden relative">
        <div class="relative">
          <div className="flex gap-2 items-center absolute right-0 top-[54px] md:top-[32px] z-20">
            <button
              className={`cat-btn ${
                activeTab === "faq" ? "active-cat-btn" : ""
              }`}
              onClick={() => setActiveTab("faq")}
            >
              FAQs
            </button>
            <button
              className={`cat-btn ${activeTab === "blog" ? "active" : ""}`}
              onClick={() => setActiveTab("blog")}
            >
              Blog
            </button>
          </div>
        </div>

        {activeTab === "faq" && (
          <div className="content-wrapper" id="faq">
            <div className="upper-sec">
              {Data?.heading &&
                <span className="section-heading">{Data.heading}</span>
              }
              {Data?.title &&
                <div className="section-title-wrapper">
                  <GradualSpacing className="section-title" text={Data.title} />
                </div>
              }
              {Data?.pre_content && Data.pre_content.length > 0 && (
                <BlocksRenderer
                  content={Data.pre_content}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className="text-[#3D434C] text-[14px] md:text-[16px] 2xl:text-[18px] font-medium leading-[1.7] !mt-14 md:!mt-6 2xl:mt-8" data-aos="fade-left" data-aos-duration="1000">
                        {children}
                      </p>
                    ),
                    heading: ({ children, level }) => {
                      switch (level) {
                        case 1:
                          return <h1>{children}</h1>;
                        case 2:
                          return <h2>{children}</h2>;
                        case 3:
                          return (
                            <h3 data-aos="fade-left" data-aos-duration="1000">
                              {children}
                            </h3>
                          );
                        case 4:
                          return <h4>{children}</h4>;
                        case 5:
                          return <h5>{children}</h5>;
                        case 6:
                          return <h6>{children}</h6>;
                        default:
                          return <h1>{children}</h1>;
                      }
                    },
                    list: (props) => {
                      if (props.format === "ordered") {
                        return (
                          <ol data-aos="fade-left" data-aos-duration="1000">
                            {props.children}
                          </ol>
                        );
                      }
                      return (
                        <ul data-aos="fade-left" data-aos-duration="1000">
                          {props.children}
                        </ul>
                      );
                    },
                    "list-item": (props) => <li>{props.children}</li>,
                    link: ({ children, url }) => (
                      <Link href={url}>{children}</Link>
                    ),
                  }}
                  modifiers={{
                    bold: ({ children }) => <strong>{children}</strong>,
                    italic: ({ children }) => (
                      <span className="italic">{children}</span>
                    ),
                  }}
                />
              )}
              <div class="flex flex-col lg:flex-row gap-4 md:gap-10 mt-5 2xl:mt-10">
                {Data?.images?.data && Data.images.data.length > 0 &&
                  <div
                    class="w-full lg:w-[45%]"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <figure
                      className="w-full h-[350px] md:h-[420px] 2xl:h-[520px] relative glare"
                      data-aos="flip-right"
                      data-aos-duration="1500"
                    >
                      <Image
                        className="absolute -z-1 w-[90%] h-[90%]"
                        src={Triangle1}
                        alt="triangle"
                      />
                      <Image
                        className="translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 w-[90%] h-[90%] rounded-[12px]"
                        src={getStrapiMedia(Data.images.data[0].attributes?.url)}
                        width={Data.images.data[0].attributes?.width}
                        height={Data.images.data[0].attributes?.height}
                        alt={Data.images.data[0].attributes?.alternativeText}
                      />
                    </figure>
                  </div>
                }
                {Data?.items && Data.items.length > 0 &&
                  <div
                    class="faq-accordion lg:w-[55%] max-h-[360px] md:max-h-[420px] 2xl:max-h-[520px] overflow-y-auto relative z-4"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    {Data.items.map((item, index) => (
                      <div key={item.id} class="accordion-content-wrapper">
                        <h4 className="accordion-title ham-accordion cursor-pointer">{item?.title}</h4>
                        <div className="panel">
                          {item?.content && item.content.length > 0 && (
                            <BlocksRenderer
                              content={item.content}
                              blocks={{
                                paragraph: ({ children }) => (
                                  <p className="text-[#4F5662]">
                                    {children}
                                  </p>
                                ),
                                heading: ({ children, level }) => {
                                  switch (level) {
                                    case 1:
                                      return <h1>{children}</h1>;
                                    case 2:
                                      return <h2>{children}</h2>;
                                    case 3:
                                      return (
                                        <h3 data-aos="fade-left" data-aos-duration="1000">
                                          {children}
                                        </h3>
                                      );
                                    case 4:
                                      return <h4>{children}</h4>;
                                    case 5:
                                      return <h5>{children}</h5>;
                                    case 6:
                                      return <h6>{children}</h6>;
                                    default:
                                      return <h1>{children}</h1>;
                                  }
                                },
                                list: (props) => {
                                  if (props.format === "ordered") {
                                    return (
                                      <ol data-aos="fade-left" data-aos-duration="1000">
                                        {props.children}
                                      </ol>
                                    );
                                  }
                                  return (
                                    <ul data-aos="fade-left" data-aos-duration="1000">
                                      {props.children}
                                    </ul>
                                  );
                                },
                                "list-item": (props) => <li>{props.children}</li>,
                                link: ({ children, url }) => (
                                  <Link href={url}>{children}</Link>
                                ),
                              }}
                              modifiers={{
                                bold: ({ children }) => <strong>{children}</strong>,
                                italic: ({ children }) => (
                                  <span className="italic">{children}</span>
                                ),
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
        )}

        {activeTab === "blog" && (
          <div className="content-wrapper" id="blog">
            {Heading &&
              <span className="section-heading">{Heading}</span>
            }
            {Title &&
              <div className="section-title-wrapper">
                <GradualSpacing className="section-title" text={Title} />
              </div>
            }
            {pageData?.data && pageData.data.length > 0 &&
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !mt-14 md:!mt-6 2xl:mt-10">
                {pageData.data.map((blog) => ( blog.attributes?.link &&
                  <div key={blog.id}
                    className="media-card"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    {blog.attributes.image?.data &&
                      <figure>
                        <Link
                          target="_blank"
                          href={blog.attributes.link}
                        >
                          <Image
                            className="media-card-image"
                            src={getStrapiMedia(blog.attributes.image.data.attributes.url)}
                            width={blog.attributes.image.data.attributes.width}
                            height={blog.attributes.image.data.attributes.height}
                            alt={blog.attributes.image.data.attributes.alternativeText}
                          />
                        </Link>
                      </figure>
                    }
                    <div className="media-card-detail">
                      <div className="flex justify-between items-center mb-3">
                        <span className="card-cat">Blog</span>
                        {blog.attributes?.date &&
                          <span className="card-date">{formatDate(blog.attributes.date)}</span>
                        }
                      </div>
                      {blog.attributes?.title &&
                        <Link
                            target="_blank"
                            href={blog.attributes.link}
                          >
                          <h2 className="media-title">
                            {blog.attributes.title}
                          </h2>
                        </Link>
                      }
                      {blog.attributes?.description &&
                        <p className="media-detail">{blog.attributes.description}</p>
                      }
                      <Link
                        href={blog.attributes.link}
                        className="primary-btn w-fit !px-6 flip-animate-2"
                      >
                        <span data-hover="Read More">Read More</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        )}
      </div>
    </section>
  );
}
