import { ABOUT_ROUTE, AGENTS_ROUTE, BUY_ROUTE, COMPANY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PRICING_ROUTE, PROPERTIES_ROUTE, RENT_ROUTE, SERVICE_ROUTE, TEAM_ROUTE } from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
    isAuth: false,
  },
  {
    route: PROPERTIES_ROUTE,
    label: "Properties",
    isAuth: false,
    submenu: [
      {
        route: BUY_ROUTE,
        label: "Buy",
      },
      {
        route: RENT_ROUTE,
        label: "Rent",
      },
    ],
  },
  {
    route: AGENTS_ROUTE,
    label: "Agents",
    isAuth: true,
  },
 
  {
    route: CONTACT_ROUTE,
    label: "Contact",
    isAuth: false,
  },
  {
    route: COMPANY_ROUTE,
    label: "Company",
    isAuth: false,
    submenu: [
      {
        route: ABOUT_ROUTE,
        label: "About Us",
      },
      {
        route: TEAM_ROUTE,
        label: "Our Team",
      },
      {
        route: SERVICE_ROUTE,
        label: "Our Services",
      },
      {
        route: PRICING_ROUTE,
        label: "Pricing of Listings",
      },
    ],
  },
];
export default navLinks;
