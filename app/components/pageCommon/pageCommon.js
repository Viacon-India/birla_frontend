"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import GradualSpacing from "@/components/GradualSpacing";
import { cn } from "@/lib/utils";
import Tiger from "../../assets/images/tiger-mask3.png";
import Bot from "../../assets/images/bot.png"

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
      {/* {pathname != "/find-dealer" && (
        <Link href="/find-dealer" className="primary-btn-2">
          Find a Dealer
        </Link>
      )} */}
    </div>
  );
}

export function SmallButton() {
  const pathname = usePathname();
  return (
    <div class="relative w-full flex md:hidden gap-2">
      {/* {pathname != "/find-tyre" && (
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
      )} */}
    </div>
  );
}

export function PageBanner({ Title, Banner, StaticBanner, extension }) {
  return (
    <section className="top-banner-sec bg-[#F8F8F8]">
      <div className="relative">
        <span className="banner-overlay"></span>
        <div className="relative">
          <div className="w-full h-[30vh] md:h-[40vh] xl:h-[80vh] flex items-end">
            <div class="container mx-auto flex flex-col justify-end md:justify-between h-full pt-8 xl:pt-5 pb-3 md:pb-6 xl:pb-[60px]">
              <MainButton />
              <div className="relative z-10">
                <GradualSpacing
                  className="top-banner-sec-heading hidden md:flex"
                  text={Title}
                />
                <h1 className="top-banner-sec-heading md:hidden">{Title}</h1>
              </div>
            </div>
          </div>
          {Banner?.url &&
            (Banner.ext == ".mp4" ? (
              <video
                className="absolute top-0 w-full h-full object-cover"
                loop
                autoPlay
                muted
                playsInline
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
                className="absolute top-0 w-full h-full object-fill"
              />
            ))}
        </div>
      </div>
      <SmallButton />
    </section>
  );
}

export function Float(data) {
  return (
    data && (
      <div className="sideNav-wrapper">
        {data.data.map(
          (item) =>
            item?.permalink && (
              <Link className="sideNav" href={item.permalink} key={item.id}>
                {item.icon?.data && (
                  <Image
                    src={getStrapiMedia(item.icon.data.attributes?.url)}
                    width={item.icon.data.attributes?.width}
                    height={item.icon.data.attributes?.height}
                    alt={item.icon.data.attributes?.alternativeText}
                  />
                )}
                {item?.name}
              </Link>
            )
        )}
        <button className="sideNav">
            <Image
              src={Bot}
              className="w-6 h-6 object-cover"
            />ChatBot
        </button>
      </div>
    )
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

export function SingleTypeSeo({ pageData, page = "page" }) {
  const domain = process.env.DOMAIN_NAME;
  let schema = {};
  if (page == "page") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: pageData.data?.attributes?.title,
      url: domain + pageData.data?.attributes?.permalink,
      logo: getStrapiMedia(pageData?.seo_image?.url),
      description: pageData.seo_description,
    };
  }
  if (page == "website") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageData.data?.attributes?.title,
      url: domain,
      description: pageData.seo_description,
    };
  }
  return (
    <Helmet>
      {pageData.data?.attributes?.title && (
        <title>{pageData.data.attributes.title}</title>
      )}
      {pageData.data?.attributes?.seo_description && (
        <meta
          name="description"
          content={pageData.data.attributes.seo_description}
        />
      )}
      {pageData.data?.attributes?.seo_keywords && (
        <meta name="keywords" content={pageData.data.attributes.seo_keywords} />
      )}
      {page && <meta property="og:type" content={page} />}
      <meta property="og:site_name" content="Birla Tyres" />
      {pageData.data?.attributes?.seo_title && (
        <meta
          property="og:title"
          content={pageData.data.attributes.seo_title}
        />
      )}
      {pageData.data?.attributes?.seo_description && (
        <meta
          property="og:description"
          content={pageData.data.attributes.seo_description}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image"
          content={getStrapiMedia(
            pageData.data.attributes.seo_image.data.attributes?.url
          )}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image:width"
          content={pageData.data.attributes.seo_image.data.attributes?.width}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image:height"
          content={pageData.data.attributes.seo_image.data.attributes?.height}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          property="og:image:type"
          content={pageData.data.attributes.seo_image.data.attributes?.mime}
        />
      )}
      {pageData.data?.attributes?.permalink && (
        <meta
          property="og:url"
          content={domain + pageData.data.attributes.permalink}
        />
      )}
      {pageData.data?.attributes?.permalink && (
        <link
          rel="canonical"
          href={domain + pageData.data.attributes.permalink}
        />
      )}
      {pageData.data?.attributes?.seo_title && (
        <meta
          name="twitter:card"
          content={pageData.data.attributes.seo_title}
        />
      )}
      {pageData.data?.attributes?.seo_title && (
        <meta
          name="twitter:title"
          content={pageData.data.attributes.seo_title}
        />
      )}
      {pageData.data?.attributes?.seo_description && (
        <meta
          name="twitter:description"
          content={pageData.data.attributes.seo_description}
        />
      )}
      {pageData.data?.attributes.seo_image?.data && (
        <meta
          name="twitter:image"
          content={getStrapiMedia(
            pageData.data.attributes.seo_image.data.attributes?.url
          )}
        />
      )}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function CollectionTypeSeo({ page, pageData }) {
  const domain = process.env.DOMAIN_NAME;
  let schema = {};
  if (page == "product") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: pageData?.title,
      image: getStrapiMedia(pageData?.seo_image?.url),
      description: pageData?.seo_description,
    };
  }
  if (page == "category") {
    schema = {
      "@context": "https://schema.org",
      "@type": "ProductCollection",
      name: pageData?.title,
      description: pageData?.seo_description,
      url: domain + pageData?.permalink,
      itemListElement: pageData?.products.map((product) => ({
        "@type": "Product",
        name: product?.title,
        url: product?.permalink,
        image: getStrapiMedia(product?.seo_image?.url),
        description: pageData?.seo_description,
      })),
    };
  }
  if (page == "page") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: pageData.title,
      url: domain + pageData.permalink,
      logo: getStrapiMedia(pageData?.seo_image?.url),
      description: pageData.seo_description,
    };
  }
  return (
    <Helmet>
      {pageData?.title && <title>{pageData.title}</title>}
      {pageData?.seo_description && (
        <meta name="description" content={pageData.seo_description} />
      )}
      {pageData?.seo_keywords && (
        <meta name="keywords" content={pageData.seo_keywords} />
      )}
      {page && (
        <meta
          property="og:type"
          content={page != "ContactUs" ? page : "page"}
        />
      )}
      <meta property="og:site_name" content="Birla Tyres" />
      {pageData?.seo_title && (
        <meta property="og:title" content={pageData.seo_title} />
      )}
      {pageData?.seo_description && (
        <meta property="og:description" content={pageData.seo_description} />
      )}
      {pageData?.seo_image && (
        <meta
          property="og:image"
          content={getStrapiMedia(pageData.seo_image?.url)}
        />
      )}
      {pageData?.seo_image && (
        <meta property="og:image:width" content={pageData.seo_image?.width} />
      )}
      {pageData?.seo_image && (
        <meta property="og:image:height" content={pageData.seo_image?.height} />
      )}
      {pageData?.seo_image && (
        <meta property="og:image:type" content={pageData.seo_image?.mime} />
      )}
      {pageData?.permalink && (
        <meta property="og:url" content={domain + pageData.permalink} />
      )}
      {pageData?.permalink && (
        <link rel="canonical" href={domain + pageData.permalink} />
      )}
      {pageData?.seo_title && (
        <meta name="twitter:card" content={pageData.seo_title} />
      )}
      {pageData?.seo_title && (
        <meta name="twitter:title" content={pageData.seo_title} />
      )}
      {pageData?.seo_description && (
        <meta name="twitter:description" content={pageData.seo_description} />
      )}
      {pageData?.seo_image && (
        <meta
          name="twitter:image"
          content={getStrapiMedia(pageData.seo_image?.url)}
        />
      )}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function Chatbot() {
  const [isBottom, setIsBottom] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState('offline');
 
  const sendMessage = async (message) => {
    if(!message) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
    ]);
 
    try {
      const response = await axios.post(
        "http://birlatyres.viaconprojects.com:5005/webhooks/rest/webhook",
        {
          message: message,
        }
      );
      if (Array.isArray(response.data)) {
        setStatus('online');
        const botMessages = response.data.map((msg) => ({
          text: msg?.text || null,
          image: msg?.image || null,
          sender: "bot",
        }));
        setMessages((prevMessages) => [...prevMessages, ...botMessages]);
      } else {
        setStatus('offline');
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      setStatus('offline');
      console.error("Error sending message to Rasa:", error);
    }
  };
 
  useEffect(() => {
    sendMessage('who are you?');
  }, []);
 

  const handleClick = () => {
    setIsBottom(!isBottom);
  };

  return (
    <div className={`chatBotMain ${
      isBottom ? "!bottom-[-100%]" : ""
    }`}>
      <div class="chatBotHead">
        <div class="flex gap-4 items-center">
          <div class="w-11 h-11 flex justify-center items-center rounded-full border border-white">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.1562 12.9335V8.74993C27.1562 8.00401 26.8599 7.28864 26.3325 6.76119C25.805 6.23375 25.0897 5.93743 24.3438 5.93743H15.9062V4.09243C16.3352 3.70712 16.6094 3.15306 16.6094 2.53149C16.6094 1.97205 16.3871 1.43553 15.9916 1.03994C15.596 0.644356 15.0594 0.422119 14.5 0.422119C13.9406 0.422119 13.404 0.644356 13.0084 1.03994C12.6129 1.43553 12.3906 1.97205 12.3906 2.53149C12.3906 3.15306 12.6648 3.70712 13.0938 4.09243V5.93743H4.65625C3.91033 5.93743 3.19496 6.23375 2.66751 6.76119C2.14007 7.28864 1.84375 8.00401 1.84375 8.74993V12.9659L1.7425 12.9729C1.38797 12.9982 1.05619 13.1569 0.814023 13.417C0.571859 13.6772 0.437313 14.0195 0.4375 14.3749V17.1874C0.4375 17.5604 0.585658 17.9181 0.849381 18.1818C1.1131 18.4455 1.47079 18.5937 1.84375 18.5937V25.6249C1.84375 26.3709 2.14007 27.0862 2.66751 27.6137C3.19496 28.1411 3.91033 28.4374 4.65625 28.4374H24.3438C25.0897 28.4374 25.805 28.1411 26.3325 27.6137C26.8599 27.0862 27.1562 26.3709 27.1562 25.6249V18.5937C27.5292 18.5937 27.8869 18.4455 28.1506 18.1818C28.4143 17.9181 28.5625 17.5604 28.5625 17.1874V14.4621C28.5788 14.2439 28.5441 14.0248 28.4612 13.8223C28.1772 13.136 27.5683 12.9715 27.1562 12.9335ZM7.46875 14.3749C7.46875 12.8224 8.41375 11.5624 9.57812 11.5624C10.7425 11.5624 11.6875 12.8224 11.6875 14.3749C11.6875 15.9274 10.7425 17.1874 9.57812 17.1874C8.41375 17.1874 7.46875 15.9274 7.46875 14.3749ZM20.1222 22.8124C18.7145 22.8082 8.875 22.8124 8.875 22.8124V19.9999C8.875 19.9999 18.7202 19.9971 20.1278 19.9999L20.1222 22.8124ZM19.4219 17.1874C18.2575 17.1874 17.3125 15.9274 17.3125 14.3749C17.3125 12.8224 18.2575 11.5624 19.4219 11.5624C20.5863 11.5624 21.5312 12.8224 21.5312 14.3749C21.5312 15.9274 20.5863 17.1874 19.4219 17.1874Z"
                fill="#ECF4FF"
              />
            </svg>
          </div>
          <div class="chatBotTitle">
            <span className="text-[#ffffff] text-[16px] mb-[6px] leading-[1]">
              ChatBot
            </span>
            {status == 'offline' ? <span className="chatBotStatusOffline">offline</span> : <span className="chatBotStatusOnline">online</span>}
          </div>
        </div>
        <button onClick={handleClick} class="w-7 h-7 flex justify-center items-center rounded-full border border-white">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.369 0.234881C1.05582 -0.0782935 0.548063 -0.0782935 0.234881 0.234881C-0.0782936 0.548063 -0.0782936 1.05582 0.234881 1.369L4.86587 5.99997L0.234929 10.6309C-0.0782454 10.9441 -0.0782454 11.4519 0.234929 11.765C0.548111 12.0782 1.05587 12.0782 1.36904 11.765L5.99997 7.13408L10.6309 11.765C10.9441 12.0782 11.4519 12.0782 11.7651 11.765C12.0782 11.4519 12.0782 10.9441 11.7651 10.6309L7.13408 5.99997L11.7651 1.369C12.0783 1.05582 12.0783 0.548063 11.7651 0.234881C11.452 -0.0782935 10.9442 -0.0782935 10.631 0.234881L5.99997 4.86587L1.369 0.234881Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <p className="text-[14px] text-[#88909F] text-center pt-3">
        Chat started on 8:25PM, 5th Dec, 2024
      </p>
      <div class="flex w-full items-end">
        <div class="p-4 flex flex-col gap-5 w-full h-[400px] !overflow-y-auto">
          {messages.map((msg, index) => ( 
            msg.sender === 'user' ? (
              <span key={index} className="bg-primary p-[6px] text-[#FFFFFF] text-[15px] rounded-[6px] self-end w-fit">
                {msg?.text && msg.text}
              </span>
            ) : (
              <div key={index} class="flex gap-5 items-center">
                <div class="w-11 h-11 flex justify-center items-center rounded-full bg-[#DCDCEB]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.9993 12.6334V8.66675C25.9993 7.95951 25.7184 7.28123 25.2183 6.78113C24.7182 6.28104 24.0399 6.00009 23.3327 6.00009H15.3327V4.25075C15.7393 3.88542 15.9993 3.36009 15.9993 2.77075C15.9993 2.24032 15.7886 1.73161 15.4136 1.35654C15.0385 0.981466 14.5298 0.770752 13.9993 0.770752C13.4689 0.770752 12.9602 0.981466 12.5851 1.35654C12.2101 1.73161 11.9993 2.24032 11.9993 2.77075C11.9993 3.36009 12.2593 3.88542 12.666 4.25075V6.00009H4.66602C3.95877 6.00009 3.28049 6.28104 2.7804 6.78113C2.2803 7.28123 1.99935 7.95951 1.99935 8.66675V12.6641L1.90335 12.6708C1.5672 12.6947 1.25262 12.8452 1.02302 13.0919C0.793408 13.3385 0.665838 13.6631 0.666016 14.0001V16.6668C0.666016 17.0204 0.806492 17.3595 1.05654 17.6096C1.30659 17.8596 1.64573 18.0001 1.99935 18.0001V24.6668C1.99935 25.374 2.2803 26.0523 2.7804 26.5524C3.28049 27.0525 3.95877 27.3334 4.66602 27.3334H23.3327C24.0399 27.3334 24.7182 27.0525 25.2183 26.5524C25.7184 26.0523 25.9993 25.374 25.9993 24.6668V18.0001C26.353 18.0001 26.6921 17.8596 26.9422 17.6096C27.1922 17.3595 27.3327 17.0204 27.3327 16.6668V14.0828C27.3481 13.8758 27.3153 13.6681 27.2367 13.4761C26.9674 12.8254 26.39 12.6694 25.9993 12.6334ZM7.33268 14.0001C7.33268 12.5281 8.22868 11.3334 9.33268 11.3334C10.4367 11.3334 11.3327 12.5281 11.3327 14.0001C11.3327 15.4721 10.4367 16.6668 9.33268 16.6668C8.22868 16.6668 7.33268 15.4721 7.33268 14.0001ZM19.33 22.0001C17.9953 21.9961 8.66602 22.0001 8.66602 22.0001V19.3334C8.66602 19.3334 18.0007 19.3308 19.3354 19.3334L19.33 22.0001ZM18.666 16.6668C17.562 16.6668 16.666 15.4721 16.666 14.0001C16.666 12.5281 17.562 11.3334 18.666 11.3334C19.77 11.3334 20.666 12.5281 20.666 14.0001C20.666 15.4721 19.77 16.6668 18.666 16.6668Z"
                      fill="#2E3192"
                    />
                  </svg>
                </div>
                <span className="bg-[#E3E3E3] p-[6px] text-[#1A1D21] text-[15px] rounded-[6px]">
                  {msg?.text && msg.text}
                  {msg?.image &&
                    <Link href={msg?.image} rel="noopener noreferrer" target="_blank">
                      {msg?.image}
                    </Link>
                  }
                </span>
              </div>
            )
          ))}
        </div>
      </div>
      <div class="chatInputWrapper flex gap-2 items-center relative px-5 py-4 border-t border-[#ACACAC]">
        <input placeholder="Ask your question..." className="w-full bg-[#FFFFFF] outline-none" type="text" value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && input.trim()) {
              sendMessage(input);
              setInput('');
            }
          }}/>
        <button className="w-fit" onClick={() => {sendMessage(input); setInput('');}}>
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8379 8.43236L3.11354 9.48222C3.02474 9.49431 2.9414 9.52526 2.87191 9.57195C2.80242 9.61865 2.74923 9.67945 2.71769 9.74824L0.0543633 15.5689C-0.19997 16.1043 0.486115 16.6146 1.1158 16.3569L19.5755 8.82804C19.7031 8.77588 19.8103 8.69579 19.8853 8.59673C19.9603 8.49767 20 8.38356 20 8.26714C20 8.15073 19.9603 8.03661 19.8853 7.93755C19.8103 7.83849 19.7031 7.7584 19.5755 7.70624L1.1158 0.177364C0.486115 -0.0794539 -0.19997 0.430836 0.0543633 0.965387L2.71871 6.78604C2.75025 6.85483 2.80345 6.91563 2.87294 6.96233C2.94243 7.00902 3.02576 7.03997 3.11457 7.05206L10.8389 8.10192C10.8871 8.1082 10.931 8.12828 10.9626 8.15856C10.9943 8.18884 11.0117 8.22734 11.0117 8.26714C11.0117 8.30694 10.9943 8.34544 10.9626 8.37572C10.931 8.406 10.8871 8.42608 10.8389 8.43236H10.8379Z"
              fill="#999999"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
