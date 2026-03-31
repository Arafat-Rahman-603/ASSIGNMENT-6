import React from 'react'

export default function User() {
  return (
    <section className='bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 py-8 sm:py-10 px-4 w-full'>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-30 text-center">
        <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">50K+</h2>
            <p className="text-[#FFFFFF]">Active Users</p>
        </div>
        <div className="hidden sm:block w-[1px] h-10 bg-white"></div>
        <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">200+</h2>
            <p className="text-[#FFFFFF]">Premium Tools</p>
        </div>
        <div className="hidden sm:block w-[1px] h-10 bg-white"></div>
        <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">4.9</h2>
            <p className="text-[#FFFFFF]">Rating</p>
        </div>
      </div>
    </section>
  )
}
