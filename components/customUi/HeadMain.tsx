"use client";

import { MdChevronRight } from "react-icons/md";

const HeadMain = ({ setIsHoveringMain }: any) => {

  return (
    <div className="" style={{ backgroundColor: '#000212' }} onMouseEnter={() => setIsHoveringMain(true)} onMouseLeave={() => setIsHoveringMain(false)}>
      <div className=" headmain h-[100vh] flex justify-center">
        <div className=" relative bgmainimg text-white">
          <div className=" flex flex-col justify-center items-center h-full text-center">
            <div className="slotanimation text-sm px-2 py-1 lg:py-1 lg:px-3 mb-3" style={{ backgroundColor: 'rgba(180, 188, 208, 0.45)', color: '#fff', borderRadius: '50px' }}>2 spots remaining</div>
            <div className=" xl:text-6xl lg:text-6xl md:text-5xl text-4xl flex flex-col gap-y-3">
              <span className="animation"><span className="" style={{ fontWeight: '500' }}>We</span> <span className=" cusfont">design and develop</span></span>
              <span className="animation2" style={{ fontWeight: '500' }}>digital products from scratch</span>
            </div>
            <p className=" my-[24px] xl:text-lg md:text-xl px-3 flex flex-col" style={{ color: '#B4BCD0' }}>
              <span className=" tracking-wider">
                At Enterone, We specialize in designing and developing <br /> innovative products for businesses and startups.
              </span>
            </p>
            <div className=" flex w-full justify-center items-center gap-x-4 mt-3">
              <button style={{ borderRadius: '5px', padding: '0px 0px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="w-[175px] h-[55px] text-xl flex justify-center items-center text-white hover:opacity-90">
                <span>See plans</span>
                <span className=" ms-1"><MdChevronRight /></span>
              </button>
            </div>
          </div>
          {/* <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" style={{ boxShadow: '1px 1px 200px 35px #606BD2', }}></div> */}
        </div>
      </div>
    </div>
  );
};

export default HeadMain;