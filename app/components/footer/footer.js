"use client";

import { useState, useEffect } from "react";
import { getStrapiMedia } from "@/lib/utils";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [footerData, setFooterData] = useState({});
useEffect(() => {
  const fetchFooterData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer`);
      const footer = await res.json();
      setFooterData(footer);
    } catch (error) {
      console.error("Error fetching footer:", error);
    }
  };

  fetchFooterData();
}, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {footerData?.data && (
        <div className="footer-main py-5 md:py-10 2xl:py-[60px] bg-[#F2F2F2] mt-[60px] xl:mt-0">
          <div className="container mx-auto">
            <div className="footer-detail-sec pb-4 md:pb-10 border-b border-[#DEE1E5]">
              <div className="footer-description-sec md:w-[65%]">
                {footerData.data.attributes?.description && (
                  <p className="footer-description-text">
                    {footerData.data.attributes.description}
                  </p>
                )}
                <div
                  className={cn(
                    "flex flex-col md:flex-row gap-4 md:items-center",
                    footerData.data.attributes?.description ? "mt-4" : ""
                  )}
                >
                  <div className="footer-detail-box group">
                    <svg
                      className="stroke-[#2E3192] group-hover:stroke-[#FFFFFF]"
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 0.75H19M1 0.75V13.5C1 13.6989 1.07902 13.8897 1.21967 14.0303C1.36032 14.171 1.55109 14.25 1.75 14.25H18.25C18.4489 14.25 18.6397 14.171 18.7803 14.0303C18.921 13.8897 19 13.6989 19 13.5V0.75M1 0.75L10 9L19 0.75"
                        stroke=""
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {footerData.data.attributes?.corporate_mail?.link && (
                      <Link
                        href={footerData.data.attributes.corporate_mail.link}
                        className="text-secondary group-hover:text-white"
                      >
                        {footerData.data.attributes?.corporate_mail?.name}
                      </Link>
                    )}
                  </div>
                  <div className="footer-detail-box group">
                    <svg
                      className="fill-[#2E3192] group-hover:fill-[#FFFFFF]"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.363121 18.4365C0.190446 18.7353 0.292758 19.1176 0.591641 19.2903C0.890524 19.463 1.2728 19.3607 1.44547 19.0618L0.363121 18.4365ZM18.5528 19.062C18.7255 19.3608 19.1077 19.4632 19.4066 19.2905C19.7055 19.1178 19.8078 18.7356 19.6351 18.4367L18.5528 19.062ZM1.44547 19.0618C2.31269 17.5607 3.55966 16.3143 5.06111 15.4477L4.43627 14.3651C2.74483 15.3413 1.34008 16.7455 0.363121 18.4365L1.44547 19.0618ZM5.06111 15.4477C6.56255 14.5812 8.26561 14.125 9.99918 14.125L9.99919 12.875C8.04626 12.875 6.12771 13.3889 4.43627 14.3651L5.06111 15.4477ZM9.99918 14.125C11.7328 14.125 13.4358 14.5812 14.9372 15.4478L15.5621 14.3652C13.8707 13.389 11.9521 12.875 9.99919 12.875L9.99918 14.125ZM14.9372 15.4478C16.4387 16.3144 17.6856 17.5609 18.5528 19.062L19.6351 18.4367C18.6582 16.7456 17.2535 15.3415 15.5621 14.3652L14.9372 15.4478ZM15.3741 7.5C15.3741 10.4685 12.9677 12.875 9.99918 12.875V14.125C13.6581 14.125 16.6241 11.1589 16.6241 7.5H15.3741ZM9.99918 12.875C7.03064 12.875 4.62408 10.4685 4.62408 7.5H3.37408C3.37408 11.1589 6.34031 14.125 9.99918 14.125V12.875ZM4.62408 7.5C4.62408 4.53147 7.03055 2.125 9.99908 2.125V0.875C6.34019 0.875 3.37408 3.84111 3.37408 7.5H4.62408ZM9.99908 2.125C12.9676 2.125 15.3741 4.53147 15.3741 7.5H16.6241C16.6241 3.84111 13.658 0.875 9.99908 0.875V2.125Z"
                        fill=""
                      />
                    </svg>
                    {footerData.data.attributes?.ess?.link && (
                      <Link
                        href={footerData.data.attributes.ess.link}
                        target="_blank"
                        className="text-secondary group-hover:text-white"
                      >
                        {footerData.data.attributes?.ess?.name}
                      </Link>
                    )}
                  </div>
                  <div className="footer-detail-box group">
                    {footerData.data.attributes?.himadri?.link && (
                      <Link
                        href={footerData.data.attributes.himadri.link}
                        target="_blank"
                        className="text-secondary group-hover:text-white"
                      >
                        {footerData.data.attributes?.himadri?.name}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="follow-sec flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-3 md:mt-6">
                  {footerData.data.attributes?.social_title && (
                    <span className="text-[#1A1D21] text-[18px] lg:text-[24px]">
                      {footerData.data.attributes.social_title}
                    </span>
                  )}
                  {footerData.data.attributes?.social &&
                    footerData.data.attributes.social.length > 0 && (
                      <div className="flex items-center gap-4">
                        {footerData.data.attributes.social.map(
                          (social) =>
                            social?.link && (
                              <Link
                                className="icon-box group"
                                href={social.link}
                                target="_blank"
                                key={social.id}
                              >
                                <Image
                                  className="transition duration-300 group-hover:grayscale-0 group-hover:invert"
                                  src={getStrapiMedia(
                                    social.icon.data.attributes.url
                                  )}
                                  width={social.icon.data.attributes.width}
                                  height={social.icon.data.attributes.height}
                                  alt={
                                    social.icon.data.attributes?.alternativeText
                                  }
                                />
                              </Link>
                            )
                        )}
                      </div>
                    )}
                </div>
              </div>
              {footerData.data.attributes.logo.length > 1 && (
                <div className="flex items-center gap-3 md:gap-4">
                  {/* {footerData.data.attributes.logo[0].image?.data && footerData.data.attributes.logo[0].icon_link && (
                    <Link href={footerData.data.attributes.logo[1].icon_link.link} target="_blank">
                      <figure className="rounded-none m-0 w-[50px] h-[50px] md:w-[65px] md:h-[65px]">
                        <Image
                          src={getStrapiMedia(
                            footerData.data.attributes.logo[1].image.data.attributes.url
                          )}
                          width={footerData.data.attributes.logo[1].image.data.attributes.width}
                          height={footerData.data.attributes.logo[1].image.data.attributes.height}
                          alt={footerData.data.attributes.logo[1].image.data.attributes?.alternativeText}
                          className="w-full h-fit object-cover"
                        />
                      </figure>
                    </Link>
                  )}
                  <svg
                    width="2"
                    height="60"
                    viewBox="0 0 2 81"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.850586"
                      y1="80.5"
                      x2="0.850586"
                      y2="0.5"
                      stroke="#C9CDD3"
                      stroke-dasharray="5 6"
                    />
                  </svg> */}
                  {footerData.data.attributes.logo[1].image?.data &&
                    footerData.data.attributes.logo[1].icon_link && (
                      <Link
                        href={footerData.data.attributes.logo[0].icon_link.link}
                      >
                        <figure className="rounded-none m-0 w-[100px] h-[50px] md:w-[136px] md:h-[60px]">
                          <Image
                            src={getStrapiMedia(
                              footerData.data.attributes.logo[0].image.data
                                .attributes.url
                            )}
                            width={
                              footerData.data.attributes.logo[0].image.data
                                .attributes.width
                            }
                            height={
                              footerData.data.attributes.logo[0].image.data
                                .attributes.height
                            }
                            alt={
                              footerData.data.attributes.logo[0].image.data
                                .attributes?.alternativeText
                            }
                            className="w-full h-fit object-cover"
                          />
                        </figure>
                      </Link>
                    )}
                </div>
              )}
            </div>

            <ul className="footer-list-sec !pl-0 py-4 md:py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 md:gap-2">
              {footerData.data.attributes.menus?.data &&
                footerData.data.attributes.menus.data.map((newMenu) => (
                  <li className="footer-list-box" key={newMenu.id}>
                    <h2>{newMenu.attributes.title}</h2>
                    <ul className="footer-list">
                      {newMenu.attributes.segments?.data &&
                        newMenu.attributes.segments.data.map((submenu) => (
                          <li key={submenu.id}>
                            <Link
                              href={`${submenu.attributes.permalink}`}
                              className="footer-list-item"
                            >
                              {submenu.attributes.title}
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 10 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 8.5L9 0.5M9 0.5H2.5M9 0.5V7"
                                  stroke="#F5811E"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      {newMenu.attributes.pages?.data &&
                        newMenu.attributes.pages?.data.map((submenu) => (
                          <li key={submenu.id}>
                            <Link
                              href={`${submenu.attributes.permalink}`}
                              className="footer-list-item group"
                            >
                              {submenu.attributes.name}
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 10 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 8.5L9 0.5M9 0.5H2.5M9 0.5V7"
                                  stroke="#F5811E"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
              {footerData.data.attributes?.credit &&
                footerData.data.attributes.credit.map((newText) => (
                  <p
                    className="text-[14px] text-[#000000] text-center"
                    key={newText.id}
                  >
                    {newText.children.map((extractText) => (
                      <span key={extractText.id}>{extractText.text}</span>
                    ))}
                  </p>
                ))}

              <button aria-label="Back to Top" onClick={goToTop} className="bottom-top-btn">
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 9L9 1.5L16.5 9"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
