"use client";

import { MdChevronRight } from "react-icons/md";

const HeadMain = () => {

  return (
    <div className="" style={{ backgroundColor: '#000212' }}>
      <div className=" headmain h-[100vh] flex justify-center">
        <div className="bgmainimg text-white">
          <div className=" flex flex-col justify-center items-center h-full text-center">
            <div className="py-1 px-3 rounded-full mb-3" style={{ backgroundColor: 'rgba(180, 188, 208, 0.45)', color: '#fff' }}>3 spots remaining</div>
            <div className="animation xl:text-6xl lg:text-6xl md:text-5xl text-4xl flex flex-col gap-y-3">
              <span>The only <span className="">Design & Development </span></span>
              <span className="xl:text-6xl lg:text-6xl md:text-5xl text-3xl">service you will ever need</span>
            </div>
            <p className=" mt-4 xl:text-lg md:text-xl px-3 flex flex-col" style={{ color: '#B4BCD0' }}>
              <span className=" tracking-wider">Unlock endless possibilities with just one plan,</span>
              <span className=" tracking-wider">Design & development plans for creators who want a no-BS edge.</span>
            </p>
            <div className=" flex w-full justify-center items-center gap-x-4 mt-3">
              <button style={{ borderRadius: '5px', padding: '12px 12px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="text-xl flex justify-center items-center text-white hover:opacity-90">
                <span>Get  started</span>
                <span className=" ms-1"><MdChevronRight /></span>
              </button>
              <button style={{ borderRadius: '5px', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '12px', transition: 'all 0.3s' }} className="text-xl flex justify-center items-center bg-transparent text-white hover:opacity-90">
                <span>Let&#39;s talk</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadMain;