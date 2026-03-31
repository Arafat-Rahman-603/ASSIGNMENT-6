import React from 'react'
import { FaCheck } from "react-icons/fa6";

export default function Priceing() {
  return (
    <>
    <section className='py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20'>
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold text-center">Simple, Transparent Pricing</h2>
            <p className="text-[#627382] text-center">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 mt-10'>
            <div className='flex hover:scale-105 transition-all duration-300 flex-col w-full items-start gap-2 border-2 border-gray-200 rounded-xl p-4 '>
                <p className='text-2xl font-semibold'>Starter</p>
                <p className="text-[#627382]">Perfect for getting started</p>
                <h2 className="text-3xl font-semibold my-4">$0<span className="text-sm font-normal">/month</span></h2>
                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Access to 10 free tools</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Basic templates</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Community support</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">1 project per month</p>
                </div>


                <button className="px-4 py-2 bg-[#4F39F6] mt-8 rounded-full text-white text-lg cursor-pointer hover:scale-105 transition-all duration-300 w-full">Get Started Free</button>
            </div>

            <div className='flex relative flex-col hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-600 via-violet-600 to-violet-600 w-full items-start gap-2 border-2 border-gray-200 rounded-xl p-4 '>
                <p className="absolute top-[-3%] left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded-xl text-[#BB4D00] font-semibold text-sm bg-yellow-200 whitespace-nowrap">Most Popular</p>
                <p className='text-2xl font-semibold text-white'>Pro</p>
                <p className=" text-gray-300">Best for professionals</p>
                <h2 className="text-3xl font-semibold my-4 text-white">$29<span className="text-sm font-normal">/month</span></h2>
                <div className="flex items-center gap-2 text-white">
                    <FaCheck className="" />
                    <p className="">Access to all premium tools</p>
                </div>

                <div className="flex items-center gap-2 text-white">
                    <FaCheck className="" />
                    <p className="">Unlimited templates</p>
                </div>

                <div className="flex items-center gap-2 text-white">
                    <FaCheck className="" />
                    <p className="">Priority support</p>
                </div>

                <div className="flex items-center gap-2 text-white">
                    <FaCheck className="" />
                    <p className="">Unlimited projects</p>
                </div>

                <div className="flex items-center gap-2 text-white">
                    <FaCheck className="" />
                    <p className="">Cloud sync</p>
                </div>

                <div className="flex items-center gap-2 text-white">
                    <FaCheck className="" />
                    <p className="">Advanced analytics</p>
                </div>



                <button className="px-4 py-2 bg-white mt-2 rounded-full text-[#4F39F6] text-lg cursor-pointer hover:scale-105 transition-all duration-300 w-full">Get Started Free</button>
            </div>

            <div className='flex hover:scale-105 transition-all duration-300 flex-col w-full items-start gap-2 border-2 border-gray-200 rounded-xl p-4 '>
                <p className='text-2xl font-semibold'>Enterprise</p>
                <p className="text-[#627382]">For teams and businesses</p>
                <h2 className="text-3xl font-semibold my-4">$99<span className="text-sm font-normal">/month</span></h2>
                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Everything in Pro</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Team collaboration</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Custom integrations</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Dedicated support</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">SLA guarantee</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p className="text-[#627382]">Custom branding</p>
                </div>


                <button className="px-4 py-2 bg-[#4F39F6] mt-2 rounded-full text-white text-lg cursor-pointer hover:scale-105 transition-all duration-300 w-full">Get Started Free</button>
            </div>


        </div>
    </section>

    <section className='bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 py-14 sm:py-20 px-4 sm:px-6 lg:px-20 flex flex-col justify-center items-center'>
       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white">Ready to Transform Your Workflow?</h2>
       
       <p className="text-center text-gray-200 mt-6">Join thousands of professionals who are already using Digitools to work smarter.</p>
       <p className="txt-center text-gray-200">Start your free trial today.</p>
       
       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 mb-4 w-full sm:w-auto">
        <button className="px-4 py-2 bg-gray-200 text-[#4F39F6] rounded-full text-sm sm:text-lg cursor-pointer hover:scale-105 transition-all duration-300">Explore Products</button>
        <button className="px-4 py-2 border border-gray-200 rounded-full text-white text-sm sm:text-lg cursor-pointer hover:scale-105 transition-all duration-300">View Pricing</button>
       </div>
       <p className="text-gray-200 text-center text-sm sm:text-base">14-day free trial • No credit card required • Cancel anytime</p>
    </section>
    </>
  )
}
