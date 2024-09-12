"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../assets/images/logo1.png";
import Link from "next/link";
import logo2 from "../../assets/images/himadri-logo-65.png";

export default function Footer() {
  const [footerMenu, setFooterMenu] = useState([]);
  const [creditTexts, setCreditTexts] = useState([]);
  const [detail, setDetail] = useState([]);
  console.log(footerMenu);
  // menus
  useEffect(() => {
    fetch("http://birlatyres.viaconprojects.com:1337/api/footer")
      .then((res) => res.json())
      .then((footer) => {
        setFooterMenu(footer.data.attributes.menus.data);
        setCreditTexts(footer.data.attributes.credit);
        setDetail(footer.data.attributes);
      });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-main py-5 md:py-10 2xl:py-[60px] bg-[#F4F5F6]">
      <div className="container mx-auto">
        <div className="footer-detail-sec pb-4 md:pb-10 border-b border-[#727C8D]">
          <div className="footer-description-sec md:w-[65%]">
            <p className="footer-description-text">{detail.description}</p>
            <div className="flex flex-col md:flex-row gap-4 md:items-center mt-4">
              <div className="footer-detail-box">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0.75H19M1 0.75V13.5C1 13.6989 1.07902 13.8897 1.21967 14.0303C1.36032 14.171 1.55109 14.25 1.75 14.25H18.25C18.4489 14.25 18.6397 14.171 18.7803 14.0303C18.921 13.8897 19 13.6989 19 13.5V0.75M1 0.75L10 9L19 0.75"
                    stroke="#727C8D"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>username@birlatyre.com</span>
              </div>
              <div className="footer-detail-box">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.363121 18.4365C0.190446 18.7353 0.292758 19.1176 0.591641 19.2903C0.890524 19.463 1.2728 19.3607 1.44547 19.0618L0.363121 18.4365ZM18.5528 19.062C18.7255 19.3608 19.1077 19.4632 19.4066 19.2905C19.7055 19.1178 19.8078 18.7356 19.6351 18.4367L18.5528 19.062ZM1.44547 19.0618C2.31269 17.5607 3.55966 16.3143 5.06111 15.4477L4.43627 14.3651C2.74483 15.3413 1.34008 16.7455 0.363121 18.4365L1.44547 19.0618ZM5.06111 15.4477C6.56255 14.5812 8.26561 14.125 9.99918 14.125L9.99919 12.875C8.04626 12.875 6.12771 13.3889 4.43627 14.3651L5.06111 15.4477ZM9.99918 14.125C11.7328 14.125 13.4358 14.5812 14.9372 15.4478L15.5621 14.3652C13.8707 13.389 11.9521 12.875 9.99919 12.875L9.99918 14.125ZM14.9372 15.4478C16.4387 16.3144 17.6856 17.5609 18.5528 19.062L19.6351 18.4367C18.6582 16.7456 17.2535 15.3415 15.5621 14.3652L14.9372 15.4478ZM15.3741 7.5C15.3741 10.4685 12.9677 12.875 9.99918 12.875V14.125C13.6581 14.125 16.6241 11.1589 16.6241 7.5H15.3741ZM9.99918 12.875C7.03064 12.875 4.62408 10.4685 4.62408 7.5H3.37408C3.37408 11.1589 6.34031 14.125 9.99918 14.125V12.875ZM4.62408 7.5C4.62408 4.53147 7.03055 2.125 9.99908 2.125V0.875C6.34019 0.875 3.37408 3.84111 3.37408 7.5H4.62408ZM9.99908 2.125C12.9676 2.125 15.3741 4.53147 15.3741 7.5H16.6241C16.6241 3.84111 13.658 0.875 9.99908 0.875V2.125Z"
                    fill="#727C8D"
                  />
                </svg>
                <span>ESS Portal</span>
              </div>
            </div>
            <div class="follow-sec flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-3 md:mt-6">
              <span className="text-[#1A1D21] text-[18px] md:text-[24px]">
                Follow us on :
              </span>
              <div class="flex items-center gap-4">
                <Link className="icon-box" href="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 10C13 11.6569 11.6569 13 10 13V14.5C12.4853 14.5 14.5 12.4853 14.5 10H13ZM10 13C8.34315 13 7 11.6569 7 10H5.5C5.5 12.4853 7.51472 14.5 10 14.5V13ZM7 10C7 8.34315 8.34315 7 10 7V5.5C7.51472 5.5 5.5 7.51472 5.5 10H7ZM10 7C11.6569 7 13 8.34315 13 10H14.5C14.5 7.51472 12.4853 5.5 10 5.5V7ZM5.875 2.125H14.125V0.625H5.875V2.125ZM14.125 2.125C16.1961 2.125 17.875 3.80393 17.875 5.875H19.375C19.375 2.9755 17.0245 0.625 14.125 0.625V2.125ZM17.875 5.875V14.125H19.375V5.875H17.875ZM17.875 14.125C17.875 16.1961 16.1961 17.875 14.125 17.875V19.375C17.0245 19.375 19.375 17.0245 19.375 14.125H17.875ZM14.125 17.875H5.875V19.375H14.125V17.875ZM5.875 17.875C3.80393 17.875 2.125 16.1961 2.125 14.125H0.625C0.625 17.0245 2.9755 19.375 5.875 19.375V17.875ZM2.125 14.125V5.875H0.625V14.125H2.125ZM2.125 5.875C2.125 3.80393 3.80393 2.125 5.875 2.125V0.625C2.9755 0.625 0.625 2.9755 0.625 5.875H2.125Z"
                      fill="#F4F5F6"
                    />
                    <path
                      d="M14.875 6.25C15.4963 6.25 16 5.74632 16 5.125C16 4.50368 15.4963 4 14.875 4C14.2537 4 13.75 4.50368 13.75 5.125C13.75 5.74632 14.2537 6.25 14.875 6.25Z"
                      fill="#F4F5F6"
                    />
                  </svg>
                </Link>
                <Link className="icon-box" href="">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.25 7.50009V13.5001M8.25 10.1251C8.25 9.4289 8.52656 8.76122 9.01884 8.26893C9.51113 7.77665 10.1788 7.50009 10.875 7.50009C11.5712 7.50009 12.2389 7.77665 12.7312 8.26893C13.2234 8.76122 13.5 9.4289 13.5 10.1251V13.5001M5.25 7.50009V13.5001M1.5 0.75H16.5C16.9142 0.75 17.25 1.08579 17.25 1.5V16.5C17.25 16.9142 16.9142 17.25 16.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V1.5C0.75 1.08579 1.08579 0.75 1.5 0.75Z"
                      stroke="#F4F5F6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.25 5.625C5.87132 5.625 6.375 5.12132 6.375 4.5C6.375 3.87868 5.87132 3.375 5.25 3.375C4.62868 3.375 4.125 3.87868 4.125 4.5C4.125 5.12132 4.62868 5.625 5.25 5.625Z"
                      fill="#F4F5F6"
                    />
                  </svg>
                </Link>
                <Link className="icon-box" href="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM10 19V8.50009C10 7.90335 10.2371 7.33105 10.659 6.9091C11.081 6.48714 11.6533 6.25009 12.25 6.25009H13.75M7 11.5001H13"
                      stroke="#F4F5F6"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
                <Link className="icon-box" href="">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 7.61786L17.0302 0H15.4772L9.78685 6.61448L5.24198 0H0L6.87274 10.0023L0 17.9908H1.55305L7.56222 11.0056L12.3619 17.9908H17.6039L10.4763 7.61786H10.4767ZM8.34961 10.0904L7.65326 9.09439L2.11263 1.16911H4.49802L8.96937 7.56506L9.66572 8.56106L15.4779 16.8748H13.0926L8.34961 10.0908V10.0904Z"
                      fill="#F4F5F6"
                    />
                  </svg>
                </Link>
                <Link className="icon-box" href="">
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8.99997L9.5 5.99997V12L14 8.99997Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.25 8.99997C1.25 11.7895 1.5382 13.4263 1.75729 14.2675C1.81585 14.4972 1.92832 14.7097 2.08537 14.8873C2.24241 15.0649 2.43952 15.2026 2.66037 15.2888C5.79883 16.4949 11 16.4618 11 16.4618C11 16.4618 16.2011 16.4949 19.3396 15.2888C19.5604 15.2026 19.7576 15.0649 19.9146 14.8873C20.0717 14.7097 20.1841 14.4972 20.2427 14.2675C20.4618 13.4263 20.75 11.7896 20.75 8.99997C20.75 6.21039 20.4618 4.57368 20.2427 3.73248C20.1841 3.50273 20.0717 3.29025 19.9146 3.11264C19.7576 2.93502 19.5605 2.79738 19.3396 2.71113C16.2012 1.50506 11 1.53818 11 1.53818C11 1.53818 5.79888 1.50506 2.66039 2.71112C2.43955 2.79737 2.24244 2.93501 2.08539 3.11262C1.92834 3.29024 1.81588 3.50272 1.75731 3.73246C1.53821 4.57366 1.25 6.21039 1.25 8.99997Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3 md:gap-4">
            <figure className="rounded-none m-0 w-[60px] h-[54px] md:w-fit md:h-[80px] fig-line">
              <Image
                src={logo2}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </figure>
            <svg
              width="2"
              height="81"
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
            </svg>

            <figure className="rounded-none m-0 w-[94px] h-[42px] md:w-[180px] md:h-[80px]">
              <Image
                src={logo1}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
        </div>

        <ul className="footer-list-sec py-4 md:py-10 grid grid-cols-2 gap-x-2 gap-y-8 md:gap-y-0 md:grid-cols-5">
          {footerMenu.map((newMenu) => (
            <li className="footer-list-box" key={newMenu.id}>
              <h2>{newMenu.attributes.title}</h2>
              <ul className="footer-list">
                {newMenu.attributes.segments?.data.map((submenu) => (
                  <li key={submenu.id}>
                    <Link
                      href={`${submenu.attributes.permalink}`}
                      className="footer-list-item"
                    >
                      {submenu.attributes.title}
                    </Link>
                  </li>
                ))}
                {newMenu.attributes.pages?.data.map((submenu) => (
                  <li key={submenu.id}>
                    <Link
                      href={`${submenu.attributes.permalink}`}
                      className="footer-list-item"
                    >
                      {submenu.attributes.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {creditTexts.map((newText) => (
            <p
              className="text-[14px] text-[#000000] text-center"
              key={newText.id}
            >
              {newText.children.map((extractText) => (
                <span key={extractText.id}>{extractText.text}</span>
              ))}
            </p>
          ))}

          <button onClick={goToTop} className="bottom-top-btn">
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
  );
}
