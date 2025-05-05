import Link from "next/link";
import React from "react";

function AboutPage() {
  return (
    <section className="container bg-white dark:bg-gray-900 ">
      <div className=" items-center justify-items-center ">
        <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            ABOUT SASTO GHARJAGGA KAROBAR KENDRA
          </h2>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lele Sasto Gharjagga Karobar Kendra is a renowned and leading realestate brokerage agency in Lele, lalitpur,Nepal. With our slogan, "लेले सस्तो घरजग्गा- उचित मुल्य, भरपर्दो काराेवार ।" (lele sasto gharjagga - fair price, efficient work), we have established ourselves as a trusted and reliable company in the industry.
          </p>
        </div>
      </div>
      <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          With over Five branches and a dedicated team of 50 members, Lalpurja Nepal has been serving clients with transparency and integrity. Our clients choose us because they value our commitment to providing trustworthy and reliable services. At Lalpurja Nepal, we pride ourselves on offering a wide range of property options to our clients, with over 1000+ properties provided to date. We take the time to understand our clients' requirements and match them with suitable properties. Moreover, we provide legal advice through our experienced lawyers and offer quick loan services to genuine clients. If you are looking for an effective real estate brokerage service in Nepal, look no further than Lalpurja Nepal. Contact us today to experience our
          exceptional services and expertise in the industry.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
