"use client";
 
import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import PageSelection from "@/app/components/selection/pageLayout";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import Product from "@/app/components/product/card";
 
export default function Page({ params }) {
  const [slugs, setSlugs] = useState(params.slug);
  const [page, setPage] = useState(
    slugs.at(1)?.includes("-bt-") ? "products" : "segments"
  );
  const [pageType, setPageType] = useState(
    slugs.at(1)?.includes("-bt-") ? "product" : "category"
  );
  const [endPoint, setEndPoint] = useState(
    slugs.at(-2) == "page" ? slugs.at(-3) : slugs.at(-1)
  );
  const [pagination, setPagination] = useState(
    slugs.at(-2) == "page" ? slugs.at(-1) : 1
  );
  const [pageData, setPageData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getStrapiMedia(`/api/${page}/${endPoint}`));
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const apiData = await response.json();
        setPageData(apiData);
      } catch (error) {
        setPage('error404');
        setPageType('page');
      }
    };
 
    fetchData();
  }, [page, slugs]);
 
  return (
    <>
      <Navbar />
      <PageSelection page={page} pageData={pageData} pagination={pagination}/>
      <Footer />
    </>
  );
}