"use client"

import { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import NewHomepage from "./components/homepage/NewHomepage";
// import Cursor from "../app/components/Cursor"



export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) return <Loader />;

  return (
    <>
      {/* <Cursor /> */}
      <Navbar />
      <NewHomepage />
      <Footer />
    </>
  );
}



{/* <div className="w-full flex items-start gap-10 mt-4 md:mt-10">
<div className="w-full md:w-[30%] bg-primary border border-primary rounded-xl text-white leading-[17px] flex flex-col items-start">
  {section.collection.map((collection) => (
    <button
      key={collection.id}
      className={`p-3 w-full text-left rounded-lg transition duration-300 ${
        activeTab === collection.id
          ? "bg-secondary"
          : "bg-transparent"
      }`}
      onClick={() => setActiveTab(collection.id)}
    >
      {collection.description}
    </button>
  ))}
</div>

<div className="w-full md:w-[70%]">
  {section.collection.map((collection) => {
    if (collection.id !== activeTab) return null;

    return (
      <div key={collection.id}>
        <h3
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {collection.description}
        </h3>
        {collection.content.map((block, index) => {
          return (
            <p
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {block.children.map((child) => child.text)}
            </p>
          );
        })}
      </div>
    );
  })}
</div>
</div> */}