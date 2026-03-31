import React from 'react'

export default function User() {
  return (
    <section className='bg-[#4F39F6] py-10 w-full flex justify-center items-center gap-30'>
        <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white">50K+</h2>
            <p className="text-[#FFFFFF]">Active Users</p>
        </div>
        <div className="w-[1px] h-10 bg-white"></div>
        <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white">200+</h2>
            <p className="text-[#FFFFFF]">Premium Tools</p>
        </div>
        <div className="w-[1px] h-10 bg-white"></div>
        <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-white">4.9</h2>
            <p className="text-[#FFFFFF]">Rating</p>
        </div>
    </section>
  )
}
