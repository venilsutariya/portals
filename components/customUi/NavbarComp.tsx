"use client";

import { GoDotFill } from "react-icons/go";

const NavbarComp = () => {

  return (
    <>
      <div className="h-[800px] headermain">
        <div className=" bgmain">
          <div className="fixed w-full top-10 flex justify-center items-center">
            <div className=" flex p-2 px-4 rounded-full text-2xl" style={{ border: '1px solid #240046', backgroundColor: '#10001B' }}>
              <div className=" text-white font-semibold flex">
                <div className="flex justify-center items-center"><span>PORTALS</span><span style={{ color: 'blue' }}>.</span></div>
              </div>
              <span className=" bg-gradient-to-b from-transparent via-violet-400 to-transparent w-[1px] mx-4"></span>
              <div className=" flex justify-center items-center">
                <div className=" text-violet-300 me-3 text-lg">How  it Works</div>
                <div className=" text-violet-300 me-3 text-lg">Work</div>
                <div className=" text-violet-300 me-3 text-lg">Plans</div>
                <div className=" text-violet-300 me-3 text-lg">FAQ</div>
              </div>
              <span className=" bg-gradient-to-b from-transparent via-violet-400 to-transparent w-[1px] mx-4"></span>
              <button className=" text-violet-300 text-lg border-1 border-violet-600/30 rounded-full px-3 py-1">Book a call</button>
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className=" text-6xl font-bold text-white flex flex-col gap-y-4">
              <span>The Only <span className="" style={{ color: '#C77DFF' }}>Design & Development </span></span> <span>service you will ever need</span>
            </div>
            <p className=" text-white mt-3 font-bold text-lg">Design & development plans for creators who want a no-BS edge.</p>
            <div className="mt-3">
              <button className=" text-white font-semibold text-2xl border-1 border-violet-600/30 rounded-full px-4 py-2 bg-violet-600/10">View plans</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;