"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GradualSpacing from "@/components/GradualSpacing";
import { cn } from "@/lib/utils";
import { getStrapiMedia } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { PageBanner, PageEnd, Float } from "../pageCommon/pageCommon";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionSelection from "../selection/sectionLayout";
import Product from "@/app/components/product/card";
import Link from "next/link";
import Image from "next/image";
import BGTiger2 from "../../assets/images/tiger-mask2.png";
import load from "@/app/assets/images/load.png";
import pattern from "@/app/assets/images/pattern.png";
import traImage from "@/app/assets/images/tra.png";
import construction from "@/app/assets/images/axle.jpg";
import LastBg from "../../assets/images/footerupper.png";

export default function PageSelection({ page, slugs, pageData, sidebar }) {
  return (
    <>
      {page == "InvestorRelations" && (
        <InvestorRelations
          slugs={slugs}
          pageData={pageData}
          sidebar={sidebar}
        />
      )}
      {page == "ContactUs" && <ContactUs pageData={pageData} />}
      {page == "Pages" && <Pages pageData={pageData} />}
      {page == "segments" && <Segments pageData={pageData} />}
      {page == "products" && <Products pageData={pageData} />}
    </>
  );
}

export function InvestorRelations({ slugs, pageData, sidebar }) {
  return (
    <>
      <PageBanner Title={pageData?.title} Banner={pageData?.hero} />
      <section className="bg-[#F8F8F8] pt-10 md:pt-[60px]">
        <div className="container mx-auto grid grid-cols-12 gap-10">
          {sidebar.length > 0 && (
            <div className="col-span-3 bg-primary border border-primary rounded-xl h-fit text-white font-[17px] leading-[17px] flex flex-col overflow-hidden sticky top-[125px] md:[145px] max-h-[80vh] overflow-y-auto">
              {sidebar.map((tab) =>
                tab.attributes.slug == slugs.at(-1) ? (
                  <span
                    className="px-5 py-[10px] bg-[#FEEFE2] text-primary"
                    key={tab.id}
                  >
                    {tab.attributes.title}
                  </span>
                ) : (
                  <Link
                    href={tab.attributes.permalink}
                    className="px-5 py-[10px]"
                    key={tab.id}
                  >
                    {tab.attributes.title}
                  </Link>
                )
              )}
            </div>
          )}
          {pageData.section && (
            <div
              className={
                "flex flex-col gap-10 " +
                (sidebar.length > 0 ? "col-span-9" : "col-span-12")
              }
            >
              {pageData.section.map((section) => (
                <div
                  className="bg-white border border-[#DEE1E5] rounded-xl p-[60px] flex flex-col gap-10 h-fit w-full"
                  key={section.id}
                >
                  <SectionSelection section={section} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} Background="bg-[#F8F8F8]" />
    </>
  );
}

export function ContactUs({ pageData }) {
  const [activeTab, setActiveTab] = useState("general");
  const { push } = useRouter();
  const [form1Error, setForm1Error] = useState("");
  const [form1Success, setForm1Success] = useState(false);
  const [form2Error, setForm2Error] = useState("");
  const [form2Success, setForm2Success] = useState(false);
  const [formData, setFormData] = useState({
    form1QueryType: "",
    form1Description: "",
    form1FirstName: "",
    form1LastName: "",
    form1ContactNumber: "",
    form1Email: "",
    form2QueryType: "",
    form2Description: "",
    form2FirstName: "",
    form2LastName: "",
    form2ContactNumber: "",
    form2Email: "",
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const form1HandleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      data: {
        queryType: formData.form1QueryType,
        description: formData.form1Description,
        firstName: formData.form1FirstName,
        lastName: formData.form1LastName,
        contactNumber: formData.form1ContactNumber,
        email: formData.form1Email,
      },
    };
    try {
      // partner-inquiries
      const response = await fetch(
        "http://birlatyres.viaconprojects.com:1337/api/general-inquiries",
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
      } else {
        push("/thankyou");
      }
      const data = await response.json();
      setForm1Success(true);
      // console.log('Success:', data);
    } catch (form1Error) {
      // console.error('Error:', error);
      setForm1Error("There was an error submitting the form.");
    }
  };
  const form2HandleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      data: {
        queryType: formData.form2QueryType,
        description: formData.form2Description,
        firstName: formData.form2FirstName,
        lastName: formData.form2LastName,
        contactNumber: formData.form2ContactNumber,
        email: formData.form2Email,
      },
    };
    try {
      const response = await fetch(
        "http://birlatyres.viaconprojects.com:1337/api/partner-inquiries",
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
      } else {
        push("/thankyou");
      }
      const data = await response.json();
      setForm2Success(true);
      // console.log('Success:', data);
    } catch (form2Error) {
      // console.error('Error:', error);
      setForm2Error("There was an error submitting the form.");
    }
  };
  return (
    <>
      {pageData?.section &&
        pageData.section.length > 0 &&
        pageData.section.map(
          (section) =>
            section.__component == "section.contact-form" && (
              <section
                className="top-banner-sec bg-[#F8F8F8] relative"
                key={section.id}
              >
                <Float />
                <div className="container mx-auto">
                  <div className="contact-main flex flex-col md:flex-row items-start gap-4 md:gap-6 2xl:gap-10 mt-8 md:mt-12 2xl:mt-[60px]">
                    <div className="contact-detail w-full md:w-[40%] xl:w-1/2 flex flex-col gap-4 md:gap-6 xl:gap-10 overflow-hidden relative">
                      <Image
                        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                        src={BGTiger2}
                        alt="img"
                      />
                      <div className="contact-title-wrapper">
                        <span className="section-heading">
                          {section?.heading}
                        </span>
                        <div className="section-title-wrapper">
                          <h3 className="section-title">{section?.title}</h3>
                        </div>
                      </div>
                      {section?.data &&
                        section.data.map((details) => (
                          <div className="contact-detail-box" key={details.id}>
                            {details.content.length > 0 &&
                              details?.description && (
                                <h3>{details.description}</h3>
                              )}
                            {details.content.length > 0 && (
                              <BlocksRenderer
                                content={details.content}
                                blocks={{
                                  paragraph: ({ children }) => (
                                    <p>{children}</p>
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
                        ))}
                    </div>
                    <div className="w-full md:w-[60%] xl:w-1/2">
                      <div className="form-content">
                        <div className="form-btn-sec">
                          <button
                            className={`form-btn ${
                              activeTab === "general" ? "form-active-btn" : ""
                            }`}
                            onClick={() => setActiveTab("general")}
                          >
                            {section.form1Name}
                          </button>
                          <button
                            className={`form-btn ${
                              activeTab === "partner" ? "form-active-btn" : ""
                            }`}
                            onClick={() => setActiveTab("partner")}
                          >
                            {section.form2Name}
                          </button>
                        </div>
                        {activeTab === "general" && (
                          <div id="general">
                            <form
                              className="w-full flex flex-col gap-3 md:gap-5"
                              onSubmit={form1HandleSubmit}
                            >
                              <div className="form-row">
                                {section?.form1QueryLabel && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form1QueryType"
                                  >
                                    {section.form1QueryLabel}
                                  </label>
                                )}
                                <select
                                  className="contact-select"
                                  name="form1QueryType"
                                  onChange={handleChange}
                                  required="required"
                                >
                                  {section.form1QueryType.map((option) => (
                                    <option
                                      value={option?.value ? option.value : ""}
                                      key={option.id}
                                    >
                                      {option?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-row">
                                {section?.form1Description?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form1Description"
                                  >
                                    {section.form1Description.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form1Description"
                                  placeholder={
                                    section?.form1Description?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form1FirstName?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form1FirstName"
                                  >
                                    {section.form1FirstName.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form1FirstName"
                                  placeholder={
                                    section?.form1FirstName?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form1LastName?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form1LastName"
                                  >
                                    {section.form1LastName.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form1LastName"
                                  placeholder={
                                    section?.form1LastName?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form1ContactNumber?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form1ContactNumber"
                                  >
                                    {section.form1ContactNumber.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form1ContactNumber"
                                  placeholder={
                                    section?.form1ContactNumber?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form1Email?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form1Email"
                                  >
                                    {section.form1Email.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="email"
                                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                  name="form1Email"
                                  title='"example@email.com"'
                                  placeholder={section?.form1Email?.placeholder}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              {section?.form1Concent && (
                                <div className="flex items-start gap-2">
                                  <input
                                    type="checkbox"
                                    className="mt-1"
                                    required
                                  />
                                  {section.form1Concent.length > 0 && (
                                    <BlocksRenderer
                                      content={section.form1Concent}
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
                                        bold: ({ children }) => (
                                          <strong>{children}</strong>
                                        ),
                                        italic: ({ children }) => (
                                          <span className="italic">
                                            {children}
                                          </span>
                                        ),
                                      }}
                                    />
                                  )}
                                </div>
                              )}
                              {form1Error && (
                                <p className="text-red-500">{form1Error}</p>
                              )}
                              {form1Success && (
                                <p className="text-green-500">
                                  Application submitted successfully!
                                </p>
                              )}
                              <button
                                type="submit"
                                className="primary-btn w-fit flip-animate-2"
                              >
                                <span data-hover={section.form1Submit}>
                                  {section.form1Submit}
                                </span>
                              </button>
                            </form>
                          </div>
                        )}
                        {activeTab === "partner" && (
                          <div id="partner">
                            <form
                              className="w-full flex flex-col gap-3 md:gap-5"
                              onSubmit={form2HandleSubmit}
                            >
                              <div className="form-row">
                                {section?.form2QueryLabel && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form2QueryType"
                                  >
                                    {section.form2QueryLabel}
                                  </label>
                                )}
                                <select
                                  className="contact-select"
                                  name="form2QueryType"
                                  onChange={handleChange}
                                  required="required"
                                >
                                  {section.form2QueryType.map((option) => (
                                    <option
                                      value={option?.value ? option.value : ""}
                                      key={option.id}
                                    >
                                      {option?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-row">
                                {section?.form2Description?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form2Description"
                                  >
                                    {section.form2Description.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form2Description"
                                  placeholder={
                                    section?.form2Description?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form2FirstName?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form2FirstName"
                                  >
                                    {section.form2FirstName.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form2FirstName"
                                  placeholder={
                                    section?.form2FirstName?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form2LastName?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form2LastName"
                                  >
                                    {section.form2LastName.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form2LastName"
                                  placeholder={
                                    section?.form2LastName?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form2ContactNumber?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form2ContactNumber"
                                  >
                                    {section.form2ContactNumber.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="text"
                                  name="form2ContactNumber"
                                  placeholder={
                                    section?.form2ContactNumber?.placeholder
                                  }
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-row">
                                {section?.form2Email?.label && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form2Email"
                                  >
                                    {section.form2Email.label}
                                  </label>
                                )}
                                <input
                                  className="contact-input"
                                  type="email"
                                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                  title='"example@email.com"'
                                  name="form2Email"
                                  placeholder={section?.form2Email?.placeholder}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              {section?.form2Concent && (
                                <div className="flex items-start gap-2">
                                  <input
                                    type="checkbox"
                                    className="mt-1"
                                    required
                                  />
                                  {section.form2Concent.length > 0 && (
                                    <BlocksRenderer
                                      content={section.form2Concent}
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
                                        bold: ({ children }) => (
                                          <strong>{children}</strong>
                                        ),
                                        italic: ({ children }) => (
                                          <span className="italic">
                                            {children}
                                          </span>
                                        ),
                                      }}
                                    />
                                  )}
                                </div>
                              )}
                              {form2Error && (
                                <p className="text-red-500">{form2Error}</p>
                              )}
                              {form2Success && (
                                <p className="text-green-500">
                                  Application submitted successfully!
                                </p>
                              )}
                              <button
                                type="submit"
                                className="primary-btn w-fit flip-animate-2"
                              >
                                <span data-hover={section.form2Submit}>
                                  {section.form2Submit}
                                </span>
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
        )}
      <PageEnd EndPageData={pageData?.end} Background={true} />
    </>
  );
}

export function Pages({ pageData }) {
  return (
    <>
      <PageBanner Title={pageData?.title} Banner={pageData?.hero} />
      {pageData?.section &&
        pageData.section.length > 0 &&
        pageData.section.map((section) => (
          <SectionSelection key={section.id} section={section} />
        ))}
      <PageEnd EndPageData={pageData?.end} />
    </>
  );
}

// export function Segments({ pageData }) {
//   const [filters, setFilterData] = useState([]);
//   const [products, setProductsData] = useState([]);

//   const [value, setValue] = useState([]);
//   const updateItem = (index, newValue) => {
//     setValue(prevData => {
//       const newData = [...prevData];
//       newData[index] = newValue;
//       return newData;
//     });
//   };
//   const [subSegment, setSubSegment] = useState("");
//   const [machinery, setMachinery] = useState("");
//   const [rim, setRim] = useState("");
//   const [size, setSize] = useState("");
//   const [pattern, setPattern] = useState("");

//   const productFilters = (value) => {
//     if(pageData?.filters && pageData.filters.length > 4){
//       setSubSegment(value[0]?"&filters[sub_segment][$eq]="+value[0]:'');
//       setMachinery(value[1]?"&filters[tables][table][row][machinery][name][$eq]="+value[1]:'');
//       setRim(value[2]?"&filters[tables][table][row][rim_recommended][$eq]="+value[2]:'');
//       setSize(value[3]?"&filters[tables][table][row][size][$eq]="+value[3]:'');
//       setPattern(value[4]?"&filters[tables][table][row][pattern_type][$eq]="+value[4]:'');
//     }else{
//       setMachinery(value[0]?"&filters[tables][table][row][machinery][name][$eq]="+value[0]:'');
//       setRim(value[1]?"&filters[tables][table][row][rim_recommended][$eq]="+value[1]:'');
//       setSize(value[2]?"&filters[tables][table][row][size][$eq]="+value[2]:'');
//       setPattern(value[3]?"&filters[tables][table][row][pattern_type][$eq]="+value[3]:'');
//     }
//     console.log(subSegment);
//     fetchData(subSegment,machinery,rim,size,pattern);
//   };


//   const fetchData = async (subSegment,machinery,rim,size,pattern) => {
//     fetch(getStrapiMedia("/api/products?filters[segment][slug][$eq]="+pageData.slug+subSegment+machinery+rim+size+pattern)).then((res) => res.json()).then((products) => {
//       setProductsData(products);
//     });
//   };


//   useEffect(() => {
//     fetch(getStrapiMedia("/api/products?filters[segment][slug]="+pageData.slug)).then((res) => res.json()).then((filters) => {
//       setFilterData(filters);
//     });
//     fetchData(subSegment,machinery,rim,size,pattern);
//   }, [pageData]);


//   const subSegmentOptions = new Set(); const machineryOptions = new Set(); const rimOptions = new Set(); const sizeOptions = new Set(); const patternOptions = new Set();
//   filters.forEach(item => {
//     const rows = item.tables.table[0].row;
//     if (item.sub_segment) {
//       subSegmentOptions.add(item.sub_segment);
//     }
//     rows.forEach(row => {
//       if (row.machinery && row.machinery.name) {
//         machineryOptions.add(row.machinery.name);
//       }
//       if (row.rim_recommended) {
//         rimOptions.add(row.rim_recommended);
//       }
//       if (row.size) {
//         sizeOptions.add(row.size);
//       }
//       if (row.pattern_type) {
//         patternOptions.add(row.pattern_type);
//       }
//     });
//   });
//   const filtersArray = pageData?.filters && pageData.filters.length > 4 ? [Array.from(subSegmentOptions), Array.from(machineryOptions), Array.from(rimOptions), Array.from(sizeOptions), Array.from(patternOptions)] : [Array.from(machineryOptions), Array.from(rimOptions), Array.from(sizeOptions), Array.from(patternOptions)];

//   return (
//     <>
//       <PageBanner Title={pageData.title} Banner={pageData.hero} />
//       <section className="product-sec mt-10 md:mt-[60px] 2xl:mt-[100px]">
//         <div className="container mx-auto overflow-hidden flex flex-col gap-4 md:gap-6 2xl:gap-10">
//           <div className="upper-title-sec flex gap-3 md:gap-0 flex-col md:flex-row justify-between items-end">
//             <div className="self-start">
//               <span className="section-heading">
//                 {pageData.section_heading}
//               </span>
//               <div className="section-title-wrapper">
//                 <GradualSpacing
//                   className="section-title"
//                   text={pageData.section_title}
//                 />
//               </div>
//             </div>
//             {pageData?.catalogue && (
//               <div className="cat-btn-sec flex items-center gap-3 relative z-10">
//                 <Link
//                   href={getStrapiMedia(pageData.catalogue.url)}
//                   className="flex items-center gap-2 text-primary border border-primary rounded-[4px] p-1 text-[16px]"
//                   target="_blank"
//                 >
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M14.875 9.875V14.25C14.875 14.4158 14.8092 14.5747 14.6919 14.6919C14.5747 14.8092 14.4158 14.875 14.25 14.875H1.75C1.58424 14.875 1.42527 14.8092 1.30806 14.6919C1.19085 14.5747 1.125 14.4158 1.125 14.25V9.875M4.71875 6.59461L8 9.875L11.2812 6.59461M8 1.125V9.8727"
//                       stroke="#F5811E"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                   Download Product Catalogue
//                 </Link>
//               </div>
//             )}
//           </div>
//           {pageData?.filters && pageData.filters.length > 0 && (
//             <div className="bg-[#F4F5F6] rounded-xl flex flex-col md:flex-row gap-4 p-6 items-end">
//               {pageData.filters.map((filter, index) => (
//                 <div key={filter.id} className="flex flex-col gap-1 w-full">
//                   <label
//                     className="font-semibold text-[#1A1D21] capitalize"
//                     for={filter.title.replace("Select ", "")}
//                   >
//                     {filter.title}
//                   </label>
//                   {filter?.items && filter.items.length > 0 && (
//                     <select
//                       name={filter.title.replace("Select ", "")}
//                       onChange={(e) => {
//                         updateItem(index, e.target.value)
//                       }}
//                       className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
//                     >
//                       {filter.items.map((item) => (
//                         <option key={item.id} value={item?.value?item.value:''}>
//                           {item?.name}
//                         </option>
//                       ))}
//                       {filtersArray[index].map((item) => (
//                         <option key={item.id} value={item}>
//                           {item}
//                         </option>
//                       ))}
//                     </select>
//                   )}
//                 </div>
//               ))}
//               <button onClick={() => productFilters(value)} className="tablinks cat-btn active-cat-btn items-center gap-1 !w-full max-h-[46px] !h-full !text-[18px] leading-[27.75px]">
//                 <svg
//                   width="21"
//                   height="20"
//                   viewBox="0 0 21 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M9.33216 1.59992C7.95438 1.59992 6.69883 1.93325 5.5655 2.59992C4.43216 3.26658 3.52105 4.1777 2.83216 5.33325C2.14327 6.48881 1.79883 7.74436 1.79883 9.09992C1.79883 10.4555 2.14327 11.711 2.83216 12.8666C3.52105 14.0221 4.43216 14.9333 5.5655 15.5999C6.69883 16.2666 7.95438 16.5999 9.33216 16.5999C10.1766 16.5999 10.9988 16.4555 11.7988 16.1666C12.5988 15.8777 13.3322 15.4888 13.9988 14.9999L17.1322 18.0666C17.2655 18.2444 17.4544 18.3333 17.6988 18.3333C17.9433 18.3333 18.1433 18.2555 18.2988 18.0999C18.4544 17.9444 18.5322 17.7444 18.5322 17.4999C18.5322 17.2555 18.4433 17.0666 18.2655 16.9333L15.1988 13.7999C15.6877 13.1333 16.0766 12.3999 16.3655 11.5999C16.6544 10.7999 16.7988 9.9777 16.7988 9.13325C16.7988 7.75547 16.4655 6.48881 15.7988 5.33325C15.1322 4.1777 14.2211 3.26658 13.0655 2.59992C11.9099 1.93325 10.6655 1.59992 9.33216 1.59992ZM9.33216 3.26658C10.3988 3.26658 11.3766 3.53325 12.2655 4.06658C13.1544 4.59992 13.8544 5.31103 14.3655 6.19992C14.8766 7.08881 15.1322 8.05547 15.1322 9.09992C15.1322 10.1444 14.8766 11.1221 14.3655 12.0333C13.8544 12.9444 13.1544 13.6555 12.2655 14.1666C11.3766 14.6777 10.3988 14.9333 9.33216 14.9333C8.2655 14.9333 7.28772 14.6777 6.39883 14.1666C5.50994 13.6555 4.79883 12.9444 4.26549 12.0333C3.73216 11.1221 3.46549 10.1444 3.46549 9.09992C3.46549 8.05547 3.73216 7.08881 4.26549 6.19992C4.79883 5.31103 5.50994 4.59992 6.39883 4.06658C7.28772 3.53325 8.2655 3.26658 9.33216 3.26658Z"
//                     fill="white"
//                   />
//                 </svg>
//                 Search
//               </button>
//             </div>
//           )}
//           {products.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-[50px]">
//               {products.map((product) => (
//                 <Product key={product.id} data={product} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//       <PageEnd EndPageData={pageData?.end} />
//     </>
//   );
// }

export function Segments({ pageData }) {
  const [value, setValue] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [filterData, setFilterData] = useState([]);
 
  const updateItem = (index, newValue) => {
    setValue(prevData => {
      const newData = [...prevData];
      newData[index] = newValue;
      return newData;
    });
  };
 
  const productFilters = (value) => {
    const filterQueries = [];
    if (pageData?.filters && pageData.filters.length > 4) {
      if (value[0]) filterQueries.push(`filters[sub_segment][$eq]=${value[0]}`);
      if (value[1]) filterQueries.push(`filters[tables][table][row][machinery][name][$eq]=${value[1]}`);
      if (value[2]) filterQueries.push(`filters[tables][table][row][rim_recommended][$eq]=${value[2]}`);
      if (value[3]) filterQueries.push(`filters[tables][table][row][size][$eq]=${value[3]}`);
      if (value[4]) filterQueries.push(`filters[tables][table][row][pattern_type][$eq]=${value[4]}`);
    } else {
      if (value[0]) filterQueries.push(`filters[tables][table][row][machinery][name][$eq]=${value[0]}`);
      if (value[1]) filterQueries.push(`filters[tables][table][row][rim_recommended][$eq]=${value[1]}`);
      if (value[2]) filterQueries.push(`filters[tables][table][row][size][$eq]=${value[2]}`);
      if (value[3]) filterQueries.push(`filters[tables][table][row][pattern_type][$eq]=${value[3]}`);
    }
    const queryString = filterQueries.length > 0 ? '&' + filterQueries.join('&') : '';
    fetchData(queryString);
  };
 
 
  const fetchData = async (query) => {
    try {
      const response = await fetch(getStrapiMedia(`/api/products?filters[segment][slug][$eq]=${pageData.slug}${query}`));
      const products = await response.json();
      setProductsData(products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
 
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch(getStrapiMedia(`/api/products?filters[segment][slug]=${pageData.slug}`));
        const filters = await response.json();
        setFilterData(filters);
        fetchData("");
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
 
    fetchInitialData();
  }, [pageData]);
 
 
  const subSegmentOptions = new Set(); const machineryOptions = new Set(); const rimOptions = new Set(); const sizeOptions = new Set(); const patternOptions = new Set();
  filterData.forEach(item => {
    const rows = item.tables.table[0].row;
    if (item.sub_segment) {
      subSegmentOptions.add(item.sub_segment);
    }
    rows.forEach(row => {
      if (row.machinery && row.machinery.name) {
        machineryOptions.add(row.machinery.name);
      }
      if (row.rim_recommended) {
        rimOptions.add(row.rim_recommended);
      }
      if (row.size) {
        sizeOptions.add(row.size);
      }
      if (row.pattern_type) {
        patternOptions.add(row.pattern_type);
      }
    });
  });
  const filtersArray = pageData?.filters && pageData.filters.length > 4 ? [Array.from(subSegmentOptions), Array.from(machineryOptions), Array.from(rimOptions), Array.from(sizeOptions), Array.from(patternOptions)] : [Array.from(machineryOptions), Array.from(rimOptions), Array.from(sizeOptions), Array.from(patternOptions)];
 
  return (
    <>
      <PageBanner Title={pageData.title} Banner={pageData.hero} />
      <section className="product-sec mt-10 md:mt-[60px] 2xl:mt-[100px]">
        <div className="container mx-auto overflow-hidden flex flex-col gap-4 md:gap-6 2xl:gap-10">
          <div className="upper-title-sec flex gap-3 md:gap-0 flex-col md:flex-row justify-between items-end">
            <div className="self-start">
              <span className="section-heading">
                {pageData.section_heading}
              </span>
              <div className="section-title-wrapper">
                <GradualSpacing
                  className="section-title"
                  text={pageData.section_title}
                />
              </div>
            </div>
            {pageData?.catalogue && (
              <div className="cat-btn-sec flex items-center gap-3 relative z-10">
                <Link
                  href={getStrapiMedia(pageData.catalogue.url)}
                  className="flex items-center gap-2 text-primary border border-primary rounded-[4px] p-1 text-[16px]"
                  target="_blank"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.875 9.875V14.25C14.875 14.4158 14.8092 14.5747 14.6919 14.6919C14.5747 14.8092 14.4158 14.875 14.25 14.875H1.75C1.58424 14.875 1.42527 14.8092 1.30806 14.6919C1.19085 14.5747 1.125 14.4158 1.125 14.25V9.875M4.71875 6.59461L8 9.875L11.2812 6.59461M8 1.125V9.8727"
                      stroke="#F5811E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Download Product Catalogue
                </Link>
              </div>
            )}
          </div>
          {pageData?.filters && pageData.filters.length > 0 && (
            <div className="bg-[#F4F5F6] rounded-xl flex flex-col md:flex-row gap-4 p-6 items-end">
              {pageData.filters.map((filter, index) => (
                <div key={filter.id} className="flex flex-col gap-1 w-full">
                  <label
                    className="font-semibold text-[#1A1D21] capitalize"
                    for={filter.title.replace("Select ", "")}
                  >
                    {filter.title}
                  </label>
                  {filter?.items && filter.items.length > 0 && (
                    <select
                      name={filter.title.replace("Select ", "")}
                      onChange={(e) => {
                        updateItem(index, e.target.value)
                      }}
                      className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
                    >
                      {filter.items.map((item) => (
                        <option key={item.id} value={item?.value?item.value:''}>
                          {item?.name}
                        </option>
                      ))}
                      {filtersArray[index].map((item) => (
                        <option key={item.id} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
              <button onClick={() => productFilters(value)} className="tablinks cat-btn active-cat-btn items-center gap-1 !w-full max-h-[46px] !h-full !text-[18px] leading-[27.75px]">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33216 1.59992C7.95438 1.59992 6.69883 1.93325 5.5655 2.59992C4.43216 3.26658 3.52105 4.1777 2.83216 5.33325C2.14327 6.48881 1.79883 7.74436 1.79883 9.09992C1.79883 10.4555 2.14327 11.711 2.83216 12.8666C3.52105 14.0221 4.43216 14.9333 5.5655 15.5999C6.69883 16.2666 7.95438 16.5999 9.33216 16.5999C10.1766 16.5999 10.9988 16.4555 11.7988 16.1666C12.5988 15.8777 13.3322 15.4888 13.9988 14.9999L17.1322 18.0666C17.2655 18.2444 17.4544 18.3333 17.6988 18.3333C17.9433 18.3333 18.1433 18.2555 18.2988 18.0999C18.4544 17.9444 18.5322 17.7444 18.5322 17.4999C18.5322 17.2555 18.4433 17.0666 18.2655 16.9333L15.1988 13.7999C15.6877 13.1333 16.0766 12.3999 16.3655 11.5999C16.6544 10.7999 16.7988 9.9777 16.7988 9.13325C16.7988 7.75547 16.4655 6.48881 15.7988 5.33325C15.1322 4.1777 14.2211 3.26658 13.0655 2.59992C11.9099 1.93325 10.6655 1.59992 9.33216 1.59992ZM9.33216 3.26658C10.3988 3.26658 11.3766 3.53325 12.2655 4.06658C13.1544 4.59992 13.8544 5.31103 14.3655 6.19992C14.8766 7.08881 15.1322 8.05547 15.1322 9.09992C15.1322 10.1444 14.8766 11.1221 14.3655 12.0333C13.8544 12.9444 13.1544 13.6555 12.2655 14.1666C11.3766 14.6777 10.3988 14.9333 9.33216 14.9333C8.2655 14.9333 7.28772 14.6777 6.39883 14.1666C5.50994 13.6555 4.79883 12.9444 4.26549 12.0333C3.73216 11.1221 3.46549 10.1444 3.46549 9.09992C3.46549 8.05547 3.73216 7.08881 4.26549 6.19992C4.79883 5.31103 5.50994 4.59992 6.39883 4.06658C7.28772 3.53325 8.2655 3.26658 9.33216 3.26658Z"
                    fill="white"
                  />
                </svg>
                Search
              </button>
            </div>
          )}
          {productsData.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-[50px]">
              {productsData.map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} />
    </>
  );
}

export function Products({ pageData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="pt-[100px] 2xl:pt-[140px] bg-[#F8F8F8]">
        <div className="container mx-auto">
          <div className="flex items-center gap-1">
            <Link
              href=""
              className="flex gap-2 items-center text-[#1A1D21] text-[16px] font-medium pr-5"
            >
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0.75L1.25 7L7.5 13.25"
                  stroke="#1A1D21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back
            </Link>
            <Link
              href="/"
              className="text-[14px] text-[#727C8D] hover:text-secondary active:text-secondary"
            >
              Birla Tyres
            </Link>
            <Link
              href={`${pageData?.segment?.permalink}`}
              className="text-[14px] text-[#727C8D] hover:text-secondary active:text-secondary"
            >
              <span className="pr-1">/</span>
              {pageData?.segment?.name}
            </Link>
            <p className="text-[14px] text-secondary">
              <span className="pr-1">/</span>
              {pageData?.name}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 2xl:gap-[60px] mt-6 xl:pb-12 2xl:pb-[60px] border-b border-[#C9CDD3]">
            <div className="productImageWrapper w-full lg:w-[55%] xl:w-[45%]">
              <div className="product-image-sec flex gap-5">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="small-img-sec !mx-0 !hidden md:!block"
                >
                  {pageData?.gallery?.map((gallery, index) => (
                    <SwiperSlide
                      key={gallery.id}
                      className="!w-[80px] !h-[80px] md:!w-[70px] md:!h-[70px] 2xl:!w-[100px] 2xl:!h-[100px] bg-primary rounded-[12px] p-2 !mr-0 cursor-pointer"
                    >
                      <Image
                        width={gallery?.width}
                        height={gallery?.height}
                        src={getStrapiMedia(gallery?.url)}
                        alt={gallery?.alternativeText}
                        className="w-full h-full object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="single-image-slider relative w-full md:w-[80%] h-full bg-[#ffffff] rounded-[12px]">
                  <span
                    className={cn(
                      "bg-primary py-2 px-8 rounded-tr-[12px] text-[#FFFFFF] text-[12px] md:text-[18px] font-bold absolute right-0 top-0", pageData?.premium && "prem-product-tag"
                    )}
                  >
                    {pageData.premium ? "Premium" : "Standard"}
                  </span>
                  <Swiper
                    navigation={true}
                    freeMode={true}
                    speed={500}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Autoplay, Navigation, Thumbs]}
                    className="productDetailSwiper !py-10"
                  >
                    {pageData?.gallery?.map((gallery) => (
                      <SwiperSlide
                        key={gallery.id}
                        className="!flex !justify-center"
                      >
                        <figure className="w-[180px] 2xl:w-[260px] h-[240px] 2xl:h-[380px] pt-3 md:pt-0">
                          <Image
                            width={gallery?.width}
                            height={gallery?.height}
                            src={getStrapiMedia(gallery?.url)}
                            alt={gallery?.alternativeText}
                            className="w-full h-full object-contain"
                          />
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              {pageData?.type && (
                <div className="patter-description flex items-center justify-between md:justify-start md:gap-2 lg:gap-0 lg:justify-between mt-6">
                  {pageData.type?.load && (
                    <div className="pattern-box flex items-center gap-1 md:gap-2 2xl:gap-3 bg-[#FFFFFF] px-2 py-1 md:py-2 md:px-4 rounded-[6px] md:rounded-[12px] border border-primary">
                      <Image
                        className="w-6 h-6 md:w-10 md:h-8 2xl:w-10 2xl:h-10 object-contain"
                        src={load}
                        alt="load-icon"
                      />
                      <div className="flex flex-col">
                        <p className="text-[#1A1D21] text-[12px] xl:text-[16px] font-semibold">
                          Load Type
                        </p>
                        <span className="text-[12px] 2xl:text-[16px] text-[#4F5662]">
                          {pageData.type.load}
                        </span>
                      </div>
                    </div>
                  )}
                  {pageData.type?.tra && (
                    <div className="pattern-box flex items-center gap-1 md:gap-2 2xl:gap-3 bg-[#FFFFFF] px-2 py-1 md:py-2 md:px-4 rounded-[6px] md:rounded-[12px] border border-primary">
                      <Image
                        className="w-6 h-6 md:w-10 md:h-8 2xl:w-10 2xl:h-10 object-contain"
                        src={traImage}
                        alt="load-icon"
                      />
                      <div className="flex flex-col">
                        <p className="text-[#1A1D21] text-[12px] xl:text-[16px] font-semibold">
                          TRA
                        </p>
                        <span className="text-[12px] 2xl:text-[16px] text-[#4F5662]">
                          {pageData.type.tra}
                        </span>
                      </div>
                    </div>
                  )}
                  {pageData.type?.pattern && (
                    <div className="pattern-box flex items-center gap-1 md:gap-2 2xl:gap-3 bg-[#FFFFFF] px-2 py-1 md:py-2 md:px-4 rounded-[6px] md:rounded-[12px] border border-primary">
                      <Image
                        className="w-6 h-6 md:w-10 md:h-8 2xl:w-10 2xl:h-10 object-contain"
                        src={pattern}
                        alt="load-icon"
                      />
                      <div className="flex flex-col">
                        <p className="text-[#1A1D21] text-[12px] xl:text-[16px] font-semibold">
                          Pattern
                        </p>
                        <span className="text-[12px] 2xl:text-[16px] text-[#4F5662]">
                          {pageData.type.pattern}
                        </span>
                      </div>
                    </div>
                  )}
                  {pageData.type?.construction && (
                    <div className="pattern-box flex items-center gap-1 md:gap-2 2xl:gap-3 bg-[#FFFFFF] px-2 py-1 md:py-2 md:px-4 rounded-[6px] md:rounded-[12px] border border-primary">
                      <Image
                        className="w-6 h-6 md:w-10 md:h-8 2xl:w-10 2xl:h-10 object-contain"
                        src={construction}
                        alt="load-icon"
                      />
                      <div className="flex flex-col">
                        <p className="text-[#1A1D21] text-[12px] xl:text-[16px] font-semibold">
                          Construction
                        </p>
                        <span className="text-[12px] 2xl:text-[16px] text-[#4F5662]">
                          {pageData.type.construction}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="product-detail-sec w-ful lg:w-[45%] xl:w-[55%]">
              {pageData?.name && (
                <h2 className="text-secondary text-[28px] md:text-[36px] 2xl:text-[48px] font-bold leading-[1] flex gap-3 items-center tracking-[-0.5px]">{pageData.name}</h2>
              )}
              {pageData?.description && (
                <p className="text-[#1A202C] text-[16px] pt-2 font-semibold">
                  {pageData.description}
                </p>
              )}
              {pageData?.details?.map((details) => (
                <>
                  {details.description && (
                    <p className="pt-2 md:pt-4 2xl:pt-6 text-[#3D434C] text-[22px] md:text-[28px] font-medium border-t border-[#DEE1E5]">
                      {details.description}
                    </p>
                  )}
                  {details?.content &&
                    <BlocksRenderer
                      content={details.content}
                      blocks={{
                        paragraph: ({ children }) => (
                          <p className="text-[#4F5662] text-[14px] md:text-[15px] 2xl:text-[16px] pb-4 md:pb-6">
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
                            <ul className="list-disc mt-4 pl-6 pb-4 md:pb-6">
                              {props.children}
                            </ul>
                          );
                        },
                        "list-item": (props) => (
                          <li className="text-[14px] md:text-[15px] 2xl:text-[16px] mt-1 text-[#3D434C]">
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
                  }
                </>
              ))}
            </div>
          </div>
          {pageData?.tables && (
            <div className="table-sec pt-8 md:pt-12 2xl:pt-[60px]">
              <div className="flex justify-between">
                <div className="flex items-center gap-4 2xl:gap-8">
                  {pageData.tables?.title && (
                    <h2 className="text-[#1A202C] text-[16px] xl:text-[24px] 2xl:text-[32px] font-medium">
                      {pageData.tables.title}
                    </h2>
                  )}
                  <div className="cat-btn-sec flex items-center gap-3 relative z-10">
                    <Link
                      href=""
                      className="flex items-center gap-2 text-primary border border-primary rounded-[4px] p-1 text-[10px] md:text-[16px]"
                      target="_blank"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.875 9.875V14.25C14.875 14.4158 14.8092 14.5747 14.6919 14.6919C14.5747 14.8092 14.4158 14.875 14.25 14.875H1.75C1.58424 14.875 1.42527 14.8092 1.30806 14.6919C1.19085 14.5747 1.125 14.4158 1.125 14.25V9.875M4.71875 6.59461L8 9.875L11.2812 6.59461M8 1.125V9.8727"
                          stroke="#F5811E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Download Product Leaflet
                    </Link>
                  </div>
                </div>
                {pageData.tables?.table && pageData.tables.table.length > 1 && (
                  <div className="country-selection">
                    <p className="text-[16px] text-[#1A1D21] mb-3 font-medium">
                      Select Standard
                    </p>
                    <div className="flex items-center gap-3 2xl:gap-5">
                      {pageData.tables.table.map(
                        (table) =>
                          table?.standard && (
                            <>
                              <input
                                key={table.id}
                                type="radio"
                                id={table.standard}
                                name="standard"
                              />
                              <label
                                key={table.id}
                                for={table.standard}
                                className="uppercase text-[14px] font-medium text-secondary"
                              >
                                {table.standard}
                              </label>
                            </>
                          )
                      )}
                    </div>
                  </div>
                )}
              </div>
              {pageData.tables?.table &&
                pageData.tables.table.length > 0 &&
                pageData.tables.table.map(
                  (table) =>
                    table?.row &&
                    table.row.length > 0 && (
                      <div
                        className="product-detail-table w-full overflow-x-auto mt-3"
                        key={table.id}
                      >
                        <table>
                          <thead>
                            {table.row[0]?.size && <th>Size</th>}
                            {table.row[0]?.type && <th>Type (TT / TL)</th>}
                            {table.row[0]?.ply_rating && <th>Ply Rating</th>}
                            {table.row[0]?.machinery && <th>Machinery</th>}
                            {table.row[0]?.applications && (
                              <th>Applications</th>
                            )}
                            {table.row[0]?.construction_type && (
                              <th> Construction Type</th>
                            )}
                            {table.row[0]?.pattern_type && (
                              <th> Pattern Type</th>
                            )}
                            {table.row[0]?.tra_code && <th>TRA Code</th>}
                            {table.row[0]?.load_type && <th> Load Type</th>}
                            {table.row[0]?.rim_recommended && (
                              <th>Rim Recommended</th>
                            )}
                            {table.row[0]?.specified_rim_diameter && (
                              <th>Specified Rim Diameter (mm)</th>
                            )}
                            {table.row[0]?.sectional_width && (
                              <th>Sectional Width (mm)</th>
                            )}
                            {table.row[0]?.overall_diameter && (
                              <th>Overall Diameter (mm)</th>
                            )}
                            {table.row[0]?.tube_value_code && (
                              <th>Tube Valve Code</th>
                            )}
                            {table.row[0]?.rolling_circumfrence && (
                              <th>Rolling Circumference (mm)</th>
                            )}
                            {table.row[0]?.static_loaded_radius && (
                              <th>Static Loaded Radius (mm)</th>
                            )}
                            {table.row[0]?.speed_radius_index && (
                              <th>Speed Radius Index (mm)</th>
                            )}
                            {table.row[0]?.load_index && <th>Load Index</th>}
                            {table.row[0]?.speed_symbol && (
                              <th>Speed Symbol</th>
                            )}
                            {table.row[0]?.load_range && (
                              <th> Load range (kg)</th>
                            )}
                            {table.row[0]?.inflation_pressure && (
                              <th> Inflation Pressure (psi)</th>
                            )}
                          </thead>
                          <tbody>
                            {table.row.map((rowData) => (
                              <tr key={rowData.id}>
                                {rowData?.size && <td>{rowData.size}</td>}
                                {rowData?.type && <td>{rowData.type}</td>}
                                {rowData?.ply_rating && (
                                  <td>{rowData.ply_rating}</td>
                                )}
                                {rowData?.machinery && (
                                  <td>{rowData.machinery.name}</td>
                                )}
                                {rowData?.applications && (
                                  <td>{rowData.applications}</td>
                                )}
                                {rowData?.construction_type && (
                                  <td>{rowData.construction_type}</td>
                                )}
                                {rowData?.pattern_type && (
                                  <td>{rowData.pattern_type}</td>
                                )}
                                {rowData?.tra_code && (
                                  <td>{rowData.tra_code}</td>
                                )}
                                {rowData?.load_type && (
                                  <td>{rowData.load_type}</td>
                                )}

                                {rowData?.rim_recommended && (
                                  <td>{rowData.rim_recommended}</td>
                                )}
                                {rowData?.specified_rim_diameter && (
                                  <td>{rowData.specified_rim_diameter}</td>
                                )}
                                {rowData?.sectional_width && (
                                  <td>{rowData.sectional_width}</td>
                                )}
                                {rowData?.overall_diameter && (
                                  <td>{rowData.overall_diameter}</td>
                                )}
                                {rowData?.tube_value_code && (
                                  <td>{rowData.tube_value_code}</td>
                                )}
                                {rowData?.rolling_circumfrence && (
                                  <td>{rowData.rolling_circumfrence}</td>
                                )}
                                {rowData?.static_loaded_radius && (
                                  <td>{rowData.static_loaded_radius}</td>
                                )}
                                {rowData?.speed_radius_index && (
                                  <td>{rowData.speed_radius_index}</td>
                                )}
                                {rowData?.load_index && (
                                  <td>{rowData.load_index}</td>
                                )}
                                {rowData?.speed_symbol && (
                                  <td>{rowData.speed_symbol}</td>
                                )}
                                {rowData?.load_range && (
                                  <td>{rowData.load_range}</td>
                                )}
                                {rowData?.inflation_pressure && (
                                  <td>{rowData.inflation_pressure}</td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                )}
            </div>
          )}
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={LastBg} />
    </>
  );
}
