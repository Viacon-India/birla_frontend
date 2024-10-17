"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import GradualSpacing from "@/components/GradualSpacing";
import { cn } from "@/lib/utils";
import Tiger from "../../assets/images/tiger-mask3.png";

export function MainButton() {
  const pathname = usePathname();
  return (
    <div
      class={
        pathname == "/"
          ? "multi-btn-sec"
          : "hidden md:flex flex-col gap-5 relative z-10"
      }
    >
      {pathname != "/find-tyre" && (
        <Link href="/find-tyre" className="primary-btn-1">
          Find a Tyre
        </Link>
      )}
      {pathname != "/find-dealer" && (
        <Link href="/find-dealer" className="primary-btn-2">
          Find a Dealer
        </Link>
      )}
    </div>
  );
}

export function SmallButton() {
  const pathname = usePathname();
  return (
    <div class="relative w-full flex md:hidden gap-2 p-2">
      {pathname != "/find-tyre" && (
        <Link
          href="/find-tyre"
          className="primary-btn-1 !w-[50%] !justify-center"
        >
          Find a Tyre
        </Link>
      )}
      {pathname != "/find-dealer" && (
        <Link
          href="/find-dealer"
          className="primary-btn-2 !w-[50%] !justify-center"
        >
          Find a Dealer
        </Link>
      )}
    </div>
  );
}

export function PageBanner({ Title, Banner, StaticBanner, extension }) {
  return (
    <section className="top-banner-sec bg-[#F8F8F8]">
      <div className="relative">
        <span className="banner-overlay"></span>
        <Float />
        <div className="relative">
          <div className="w-full h-[40vh] xl:h-[80vh] flex items-end">
            <div class="container mx-auto flex flex-col justify-end md:justify-between h-full pt-8 xl:pt-5 pb-3 md:pb-6 xl:pb-[60px]">
              <MainButton />
              <div className="relative z-10">
                <GradualSpacing
                  className="top-banner-sec-heading"
                  text={Title}
                />
              </div>
            </div>
          </div>
          {Banner?.url ? (
            Banner.ext == ".mp4" ? (
              <video
                className="absolute top-0 w-full h-full object-cover"
                loop
                autoPlay
                muted
              >
                <source src={getStrapiMedia(Banner.url)} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={getStrapiMedia(Banner.url)}
                width={Banner.width}
                height={Banner.height}
                alt={
                  Banner?.alternativeText
                    ? Banner.alternativeText
                    : "Hero-Banner"
                }
                className="absolute top-0 w-full h-full object-cover"
              />
            )
          ) : extension == ".mp4" ? (
            <video
              className="absolute top-0 w-full h-full object-cover"
              loop
              autoPlay
              muted
            >
              <source src={StaticBanner} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={StaticBanner}
              alt="Hero-Banner"
              className="absolute top-0 w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      <SmallButton />
    </section>
  );
}

export function Float() {
  return (
    <div className="sideNav-wrapper">
      <Link className="sideNav" href="/find-tyre">
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3289_339)">
            <path
              d="M9 0C4.05176 0 0 4.05244 0 9C0 13.9482 4.05244 18 9 18C13.9482 18 18 13.9476 18 9C18 4.05176 13.9476 0 9 0ZM9 16.9453C4.61893 16.9453 1.05469 13.3811 1.05469 9C1.05469 4.61893 4.61893 1.05469 9 1.05469C13.3811 1.05469 16.9453 4.61893 16.9453 9C16.9453 13.3811 13.3811 16.9453 9 16.9453Z"
              fill="white"
            />
            <path
              d="M9 3.41016C5.91367 3.41016 3.41016 5.92191 3.41016 9C3.41016 12.0931 5.93015 14.5898 9 14.5898C12.0705 14.5898 14.5898 12.0921 14.5898 9C14.5898 5.92397 12.0883 3.41016 9 3.41016ZM9 10.1602C8.36032 10.1602 7.83984 9.63968 7.83984 9C7.83984 8.36032 8.36032 7.83984 9 7.83984C9.63968 7.83984 10.1602 8.36032 10.1602 9C10.1602 9.63968 9.63968 10.1602 9 10.1602ZM4.46484 9C4.46484 8.36252 4.59737 7.75552 4.83577 7.2047L6.87373 8.38133C6.81647 8.57785 6.78516 8.78522 6.78516 9C6.78516 9.21478 6.81647 9.42215 6.87373 9.61867L4.83577 10.7953C4.59737 10.2445 4.46484 9.63748 4.46484 9ZM11.1263 8.38133L13.1642 7.2047C13.4026 7.75552 13.5352 8.36252 13.5352 9C13.5352 9.63748 13.4026 10.2445 13.1642 10.7953L11.1263 9.61867C11.1835 9.42215 11.2148 9.21478 11.2148 9C11.2148 8.78522 11.1835 8.57785 11.1263 8.38133ZM12.6357 6.29201L10.5978 7.46864C10.3112 7.16968 9.94221 6.95091 9.52734 6.84915V4.49574C10.7964 4.64337 11.9074 5.3167 12.6357 6.29201ZM8.47266 4.49574V6.84915C8.05779 6.95091 7.68878 7.16968 7.40218 7.46864L5.36435 6.29201C6.09261 5.3167 7.2036 4.64337 8.47266 4.49574ZM5.36435 11.708L7.40218 10.5314C7.68878 10.8303 8.05779 11.0491 8.47266 11.1508V13.5043C7.2036 13.3566 6.09261 12.6833 5.36435 11.708ZM9.52734 13.5043V11.1508C9.94221 11.0491 10.3112 10.8303 10.5978 10.5314L12.6357 11.708C11.9074 12.6833 10.7964 13.3566 9.52734 13.5043Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3289_339">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Find a Tyre
      </Link>
      <Link className="sideNav" href="/dealer-locator">
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 10.9053V16.25C3.75 16.4158 3.81585 16.5747 3.93306 16.6919C4.05027 16.8092 4.20924 16.875 4.375 16.875H15.625C15.7908 16.875 15.9497 16.8092 16.0669 16.6919C16.1842 16.5747 16.25 16.4158 16.25 16.25V10.9054M17.5 7.5V8.75C17.5 9.41304 17.2366 10.0489 16.7678 10.5178C16.2989 10.9866 15.663 11.25 15 11.25C14.337 11.25 13.7011 10.9866 13.2322 10.5178C12.7634 10.0489 12.5 9.41304 12.5 8.75M17.5 7.5L16.3795 3.5783C16.3422 3.44771 16.2634 3.33282 16.1549 3.25103C16.0465 3.16924 15.9144 3.125 15.7786 3.125H4.22144C4.08562 3.125 3.9535 3.16924 3.84507 3.25103C3.73664 3.33282 3.6578 3.44771 3.62049 3.5783L2.5 7.5M17.5 7.5H2.5M12.5 8.75V7.5M12.5 8.75C12.5 9.41304 12.2366 10.0489 11.7678 10.5178C11.2989 10.9866 10.663 11.25 10 11.25C9.33696 11.25 8.70107 10.9866 8.23223 10.5178C7.76339 10.0489 7.5 9.41304 7.5 8.75M7.5 8.75V7.5M7.5 8.75C7.5 9.41304 7.23661 10.0489 6.76777 10.5178C6.29893 10.9866 5.66304 11.25 5 11.25C4.33696 11.25 3.70107 10.9866 3.23223 10.5178C2.76339 10.0489 2.5 9.41304 2.5 8.75V7.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Find a Dealer
      </Link>
      <Link className="sideNav" href="mailto:ho@birlatyre.com">
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1.375H16.5M1.5 1.375V12C1.5 12.1658 1.56585 12.3247 1.68306 12.4419C1.80027 12.5592 1.95924 12.625 2.125 12.625H15.875C16.0408 12.625 16.1997 12.5592 16.3169 12.4419C16.4342 12.3247 16.5 12.1658 16.5 12V1.375M1.5 1.375L9 8.25L16.5 1.375"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        corporate@birlatyre.com
      </Link>
      <Link className="sideNav" href="tel:033-22624354">
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4545 1.12502C11.514 1.40997 12.4801 1.96831 13.2559 2.74413C14.0317 3.51995 14.5901 4.48601 14.875 5.54553M9.80728 3.54043C10.443 3.7114 11.0226 4.04641 11.4881 4.5119C11.9536 4.97739 12.2886 5.55702 12.4596 6.19274M5.22471 7.75121C5.87302 9.07663 6.94739 10.1461 8.27575 10.7884C8.37294 10.8344 8.48045 10.8544 8.58769 10.8463C8.69493 10.8382 8.79822 10.8023 8.88737 10.7421L10.8433 9.43787C10.9298 9.38019 11.0293 9.345 11.1328 9.33548C11.2364 9.32597 11.3407 9.34244 11.4362 9.3834L15.0954 10.9516C15.2197 11.0044 15.3234 11.0962 15.3911 11.2131C15.4587 11.33 15.4865 11.4657 15.4702 11.5998C15.3546 12.5048 14.913 13.3366 14.2282 13.9395C13.5434 14.5424 12.6624 14.875 11.75 14.875C8.93207 14.875 6.22956 13.7556 4.23699 11.763C2.24442 9.77045 1.125 7.06794 1.125 4.25002C1.12505 3.33765 1.45765 2.45659 2.06053 1.77179C2.66341 1.087 3.49523 0.645437 4.40023 0.529781C4.53431 0.513556 4.67002 0.541343 4.78693 0.608955C4.90384 0.676567 4.99561 0.780341 5.04841 0.904643L6.61798 4.56698C6.65858 4.66171 6.67512 4.765 6.66614 4.86767C6.65715 4.97034 6.62291 5.0692 6.56647 5.15543L5.26676 7.14135C5.2076 7.23069 5.17263 7.33384 5.16526 7.44073C5.15789 7.54762 5.17837 7.6546 5.22471 7.75121Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        91-XXXXXXXXXX
      </Link>
      {/* <Link className="sideNav" href="tel:033-22624354">
        <svg
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.54912 11.8281C0.617299 10.2572 0.290965 8.40025 0.631402 6.60583C0.971838 4.81142 1.95563 3.20301 3.39803 2.08261C4.84044 0.962221 6.64224 0.406923 8.46509 0.520992C10.2879 0.635061 12.0065 1.41065 13.2979 2.70212C14.5894 3.99359 15.365 5.7121 15.4791 7.53496C15.5932 9.35781 15.0379 11.1596 13.9175 12.602C12.7971 14.0444 11.1887 15.0282 9.39429 15.3687C7.59988 15.7091 5.74291 15.3828 4.17207 14.451L1.58174 15.191C1.47456 15.2216 1.36115 15.223 1.25326 15.1951C1.14536 15.1671 1.0469 15.1108 0.968089 15.032C0.889274 14.9532 0.83297 14.8547 0.805012 14.7468C0.777054 14.6389 0.778458 14.5255 0.809079 14.4184L1.54912 11.8281Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.88386 12.3751C9.06161 12.3762 8.2472 12.2151 7.48731 11.901C6.72742 11.5869 6.03699 11.1259 5.45557 10.5445C4.87414 9.96307 4.41316 9.27263 4.09904 8.51274C3.78491 7.75285 3.62382 6.93845 3.62499 6.11619C3.62685 5.53742 3.8582 4.98302 4.26828 4.57459C4.67837 4.16617 5.23371 3.93708 5.81248 3.93757C5.90741 3.93757 6.00066 3.96267 6.08276 4.01032C6.16487 4.05797 6.23292 4.12647 6.28002 4.2089L7.19339 5.80728C7.24847 5.90367 7.27688 6.013 7.2757 6.12402C7.27452 6.23503 7.24379 6.34373 7.18667 6.43893L6.45315 7.66146C6.83053 8.49894 7.50111 9.16953 8.33859 9.54691L9.56113 8.81339C9.65633 8.75627 9.76502 8.72554 9.87604 8.72436C9.98705 8.72318 10.0964 8.75159 10.1928 8.80668L11.7912 9.72003C11.8736 9.76713 11.9421 9.83518 11.9897 9.91729C12.0374 9.9994 12.0625 10.0926 12.0625 10.1876C12.0608 10.7657 11.831 11.3198 11.4231 11.7294C11.0151 12.139 10.462 12.3711 9.88386 12.3751Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        91-XXXXXXXXXX
      </Link> */}
    </div>
  );
}

export function PageEnd({ EndPageData, EndStaticImage, Background }) {
  return (
    <section
      className={cn(
        "relative hidden xl:flex pt-10 md:pt-[60px] 2xl:pt-[100px] overflow-hidden",
        EndPageData?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      {EndPageData && EndPageData?.image ? (
        <Image
          src={getStrapiMedia(EndPageData.image.url)}
          width={EndPageData.image.width}
          height={EndPageData.image.height}
          alt={
            EndPageData.image?.alternativeText
              ? EndPageData.image.alternativeText
              : "Hero-Banner"
          }
          className="absolute left-0 h-[200px] w-[60%]"
        />
      ) : (
        <Image
          src={EndStaticImage}
          alt="bottom-img"
          className="absolute left-0 h-[200px] w-[60%]"
        />
      )}
      <div className="container mx-auto relative h-[200px] flex items-end justify-end">
        <Image src={Tiger} alt="bottom-img" className="absolute right-[20%]" />
        {EndPageData?.page ? (
          <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4 relative z-5">
            Next Page:
            <Link
              className="text-[#F5811E] font-medium flex items-center gap-1"
              href={EndPageData.page.permalink}
            >
              {EndPageData.page.title}
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                  stroke="#F5811E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </p>
        ) : (
          EndPageData?.segment && (
            <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4 relative z-5">
              Next Page:
              <Link
                className="text-[#F5811E] font-medium flex items-center gap-1"
                href={EndPageData.segment.permalink}
              >
                Products - {EndPageData.segment.title}
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                    stroke="#F5811E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </p>
          )
        )}
      </div>
    </section>
  );
}
