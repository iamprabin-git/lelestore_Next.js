// constants/TeamMembers.js
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import team1 from "../assets/images/prabin.png";
import team2 from "../assets/images/agent2.jpg";
import team3 from "../assets/images/agent3.png";
import team4 from "../assets/images/samjhana.png";

const TeamMembers = [
  
  {
    name: "Manoj Nagarkoti",
    position: "Founder & CEO",
    image: team2,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },
  
  {
    name: "Sujan Bhandari",
    position: "Founder/property Consultant/Voice over artist",
    image: team3,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },

  {
    name: "Prabin Dangol",
    position: "Graphics Designer/Web Designer/property Consultant",
    image: team1,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },
  {
    name: "Samajhana Silwal",
    position: "Web Developer",
    image: team4,
    socials: [
      { icon: FaFacebook, link: "https://www.facebook.com" },
      { icon: FaInstagram, link: "https://www.twitter.com" },
      { icon: FaLinkedin, link: "https://www.linkedin.com" },
    ],
  },
];

export default TeamMembers;
