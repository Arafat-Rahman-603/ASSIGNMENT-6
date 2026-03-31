import React from 'react'

export default function UseGuide() {
  return (
    <section className='bg-gray-100 py-30'>
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-[3rem] font-bold">Get Started in 3 Steps</h2>
            <p className="text-[#627382] text-center">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='flex items-center  justify-center gap-6 m-10 px-20'>
            <div className='hover:scale-105 transition-all bg-white duration-300 flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl p-4 pb-20'>
                <p className='text-md w-8 h-8 flex items-center justify-center self-end font-semibold text-white px-2 py-1 bg-[#4F39F6] rounded-full mb-7'>01</p>
                <img src="./assets/user.png" alt="" style={{backgroundColor: "rgba(79, 57, 246, 0.3)"}} className="w-20 h-20 p-4 rounded-full " />
                <p className="text-2xl font-semibold">Create Account</p>
                <p className="text-[#627382] text-center">Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            <div className='hover:scale-105 transition-all bg-white duration-300 flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl p-4 pb-20'>
                <p className='text-md w-8 h-8 flex items-center justify-center self-end font-semibold text-white px-2 py-1 bg-[#4F39F6] rounded-full mb-7'>02</p>
                <img src="./assets/package.png" alt="" style={{backgroundColor: "rgba(79, 57, 246, 0.3)"}} className="w-20 h-20 p-4 rounded-full " />
                <p className="text-2xl font-semibold">Choose Products</p>
                <p className="text-[#627382] text-center">Browse our catalog and select the tools that fit your needs.</p>
            </div>

            <div className='hover:scale-105 transition-all bg-white duration-300 flex flex-col items-center gap-4 border-2 border-gray-200 rounded-xl p-4 pb-20'>
                <p className='text-md w-8 h-8 flex items-center justify-center self-end font-semibold text-white px-2 py-1 bg-[#4F39F6] rounded-full mb-7'>03</p>
                <img src="./assets/rocket.png" alt="" style={{backgroundColor: "rgba(79, 57, 246, 0.3)", backgroundSize: "contain"}} className="w-20 h-20 px-4 py-4 rounded-full" />
                <p className="text-2xl font-semibold">Start Creating</p>
                <p className="text-[#627382] text-center">Download and start using your premium tools immediately.</p>
            </div>

        </div>
    </section>

  )
}
