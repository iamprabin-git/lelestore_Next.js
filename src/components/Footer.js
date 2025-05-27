"use client"
import Image from 'next/image'
import logo from '../assets/images/Logoz.png'
import BrowseLinks from '@/constants/browse'
import footerLinks from '@/constants/footer'
import UsefulLinks from '@/constants/usefulLinks'
import Link from 'next/link'
import React, { use } from 'react'
import SocialsLinks from '@/constants/socials'
import SocialIcons from './Social'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full shadow dark:bg-gray-800 md:max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">

      <div>
        <div className="mb-8 flex text-lg items-center">
           <Image src={logo}
            height={150}
            width={150} 
            className="h-15 w-auto" alt=" Logo" />
            <h1>Lele Store</h1>
            </div>
       
          <h4 className="mb-6 text-sm font-medium text-gray-900 dark:text-white">Welcome to Lele Store</h4>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <SocialIcons/>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            {
              footerLinks.map((footerLink, i) => (
                <li className="mb-4" key={i}>
                  <Link href={footerLink.route} className="hover:underline">{footerLink.label}</Link>
                </li>
              ))
            }
           
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Browse Products</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
           {
            BrowseLinks.map((BrowseLink, browseindex) => (
              <li className="mb-4" key={browseindex}>
                <Link href={BrowseLink.route} className="hover:underline">{BrowseLink.label}</Link>
              </li>
            ))
           }
            
          </ul>
        </div>
       
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Useful Links</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {
          UsefulLinks.map((usefulLink, usefulindex) => (
            <li className="mb-4" key={usefulindex}>
              <Link href={usefulLink.route} className="hover:underline">{usefulLink.label}</Link>
            </li>
          ))
        }
          </ul>
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <Link href="https://flowbite.com/">Lele Store™</Link>. All Rights Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
         <Link href="https://dangolprabin.com.np">Designed by Prabin Dangol</Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;



  

