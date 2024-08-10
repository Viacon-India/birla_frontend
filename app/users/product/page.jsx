
"use client"
import React  from "react";
import { useEffect } from "react";
import Navbar from "../../../app/components/navbar/navbar"
import Footer from "../../../app/components/footer/footer"
import NewHomepage from "../../../app/components/homepage/NewHomepage";

const ProductPage = () => {
  return (
    <>
      {/* <h1>product page</h1>
  <div className="new grid grid-cols-4 gap-4">
    {posts.map(post=>
    <div className="card w-96 bg-base-100 shadow-xl" key={post.id}>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
        <div className="card-actions justify-end">
          <Link href={`/users/product/${post.id}`} className="btn btn-primary">See detail</Link>
          </div>
        </div>
    </div>
    )}
  </div> */}
  <Navbar />
  <NewHomepage />
  <Footer />
    </>
  );
};

export default ProductPage;
