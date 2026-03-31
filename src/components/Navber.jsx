import React from 'react'
import { CiShoppingCart } from "react-icons/ci";


export default function Navber({ cartCount = 0, onCartClick }) {
  return (
    <nav className='flex flex-wrap justify-between items-center gap-3 px-4 sm:px-6 lg:px-20 py-4 sm:py-5 border-b border-gray-200'>
        <h2 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 bg-clip-text text-transparent">DigiTools</h2>
        <ul className='hidden lg:flex items-center font-semibold gap-6'>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Products</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Features</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Pricing</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>Testimonials</li>
            <li className='cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300'>FAQ</li>
        </ul>
        <div className="nav-btn ml-auto lg:ml-0 flex font-semibold gap-3 sm:gap-4 items-center">
            <button
              onClick={onCartClick}
              className="font-bold text-xl cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300 relative"
            >
                <CiShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF2D8D] text-white text-[10px] font-semibold min-w-4 h-4 px-1 rounded-full flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
            </button>
            <button className="hidden sm:block cursor-pointer hover:text-[#4F39F6] hover:scale-105 transition-all duration-300">Login</button>
            <button className="px-3 sm:px-4 py-2 bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 rounded-full text-white text-sm sm:text-lg cursor-pointer hover:scale-105 transition-all duration-300">Get Started</button>
        </div>
    </nav>
  )
}
