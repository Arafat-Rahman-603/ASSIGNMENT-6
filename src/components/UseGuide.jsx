import React from 'react'

export default function UseGuide() {
  return (
    <section className='bg-gray-100 py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20'>
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-center">Get Started in 3 Steps</h2>
            <p className="text-[#627382] text-center">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            <div className='hover:scale-[1.02] transition-all bg-white duration-300 flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl p-5 pb-25'>
                <p className='text-md w-8 h-8 flex items-center justify-center self-end font-semibold text-white px-2 py-1 bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 rounded-full mb-2'>01</p>
                <img src="./assets/user.png" alt="" style={{backgroundColor: "rgba(79, 57, 246, 0.3)"}} className="w-20 h-20 p-4 rounded-full " />
                <p className="text-xl sm:text-2xl font-semibold">Create Account</p>
                <p className="text-[#627382] text-center">Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            <div className='hover:scale-[1.02] transition-all bg-white duration-300 flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl p-5 pb-25'>
                <p className='text-md w-8 h-8 flex items-center justify-center self-end font-semibold text-white px-2 py-1 bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 rounded-full mb-2'>02</p>
                <img src="./assets/package.png" alt="" style={{backgroundColor: "rgba(79, 57, 246, 0.3)"}} className="w-20 h-20 p-4 rounded-full " />
                <p className="text-xl sm:text-2xl font-semibold">Choose Products</p>
                <p className="text-[#627382] text-center">Browse our catalog and select the tools that fit your needs.</p>
            </div>

            <div className='hover:scale-[1.02] transition-all bg-white duration-300 flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl p-5 pb-25'>
                <p className='text-md w-8 h-8 flex items-center justify-center self-end font-semibold text-white px-2 py-1 bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 rounded-full mb-2'>03</p>
                <img src="./assets/rocket.png" alt="" style={{backgroundColor: "rgba(79, 57, 246, 0.3)", backgroundSize: "contain"}} className="w-20 h-20 px-4 py-4 rounded-full" />
                <p className="text-xl sm:text-2xl font-semibold">Start Creating</p>
                <p className="text-[#627382] text-center">Download and start using your premium tools immediately.</p>
            </div>

        </div>
    </section>

  )
}
