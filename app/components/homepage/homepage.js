import React from "react";
import Slider from "./slider";
import AboutSec from "./aboutsec";
import Innovation from "./innovation";
import Product from "./product";
import Sustainability from "./sustainability";
import Media from "./media";
import Dealer from "./dealer"
import Link from "next/link";



export default function Homepage() {
  return (
    <>
    
      <Slider />
      <AboutSec />
      <Innovation />
      <Product />
      <Dealer />
      <Sustainability />
      <Media />
      {/* <Link className='btn btn-outline btn-primary' href="/users">go to user page</Link>
        <Link className='btn btn-outline btn-secondary' href="/users/product">product page</Link> */}
    </>
  );
}
