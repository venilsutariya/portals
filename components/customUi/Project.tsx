"use client";

import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

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
            <div className=" flex p-0 g-0 justify-between">
              <div className=" text-white text-5xl">Selected work</div>
              <Link href={'#'} className=" flex p-0 g-0 border-b-[0.5px] border-b-gray-400 pt-3 text-white justify-center items-center no-underline">
                <span className=" text-2xl font-extralight text-gray-400">View all work</span>
                <span className=" text-gray-400"><ArrowRight /></span>
              </Link>
            </div>
            <div className="">
              <div className=" bg-gradient-to-r from-gray-100/50 via-gray-100/50 to-gray-100/50 p-[0.5px] my-4 relative text-center">
              </div>
            </div>
            <div>
              <img src="/images/image_1.png" className=" img-fluid" alt="" />
            </div>
          </div>
        </VisibilitySensor>
      </div>
    </>
  );
};

export default Project;
