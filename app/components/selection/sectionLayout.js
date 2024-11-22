"use client";

import React, { useEffect, useState, useCallback } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/navigation";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getStrapiMedia } from "@/lib/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Triangle1 from "@/app/assets/images/triangle1.png";
import Triangle2 from "@/app/assets/images/triangle2.png";
import Triangle3 from "@/app/assets/images/triangle3.png";
import Triangle4 from "@/app/assets/images/triangle4.png";
import BGTiger2 from "../../assets/images/tiger-mask2.png";
import tigerMask from "@/app/assets/images/tiger-mask2.png";
import tigerMask3 from "@/app/assets/images/tiger-mask3.png";
import tiger from "@/app/assets/images/tiger.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function SectionSelection({ section, Background, right }) {
  return (
    <>
      {section.__component == "section.files" && <Files section={section} />}
      {section.__component == "section.investor-table" && (
        <Table section={section} />
      )}
      {section.__component == "section.address" && (
        <Address section={section} />
      )}
      {section.__component == "section.image-title-content" && (
        <ImageTitleContent section={section} />
      )}
      {section.__component == "section.accordion" && (
        <Accordion section={section} />
      )}
      {section.__component == "section.title-content-half" && (
        <TitleContentHalf section={section} />
      )}
      {section.__component == "section.title-content-full" && (
        <TitleContentFull section={section} />
      )}
      {section.__component == "section.gallery" && (
        <Gallery section={section} />
      )}
      {section.__component == "section.image-point" && (
        <ImagePoint section={section} />
      )}
      {section.__component == "section.job-application" && (
        <JobApplication section={section} />
      )}
      {section.__component == "section.slider" && (
        <SliderSec section={section} />
      )}
      {section.__component == "section.double-slider" && (
        <DoubleSlider section={section} />
      )}
      {section.__component == "section.leader" && (
        <ImageDetailContent section={section} />
      )}
      {section.__component == "section.sidebar-content" && (
        <SidebarContent section={section} />
      )}
      {section.__component == "section.credit" && (
        <CreditContent section={section} />
      )}
      {section.__component == "section.testimonial" && (
        <Testimonial section={section} />
      )}
      {section.__component == "section.tab-image" && (
        <TabImage section={section} />
      )}
      {section.__component == "section.paralax" && (
        <Parallax section={section} />
      )}
      {section.__component == "section.key-points" && (
        <KeyPoints section={section} />
      )}
    </>
  );
}

export function Files({ section }) {
  useEffect(() => {
    AOS.init();
  }, [section]);
  return (
    <>
      {section?.title && (
        <div className="section-title-wrapper">
          <h2 className="section-title !text-[32px] !leading-[38px] !font-semibold">
            {section.title}
          </h2>
        </div>
      )}
      {section.files &&
        section.files.map((files) => (
          <div className="flex flex-col gap-6" key={files.id}>
            {files.collection.length > 0 && files?.description && (
              <h3 className="text-[#3D434C] font-medium text-[24px] leading-[32px]">
                {files.description}
              </h3>
            )}
            {files.collection.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {files.collection.map(
                  (collection) =>
                    collection.file?.url && (
                      <Link
                        href={getStrapiMedia(collection.file.url)}
                        className="flex gap-3 items-center w-fit underline underline-offset-2 hover:text-primary hover:decoration-primary"
                        key={collection.id}
                        target="_blank"
                      >
                        <div className="p-2 bg-[#E0E1F5] rounded-xl">
                          {collection.file.ext == ".mv4" && (
                            <svg
                              width="24"
                              height="16"
                              viewBox="0 0 24 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.25 6.5L22.5 3.5V12.5L17.25 9.5M2.25 1.625H14.25C15.0456 1.625 15.8087 1.94107 16.3713 2.50368C16.9339 3.06629 17.25 3.82935 17.25 4.625V13.625C17.25 13.8239 17.171 14.0147 17.0303 14.1553C16.8897 14.296 16.6989 14.375 16.5 14.375H4.5C3.70435 14.375 2.94129 14.0589 2.37868 13.4963C1.81607 12.9337 1.5 12.1706 1.5 11.375V2.375C1.5 2.17609 1.57902 1.98532 1.71967 1.84467C1.86032 1.70402 2.05109 1.625 2.25 1.625Z"
                                stroke="#2E3192"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          )}
                          {collection.file.ext == ".pdf" && (
                            <svg
                              width="18"
                              height="19"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.25 13.75H14.625V18.25M16.875 16.375H14.625M1.5 16.75H3C3.39782 16.75 3.77936 16.592 4.06066 16.3107C4.34196 16.0294 4.5 15.6478 4.5 15.25C4.5 14.8522 4.34196 14.4706 4.06066 14.1893C3.77936 13.908 3.39782 13.75 3 13.75H1.5V18.25M1.5 10V1.75C1.5 1.55109 1.57902 1.36032 1.71967 1.21967C1.86032 1.07902 2.05109 1 2.25 1H11.25M11.25 1L16.5 6.25M11.25 1V6.25H16.5M16.5 6.25V10M9 18.25C9.59674 18.25 10.169 18.0129 10.591 17.591C11.0129 17.169 11.25 16.5967 11.25 16C11.25 15.4033 11.0129 14.831 10.591 14.409C10.169 13.9871 9.59674 13.75 9 13.75H7.6875V18.25H9Z"
                                stroke="#2E3192"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        {collection?.name && (
                          <p className="text-[#606977]">{collection.name}</p>
                        )}
                      </Link>
                    )
                )}
              </div>
            )}
          </div>
        ))}
    </>
  );
}

export function Table({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {section?.title && (
        <div className="section-title-wrapper">
          <h2 className="section-title !text-[32px] !leading-[38px] !font-semibold">
            {section.title}
          </h2>
        </div>
      )}
      {section.table &&
        section.table.map((tables) => (
          <div className="flex flex-col gap-6" key={tables.id}>
            {tables.row.length > 0 && tables?.description && (
              <h3 className="text-[#3D434C] font-medium text-[24px] leading-[32px]">
                {tables.description}
              </h3>
            )}
            {tables.row.length > 0 && (
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right">
                  <thead class="font-semibold text-[16px] leading-[20px] text-secondary bg-[#E0E1F5]">
                    <tr>
                      <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                        Sr. No.
                      </th>
                      <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                        {tables.first_row.name}
                      </th>
                      <th scope="col" class="px-2 py-3 border border-[#C9CDD3]">
                        {tables.first_row.status}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tables.row.map((rows, index) => (
                      <tr
                        class="font-medium text-[14px] leading-[17px] text-[#3D434C]"
                        key={rows.id}
                      >
                        <th
                          scope="row"
                          class="px-2 py-3 border border-[#C9CDD3]"
                        >
                          {index + 1}
                        </th>
                        {rows?.name && (
                          <th
                            scope="row"
                            class="px-2 py-3 border border-[#C9CDD3]"
                          >
                            {rows.name}
                          </th>
                        )}
                        {rows?.status && (
                          <th
                            scope="row"
                            class="px-2 py-3 border border-[#C9CDD3]"
                          >
                            {rows.status}
                          </th>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
    </>
  );
}

export function Address({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {section?.title && (
        <div className="section-title-wrapper">
          <h2 className="section-title !text-[32px] !leading-[38px] !font-semibold">
            {section.title}
          </h2>
        </div>
      )}
      {section?.data && (
        <div className="flex flex-col gap-6">
          {section.data.map((details) => (
            <div className="flex flex-col gap-3" key={details.id}>
              {details.content.length > 0 && details?.description && (
                <h3 className="text-[#3D434C] font-medium text-[24px] leading-[32px]">
                  {details.description}
                </h3>
              )}
              {details.content.length > 0 && (
                <BlocksRenderer
                  content={details.content}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className="text-[#4F5662]">{children}</p>
                    ),
                    heading: ({ children, level }) => {
                      switch (level) {
                        case 1:
                          return <h1>{children}</h1>;
                        case 2:
                          return <h2>{children}</h2>;
                        case 3:
                          return <h3>{children}</h3>;
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
          ))}
        </div>
      )}
    </>
  );
}

export function ImageTitleContent({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden mb-8 md:mb-12 2xl:mb-[60px]">
      <div className="container mx-auto flex flex-col gap-5 lg:gap-6 2xl:gap-10">
        <div
          className={cn(
            "section-layer",
            section?.settings?.right ? "lg:flex-row-reverse" : "lg:flex-row "
          )}
        >
          <figure
            className="w-full lg:w-[45%] h-[300px] md:h-[550px] lg:h-[380px] xl:h-[480px] relative glare"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            {section?.triangle && (
              <Image
                className={cn(
                  "absolute -z-1 w-[90%] h-[90%]",
                  section?.settings?.right ? "right-0" : "left-0"
                )}
                src={section?.settings?.right ? Triangle2 : Triangle1}
                alt="img"
              />
            )}

            <Image
              className={cn(
                section?.triangle
                  ? "absolute top-4 md:top-8 w-[90%] h-[90%] rounded-[12px]"
                  : "w-full h-full",
                section?.settings?.right
                  ? "right-4 md:right-8"
                  : "left-4 md:left-8"
              )}
              width={section?.image.width}
              height={section?.image.height}
              src={getStrapiMedia(section?.image.url)}
              alt={section?.image.alternativeText}
            />
          </figure>

          <div className="box-content-sec relative lg:w-[55%] flex flex-col">
            {section?.heading && (
              <span
                className="section-heading"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                {section.heading}
              </span>
            )}
            {section?.title && (
              <div
                className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h3 className="section-title">{section.title}</h3>
              </div>
            )}
            {section?.content && section.content.length > 0 && (
              <BlocksRenderer
                content={section.content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p data-aos="fade-left" data-aos-duration="1000">
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
            {section?.link && (
              <Link href={section.link} className="more-btn">
                {section?.link_text}
              </Link>
            )}
            {section?.content && section.content.length > 0 && (
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            )}
          </div>
        </div>
        {section?.post_content && section.post_content.length > 0 && (
          <BlocksRenderer
            content={section.post_content}
            blocks={{
              paragraph: ({ children }) => (
                <p
                  className="text-[#1A1D21] text-[14px] md:text-[15px] 2xl:text-[16px] leading-[1.6] mb-3 md:mb-10 2xl:mb-[60px]"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
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
                    return <h3>{children}</h3>;
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
              link: ({ children, url }) => <Link href={url}>{children}</Link>,
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
    </section>
  );
}

export function Accordion({ section }) {
  useEffect(() => {
    AOS.init();

    // faq accordion
    var acc = document.getElementsByClassName("single-accordion");
    var i;

    if (acc.length > 0) {
      acc[0].classList.add("singleAccActive");
      var firstPanel = acc[0].nextElementSibling;
      firstPanel.style.maxHeight = firstPanel.scrollHeight + "px";
    }

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        for (var j = 0; j < acc.length; j++) {
          if (acc[j] !== this) {
            acc[j].classList.remove("singleAccActive");
            var otherPanel = acc[j].nextElementSibling;
            if (otherPanel.style.maxHeight) {
              otherPanel.style.maxHeight = null;
            }
          }
        }

        this.classList.toggle("singleAccActive");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, []);
  return (
    <section
      className={cn(
        "py-6 md:py-10 2xl:py-[60px] overflow-hidden",
        section?.settings?.background ? "xl:bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
        {section?.heading && section?.title && (
          <div>
            {section?.heading && (
              <span
                className="section-heading"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                {section.heading}
              </span>
            )}
            {section?.title && (
              <div
                className="section-title-wrapper"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <h3 className="section-title">{section.title}</h3>
              </div>
            )}
          </div>
        )}
        {section?.pre_content && section.pre_content.length > 0 && (
          <div className="flex flex-col gap-6">
            <BlocksRenderer
              content={section.pre_content}
              blocks={{
                paragraph: ({ children }) => (
                  <p className="text-[#1A1D21] text-[14px] md:text-[15px] 2xl:text-[16px] leading-[1.6]">
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
                      return <h3>{children}</h3>;
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
                link: ({ children, url }) => <Link href={url}>{children}</Link>,
              }}
              modifiers={{
                bold: ({ children }) => <strong>{children}</strong>,
                italic: ({ children }) => (
                  <span className="italic">{children}</span>
                ),
              }}
            />
          </div>
        )}
        <div
          className={cn(
            "flex flex-col gap-4 md:gap-10",
            section?.settings?.right ? "xl:flex-row-reverse" : "xl:flex-row"
          )}
        >
          {section?.images && section.images.length > 0 && (
            <>
              {section.images.length > 1 ? (
                <div class="w-full xl:w-[40%] h-fit md:sticky top-[90px] grid grid-cols-2 gap-4 md:gap-6">
                  {section.images.map((image, index) => (
                    <Image
                      key={image.id}
                      className={cn(
                        "w-full h-[180px] md:h-[290px] xl:h-[240px] 2xl:h-[290px] rounded-[12px]",
                        index == "0" && "col-span-2"
                      )}
                      width={image?.width}
                      height={image?.height}
                      src={getStrapiMedia(image?.url)}
                      alt={image?.alternativeText}
                    />
                  ))}
                </div>
              ) : (
                // <div class="w-full xl:w-[40%]">
                <figure
                  className="w-full xl:w-[40%] h-[300px] md:h-[500px] 2xl:h-[600px] mb-0"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Image
                    className="w-full h-full object-cover rounded-[12px]"
                    width={section.images[0]?.width}
                    height={section.images[0]?.height}
                    src={getStrapiMedia(section.images[0]?.url)}
                    alt={section.images[0]?.alternativeText}
                  />
                </figure>
                // </div>
              )}
            </>
          )}
          {section?.items && (
            <div
              class="accordion-list-sec w-full flex flex-col gap-4 xl:gap-6 xl:w-[60%] xl:h-[500px] 2xl:h-[600px] md:overflow-y-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {section?.items.map(
                (accordion, index) =>
                  accordion?.title &&
                  accordion?.content && (
                    <div key={accordion.id}>
                      <div className="single-accordion relative">
                        <div className="flex items-center gap-2 p-2">
                          {accordion?.icon && (
                            <Image
                              key={accordion.icon.id}
                              className="w-12 h-12 rounded-[12px] bg-[#E0E1F5] flex justify-center items-center p-3"
                              width={accordion.icon?.width}
                              height={accordion.icon?.height}
                              src={getStrapiMedia(accordion.icon?.url)}
                              alt={accordion.icon?.alternativeText}
                            />
                          )}
                          {accordion.title}
                        </div>
                      </div>
                      <div className="panel">
                        {accordion?.content && accordion.content.length > 0 && (
                          <BlocksRenderer
                            content={accordion.content}
                            blocks={{
                              paragraph: ({ children }) => (
                                <p className="text-[#3D434C] p-2">{children}</p>
                              ),
                              heading: ({ children, level }) => {
                                switch (level) {
                                  case 1:
                                    return <h1>{children}</h1>;
                                  case 2:
                                    return <h2>{children}</h2>;
                                  case 3:
                                    return <h3>{children}</h3>;
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
                                  return <ol>{props.children}</ol>;
                                }
                                return <ul>{props.children}</ul>;
                              },
                              "list-item": (props) => (
                                <li className="text-[#000000] font-medium">
                                  {props.children}
                                </li>
                              ),
                              link: ({ children, url }) => (
                                <Link href={url}>{children}</Link>
                              ),
                            }}
                            modifiers={{
                              bold: ({ children }) => (
                                <strong>{children}</strong>
                              ),
                              italic: ({ children }) => (
                                <span className="italic">{children}</span>
                              ),
                            }}
                          />
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>

        {section?.post_content && section.post_content.length > 0 && (
          <div className="flex flex-col gap-6">
            <BlocksRenderer
              content={section.post_content}
              blocks={{
                paragraph: ({ children }) => (
                  <p className="text-[#1A1D21] text-[14px] md:text-[15px] 2xl:text-[16px] leading-[1.6]">
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
                      return <h3>{children}</h3>;
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
                link: ({ children, url }) => <Link href={url}>{children}</Link>,
              }}
              modifiers={{
                bold: ({ children }) => <strong>{children}</strong>,
                italic: ({ children }) => (
                  <span className="italic">{children}</span>
                ),
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function TitleContentHalf({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={cn(
        "pt-8 md:pt-12 2xl:pt-[60px] overflow-hidden",
        section?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-start flex-col lg:flex-row gap-4 md:gap-8 2xl:gap-[60px] relative">
          <div className="box-title-sec w-full lg:w-[45%]">
            <Image
              src={tigerMask3}
              alt="tigermark"
              className="absolute left-0 bottom-0"
            />
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="section-heading">{section?.heading}</span>
              <div className="section-title-wrapper">
                <h3 className="section-title">{section?.title}</h3>
              </div>
            </div>
          </div>
          {section?.content && section.content.length > 0 && (
            <div className="box-content-sec w-full lg:w-[60%] relative">
              <BlocksRenderer
                content={section.content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p data-aos="fade-left" data-aos-duration="1000">
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
                        return <h3>{children}</h3>;
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function TitleContentFull({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={cn(
        "pt-8 md:pt-12 2xl:pt-[60px] overflow-hidden",
        section?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto">
        <span className="section-heading">{section?.heading}</span>
        <div className="section-title-wrapper mb-6 md:mb-10">
          <h3 className="section-title">{section?.title}</h3>
        </div>
        {section?.collection &&
          section.collection.length > 0 &&
          section.collection.map((collection) => (
            <>
              {collection?.description && (
                <h3 className="section-sub-title">{collection.description}</h3>
              )}
              {collection?.content && collection.content.length > 0 && (
                <BlocksRenderer
                  content={collection.content}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className="text-[#4F5662] text-[14px] md:text-[15px] 2xl:text-[16px] mb-4 mt-">
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
                          return <h3>{children}</h3>;
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
                          <ol className="list-decimal mt-4 md:mt-6 2xl:mt-10 pl-4">
                            {props.children}
                          </ol>
                        );
                      }
                      return (
                        <ul className="list-disc mt-4 md:mt-6 2xl:mt-10 pl-4">
                          {props.children}
                        </ul>
                      );
                    },
                    "list-item": (props) => (
                      <li className="text-[14px] md:text-[15px] 2xl:text-[16px] mt-4 text-[#1A1D21]">
                        {props.children}
                      </li>
                    ),
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
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 2xl:gap-10 mt-6 md:mt-8 2xl:mt-10">
                {collection?.images &&
                  collection.images.length > 0 &&
                  collection.images.map((image) => (
                    <div class="tyre-care-card" key={image.id}>
                      <figure className="w-full h-[190px] md:h-[240px] rounded-[12px]">
                        <Image
                          className="w-full h-full object-fill rounded-[12px]"
                          width={image?.image.width}
                          height={image?.image.height}
                          src={getStrapiMedia(image?.image.url)}
                          alt={image?.image.alternativeText}
                        />
                      </figure>
                      <h3 className="text-[#1A1D21] mt-6 text-[24px] font-bold">
                        {image.title}
                      </h3>
                      <p className="text-[#4F5662] text-[16px] mt-4">
                        {image.description}
                      </p>
                    </div>
                  ))}
              </div>
            </>
          ))}
      </div>
    </section>
  );
}

export function Gallery({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const AOCClass = [
    "fade-down-right",
    "fade-down-left",
    "fade-up-right",
    "fade-up-left",
  ];
  const BGColor = ["#2E3192", "#F5811E", "#F5811E", "#2E3192"];

  if (!section?.collection || section.collection.length === 0) {
    return null;
  }

  const renderGalleryContent = () => {
    switch (section.collection.length) {
      case 1:
        if (section.collection[0].image.ext === ".mp4") {
          return (
            <div className="w-[100%] mt-4 2xl:mt-8 relative z-51">
              <video className="!w-full" loop autoPlay muted playsInline>
                <source
                  src={getStrapiMedia(section.collection[0].image?.url)}
                  type="video/mp4"
                />
              </video>
            </div>
          );
        } else {
          return (
            <div className="container mx-auto mt-10 lg:mt-[60px]">
              <div className="overflow-hidden">
                <span className="section-heading">{section?.heading}</span>
                <div
                  className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <h3 className="section-title">{section?.title}</h3>
                </div>
                <div className="relative rounded-[12px] overflow-hidden">
                  <figure className="relative w-full h-[240px] md:h-[450px] 2xl:h-[600px] rounded-[12px] group">
                    <Image
                      width={section.collection[0].image?.width}
                      height={section.collection[0].image?.height}
                      src={getStrapiMedia(section.collection[0].image?.url)}
                      alt={section.collection[0].image?.alternativeText}
                      className="w-full h-full"
                    />
                    <span className="vision-overlay">
                      {section?.collection[0].description}
                    </span>
                  </figure>
                </div>
              </div>
            </div>
          );
        }
      case 2:
        return (
          <div className="container mx-auto">
            <div className="flex items-start gap-4 md:gap-8 w-full mt-10">
              {section.collection.map(
                (collection) =>
                  collection?.image && (
                    <figure className="w-1/2" key={collection.image.id}>
                      <Image
                        className="w-full rounded-[12px]"
                        width={collection.image?.width}
                        height={collection.image?.height}
                        src={getStrapiMedia(collection.image?.url)}
                        alt={collection.image?.alternativeText}
                        data-aos="flip-up"
                        data-aos-duration="1500"
                      />
                    </figure>
                  )
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="container mx-auto">
            <span className="section-heading">{section?.heading}</span>
            <div
              className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="section-title">{section?.title}</h3>
            </div>

            <div className="relative mt-6">
              <figure className="absolute w-[100px] h-[100px] 2xl:w-[150px] 2xl:h-[150px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-full p-7 z-10 hidden md:block">
                <Image
                  className={section?.collection_name ? "!opacity-15" : ""}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  src={tiger}
                  alt="img"
                />
                {section?.collection_name && (
                  <span className="text-primary font-bold text-[28px] 2xl:text-[48px] uppercase absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    {section.collection_name}
                  </span>
                )}
              </figure>
              <div
                className={cn(
                  "new-main relative grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10 overflow-hidden rounded-[12px]",
                  section?.collection_name ? "" : "p-4 md:p-[28px]"
                )}
              >
                {section.collection.map((image, index) => (
                  <>
                    {!section?.collection_name && (
                      <>
                        <Image
                          className="absolute top-0 left-0 z-1 w-[220px] md:w-[260px] h-[200px] md:h-[230px] 2xl:w-[330px] 2xl:h-[300px]"
                          src={Triangle3}
                          alt="img"
                          data-aos={AOCClass[0]}
                          data-aos-duration="1000"
                        />
                        <Image
                          className="absolute bottom-0 right-0 z-1 w-[220px] md:w-[260px] h-[200px] md:h-[230px] 2xl:w-[330px] 2xl:h-[300px]"
                          src={Triangle4}
                          alt="img"
                          data-aos={AOCClass[3]}
                          data-aos-duration="1000"
                        />
                      </>
                    )}
                    <div
                      className="value-overlay-card relative overflow-hidden rounded-[12px] group"
                      key={image.id}
                    >
                      <figure
                        className="relative z-2 w-full h-[190px] 2xl:h-[300px]"
                        data-aos={AOCClass[index]}
                        data-aos-duration="1000"
                      >
                        <Image
                          className="w-full h-full object-cover"
                          width={image.image?.width}
                          height={image.image?.height}
                          src={getStrapiMedia(image.image?.url)}
                          alt={image.image?.alternativeText}
                        />
                        {section?.collection_name && (
                          <div
                            className="value-overlay opacity-75"
                            style={{ backgroundColor: BGColor[index] }}
                          >
                            <h3>{image?.title}</h3>
                            <p>{image?.description}</p>
                          </div>
                        )}
                      </figure>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="container mx-auto">
            <div
              className={cn(
                "gallery-sec grid gap-3 2xl:gap-4 pt-6 md:pt-10 2xl:pt-[60px]",
                section?.compact
                  ? "grid-cols-2 md:grid-cols-4 lg:grid-cols-7 2xl:grid-cols-6"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {section.collection.map((image) => (
                <figure
                  className={cn(
                    "w-full mb-0 overflow-hidden rounded-[20px] relative cursor-pointer sustainability-figure",
                    section?.compact
                      ? // "h-[240px]"
                        "lg:w-[150px] lg:h-[150px] 2xl:w-full 2xl:h-fit"
                      : "h-[240px] md:h-[316px]",
                    image?.big ? "lg:col-span-2" : ""
                  )}
                  data-aos="flip-left"
                  data-aos-duration="1000"
                  key={image.id}
                >
                  <Image
                    width={image.image?.width}
                    height={image.image?.height}
                    src={getStrapiMedia(image.image?.url)}
                    alt={image.image?.alternativeText}
                    className={cn(
                      "gallery-sec-image",
                      section?.compact
                        ? ""
                        : "hover:scale-125 hover:rotate-[5deg]"
                    )}
                  />
                  {image?.title && (
                    <span className="sustainability-overlay">
                      {image.title}
                    </span>
                  )}
                </figure>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden pb-6 md:pb-8 2xl:pb-[60px]",
        section?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      {renderGalleryContent()}
    </section>
  );
}

export function ImagePoint({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={cn(
        "vast-product-sec py-6 md:py-10 2xl:py-[60px] overflow-hidden",
        section?.settings?.background ? "bg-[#F4F5F6]" : "bg-white"
      )}
    >
      <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
        <div data-aos="fade-left" data-aos-duration="1000">
          <span className="section-heading">{section?.heading}</span>
          <div className="section-title-wrapper">
            <h3 className="section-title">{section?.title}</h3>
          </div>
        </div>
        {section?.content && section.content.length > 0 && (
          <BlocksRenderer
            content={section.content}
            blocks={{
              paragraph: ({ children }) => (
                <p
                  className="text-[#1A1D21] text-[14px] md:text-[15px] 2xl:text-[16px] leading-[1.6]"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
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
                    return <h3>{children}</h3>;
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
              link: ({ children, url }) => <Link href={url}>{children}</Link>,
            }}
            modifiers={{
              bold: ({ children }) => <strong>{children}</strong>,
              italic: ({ children }) => (
                <span className="italic">{children}</span>
              ),
            }}
          />
        )}
        {section?.collection && section.collection.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3 2xl:gap-10">
            {section.collection.map((collection) => (
              <div
                key={collection.id}
                className="vast-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="100"
              >
                {collection?.image && (
                  <figure>
                    <Image
                      className="vast-card-image"
                      src={getStrapiMedia(collection.image.url)}
                      alt={collection.image.alternativeText}
                      width={collection.image.width}
                      height={collection.image.height}
                    />
                  </figure>
                )}
                <h2 data-aos="fade-left" data-aos-duration="500">
                  {collection.title}
                </h2>
                {collection?.content && collection.content.length > 0 && (
                  <BlocksRenderer
                    content={collection.content}
                    blocks={{
                      paragraph: ({ children }) => (
                        <p data-aos="fade-left" data-aos-duration="1000">
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function JobApplication({ section }) {
  const [formLoading, setLoading] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    specialization: "",
    resume: null,
  });
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { push } = useRouter();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
      setFileName(files[0].name); // Set the file name
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      ['contactNumber']: value,
    });
  };
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    try {
      const response = await fetch(
        "http://birlatyres.viaconprojects.com:1337/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to upload file");
      } else {
        push("/thankyou");
      }
      const data = await response.json();
      return data[0].id; // Assuming Strapi returns the uploaded file info including its ID
    } catch (error) {
      console.error("File upload error:", error);
      throw error;
    }
  };
  const handleSubmit = async (e) => {
    setError('');
    setLoading(true);
    e.preventDefault();
    if (!formData.contactNumber || !/^\+?\d{1,4}[\s\-\(\)]?\(?[\d\(\)\-\s\+]{6,20}$/g.test(formData.contactNumber)) {
      setLoading(false);
      setError('Please enter a valid phone number.');
      return;
    }
    const resumeId = await uploadFile(formData.resume);
    const dataToSend = {
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        contactNumber: formData.contactNumber,
        specialization: formData.specialization,
        resume: resumeId,
      },
    };
    try {
      const response = await fetch(
        "http://birlatyres.viaconprojects.com:1337/api/job-applications",
        {
          method: "POST",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
      const data = await response.json();
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("There was an error submitting the form.");
    }
  };

  return (
    <section
      className={cn(
        "page-content-sec",
        section?.settings?.background ? "xl:bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto flex flex-col overflow-hidden">
        <div className="flex items-center flex-col lg:flex-row gap-4 md:gap-8 2xl:gap-[60px] pt-[60px] xl:pt-[120px]">
          <div
            className="box-title-sec w-full lg:w-[40%] xl:w-[45%] relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span className="section-heading">{section?.heading}</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">{section?.title}</h3>
            </div>
            {section?.content && section.content.length > 0 && (
              <BlocksRenderer
                content={section.content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className="text-[#1A1D21] text-[14px] md:text-[15px] 2xl:text-[16px] leading-[1.6] mt-6">
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
                        return <h3>{children}</h3>;
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
            <Image alt="mask" src={tigerMask} className="hidden lg:block" />
          </div>
          <div className="w-full lg:w-[60%] xl:w-[55%]">
            <div
              className="form-content"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <form
                className="w-full flex flex-col gap-3 md:gap-5"
                onSubmit={handleSubmit}
              >
                {section?.formName && (
                  <div>
                    <span className="text-primary text-[28px] md:text-[36px] 2xl:text-[48px] font-bold">
                      {section.formName}
                    </span>
                  </div>
                )}
                <div className="form-row">
                  {section?.firstName?.label && (
                    <label className="contact-label" htmlFor="firstName">
                      {section.firstName.label}
                      <span className="text-red-600 pl-[2px]">*</span>
                    </label>
                  )}
                  <input
                    className="contact-input"
                    type="text"
                    name="firstName"
                    placeholder={section?.firstName?.placeholder}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  {section?.lastName?.label && (
                    <label className="contact-label" htmlFor="lastName">
                      {section.lastName.label}
                      <span className="text-red-600 pl-[2px]">*</span>
                    </label>
                  )}
                  <input
                    className="contact-input"
                    type="text"
                    name="lastName"
                    placeholder={section?.lastName?.placeholder}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  {section?.email?.label && (
                    <label className="contact-label" htmlFor="email">
                      {section.email.label}
                      <span className="text-red-600 pl-[2px]">*</span>
                    </label>
                  )}
                  <input
                    className="contact-input"
                    type="email"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title='"example@email.com"'
                    name="email"
                    placeholder={section?.email?.placeholder}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  {section?.contactNumber?.label && (
                    <label className="contact-label" htmlFor="contactNumber">
                      {section.contactNumber.label}
                      <span className="text-red-600 pl-[2px]">*</span>
                    </label>
                  )}
                    <PhoneInput
                      className="contact-input pl-[10px]"
                      international
                      defaultCountry="IN"
                      value={value}
                      name="contactNumber"
                      placeholder={section?.contactNumber?.placeholder}
                      onChange={handlePhoneChange}
                      maxlength="18"
                      required
                    />
                </div>
                {section?.specialization && (
                  <div className="form-row">
                    {section?.specializationLabel && (
                      <label className="contact-label" htmlFor="specialization">
                        {section.specializationLabel}
                        <span className="text-red-600 pl-[2px]">*</span>
                      </label>
                    )}
                    <select
                      className="contact-select"
                      name="specialization"
                      onChange={handleChange}
                      required
                    >
                      {section.specialization.map((option) => (
                        <option
                          key={option.id}
                          value={option?.value ? option.value : ""}
                        >
                          {option?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="w-full flex flex-col">
                  {section?.resume?.label && (
                    <label className="contact-label" htmlFor="resume">
                      {section.resume.label}
                      <span className="text-red-600 pl-[2px]">*</span>
                    </label>
                  )}
                  <div className="relative border border-[#727C8D] rounded-[8px]">
                    <input
                      className="contact-input !p-3 placeholder:!text-[#000000] placeholder:!text-[10px] md:placeholder:!text-[14px] w-full rounded-[8px]"
                      type="none"
                      name="resumeName"
                      value={fileName}
                      placeholder={section?.resume?.placeholder}
                      disabled
                    />
                    <input
                      type="file"
                      accept=".pdf,.docx"
                      name="resume"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {section?.concent && (
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      className="mt-1 min-w-[16px]"
                      style={{ "color-scheme": "none" }}
                      required
                    />
                    {section.concent.length > 0 && (
                      <BlocksRenderer
                        content={section.concent}
                        blocks={{
                          paragraph: ({ children }) => (
                            <p className="text-[12px] md:text-[14px] text-[#000000]">
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
                                return <h3>{children}</h3>;
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
                          link: ({ children, url }) => (
                            <Link
                              href={url}
                              className="underline underline-offset-1 cursor-pointer"
                            >
                              {children}
                            </Link>
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
                )}
                {error && <p className="text-red-500">{error}</p>}
                {success && (
                  <p className="text-green-500">
                    Application submitted successfully!
                  </p>
                )}
                <div className="flex gap-4 items-center">
                  <button
                    type="submit"
                    className="primary-btn w-fit flip-animate-2"
                  >
                    <span data-hover={section?.submit}>{section?.submit}</span>
                  </button>
                  {formLoading && <p>Submitting your Application...</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SliderSec({ section }) {
  return (
    <section className="pt-6 md:pt-8 2xl:pt-[60px] pb-6 md:pb-8 2xl:pb-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3">
          <span className="section-heading">{section?.heading}</span>
          <div className="section-title-wrapper">
            <h3 className="section-title">{section?.title}</h3>
          </div>
        </div>
        <div className="mission-card-sec relative mt-6 2xl:mt-10">
          <Swiper
            navigation={true}
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
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.6,
                spaceBetween: 48,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 48,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="myMissionSwiper"
          >
            {section.collection.map((sliderCard) => (
              <SwiperSlide key={sliderCard.id}>
                <div className="mission-card">
                  <figure>
                    <Image
                      width={sliderCard.image?.width}
                      height={sliderCard.image?.height}
                      src={getStrapiMedia(sliderCard.image?.url)}
                      alt={sliderCard.image?.alternativeText}
                    />
                  </figure>
                  <div className="mission-card-detail">
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-12 h-12 rounded-[12px] bg-[#E0E1F5] flex justify-center items-center p-2">
                        <Image
                          width={sliderCard.icon?.width}
                          height={sliderCard.icon?.height}
                          src={getStrapiMedia(sliderCard.icon?.url)}
                          alt={sliderCard.icon?.alternativeText}
                        />
                      </div>
                      <h2>{sliderCard?.title}</h2>
                    </div>
                    <p>{sliderCard?.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export function DoubleSlider({ section }) {
  return (
    <section className="page-content-sec my-8 md:my-12 2xl:my-[60px] overflow-hidden">
      <div className="container mx-auto flex flex-col gap-8 md:gap-[120px]">
        <div className="manufacture-slider-sec">
          <div class="mt-5 md:mt-10 2xl:mt-12">
            <span className="section-heading">{section?.heading}</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">{section.title}</h3>
            </div>
            {section?.collection.map((collection, index) => (
              <div key={collection.id}>
                <h3 className="text-[24px] 2xl:text-[32px] text-secondary mt-6 2xl:mt-8">
                  {collection?.description}
                </h3>
                <Swiper
                  navigation={true}
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
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView:
                        section.collection[index].slider.length > 3
                          ? 3
                          : section.collection[index].slider.length,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView:
                        section.collection[index].slider.length > 4
                          ? 4
                          : section.collection[index].slider.length,
                      spaceBetween: 40,
                    },
                  }}
                  modules={[Autoplay, Navigation]}
                  className="myValueSwiper !px-5 mt-3 2xl:mt-5"
                >
                  {collection?.slider &&
                    collection.slider.length > 0 &&
                    collection.slider.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="phil-card">
                          <figure>
                            <Image
                              className="phil-card-image"
                              width={item.icon?.width}
                              height={item.icon?.height}
                              src={getStrapiMedia(item.icon?.url)}
                              alt={item.icon?.alternativeText}
                            />
                          </figure>
                          <h2>{item?.title}</h2>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImageDetailContent({ section }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="overflow-hidden xl:bg-[#F8F8F8]">
      <div class="container mx-auto">
        <div
          className={cn(
            "flex flex-col items-start gap-2 xl:gap-4 2xl:gap-10 md:p-6 xl:p-10 md:bg-white md:border border-[#C9CDD3] md:rounded-[24px] xl:pt-6 mt-8 2xl:mt-[60px]",
            section?.settings?.right ? "xl:flex-row-reverse" : "xl:flex-row "
          )}
        >
          <figure
            className="w-full xl:w-[40%] h-[300px] md:h-[420px] lg:h-[600px] xl:h-[400px] 2xl:h-[480px] relative glare"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <Image
              className={cn(
                "absolute -z-1 w-[90%] h-[90%]",
                section?.settings?.right ? "right-0" : "left-0"
              )}
              src={section?.settings?.right ? Triangle2 : Triangle1}
              alt="triangle"
            />
            <Image
              className={cn(
                "absolute top-4 md:top-8 w-[90%] h-[90%] rounded-[12px]",
                section?.settings?.right
                  ? "right-4 md:right-8"
                  : "left-4 md:left-8"
              )}
              width={section?.image.width}
              height={section?.image.height}
              src={getStrapiMedia(section?.image.url)}
              alt={section?.image.alternativeText}
            />
          </figure>
          <div className="flex flex-col justify-center gap-2 md:gap-6 w-full xl:w-[60%] relative overflow-hidden">
            <div className="flex flex-col gap-2 md:gap-4 2xl:gap-6">
              <Image
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                src={BGTiger2}
                alt=""
              />
              <div className="flex gap-2 flex-col">
                <h2
                  className="text-[24px] md:text-[36px] 2xl:text-[48px] font-bold text-secondary"
                  data-aos="fade-left"
                  data-aos-duration="200"
                >
                  {section?.name}
                </h2>
                <h3
                  className="uppercase text-primary font-medium text-[18px] md:text-[20px] 2xl:text-[24px]"
                  data-aos="fade-left"
                  data-aos-duration="400"
                >
                  {section?.designation}
                </h3>
              </div>
              <div
                class="relative flex gap-2"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <p className="text-[#1A1D21] text-[20px] md:text-[24px] font-medium">
                  {section.social_title}
                </p>
                {section?.social &&
                  section.social.length > 0 &&
                  section.social.map(
                    (social) =>
                      social?.link &&
                      social?.icon && (
                        <Link
                          href={social.link}
                          target="_blank"
                          key={social.id}
                        >
                          <Image
                            width={social.icon.width}
                            height={social.icon.height}
                            src={getStrapiMedia(social.icon.url)}
                            alt={social.icon.alternativeText}
                          />
                        </Link>
                      )
                  )}
              </div>
              <BlocksRenderer
                content={section.content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p
                      className="text-[14px] md:text-[15px] 2xl:text-[17px] text-[#3D434C]"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
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
                        return <h3>{children}</h3>;
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
              <div class="line-loader self-end">
                <div class="bar bar1"></div>
                <div class="bar bar2"></div>
                <div class="bar bar3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SidebarContent({ section }) {
  const [activeTab, setActiveTab] = useState(section.collection[0].id);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };
  return (
    <section className="relative mt-6 md:mt-8 2xl:mt-[60px]">
      <div class="container mx-auto">
        <span className="section-heading">{section?.heading}</span>
        <div className="section-title-wrapper mb-4 md:mb-8 2xl:mb-10">
          <h2 className="section-title">{section?.title}</h2>
        </div>
        <BlocksRenderer
          content={section.content}
          blocks={{
            paragraph: ({ children }) => (
              <p className="text-[#1A1D21]">{children}</p>
            ),
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return <h1>{children}</h1>;
                case 2:
                  return <h2>{children}</h2>;
                case 3:
                  return <h3>{children}</h3>;
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
            link: ({ children, url }) => <Link href={url}>{children}</Link>,
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => (
              <span className="italic">{children}</span>
            ),
          }}
        />
        <div className="w-full flex flex-col md:flex-row items-start gap-3 lg:gap-10 mt-4 md:mt-10">
          <div className="newBoxSection w-full md:w-[30%] md:sticky md:top-[100px] bg-primary border border-primary rounded-xl text-white leading-[17px] flex flex-col items-start overflow-hidden">
            {section.collection.map((collection) => (
              <button
                className={`p-4 md:px-[5px] md:py-3 lg:p-4 w-full text-[16px] md:text-[14px] lg:text-[16px] text-left transition duration-300 ${
                  activeTab === collection.id
                    ? "bg-[#FEEFE2] text-primary"
                    : "bg-transparent"
                }`}
                key={collection.id}
                onClick={() => {
                  setActiveTab(collection.id);
                  if (window.innerWidth <= 768) {
                    // Adjust this value based on your design
                    document
                      .getElementById(`section-${collection.id}`)
                      .scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }
                }}
              >
                {collection.description}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-[70%] overflow-hidden">
            <Image
              src={tigerMask}
              alt="img"
              className="absolute top-10 left-1/2 translate-x-[-50%]"
            />
            {section.collection.map((collection) => {
              if (isWideScreen && collection.id !== activeTab) return null;

              return (
                <div
                  id={`section-${collection.id}`}
                  className="border-b border-[#C9CDD3] py-4 md:border-none md:py-0"
                  key={collection.id}
                >
                  {/* <h3 className="section-sub-title">
                    {collection.description}
                  </h3> */}
                  <BlocksRenderer
                    content={collection.content}
                    blocks={{
                      paragraph: ({ children }) => (
                        <p
                          className="pt-2 md:pt-4 text-[#1A1D21] text-[14px] md:text-[15px] xl:text-[16px]"
                        >
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
                              <h3 className="section-sub-title">{children}</h3>
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
                            <ol
                              className="list-decimal !pl-6"
                            >
                              {props.children}
                            </ol>
                          );
                        }
                        return (
                          <ul
                            className="list-disc"
                          >
                            {props.children}
                          </ul>
                        );
                      },
                      "list-item": (props) => (
                        <li className="pt-3 md:pt-5 text-[#1A1D21] text-[14px] md:text-[15px] xl:text-[16px]">
                          {props.children}
                        </li>
                      ),
                      link: ({ children, url }) => (
                        <Link href={url}>{children}</Link>
                      ),
                    }}
                    modifiers={{
                      bold: ({ children }) => <strong className="text-[14px] md:text-[15px] xl:text-[16px]">{children}</strong>,
                      italic: ({ children }) => (
                        <span className="italic">{children}</span>
                      ),
                    }}
                  />
                  <div class="relative flex justify-end md:hidden">
                    <button onClick={goToTop}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 16.5L9 9L16.5 16.5M1.5 9L9 1.5L16.5 9"
                          stroke="#F5811E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CreditContent({ section }) {
  return (
    <section className="mt-8 md:mt-12 2xl:mt-[16px]">
      <div class="container mx-auto">
        <div class="w-full bg-secondary rounded-[12px] flex flex-col items-center">
          <BlocksRenderer
            content={section.content}
            blocks={{
              paragraph: ({ children }) => (
                <p className="!text-[#FFFFFF] text-center text-[16px] md:text-[24px] font-[300] p-4 md:py-6">
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
                    return <h3>{children}</h3>;
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
              link: ({ children, url }) => (
                <Link
                  className="font-bold !underline !underline-offset-2"
                  href={url}
                >
                  {children}
                </Link>
              ),
            }}
            modifiers={{
              bold: ({ children }) => <strong>{children}</strong>,
              italic: ({ children }) => (
                <span className="italic">{children}</span>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
}

export function Testimonial({ section }) {
  return (
    <>
      <section className="page-content-sec mt-[60px] xl:mt-[120px]">
        <div className="container mx-auto">
          <div className="testimonial-sec">
            <span className="section-heading">{section?.heading}</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">{section?.title}</h3>
            </div>
            <div className="grid grid-cols1 md:grid-cols-2 gap-6 xl:gap-10 mt-6 md:mt-10 overflow-hidden">
              {section?.collection?.map((collection) => (
                <div
                  className="testimonial-card"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  key={collection.id}
                >
                  <figure className="w-full xl:w-[40%] h-[320px]">
                    <Image
                      className="vast-card-image !object-fill"
                      width={collection.image?.width}
                      height={collection.image?.height}
                      src={getStrapiMedia(collection.image?.url)}
                      alt={collection.image?.alternativeText}
                      data-aos="flip-up"
                      data-aos-duration="1000"
                    />
                  </figure>
                  <div className="testimonial-card-detail-wrapper">
                    <h2 className="testimonial-card-title">
                      {collection?.title}
                    </h2>
                    <div class="testimonial-card-detail">
                      <BlocksRenderer
                        content={collection.content}
                        blocks={{
                          paragraph: ({ children }) => (
                            <p className="">{children}</p>
                          ),
                          quote: ({ children }) => (
                            <blockquote className="text-[#1A1D21] text-[14px] md:text-[16px] xl:text-[17px]">
                              {children}
                            </blockquote>
                          ),
                          heading: ({ children, level }) => {
                            switch (level) {
                              case 1:
                                return <h1>{children}</h1>;
                              case 2:
                                return <h2>{children}</h2>;
                              case 3:
                                return <h3>{children}</h3>;
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
                          link: ({ children, url }) => (
                            <Link
                              className="font-bold !underline !underline-offset-2"
                              href={url}
                            >
                              {children}
                            </Link>
                          ),
                        }}
                        modifiers={{
                          bold: ({ children }) => <strong>{children}</strong>,
                          italic: ({ children }) => (
                            <span className="italic">{children}</span>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function TabImage({ section }) {
  const [activeTab, setActiveTab] = useState("tab-0");
  return (
    <>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="section-heading">{section?.heading}</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">{section?.title}</h3>
            </div>
          </div>
          <div>
            <div className="flex gap-2 md:gap-6 justify-between text-[#4F5662]">
              {section?.collection?.map((collection, index) => (
                <button
                  className={`w-1/4 flex items-center gap-2 xl:gap-5 justify-center bg-[#FEEFE2] rounded-tl-[12px] rounded-tr-[12px] p-2 md:p-5 ${
                    activeTab === "tab-" + index
                      ? "bg-primary !text-[#FFFFFF]"
                      : ""
                  }`}
                  onClick={() => setActiveTab("tab-" + index)}
                  key={collection.id}
                >
                  <Image
                    className="w-10 h-10 hidden lg:block"
                    width={collection.image?.width}
                    height={collection.image?.height}
                    src={getStrapiMedia(collection.image?.url)}
                    alt={collection.image?.alternativeText}
                    data-aos="flip-up"
                    data-aos-duration="1500"
                  />
                  <h2 className="text-[12px] md:text-[24px] xl:text-[28px] 2xl:text-[32px] font-medium">
                    {collection?.title}
                  </h2>
                </button>
              ))}
            </div>
            {section?.collection.map(
              (collection, index) =>
                activeTab === "tab-" + index && (
                  <div
                    key={collection.id}
                    className="bg-[#FFFFFFF] border-2 border-primary rounded-bl-[12px] rounded-br-[12px] border-t-0 flex flex-col text-[#4F5662] gap-6 p-2 md:p-6 xl:p-10 !pt-6 rounded-b-xl overflow-hidden"
                  >
                    {collection?.content && (
                      <BlocksRenderer
                        content={collection.content}
                        blocks={{
                          paragraph: ({ children }) => (
                            <p
                              className="text-[14px] md:text-[15px]"
                              data-aos="fade-down"
                              data-aos-duration="1000"
                            >
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
                                return <h3>{children}</h3>;
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
                          link: ({ children, url }) => (
                            <Link
                              className="font-bold !underline !underline-offset-2"
                              href={url}
                            >
                              {children}
                            </Link>
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
                    {collection?.icon && collection.icon.length > 0 && (
                      <div className="flex flex-col md:flex-row justify-between gap-2 xl:gap-6 overflow-hidden">
                        {collection.icon.map((image) => (
                          <figure
                            key={image.id}
                            className="w-full md:w-1/2 h-[220px] 2xl:h-[320px]"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                          >
                            <Image
                              width={image?.width}
                              height={image?.height}
                              src={getStrapiMedia(image?.url)}
                              alt={image?.alternativeText}
                              className="rounded-xl w-full h-full object-cover"
                            />
                          </figure>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export function Parallax({ section }) {
  const backgroundImageURL = getStrapiMedia(section.image.url);
  const backgroundImageStyle = {
    backgroundAttachment: "fixed",
    backgroundImage: `url(${backgroundImageURL})`,
  };
  const AOCClass = ["500", "1500", "2000", "3000"];
  return (
    <>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto">
          <div className="parallax-main-wrapper">
            <h2 className="text-secondary text-[20px] md:text-[28px] 2xl:text-[32px] leading-[1.2] font-bold mb-6 md:mb-8 2xl:mb-10 capitalize">
              {section?.description}
            </h2>
            <div className="parallax-main">
              <div
                id="parallax"
                className="parallax-item"
                style={backgroundImageStyle}
              >
                {section?.collection?.map((collection, index) => (
                  <div
                    className="parallax-card"
                    data-aos="fade-up"
                    data-aos-duration={AOCClass[index]}
                    key={collection.id}
                  >
                    <Image
                      width={collection.image?.width}
                      height={collection.image?.height}
                      src={getStrapiMedia(collection.image?.url)}
                      alt={collection.image?.alternativeText}
                    />
                    <h3>{collection.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function KeyPoints({ section }) {
  return (
    <>
      <section className="page-content-sec mt-[60px]">
        <div className="container mx-auto">
          <div className="pillar-sec">
            <div className="flex items-start flex-col md:flex-row gap-4 md:gap-2 lg:gap-8 2xl:gap-[60px] !pb-[100px]">
              {section?.image && (
                <figure
                  className="w-full md:w-[45%] h-[300px] md:h-[320px] lg:h-[350px] xl:h-[480px] relative glare"
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <Image
                    className="absolute -z-1 w-[90%] h-[90%]"
                    src={Triangle1}
                    alt="triangle"
                  />
                  <Image
                    className="absolute top-4 xl:top-8 left-4 xl:left-8 w-[90%] h-[90%] rounded-[12px]"
                    width={section.image?.width}
                    height={section.image?.height}
                    src={getStrapiMedia(section.image?.url)}
                    alt={section.image?.alternativeText}
                  />
                </figure>
              )}
              <div className="box-content-sec relative md:w-[55%] flex flex-col overflow-hidden">
                {section?.heading && (
                  <span
                    className="section-heading"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    {section.heading}
                  </span>
                )}
                {section?.title && (
                  <div
                    className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
                    data-aos="fade-left"
                    data-aos-duration="500"
                  >
                    <h3 className="section-title">{section.title}</h3>
                  </div>
                )}
                {section?.collection && section.collection.length > 0 && (
                  <div
                    className="pillar-list-sec"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    {section.collection.map(
                      (point) =>
                        point.title && (
                          <div key={point.id} className="pillar-box">
                            {point?.icon && (
                              <Image
                                key={point.icon.id}
                                className="w-12 h-12 rounded-[12px] bg-[#E0E1F5] flex justify-center items-center p-3"
                                width={point.icon?.width}
                                height={point.icon?.height}
                                src={getStrapiMedia(point.icon?.url)}
                                alt={point.icon?.alternativeText}
                              />
                            )}
                            <div className="pillar-list">
                              <p>{point.title}</p>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
