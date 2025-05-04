"use client"

import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full shadow dark:bg-gray-800 md:max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Lele Sasto GharJagga Karobar Kendra</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className=" hover:underline">About</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Brand Center</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social links</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
           
            <li className="mb-4">
              <a href="#" className="hover:underline">Twitter</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Licensing</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">iOS</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Android</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Windows</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">MacOS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <Link href="https://flowbite.com/">Lele Sasto Gharjagga Karobar Kendra™</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
         <Link href="https://dangolprabin.com.np">Designed by Prabin Dangol</Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer



  

