"use client";
import Image from "next/image";
import image from "../../../assets/images/about1.png";
import React, { useState } from "react";
import MeetOurTeam from "@/components/OurTeam";
import ServicesSection from "@/components/Services";

function AboutPage() {

  const [activeTab, setActiveTab] = useState("vision");
  return (
    <section className="container relative bg-white dark:bg-gray-900 py-32">
      <div>
        <h1 className="text-3xl font-bold underline pt-6 text-center">
          About Us
        </h1>
        <Image
          height={500}
          width={1200}
          className="h-150 w-auto p-8 rounded-t-lg mt-3 mx-auto"
          src={image}
          alt="Logo"
        />
      </div>
      {/* First div (floating card) */}
      <div className="absolute inset-x-0 top-150 mx-auto max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 z-10">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          ABOUT SASTO GHARJAGGA KAROBAR KENDRA
        </h2>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
          Lele Sasto Gharjagga Karobar Kendra is a renowned and leading real estate brokerage agency in Lele, Lalitpur, Nepal. With our slogan,{" "}<strong>"लेले सस्तो घरजग्गा – उचित मूल्य, भरपर्दो कारोबार।"</strong>{" "} (Lele Sasto Gharjagga – Fair Price, Trusted Deal), we have established ourselves as a trusted and reliable company in the industry.
        </p>
      </div>

      {/* Second div (main content) */}
      <div className="relative w-full mx-auto p-5 pt-40 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-1">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          With over one branches and a dedicated team of 5 members,{" "}<strong>Lele Sasto Gharjagga Karobar Kendra</strong> has been serving clients with transparency and integrity. Our clients choose us because we take pride in our work and they value our commitment to providing trustworthy and reliable services. We pride ourselves on offering a wide range of property
          options to our clients, with over 1000+ properties provided to date.We take the time to understand our clients' requirements and match them with suitable properties. Moreover, we provide legal advice through our experienced lawyers and offer quick loan services to meet the needs of our genuine clients. If you are looking for an effective real estate brokerage service in Nepal, look no further than Lele Sasto Gharjagga Karobar Kendra. Contact us today to experience our exceptional services and expertise in the industry.
        </p>
      </div>

      {/* Vision & Mission Tabs */}
      <div className="w-full mx-auto p-6 mt-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Our Vision & Mission
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "vision"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            }`}
          >
            Vision
          </button>
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "mission"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            }`}
          >
            Mission
          </button>
        </div>

        {/* Content */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {activeTab === "vision" && (
            <p>
              Our vision is to be the most trusted and affordable real estate agency in Lele, Lalitpur—connecting people with their dream properties at fair prices, while promoting transparency and community development.
            </p>
          )}
          {activeTab === "mission" && (
            <p>
              Our mission is to deliver professional, honest, and efficient real estate services. We aim to provide a wide selection of properties, guide clients with legal expertise, and build long-term relationships through exceptional customer care.
            </p>
          )}
        </div>
      </div>
          
          <ServicesSection />
          <MeetOurTeam/>
     

    </section>
  );
}

export default AboutPage;
