// // components/PropertyDetails.jsx
// "use client";

// import React from "react";
// import Image from "next/image";
// import { propertyDetails } from "@/constants/propertyDetails";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// export default function PropertyDetails() {
//   return (
//     <div>
//       {/* Hero */}
//       <div className="relative h-72 md:h-96">
//         <Image
//           src={propertyDetails.images[0]}
//           alt={propertyDetails.title}
//           fill
//           className="object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-12 text-white">
//           <h1 className="text-3xl md:text-5xl font-bold">{propertyDetails.title}</h1>
//           <p className="text-lg">{propertyDetails.location}</p>
//           <p className="text-xl font-semibold text-yellow-300">रु {propertyDetails.price.toLocaleString()}</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Gallery */}
//         <Swiper spaceBetween={10} slidesPerView={1} className="mb-6 md:mb-10">
//           {propertyDetails.images.map((img, idx) => (
//             <SwiperSlide key={idx}>
//               <Image
//                 src={img}
//                 alt={`Property image ${idx + 1}`}
//                 width={800}
//                 height={500}
//                 className="rounded-lg w-full h-auto object-cover"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Overview */}
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-semibold mb-2">Overview</h2>
//             <ul className="text-gray-700 space-y-1">
//               <li><b>Property ID:</b> {propertyDetails.propertyId}</li>
//               <li><b>Last Updated:</b> {propertyDetails.lastUpdated}</li>
//               <li><b>Category:</b> {propertyDetails.category.join(", ")}</li>
//             </ul>

//             <h2 className="text-2xl font-semibold mt-6 mb-2">Description</h2>
//             <p className="text-gray-700">{propertyDetails.description}</p>
//           </div>

//           {/* Features + distances */}
//           <div>
//             <h2 className="text-2xl font-semibold mb-2">Features</h2>
//             <ul className="text-gray-700 flex flex-wrap gap-2">
//               {propertyDetails.features.map((feature, idx) => (
//                 <li
//                   key={idx}
//                   className="bg-gray-100 px-3 py-1 rounded-full text-sm"
//                 >
//                   ✅ {feature}
//                 </li>
//               ))}
//             </ul>

//             <h2 className="text-2xl font-semibold mt-6 mb-2">Distances</h2>
//             <ul className="grid grid-cols-2 gap-2 text-gray-700">
//               {propertyDetails.distances.map((dist, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center gap-2 bg-gray-50 rounded-lg p-2"
//                 >
//                   <span className="text-lg">{dist.icon}</span>
//                   <span>{dist.name} - {dist.distance}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Map */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-2">Location Map</h2>
//           <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
//             <iframe
//               src={`https://www.google.com/maps?q=${encodeURIComponent(propertyDetails.location)}&output=embed`}
//               title="Property Map"
//               className="w-full h-full border-0"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>

//         {/* Video */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold mb-2">Property Video</h2>
//           <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
//             <iframe
//               src={propertyDetails.videoUrl}
//               title="Property Video"
//               className="w-full h-full border-0"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>

//         {/* Contact Agent */}
//         <div className="mt-10 p-6 bg-yellow-100 rounded-lg text-center">
//           <h2 className="text-2xl font-bold mb-2">Interested in this property?</h2>
//           <p className="mb-4">Call us at: <b>9765726294, 9818366209, 9849150004</b></p>
//           <a
//             href={`tel:9765726294`}
//             className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition"
//           >
//             📞 Call Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
