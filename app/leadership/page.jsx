import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Hero from "./section/Hero";
import Directors from "./section/Directors";
import NextChapter from "./section/Next-Chapter";

export default function Leadership() {
  return (
    <>
      <Navbar />
      <Hero />
      <Directors />
      <NextChapter />
      <Footer />
    </>
  );
}
