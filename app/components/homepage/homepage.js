import React from "react";
import Slider from "./slider";
import AboutSec from "./aboutsec";
import Innovation from "./innovation";
import Product from "./product";
import Sustainability from "./sustainability";
import Media from "./media";
import Dealer from "./dealer"
// import Hero from "../../components/homepage/Hero"


export default function Homepage() {
  return (
    <>
    
      <Slider />
      {/* <Hero /> */}
      <AboutSec />
      <Innovation />
      <Product />
      <Dealer />
      <Sustainability />
      <Media />
      
    </>
  );
}
