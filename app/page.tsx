"use client"

import { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
// import Cursor from "../app/components/Cursor"



export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) return <Loader />;

  return (
    <>
      {/* <Cursor /> */}
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}

