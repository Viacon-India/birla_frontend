"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Country, State, City } from "country-state-city";
import "react-phone-number-input/style.css";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import { CollectionTypeSeo } from "@/app/components/pageCommon/pageCommon";
import $ from "jquery";
import ReactPaginate from "react-paginate";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import GradualSpacing from "@/components/GradualSpacing";
import { cn } from "@/lib/utils";
import { getStrapiMedia } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
  PageBanner,
  PageEnd,
  Float,
  InnerBanner,
} from "../pageCommon/pageCommon";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Autoplay,
  Navigation,
  Thumbs,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionSelection from "../selection/sectionLayout";
import Product from "@/app/components/product/card";
import Link from "next/link";
import Image from "next/image";
import BGTiger2 from "../../assets/images/tiger-mask2.png";
import load from "@/app/assets/images/load-rated.png";
import pattern from "@/app/assets/images/pattern.png";
import traImage from "@/app/assets/images/tra.png";
import construction from "@/app/assets/images/axle.png";
import LastBg from "../../assets/images/footerupper.png";
import errorImg from "../../assets/images/404-tyre.gif";
import loadGif from "../../assets/images/loading.gif";
import greenImg from "../../assets/images/green.png"
import Triangle1 from "@/app/assets/images/triangle1.png";

import { useRef } from "react";

export default function PageSelection({
  page,
  slugs,
  pageData,
  sidebar,
  pagination,
}) {
  return (
    <>
      {page == "InvestorRelations" && (
        <InvestorRelations
          slugs={slugs}
          pageData={pageData}
          sidebar={sidebar}
        />
      )}
      {page == "contact-us" && <ContactUs pageData={pageData} />}
      {page == "pages" && <Pages pageData={pageData} />}
      {page == "segments" && (
        <Suspense
          fallback={
            <div>
              <Image
                className="w-[40px] h-[40px]"
                src={loadGif}
                alt="loadigif"
              />
            </div>
          }
        >
          <Segments pageData={pageData} pagination={pagination} />
        </Suspense>
      )}
      {page == "products" && <Products pageData={pageData} />}
      {page == "error404" && <Error404 />}
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
  const [formLoading, setLoading] = useState(false);
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
    form1Country: "",
    form1State: "",
    form1City: "",
    form2QueryType: "",
    form2Description: "",
    form2FirstName: "",
    form2LastName: "",
    form2ContactNumber: "",
    form2Email: "",
    form2Country: "",
    form2State: "",
    form2City: "",
  });

  // country state city
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [value, setValue] = useState();

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry)
    : [];
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry, selectedState)
    : [];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleForm1PhoneChange = (value) => {
    setSelectedCountry(parsePhoneNumber(value + "000")?.country);
    setFormData({
      ...formData,
      ["form1ContactNumber"]: value,
    });
  };
  const handleForm2PhoneChange = (value) => {
    setSelectedCountry(parsePhoneNumber(value + "000")?.country);
    setFormData({
      ...formData,
      ["form2ContactNumber"]: value,
    });
  };
  const form1HandleSubmit = async (e) => {
    setForm1Error("");
    setLoading(true);
    e.preventDefault();
    if (
      !formData.form1ContactNumber ||
      !/^\+?\d{1,4}[\s\-\(\)]?\(?[\d\(\)\-\s\+]{6,20}$/g.test(
        formData.form1ContactNumber
      )
    ) {
      setLoading(false);
      setForm1Error("Please enter a valid phone number.");
      return;
    }
    const dataToSend = {
      data: {
        queryType: formData.form1QueryType,
        description: formData.form1Description,
        firstName: formData.form1FirstName,
        lastName: formData.form1LastName,
        contactNumber: formData.form1ContactNumber,
        email: formData.form1Email,
        country: Country.getCountryByCode(selectedCountry).name,
        state: State.getStateByCodeAndCountry(selectedState, selectedCountry)
          .name,
        city: selectedCity,
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
      setLoading(false);
    } catch (form1Error) {
      setLoading(false);
      setForm1Error("There was an error submitting the form.");
    }
  };
  const form2HandleSubmit = async (e) => {
    setForm1Error("");
    setLoading(true);
    e.preventDefault();
    if (
      !formData.form2ContactNumber ||
      !/^\+?\d{1,4}[\s\-\(\)]?\(?[\d\(\)\-\s\+]{6,20}$/g.test(
        formData.form2ContactNumber
      )
    ) {
      setLoading(false);
      setForm1Error("Please enter a valid phone number.");
      return;
    }
    const dataToSend = {
      data: {
        queryType: formData.form2QueryType,
        description: formData.form2Description,
        firstName: formData.form2FirstName,
        lastName: formData.form2LastName,
        contactNumber: formData.form2ContactNumber,
        email: formData.form2Email,
        country: Country.getCountryByCode(selectedCountry).name,
        state: State.getStateByCodeAndCountry(selectedState, selectedCountry)
          .name,
        city: selectedCity,
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
      setLoading(false);
    } catch (form2Error) {
      setLoading(false);
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
                className="top-banner-sec xl:bg-[#F8F8F8] relative"
                key={section.id}
              >
                <div className="container mx-auto">
                  <div className="contact-main flex flex-col md:flex-row items-start gap-4 md:gap-6 2xl:gap-10 mt-8 md:mt-12 2xl:mt-[60px]">
                    <div className="contact-detail w-full md:w-[40%] xl:w-1/2 flex flex-col gap-4 md:gap-6 xl:gap-10 overflow-hidden relative">
                      {/* <Image
                        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                        src={BGTiger2}
                        alt="img"
                      /> */}
                      <div className="contact-title-wrapper">
                        <span className="section-heading">
                          {section?.heading}
                        </span>
                        <div className="section-title-wrapper">
                          <h3 className="section-title">{section?.title}</h3>
                        </div>
                      </div>
                      {section?.data &&
                        section.data.map((details, index) => (
                          <div className="contact-detail-box" key={details.id}>
                            {details.content.length > 0 &&
                              details?.description && (
                                <div>
                                  <h3 className="!text-secondary">
                                    {details.description}
                                  </h3>
                                  <Image className={`w-[260px] mb-1 ${index === 0 || index === 1 ? 'hidden' : ''}`} src={greenImg} alt="" />
                                </div>
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
                                        return <p>{children}</p>;
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
                        {section?.description && (
                          <h2 className="text-[#1A1D21] text-[20px] text-center font-semibold pb-4">
                            {section.description}
                          </h2>
                        )}
                        <div className="form-btn-sec">
                          <button
                            className={`form-btn ${
                              activeTab === "general" ? "form-active-btn" : ""
                            }`}
                            onClick={() => {
                              setActiveTab("general");
                              setSelectedCountry("IN");
                              setSelectedState("");
                              setSelectedCity("");
                            }}
                          >
                            {section.form1Name}
                          </button>
                          <button
                            className={`form-btn ${
                              activeTab === "partner" ? "form-active-btn" : ""
                            }`}
                            onClick={() => {
                              setActiveTab("partner");
                              setSelectedCountry("IN");
                              setSelectedState("");
                              setSelectedCity("");
                            }}
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
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
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
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
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
                              <div className="flex flex-col lg:flex-row gap-4">
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form1FirstName?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form1FirstName"
                                      >
                                        {section.form1FirstName.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
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
                                </div>
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form1LastName?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form1LastName"
                                      >
                                        {section.form1LastName.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
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
                                </div>
                              </div>
                              <div className="flex flex-col lg:flex-row gap-4">
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form1ContactNumber?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form1ContactNumber"
                                      >
                                        {section.form1ContactNumber.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
                                      </label>
                                    )}
                                    <PhoneInput
                                      className="contact-input pl-[10px]"
                                      international
                                      defaultCountry={selectedCountry}
                                      value={value}
                                      name="form1ContactNumber"
                                      placeholder={
                                        section?.form1ContactNumber?.placeholder
                                      }
                                      onChange={handleForm1PhoneChange}
                                      maxlength="18"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form1Email?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form1Email"
                                      >
                                        {section.form1Email.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
                                      </label>
                                    )}
                                    <input
                                      className="contact-input"
                                      type="email"
                                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                      name="form1Email"
                                      title='"example@email.com"'
                                      placeholder={
                                        section?.form1Email?.placeholder
                                      }
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col lg:flex-row gap-4 lg:w-[97%] 2xl:w-full">
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form1Country && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form1Country"
                                      >
                                        {section.form1Country.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
                                      </label>
                                    )}
                                    <select
                                      className="contact-select"
                                      name="form1Country"
                                      value={selectedCountry}
                                      onChange={(e) => {
                                        setSelectedCountry(e.target.value);
                                        setSelectedState("");
                                        setSelectedCity("");
                                      }}
                                    >
                                      <option value="">Select Country</option>
                                      {countries.map((country) => (
                                        <option
                                          key={country.isoCode}
                                          value={country.isoCode}
                                        >
                                          {country.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form1State && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form1State"
                                      >
                                        {section.form1State.label}
                                      </label>
                                    )}
                                    <select
                                      className="contact-select"
                                      value={selectedState}
                                      onChange={(e) => {
                                        setSelectedState(e.target.value);
                                        setSelectedCity("");
                                      }}
                                      name="form1State"
                                      disabled={!selectedCountry}
                                    >
                                      <option value="">Select State</option>
                                      {states.map((state) => (
                                        <option
                                          key={state.isoCode}
                                          value={state.isoCode}
                                        >
                                          {state.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-row">
                                {section?.form1City && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form1City"
                                  >
                                    {section.form1City.label}
                                  </label>
                                )}
                                <select
                                  className="contact-select"
                                  value={selectedCity}
                                  onChange={(e) =>
                                    setSelectedCity(e.target.value)
                                  }
                                  name="form1City"
                                  disabled={!selectedState}
                                >
                                  <option value="">Select City</option>
                                  {cities.map((city) => (
                                    <option key={city.id} value={city.name}>
                                      {city.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              {section?.form1Concent && (
                                <div className="flex items-start gap-2">
                                  <input
                                    style={{ "color-scheme": "none" }}
                                    type="checkbox"
                                    className="mt-1 min-w-[16px]"
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
                              <div className="flex gap-2 xl:gap-4 items-center">
                                <button
                                  type="submit"
                                  className="primary-btn w-fit flip-animate-2"
                                >
                                  <span data-hover={section.form1Submit}>
                                    {section.form1Submit}
                                  </span>
                                </button>
                                {formLoading && (
                                  <>
                                    {/* <p>Loading...</p> */}
                                    <Image
                                      className="w-[40px] h-[40px]"
                                      src={loadGif}
                                      alt="loadigif"
                                    />
                                  </>
                                )}
                              </div>
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
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
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
                                    <span className="text-red-600 pl-[2px]">
                                      *
                                    </span>
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
                              <div className="flex flex-col lg:flex-row gap-4">
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form2FirstName?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form2FirstName"
                                      >
                                        {section.form2FirstName.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
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
                                </div>
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form2LastName?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form2LastName"
                                      >
                                        {section.form2LastName.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
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
                                </div>
                              </div>
                              <div className="flex flex-col lg:flex-row gap-4">
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form2ContactNumber?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form2ContactNumber"
                                      >
                                        {section.form2ContactNumber.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
                                      </label>
                                    )}
                                    <PhoneInput
                                      className="contact-input pl-[10px]"
                                      international
                                      defaultCountry={selectedCountry}
                                      value={value}
                                      name="form2ContactNumber"
                                      placeholder={
                                        section?.form2ContactNumber?.placeholder
                                      }
                                      onChange={handleForm2PhoneChange}
                                      maxlength="18"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form2Email?.label && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form2Email"
                                      >
                                        {section.form2Email.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
                                      </label>
                                    )}
                                    <input
                                      className="contact-input"
                                      type="email"
                                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                      title='"example@email.com"'
                                      name="form2Email"
                                      placeholder={
                                        section?.form2Email?.placeholder
                                      }
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col lg:flex-row gap-4 lg:w-[97%] 2xl:w-full">
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form2Country && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form2Country"
                                      >
                                        {section.form2Country.label}
                                        <span className="text-red-600 pl-[2px]">
                                          *
                                        </span>
                                      </label>
                                    )}
                                    <select
                                      className="contact-select"
                                      name="form2Country"
                                      value={selectedCountry}
                                      onChange={(e) => {
                                        setSelectedCountry(e.target.value);
                                        setSelectedState("");
                                        setSelectedCity("");
                                      }}
                                    >
                                      <option value="">Select Country</option>
                                      {countries.map((country) => (
                                        <option
                                          key={country.isoCode}
                                          value={country.isoCode}
                                        >
                                          {country.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                                <div className="form-row-wrapper">
                                  <div className="form-row">
                                    {section?.form2State && (
                                      <label
                                        className="contact-label"
                                        htmlFor="form2State"
                                      >
                                        {section.form2State.label}
                                      </label>
                                    )}
                                    <select
                                      className="contact-select"
                                      value={selectedState}
                                      onChange={(e) => {
                                        setSelectedState(e.target.value);
                                        setSelectedCity("");
                                      }}
                                      name="form2State"
                                      disabled={!selectedCountry}
                                    >
                                      <option value="">Select State</option>
                                      {states.map((state) => (
                                        <option
                                          key={state.isoCode}
                                          value={state.isoCode}
                                        >
                                          {state.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="form-row">
                                {section?.form2City && (
                                  <label
                                    className="contact-label"
                                    htmlFor="form2City"
                                  >
                                    {section.form2City.label}
                                  </label>
                                )}
                                <select
                                  className="contact-select"
                                  value={selectedCity}
                                  onChange={(e) =>
                                    setSelectedCity(e.target.value)
                                  }
                                  name="form2City"
                                  disabled={!selectedState}
                                >
                                  <option value="">Select City</option>
                                  {cities.map((city) => (
                                    <option key={city.id} value={city.name}>
                                      {city.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              {section?.form2Concent && (
                                <div className="flex items-start gap-2">
                                  <input
                                    style={{ "color-scheme": "none" }}
                                    type="checkbox"
                                    className="mt-1 min-w-[16px]"
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
                              <div className="flex gap-2 xl:gap-4 items-center">
                                <button
                                  type="submit"
                                  className="primary-btn w-fit flip-animate-2"
                                >
                                  <span data-hover={section.form2Submit}>
                                    {section.form2Submit}
                                  </span>
                                </button>
                                {formLoading && (
                                  <>
                                    {/* <p>Loading...</p> */}
                                    <Image
                                      className="w-[40px] h-[40px]"
                                      src={loadGif}
                                      alt="loadigif"
                                    />
                                  </>
                                )}
                              </div>
                            </form>
                          </div>
                        )}
                      </div>
                      <div className="w-full flex justify-end mt-6">
                        {(section?.logo1 || section.logo1) && (
                          <div className="navbar-end w-fit gap-2 md:gap-3 group flex justify-end items-center py-1 md:py-0">
                            {section?.logo1?.image?.url &&
                              section.logo1?.icon_link?.link && (
                                <Link
                                  href={section.logo1.icon_link.link}
                                  target="_blank"
                                >
                                  <figure className="rounded-none m-0 w-[50px] h-[50px] md:w-[65px] md:h-[65px]">
                                    <Image
                                      src={getStrapiMedia(
                                        section.logo1.image.url
                                      )}
                                      width={section.logo1.image.width}
                                      height={section.logo1.image.height}
                                      alt={section.logo1.image?.alternativeText}
                                      className="w-full h-fit object-cover pt-2"
                                    />
                                  </figure>
                                </Link>
                              )}
                            {section?.logo1 && section.logo1 && (
                              <svg
                                width="2"
                                height="65"
                                viewBox="0 0 2 65"
                                fill="none"
                                xmlns="
                                http://www.w3.org/2000/svg"
                              >
                                <line
                                  x1="1.31543"
                                  y1="65"
                                  x2="1.31543"
                                  stroke="#000000"
                                  stroke-dasharray="5 6"
                                />
                              </svg>
                            )}
                            {section?.logo2?.image?.url &&
                              section.logo2?.icon_link?.link && (
                                <Link
                                  href={section.logo2.icon_link.link}
                                  target="_blank"
                                >
                                  <figure className="rounded-none m-0 w-[80px] h-[35px] md:w-[136px] md:h-[60px]">
                                    <Image
                                      src={getStrapiMedia(
                                        section.logo2.image.url
                                      )}
                                      width={section.logo2.image.width}
                                      height={section.logo2.image.height}
                                      alt={section.logo2.image?.alternativeText}
                                      className="w-full h-full object-cover"
                                    />
                                  </figure>
                                </Link>
                              )}
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
  let managementPersonnelList = [];
  pageData?.section.map((section) => {
    if (section?.IsKeyManagementPersonnel) {
      managementPersonnelList.push(section);
    }
  });

  return (
    <>
      {pageData?.hero && (
        <PageBanner Title={pageData?.title} Banner={pageData?.hero} />
      )}
      {pageData?.section && pageData.section.length > 0 && (
        <div className={!pageData?.hero && "pt-[76px]"}>
          {pageData.section.map((section) => (
            <SectionSelection key={section.id} section={section} />
          ))}
        </div>
      )}

    <section className="overflow-hidden xl:bg-[#F8F8F8] pt-10 2xl:pt-12">
      <div className="container mx-auto">
        <h2 data-aos="fade-left" data-aos-duration="1000" className="section-title">Key Management Personnel</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 2xl:gap-10 mt-6">
          {managementPersonnelList.map((section) => {
            return (
              <div className="sub-leader-card">
                <figure
                  className="w-full h-[300px] lg:h-[235px] 2xl:h-[260px] relative glare"
                  data-aos="flip-right"
                  data-aos-duration="1500"
                >
                  <Image
                    className="absolute -z-1 w-[90%] h-[90%] left-0"
                    src={Triangle1}
                    alt="triangle"
                  />
                  <Image
                    className="absolute top-4 w-[90%] h-[90%] rounded-[8px] left-4"
                    width={section?.image.width}
                    height={section?.image.height}
                    src={getStrapiMedia(section?.image.url)}
                    alt={section?.image.alternativeText}
                  />
                </figure>
                <h2
                  className="text-[20px] text-secondary font-medium"
                  data-aos="fade-left"
                  data-aos-duration="200"
                >
                  {section?.name}
                </h2>
                <h3
                  className="text-primary font-medium text-[16px]"
                  data-aos="fade-left"
                  data-aos-duration="400"
                >
                  {section?.designation}
                </h3>
              </div>
            );
          })}


        </div>
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} />
    </>
  );
}

let filterTitle = "";
let filterValue = "";
const Segments = ({ pageData, pagination }) => {
  const { push } = useRouter();
  const searchParams = new URLSearchParams(useSearchParams());
  const pathname = usePathname();
  const [value, setValue] = useState([]);
  const [filtersArray, setFiltersArray] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [selectURLParameter, setSelectURLParameter] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const pageSize = 9;
  const currentPage = pagination;
  const [meta, setProductsMeta] = useState({});
  const [selectedFilters, setSelectedFilters] = useState(new Map());

  const subSegmentOptions = new Set();
  const machineryOptions = new Set();
  const rimOptions = new Set();
  const sizeOptions = new Set();
  const patternOptions = new Set();
  
  const isSubSegment = pageData?.filters && pageData.filters.length > 4;

  const fetchData = async (query) => {
    try {
      const response = await fetch(
        getStrapiMedia(
          `/api/products?pagination[pageSize]=${pageSize}&pagination[page]=${currentPage}&sort[0]=premium:desc&sort[1]=id:asc&filters[segment][slug][$eq]=${pageData.slug}${query}`
        )
      );
      const products = await response.json();
      setProductsData(products.data);
      setProductsMeta(products.meta);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch(
          getStrapiMedia(
            `/api/products?filters[segment][slug]=${pageData.slug}`
          )
        );
        const filters = await response.json();
        setFilterData(filters.data);
        const checkURLParameter = [];
        if (searchParams.toString()) {
          if (
            pageData.data?.attributes.categories.data[activeTabIndex].attributes
              .filters.length > 4
          ) {
            if (searchParams.has("sub_segment"))
              checkURLParameter[0] = searchParams
                .get("sub_segment")
                .replace("+", " ")
                .replace("%2F", "/");
            if (searchParams.has("machinery"))
              checkURLParameter[1] = searchParams
                .get("machinery")
                .replace("+", " ")
                .replace("%2F", "/");
            if (searchParams.has("rim_recommended"))
              checkURLParameter[2] = searchParams
                .get("rim_recommended")
                .replace("+", " ")
                .replace("%2F", "/");
            if (searchParams.has("size"))
              checkURLParameter[3] = searchParams
                .get("size")
                .replace("+", " ")
                .replace("%2F", "/");
            if (searchParams.has("pattern_type"))
              checkURLParameter[4] = searchParams
                .get("pattern_type")
                .replace("+", " ")
                .replace("%2F", "/");
          } else {
            if (searchParams.has("machinery"))
              checkURLParameter[0] = searchParams
                .get("machinery")
                .replace("+", " ")
                .replace("%2F", "/");
            if (searchParams.has("rim_recommended"))
              checkURLParameter[1] = searchParams
                .get("rim_recommended")
                .replace("+", " ")
                .replace("%2F", "/");
            if (searchParams.has("size"))
              checkURLParameter[2] = searchParams
                .get("size")
                .replace("+", " ")
                .replace("%2F", "/");
            if (searchParams.has("pattern_type"))
              checkURLParameter[3] = searchParams
                .get("pattern_type")
                .replace("+", " ")
                .replace("%2F", "/");
          }
        }
        setSelectURLParameter(checkURLParameter);
        fetchData(queryToString(checkURLParameter));
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };
    fetchInitialData();
  }, [pageData]);
  
  useEffect(() => {
    if (filterData.length > 0) {
      initFilterData();
    }
  }, [filterData]);
  
  useEffect(() => {
    updateFilterData();
  }, [selectedFilters]);

  async function initFilterData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    filterData.forEach((item) => {
      const rows = item.tables.table[0].row;
      let rim_recommended;
      let size;
      let pattern_type;

      if (item.sub_segment) {
        subSegmentOptions.add(item.sub_segment);
      }
      rows.forEach((row) => {
        if (row.rim_recommended) {
          rim_recommended = row.size.match(/(\d+)(?=[\s-]*$)/)[0];
          rimOptions.add(rim_recommended);
        }
        if (row.size) {
          size = row.size;
          sizeOptions.add(size);
        }
        if (row.pattern_type) {
          pattern_type = row.pattern_type;
          patternOptions.add(pattern_type);
        }
        if (row.machinery && row.machinery.name) {
          machineryOptions.add(row.machinery.name);
        }
      });
    });

    setFiltersArray([
      Array.from(subSegmentOptions),
      Array.from(machineryOptions),
      Array.from(rimOptions),
      Array.from(sizeOptions),
      Array.from(patternOptions),
    ]);
  }

  function updateFilterData() {
    const newSubSegmentOptions = new Set();
    const newMachineryOptions = new Set();
    const newRimOptions = new Set();
    const newSizeOptions = new Set();
    const newPatternOptions = new Set();
    filterData.forEach((item) => {
      const rows = item.tables.table[0].row;
      rows.forEach((row) => {
        switch (filterTitle) {
          case "Select Sub-section":
              if (selectedFilters.get("Select Sub-section") === item.sub_segment){
                if(row.machinery && row.machinery.name) {
                    if(selectedFilters.has("Select Machinery")){
                      if(row.machinery.name === selectedFilters.get("Select Machinery")){
                        newMachineryOptions.add(row.machinery.name);
                      }
                    } else {
                      newMachineryOptions.add(row.machinery.name);
                    }
                }
                if(selectedFilters.has("Select Rim")){
                  if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                    if(selectedFilters.has("Select Size")){
                      if(row.size === selectedFilters.get("Select Size")){
                        newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                      }
                    } else {
                      newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                    }
                  }
                } else {
                  if(selectedFilters.has("Select Size")){
                    if(row.size === selectedFilters.get("Select Size")){
                      newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                    }
                  } else {
                    newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                  }
                }
                if(selectedFilters.has("Select Size")){
                  if(row.size === selectedFilters.get("Select Size")){
                    if(selectedFilters.has("Select Rim")){
                      if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                        newSizeOptions.add(row.size);
                      }
                    } else {
                      newSizeOptions.add(row.size);
                    }
                  }
                } else {
                  if(selectedFilters.has("Select Rim")){
                    if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                      newSizeOptions.add(row.size);
                    }
                  } else {
                    newSizeOptions.add(row.size);
                  }
                }
                if(selectedFilters.has("Select Pattern")){
                  if(row.pattern_type === selectedFilters.get("Select Pattern")){
                    newPatternOptions.add(row.pattern_type);
                  }
                } else {
                  newPatternOptions.add(row.pattern_type);
                }
                setFiltersArray((prevData) => [
                  [...(prevData[0] || [])],
                  [...newMachineryOptions],
                  [...newRimOptions],
                  [...newSizeOptions],
                  [...newPatternOptions],
                ]);
              }
              break;
          case "Select Machinery":
            if (row.machinery && filterValue === row.machinery.name) {
                if(selectedFilters.has("Select Sub-section")){
                  if(item.sub_segment === selectedFilters.get("Select Sub-section")){
                    newSubSegmentOptions.add(item.sub_segment);
                  }
                } else {
                  newSubSegmentOptions.add(item.sub_segment);
                }
                if(selectedFilters.has("Select Rim")){
                  if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                    if(selectedFilters.has("Select Size")){
                      if(row.size === selectedFilters.get("Select Size")){
                        newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                      }
                    } else {
                      newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                    }
                  }
                } else {
                  if(selectedFilters.has("Select Size")){
                    if(row.size === selectedFilters.get("Select Size")){
                      newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                    }
                  } else {
                    newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                  }
                }
                if(selectedFilters.has("Select Size")){
                  if(row.size === selectedFilters.get("Select Size")){
                    if(selectedFilters.has("Select Rim")){
                      if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                        newSizeOptions.add(row.size);
                      }
                    } else {
                      newSizeOptions.add(row.size);
                    }
                  }
                } else {
                  if(selectedFilters.has("Select Rim")){
                    if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                      newSizeOptions.add(row.size);
                    }
                  } else {
                    newSizeOptions.add(row.size);
                  }
                }
                if(selectedFilters.has("Select Pattern")){
                  if(row.pattern_type === selectedFilters.get("Select Pattern")){
                    newPatternOptions.add(row.pattern_type);
                  }
                } else {
                  newPatternOptions.add(row.pattern_type);
                }
              setFiltersArray((prevData) => [
                [...newSubSegmentOptions],
                [...(prevData[1] || [])],
                [...newRimOptions],
                [...newSizeOptions],
                [...newPatternOptions],
              ]);
            }
            break;
          case "Select Rim":
            if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === filterValue){
              if(selectedFilters.has("Select Sub-section")){
                  if(item.sub_segment === selectedFilters.get("Select Sub-section")){
                    newSubSegmentOptions.add(item.sub_segment);
                  }
                } else {
                  newSubSegmentOptions.add(item.sub_segment);
                }
                if(row.machinery && row.machinery.name) {
                  if(selectedFilters.has("Select Machinery")){
                    if(row.machinery.name === selectedFilters.get("Select Machinery")){
                      newMachineryOptions.add(row.machinery.name);
                    }
                  } else {
                    newMachineryOptions.add(row.machinery.name);
                  }
                }
                if(selectedFilters.has("Select Size")){
                  if(row.size === selectedFilters.get("Select Size")){
                    if(selectedFilters.has("Select Rim")){
                      if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                        newSizeOptions.add(row.size);
                      }
                    } else {
                      newSizeOptions.add(row.size);
                    }
                  }
                } else {
                  if(selectedFilters.has("Select Rim")){
                    if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                      newSizeOptions.add(row.size);
                    }
                  } else {
                    newSizeOptions.add(row.size);
                  }
                }
                if(selectedFilters.has("Select Pattern")){
                  if(row.pattern_type === selectedFilters.get("Select Pattern")){
                    newPatternOptions.add(row.pattern_type);
                  }
                } else {
                  newPatternOptions.add(row.pattern_type);
                }
              setFiltersArray((prevData) => [
                [...newSubSegmentOptions],
                [...newMachineryOptions],
                [...(prevData[2] || [])],
                [...newSizeOptions],
                [...newPatternOptions],
              ]);
            }
            break;
          case "Select Size":
            if(filterValue === row.size){
              if(selectedFilters.has("Select Sub-section")){
                  if(item.sub_segment === selectedFilters.get("Select Sub-section")){
                    newSubSegmentOptions.add(item.sub_segment);
                  }
                } else {
                  newSubSegmentOptions.add(item.sub_segment);
                }
                if(row.machinery && row.machinery.name) {
                  if(selectedFilters.has("Select Machinery")){
                    if(row.machinery.name === selectedFilters.get("Select Machinery")){
                      newMachineryOptions.add(row.machinery.name);
                    }
                  } else {
                    newMachineryOptions.add(row.machinery.name);
                  }
                }
                if(selectedFilters.has("Select Rim")){
                  if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                    newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                  }
                } else {
                  newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                }
                if(selectedFilters.has("Select Pattern")){
                  if(row.pattern_type === selectedFilters.get("Select Pattern")){
                    newPatternOptions.add(row.pattern_type);
                  }
                } else {
                  newPatternOptions.add(row.pattern_type);
                }
              setFiltersArray((prevData) => [
                [...newSubSegmentOptions],
                [...newMachineryOptions],
                [...newRimOptions],
                [...(prevData[3] || [])],
                [...newPatternOptions],
              ]);
            }
            break;
          case "Select Pattern":
            if(filterValue === row.pattern_type){
              if(selectedFilters.has("Select Sub-section")){
                  if(item.sub_segment === selectedFilters.get("Select Sub-section")){
                    newSubSegmentOptions.add(item.sub_segment);
                  }
                } else {
                  newSubSegmentOptions.add(item.sub_segment);
                }
                if(row.machinery && row.machinery.name) {
                  if(selectedFilters.has("Select Machinery")){
                    if(row.machinery.name === selectedFilters.get("Select Machinery")){
                      newMachineryOptions.add(row.machinery.name);
                    }
                  } else {
                    newMachineryOptions.add(row.machinery.name);
                  }
                }
                if(selectedFilters.has("Select Rim")){
                  if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                    if(selectedFilters.has("Select Size")){
                      if(row.size === selectedFilters.get("Select Size")){
                        newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                      }
                    } else {
                      newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                    }
                  }
                } else {
                  if(selectedFilters.has("Select Size")){
                    if(row.size === selectedFilters.get("Select Size")){
                      newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                    }
                  } else {
                    newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
                  }
                }
                if(selectedFilters.has("Select Size")){
                  if(row.size === selectedFilters.get("Select Size")){
                    if(selectedFilters.has("Select Rim")){
                      if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                        newSizeOptions.add(row.size);
                      }
                    } else {
                      newSizeOptions.add(row.size);
                    }
                  }
                } else {
                  if(selectedFilters.has("Select Rim")){
                    if(row.size.match(/(\d+)(?=[\s-]*$)/)[0] === selectedFilters.get("Select Rim")){
                      newSizeOptions.add(row.size);
                    }
                  } else {
                    newSizeOptions.add(row.size);
                  }
                }
              setFiltersArray((prevData) => [
                [...newSubSegmentOptions],
                [...newMachineryOptions],
                [...newRimOptions],
                [...newSizeOptions],
                [...(prevData[4] || [])],
              ]);
            }
            break;
        }
      });
    });
  }

  const updateItem = (index, newValue) => {
    setValue((prevData) => {
      const newData = [...prevData];
      newData[index] = newValue;
      return newData.slice(0, index + 1);
    });
  };

  const updateSelectedFilters = (updateFilterTitle, value) => {
    filterTitle = updateFilterTitle;
    filterValue = value;
    setSelectedFilters((prevFilters) => {
      const updatedFilters = new Map(prevFilters);
      // if(value === ""){
      //   switch (filterTitle) {
      //     case "Select Machinery":
      //       updatedFilters.delete("Select Machinery");
      //       updatedFilters.delete("Select Rim");
      //       updatedFilters.delete("Select Size");
      //       updatedFilters.delete("Select Pattern");
      //       break;
      //     case "Select Rim":
      //       updatedFilters.delete("Select Rim");
      //       updatedFilters.delete("Select Size");
      //       updatedFilters.delete("Select Pattern");
      //       break;
      //     case "Select Size":
      //       updatedFilters.delete("Select Size");
      //       updatedFilters.delete("Select Pattern");
      //       break;
      //     case "Select Pattern":
      //       updatedFilters.delete("Select Pattern");
      //       break;
      //   }
      // } else {
        updatedFilters.set(updateFilterTitle, value);
      // }
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters(new Map());
    setValue([]);
    setFiltersArray([]);
    initFilterData();
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    if (selectedPage == 0) {
      if (pathname.includes("/page/")) {
        push(pathname.replace(/\/page\/\d+/, "?" + searchParams.toString()));
      }
    } else {
      if (pathname.includes("/page/")) {
        push(
          pathname.replace(
            /\/page\/\d+/,
            "/page/" + (selectedPage + 1) + "?" + searchParams.toString()
          )
        );
      } else {
        push(
          pathname.replace(
            pathname,
            pathname +
              "/page/" +
              (selectedPage + 1) +
              "?" +
              searchParams.toString()
          )
        );
      }
    }
  };

  const queryToString = (queryToStringValue) => {
    const filterQueries = [];
    if (pageData?.filters && pageData.filters.length > 4) {
      if (queryToStringValue[0]) {
        if (searchParams.has("sub_segment")) {
          searchParams.set("sub_segment", queryToStringValue[0]);
        } else {
          searchParams.append("sub_segment", queryToStringValue[0]);
        }
        filterQueries.push(
          `filters[sub_segment][$eq]=${queryToStringValue[0]}`
        );
      } else {
        if (searchParams.has("sub_segment")) searchParams.delete("sub_segment");
      }
      if (queryToStringValue[1]) {
        if (searchParams.has("machinery")) {
          searchParams.set("machinery", queryToStringValue[1]);
        } else {
          searchParams.append("machinery", queryToStringValue[1]);
        }
        filterQueries.push(
          `filters[tables][table][row][machinery][name][$eq]=${queryToStringValue[1]}`
        );
      } else {
        if (searchParams.has("machinery")) searchParams.delete("machinery");
      }
      if (queryToStringValue[2]) {
        if (searchParams.has("rim_recommended")) {
          searchParams.set("rim_recommended", queryToStringValue[2]);
        } else {
          searchParams.append("rim_recommended", queryToStringValue[2]);
        }
        filterQueries.push(
          `filters[tables][table][row][size][$endsWith]=${queryToStringValue[2]}`
        );
      } else {
        if (searchParams.has("rim_recommended"))
          searchParams.delete("rim_recommended");
      }
      if (queryToStringValue[3]) {
        if (searchParams.has("size")) {
          searchParams.set("size", queryToStringValue[3]);
        } else {
          searchParams.append("size", queryToStringValue[3]);
        }
        filterQueries.push(
          `filters[tables][table][row][size][$eq]=${queryToStringValue[3]}`
        );
      } else {
        if (searchParams.has("size")) searchParams.delete("size");
      }
      if (queryToStringValue[4]) {
        if (searchParams.has("pattern_type")) {
          searchParams.set("pattern_type", queryToStringValue[4]);
        } else {
          searchParams.append("pattern_type", queryToStringValue[4]);
        }
        filterQueries.push(
          `filters[tables][table][row][pattern_type][$eq]=${queryToStringValue[4]}`
        );
      } else {
        if (searchParams.has("pattern_type"))
          searchParams.delete("pattern_type");
      }
    } else {
      if (queryToStringValue[1]) {
        if (searchParams.has("machinery")) {
          searchParams.set("machinery", queryToStringValue[1]);
        } else {
          searchParams.append("machinery", queryToStringValue[1]);
        }
        filterQueries.push(
          `filters[tables][table][row][machinery][name][$eq]=${queryToStringValue[1]}`
        );
      } else {
        if (searchParams.has("machinery")) searchParams.delete("machinery");
      }
      if (queryToStringValue[2]) {
        if (searchParams.has("rim_recommended")) {
          searchParams.set("rim_recommended", queryToStringValue[2]);
        } else {
          searchParams.append("rim_recommended", queryToStringValue[2]);
        }
        filterQueries.push(
          `filters[tables][table][row][size][$endsWith]=${queryToStringValue[2]}`
        );
      } else {
        if (searchParams.has("rim_recommended"))
          searchParams.delete("rim_recommended");
      }
      if (queryToStringValue[3]) {
        if (searchParams.has("size")) {
          searchParams.set("size", queryToStringValue[3]);
        } else {
          searchParams.append("size", queryToStringValue[3]);
        }
        filterQueries.push(
          `filters[tables][table][row][size][$eq]=${queryToStringValue[3]}`
        );
      } else {
        if (searchParams.has("size")) searchParams.delete("size");
      }
      if (queryToStringValue[4]) {
        if (searchParams.has("pattern_type")) {
          searchParams.set("pattern_type", queryToStringValue[4]);
        } else {
          searchParams.append("pattern_type", queryToStringValue[4]);
        }
        filterQueries.push(
          `filters[tables][table][row][pattern_type][$eq]=${queryToStringValue[4]}`
        );
      } else {
        if (searchParams.has("pattern_type"))
          searchParams.delete("pattern_type");
      }
    }
    return filterQueries.length > 0 ? "&" + filterQueries.join("&") : "";
  };

  const productFilters = (submitValue) => {
    setProductsData([]);
    fetchData(queryToString(submitValue));
    if (searchParams.toString()) {
      push(pathname.replace(/\/page\/\d+/, "") + "?" + searchParams.toString());
    } else {
      push(pathname.replace(/\/page\/\d+/, ""));
    }
    setTimeout(() => {
      window.scrollTo({
        top: (100 * window.innerHeight) / 100,
        behavior: "smooth",
      });
    }, 1000);
  };

  if (
    typeof meta === "undefined" ||
    (meta.pagination &&
      meta.pagination.pageCount > 0 &&
      meta.pagination.pageCount < meta.pagination.page)
  ) {
    return <Error404 />;
  }

  return (
    <>
      {pageData && pageData?.products && (
        <CollectionTypeSeo page="category" pageData={pageData} />
      )}
      {/* <PageBanner Title={pageData.title} Banner={pageData.hero} /> */}
      <InnerBanner Title={pageData.title} Banner={pageData.inner_video} />
      <section className="product-sec pt-10 md:pt-[60px] 2xl:pt-[100px]">
        <div className="container mx-auto overflow-hidden flex flex-col gap-4 md:gap-6 2xl:gap-10">
          <div className="upper-title-sec flex gap-3 md:gap-0 flex-col md:flex-row justify-between items-end">
            {(pageData?.section_heading || pageData?.section_title) && (
              <div className="self-start">
                {pageData?.section_heading && (
                  <span className="section-heading">
                    {pageData.section_heading}
                  </span>
                )}
                {pageData?.section_title && (
                  <div className="section-title-wrapper">
                    <h3 className="section-title">{pageData.section_title}</h3>
                  </div>
                )}
              </div>
            )}
            {pageData?.catalogue && (
              <div className="cat-btn-sec flex items-center gap-3 relative z-10">
                <Link
                  href={getStrapiMedia(pageData.catalogue?.url)}
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
            <div className="bg-[#F4F5F6] rounded-xl flex flex-col xl:flex-row gap-4 p-6 items-end">
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
                      value={selectedFilters.get(filter.title) || ""}
                      onChange={(e) => {
                        updateSelectedFilters(filter.title, e.target.value);
                        updateItem(isSubSegment ? index : (index + 1), e.target.value);
                      }}
                      className="select-box !w-full max-h-[46px] !text-[14px] !leading-[21px]"
                      >
                      <option value="">Select {filter.title.replace("Select ", "")}</option>
                      {Array.isArray(filtersArray[isSubSegment ? index : index + 1]) &&
                        filtersArray[isSubSegment ? index : index + 1].sort().map((item) => (
                          <option
                            key={item !== undefined && item && item.id}
                            value={
                              item ? item.replace(/"/g, "") : ""
                            }
                            selected={
                              selectURLParameter[isSubSegment ? index : index + 1] == item
                                ? "selected"
                                : ""
                            }
                          >
                            {item}
                          </option>
                        ))}
                    </select>
                  )}
                </div>
              ))}
              <div className="flex flex-row gap-1 w-full">
                <button
                  onClick={() => productFilters(value)}
                  className="tablinks cat-btn active-cat-btn items-center gap-1 !w-full max-h-[46px] !h-full !text-[18px] leading-[27.75px] md:col-span-2 xl:col-span-1"
                >
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
                <button
                  onClick={() => clearFilters()}
                  className="tablinks cat-btn active-cat-btn items-center gap-1 !w-full max-h-[46px] !h-full !text-[18px] leading-[27.75px] md:col-span-2 xl:col-span-1 whitespace-nowrap"
                >
                  Clear Filter
                </button>
              </div>
            </div>
          )}
          {productsData && productsData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-[50px]">
                {productsData.map((product) => (
                  <Product key={product.id} data={product} />
                ))}
              </div>
              {meta?.pagination?.pageCount > 1 && (
                <>
                  <ReactPaginate
                    previousLabel={
                      <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 13.25L1.25 7L7.5 0.75"
                          stroke="#2E3192"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                    nextLabel={
                      <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 0.75L7.75 7L1.5 13.25"
                          stroke="#2E3192"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={meta.pagination.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"productPagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    forcePage={meta.pagination.page - 1}
                  />
                </>
              )}
            </>
          ) : (
            <p className="text-[16px] md:text-[24px] text-center font-semibold">
              {meta?.pagination?.pageCount == 0
                ? "Sorry, we can't find your combination search!"
                : "Please wait, your products are loading."}
            </p>
          )}
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} />
    </>
  );
};

export function Products({ pageData }) {
  const [storedValue, setStoredValue] = useState(null);
  const [mostVisited, setMostVisited] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStandard, setSelectedStandard] = useState(null);
  // for back button
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  // table tab
  useEffect(() => {
    if (pageData?.tables?.table?.length > 0) {
      setSelectedStandard(pageData.tables.table[0].standard);
    }
  }, [pageData]);

  const handleStandardChange = (standard) => {
    setSelectedStandard(standard);
  };

  useEffect(() => {
    $(".zoom_image")
      .on("mouseenter", function () {
        $(this).addClass("zoom_mode_active");
        $(window).width() > 767
          ? $(this).children("img").css({ transform: "scale(2)" })
          : $(this).children("img").css({ transform: "scale(5)" });
      })
      .on("mousemove", function (e) {
        $(this)
          .children("img")
          .css({
            "transform-origin":
              ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
              "% " +
              ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
              "%",
          });
      })
      .on("mouseleave", function () {
        $(this).removeClass("zoom_mode_active");
        $(this).children("img").css({ transform: "scale(1)" });
      });
  }, [pageData]);

  const openPopup = (index) => {
    if (window.innerWidth <= 600) {
      setCurrentIndex(index);

      setPopupVisible(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [sortOrder, setSortOrder] = useState("asc"); // intial order
  const [sortColumn, setSortColumn] = useState("size");

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedTables = pageData.tables?.table?.map((table) => {
    if (table?.row && table.row.length > 0) {
      const sortedRows = [...table.row].sort((a, b) => {
        let valueA, valueB;

        switch (sortColumn) {
          case "size":
            const [sizeA, sizeB] = a.size
              ? a.size.split("-").map(Number)
              : [0, 0];
            const [sizeC, sizeD] = b.size
              ? b.size.split("-").map(Number)
              : [0, 0];
            valueA = sizeA * 1000 + sizeB;
            valueB = sizeC * 1000 + sizeD;
            break;
          case "type":
            valueA = a.type ? a.type.toLowerCase() : "";
            valueB = b.type ? b.type.toLowerCase() : "";
            break;
          case "ply_rating":
            valueA = a.ply_rating;
            valueB = b.ply_rating;
            break;
          case "applications":
            valueA = a.applications ? a.applications.toLowerCase() : "";
            valueB = b.applications ? b.applications.toLowerCase() : "";
            break;
          case "construction_type":
            valueA = a.construction_type
              ? a.construction_type.toLowerCase()
              : "";
            valueB = b.construction_type
              ? b.construction_type.toLowerCase()
              : "";
            break;
          case "pattern_type":
            valueA = a.pattern_type ? a.pattern_type.toLowerCase() : "";
            valueB = b.pattern_type ? b.pattern_type.toLowerCase() : "";
            break;
          case "tra_code":
            valueA = a.tra_code ? a.tra_code.toLowerCase() : "";
            valueB = b.tra_code ? b.tra_code.toLowerCase() : "";
            break;
          case "load_type":
            valueA = a.load_type ? a.load_type.toLowerCase() : "";
            valueB = b.load_type ? b.load_type.toLowerCase() : "";
            break;
          case "rim_recommended":
            valueA = a.rim_recommended;
            valueB = b.rim_recommended;
            break;
          case "specified_rim_diameter":
            valueA = a.specified_rim_diameter;
            valueB = b.specified_rim_diameter;
            break;
          case "sectional_width":
            valueA = a.sectional_width;
            valueB = b.sectional_width;
            break;
          case "overall_diameter":
            valueA = a.overall_diameter;
            valueB = b.overall_diameter;
            break;
          case "tube_value_code":
            valueA = a.tube_value_code ? a.tube_value_code.toLowerCase() : "";
            valueB = b.tube_value_code ? b.tube_value_code.toLowerCase() : "";
            break;
          case "rolling_circumfrence":
            valueA = a.rolling_circumfrence;
            valueB = b.rolling_circumfrence;
            break;
          case "static_loaded_radius":
            valueA = a.static_loaded_radius;
            valueB = b.static_loaded_radius;
            break;
          case "speed_radius_index":
            valueA = a.speed_radius_index;
            valueB = b.speed_radius_index;
            break;
          case "load_index":
            valueA = a.load_index;
            valueB = b.load_index;
            break;
          case "speed_symbol":
            valueA = a.speed_symbol ? a.speed_symbol.toLowerCase() : "";
            valueB = b.speed_symbol ? b.speed_symbol.toLowerCase() : "";
            break;
          case "load_range":
            valueA = a.load_range;
            valueB = b.load_range;
            break;
          case "inflation_pressure":
            valueA = a.inflation_pressure;
            valueB = b.inflation_pressure;
            break;
          default:
            return 0;
        }

        if (sortOrder === "asc") {
          return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
          return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
      });

      return { ...table, row: sortedRows };
    }
    return table;
  });

  const handleSave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lastProduct", pageData.slug);
      sessionStorage.setItem("lastProductVisit", "visited");
    }
  };

  const handleArraySave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mostVisited", JSON.stringify(mostVisited));
    }
  };

  const findMostCommonValue = (arr) => {
    if (Array.isArray(arr)) {
      const countMap = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      let mostCommonValue = null;
      let maxCount = 0;
      for (const [key, count] of Object.entries(countMap)) {
        if (count > maxCount) {
          maxCount = count;
          mostCommonValue = key;
        }
      }
      return mostCommonValue;
    } else {
      return arr;
    }
  };

  useEffect(() => {
    handleSave();
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("lastProduct");
      setStoredValue(value);
      const mostVisitedString = localStorage.getItem("mostVisited");
      if (mostVisitedString) {
        let mostVisitedArray = JSON.parse(mostVisitedString);
        let updatedArray = mostVisitedArray.filter(
          (item) => item !== "undefined"
        );
        setMostVisited(updatedArray);
        setMostVisited((prevData) => [...prevData, value]);
      }
    }
  }, [pageData]);

  useEffect(() => {
    handleArraySave();
  }, [mostVisited]);

  console.log(findMostCommonValue(mostVisited));

  const contentRef = useRef(null);
  const tableRef = useRef(null);

  const getLeaflet = async () => {
    const productName = document
      .querySelector("#product-name h2")
      .innerText.trim();
    console.log(productName);

    if (contentRef.current) {
      var htmlContent = '<div style="padding:10px;">';
      htmlContent += contentRef.current.innerHTML; // Display HTML in an alert

      if (tableRef.current) {
        var tableContent =
          '<div class="table-sec pt-8 md:pt-12 2xl:pt-[60px]"><div class="product-detail-table w-full mt-3">';
        tableContent += tableRef.current.innerHTML;
        tableContent += "</div>";
        tableContent += '<div class="page-break"></div>';
        tableContent += "</div>";

        htmlContent += tableContent;
      }

      htmlContent += "</div>";

      // console.log('htmlContent');

      try {
        const response = await fetch("/api/pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ htmlContent }),
        });

        if (!response.ok) throw new Error("Failed to generate PDF!");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Create a link element and trigger download
        const link = document.createElement("a");
        link.href = url;
        link.download = `${productName}.pdf`;
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("!Error downloading PDF:", error);
      } finally {
        // setLoading(false);
      }
    }
  };

  return (
    <>
      <CollectionTypeSeo page="product" pageData={pageData} />
      <section className="pt-[100px] 2xl:pt-[140px] bg-[#F8F8F8]">
        <div className="container mx-auto">
          <div className="flex items-center gap-1">
            <button
              onClick={handleBack}
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
            </button>
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
          <div
            id="details"
            ref={contentRef}
            className="flex flex-col lg:flex-row gap-8 lg:gap-10 2xl:gap-[60px] mt-6 xl:pb-12 2xl:pb-[60px] border-b border-[#C9CDD3]"
          >
            <div className="productImageWrapper w-full lg:w-[55%] xl:w-[45%]">
              <div className="product-image-sec flex flex-col-reverse md:flex-row gap-5">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="small-img-sec !mx-0"
                >
                  {pageData?.gallery?.map((gallery, index) => (
                    <SwiperSlide
                      key={gallery.id}
                      className="!w-[80px] !h-[80px] md:!w-[70px] md:!h-[70px] 2xl:!w-[100px] 2xl:!h-[100px] bg-[#FFFFFF] rounded-[12px] p-2 !mr-0 cursor-pointer"
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
                <div className="product-slider single-image-slider relative w-full md:w-[80%] h-full bg-[#ffffff] rounded-[12px]">
                  <span
                    className={`bg-primary py-1 px-10 rounded-tr-[12px] text-[#FFFFFF] text-[12px] md:text-[18px] font-medium absolute right-0 top-0 overflow-hidden ${
                      pageData?.premium ? "prem-product-tag" : ""
                    }`}
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
                    className="productDetailSwiper !py-10 overflow-hidden"
                  >
                    {pageData?.gallery?.map((gallery, index) => (
                      <SwiperSlide
                        key={gallery.id}
                        className="!flex !justify-center"
                        onClick={() => openPopup(index)}
                      >
                        <figure className="w-[180px] lg:w-[300px] 2xl:w-[320px] h-[240px] 2xl:h-[380px] pt-3 md:pt-0 zoom_image">
                          <img
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

                {/* Popup */}
                {popupVisible && (
                  <div className="popup-overlay fixed inset-0 bg-black bg-opacity-80 z-60 flex items-center justify-center">
                    <div className="popup-content relative bg-white w-[100%] h-[100%] rounded-[12px] overflow-hidden">
                      <button
                        className="absolute z-10 top-4 right-4 text-white bg-primary rounded-full w-8 h-8 flex items-center justify-center font-bold"
                        onClick={closePopup}
                      >
                        ×
                      </button>
                      <Swiper
                        // navigation={true}
                        freeMode={true}
                        speed={500}
                        // loop={true}
                        initialSlide={currentIndex}
                        pagination={{
                          clickable: true,
                        }}
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                        }}
                        modules={[
                          FreeMode,
                          Autoplay,
                          Navigation,
                          Thumbs,
                          Pagination,
                        ]}
                        className="productPopUpSlider h-full !py-10 overflow-hidden"
                      >
                        {pageData?.gallery?.map((gallery) => (
                          <SwiperSlide
                            key={gallery.id}
                            className="!flex !justify-center !items-center"
                          >
                            <figure className="w-[280px] h-[280px]">
                              <img
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
                )}
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
            <div
              className="product-detail-sec w-ful lg:w-[45%] xl:w-[55%]"
              id="product-name"
            >
              {pageData?.name && (
                <h2 className="text-secondary text-[28px] md:text-[36px] 2xl:text-[48px] font-bold leading-[1] flex gap-3 items-center tracking-[-0.5px]">
                  {pageData.name}
                </h2>
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
                  {details?.content && (
                    <BlocksRenderer
                      content={details.content}
                      blocks={{
                        paragraph: ({ children }) => (
                          <p className="text-[#4F5662] text-[14px] md:text-[15px] 2xl:text-[16px] pb-4 md:pb-6 uppercase">
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
                          <li className="text-[14px] md:text-[15px] 2xl:text-[16px] mt-1 text-[#3D434C] lowercase first-letter:capitalize">
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
                </>
              ))}
            </div>
          </div>
          {pageData?.tables && (
            <div className="table-sec pt-8 md:pt-12 2xl:pt-[60px]">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <div className="flex items-center gap-4 2xl:gap-8">
                  {pageData.tables?.title && (
                    <h2 className="text-[#1A202C] text-[16px] xl:text-[24px] 2xl:text-[32px] font-medium">
                      {pageData.tables.title}
                    </h2>
                  )}
                  {pageData?.catalogue && (
                    <div className="cat-btn-sec flex items-center gap-3 relative z-10">
                      <Link
                        href={getStrapiMedia(pageData.catalogue.url)}
                        className="flex items-center gap-2 text-primary border border-primary rounded-[4px] py-1 px-2 text-[10px] md:text-[16px]"
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
                  )}

                  {/* <div className="flex items-center gap-3 relative z-10">
                      <Link onClick={getLeaflet}
                      target="_blank"
                        href=""
                        className="flex items-center gap-2 text-primary border border-primary rounded-[4px] py-1 px-2 text-[10px] md:text-[16px]"
                        >                        
                        Download Product Leaflet
                      </Link>
                    </div> */}
                </div>
                {pageData.tables?.table && pageData.tables.table.length > 1 && (
                  <div className="country-selection flex justify-between items-center lg:flex-col lg:items-start">
                    <p className="text-[16px] text-[#1A1D21] lg:mb-3 font-medium">
                      Select Standard
                    </p>
                    <div className="flex items-center gap-3 2xl:gap-5">
                      {pageData.tables.table.map((table) =>
                        table?.standard ? (
                          <div key={table.id}>
                            <input
                              type="radio"
                              id={table.standard}
                              name="standard"
                              onChange={() =>
                                handleStandardChange(table.standard)
                              }
                              checked={selectedStandard === table.standard}
                            />
                            <label
                              htmlFor={table.standard}
                              className="uppercase text-[14px] font-medium text-secondary"
                            >
                              {table.standard}
                            </label>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                )}
              </div>
              {sortedTables &&
                sortedTables.length > 0 &&
                sortedTables.map((table) =>
                  table?.row &&
                  table.row.length > 0 &&
                  table.standard === selectedStandard ? (
                    <div
                      ref={tableRef}
                      className="product-detail-table w-full overflow-x-auto mt-3"
                      key={table.id}
                    >
                      <table>
                        <thead>
                          <tr>
                            {table.row[0]?.size && (
                              <th
                                onClick={() => handleSort("size")}
                                style={{ cursor: "pointer" }}
                              >
                                Size{" "}
                                {sortColumn === "size"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.type && (
                              <th
                                onClick={() => handleSort("type")}
                                style={{ cursor: "pointer" }}
                              >
                                Type (TT / TL){" "}
                                {sortColumn === "type"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.ply_rating && (
                              <th
                                onClick={() => handleSort("ply_rating")}
                                style={{ cursor: "pointer" }}
                              >
                                Ply Rating{" "}
                                {sortColumn === "ply_rating"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.machinery && <th>Machinery</th>}
                            {table.row[0]?.applications && (
                              <th
                                onClick={() => handleSort("applications")}
                                style={{ cursor: "pointer" }}
                              >
                                Applications{" "}
                                {sortColumn === "applications"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.construction_type && (
                              <th
                                onClick={() => handleSort("construction_type")}
                                style={{ cursor: "pointer" }}
                              >
                                Construction Type{" "}
                                {sortColumn === "construction_type"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.pattern_type && (
                              <th
                                onClick={() => handleSort("pattern_type")}
                                style={{ cursor: "pointer" }}
                              >
                                Pattern Type{" "}
                                {sortColumn === "pattern_type"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.tra_code && (
                              <th
                                onClick={() => handleSort("tra_code")}
                                style={{ cursor: "pointer" }}
                              >
                                TRA Code{" "}
                                {sortColumn === "tra_code"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.load_type && (
                              <th
                                onClick={() => handleSort("load_type")}
                                style={{ cursor: "pointer" }}
                              >
                                Load Type{" "}
                                {sortColumn === "load_type"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.rim_recommended && (
                              <th
                                onClick={() => handleSort("rim_recommended")}
                                style={{ cursor: "pointer" }}
                              >
                                Rim Recommended{" "}
                                {sortColumn === "rim_recommended"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.specified_rim_diameter && (
                              <th
                                onClick={() =>
                                  handleSort("specified_rim_diameter")
                                }
                                style={{ cursor: "pointer" }}
                              >
                                Specified Rim Diameter (mm){" "}
                                {sortColumn === "specified_rim_diameter"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.sectional_width && (
                              <th
                                onClick={() => handleSort("sectional_width")}
                                style={{ cursor: "pointer" }}
                              >
                                Sectional Width (mm){" "}
                                {sortColumn === "sectional_width"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.overall_diameter && (
                              <th
                                onClick={() => handleSort("overall_diameter")}
                                style={{ cursor: "pointer" }}
                              >
                                Overall Diameter (mm){" "}
                                {sortColumn === "overall_diameter"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.tube_value_code && (
                              <th
                                onClick={() => handleSort("tube_value_code")}
                                style={{ cursor: "pointer" }}
                              >
                                Tube Valve Code{" "}
                                {sortColumn === "tube_value_code"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.rolling_circumfrence && (
                              <th
                                onClick={() =>
                                  handleSort("rolling_circumfrence")
                                }
                                style={{ cursor: "pointer" }}
                              >
                                Rolling Circumference (mm){" "}
                                {sortColumn === "rolling_circumfrence"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.static_loaded_radius && (
                              <th
                                onClick={() =>
                                  handleSort("static_loaded_radius")
                                }
                                style={{ cursor: "pointer" }}
                              >
                                Static Loaded Radius (mm){" "}
                                {sortColumn === "static_loaded_radius"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.speed_radius_index && (
                              <th
                                onClick={() => handleSort("speed_radius_index")}
                                style={{ cursor: "pointer" }}
                              >
                                Speed Radius Index (mm){" "}
                                {sortColumn === "speed_radius_index"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.load_index && (
                              <th
                                onClick={() => handleSort("load_index")}
                                style={{ cursor: "pointer" }}
                              >
                                Load Index{" "}
                                {sortColumn === "load_index"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.speed_symbol && (
                              <th
                                onClick={() => handleSort("speed_symbol")}
                                style={{ cursor: "pointer" }}
                              >
                                Speed Symbol{" "}
                                {sortColumn === "speed_symbol"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.load_range && (
                              <th
                                onClick={() => handleSort("load_range")}
                                style={{ cursor: "pointer" }}
                              >
                                Load Range (kg){" "}
                                {sortColumn === "load_range"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                            {table.row[0]?.inflation_pressure && (
                              <th
                                onClick={() => handleSort("inflation_pressure")}
                                style={{ cursor: "pointer" }}
                              >
                                Inflation Pressure (psi){" "}
                                {sortColumn === "inflation_pressure"
                                  ? sortOrder === "asc"
                                    ? "▲"
                                    : "▼"
                                  : ""}
                              </th>
                            )}
                          </tr>
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
                              {rowData?.tra_code && <td>{rowData.tra_code}</td>}
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
                  ) : null
                )}
              {/* {pageData.tables?.table &&
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
                )} */}
            </div>
          )}
        </div>
      </section>
      <PageEnd EndPageData={pageData?.end} EndStaticImage={LastBg} />
    </>
  );
}

// export function Error404() {
//   return (
//     <div className="py-[60px] md:py-[100px]">
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-2 md:gap-10 xl:gap-[60px] items-center">
//           <div className="error-text w-full xl:w-[50%] flex justify-center xl:items-start">
//             <div className="flex items-center">
//               <span className="text-[#000000] text-[160px] xl:text-[240px] font-bold text-center translate-x-[20px] xl:translate-x-[40px]">
//                 4
//               </span>
//               <Image
//                 className="w-[120px] h-[120px] xl:w-[250px] xl:h-[250px]"
//                 src={errorImg}
//                 alt="errorigif"
//               />
//               <span className="text-[#000000] text-[160px] xl:text-[240px] font-bold text-center ml-[-10px]">
//                 4
//               </span>
//             </div>
//           </div>
//           <div className="error-detail relative z-1 w-full xl:w-[50%] flex flex-col items-center xl:items-start gap-4 md:gap-8 lg:gap-10 2xl:gap-[60px]">
//             <Image
//               className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1]"
//               src={BGTiger2}
//               alt="bgtiger"
//             />
//             <span className="section-heading">404 error</span>
//             <h2 className="section-title">Oops! Page Not Found</h2>
//             <p className="text-[#1A1D21] text-[20px] lg:text-[28px] 2xl:text-[32px] font-medium leading-[1.1] text-center xl:text-start">
//               The page you are looking for does not exist. How you got here is a
//               mystery. But you can click the button below to go back to the
//               homepage.
//             </p>
//             <Link
//               href="/"
//               className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
//             >
//               <span data-hover="Back To Home">Back To Home</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export function Error404() {
  return (
    <div className="py-[60px] md:py-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="error-text w-full flex justify-center xl:items-start">
            <div className="flex items-center">
              <span className="text-[#000000] text-[160px] xl:text-[240px] font-bold text-center translate-x-[20px] xl:translate-x-[40px]">
                4
              </span>
              <Image
                className="w-[120px] h-[120px] xl:w-[250px] xl:h-[250px]"
                src={errorImg}
                alt="errorigif"
              />
              <span className="text-[#000000] text-[160px] xl:text-[240px] font-bold text-center ml-[-10px]">
                4
              </span>
            </div>
          </div>
          <div className="error-detail relative z-1 w-full flex flex-col items-center justify-center gap-4">
            {/* <Image
              className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-1]"
              src={BGTiger2}
              alt="bgtiger"
            /> */}
            <h2 className="section-title">Oops! Page Not Found</h2>
            <Link
              href="/"
              className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
            >
              <span data-hover="Back To Home">Back To Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
