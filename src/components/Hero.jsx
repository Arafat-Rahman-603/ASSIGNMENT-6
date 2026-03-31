import React from "react";

export default function Hero() {
  return (
    <section className="grid gap-10 md:grid-cols-2 grid-cols-1 justify-between items-center px-20 py-5 border-b-1 border-gray-200 py-20">
      <div>
        <h2 className="text-[4rem] font-bold leading-[80px]">
          Supercharge Your Digital Workflow
        </h2>
        <p className="font-semibold text-[#627382] text-[1.1rem] mt-2">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 via-violet-600 to-violet-600 rounded-full text-white text-lg cursor-pointer hover:scale-105 transition-all duration-300">Explore Products</button>
            <button className="flex items-center gap-1 px-4 py-2 border-1 border-[#4F39F6] text-[#4F39F6] rounded-full text-lg cursor-pointer hover:scale-105 transition-all duration-300">
                <img src="./assets/Play.png" alt="" />
                <p>Watch Demo</p>
            </button>
        </div>
      </div>
      <div>
        <img src="./assets/banner.png" alt="" className="w-max-[500px] justify-self-end"/>
      </div>
    </section>
  );
}
