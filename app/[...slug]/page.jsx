"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";

import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import PageSelection from "@/app/components/selection/pageLayout";

export default function Page({ params }) {
  const [slugs, setSlugs] = useState(params.slug);
 
  const [pageData, setPageData] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  const [page, setPage] = useState([]);
 
  useEffect(() => {
    fetch(getStrapiMedia("/api/pages/"+slugs.at(-1))).then((res) => res.json()).then((page) => {
      setPageData(page);
    });

    setPage('Pages');
    if(slugs.at(-1) == "contact-us"){
      setPage('ContactUs');
    }
    
    slugs.at(-2) == 'investor-relations' && fetch(getStrapiMedia("/api/investor-relations-sidebar?populate=*")).then((tab) => tab.json()).then((pageSidebar) => {
      setSidebar(pageSidebar.data.attributes.pages.data);
      setPage('InvestorRelations');
    });
  }, []);

  return (
    <>
      <Navbar />
      <PageSelection page={page} pageData={pageData} sidebar={sidebar} slugs={slugs}/>
      <Footer />
    </>
  );
}
