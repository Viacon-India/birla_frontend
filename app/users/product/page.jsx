
"use client"
import React  from "react";
import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar"
import Footer from "../../../app/components/footer/footer"
import NewHomepage from "../../../app/components/homepage/NewHomepage";

const ProductPage = () => {
  return (
    <>
  <Navbar />
  <NewHomepage />
  <Footer />
    </>
  );
};

export default ProductPage;
