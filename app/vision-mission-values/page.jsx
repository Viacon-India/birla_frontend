import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Hero from "./section/Hero";
import Content from "./section/Content";
import NextChapter from "./section/Next-Chapter";

export default function Leadership() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <NextChapter />
      <Footer />
    </>
  );
}
