"use client";

import { MdChevronRight } from "react-icons/md";

const HeadMain = () => {

  return (
    <div style={{ backgroundColor: '#000212' }}>
      <div className=" headmain h-[100vh] flex justify-center">
        <div className="bgmainimg text-white">
          <div className=" flex flex-col justify-center items-center h-full text-center">
            <div className="slotanimation py-1 px-3 mb-3" style={{ backgroundColor: 'rgba(180, 188, 208, 0.45)', color: '#fff', borderRadius: '50px' }}>3 spots remaining</div>
            <div className=" xl:text-6xl lg:text-6xl md:text-5xl text-4xl flex flex-col gap-y-3">
              <span className="animation">The only <span className="">Design & Development </span></span>
              <span className="animation2">service you will ever need</span>
            </div>
            <p className=" my-[24px] xl:text-lg md:text-xl px-3 flex flex-col" style={{ color: '#B4BCD0' }}>
              <span className=" tracking-wider">Elevate your venture with our flexible design & development plans.</span>
            </p>
            <div className=" flex w-full justify-center items-center gap-x-4 mt-3">
              <button style={{ borderRadius: '8px', padding: '0px 24px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="w-[195px] h-[55px] text-xl flex justify-center items-center text-white hover:opacity-90">
                <span>Get  started</span>
                <span className=" ms-1"><MdChevronRight /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadMain;