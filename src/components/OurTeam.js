// components/MeetOurTeam.js
import TeamMembers from "@/constants/teamMember";
import Image from "next/image";
import React from "react";


function MeetOurTeam() {
  return (
    <section className="py-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
        {TeamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-sm bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-5 text-center"
          >
            <Image
              width={100}
              height={100}
              src={member.image}
              alt={member.name}
              className="w-auto h-50 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-400">{member.position}</p>
            <div className="flex justify-center gap-2 mt-4">
              {member.socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-gray-500 hover:text-blue-600" />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetOurTeam;
