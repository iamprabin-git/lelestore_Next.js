"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React from "react";
import Slider from "react-slick";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import reviews from "@/constants/review";

function ClientReviewCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center px-8">
              <Image
                src={review.image}
                alt={review.name}
                width={100}
                height={100}
                className="rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <FaQuoteLeft className="w-8 h-8 text-blue-600 mb-4 opacity-60" />
              <p className="text-gray-800 dark:text-gray-300 italic max-w-xl">
                "{review.message}"
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">{review.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{review.location}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ClientReviewCarousel;
