import { ABOUT_ROUTE, NEWS_ROUTE,  CART_ROUTE, COMPANY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PRICING_ROUTE, PRODUCTS_ROUTE,  SERVICE_ROUTE, TEAM_ROUTE } from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
    isAuth: false,
  },
  {
    route: PRODUCTS_ROUTE,
    label: "Products",
    isAuth: false,
    
  },
{
  route: NEWS_ROUTE,
  label: "News",
  isAuth: false,
},
 
  {
    route: CONTACT_ROUTE,
    label: "Contact",
    isAuth: false,
  },
  {
    route: CART_ROUTE,
    label: "Cart",
    isAuth: true,
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
