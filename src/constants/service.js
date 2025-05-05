// constants/Services.js
import { FaHome, FaMoneyBillWave, FaHandshake } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { MdAssuredWorkload, MdEngineering, MdEditDocument } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { IoMan } from "react-icons/io5";

const Services = [
    {
        title: "Property Listings",
        description: "Lele Sasto Gharjagga Karobar Kendra assists property owners in listing their properties for sale or rent on various platforms, ensuring maximum exposure to potential buyers or tenants.",
        icon: FcAdvertising,
      },
  {
    title: "Buy Property",
    description: "Helping you buy land, houses, and apartments at the best prices.",
    icon: FaHome,
  },
  {
    title: "Sell Property",
    description: "Get the best value for your property with our expert brokers.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Legal Assistance",
    description: "We provide legal advice and documentation support for your property.",
    icon: GoLaw,
  },
  
  {
    title: "Mortgage Finding Support / Loan",
    description: "At Lele Sasto Gharjagga Karobar Kendra, we assist you in finding suitable mortgage options, helping you navigate the complex process of securing financing for your property",
    icon: MdAssuredWorkload,
  },
  {
    title: "Property Management",
    description: "We provide property management services to help you maintain and manage your property effectively.",
    icon: FaHandshake,
  },
  {
    title: "Property Valuation",
    description: "We provide property valuation services to help you determine the market value of your property.",
    icon: MdEngineering,
  },
  {
    title: "Seller/Landlord Representation",
    description: "We work with sellers and landlords at Lele Sasto Gharjagga Karobar Kendra to accurately price properties, negotiate offers, and manage the sales or rental process.",
    icon: IoMan,
  },
  {
    title: "Paperwork and Documentation",
    description: "We handle the intricate paperwork involved in real estate transactions at Lele Sasto Gharjagga Karobar Kendra, ensuring all legal and regulatory requirements are met seamlessly.",
    icon: MdEditDocument,
  }
];

export default Services;
