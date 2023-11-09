"use client";

import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const HeaderImage = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0,1], [0,1]);

  return (
    <div className=" container my-5 pt-5">
      <div className=" row gap-3 p-3 animatediv">
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img
            src="/images/img1.png"
            alt=""
            className="img-fluid h-100 w-100"
          />
          <div
            style={{ transition: "all 0.5s ease-out" }}
            className="hidden xl:block h-100 w-100 group-hover:bg-black/20  rounded-2xl absolute"
          ></div>
        </div>
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img
            src="/images/img2.png"
            alt=""
            className=" img-fluid h-100 w-100"
          />
          <div
            style={{ transition: "all 0.5s ease-out" }}
            className="hidden xl:block h-100 w-100 group-hover:bg-black/20  rounded-2xl absolute"
          ></div>
        </div>
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img
            src="/images/img3.png"
            alt=""
            className=" img-fluid h-100 w-100"
          />
          <div
            style={{ transition: "all 0.5s ease-out" }}
            className="hidden xl:block h-100 w-100 group-hover:bg-black/20  rounded-2xl absolute"
          ></div>
        </div>
      </div>
      <motion.div className="row p-1 my-4 gap-3" ref={ref} style={{scale: scaleProgress}}>
        <div className="col-12 col-xl-8 transition group relative p-0">
          <img
            src="/images/newimg.png"
            alt=""
            className=" img-fluid h-100 w-100"
          />
          <div
            style={{ transition: "all 0.5s ease-out", borderRadius: "33px" }}
            className="hidden xl:block h-100 w-100 group-hover:bg-black/20 absolute top-0 mediaimage"
          ></div>
        </div>
        <div className="col">
          <div className="row gap-3 p-4 p-lg-0">
            <div className=" col-12 mb-3 relative group p-0">
              <img
                src="/images/newimg2.png"
                alt=""
                className=" img-fluid h-100 w-100"
              />
              <div
                style={{ transition: "all 0.5s ease-out" }}
                className=" hidden xl:block h-100 w-100 rounded-2xl group-hover:bg-black/20 absolute top-0"
              ></div>
            </div>
            <div className=" col-12 relative group p-0">
              <img
                src="/images/blockchain.png"
                alt=""
                className=" img-fluid h-100 w-100"
              />
              <div
                style={{ transition: "all 0.5s ease-out" }}
                className=" hidden xl:block h-100 w-100 rounded-2xl group-hover:bg-black/20 absolute top-0"
              ></div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className=" w-50 flex justify-start mb-24">
        <Link
          href={"/contact"}
          className="pointer uppercase no-underline text-black rounded-full px-3 py-2 hover:bg-blue-600/5 transition-colors"
          style={{ border: "1px solid blue" }}
        >
          view all work
        </Link>
      </div>
      <div className="row">
        <div className="col-12 col-xl-9 text-1xl lg:text-3xl text-black">
          <div>PORTALS is a technology partner</div>
          <div>that approaches future development</div>
          <div>with a knowledge-based approach.</div>
        </div>
        <div className="col-12 col-xl-3 flex justify-start lg:justify-end">
          <Link href={"/"} style={{ color: "#002DF0", letterSpacing: '1px'}} className=" no-underline mt-3 mt-lg-0 pointer">OUR SERVICES</Link>
        </div>
      </div>
      <div className=" border-[1px] border-black mt-5"/>
    </div>
  );
};

export default HeaderImage;
