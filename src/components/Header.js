"use client";

import Image from "next/image";
import logo from "../assets/images/logo-3.png";
import Link from "next/link";
import navLinks from "@/constants/navLinks";
import Navlink from "./Navlink";



function Header() {
  const isAuth=false;
 
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl shadow-lg flex flex-wrap items-center justify-between mx-auto p-4">
          <Image
            src={logo}
            height={150}
            width={150}
            className="h-15 w-auto"
            alt=" Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Link href="/">Lele Sasto Ghar jagga Karobar Kendra</Link>
            
          </span>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isAuth ? (
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
  <span className="sr-only">Open user menu</span>
  <Image className="w-8 h-8 rounded-full" src={logo} alt="user photo"/>
  </button>

            ):
            <Link
              href="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>}
          </div>

          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((navLink, index) => 
               isAuth || !navLink.isAuth ? (<Navlink navLink={navLink} isAuth={isAuth} key={index} />

               ):null
                 )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;