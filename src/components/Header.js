"use client";

import Image from "next/image";
import logo from "../assets/images/logo-3.png";
import Link from "next/link";
import navLinks from "@/constants/navLinks";
import Navlink from "./Navlink";
import { useDispatch, useSelector } from "react-redux";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { logoutUser } from "@/redux/auth/authSlice";
function Header() {
  const { user } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl shadow-lg flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} height={150} width={150} className="h-15 w-auto" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Lele Sasto Gharjagga Karobar Kendra
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {!user && (
              <>
                <Link
                  href="/login"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Sign Up
                </Link>
              </>
            )}
            {user && (
              <div className="text-sm text-gray-800 dark:text-white flex">
               <h2 className="mr-2">Welcome, {user.name || "User"}</h2> 
                <button onClick={() => dispatch(logoutUser())} className="bg-slate-700 p-2 text-white rounded"><RiLogoutBoxRLine /></button>
              </div>
            )}

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map(
                (navLink, i) =>
                  (user || !navLink.isAuth) && <Navlink navLink={navLink} key={i} />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
