"use client";

import { useState, useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import GradualSpacing from "@/components/GradualSpacing";
import { cn } from "@/lib/utils";
import Tiger from "../../assets/images/tiger-mask3.png";
import Bot from "../../assets/images/bot.png";
import smallTiger from "../../assets/images/small-tiger.png";

export function MainButton() {
  const pathname = usePathname();
  return (
    <div
      className={
        pathname == "/"
          ? "multi-btn-sec"
          : "hidden md:flex flex-col gap-5 relative z-10"
      }
    >
      {  pathname != "/find-tyre" && (
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
    <div className="relative w-full flex md:hidden gap-2">
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
            <div className="container mx-auto flex flex-col justify-end md:justify-between h-full pt-8 xl:pt-5 pb-3 md:pb-6 xl:pb-[60px] z-1">
              <MainButton />
              <div className="relative">
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
  const handleClick = () => {
    const bottomValue = $(".chatBotMain").css("bottom");
    if (bottomValue == "0px") {
      $(".chatBotMain").css("bottom", "-100%");
    } else {
      $(".chatBotMain").css("bottom", "0");
    }
  };
  return (
    <>
      {data && (
        // <div className="sideNav-wrapper">
        //   {data.data.map(
        //     (item) =>
        //       item?.permalink && (
        //         <Link className="sideNav" href={item.permalink} key={item.id}>
        //           {item.icon?.data && (
        //             <Image
        //               src={getStrapiMedia(item.icon.data.attributes?.url)}
        //               width={item.icon.data.attributes?.width}
        //               height={item.icon.data.attributes?.height}
        //               alt={item.icon.data.attributes?.alternativeText}
        //             />
        //           )}
        //           {item?.name}
        //         </Link>
        //       )
        //   )}
        //   {/* <button className="flex gap-4 mb-2 justify-start items-center rounded-tl-[4px] rounded-bl-[4px] h-12 bg-primary w-[280px] px-[10px] left-[11px] text-white transition-all duration-500 relative" onClick={handleClick}>
        //       <Image
        //         src={Bot}
        //         className="w-6 h-6 object-cover"
        //       />
        //   </button> */}
        // </div>
        <div className="sideNav-wrapper">
          {data.data.map(
            (item) =>
              item?.permalink && (
                <Link
                  className="sideNav"
                  href={item.permalink}
                  key={item.id}
                  onClick={async (e) => {
                    e.preventDefault(); // Stop default navigation
                    try {
                      await navigator.clipboard.writeText(item?.name || "");
                      console.log("Copied:", item?.name);
                    } catch (err) {
                      console.error("Failed to copy!", err);
                    }
                    // Navigate after copying
                    window.location.href = item.permalink;
                  }}
                >
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
          {/* <button
            className="flex gap-4 mb-2 justify-start items-center rounded-tl-[4px] rounded-bl-[4px] h-12 bg-primary w-[280px] px-[10px] left-[11px] text-white transition-all duration-500 relative"
            onClick={handleClick}
          >
            <Image src={Bot} className="w-6 h-6 object-cover" />
          </button> */}
        </div>
      )}
      {/* <Chatbot /> */}
    </>
  );
}

export function PageEnd({ EndPageData, EndStaticImage, Background }) {
  const { push } = useRouter();
  const handleClick = (permalink) => {
    push(permalink);
  };
  return (
    <section
      className={cn(
        "relative hidden xl:flex pt-10 md:pt-[60px] 2xl:pt-[100px] overflow-hidden",
        EndPageData?.settings?.background ? "bg-[#F8F8F8]" : "bg-white"
      )}
    >
      {EndPageData && EndPageData?.image ? (
        <Image
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
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
        {/* <Image src={Tiger} alt="bottom-img" className="absolute right-[20%]" />s */}
        {EndPageData?.page ? (
          <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4 relative z-5 ">
            Next Page:
            <button
              className="text-[#F5811E] font-medium flex items-center gap-1 nav-hov flip-animate"
              onClick={() => handleClick(EndPageData.page.permalink)}
              prefetch={false}
              scroll={false}
            >
              <span data-hover={EndPageData.page.title}>
                {EndPageData.page.title}
              </span>
              {/* {EndPageData.page.title} */}
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
            </button>
          </p>
        ) : (
          EndPageData?.segment && (
            <p className="flex font-oak-sans font-bold text-2xl text-[#1A1D21] gap-1 pb-4 relative z-5">
              Next Page:
              <button
                className="text-[#F5811E] font-medium flex items-center gap-1 nav-hov flip-animate"
                onClick={() => handleClick(EndPageData.segment.permalink)}
                prefetch={false}
                scroll={false}
              >
                <span data-hover={EndPageData.segment.title}>
                  {EndPageData.segment.title}
                </span>
                {/* Products - {EndPageData.segment.title} */}
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
              </button>
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
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [status, setStatus] = useState("offline");
  const [bottom, setBottom] = useState(null);

  const scrollToBottom = () => {
    const chatContainer = document.getElementsByClassName("scrollTo")[0];
    if (chatContainer) {
      chatContainer.scrollTo({
        top: chatContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const response = async (message) => {
    try {
      const res = await axios.post(
        "https://birlatyres.viaconprojects.com:5005/webhooks/rest/webhook",
        { message }
      );

      if (Array.isArray(res.data)) {
        setTyping(true);
        setStatus("online");
        const botMessages = res.data.map((msg) => ({
          text: msg?.text || null,
          image: msg?.image || null,
          sender: "bot",
        }));
        const processMessages = async () => {
          for (const botMessage of botMessages) {
            let newMessages = [];
            newMessages.unshift(botMessage);
            if (newMessages[0].text) {
              const words = newMessages[0].text.split(" ");
              await new Promise((resolve) => {
                setTimeout(
                  () => {
                    setTyping(false);
                    newMessages[0].text = words[0];
                    setMessages((prevMessages) => [
                      ...prevMessages,
                      ...newMessages,
                    ]);
                    resolve();
                  },
                  newMessages[0].text.length < 1000
                    ? 5 * newMessages[0].text.length
                    : 5000
                );
              });
              for (let index = 1; index < words.length; index++) {
                await new Promise((resolve) => {
                  setTimeout(() => {
                    setMessages((prevMessages) => {
                      prevMessages[prevMessages.length - 1].text =
                        newMessages[0].text + " " + words[index];
                      return [...prevMessages];
                    });
                    resolve();
                  }, 90);
                });
              }
            } else {
              setMessages((prevMessages) => [...prevMessages, ...newMessages]);
            }
          }
        };
        processMessages();
        // botMessages.forEach((botMessage) => {
        //   let newMessages = [];
        //   newMessages.unshift(botMessage);
        //   if(newMessages[0].text){
        //     setTimeout(() => {
        //       setTyping(false);
        //       const words = newMessages[0].text.split(' ');
        //       newMessages[0].text = words[0];
        //       setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        //       words.forEach((word, index) => {
        //         if (index !== 0) {
        //           setTimeout(() => {
        //             setMessages((prevMessages) => {
        //               prevMessages[prevMessages.length - 1].text = newMessages[0].text + ' ' + word;
        //               return [...prevMessages];
        //             });
        //           }, 90 * index);
        //         }
        //       });
        //     }, newMessages[0].text.length < 1000 ? 5*newMessages[0].text.length : 5000);
        //   }else{
        //     setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        //   }
        // });
      } else {
        setTyping(false);
        setStatus("offline");
        console.error("Unexpected response format:", res.data);
      }
    } catch (error) {
      setStatus("offline");
      console.error("Error sending message to Rasa:", error);
    }
  };

  const sendMessage = async (message) => {
    if (!message) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: "user" },
    ]);
    response(message);
  };

  const getFormattedDate = () => {
    const currentTimeStamp = new Date();
    const day = currentTimeStamp.getDate();
    const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: true };
    const dateOptions = { day: "numeric", month: "short", year: "numeric" };
    const time = currentTimeStamp
      .toLocaleTimeString([], timeOptions)
      .replace(" ", "");
    const date = currentTimeStamp
      .toLocaleDateString([], dateOptions)
      .replace(day, "")
      .trim()
      .replace(" ", ", ");
    const dayWithSuffix = addOrdinalSuffix(day);
    return `${time}, ${dayWithSuffix} ${date}`;
  };

  const addOrdinalSuffix = (day) => {
    const remainder = day % 10;
    const exception = [11, 12, 13];
    switch (true) {
      case exception.includes(day):
        return `${day}th`;
      case remainder === 1:
        return `${day}st`;
      case remainder === 2:
        return `${day}nd`;
      case remainder === 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  useEffect(() => {
    if (messages.length == 0) {
      const chatBotElement = document.querySelector(".chatBotMain");
      const checkBottomValue = () => {
        const bottomValue = window.getComputedStyle(chatBotElement).bottom;
        setBottom(bottomValue);
      };
      checkBottomValue();
      const intervalId = setInterval(() => {
        checkBottomValue();
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    if (bottom == "0px" && messages.length == 0) {
      if (!currentTime) {
        setCurrentTime(getFormattedDate());
      }
      response("on initial start.");
    }
  }, [bottom]);

  const handleClick = () => {
    $(".chatBotMain").css("bottom", "-100%");
  };

  return (
    <div className="chatBotMain">
      <Image
        className="absolute z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        src={Tiger}
        alt="tiger"
      />
      <div className="chatBotHead">
        <div className="flex gap-4 items-center">
          <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border border-white bg-white">
            <Image
              className="w-10 h-10 object-contain"
              src={smallTiger}
              alt="smallTiger"
            />
          </div>
          <div className="chatBotTitle">
            <span className="text-[#ffffff] text-[16px] mb-[6px] leading-[1]">
              ChatBot
            </span>
            {typing ? (
              <span className="chatBotStatusOnline">Typing...</span>
            ) : status == "offline" ? (
              <span className="chatBotStatusOffline">offline</span>
            ) : (
              <span className="chatBotStatusOnline">online</span>
            )}
          </div>
        </div>
        <button
          onClick={handleClick}
          className="w-7 h-7 flex justify-center items-center rounded-full border border-white"
        >
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
      {currentTime && (
        <p className="text-[14px] text-[#88909F] text-center pt-3">
          Chat started on {currentTime}
        </p>
      )}
      <div className="flex w-full items-end">
        <div className="p-4 flex flex-col gap-5 w-full h-[400px] !overflow-y-auto scrollTo">
          {messages.map((msg, index) =>
            msg.sender === "user" ? (
              <span
                key={index}
                className="bg-primary p-[6px] text-[#FFFFFF] text-[15px] rounded-[6px] self-end w-fit"
              >
                {msg?.text && msg.text}
              </span>
            ) : (
              <div key={index} className="flex gap-3 items-start">
                <div className="min-w-11 h-11 flex justify-center items-center rounded-full bg-[#FFFFFF] border-2 border-primary">
                  <Image
                    className="w-8 h-8 object-contain"
                    src={smallTiger}
                    alt="smallTiger"
                  />
                </div>
                <span className="p-[6px] text-[#1A1D21] text-[15px] leading-[1.2] rounded-[6px] font-medium">
                  {msg?.text && msg.text}
                  {msg?.image && (
                    <Link
                      href={msg?.image}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {msg?.image}
                    </Link>
                  )}
                </span>
              </div>
            )
          )}
        </div>
      </div>
      <div className="chatInputWrapper flex gap-2 items-center relative px-5 py-4 border-t border-[#ACACAC] bg-[#FFFFFF]">
        <input
          placeholder="Ask your question..."
          className="w-full bg-[#FFFFFF] outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim()) {
              sendMessage(input);
              setInput("");
            }
          }}
        />
        <button
          className="w-fit"
          onClick={() => {
            sendMessage(input);
            setInput("");
          }}
        >
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
export function Popup() {
  const [productVisited, setProductVisited] = useState("not visited");
  const [storedValue, setStoredValue] = useState(null);
  const [isPopup, setIsPopup] = useState(false);
  const [lastData, setLastData] = useState("");

  console.log(productVisited);
  console.log(storedValue);

  const handlePopup = () => {
    setIsPopup(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("lastProductVisit", "visited");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("lastProduct");
      setStoredValue(value);
      value && setIsPopup(true);
      const visited = sessionStorage.getItem("lastProductVisit");
      visited && setProductVisited(visited);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          getStrapiMedia(`/api/products/${storedValue}`)
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const lastData = await response.json();
        setLastData(lastData);
      } catch (error) {
        setLastData("");
      }
    };

    fetchData();
  }, [storedValue]);

  return (
    <>
      {isPopup && lastData && productVisited == "not visited" && (
        <div className="w-full h-full justify-center items-center fixed top-0 z-[99] bg-[#101010] bg-opacity-75 !hidden">
          <div className="bg-white rounded-[4px] p-6 w-[90%] md:w-[50%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]">
            <h3 className="text-[22px] text-[#1A1D21] font-bold">
              Do you want to continue where you left?
            </h3>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handlePopup}
                className="px-4 py-2 border border-[#DEE1E5] rounded-[4px] text-[#727C8D] font-medium text-[14px]"
              >
                No, Skip
              </button>
              <Link
                href={lastData.permalink}
                className="px-4 py-2 border rounded-[4px] text-[#FFFFFF] font-medium text-[14px] bg-primary"
              >
                Yes, Continue
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function InnerBanner({ Title, Banner }) {
  return (
    <section className="top-banner-sec bg-[#F8F8F8]">
      <div className="relative">
        <span className="banner-overlay"></span>
        <div className="relative">
          <div className="w-full h-[30vh] md:h-[40vh] xl:h-[80vh] flex items-end">
            <div className="container mx-auto flex flex-col justify-end md:justify-between h-full pt-8 xl:pt-5 pb-3 md:pb-6 xl:pb-[60px] z-1">
              <MainButton />
              <div className="relative">
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



export function CatalogueDownload({ pageData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      data: { ...formData },
    };

    try {
const res = await fetch(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/product-catalogues`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }
);

      if (res.ok) {
        const catalogueUrl = getStrapiMedia(pageData?.catalogue?.url);
        if (catalogueUrl) {
          window.open(catalogueUrl, "_blank");
        } else {
          alert("Catalogue URL not found.");
        }

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
        });

        document.getElementById("catalogue_modal").close();
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <dialog id="catalogue_modal" className="modal">
      <div className="modal-box relative">
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("catalogue_modal").close()}
        >
          ✕
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {["name", "email", "phone", "company", "country"].map((field) => (
            <div key={field} className="form-row">
              <label className="contact-label">
                Enter Your {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                <span className="text-red-600 pl-[2px]">*</span>
              </label>
              <input
                className="contact-input"
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Enter Your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="primary-btn w-fit !px-4 md:!px-6 flip-animate-2"
            >
              <span data-hover="Submit and Download">
                Submit and Download
              </span>
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
