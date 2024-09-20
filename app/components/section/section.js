"use client";

import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Triangle1 from "../../assets/images/triangle1.png";
import Triangle2 from "../../assets/images/triangle2.png";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

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
      {section.__component == "section.accordion" && (
        <Accordion section={section} Background={Background} />
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

export function Accordion({ section, Background }) {
  return (
    // bg-[#F8F8F8] py-8 md:py-12 2xl:py-[60px] overflow-hidden
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
                      id={index.id}
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
                    <div id={index.id} className="collapse collapse-plus">
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
  return (
    <section className="mt-8 md:mt-12 2xl:mt-[60px] overflow-hidden mb-8 md:mb-12 2xl:mb-[60px]">
      <div className="container mx-auto">
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
