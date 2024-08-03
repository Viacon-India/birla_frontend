import React from "react";
import Slider from "./slider";
import AboutSec from "./aboutsec";
import Innovation from "./innovation";
import Product from "./product";
import Sustainability from "./sustainability";
import Media from "./media";
// import Custumpage from "./sample/page"
import Dealer from "./dealer"


export default function Homepage() {
  return (
    <>
    
      <Slider />
      <AboutSec />
      {/* <Custumpage /> */}
      <Innovation />
      <Product />
      <Dealer />
      <Sustainability />
      <Media />
      
      
    </>
  );
}
