"use client";
import React from "react";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import reviews from "@/constants/review";

function ClientReviews() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className="rounded-full object-cover mb-4 h-30 w-auto"
              />
              <FaQuoteLeft className="w-5 h-5 text-blue-500 mb-2 opacity-70" />
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{review.message}"</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
