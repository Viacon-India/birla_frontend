"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo1 from "../../assets/images/logo1.png";
import Link from "next/link";

export default function Footer() {
  const [footerMenu, setFooterMenu] = useState([]);
  const [creditTexts, setCreditTexts] = useState([]);
  const [detail, setDetail] = useState([]);

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
    <div className="footer-main py-[60px] mt-[120px] bg-[#F4F5F6]">
      <div className="container mx-auto">
        <div className="footer-detail-sec pb-10 border-b border-[#727C8D]">
          <div className="footer-description-sec w-[65%]">
            <p className="footer-description-text">{detail.description}</p>
            <div className="flex gap-4 items-center mt-4">
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
          </div>
          <figure className="rounded-none m-0 w-[180px] h-[80px]">
            <Image
              src={logo1}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        <ul className="footer-list-sec py-10 grid grid-cols-5">
          {footerMenu.map((newMenu) => (
            <li className="footer-list-box">
              <h3>{newMenu.attributes.menu[0].menu_item.name}</h3>
              <ul className="footer-list">
                {newMenu.attributes.menu[0].sub_menu_item.map((submenu) => (
                  <li>
                    <Link
                      href={`/${submenu.link}`}
                      className="footer-list-item"
                    >
                      {submenu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* <li className="footer-list-box">
            About Us
            <ul className="footer-list">
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer-list-box">
            About Us
            <ul className="footer-list">
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer-list-box">
            About Us
            <ul className="footer-list">
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
            </ul>
          </li>
          <li className="footer-list-box">
            About Us
            <ul className="footer-list">
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
              <li>
                <Link className="footer-list-item" href="#">
                  Who we are
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>

        <div className="flex flex-col md:flex-row justify-between items-end">
          {creditTexts.map((newText) => (
            <p className="text-[14px] text-[#000000]">
              {newText.children.map((extractText) => (
                <span>{extractText.text}</span>
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
