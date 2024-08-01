'use client'
async function getProduct(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

export default async function ProductCardDetail({ params }) {
  const product = await getProduct(params.id);

  //side-modal function
  function addToCart() {
    // var sideModal = document.getElementById(side-modal);
    alert('news');
  }

  return (
    <main className="bg-[#F3F7FA] relative">
      <nav>
        <h2 className="text-4xl underline underline-offset-2">Product Detail :{product.id}</h2>
      </nav>
      <div className="card w-[80%] bg-base-100 shadow-lg m-16">
        <div className="card-body">
          <h2 className="card-title">
            <span className="text-red-400">product-title : </span>{product.title}</h2>
          <p><span className="text-red-400">product-description : </span>{product.body}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>addToCart()} className="btn btn-secondary drawer-button">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="side-modal">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa suscipit nostrum, corrupti eos molestias laborum et odio labore ab neque esse reprehenderit animi doloribus dolor velit totam ipsum sint quod temporibus quam perspiciatis perferendis dicta!</p>
      </div>
    </main>
  );
}
