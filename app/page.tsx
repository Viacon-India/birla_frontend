"use client"

import { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/homepage";
import Footer from "./components/footer/footer";
import Loader from "./components/loader"
import Cursor from "../app/components/Cursor"
// import ScrollerAnimation from "./components/homepage/ScrollerAnimation"


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
    <main>
      <Cursor />
      <Navbar />
      <Homepage />
      <Footer />
      {/* <ScrollerAnimation /> */}
    </main>
  );
}

