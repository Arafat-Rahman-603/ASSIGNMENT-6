import React from 'react'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#101727] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">DigiTools</h3>
          <p className="text-[#627382] text-sm leading-relaxed">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-4">Product</p>
          <ul className="space-y-2 text-[#627382] text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Templates</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Company</p>
          <ul className="space-y-2 text-[#627382] text-sm">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Resources</p>
          <ul className="space-y-2 text-[#627382] text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Social Links</h4>
          <div className="flex gap-4 text-lg text-black">
            <a href='https://www.instagram.com/' className="hover:text-pink-500 cursor-pointer bg-white p-2 rounded-full "><FaInstagram /></a>
            <a href='https://www.facebook.com/' className="hover:text-blue-500 cursor-pointer bg-white p-2 rounded-full"><FaFacebookF /></a>
            <a href='https://www.twitter.com/' className="hover:text-gray-300 cursor-pointer bg-white p-2 rounded-full"><FaXTwitter /></a>
          </div>
        </div>

      </div>
<div className="border-t border-[#1c2436] flex flex-col sm:flex-row justify-between items-center">
      <div className="text-center sm:text-start text-sm text-[#627382] py-4 px-6">
        © 2026 Digitools. All rights reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center text-sm text-[#627382] pb-4 sm:py-4 px-6">
        <p className="">Privacy Policy</p>
        <p className="">Terms of Service</p>
        <p className="">Cookies</p>
      </div>
      </div>
    </footer>
  )
}