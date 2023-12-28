"use client";

import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const innerDivRef = useRef<HTMLDivElement | null>(null);

  const onVisibilityChange = (visible: boolean) => {
    if (visible) {
      // Smooth scroll to position 500
      if (innerDivRef.current) {
        setTimeout(() => {
          // @ts-ignore
          innerDivRef.current.scrollTo({
            left: 700,
            behavior: "smooth",
          });
        }, 1000);
      }

      setIsVisible(true);
      setHasScrolled(true);
    }
  };

  useEffect(() => {
    // Reset the hasScrolled state when the component unmounts
    return () => {
      setHasScrolled(true);
      setIsVisible(false);
    };
  }, []);

  return (
    <>
      <div id="work" ref={innerDivRef} className="scrollbar-hide container py-5 my-5" style={{ backgroundColor: "#000212", overflowY: "hidden", overflowX: "auto" }}>
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
          <div>
            <div className=" flex p-0 g-0 justify-between items-center">
              <div className=" text-white text-5xl">Selected work</div>
              <Link href={'#'} className=" flex p-0 gap-x-4 no-underline hover:underline hover:gap-x-2 transition-all text-white mt-4 justify-center items-center">
                <span className=" text-xl font-extralight text-gray-400">View all work</span>
                <span className=" text-gray-400"><FaArrowRightLong /></span>
              </Link>
            </div>
            <div className="">
              <div className="bg-gradient-to-r from-gray-100/50 via-gray-100/50 to-gray-100/50 p-[0.5px] mt-4 mb-20 relative text-center">
              </div>
            </div>
            <div>
              <img src="/images/project1.png" className=" img-fluid" alt="" />
            </div>
            <div className=" text-white text-4xl mt-5">Redesigning website for Fractionally</div>
            <div className=" flex justify-between items-center my-3" style={{ color: '#B4BCD0' }}>
              <div>Website design, UI/UX, Responsive</div>
              <div>March 2023 - April 2023</div>
            </div>
            <div className=" mt-5 pt-5">
              <img src="/images/project2.png" className=" img-fluid" alt="" />
            </div>
            <div className=" text-white text-4xl mt-5">Website for Portals Studio</div>
            <div className=" flex justify-between items-center my-3" style={{ color: '#B4BCD0' }}>
              <div>Website design, UI/UX, Responsive</div>
              <div>September 2023</div>
            </div>
            <div className="">
              <div className="bg-gradient-to-r from-gray-100/50 via-gray-100/50 to-gray-100/50 p-[0.5px] mb-4 mt-20 relative text-center">
              </div>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    </>
  );
};

export default Project;
