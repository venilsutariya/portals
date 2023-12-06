"use client";

import { MdChevronRight } from "react-icons/md";

const HeadMain = () => {

  return (
    <>
      <div className="bgmainimg">
        <div className=" flex flex-col justify-center items-center h-full text-center">
          <h1 className=" xl:text-7xl lg:text-6xl md:text-5xl flex flex-col gap-y-3">
            <span>The only <span className=" bg-gradient-to-tr from-violet-500 via-purple-700 to-pink-500 bg-clip-text text-transparent">Design & Development </span></span>
            <span>service you will ever need</span>
          </h1>
          <p className=" mt-4 xl:text-2xl md:text-xl px-3 flex flex-col" style={{ color: '#000' }}>
            <span>Unlock endless possibilities with just one plan,</span>
            <span>Design & development plans for creators who want a no-BS edge.</span>
          </p>
          <div className=" flex w-full justify-center items-center gap-x-4 mt-3">
            <button style={{borderRadius: '10px', transition: 'all 0.3s'}} className="border border-black text-xl flex justify-center items-center bg-black text-white py-2 px-3 py-md-3 px-md-4 hover:opacity-90">
              <span>Buy now</span>
              <span className=" ms-1"><MdChevronRight /></span>
            </button>
            <button style={{borderRadius: '10px', transition: 'all 0.3s'}} className="border border-black text-xl flex justify-center items-center bg-white text-black hover:opacity-90 py-2 px-3 py-md-3 px-md-4">
              <span>Book a call</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadMain;