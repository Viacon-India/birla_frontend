"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import PageSelection from "@/app/components/selection/pageLayout";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import { PageEnd } from "@/app/components/pageCommon/pageCommon";


export default function Page({ params }) {
  const [slugs, setSlugs] = useState(params.slug);
  const [collection, setCollection] = useState(
    slugs.at(-1).includes("-bt-") ? "products" : "segments"
  );

  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(getStrapiMedia("/api/" + collection + "/" + slugs.at(-1)))
      .then((res) => res.json())
      .then((page) => {
        setPageData(page);
      });
  }, []);

  return (
    <>
      <Navbar />
      <PageSelection page={collection} pageData={pageData}/>
      <Footer />
    </>
  );
}
