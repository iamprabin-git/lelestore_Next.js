const navLinks = [
  {
    route: "/",
    Label: "Home",
    isAuth: false,
  },
  {
    route: "/properties",
    Label: "Properties",
    isAuth: false,
    submenu: [
      {
        route: "/buy",
        Label: "Buy",
      },
      {
        route: "/rent",
        Label: "Rent",
      },
    ],
  },
  {
    route: "/agents",
    Label: "Agents",
    isAuth: false,
  },
  {
    route: "/about",
    Label: "About",
    isAuth: false,
  },
  {
    route: "/contact",
    Label: "Contact",
    isAuth: false,
  },
  {
    route: "/company",
    Label: "Company",
    isAuth: false,
  },
];
export default navLinks;
