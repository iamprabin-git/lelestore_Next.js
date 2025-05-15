"use client";

import { useState, useEffect } from "react";
import { getPropertyById } from "@/api/properties";
import Image from "next/image";

async function fetchProduct(id) {
  const response = await getPropertyById(id);
  return response.data;
}

export default function ProductByIdPage({ params }) {
  const productId = params.propertyId;
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchProduct(productId);
        setProduct(data);
        setMainImage(data.imageUrls[0]);
      } catch (err) {
        setError("Failed to load product details");
      }
    }
    load();
  }, [productId]);

  if (error) {
    return <div className="text-red-600 p-6">{error}</div>;
  }

  if (!product) {
    return <div className="p-6 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-sm text-gray-500 mb-4">
        Brand: {product.brand} | Category: {product.category}
      </p>

      {/* Main Image */}
      <div className="mb-4">
        <Image
          src={mainImage}
          alt={product.name}
          width={800}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-3 mb-6">
        {product.imageUrls.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`border rounded-md overflow-hidden ${
              img === mainImage ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <Image src={img} alt={`Thumbnail ${index}`} width={100} height={60} />
          </button>
        ))}
      </div>

      <p className="text-gray-700 text-lg mb-4">{product.description}</p>

      <div className="text-xl font-semibold text-green-700 mb-2">
        Rs. {product.price}
      </div>

      <div className="text-sm text-gray-500 mb-2">
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </div>

      <p className="text-sm text-gray-400">
        Posted on {new Date(product.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
