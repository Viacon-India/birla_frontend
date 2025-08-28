"use client";

import React, { useEffect, useState } from "react";
import { getStrapiMedia } from "@/lib/utils";
import { CollectionTypeSeo } from "@/app/components/pageCommon/pageCommon";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import PageSelection from "@/app/components/selection/pageLayout";

export default function Page({ params }) {
  const [slugs, setSlugs] = useState(params.slug);
 
  const [pageData, setPageData] = useState([]);
  const [sidebar, setSidebar] = useState([]);
  const [page, setPage] = useState([]);
 
  useEffect(() => {
    const pageInitialData = async () => {
      try {
        const response = await fetch(getStrapiMedia(`/api/pages/${slugs.at(-1)}`));
        if (!response.ok) throw new Error('Network response was not ok');
       
        const page = await response.json();
        setPageData(page);
 
        if (slugs.at(-1) === "contact-us") {
          setPage('contact-us');
        } else {
          setPage('pages');
        }
      } catch (error) {
        // console.error("Fetch error:", error);
 
        if (slugs.at(-2) === 'investor-relations') {
          try {
            const tabResponse = await fetch(getStrapiMedia("/api/investor-relations-sidebar?populate=*"));
            if (!tabResponse.ok) throw new Error('Network response was not ok');
 
            const pageSidebar = await tabResponse.json();
            setSidebar(pageSidebar.data.attributes.pages.data);
            setPage('InvestorRelations');
          } catch (sidebarError) {
            console.error("Sidebar fetch error:", sidebarError);
          }
        } else {
          setPage('error404');
        }
      }
    };
 
    pageInitialData();
  }, [slugs]);

  return (
    <>
      <CollectionTypeSeo page={'page'} pageData={pageData} />
      <Navbar />
      <PageSelection page={page} pageData={pageData} sidebar={sidebar} slugs={slugs}/>
      <Footer />
    </>
  );
}