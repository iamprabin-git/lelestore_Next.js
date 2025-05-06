// components/PricingTable.jsx
import pricingPackages from "@/constants/price";
import React from "react";
 // adjust path as needed

export default function PricingTable() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Pricing</h1>
      <p className="text-center text-gray-500 mb-12">
       Lele Sasto Gharjagga Karobar Kendra provides different kinds of services for buyers and sellers of properties in Nepal.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPackages.map((pkg) => (
          <div
            key={pkg.title}
            className={`border rounded-2xl shadow-lg p-6 flex flex-col ${
              pkg.recommended ? "border-green-500 shadow-green-200" : ""
            }`}
          >
            {pkg.recommended && (
              <div className="text-center text-sm text-white bg-green-500 rounded-full px-3 py-1 inline-block mb-3">
                Recommended
              </div>
            )}
            <h2 className="text-2xl font-semibold text-center mb-2">{pkg.title}</h2>
            <p className="text-center text-green-600 text-3xl font-bold mb-4">
              NRs. {pkg.price.toLocaleString()}/-
            </p>
            <p className="text-center text-gray-500 mb-4">{pkg.description}</p>
            <ul className="flex-1 space-y-2 mb-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Choose {pkg.title}
            </button>
          </div>
        ))}
      </div>
     <p className="text-sm text-gray-500 mt-12">Note:on occasssion of Newyear 2082, all the prices will get 20% discount in mentioned pricelist </p>
    </div>
  );
}
