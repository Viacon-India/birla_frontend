"use client"

import { useState,Suspense, useEffect } from "react";
import Link from 'next/link';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import Image from "next/image";
import loadGif from "./assets/images/loading.gif";




export default function Home() {
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
      <Homepage />
      </Suspense>
      <Footer />
    </>
  );
}

