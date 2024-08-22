"use client";

import { useState, useEffect } from "react";
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
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);

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
        console.log(header);
        setNavMenu(header.data.attributes.menus.data[0].attributes.menu);
        setHamMenu(header.data.attributes.menus.data[0].attributes.menu);
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
            <div className="hamburger-button" onClick={toggleMenu}>
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
            </div>
          </div>

          <div className="navbar-center flex items-center gap-6 lg:flex md:pl-7 ml-[-15%] md:ml-0">
            <ul className="menu menu-horizontal hidden md:flex relative text-lg lg:gap-4 xl:gap-7 p-0">
              {navMenu.map((menu) => (
                <li className="nav-drop group" key={menu.id}>
                  <Link
                    href={`/${menu.menu_item.link}`}
                    className="nav-links nav-hov flip-animate"
                  >
                    <span data-hover={menu.menu_item.name}>
                      {menu.menu_item.name}
                    </span>
                    {menu.sub_menu_item.length > 0 && (
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
                    )}
                  </Link>
                  {menu.sub_menu_item.length > 0 && (
                    <ul className="center-dropdown">
                      {menu.sub_menu_item.map((subMenu) => (
                        <li key={subMenu.id}>
                          <Link href={`/${subMenu.link}`} className="drop-list">
                            {subMenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
            <div class="flex md:hidden gap-2 relative z-10">
              <Link href="" className="primary-btn-1 !w-[42px] h-[36px]"></Link>
              <Link href="" className="primary-btn-2 !w-[42px] h-[36px]"></Link>
            </div>
          </div>

          <div className="navbar-end gap-2 md:gap-3 group flex justify-end items-center py-1 md:py-0">
            <Link href="/">
              <figure className="rounded-none m-0 w-[50px] h-[50px] md:w-[65px] md:h-[65px]">
                <Image
                  src={logo2}
                  alt="logo"
                  className="w-full h-fit object-cover pt-2"
                />
              </figure>
            </Link>
            <div class="line"></div>
            <Link href="/">
              <figure className="rounded-none m-0 w-[80px] h-[35px] md:w-[136px] md:h-[60px]">
                <Image
                  src={logo1}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </figure>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`hamburger-menu h-[100%] absolute top-0 left-0 z-50 ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <span
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
        </span>
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
          <ul className="h-full overflow-auto px-[16px] border border-t-2 pt-4 md:pt-0">
            {hamMenu.map((menu) => (
              <li className="mb-4" key={menu.id}>
                <button className="ham-links">{menu.menu_item.name}</button>
                {menu.sub_menu && menu.sub_menu.length > 0 && (
                  <ul className="transition-all duration-300 pl-4">
                    {menu.sub_menu.map((subMenu) => (
                      <li key={subMenu.id}>
                        <div className="flex justify-between">
                          <button
                            className="text-secondary text-[16px] py-[6px]"
                            onClick={() => toggleSubMenu(subMenu.id)}
                          >
                            {subMenu.sub_menu_item.name}
                          </button>
                          {subMenu.sub_sub_menu_item &&
                            subMenu.sub_sub_menu_item.length > 0 && (
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
                        {subMenu.sub_sub_menu_item &&
                          subMenu.sub_sub_menu_item.length > 0 && (
                            <ul
                              className={`transition-all duration-1000 overflow-hidden ${
                                expandedSubMenu === subMenu.id
                                  ? "max-h-screen"
                                  : "max-h-0 overflow-hidden"
                              }`}
                            >
                              {subMenu.sub_sub_menu_item.map((subSubMenu) => (
                                <li
                                  className="text-secondary pl-4 bg-[#F4F4F4] hover:bg-secondary hover:text-[#FFFFFF] py-2 transition-all duration-500"
                                  key={subSubMenu.id}
                                >
                                  <Link href={`/${subSubMenu.link}`}>
                                    {subSubMenu.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
