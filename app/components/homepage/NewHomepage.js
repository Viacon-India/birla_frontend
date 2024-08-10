import React from "react";
import Slider from "./slider";
import AboutSec from "./aboutsec";
import Innovation from "./innovation";
import Product from "./product";
import Sustainability from "./sustainability";
import Media from "./media";
import Dealer from "./dealer";
import NewAboutus from "../homepage/NewAbout"
import Link from "next/link";

export default function NewHomepage() {
  return (
    <>
      <Slider />
      <NewAboutus />
      <Innovation />
      <Product />
      <Dealer />
      <Sustainability />
      <Media />
    </>
  );
}
