import { Suspense } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";
import loadGif from "../assets/images/loading.gif";
import FindTyre from "./findTyre";

// let lastSelectedFilterTitle = "";
// let isFilterFirstTime = true;
// const tempfilterList = new Set();

// const FindTyre = () => {
//   const { push } = useRouter();
//   const searchParams = new URLSearchParams(useSearchParams());
//   const pathname = usePathname();
//   const [pageData, setPageData] = useState([]);
//   const [searchTyre, setSearchTyre] = useState(
//     searchParams.get("search")
//       ? searchParams.get("search").replace("+", " ").replace("%2F", "/")
//       : ""
//   );
//   const [activeTab, setActiveTab] = useState(
//     searchParams.get("category") ? searchParams.get("category") : "TBB"
//   );
//   const [activeTabIndex, setActiveTabIndex] = useState(
//     searchParams.get("index") ? searchParams.get("index") : 0
//   );
//   const [productData, setProductsData] = useState([]);
//   const pageSize = 9;
//   let currentPage = 1;
//   const [meta, setProductsMeta] = useState({});

//   const [activeBannerImage, setActiveBannerImage] = useState(BannerTTB);

//   const [value, setValue] = useState([]);
//   const [filtersArray, setFiltersArray] = useState([]);
//   const [selectURLParameter, setSelectURLParameter] = useState([]);
//   const [filterData, setFilterData] = useState([]);
//   const [selectedFilters, setSelectedFilters] = useState(new Map());

//   const subSegmentOptions = new Set();
//   const machineryOptions = new Set();
//   const rimOptions = new Set();
//   const sizeOptions = new Set();
//   const patternOptions = new Set();
//   const isSubSegment = activeBannerImage == BannerOTR ? true : false;

//   const handlePageClick = (event) => {
//     const selectedPage = event.selected;
//     // push(
//     //   pathname.replace(
//     //     pathname,
//     //     pathname + "/page/" + (selectedPage + 1) + "?" + searchParams.toString()
//     //   )
//     // );
//     if (selectedPage != 0) {
//       currentPage = selectedPage + 1;
//     }
//     productFilters();
//   };

//   const handleSearch = () => {
//     setProductsData([]);
//     if (event.key === "Enter") {
//       push(
//         pathname.replace(
//           "find-tyre",
//           searchTyre
//             ? `find-tyre?category=${activeTab}&index=${activeTabIndex}&search=${searchTyre}`
//             : "find-tyre"
//         )
//       );
//       fetchData(activeTab, "&search=" + searchTyre);
//       setTimeout(() => {
//         window.scrollTo({
//           top: (80 * window.innerHeight) / 100,
//           behavior: "smooth",
//         });
//       }, 1000);
//     }
//   };

//   const handleClick = (category, index) => {
//     if (category === "TBB") {
//       setActiveBannerImage(BannerTTB);
//     } else if (category === "OTR") {
//       setActiveBannerImage(BannerOTR);
//     } else {
//       setActiveBannerImage(BannerAGRI);
//     }

//     setProductsData([]);
//     push(
//       pathname.replace(
//         "find-tyre",
//         "find-tyre?category=" + category + "&index=" + index
//       )
//     );
//     setValue([]);
//     setActiveTab(category);
//     setActiveTabIndex(index);
//     fetchData(category, "");
//   };

//   const queryToString = () => {
//     const filterQueries = [];
//     if (selectedFilters.has("Select Sub-section")) {
//       if (searchParams.has("sub_segment")) {
//         searchParams.set(
//           "sub_segment",
//           selectedFilters.get("Select Sub-section")
//         );
//       } else {
//         searchParams.append(
//           "sub_segment",
//           selectedFilters.get("Select Sub-section")
//         );
//       }
//       filterQueries.push(
//         `filters[sub_segment][$eq]=${selectedFilters.get("Select Sub-section")}`
//       );
//     } else {
//       if (searchParams.has("sub_segment")) searchParams.delete("sub_segment");
//     }
//     if (selectedFilters.has("Select Machinery")) {
//       if (searchParams.has("machinery")) {
//         searchParams.set("machinery", selectedFilters.get("Select Machinery"));
//       } else {
//         searchParams.append(
//           "machinery",
//           selectedFilters.get("Select Machinery")
//         );
//       }
//       filterQueries.push(
//         `filters[tables][table][row][machinery][name][$eq]=${selectedFilters.get(
//           "Select Machinery"
//         )}`
//       );
//     } else {
//       if (searchParams.has("machinery")) searchParams.delete("machinery");
//     }
//     if (selectedFilters.has("Select Rim")) {
//       if (searchParams.has("rim_recommended")) {
//         searchParams.set("rim_recommended", selectedFilters.get("Select Rim"));
//       } else {
//         searchParams.append(
//           "rim_recommended",
//           selectedFilters.get("Select Rim")
//         );
//       }
//       filterQueries.push(
//         `filters[tables][table][row][size][$endsWith]=${selectedFilters.get(
//           "Select Rim"
//         )}`
//       );
//     } else {
//       if (searchParams.has("rim_recommended"))
//         searchParams.delete("rim_recommended");
//     }
//     if (selectedFilters.has("Select Size")) {
//       if (searchParams.has("size")) {
//         searchParams.set("size", selectedFilters.get("Select Size"));
//       } else {
//         searchParams.append("size", selectedFilters.get("Select Size"));
//       }
//       filterQueries.push(
//         `filters[tables][table][row][size][$eq]=${selectedFilters.get(
//           "Select Size"
//         )}`
//       );
//     } else {
//       if (searchParams.has("size")) searchParams.delete("size");
//     }
//     if (selectedFilters.has("Select Pattern")) {
//       if (searchParams.has("pattern_type")) {
//         searchParams.set("pattern_type", selectedFilters.get("Select Pattern"));
//       } else {
//         searchParams.append(
//           "pattern_type",
//           selectedFilters.get("Select Pattern")
//         );
//       }
//       filterQueries.push(
//         `filters[tables][table][row][pattern_type][$eq]=${selectedFilters.get(
//           "Select Pattern"
//         )}`
//       );
//     } else {
//       if (searchParams.has("pattern_type")) searchParams.delete("pattern_type");
//     }
//     return filterQueries.length > 0 ? "&" + filterQueries.join("&") : "";
//   };

//   // const updateItem = (index, newValue) => {
//   //   setValue((prevData) => {
//   //     const newData = [...prevData];
//   //     newData[index] = newValue;
//   //     return newData;
//   //   });
//   // };

//   // const queryToString = (queryToStringValue) => {
//   //   const filterQueries = [];
//   //   if (
//   //     pageData.data?.attributes.categories.data[activeTabIndex].attributes
//   //       .filters.length > 4
//   //   ) {
//   //     if (queryToStringValue[0]) {
//   //       if (searchParams.has("sub_segment")) {
//   //         searchParams.set("sub_segment", queryToStringValue[0]);
//   //       } else {
//   //         searchParams.append("sub_segment", queryToStringValue[0]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[sub_segment][$eq]=${queryToStringValue[0]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("sub_segment")) searchParams.delete("sub_segment");
//   //     }
//   //     if (queryToStringValue[1]) {
//   //       if (searchParams.has("machinery")) {
//   //         searchParams.set("machinery", queryToStringValue[1]);
//   //       } else {
//   //         searchParams.append("machinery", queryToStringValue[1]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][machinery][name][$eq]=${queryToStringValue[1]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("machinery")) searchParams.delete("machinery");
//   //     }
//   //     if (queryToStringValue[2]) {
//   //       if (searchParams.has("rim_recommended")) {
//   //         searchParams.set("rim_recommended", queryToStringValue[2]);
//   //       } else {
//   //         searchParams.append("rim_recommended", queryToStringValue[2]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][size][$contains]=${queryToStringValue[2]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("rim_recommended"))
//   //         searchParams.delete("rim_recommended");
//   //     }
//   //     if (queryToStringValue[3]) {
//   //       if (searchParams.has("size")) {
//   //         searchParams.set("size", queryToStringValue[3]);
//   //       } else {
//   //         searchParams.append("size", queryToStringValue[3]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][size][$eq]=${queryToStringValue[3]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("size")) searchParams.delete("size");
//   //     }
//   //     if (queryToStringValue[4]) {
//   //       if (searchParams.has("pattern_type")) {
//   //         searchParams.set("pattern_type", queryToStringValue[4]);
//   //       } else {
//   //         searchParams.append("pattern_type", queryToStringValue[4]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][pattern_type][$eq]=${queryToStringValue[4]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("pattern_type"))
//   //         searchParams.delete("pattern_type");
//   //     }
//   //   } else {
//   //     if (queryToStringValue[0]) {
//   //       if (searchParams.has("machinery")) {
//   //         searchParams.set("machinery", queryToStringValue[0]);
//   //       } else {
//   //         searchParams.append("machinery", queryToStringValue[0]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][machinery][name][$eq]=${queryToStringValue[0]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("machinery")) searchParams.delete("machinery");
//   //     }
//   //     if (queryToStringValue[1]) {
//   //       if (searchParams.has("rim_recommended")) {
//   //         searchParams.set("rim_recommended", queryToStringValue[1]);
//   //       } else {
//   //         searchParams.append("rim_recommended", queryToStringValue[1]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][size][$contains]=${queryToStringValue[1]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("rim_recommended"))
//   //         searchParams.delete("rim_recommended");
//   //     }
//   //     if (queryToStringValue[2]) {
//   //       if (searchParams.has("size")) {
//   //         searchParams.set("size", queryToStringValue[2]);
//   //       } else {
//   //         searchParams.append("size", queryToStringValue[2]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][size][$eq]=${queryToStringValue[2]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("size")) searchParams.delete("size");
//   //     }
//   //     if (queryToStringValue[3]) {
//   //       if (searchParams.has("pattern_type")) {
//   //         searchParams.set("pattern_type", queryToStringValue[3]);
//   //       } else {
//   //         searchParams.append("pattern_type", queryToStringValue[3]);
//   //       }
//   //       filterQueries.push(
//   //         `filters[tables][table][row][pattern_type][$eq]=${queryToStringValue[3]}`
//   //       );
//   //     } else {
//   //       if (searchParams.has("pattern_type"))
//   //         searchParams.delete("pattern_type");
//   //     }
//   //   }
//   //   const queryString =
//   //     filterQueries.length > 0 ? "&" + filterQueries.join("&") : "";
//   //   return queryString;
//   // };

//   const productFilters = () => {
//     setProductsData([]);
//     fetchData(activeTab, queryToString());
//     if (searchParams.toString()) {
//       push(pathname.replace(/\/page\/\d+/, "") + "?" + searchParams.toString());
//     }
//     setTimeout(() => {
//       window.scrollTo({
//         top: (80 * window.innerHeight) / 100,
//         behavior: "smooth",
//       });
//     }, 1000);
//   };

//   useEffect(() => {
//     fetch(getStrapiMedia("/api/find-tyre"))
//       .then((res) => res.json())
//       .then((page) => {
//         setPageData(page);
//       });
//   }, [activeTab]);

//   const fetchData = async (category, query) => {
//     try {
//       const response = await fetch(
//         getStrapiMedia(
//           `/api/products?pagination[pageSize]=${pageSize}&pagination[page]=${currentPage}&sort[0]=premium:desc&sort[1]=id:asc&filters[segment][name][$eq]=${category}${query}`
//         )
//       );
//       const products = await response.json();
//       setProductsData(products.data);
//       setProductsMeta(products.meta);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchFilterData = async () => {
//       try {
//         const response = await fetch(
//           getStrapiMedia(`/api/products?filters[segment][name]=${activeTab}`)
//         );
//         const filters = await response.json();
//         setFilterData(filters.data);
//       } catch (error) {
//         console.error("Error fetching initial data:", error);
//       }
//     };
//     fetchFilterData();
//   }, [activeTab]);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       try {
//         // const checkURLParameter = [];
//         // if (searchParams.toString()) {
//         //   if (
//         //     pageData.data?.attributes.categories.data[activeTabIndex].attributes
//         //       .filters.length > 4
//         //   ) {
//         //     if (searchParams.has("sub_segment"))
//         //       checkURLParameter[0] = searchParams
//         //         .get("sub_segment")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //     if (searchParams.has("machinery"))
//         //       checkURLParameter[1] = searchParams
//         //         .get("machinery")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //     if (searchParams.has("rim_recommended"))
//         //       checkURLParameter[2] = searchParams
//         //         .get("rim_recommended")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //     if (searchParams.has("size"))
//         //       checkURLParameter[3] = searchParams
//         //         .get("size")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //     if (searchParams.has("pattern_type"))
//         //       checkURLParameter[4] = searchParams
//         //         .get("pattern_type")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //   } else {
//         //     if (searchParams.has("machinery"))
//         //       checkURLParameter[0] = searchParams
//         //         .get("machinery")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //     if (searchParams.has("rim_recommended"))
//         //       checkURLParameter[1] = searchParams
//         //         .get("rim_recommended")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //     if (searchParams.has("size"))
//         //       checkURLParameter[2] = searchParams
//         //         .get("size")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //     if (searchParams.has("pattern_type"))
//         //       checkURLParameter[3] = searchParams
//         //         .get("pattern_type")
//         //         .replace("+", " ")
//         //         .replace("%2F", "/");
//         //   }
//         // }

//         if (typeof window !== "undefined") {
//           const params = new URLSearchParams(window.location.search);
//           const newSelectedFilters = new Map();
//           if (params.get("sub_segment"))
//             newSelectedFilters.set(
//               "Select Sub-section",
//               params.get("sub_segment")
//             );
//           if (params.get("machinery"))
//             newSelectedFilters.set("Select Machinery", params.get("machinery"));
//           if (params.get("rim_recommended"))
//             newSelectedFilters.set("Select Rim", params.get("rim_recommended"));
//           if (params.get("size"))
//             newSelectedFilters.set("Select Size", params.get("size"));
//           if (params.get("pattern_type"))
//             newSelectedFilters.set(
//               "Select Pattern",
//               params.get("pattern_type")
//             );
//           setSelectedFilters(newSelectedFilters);
//         }
//         setSelectURLParameter(checkURLParameter);
//         fetchData(activeTab, queryToString(checkURLParameter));
//       } catch (error) {
//         console.error("Error fetching initial data:", error);
//       }
//     };

//     fetchInitialData();
//   }, [pageData]);

//   useEffect(() => {
//     if (filterData.length > 0) {
//       initFilterData();
//     }
//   }, [filterData]);

//   useEffect(() => {
//     updateFilterData();
//   }, [selectedFilters]);

//   const getSize = (str) => {
//     const match = str.match(/(\d{2})\D*$/);
//     return match ? parseInt(match[1], 10) : 0;
//   };

//   // filterData.forEach((item) => {
//   //   const rows = item.tables.table[0].row;
//   //   if (item.sub_segment) {
//   //     subSegmentOptions.add(item.sub_segment);
//   //   }
//   //   rows.forEach((row) => {
//   //     if (row.machinery && row.machinery.name) {
//   //       machineryOptions.add(row.machinery.name);
//   //     }
//   //     if (row.size) {
//   //       rimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]+'"');
//   //     }
//   //     if (row.size) {
//   //       sizeOptions.add(row.size);
//   //     }
//   //     if (row.pattern_type) {
//   //       patternOptions.add(row.pattern_type);
//   //     }
//   //   });
//   // });
//   // const filtersArray =
//   //   pageData.data?.attributes.categories.data[activeTabIndex].attributes.filters
//   //     .length > 4
//   //     ? [
//   //         Array.from(subSegmentOptions),
//   //         Array.from(machineryOptions),
//   //         Array.from(rimOptions),
//   //         Array.from(sizeOptions),
//   //         Array.from(patternOptions),
//   //       ]
//   //     : [
//   //         Array.from(machineryOptions),
//   //         Array.from(rimOptions),
//   //         Array.from(sizeOptions),
//   //         Array.from(patternOptions),
//   //       ];

//   async function initFilterData() {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     filterData.forEach((item) => {
//       const rows = item.tables.table[0].row;
//       let rim_recommended;
//       let size;
//       let pattern_type;

//       if (item.sub_segment) {
//         subSegmentOptions.add(item.sub_segment);
//       }
//       rows.forEach((row) => {
//         if (row.rim_recommended) {
//           rim_recommended = row.size.match(/(\d+)(?=[\s-]*$)/)[0];
//           rimOptions.add(rim_recommended);
//         }
//         if (row.size) {
//           size = row.size;
//           sizeOptions.add(size);
//         }
//         if (row.pattern_type) {
//           pattern_type = row.pattern_type;
//           patternOptions.add(pattern_type);
//         }
//         if (row.machinery && row.machinery.name) {
//           machineryOptions.add(row.machinery.name);
//         }
//       });
//     });

//     setFiltersArray([
//       Array.from(subSegmentOptions).sort(),
//       Array.from(machineryOptions).sort(),
//       Array.from(rimOptions).sort(),
//       Array.from(sizeOptions).sort((a, b) => getSize(a) - getSize(b)),
//       Array.from(patternOptions).sort(),
//     ]);
//   }

//   function updateFilterData() {
//     const newSubSegmentOptions = new Set();
//     const newMachineryOptions = new Set();
//     const newRimOptions = new Set();
//     const newSizeOptions = new Set();
//     const newPatternOptions = new Set();

//     filterData.forEach((item) => {
//       const rows = item.tables.table[0].row;
//       rows.forEach((row) => {
//         if (selectedFilters.has("Select Sub-section")) {
//           if (item.sub_segment === selectedFilters.get("Select Sub-section")) {
//             if (row.machinery && row.machinery.name) {
//               if (selectedFilters.has("Select Machinery")) {
//                 if (
//                   row.machinery.name === selectedFilters.get("Select Machinery")
//                 ) {
//                   if (selectedFilters.has("Select Rim")) {
//                     if (
//                       row.size.match(/(\d+)(?=[\s-]*$)/)[0] ===
//                       selectedFilters.get("Select Rim")
//                     ) {
//                       if (selectedFilters.has("Select Size")) {
//                         if (row.size === selectedFilters.get("Select Size")) {
//                           if (selectedFilters.has("Select Pattern")) {
//                             if (
//                               row.pattern_type ===
//                               selectedFilters.get("Select Pattern")
//                             ) {
//                               newMachineryOptions.add(row.machinery.name);
//                               newRimOptions.add(
//                                 row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                               );
//                               newSizeOptions.add(row.size);
//                               newPatternOptions.add(row.pattern_type);
//                               newSubSegmentOptions.add(item.sub_segment);
//                             }
//                           } else {
//                             newMachineryOptions.add(row.machinery.name);
//                             newRimOptions.add(
//                               row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                             );
//                             newSizeOptions.add(row.size);
//                             newPatternOptions.add(row.pattern_type);
//                             newSubSegmentOptions.add(item.sub_segment);
//                           }
//                         }
//                       } else {
//                         if (selectedFilters.has("Select Pattern")) {
//                           if (
//                             row.pattern_type ===
//                             selectedFilters.get("Select Pattern")
//                           ) {
//                             newMachineryOptions.add(row.machinery.name);
//                             newRimOptions.add(
//                               row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                             );
//                             newSizeOptions.add(row.size);
//                             newPatternOptions.add(row.pattern_type);
//                             newSubSegmentOptions.add(item.sub_segment);
//                           }
//                         } else {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       }
//                     }
//                   } else {
//                     if (selectedFilters.has("Select Size")) {
//                       if (row.size === selectedFilters.get("Select Size")) {
//                         if (selectedFilters.has("Select Pattern")) {
//                           if (
//                             row.pattern_type ===
//                             selectedFilters.get("Select Pattern")
//                           ) {
//                             newMachineryOptions.add(row.machinery.name);
//                             newRimOptions.add(
//                               row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                             );
//                             newSizeOptions.add(row.size);
//                             newPatternOptions.add(row.pattern_type);
//                             newSubSegmentOptions.add(item.sub_segment);
//                           }
//                         } else {
//                           newMachineryOptions.add(row.machinery.name);
//                           newPatternOptions.add(row.pattern_type);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       }
//                     } else {
//                       if (selectedFilters.has("Select Pattern")) {
//                         if (
//                           row.pattern_type ===
//                           selectedFilters.get("Select Pattern")
//                         ) {
//                           newMachineryOptions.add(row.machinery.name);
//                           newPatternOptions.add(row.pattern_type);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       } else {
//                         newMachineryOptions.add(row.machinery.name);
//                         newPatternOptions.add(row.pattern_type);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     }
//                   }
//                 }
//               } else {
//                 if (selectedFilters.has("Select Rim")) {
//                   if (
//                     row.size.match(/(\d+)(?=[\s-]*$)/)[0] ===
//                     selectedFilters.get("Select Rim")
//                   ) {
//                     if (selectedFilters.has("Select Size")) {
//                       if (row.size === selectedFilters.get("Select Size")) {
//                         if (selectedFilters.has("Select Pattern")) {
//                           if (
//                             row.pattern_type ===
//                             selectedFilters.get("Select Pattern")
//                           ) {
//                             newMachineryOptions.add(row.machinery.name);
//                             newRimOptions.add(
//                               row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                             );
//                             newSizeOptions.add(row.size);
//                             newPatternOptions.add(row.pattern_type);
//                             newSubSegmentOptions.add(item.sub_segment);
//                           }
//                         } else {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       }
//                     } else {
//                       if (selectedFilters.has("Select Pattern")) {
//                         if (
//                           row.pattern_type ===
//                           selectedFilters.get("Select Pattern")
//                         ) {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       } else {
//                         newMachineryOptions.add(row.machinery.name);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newPatternOptions.add(row.pattern_type);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     }
//                   }
//                 } else {
//                   if (selectedFilters.has("Select Size")) {
//                     if (row.size === selectedFilters.get("Select Size")) {
//                       if (selectedFilters.has("Select Pattern")) {
//                         if (
//                           row.pattern_type ===
//                           selectedFilters.get("Select Pattern")
//                         ) {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       } else {
//                         newMachineryOptions.add(row.machinery.name);
//                         newPatternOptions.add(row.pattern_type);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     }
//                   } else {
//                     if (selectedFilters.has("Select Pattern")) {
//                       if (
//                         row.pattern_type ===
//                         selectedFilters.get("Select Pattern")
//                       ) {
//                         newMachineryOptions.add(row.machinery.name);
//                         newPatternOptions.add(row.pattern_type);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     } else {
//                       newMachineryOptions.add(row.machinery.name);
//                       newPatternOptions.add(row.pattern_type);
//                       newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
//                       newSizeOptions.add(row.size);
//                       newSubSegmentOptions.add(item.sub_segment);
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         } else {
//           if (row.machinery && row.machinery.name) {
//             if (selectedFilters.has("Select Machinery")) {
//               if (
//                 row.machinery.name === selectedFilters.get("Select Machinery")
//               ) {
//                 if (selectedFilters.has("Select Rim")) {
//                   if (
//                     row.size.match(/(\d+)(?=[\s-]*$)/)[0] ===
//                     selectedFilters.get("Select Rim")
//                   ) {
//                     if (selectedFilters.has("Select Size")) {
//                       if (row.size === selectedFilters.get("Select Size")) {
//                         if (selectedFilters.has("Select Pattern")) {
//                           if (
//                             row.pattern_type ===
//                             selectedFilters.get("Select Pattern")
//                           ) {
//                             newMachineryOptions.add(row.machinery.name);
//                             newRimOptions.add(
//                               row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                             );
//                             newSizeOptions.add(row.size);
//                             newPatternOptions.add(row.pattern_type);
//                             newSubSegmentOptions.add(item.sub_segment);
//                           }
//                         } else {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       }
//                     } else {
//                       if (selectedFilters.has("Select Pattern")) {
//                         if (
//                           row.pattern_type ===
//                           selectedFilters.get("Select Pattern")
//                         ) {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       } else {
//                         newMachineryOptions.add(row.machinery.name);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newPatternOptions.add(row.pattern_type);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     }
//                   }
//                 } else {
//                   if (selectedFilters.has("Select Size")) {
//                     if (row.size === selectedFilters.get("Select Size")) {
//                       if (selectedFilters.has("Select Pattern")) {
//                         if (
//                           row.pattern_type ===
//                           selectedFilters.get("Select Pattern")
//                         ) {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       } else {
//                         newMachineryOptions.add(row.machinery.name);
//                         newPatternOptions.add(row.pattern_type);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     }
//                   } else {
//                     if (selectedFilters.has("Select Pattern")) {
//                       if (
//                         row.pattern_type ===
//                         selectedFilters.get("Select Pattern")
//                       ) {
//                         newMachineryOptions.add(row.machinery.name);
//                         newPatternOptions.add(row.pattern_type);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     } else {
//                       newMachineryOptions.add(row.machinery.name);
//                       newPatternOptions.add(row.pattern_type);
//                       newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
//                       newSizeOptions.add(row.size);
//                       newSubSegmentOptions.add(item.sub_segment);
//                     }
//                   }
//                 }
//               }
//             } else {
//               if (selectedFilters.has("Select Rim")) {
//                 if (
//                   row.size.match(/(\d+)(?=[\s-]*$)/)[0] ===
//                   selectedFilters.get("Select Rim")
//                 ) {
//                   if (selectedFilters.has("Select Size")) {
//                     if (row.size === selectedFilters.get("Select Size")) {
//                       if (selectedFilters.has("Select Pattern")) {
//                         if (
//                           row.pattern_type ===
//                           selectedFilters.get("Select Pattern")
//                         ) {
//                           newMachineryOptions.add(row.machinery.name);
//                           newRimOptions.add(
//                             row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                           );
//                           newSizeOptions.add(row.size);
//                           newPatternOptions.add(row.pattern_type);
//                           newSubSegmentOptions.add(item.sub_segment);
//                         }
//                       } else {
//                         newMachineryOptions.add(row.machinery.name);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newPatternOptions.add(row.pattern_type);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     }
//                   } else {
//                     if (selectedFilters.has("Select Pattern")) {
//                       if (
//                         row.pattern_type ===
//                         selectedFilters.get("Select Pattern")
//                       ) {
//                         newMachineryOptions.add(row.machinery.name);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newPatternOptions.add(row.pattern_type);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     } else {
//                       newMachineryOptions.add(row.machinery.name);
//                       newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
//                       newSizeOptions.add(row.size);
//                       newPatternOptions.add(row.pattern_type);
//                       newSubSegmentOptions.add(item.sub_segment);
//                     }
//                   }
//                 }
//               } else {
//                 if (selectedFilters.has("Select Size")) {
//                   if (row.size === selectedFilters.get("Select Size")) {
//                     if (selectedFilters.has("Select Pattern")) {
//                       if (
//                         row.pattern_type ===
//                         selectedFilters.get("Select Pattern")
//                       ) {
//                         newMachineryOptions.add(row.machinery.name);
//                         newRimOptions.add(
//                           row.size.match(/(\d+)(?=[\s-]*$)/)[0]
//                         );
//                         newSizeOptions.add(row.size);
//                         newPatternOptions.add(row.pattern_type);
//                         newSubSegmentOptions.add(item.sub_segment);
//                       }
//                     } else {
//                       newMachineryOptions.add(row.machinery.name);
//                       newPatternOptions.add(row.pattern_type);
//                       newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
//                       newSizeOptions.add(row.size);
//                       newSubSegmentOptions.add(item.sub_segment);
//                     }
//                   }
//                 } else {
//                   if (selectedFilters.has("Select Pattern")) {
//                     if (
//                       row.pattern_type === selectedFilters.get("Select Pattern")
//                     ) {
//                       newMachineryOptions.add(row.machinery.name);
//                       newPatternOptions.add(row.pattern_type);
//                       newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
//                       newSizeOptions.add(row.size);
//                       newSubSegmentOptions.add(item.sub_segment);
//                     }
//                   } else {
//                     newMachineryOptions.add(row.machinery.name);
//                     newPatternOptions.add(row.pattern_type);
//                     newRimOptions.add(row.size.match(/(\d+)(?=[\s-]*$)/)[0]);
//                     newSizeOptions.add(row.size);
//                     newSubSegmentOptions.add(item.sub_segment);
//                   }
//                 }
//               }
//             }
//           }
//         }

//         setFiltersArray((prevData) => [
//           [...newSubSegmentOptions].sort(),
//           [...newMachineryOptions].sort(),
//           [...newRimOptions].sort(),
//           [...newSizeOptions].sort((a, b) => getSize(a) - getSize(b)),
//           [...newPatternOptions].sort(),
//         ]);
//       });
//     });

//     if (lastSelectedFilterTitle != "" && isFilterFirstTime) {
//       tempfilterList.clear();
//       switch (lastSelectedFilterTitle) {
//         case "Select Sub-section":
//           filtersArray[0]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Machinery":
//           filtersArray[1]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Rim":
//           filtersArray[2]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Size":
//           filtersArray[3]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Pattern":
//           filtersArray[4]?.forEach((item) => tempfilterList.add(item));
//           break;
//       }
//     }

//     switch (lastSelectedFilterTitle) {
//       case "Select Sub-section":
//         setFiltersArray((prevData) => [
//           [...tempfilterList].sort(),
//           [...(prevData[1] || [])].sort(),
//           [...(prevData[2] || [])].sort(),
//           [...(prevData[3] || [])].sort((a, b) => getSize(a) - getSize(b)),
//           [...(prevData[4] || [])].sort(),
//         ]);
//         break;
//       case "Select Machinery":
//         setFiltersArray((prevData) => [
//           [...(prevData[0] || [])].sort(),
//           [...tempfilterList].sort(),
//           [...(prevData[2] || [])].sort(),
//           [...(prevData[3] || [])].sort((a, b) => getSize(a) - getSize(b)),
//           [...(prevData[4] || [])].sort(),
//         ]);
//         break;
//       case "Select Rim":
//         setFiltersArray((prevData) => [
//           [...(prevData[0] || [])].sort(),
//           [...(prevData[1] || [])].sort(),
//           [...tempfilterList].sort(),
//           [...(prevData[3] || [])].sort((a, b) => getSize(a) - getSize(b)),
//           [...(prevData[4] || [])].sort(),
//         ]);
//         break;
//       case "Select Size":
//         setFiltersArray((prevData) => [
//           [...(prevData[0] || [])].sort(),
//           [...(prevData[1] || [])].sort(),
//           [...(prevData[2] || [])].sort(),
//           [...tempfilterList].sort((a, b) => getSize(a) - getSize(b)),
//           [...(prevData[4] || [])].sort(),
//         ]);
//         break;
//       case "Select Pattern":
//         setFiltersArray((prevData) => [
//           [...(prevData[0] || [])].sort(),
//           [...(prevData[1] || [])].sort(),
//           [...(prevData[2] || [])].sort((a, b) => getSize(a) - getSize(b)),
//           [...(prevData[3] || [])].sort(),
//           [...tempfilterList].sort(),
//         ]);
//         break;
//     }

//     if (lastSelectedFilterTitle != "") {
//       tempfilterList.clear();
//       switch (lastSelectedFilterTitle) {
//         case "Select Sub-section":
//           filtersArray[0]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Machinery":
//           filtersArray[1]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Rim":
//           filtersArray[2]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Size":
//           filtersArray[3]?.forEach((item) => tempfilterList.add(item));
//           break;
//         case "Select Pattern":
//           filtersArray[4]?.forEach((item) => tempfilterList.add(item));
//           break;
//       }
//       isFilterFirstTime = false;
//     }
//   }

//   const updateItem = (index, newValue) => {
//     setValue((prevData) => {
//       const newData = [...prevData];
//       newData[index] = newValue;
//       return newData.slice(0, index + 1);
//     });
//   };

//   const updateSelectedFilters = (updateFilterTitle, value) => {
//     if (value == "") {
//       isFilterFirstTime = true;
//       lastSelectedFilterTitle = "";
//       setSelectedFilters((prevFilters) => {
//         const updatedFilters = new Map(prevFilters);
//         updatedFilters.delete(updateFilterTitle);
//         return updatedFilters;
//       });
//       return;
//     }
//     if (isFilterFirstTime && lastSelectedFilterTitle === "") {
//       lastSelectedFilterTitle = updateFilterTitle;
//     } else if (lastSelectedFilterTitle == updateFilterTitle) {
//       setSelectedFilters([]);
//     }
//     setSelectedFilters((prevFilters) => {
//       const updatedFilters = new Map(prevFilters);
//       updatedFilters.set(updateFilterTitle, value);
//       return updatedFilters;
//     });
//     lastSelectedFilterTitle = updateFilterTitle;
//   };

//   const clearFilters = () => {
//     isFilterFirstTime = true;
//     setSelectedFilters(new Map());
//     setValue([]);
//     setFiltersArray([]);
//     initFilterData();
//     setProductsData([]);
//     fetchData("");
//     push(pathname);
//     setTimeout(() => {
//       window.scrollTo({
//         top: (100 * window.innerHeight) / 100,
//         behavior: "smooth",
//       });
//     }, 1000);
//   };

//   if (
//     typeof meta === "undefined" ||
//     (meta.pagination &&
//       meta.pagination.pageCount > 0 &&
//       meta.pagination.pageCount < meta.pagination.page)
//   ) {
//     return <Error404 />;
//   }

//   const domain = process.env.DOMAIN_NAME;
//   let schema = {};

//   if (!pageData || !pageData.data) {
//     return <div>Loading...</div>;
//   }
//   schema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     name: pageData.data?.attributes?.title,
//     url: domain + pageData.data?.attributes?.permalink,
//     logo: getStrapiMedia(pageData?.seo_image?.url),
//     description: pageData.seo_description,
//   };

//   return (
//     pageData?.data && (
//       <>
//         {/* <SingleTypeSeo pageData={pageData} /> */}
//         <SchemaOrg schema={schema} />
//         <Navbar />
//         <section className="top-banner-sec">
//           <span className="tyre-overlay"></span>
//           <div className="relative">
//             <div className="relative">
//               <div className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[90vh] flex items-start">
//                 <div className="container mx-auto pt-[60px] md:pt-10 xl:pt-6 pb-[60px] flex flex-col md:flex-row gap-4">
//                   <div className="flex flex-col justify-between h-full w-full md:w-1/2 gap-[100px] 2xl:gap-[200px]">
//                     <MainButton />
//                     <div className="relative flex flex-col gap-2 xl:gap-6 z-10">
//                       <h3 className="text-white text-[32px] md:text-[42px] 2xl:text-[56px] font-bold ">
//                         Find A Tyre
//                       </h3>
//                       <p className="text-white text-[16px] md:text-[20px] hidden md:block">
//                         Use the filters to get type the product or you can
//                         simply search by it’s name.
//                       </p>
//                       <div className="tyre-input-sec relative">
//                         <svg
//                           className="absolute top-1/2 translate-y-[-50%] left-4"
//                           width="21"
//                           height="20"
//                           viewBox="0 0 21 20"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <g clip-path="url(#clip0_4748_44438)">
//                             <path
//                               d="M9.21503 16.182C13.306 16.182 16.6224 12.8656 16.6224 8.7746C16.6224 4.6836 13.306 1.36719 9.21503 1.36719C5.12403 1.36719 1.80762 4.6836 1.80762 8.7746C1.80762 12.8656 5.12403 16.182 9.21503 16.182Z"
//                               stroke="#A0A3BD"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             />
//                             <path
//                               d="M18.4741 18.0339L14.4463 14.0061"
//                               stroke="#A0A3BD"
//                               stroke-width="2"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             />
//                           </g>
//                           <defs>
//                             <clipPath id="clip0_4748_44438">
//                               <rect
//                                 width="20"
//                                 height="20"
//                                 fill="white"
//                                 transform="translate(0.141602)"
//                               />
//                             </clipPath>
//                           </defs>
//                         </svg>
//                         <input
//                           className="bg-white pl-12 py-3 md:py-4 outline-none rounded-[50px] w-full"
//                           type="text"
//                           value={searchTyre}
//                           onChange={(e) => setSearchTyre(e.target.value)}
//                           onKeyDown={handleSearch}
//                           placeholder="Search"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   {pageData.data.attributes.categories?.data && (
//                     <div className="filter-form w-full md:w-1/2 md:mx-4 xl:mx-[200px]">
//                       <div className="form-content relative z-10">
//                         <div className="form-btn-sec">
//                           {pageData.data.attributes.categories.data.map(
//                             (categories, index) =>
//                               categories.attributes?.name &&
//                               categories.attributes?.filters && (
//                                 <button
//                                   key={categories.id}
//                                   className={cn(
//                                     "form-btn",
//                                     activeTab === categories.attributes.name
//                                       ? "form-active-btn"
//                                       : ""
//                                   )}
//                                   onClick={() =>
//                                     handleClick(
//                                       categories.attributes.name,
//                                       index
//                                     )
//                                   }
//                                 >
//                                   {categories.attributes.name}
//                                 </button>
//                               )
//                           )}
//                         </div>
//                         {pageData.data.attributes.categories.data.map(
//                           (categories) =>
//                             categories.attributes?.name &&
//                             categories.attributes?.filters &&
//                             activeTab === categories.attributes.name && (
//                               <div
//                                 key={categories.id}
//                                 id={categories.attributes.name}
//                               >
//                                 <div className="w-full flex flex-col gap-2">
//                                   {categories.attributes?.filters &&
//                                     categories.attributes.filters.length > 0 &&
//                                     categories.attributes.filters.map(
//                                       (filter, index) =>
//                                         categories.attributes?.name &&
//                                         categories.attributes?.filters && (
//                                           <div
//                                             key={filter.id}
//                                             className="tyre-form-row"
//                                           >
//                                             <label
//                                               className="tyre-form-label"
//                                               htmlFor={
//                                                 categories.attributes.name +
//                                                 "-" +
//                                                 filter.title.replace(
//                                                   "Select ",
//                                                   ""
//                                                 )
//                                               }
//                                             >
//                                               {filter.title}
//                                             </label>
//                                             {filter?.items &&
//                                               filter.items.length > 0 && (
//                                                 <select
//                                                   value={
//                                                     selectedFilters.get(
//                                                       filter.title
//                                                     ) || ""
//                                                   }
//                                                   onChange={(e) => {
//                                                     updateSelectedFilters(
//                                                       filter.title,
//                                                       e.target.value
//                                                     );
//                                                     updateItem(
//                                                       isSubSegment
//                                                         ? index
//                                                         : index + 1,
//                                                       e.target.value
//                                                     );
//                                                   }}
//                                                   className="tyre-form-select"
//                                                 >
//                                                   <option value="">
//                                                     Select{" "}
//                                                     {filter.title.replace(
//                                                       "Select ",
//                                                       ""
//                                                     )}
//                                                   </option>
//                                                   {Array.isArray(
//                                                     filtersArray[
//                                                       isSubSegment
//                                                         ? index
//                                                         : index + 1
//                                                     ]
//                                                   ) &&
//                                                     filtersArray[
//                                                       isSubSegment
//                                                         ? index
//                                                         : index + 1
//                                                     ].map((item) => (
//                                                       <option
//                                                         key={
//                                                           item !== undefined &&
//                                                           item &&
//                                                           item.id
//                                                         }
//                                                         value={
//                                                           item
//                                                             ? item.replace(
//                                                                 /"/g,
//                                                                 ""
//                                                               )
//                                                             : ""
//                                                         }
//                                                         selected={
//                                                           selectURLParameter[
//                                                             isSubSegment
//                                                               ? index
//                                                               : index + 1
//                                                           ] == item
//                                                             ? "selected"
//                                                             : ""
//                                                         }
//                                                       >
//                                                         {item}
//                                                       </option>
//                                                     ))}
//                                                 </select>
//                                               )}
//                                           </div>
//                                         )
//                                     )}
//                                   <button
//                                     onClick={() => productFilters()}
//                                     className="primary-btn !w-full flip-animate-2 after:!hidden text-center !flex !justify-center !items-center mt-2"
//                                   >
//                                     <svg
//                                       width="18"
//                                       height="18"
//                                       viewBox="0 0 18 18"
//                                       fill="none"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                       <path
//                                         d="M8.13197 0.599918C6.75419 0.599918 5.49863 0.93325 4.3653 1.59992C3.23197 2.26658 2.32086 3.1777 1.63197 4.33325C0.943077 5.48881 0.598633 6.74436 0.598633 8.09992C0.598633 9.45547 0.943077 10.711 1.63197 11.8666C2.32086 13.0221 3.23197 13.9333 4.3653 14.5999C5.49863 15.2666 6.75419 15.5999 8.13197 15.5999C8.97641 15.5999 9.79863 15.4555 10.5986 15.1666C11.3986 14.8777 12.132 14.4888 12.7986 13.9999L15.932 17.0666C16.0653 17.2444 16.2542 17.3333 16.4986 17.3333C16.7431 17.3333 16.9431 17.2555 17.0986 17.0999C17.2542 16.9444 17.332 16.7444 17.332 16.4999C17.332 16.2555 17.2431 16.0666 17.0653 15.9333L13.9986 12.7999C14.4875 12.1333 14.8764 11.3999 15.1653 10.5999C15.4542 9.79992 15.5986 8.9777 15.5986 8.13325C15.5986 6.75547 15.2653 5.48881 14.5986 4.33325C13.932 3.1777 13.0209 2.26658 11.8653 1.59992C10.7097 0.93325 9.4653 0.599918 8.13197 0.599918ZM8.13197 2.26658C9.19863 2.26658 10.1764 2.53325 11.0653 3.06658C11.9542 3.59992 12.6542 4.31103 13.1653 5.19992C13.6764 6.08881 13.932 7.05547 13.932 8.09992C13.932 9.14436 13.6764 10.1221 13.1653 11.0333C12.6542 11.9444 11.9542 12.6555 11.0653 13.1666C10.1764 13.6777 9.19863 13.9333 8.13197 13.9333C7.0653 13.9333 6.08752 13.6777 5.19863 13.1666C4.30974 12.6555 3.59863 11.9444 3.0653 11.0333C2.53197 10.1221 2.2653 9.14436 2.2653 8.09992C2.2653 7.05547 2.53197 6.08881 3.0653 5.19992C3.59863 4.31103 4.30974 3.59992 5.19863 3.06658C6.08752 2.53325 7.0653 2.26658 8.13197 2.26658Z"
//                                         fill="white"
//                                       />
//                                     </svg>
//                                     <span data-hover="Search">Search</span>
//                                   </button>
//                                   <button
//                                     onClick={() => clearFilters()}
//                                     className="tablinks cat-btn active-cat-btn items-center gap-1 !w-full max-h-[38px] !h-full !text-[15px] leading-[27.75px] md:col-span-2 xl:col-span-1 whitespace-nowrap"
//                                   >
//                                     Clear Filter
//                                   </button>
//                                 </div>
//                               </div>
//                             )
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <Image
//                 src={activeBannerImage}
//                 alt="Hero-Banner"
//                 className="absolute top-0 w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </section>
//         <section className="dealer-sec pt-[23rem] md:pt-12 2xl:pt-[60px] relative overflow-hidden xl:bg-[#F8F8F8]">
//           <div className="container mx-auto overflow-hidden">
//             <span className="section-heading">Find A Tyre</span>
//             <div className="section-title-wrapper">
//               <h3 className="section-title">Birla Tyre Products</h3>
//             </div>
//             {productData && productData.length > 0 ? (
//               <>
//                 <h3 className="text-[#1A1D21] text-[22px] md:text-[28px] 2xl:text-[32px] font-bold pt-4 md:pt-6 2xl:pt-10">
//                   Showing matching {activeTab} products
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 2xl:gap-10 mt-6 md:mt-8 2xl:mt-10">
//                   {productData.map((product) => (
//                     <Product
//                       key={product.id}
//                       data={product}
//                       selectedFilterSize={
//                         selectedFilters.get("Select Size") ??
//                         selectedFilters.get("Select Rim")
//                       }
//                     />
//                   ))}
//                 </div>
//                 {meta?.pagination?.pageCount > 1 && (
//                   <>
//                     <div className="pt-4 md:pt-6 2xl:pt-10">
//                       <ReactPaginate
//                         previousLabel={
//                           <svg
//                             width="9"
//                             height="14"
//                             viewBox="0 0 9 14"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M7.5 13.25L1.25 7L7.5 0.75"
//                               stroke="#2E3192"
//                               stroke-width="1.5"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             />
//                           </svg>
//                         }
//                         nextLabel={
//                           <svg
//                             width="9"
//                             height="14"
//                             viewBox="0 0 9 14"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               d="M1.5 0.75L7.75 7L1.5 13.25"
//                               stroke="#2E3192"
//                               stroke-width="1.5"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                             />
//                           </svg>
//                         }
//                         breakLabel={"..."}
//                         breakClassName={"break-me"}
//                         pageCount={meta.pagination.pageCount}
//                         marginPagesDisplayed={1}
//                         pageRangeDisplayed={3}
//                         onPageChange={handlePageClick}
//                         containerClassName={"productPagination"}
//                         subContainerClassName={"pages pagination"}
//                         activeClassName={"active"}
//                         forcePage={meta.pagination.page - 1}
//                       />
//                     </div>
//                   </>
//                 )}
//               </>
//             ) : (
//               <div className="pt-4 md:pt-6 2xl:pt-10">
//                 <p className="text-[16px] md:text-[24px] text-center font-semibold">
//                   {meta?.pagination?.pageCount == 0
//                     ? "Sorry, we can't find your combination search!"
//                     : "Please wait, your products are loading."}
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>
//         <PageEnd
//           Title="Find A Dealer"
//           TitleLink="/users/product"
//           EndStaticImage={find2}
//         />
//         <Footer />
//       </>
//     )
//   );
// };

export async function generateMetadata() {
  const apiUrl = getStrapiMedia("/api/find-tyre");
  if (!apiUrl) {
    throw new Error("API URL is null");
  }
  const res = await fetch(apiUrl);
  const pageData = await res.json();

  const attrs = pageData?.data?.attributes || {};

  return {
    title: attrs.seo_title || attrs.title || "Default Title",
    description: attrs.seo_description || "Default Description",
    keywords: attrs.seo_keywords || "",
    openGraph: {
      title: attrs.seo_title,
      description: attrs.seo_description,
      url: process.env.DOMAIN_NAME + (attrs.permalink || ""),
      siteName: "Birla Tyres",
      images: attrs.seo_image?.data
        ? [
            {
              url: getStrapiMedia(attrs.seo_image.data.attributes?.url),
              width: attrs.seo_image.data.attributes?.width,
              height: attrs.seo_image.data.attributes?.height,
              type: attrs.seo_image.data.attributes?.mime,
            },
          ]
        : [],
      type: "website",
    },
    twitter: {
      card: attrs.seo_title,
      title: attrs.seo_title,
      description: attrs.seo_description,
      images: attrs.seo_image?.data
        ? [getStrapiMedia(attrs.seo_image.data.attributes?.url)]
        : [],
    },
    alternates: {
      canonical: process.env.DOMAIN_NAME + (attrs.permalink || ""),
    },
  };
}

export default async function FindTyrePage ()  {
  const apiUrl = getStrapiMedia("/api/find-tyre");
  if (!apiUrl) {
    throw new Error("API URL is null");
  }
  const res = await fetch(apiUrl);
  const pageData = await res.json();

  return (
  <Suspense
    fallback={
      <div>
        <Image className="w-[40px] h-[40px]" src={loadGif} alt="loadigif" />
      </div>
    }
  >
      <FindTyre pageDataFromParent={pageData} />
  </Suspense>)
};

