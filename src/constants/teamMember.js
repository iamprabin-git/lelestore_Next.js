// constants/TeamMembers.js
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import team1 from "../assets/images/agent1.jpg";
import team2 from "../assets/images/agent2.jpg";
import team3 from "../assets/images/agent3.png";
import team4 from "../assets/images/samjhana.jpg";

const TeamMembers = [
  {
    name: "Prabin Dangol",
    position: "Founder & CEO",
    image: team1,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },
  {
    name: "Manoj Nagarkoti",
    position: "Property Consultant",
    image: team2,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },
  {
    name: "Sujan Bhandari",
    position: "Legal Advisor",
    image: team3,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },
  {
    name: "Samajhana Silwal",
    position: "Legal Advisor",
    image: team4,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },
];

export default TeamMembers;
