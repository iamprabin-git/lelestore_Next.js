// components/PropertyDetails.js
import React from "react";
import Image from "next/image";

function PropertyDetails() {
  const property = {
    title: "Luxury Villa in Kathmandu",
    description:
      "A beautiful 4-bedroom villa with modern design, garden, and swimming pool.",
    amenities: [
      "Swimming Pool",
      "Gym",
      "Garden",
      "2-Car Garage",
      "24/7 Security",
    ],
    images: [
      "/images/property1.jpg",
      "/images/property2.jpg",
      "/images/property3.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // embedded YouTube link
    coordinates: { lat: 27.7172, lng: 85.3240 }, // Kathmandu
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-700 mb-6">{property.description}</p>

      {/* Image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {property.images.map((img, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={img}
              alt={`Property image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Amenities */}
      <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
      <ul className="list-disc pl-6 mb-6">
        {property.amenities.map((amenity, index) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>

      {/* Embedded YouTube video */}
      <h2 className="text-2xl font-semibold mb-2">Property Tour Video</h2>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src={property.videoUrl}
          title="Property Tour"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>

      {/* Google Maps iframe */}
      <h2 className="text-2xl font-semibold mb-2">Location</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&hl=es;z=14&output=embed`}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default PropertyDetails;
