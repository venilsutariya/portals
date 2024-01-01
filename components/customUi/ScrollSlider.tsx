"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
const img1 = require('../../public/images/slide1.png')
const img2 = require('../../public/images/slide2.png')
const img3 = require('../../public/images/slide3.png')

const ScrollSlider = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex text-white">
          <div
            className="group relative h-[100vh] w-[100vw] overflow-hidden"
          >
            <div className="absolute inset-0 z-10 grid place-content-center">
              <div className=" row row-cols-1 row-cols-lg-2  w-[100vw]">
                <div className=" col flex justify-center">
                  <img src='/images/slide1.png' className=" px-5 px-lg-0 img-fluid" alt="" />
                </div>
                <div className="col flex flex-col mt-4">
                  <div className="text-2xl lg:text-4xl">
                    Subscribe and <br /> get started.
                  </div>
                  <div style={{ color: '#B4BCD0' }} className=" mt-3 text-md lg:text-xl font-thin">
                    Pay and get started on same day, we <br />
                    won&apos;t waste your time and will start <br />
                    fulfilling your request.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group relative h-[100vh] w-[100vw] overflow-hidden"
          >
            <div className="absolute inset-0 z-10 grid place-content-center">
              <div className=" row row-cols-1 row-cols-lg-2 w-[100vw]">
                <div className=" col flex justify-center">
                  <img src='/images/slide2.png' className="px-5 px-lg-0 img-fluid" alt="" />
                </div>
                <div className="col flex flex-col mt-4 mt-lg-0">
                  <div className="text-2xl lg:text-4xl">
                    Get updated on <br />
                    process.
                  </div>
                  <div style={{ color: '#B4BCD0' }} className=" mt-3 text-md lg:text-xl font-thin">
                    You will notified about Task and process <br /> through Trello, Most of time turn around <br /> time is 1-3 days.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="group relative h-[100vh] w-[100vw] overflow-hidden"
          >
            <div className="absolute inset-0 z-10 grid place-content-center">
              <div className=" row row-cols-1 row-cols-lg-2 w-[100vw]">
                <div className=" col flex justify-center">
                  <img src='/images/slide3.png' className="px-5 px-lg-0 img-fluid" alt="" />
                </div>
                <div className="col flex flex-col mt-4 mt-lg-0">
                  <div className=" text-2xl lg:text-4xl">
                    Unlimited revisions
                  </div>
                  <div style={{ color: '#B4BCD0' }} className=" mt-3 text-md lg:text-xl font-thin">
                    We got you, We will make sure that <br />
                    you get what you want from us.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollSlider;