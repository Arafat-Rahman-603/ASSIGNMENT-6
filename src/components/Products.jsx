import React from 'react'

export default function Products() {
  return (
    <section>
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-[3rem] font-bold">Premium Digital Tools</h2>
            <p className="text-[#627382] md:w-[42%] text-center">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>
        <div className='flex items-center gap-4 justify-center mt-4'>
            <button className="px-3 py-1 bg-[#4F39F6] rounded-full text-white text-lg cursor-pointer hover:scale-105 transition-all duration-300">Products</button>
            <button className="flex items-center gap-1 px-3 py-1 rounded-full text-lg cursor-pointer hover:scale-105 hover:text-[#4F39F6] transition-all duration-300">
                Cart
            </button>
        </div>
    </section>
  )
}
