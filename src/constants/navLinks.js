const navLinks = [
  {
    route: "/",
    label: "Home",
    isAuth: false,
  },
  {
    route: "/properties",
    label: "Properties",
    isAuth: false,
    submenu: [
      {
        route: "/buy",
        label: "Buy",
      },
      {
        route: "/rent",
        label: "Rent",
      },
    ],
  },
  {
    route: "/agents",
    label: "Agents",
    isAuth: false,
  },
  {
    route: "/about",
    label: "About",
    isAuth: false,
  },
  {
    route: "/contact",
    label: "Contact",
    isAuth: false,
  },
  {
    route: "/company",
    label: "Company",
    isAuth: false,
  },
];
export default navLinks;
