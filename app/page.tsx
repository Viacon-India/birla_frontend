// "use client"

import { Suspense } from "react";
import Link from 'next/link';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import Image from "next/image";
import loadGif from "./assets/images/loading.gif";
import { getStrapiMedia } from "@/lib/utils";

let pageData:any = null;

export async function generateMetadata() {
  const apiUrl = getStrapiMedia("/api/home");
  if (!apiUrl) {
    throw new Error("API URL is null");
  }
  const res = await fetch(apiUrl);
  pageData = await res.json();

  const attrs = pageData?.data?.attributes || {};

  return {
    title: attrs.seo_title || attrs.title || "Default Title",
    description: attrs.seo_description || "Default Description",
    keywords: attrs.seo_keywords || "",
    openGraph: {
      title: attrs.seo_title,
      description: attrs.seo_description,
      url: process.env.DOMAIN_NAME + (attrs.permalink || ""),
      siteName: "Birla Tyres",
      images: attrs.seo_image?.data
        ? [
            {
              url: getStrapiMedia(attrs.seo_image.data.attributes?.url),
              width: attrs.seo_image.data.attributes?.width,
              height: attrs.seo_image.data.attributes?.height,
              type: attrs.seo_image.data.attributes?.mime,
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: attrs.seo_title,
      title: attrs.seo_title,
      description: attrs.seo_description,
      images: attrs.seo_image?.data
        ? [getStrapiMedia(attrs.seo_image.data.attributes?.url)]
        : [],
    },
    alternates: {
      canonical: process.env.DOMAIN_NAME + (attrs.permalink || ""),
    },
  };
}

export default async function Home() {
  // const apiUrl = getStrapiMedia("/api/home");
  // if (!apiUrl) {
  //   throw new Error("API URL is null");
  // }
  // const res = await fetch(apiUrl);
  // const pageData = await res.json();

  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) return <Loader />;

  return (
    <>
      {/* <Cursor /> */}
      <Navbar />
            <Suspense
              fallback={
                <div>
                  <Image className="w-[40px] h-[40px]" src={loadGif} alt="loadigif" />
                </div>
              }
            >
      <Homepage pageData={pageData} />
      </Suspense>
      <Footer />
    </>
  );
}

