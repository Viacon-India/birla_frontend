"use client";

import React, { useEffect, useState, useCallback } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { getStrapiMedia } from "@/lib/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Triangle1 from "@/app/assets/images/triangle1.png";
import Triangle2 from "@/app/assets/images/triangle2.png";
import tigerMask from "@/app/assets/images/tiger-mask2.png";
import tiger from "@/app/assets/images/tiger.png";

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

      {section.__component == "section.accordion2" && (
        <Accordion2 section={section} Background={Background} />
      )}
      {section.__component == "section.tigerMark" && (
        <TigerMark section={section} Background={Background} />
      )}
      {section.__component == "section.commonsec" && (
        <CommonSec section={section} Background={Background} right={right} />
      )}
    </>
  );
}

export function Files({ section }) {
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
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.25 15.75H17.625V20.25M19.875 18.375H17.625M4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25C7.5 16.8522 7.34196 16.4706 7.06066 16.1893C6.77936 15.908 6.39782 15.75 6 15.75H4.5V20.25M4.5 12V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25M14.25 3L19.5 8.25M14.25 3V8.25H19.5M19.5 8.25V12M12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C14.0129 19.169 14.25 18.5967 14.25 18C14.25 17.4033 14.0129 16.831 13.591 16.409C13.169 15.9871 12.5967 15.75 12 15.75H10.6875V20.25H12Z"
                              stroke="#2E3192"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        {collection?.name && <p>{collection.name}</p>}
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
      <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
        <div
          className={cn(
            "section-layer",
            section?.settings?.right ? "md:flex-row-reverse" : "md:flex-row "
          )}
        >
          <figure
            className="w-full md:w-[45%] h-[350px] md:h-[480px] relative glare"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <Image
              className={cn(
                "absolute -z-1 w-[90%] h-[90%]",
                section?.settings?.right ? "right-0" : "left-0"
              )}
              src={section?.settings?.right ? Triangle2 : Triangle1}
              alt="img"
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

          <div className="box-content-sec relative md:w-[55%] flex flex-col">
            <span
              className="section-heading"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              {section?.heading}
            </span>
            <div
              className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h3 className="section-title">{section?.title}</h3>
            </div>
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
            {section?.link && (
              <Link href={section.link} target="_blank" className="more-btn">
                Know More
              </Link>
            )}
            <div class="line-loader self-end">
              <div class="bar bar1"></div>
              <div class="bar bar2"></div>
              <div class="bar bar3"></div>
            </div>
          </div>
        </div>
        {section?.post_content && section.post_content.length > 0 && (
          <BlocksRenderer
            content={section.post_content}
            blocks={{
              paragraph: ({ children }) => (
                <p
                  className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6] mb-3 md:mb-10 2xl:mb-[60px]"
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
  }, []);
  return (
    <section
      className={cn(
        "py-6 md:py-10 2xl:py-[60px] overflow-hidden",
        section?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
        <div>
          <span className="section-heading">{section?.heading}</span>
          <div className="section-title-wrapper">
            <h3 className="section-title">{section?.title}</h3>
          </div>
        </div>
        {section?.pre_content && section.pre_content.length > 0 && (
          <BlocksRenderer
            content={section.pre_content}
            blocks={{
              paragraph: ({ children }) => (
                <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
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
        <div class="flex flex-col md:flex-row gap-4 md:gap-10">
          {section?.images && section.images.length > 0 && (
            <>
              {section.images.length > 1 ? (
                <div class="w-full md:w-[40%] h-fit md:sticky top-[90px] grid grid-cols-2 gap-4 md:gap-6">
                  {section.images.map((image, index) => (
                    <Image
                      key={image.id}
                      className={cn(
                        "w-full h-[240px] 2xl:h-[265px] rounded-[12px]",
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
                <div class="w-full md:w-[40%] h-fit md:sticky top-[90px]">
                  <figure
                    className="w-full h-[350px] md:h-[450px] 2xl:h-[600px] mb-0"
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
                </div>
              )}
            </>
          )}
          {section?.items && (
            <div
              class="accordion-list-sec w-full md:w-[60%] h-[350px] md:h-[450px] 2xl:h-[600px] overflow-y-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {section?.items.map(
                (accordion, index) =>
                  accordion?.title &&
                  accordion?.description && (
                    <div key={accordion.id} className="collapse collapse-plus">
                      {index == 0 ? (
                        <input
                          type="radio"
                          name="my-accordion-3"
                          defaultChecked
                        />
                      ) : (
                        <input type="radio" name="my-accordion-3" />
                      )}
                      <div className="collapse-title">
                        {accordion?.icon && (
                          <Image
                            key={accordion.icon.id}
                            className="w-12 h-12 rounded-[12px] bg-[#E0E1F5] flex justify-center items-center px-4 py-[14px]"
                            width={accordion.icon?.width}
                            height={accordion.icon?.height}
                            src={getStrapiMedia(accordion.icon?.url)}
                            alt={accordion.icon?.alternativeText}
                          />
                        )}
                        {accordion.title}
                      </div>
                      <div className="collapse-content">
                        <p>{accordion.description}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
        {section?.post_content && section.post_content.length > 0 && (
          <BlocksRenderer
            content={section.post_content}
            blocks={{
              paragraph: ({ children }) => (
                <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
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
        <div className="flex items-start flex-col md:flex-row gap-4 md:gap-8 2xl:gap-[60px]">
          <div
            className="box-title-sec w-full md:w-[45%] relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image
              src={tigerMask}
              alt="tigermark"
              className="absolute left-0 top-0"
            />
            <span className="section-heading">{section?.heading}</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">{section?.title}</h3>
            </div>
          </div>
          {section?.content && section.content.length > 0 && (
            <div className="box-content-sec w-full md:w-[60%] relative">
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
        <div className="section-title-wrapper">
          <h3 className="section-title">{section?.title}</h3>
        </div>
        <BlocksRenderer
          content={section.content}
          blocks={{
            paragraph: ({ children }) => (
              <p className="text-[#1A1D21] text-[14px] md:text-[16px] 2xl:text-[17px] mt-6 2xl:mt-10">
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
              <li className="text-[14px] md:text-[16px] 2xl:text-[17px] mt-4">
                {props.children}
              </li>
            ),
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
      case 6:
        return (
          <div className="container mx-auto">
            <div className="gallery-sec grid grid-cols-4 gap-3 2xl:gap-4 pt-6 md:pt-10 2xl:pt-[60px]">
              {section.collection.map((image) => (
                <figure
                  className={cn(
                    "w-full h-[316px] mb-0",
                    image?.big ? "col-span-2" : ""
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
                    className="gallery-sec-image"
                  />
                </figure>
              ))}
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
            <div className="grid grid-cols-2 gap-6 md:gap-10 relative mt-6">
              <figure className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-full p-7 z-10">
                <Image
                  className={section?.collection_name ? "!opacity-15" : ""}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  src={tiger}
                  alt="img"
                />
                {section?.collection_name && (
                  <span className="text-primary font-bold text-[22px] md:text-[36px] 2xl:text-[48px] uppercase absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    {section.collection_name}
                  </span>
                )}
              </figure>
              {section.collection.map((image, index) => (
                <div
                  className="value-overlay-card relative overflow-hidden rounded-[12px] group"
                  key={image.id}
                >
                  <figure
                    className="w-full h-full"
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
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="container mx-auto">
            <div className="flex items-start gap-4 md:gap-8 xl:gap-[60px] w-full">
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
      default:
        if (section.collection[0].image.ext === ".mp4") {
          return (
            <div className="w-[100%] mt-4 2xl:mt-8 relative z-51">
              <video className="!w-full" loop autoPlay muted>
                <source
                  src={getStrapiMedia(section.collection[0].image?.url)}
                  type="video/mp4"
                />
              </video>
            </div>
          );
        } else {
          return (
            <div className="container mx-auto">
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
                  <figure className="relative w-full h-[350px] md:h-[450px] 2xl:h-[600px] rounded-[12px] group">
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
    }
  };

  return (
    <section
      className={cn(
        "relative pt-6 md:pt-8 2xl:pt-10 overflow-hidden pb-8 md:pb-12 2xl:pb-[60px]",
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
        <div>
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
                <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
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
          <div className="grid grid-cols1 md:grid-cols-3 gap-6 md:gap-10">
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
                <h2>{collection.title}</h2>
                {collection?.content && collection.content.length > 0 && (
                  <BlocksRenderer
                    content={collection.content}
                    blocks={{
                      paragraph: ({ children }) => <p>{children}</p>,
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
      </div>
    </section>
  );
}

export function JobApplication({ section }) {
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
      }
      const data = await response.json();
      return data[0].id; // Assuming Strapi returns the uploaded file info including its ID
    } catch (error) {
      console.error("File upload error:", error);
      throw error;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      // console.log('Success:', data);
    } catch (error) {
      // console.error('Error:', error);
      setError("There was an error submitting the form.");
    }
  };

  return (
    <section
      className={cn(
        "page-content-sec",
        section?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center flex-col md:flex-row gap-4 md:gap-8 2xl:gap-[60px] pt-[60px] md:pt-[120px]">
          <div
            className="box-title-sec w-full md:w-[45%] relative"
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
                    <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6] mt-6">
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
            <Image alt="mask" src={tigerMask} className="" />
          </div>
          <div className="w-full md:w-1/2">
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
                    <span className="text-primary text-[32px] md:text-[36px] 2xl:text-[48px] font-bold">
                      {section.formName}
                    </span>
                  </div>
                )}
                <div className="form-row">
                  {section?.firstName?.label && (
                    <label className="contact-label" htmlFor="firstName">
                      {section.firstName.label}
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
                    </label>
                  )}
                  <input
                    className="contact-input"
                    type="email"
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
                    </label>
                  )}
                  <input
                    className="contact-input"
                    type="text"
                    name="contactNumber"
                    placeholder={section?.contactNumber?.placeholder}
                    onChange={handleChange}
                    required
                  />
                </div>
                {section?.specialization && (
                  <div className="form-row">
                    {section?.specializationLabel && (
                      <label className="contact-label" htmlFor="specialization">
                        {section.specializationLabel}
                      </label>
                    )}
                    <select
                      className="contact-select"
                      name="specialization"
                      onChange={handleChange}
                      required
                    >
                      {section.specialization.map((option) => (
                        <option key={option.id} value={option?.value}>
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
                    </label>
                  )}
                  <div className="relative border border-[#727C8D] rounded-[8px]">
                    <input
                      className="contact-input w-full rounded-[8px]"
                      type="none"
                      name="resumeName"
                      value={fileName}
                      placeholder={section?.resume?.placeholder}
                      disabled
                    />
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {section?.concent && (
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" required />
                    {section.concent.length > 0 && (
                      <BlocksRenderer
                        content={section.concent}
                        blocks={{
                          paragraph: ({ children }) => (
                            <p className="text-[14px] text-[#000000]">
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
                <button
                  type="submit"
                  className="primary-btn w-fit flip-animate-2"
                >
                  <span data-hover={section?.submit}>{section?.submit}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Accordion2({ section, Background }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={cn(
        "py-6 md:py-10 2xl:py-[60px] overflow-hidden",
        Background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
        <div>
          <span className="section-heading">{section.heading}</span>
          <div className="section-title-wrapper">
            <h3 className="section-title">{section.title}</h3>
          </div>
        </div>
        {section?.preAccordion && (
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            {section.preAccordion}
          </p>
        )}
        <div class="flex flex-col md:flex-row gap-4 md:gap-10">
          {section?.images && section.images.length > 0 && (
            <>
              {section.images.length > 1 ? (
                <div class="w-full md:w-[40%] h-fit md:sticky top-[90px] grid grid-cols-2 gap-4 md:gap-6">
                  {section.images.map((image, index) => (
                    <Image
                      key={index.id}
                      className={cn(
                        "w-full h-[240px] 2xl:h-[265px] rounded-[12px]",
                        index == 0 && "col-span-2"
                      )}
                      src={image.url}
                      alt={image.alt}
                    />
                  ))}
                </div>
              ) : (
                <div class="w-full md:w-[40%] h-fit md:sticky top-[90px]">
                  <figure
                    className="w-full h-[350px] md:h-[450px] 2xl:h-[600px] mb-0"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    <Image
                      className="w-full h-full object-cover rounded-[12px]"
                      src={section.images[0].url}
                      alt={section.images[0].alt}
                    />
                  </figure>
                </div>
              )}
            </>
          )}
          {section?.accordion && (
            <div
              class="accordion-list-sec w-full md:w-[60%] h-[350px] md:h-[450px] 2xl:h-[600px] overflow-y-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {section.accordion.map(
                (accordion, index) =>
                  accordion?.title &&
                  accordion?.description && (
                    <div key={index.id} className="collapse collapse-plus">
                      {index == 0 ? (
                        <input
                          type="radio"
                          name="my-accordion-3"
                          defaultChecked
                        />
                      ) : (
                        <input type="radio" name="my-accordion-3" />
                      )}
                      <div className="collapse-title">{accordion.title}</div>
                      <div className="collapse-content">
                        <p>{accordion.description}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}
        </div>
        {section?.postAccordion && (
          <p className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6]">
            {section.postAccordion}
          </p>
        )}
      </div>
    </section>
  );
}

export function TigerMark({ section, Background }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={cn(
        "pt-8 md:pt-12 2xl:pt-[60px] overflow-hidden",
        Background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-start flex-col md:flex-row gap-4 md:gap-8 2xl:gap-[60px]">
          <div
            className="box-title-sec w-full md:w-[45%] relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image
              src={section.images[0].url}
              alt={section.images[0].alt}
              className="absolute left-0 top-0"
            />
            <span className="section-heading">{section.heading}</span>
            <div className="section-title-wrapper">
              <h3 className="section-title">{section.title}</h3>
            </div>
          </div>
          {section?.tigerMarkDetail && section.tigerMarkDetail.length > 0 && (
            <div className="box-content-sec w-full md:w-[60%] relative">
              {section.tigerMarkDetail.map((detail, index) => (
                <p data-aos="fade-left" data-aos-duration="1000" key={index}>
                  {detail.description}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CommonSec({ section, Background, right }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden mb-8 md:mb-12 2xl:mb-[60px]">
      <div className="container mx-auto flex flex-col gap-5 md:gap-6 2xl:gap-10">
        <div
          className={cn(
            "section-layer",
            right ? "md:flex-row-reverse" : "md:flex-row "
          )}
        >
          <figure
            className="w-full md:w-[45%] h-[350px] md:h-[480px] relative glare"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <Image
              className={cn(
                "absolute -z-1 w-[90%] h-[90%]",
                right ? "right-0" : "left-0"
              )}
              src={right ? Triangle2 : Triangle1}
              alt="img"
            />

            <Image
              className={cn(
                "absolute top-4 md:top-8 w-[90%] h-[90%] rounded-[12px]",
                right ? "right-4 md:right-8" : "left-4 md:left-8"
              )}
              src={section.image.url}
              alt={section.image.alt}
            />
          </figure>

          <div className="box-content-sec relative md:w-[55%] flex flex-col">
            <span
              className="section-heading"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              {section.heading}
            </span>
            <div
              className="section-title-wrapper mb-5 md:mb-6 2xl:mb-10"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <h3 className="section-title">{section.title}</h3>
            </div>
            {section.commonSecDetail.map((detail, index) => (
              <p data-aos="fade-left" data-aos-duration="1000" key={index}>
                {detail.description}
              </p>
            ))}

            {section?.button && (
              <Link
                href={section.buttonLink}
                target="_blank"
                className="more-btn"
              >
                {section.button}
              </Link>
            )}
            <div class="line-loader self-end">
              <div class="bar bar1"></div>
              <div class="bar bar2"></div>
              <div class="bar bar3"></div>
            </div>
          </div>
        </div>
        {section?.postCommonSec && (
          <p
            className="text-[#1A1D21] text-[14px] md:text-[17px] leading-[1.6] mb-3 md:mb-10 2xl:mb-[60px]"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            {section.postCommonSec}
          </p>
        )}
      </div>
    </section>
  );
}
