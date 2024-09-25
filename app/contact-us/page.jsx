"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getStrapiMedia } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Float } from "../components/pageCommon/pageCommon";
import { PageEnd } from "@/app/components/pageCommon/pageCommon";
import Link from "next/link";
import Image from "next/image";
import who10 from "../assets/images/contact-img.jpg";
import BGTiger2 from "../assets/images/tiger-mask2.png";

export default function Contact({params}) {
  const [activeTab, setActiveTab] = useState("general");
  const slugs = params.slug;
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(getStrapiMedia("/api/pages/contact-us"))
      .then((res) => res.json())
      .then((pages) => {
        setPageData(pages);
      });
  }, []);

  const { push } = useRouter();

  const [formData, setFormData] = useState({
    form1QueryType: '',
    form1Description: '',
    form1FirstName: '',
    form1LastName: '',
    form1ContactNumber: '',
    form1Email: '',
    form2QueryType: '',
    form2Description: '',
    form2FirstName: '',
    form2LastName: '',
    form2ContactNumber: '',
    form2Email: '',
  });
  const [form1Error, setForm1Error] = useState('');
  const [form1Success, setForm1Success] = useState(false);
  const [form2Error, setForm2Error] = useState('');
  const [form2Success, setForm2Success] = useState(false);
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
      }
    };
    try {
      // partner-inquiries
      const response = await fetch('http://birlatyres.viaconprojects.com:1337/api/general-inquiries', {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }else{
        push('/thankyou');
      }
      const data = await response.json();
      setForm1Success(true);
      // console.log('Success:', data);
    } catch (form1Error) {
      // console.error('Error:', error);
      setForm1Error('There was an error submitting the form.');
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
      }
    };
    try {
      const response = await fetch('http://birlatyres.viaconprojects.com:1337/api/partner-inquiries', {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }else{
        push('/thankyou');
      }
      const data = await response.json();
      setForm2Success(true);
      // console.log('Success:', data);
    } catch (form2Error) {
      // console.error('Error:', error);
      setForm2Error('There was an error submitting the form.');
    }
  };
  return (
    <>
      <Navbar />
      {pageData?.section && pageData.section.length > 0 && pageData.section.map((section) => (
        section.__component == "section.contact-form" && 
        <section className="top-banner-sec bg-[#F8F8F8] relative" key={section.id}>
          <Float />
          <div className="container mx-auto">
            <div className="contact-main flex flex-col md:flex-row items-start gap-4 md:gap-6 2xl:gap-10 mt-8 md:mt-12 2xl:mt-[60px]">
              <div className="contact-detail w-full md:w-1/2 flex flex-col gap-4 md:gap-6 xl:gap-10 overflow-hidden relative">
                <Image
                  className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                  src={BGTiger2}
                  alt="img"
                />
                <div className="contact-title-wrapper">
                  <span className="section-heading">{section?.heading}</span>
                  <div className="section-title-wrapper">
                    <h3 className="section-title">{section?.title}</h3>
                  </div>
                </div>
                {section?.data && section.data.map((details) => (
                    <div className="contact-detail-box" key={details.id}>
                      {details.content.length > 0 && details?.description && (
                        <h3>
                          {details.description}
                        </h3>
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
              <div className="w-full md:w-1/2">
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
                      <form className="w-full flex flex-col gap-3 md:gap-5" onSubmit={form1HandleSubmit}>
                        <div className="form-row">
                          {section?.form1QueryLabel &&
                            <label className="contact-label" htmlFor="form1QueryType">{section.form1QueryLabel}</label>
                          }
                          <select className="contact-select" name="form1QueryType" onChange={handleChange} required="required">
                            {section.form1QueryType.map((option)=>(
                              <option value={option?.value?option.value:''} key={option.id}>{option?.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-row">
                          {section?.form1Description?.label &&
                            <label className="contact-label" htmlFor="form1Description">{section.form1Description.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form1Description"
                            placeholder={section?.form1Description?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form1FirstName?.label &&
                            <label className="contact-label" htmlFor="form1FirstName">{section.form1FirstName.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form1FirstName"
                            placeholder={section?.form1FirstName?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form1LastName?.label &&
                            <label className="contact-label" htmlFor="form1LastName">{section.form1LastName.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form1LastName"
                            placeholder={section?.form1LastName?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form1ContactNumber?.label &&
                            <label className="contact-label" htmlFor="form1ContactNumber">{section.form1ContactNumber.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form1ContactNumber"
                            placeholder={section?.form1ContactNumber?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form1Email?.label &&
                            <label className="contact-label" htmlFor="form1Email">{section.form1Email.label}</label>
                          }
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
                        {section?.form1Concent &&
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" required/>
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
                                  link: ({ children, url }) => <Link href={url} className="underline underline-offset-1 cursor-pointer">{children}</Link>,
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
                        }
                        {form1Error && <p className="text-red-500">{form1Error}</p>}
                        {form1Success && <p className="text-green-500">Application submitted successfully!</p>}
                        <button type="submit" className="primary-btn w-fit flip-animate-2">
                          <span data-hover={section.form1Submit}>
                            {section.form1Submit}
                          </span>
                        </button>
                      </form>
                    </div>
                  )}
                  {activeTab === "partner" && (
                    <div id="partner">
                      <form className="w-full flex flex-col gap-3 md:gap-5" onSubmit={form2HandleSubmit}>
                        <div className="form-row">
                          {section?.form2QueryLabel &&
                            <label className="contact-label" htmlFor="form2QueryType">{section.form2QueryLabel}</label>
                          }
                          <select className="contact-select" name="form2QueryType" onChange={handleChange} required="required">
                            {section.form2QueryType.map((option)=>(
                              <option value={option?.value?option.value:''} key={option.id}>{option?.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-row">
                          {section?.form2Description?.label &&
                            <label className="contact-label" htmlFor="form2Description">{section.form2Description.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form2Description"
                            placeholder={section?.form2Description?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form2FirstName?.label &&
                            <label className="contact-label" htmlFor="form2FirstName">{section.form2FirstName.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form2FirstName"
                            placeholder={section?.form2FirstName?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form2LastName?.label &&
                            <label className="contact-label" htmlFor="form2LastName">{section.form2LastName.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form2LastName"
                            placeholder={section?.form2LastName?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form2ContactNumber?.label &&
                            <label className="contact-label" htmlFor="form2ContactNumber">{section.form2ContactNumber.label}</label>
                          }
                          <input
                            className="contact-input"
                            type="text"
                            name="form2ContactNumber"
                            placeholder={section?.form2ContactNumber?.placeholder}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-row">
                          {section?.form2Email?.label &&
                            <label className="contact-label" htmlFor="form2Email">{section.form2Email.label}</label>
                          }
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
                        {section?.form2Concent &&
                          <div className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1" required/>
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
                                  link: ({ children, url }) => <Link href={url} className="underline underline-offset-1 cursor-pointer">{children}</Link>,
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
                        }
                        {form2Error && <p className="text-red-500">{form2Error}</p>}
                        {form2Success && <p className="text-green-500">Application submitted successfully!</p>}
                        <button type="submit" className="primary-btn w-fit flip-animate-2">
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
      ))}
      <PageEnd EndPageData={pageData?.end} EndStaticImage={who10} Background={true}/>
      <Footer />
    </>
  );
}