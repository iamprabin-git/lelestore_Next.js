// components/buyerOfTheMonth.js
import React from "react";
import buyer1 from "../assets/images/client.jpeg";
import Image from "next/image";

function BuyerOfTheMonth() {
  const buyer = [
    {
      name: "Prabin Dangol",
      title: "Top Performing buyer",
      description:
        "He has achieved outstanding results this month, closing multiple deals and providing exceptional client service. He is known for his dedication, market knowledge, and commitment to helping clients find their dream properties.",
      image: buyer1,
    },
    {
      name: "Prabin Dangol",
      title: "Top Performing buyer",
      description:
        "He has achieved outstanding results this month, closing multiple deals and providing exceptional client service. He is known for his dedication, market knowledge, and commitment to helping clients find their dream properties.",
      image: buyer1,
    },
    {
      name: "Prabin Dangol",
      title: "Top Performing buyer",
      description:
        "He has achieved outstanding results this month, closing multiple deals and providing exceptional client service. He is known for his dedication, market knowledge, and commitment to helping clients find their dream properties.",
      image: buyer1,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Buyer of the Month</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {buyer.map((b, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm">
            <Image
              width={500}
              height={500}
              src={b.image}
              alt={b.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold">{b.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{b.title}</p>
              <p className="text-gray-700 mb-4">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerOfTheMonth;
