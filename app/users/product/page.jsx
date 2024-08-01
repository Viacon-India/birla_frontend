import React from 'react'
import Link from 'next/link';

const ProductPage = async () => {
const res= await fetch("https://jsonplaceholder.typicode.com/posts",);
const posts = await res.json();

return (
<>
  <h1>product page</h1>
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
  </div>
</>
)
}

export default ProductPage