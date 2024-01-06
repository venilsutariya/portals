"use client";

import { MdChevronRight } from "react-icons/md";
import { motion } from 'framer-motion';
import NavbarComp from "./Navbar";

const HeadMain = ({ setIsHoveringMain }: any) => {

  return (
    <>

      {/* first div */}
        <div onMouseEnter={() => setIsHoveringMain(true)} onMouseLeave={() => setIsHoveringMain(false)} className="sticky top-0 z-10" style={{ backgroundColor: '#000212' }}>
          <div className=" absolute w-full"><NavbarComp /></div>
          <div className=" headmain h-[100vh] flex justify-center">
            <div className=" relative bgmainimg text-white">
              <div className=" flex flex-col justify-center items-center h-full text-center">
                <div className="slotanimation text-sm px-3 py-1 lg:py-1 lg:px-3 mb-3" style={{ backgroundColor: 'rgba(180, 188, 208, 0.45)', color: '#fff', borderRadius: '50px' }}>2 spots remaining</div>
                <div className=" xl:text-6xl lg:text-6xl md:text-5xl text-4xl flex flex-col gap-y-3">
                  <span className="animation"><span className="" style={{ fontWeight: '500' }}>We</span> <span className=" cusfont">design and develop</span></span>
                  <span className="animation2" style={{ fontWeight: '500' }}>digital products from scratch</span>
                </div>
                <p className=" my-[24px] text-sm xl:text-lg md:text-xl px-3 flex flex-col" style={{ color: '#B4BCD0' }}>
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
            </div>
          </div>
        </div>


      {/* second div */}
      <div className='px-5 py-28 relative z-20' style={{ backgroundColor: '#737ED8', letterSpacing: '-0.02rem', borderRadius: '18px 18px 0px 0px' }}>
        <motion.div className=' hidden lg:block text-4xl text-black' style={{ fontWeight: '400' }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 3 }}
        >
          Enterone is a creative partner for businesses <br /> and startups that need intutive <span className=' cusfont'
          >websites,<br /> digital experiences,</span> and <span className=' cusfont'>apps</span>.
        </motion.div>
        <div className='block lg:hidden text-4xl text-black' style={{ fontWeight: '400' }}>
          Enterone is a creative partner for businesses and startups that need intutive <span className=' cusfont' style={{ fontWeight: '300' }}>websites, digital experiences,</span> and <span className=' cusfont' style={{ fontWeight: '300' }}>apps</span>.
        </div>
        <div className=" lg:px-32">
          <div className=" bg-gradient-to-r from-transparent lg:via-black/50 via-black/10 to-transparent p-[0.5px] my-5"></div>
        </div>
        <div className=' row p-0 g-0 text-black' style={{ fontWeight: '500' }}>
          <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
            What you can expect:
          </div>
          <div className='col-12 col-lg hidden lg:flex flex-col justify-center'>
            <div>
              We promise affordable design &<br /> development services so you can <br /> quickly move from idea to Product.
            </div>
            <div className=' mt-3'>
              We offer infinite/unlimited design &<br /> raw development services, not just <br /> no-code/low-code, for flat and low-<br />cost monthly fees.
            </div>
          </div>
          <div className='col-12 col-lg flex lg:hidden flex-col justify-center'>
            <div>
              We promise affordable design & development services so you can quickly move from idea to Product.
            </div>
            <div className=' mt-3'>
              We offer infinite/unlimited design & raw development services, not just no-code/low-code, for flat and low-cost monthly fees.
            </div>
          </div>
          <div className='col-12 col-lg flex items-end justify-end mt-5 mt-lg-0'>
            <div>(scroll)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadMain;