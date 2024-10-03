"use client";

import { useState, useEffect } from "react";
import { getStrapiMedia } from "@/lib/utils";
import logo1 from "../../assets/images/logo1.png";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../assets/images/Himadri logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navMenu, setNavMenu] = useState([]);
  const [hamMenu, setHamMenu] = useState([]);
  const [headerLogo, setHeaderLogo] = useState([]);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);

  // console.log(headerLogo);
  // mega menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle submenu
  const toggleSubMenu = (id) => {
    setExpandedSubMenu(expandedSubMenu === id ? null : id);
  };

  useEffect(() => {
    fetch("http://birlatyres.viaconprojects.com:1337/api/header")
      .then((res) => res.json())
      .then((header) => {
        setNavMenu(header.data.attributes.menus.data[0]);
        setHamMenu(header.data.attributes.menus.data[1]);
        setHeaderLogo(header.data.attributes.logo);
      });

    // Searchbar
    const searchWrapper = document.querySelector(".search-wrapper");
    searchWrapper.addEventListener("click", () => {
      searchWrapper.classList.add("active");
    });
    document.addEventListener("click", (event) => {
      if (!searchWrapper.contains(event.target)) {
        searchWrapper.classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="nav-main">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center relative">
          <div className="navbar-start w-fit">
            <button className="hamburger-button" onClick={toggleMenu}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33398 25.333H18.6673M5.33398 15.9997H26.6673M5.33398 6.66634H26.6673"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="navbar-center flex items-center gap-6 lg:flex md:pl-7 ml-[-10%] md:ml-0">
            <ul className="menu menu-horizontal hidden md:flex relative text-lg lg:gap-4 2xl:gap-7 p-0">
              {navMenu.attributes?.menu.map((menu) => (
                <li className="nav-drop group" key={menu.id}>
                  {menu?.link ? (
                    <Link
                      href={menu.link}
                      className="nav-links nav-hov flip-animate"
                    >
                      <span data-hover={menu.title}>{menu.title}</span>
                      <svg
                        className="nav-arrow"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="#333333"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00045 3.44752L8.30032 0.147705L9.24312 1.09051L5.00045 5.33319L0.757812 1.09051L1.70063 0.147705L5.00045 3.44752Z"
                          fill=""
                        />
                      </svg>
                    </Link>
                  ) : (
                    <button className="nav-links nav-hov flip-animate">
                      <span data-hover={menu.title}>{menu.title}</span>
                      <svg
                        className="nav-arrow"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="#333333"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00045 3.44752L8.30032 0.147705L9.24312 1.09051L5.00045 5.33319L0.757812 1.09051L1.70063 0.147705L5.00045 3.44752Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  )}
                  <ul className="center-dropdown">
                    {menu.sub_menu.map((subMenu) => (
                      <li className="subSubText-wrapper" key={subMenu.id}>
                        <button className="drop-list">{subMenu.title}</button>
                        <ul className="absolute top-0 !hidden subSubText bg-slate-50 !w-[260px] border-t border-[#DEE1E5] left-[100%] overflow-hidden">
                          {subMenu.pages.data.map((subSubMenu) => (
                            <li
                              className="text-[14px] text-secondary !w-full !-mr-8 font-medium"
                              key={subSubMenu.id}
                            >
                              <Link
                                className="!pl-2 flex gap-1 hover:translate-x-2 hover:bg-transparent focus:!bg-[#FFFFFF] focus:!text-secondary"
                                href={`${subSubMenu.attributes.permalink}`}
                              >
                                <svg
                                  width="8"
                                  height="8"
                                  viewBox="0 0 10 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-2"
                                >
                                  <path
                                    d="M1 8.5L9 0.5M9 0.5H2.5M9 0.5V7"
                                    stroke="#2E3192"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                {subSubMenu.attributes.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                    {menu.segments?.data.map((menu) => (
                      <li key={menu.id}>
                        <Link
                          className="drop-list"
                          href={`${menu.attributes.permalink}`}
                        >
                          {menu.attributes.title}
                        </Link>
                      </li>
                    ))}
                    {menu.pages?.data.map((menu) => (
                      <li key={menu.id}>
                        <Link
                          className="drop-list"
                          href={`${menu.attributes.permalink}`}
                        >
                          {menu.attributes.name}
                        </Link>
                      </li>
                    ))}
                    {menu.other_link.map((menu) => (
                      <li key={menu.id}>
                        <Link className="drop-list" href={`${menu.link}`}>
                          {menu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {navMenu.attributes?.segments?.data.map((menu) => (
                <li className="nav-drop group" key={menu.id}>
                  <Link
                    className="nav-links nav-hov flip-animate"
                    href={`${menu.attributes.permalink}`}
                  >
                    <span data-hover={menu.attributes.title}>
                      {menu.attributes.title}
                    </span>
                  </Link>
                </li>
              ))}
              {navMenu.attributes?.pages?.data.map((menu) => (
                <li className="nav-drop group" key={menu.id}>
                  <Link
                    className="nav-links nav-hov flip-animate"
                    href={`${menu.attributes.permalink}`}
                  >
                    <span data-hover={menu.attributes.name}>
                      {menu.attributes.name}
                    </span>
                  </Link>
                </li>
              ))}
              {navMenu.attributes?.other_link.map((menu) => (
                <li className="nav-drop group" key={menu.id}>
                  <Link
                    className="nav-links nav-hov flip-animate"
                    href={`${menu.link}`}
                  >
                    <span data-hover={menu.name}>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div class="search-wrapper relative hidden md:flex">
              <input
                className="search-input"
                type="text"
                placeholder="Search website"
              />
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7026 14.2032L17.4995 18.0001M15.625 9.5625C15.625 13.1869 12.6869 16.125 9.0625 16.125C5.43813 16.125 2.5 13.1869 2.5 9.5625C2.5 5.93813 5.43813 3 9.0625 3C12.6869 3 15.625 5.93813 15.625 9.5625Z"
                  stroke="#1A1D21"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          {headerLogo.length > 1 && (
            <div className="navbar-end gap-2 md:gap-3 group flex justify-end items-center py-1 md:py-0">
              {headerLogo[0].image?.data && headerLogo[0].icon_link?.link && (
                <Link href={headerLogo[0].icon_link.link} target="_blank">
                  <figure className="rounded-none m-0 w-[50px] h-[50px] md:w-[65px] md:h-[65px]">
                    <Image
                      src={getStrapiMedia(
                        headerLogo[0].image.data.attributes.url
                      )}
                      width={headerLogo[0].image.data.attributes.width}
                      height={headerLogo[0].image.data.attributes.height}
                      alt={headerLogo[0].image.data.attributes?.alternativeText}
                      className="w-full h-fit object-cover pt-2"
                    />
                  </figure>
                </Link>
              )}
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
                  stroke="#C9CDD3"
                  stroke-dasharray="5 6"
                />
              </svg>
              {headerLogo[1].image?.data && headerLogo[1].icon_link?.link && (
                <Link href={headerLogo[1].icon_link.link}>
                  <figure className="rounded-none m-0 w-[80px] h-[35px] md:w-[136px] md:h-[60px]">
                    <Image
                      src={getStrapiMedia(
                        headerLogo[1].image.data.attributes.url
                      )}
                      width={headerLogo[1].image.data.attributes.width}
                      height={headerLogo[1].image.data.attributes.height}
                      alt={headerLogo[1].image.data.attributes?.alternativeText}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`hamburger-menu h-[100%] absolute top-0 left-0 z-50 ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <button
          className="close text-[40px] absolute right-4 top-[18px] md:top-4 z-1"
          onClick={toggleMenu}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.30044 6.41477C7.77973 5.89408 6.93552 5.89408 6.41481 6.41477C5.89412 6.93548 5.89412 7.77969 6.41481 8.3004L14.1144 16L6.41489 23.6996C5.8942 24.2203 5.8942 25.0645 6.41489 25.5852C6.9356 26.1059 7.77981 26.1059 8.3005 25.5852L16 17.8856L23.6996 25.5852C24.2203 26.1059 25.0646 26.1059 25.5852 25.5852C26.1059 25.0645 26.1059 24.2203 25.5852 23.6996L17.8856 16L25.5854 8.3004C26.106 7.77969 26.106 6.93548 25.5854 6.41477C25.0647 5.89408 24.2204 5.89408 23.6998 6.41477L16 14.1144L8.30044 6.41477Z"
              fill="#1A1D21"
            ></path>
          </svg>
        </button>
        <div className="dropdown-wrapper">
          <div class="search-wrapper relative flex md:hidden my-[3px] mx-2">
            <input
              className="search-input"
              type="text"
              placeholder="Search website"
            />
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7026 14.2032L17.4995 18.0001M15.625 9.5625C15.625 13.1869 12.6869 16.125 9.0625 16.125C5.43813 16.125 2.5 13.1869 2.5 9.5625C2.5 5.93813 5.43813 3 9.0625 3C12.6869 3 15.625 5.93813 15.625 9.5625Z"
                stroke="#1A1D21"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <ul className="h-full overflow-auto px-[16px] pt-4 md:pt-0 xl:pt-[80px] 2xl:!pt-0 border-t-2 md:border-t-0">
            {hamMenu.attributes?.menu.map((menu) => (
              <li className="mb-4" key={menu.id}>
                {menu?.link ? (
                  <Link href={menu.link} className="ham-links">
                    {menu.title}
                  </Link>
                ) : (
                  <button className="ham-links">{menu.title}</button>
                )}
                <ul className="transition-all duration-300 pl-4">
                  {menu.sub_menu.map((subMenu) => (
                    <li key={subMenu.id}>
                      <div className="flex justify-between">
                        <button
                          className="text-secondary text-[16px] py-[6px]"
                          onClick={() => toggleSubMenu(subMenu.id)}
                        >
                          {subMenu.title}
                        </button>
                        {subMenu.pages?.data &&
                          subMenu.pages.data.length > 0 && (
                            <button
                              onClick={() => toggleSubMenu(subMenu.id)}
                              className={`transition-transform duration-300 ${
                                expandedSubMenu === subMenu.id
                                  ? "rotate-180"
                                  : ""
                              }`}
                            >
                              <svg
                                width="14"
                                height="10"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.375 0.75L5 5.125L0.625 0.75"
                                  stroke="#2E3192"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                          )}
                      </div>
                      <ul
                        className={`transition-all duration-1000 overflow-hidden ${
                          expandedSubMenu === subMenu.id
                            ? "max-h-screen"
                            : "max-h-0 overflow-hidden"
                        }`}
                      >
                        {subMenu.segments?.data.map((subSubMenu) => (
                          <li
                            className="text-secondary pl-4 bg-[#F4F4F4] hover:bg-secondary hover:text-[#FFFFFF] py-2 transition-all duration-500"
                            key={subSubMenu.id}
                          >
                            <Link href={`${subSubMenu.attributes.permalink}`}>
                              {subSubMenu.attributes.title}
                            </Link>
                          </li>
                        ))}
                        {subMenu.pages?.data.map((subSubMenu) => (
                          <li
                            className="text-secondary pl-4 bg-[#F4F4F4] hover:bg-secondary hover:text-[#FFFFFF] py-2 transition-all duration-500"
                            key={subSubMenu.id}
                          >
                            <Link href={`${subSubMenu.attributes.permalink}`}>
                              {subSubMenu.attributes.name}
                            </Link>
                          </li>
                        ))}
                        {subMenu.other_link.map((subSubMenu) => (
                          <li
                            className="text-secondary pl-4 bg-[#F4F4F4] hover:bg-secondary hover:text-[#FFFFFF] py-2 transition-all duration-500"
                            key={subSubMenu.id}
                          >
                            <Link href={`${subSubMenu.link}`}>
                              {subSubMenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  {menu.segments?.data.map((subMenu) => (
                    <li key={subMenu.id}>
                      <div className="flex justify-between">
                        <Link
                          className="text-secondary text-[16px] py-[6px]"
                          href={`${subMenu.attributes.permalink}`}
                        >
                          {subMenu.attributes.title}
                        </Link>
                      </div>
                    </li>
                  ))}
                  {menu.pages?.data.map((subMenu) => (
                    <li key={subMenu.id}>
                      <div className="flex justify-between">
                        <Link
                          className="text-secondary text-[16px] py-[6px]"
                          href={`${subMenu.attributes.permalink}`}
                        >
                          {subMenu.attributes.name}
                        </Link>
                      </div>
                    </li>
                  ))}
                  {menu.other_link.map((subMenu) => (
                    <li key={subMenu.id}>
                      <div className="flex justify-between">
                        <Link
                          className="text-secondary text-[16px] py-[6px]"
                          href={`${subMenu.link}`}
                        >
                          {subMenu.name}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {hamMenu.attributes?.segments?.data.map((menu) => (
              <li className="mb-4" key={menu.id}>
                <Link
                  className="ham-links"
                  href={`${menu.attributes.permalink}`}
                >
                  {menu.attributes.title}
                </Link>
              </li>
            ))}
            {hamMenu.attributes?.pages?.data.map((menu) => (
              <li className="mb-4" key={menu.id}>
                <Link
                  className="ham-links"
                  href={`${menu.attributes.permalink}`}
                >
                  {menu.attributes.name}
                </Link>
              </li>
            ))}
            {hamMenu.attributes?.other_link.map((menu) => (
              <li className="mb-4" key={menu.id}>
                <Link className="ham-links" href={`${menu.link}`}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
