import React from 'react'
import { CiShoppingCart } from "react-icons/ci";


export default function Navber() {
  return (
    <nav className='flex justify-between items-center px-20 py-5 border-b-1 border-gray-200'>
        <h2 className="text-3xl font-bold text-[#4F39F6]">DigiTools</h2>
        <ul className='flex items-center font-semibold gap-6'>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Products</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Features</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Pricing</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Testimonials</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>FAQ</li>
        </ul>
        <div className="nav-btn flex font-semibold gap-4 items-center">
            <button className="font-bold text-xl cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300">
                <CiShoppingCart />
            </button>
            <button className="cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300">Login</button>
            <button className="px-4 py-2 bg-[#4F39F6] rounded-full text-white text-lg cursor-pointer hover:scale-105 transition-all duration-300">Get Started</button>
        </div>
    </nav>
  )
}
