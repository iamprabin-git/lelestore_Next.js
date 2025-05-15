
// import axios from 'axios';



// async function ProductByIdPage({params}) {
//   const productId= (await params).productId;
//    const response = await axios.get(`https://node-20250302.vercel.app/api/products/${productId}`);

//   const product = response?.data;
//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.brand}</p>
//       <p>Rs.{product.price}</p>
//       <p>{product.category}</p>
//     </div>
//   );
// }

// export default ProductByIdPage;

// app/product/[productId]/page.js
import axios from 'axios';
import React from 'react';

async function ProductByIdPage({ params }) {
  const { productId } = params;

  try {
    const response = await axios.get(
      `https://ecommerce-test-api-green.vercel.app/api/products/${productId}`
    );

    const product = response.data;

    return (
      <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl text-gray-600 mb-1">Brand: {product.brand}</p>
        <p className="text-xl text-gray-600 mb-1">Category: {product.category}</p>
        <p className="text-xl text-gray-800 mb-4">Price: Rs. {product.price}</p>
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="rounded-md w-full object-cover"
        />
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>
    );
  } catch (error) {
    console.error("Error loading product:", error.message);
    return (
      <div className="p-6 text-center text-red-600">
        <h1>Error loading product details</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

export default ProductByIdPage;

