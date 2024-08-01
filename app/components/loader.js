"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import himadari from "../assets/images/himadri-logo-150.png";
import birla from "../assets/images/birla-logo-150.png";

export default function Loader() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 100) return;

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(interval);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <div className="loader-sec w-full h-[100vh] bg-transparent flex flex-col gap-3 justify-center items-center absolute z-80">
        {/* <div class="flex gap-12 justify-center items-center pl-[150px]">
          <figure className="rounded-none m-0 ltr">
            <Image
              src={himadari}
              alt="logo"
              className="w-full h-fit object-cover pt-2"
            />
          </figure>
          <div class="line !h-full"></div>
          <figure className="rounded-none m-0 rtl">
            <Image
              src={birla}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </figure>
        </div> */}
        <div class="loader">
          <div class="truckWrapper">
            <div class="truckBody">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 198 93"
                class="trucksvg"
              >
                <path
                  stroke-width="3"
                  stroke="#282828"
                  fill="#F5811E"
                  d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                ></path>
                <path
                  stroke-width="3"
                  stroke="#282828"
                  fill="#7D7C7C"
                  d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                ></path>
                <path
                  stroke-width="2"
                  stroke="#282828"
                  fill="#282828"
                  d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
                ></path>
                <rect
                  stroke-width="2"
                  stroke="#282828"
                  fill="#FFFCAB"
                  rx="1"
                  height="7"
                  width="5"
                  y="63"
                  x="187"
                ></rect>
                <rect
                  stroke-width="2"
                  stroke="#282828"
                  fill="#282828"
                  rx="1"
                  height="11"
                  width="4"
                  y="81"
                  x="193"
                ></rect>
                <rect
                  stroke-width="3"
                  stroke="#282828"
                  fill="#2E3192"
                  rx="2.5"
                  height="90"
                  width="121"
                  y="1.5"
                  x="6.5"
                ></rect>
                <rect
                  stroke-width="2"
                  stroke="#282828"
                  fill="#DFDFDF"
                  rx="2"
                  height="4"
                  width="6"
                  y="84"
                  x="1"
                ></rect>
              </svg>
            </div>
            <div class="truckTires">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                class="tiresvg"
              >
                <circle
                  stroke-width="3"
                  stroke="#282828"
                  fill="#282828"
                  r="13.5"
                  cy="15"
                  cx="15"
                ></circle>
                <circle fill="#F5811E" r="7" cy="15" cx="15"></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                class="tiresvg"
              >
                <circle
                  stroke-width="3"
                  stroke="#282828"
                  fill="#282828"
                  r="13.5"
                  cy="15"
                  cx="15"
                ></circle>
                <circle fill="#F5811E" r="7" cy="15" cx="15"></circle>
              </svg>
            </div>
            <div class="road"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-[#1A1D21] text-[20px] uppercase">Birla tyres</h2>
          <div class="w-[50px]">
            <p className="text-primary text-[20px]">{counter}%</p>
          </div>
        </div>
      </div>
    </>
  );
}
