// components/AgentOfTheMonth.js
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import agent1 from '../assets/images/agent1.jpg'
import Image from "next/image";
import Link from "next/link";

function AgentOfTheMonth() {
  const agent = {
    name: "Prabin Dangol",
    title: "Top Performing Agent",
    description:
      "He has achieved outstanding results this month, closing multiple deals and providing exceptional client service. He is known for his dedication, market knowledge, and commitment to helping clients find their dream properties.",
    image: agent1, // update with your image path
    social: {
      facebook: "https://facebook.com/agentprofile",
      instagram: "https://instagram.com/agentprofile",
      linkedin: "https://linkedin.com/in/agentprofile",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Agent of the Month</h1>
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm">
        <Image
          width={500}
          height={500}
          src={agent.image}
          alt={agent.name}
          className="w-full h-80 object-cover"
        />
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold">{agent.name}</h2>
          <p className="text-sm text-gray-500 mb-4">{agent.title}</p>
          <p className="text-gray-700 mb-4">{agent.description}</p>
          <div className="flex justify-center gap-4 text-lg text-gray-600">
            <Link
              href={agent.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={agent.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href={agent.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentOfTheMonth;
