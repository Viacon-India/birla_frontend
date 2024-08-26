import React from "react";
// import Slider from "./slider";
import AboutSec from "./aboutsec";
import Innovation from "./innovation";
import NewProduct from "./newProduct";
import Sustainability from "./sustainability";
import Media from "./media";
import Dealer from "./dealer";
import NewAboutUs from "../homepage/NewAbout"
import Link from "next/link";
import Hero from "../../components/homepage/Hero"
import Faq from "../../components/homepage/faq"

export default function NewHomepage() {
  return (
    <>
      {/* <Slider /> */}
      <Hero />
      <NewAboutUs />
      <Innovation />
      <NewProduct />
      <Dealer />
      <Sustainability />
      <Media />
      <Faq />
    </>
  );
}
