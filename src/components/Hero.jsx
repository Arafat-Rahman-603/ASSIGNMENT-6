import React from "react";

export default function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-2 grid-cols-1 justify-between items-center px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20 border-b border-gray-200">
      <div>
        <div className="bg-[#E1E7FF] w-fit px-4 py-2 rounded-full mb-6">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-linear-to-r from-purple-100 via-violet-100 to-violet-100 rounded-full">
            <div className="p-1 bg-linear-to-r from-purple-300 via-violet-300 to-violet-300 rounded-full">
            <div className="w-2 h-2 bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 rounded-full"></div></div></div>
            <p className="text-[#4F39F6] font-semibold">New: AI-Powered Tools Available</p>
          </div>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-tight lg:leading-[80px]">
          Supercharge Your Digital Workflow
        </h2>
        <p className="font-semibold text-[#627382] text-base sm:text-[1.1rem] mt-3">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5">
            <button className="px-4 py-2 bg-linear-to-r from-purple-600 via-violet-600 to-violet-600 rounded-full text-white text-sm sm:text-lg cursor-pointer hover:scale-105 transition-all duration-300">Explore Products</button>
            <button className="flex items-center justify-center gap-1 px-4 py-2 border border-[#4F39F6] text-[#4F39F6] rounded-full text-sm sm:text-lg cursor-pointer hover:scale-105 transition-all duration-300">
                <img src="./assets/Play.png" alt="" />
                <p>Watch Demo</p>
            </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src="./assets/banner.png" alt="" className="w-full max-w-[520px]"/>
      </div>
    </section>
  );
}
