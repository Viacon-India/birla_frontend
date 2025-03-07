"use client";

import React, { useEffect, useState, Suspense } from "react";
import { getStrapiMedia } from "@/lib/utils";
import ReactPaginate from "react-paginate";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Link from "next/link";
import Image from "next/image";
import loadGif from "../assets/images/loading.gif"

const ResultComponent = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [searchData, setSearchData] = useState([]);
  const [meta, setSearchMeta] = useState({});
  const pageSize = 4;
  const currentPage = 1;

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    push(
      pathname.replace(
        pathname,
        pathname + "/page/" + (selectedPage + 1) + "?" + searchParams.toString()
      )
    );
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      push(`/search-results?search=${encodeURIComponent(searchInput.trim())}`);
    } else {
      push(`/search-results`);
    }
    fetchData("&search=" + searchInput);
  };

  const fetchData = async (query) => {
    try {
      const productsResponse = await fetch(
        getStrapiMedia(
          `/api/products?pagination[pageSize]=${pageSize}&pagination[page]=${currentPage}${query}`
        )
      );
      const products = await productsResponse.json();
      const pagesResponse = await fetch(
        getStrapiMedia(
          `/api/pages?pagination[pageSize]=${pageSize}&pagination[page]=${currentPage}${query}`
        )
      );
      const pages = await pagesResponse.json();
      setSearchData([...products.data, ...pages.data]);
      const mergedMeta = {
        pagination: {
          page: products.meta.pagination.page,
          pageSize: products.meta.pagination.pageSize,
          pageCount: Math.max(
            products.meta.pagination.pageCount,
            pages.meta.pagination.pageCount
          ),
          total: products.meta.pagination.total + pages.meta.pagination.total,
        },
      };
      setSearchMeta(mergedMeta);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setSearchData([]);
    setSearchInput(searchQuery);
    const fetchInitialData = async () => {
      try {
        if (searchQuery) {
          fetchData("&search=" + searchQuery);
        } else {
          fetchData("");
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      <div className="pt-[100px] xl:pt-[140px] bg-[#F4F4F4] pb-10 md:pb-[60px] 2xl:pb-[100px]">
        <div className="container mx-auto">
          <span className="text-primary text-[20px] uppercase mb-3">
            Search Result
          </span>
          {searchData.length > 0 && searchParams.get("search") && (
            <h2 className="text-secondary text-[22px] md:text-[28px] xl:text-[32px] font-bold leading-[1] flex gap-3 items-center tracking-[-0.5px]">
              Found “{meta.pagination.total}” results for your search “
              {searchParams.get("search").replace("+", " ").replace("%2F", "/")}
              ”
            </h2>
          )}
          <form className="relative mt-3 mb-10" onSubmit={handleSearchSubmit}>
            <svg
              className="absolute top-[15px] left-[20px]"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7026 12.7032L16.4995 16.5001M14.625 8.0625C14.625 11.6869 11.6869 14.625 8.0625 14.625C4.43813 14.625 1.5 11.6869 1.5 8.0625C1.5 4.43813 4.43813 1.5 8.0625 1.5C11.6869 1.5 14.625 4.43813 14.625 8.0625Z"
                stroke="#1A1D21"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              className="w-full py-[10px] pl-11 border border-[#B3B8C2] bg-transparent rounded-[24px] pr-3 outline-none"
              type="search"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="search here"
            />
          </form>
          {searchData.length > 0 ? (
            <>
              {searchData.map(
                (product) =>
                  product?.permalink && (
                    <Link
                      key={product.id}
                      href={product.permalink}
                      className="result-card flex flex-col p-4 bg-[#FFFFFF] rounded-[8px] mt-4 xl:mt-10"
                    >
                      {product?.segment ? (
                        <h3 className="text-secondary text-[20px] lg:text-[24px] leading-[1] mb-3">
                          {product.segment.title} - {product.name}
                        </h3>
                      ) : (
                        <h3 className="text-secondary text-[20px] lg:text-[24px] leading-[1] mb-3">
                          Page - {product.name}
                        </h3>
                      )}
                      <p className="text-primary text-[16px] lg:text-[20px]">
                        {window.location.hostname + product.permalink}
                      </p>
                      {product?.seo_description && (
                        <p className="text-[#4F5662] text-[14px] md:text-[15px] xl:text-[16px] line-clamp-4 pt-3">
                          {product.seo_description}
                        </p>
                      )}
                    </Link>
                  )
              )}
              {meta?.pagination?.pageCount > 1 && (
                <>
                  <div className="pt-4 md:pt-6 2xl:pt-10">
                    <ReactPaginate
                      previousLabel={
                        <svg
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 13.25L1.25 7L7.5 0.75"
                            stroke="#2E3192"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      }
                      nextLabel={
                        <svg
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 0.75L7.75 7L1.5 13.25"
                            stroke="#2E3192"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      }
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={meta.pagination.pageCount}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={3}
                      onPageChange={handlePageClick}
                      containerClassName={"productPagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                      forcePage={meta.pagination.page - 1}
                    />
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="pt-4 md:pt-6 2xl:pt-10">
              <p className="text-[16px] md:text-[24px] text-center font-semibold">
                {meta?.pagination?.pageCount == 0
                  ? "Sorry, we can't find your combination search!"
                  : "Please wait, your results are loading."}
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

const Result = () => (
  <Suspense
    fallback={
      <div>
        <Image className="w-[40px] h-[40px]" src={loadGif} alt="loadigif" />
      </div>
    }
  >
    <ResultComponent />
  </Suspense>
);

export default Result;
