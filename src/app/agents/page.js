import Image from "next/image";
import Link from "next/link";
import React from "react";
import AgentsLinks from "@/constants/agents";

function Agentspage() {
  return (
    <section className="bg-white dark:bg-gray-900 container">
      <h1 className="text-3xl font-bold underline pt-6 text-center">
        Agents List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {AgentsLinks.map((agentsLink, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href="#">
              <Image
                height={100}
                width={100}
                className="h-80 w-auto p-8 rounded-t-lg mt-3 mx-auto"
                src={agentsLink.image_url}
                alt={`${agentsLink.name} image`}
              />
            </Link>
            <div className="px-5 pb-5 text-center">
              <Link href="#">
                <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {agentsLink.name}
                </h1>
                <p className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  {agentsLink.address}
                </p>
              </Link>
              <div className="pt-4">
                <Link
                  href="/"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Agent Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Agentspage;
