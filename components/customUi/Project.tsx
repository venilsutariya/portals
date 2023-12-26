"use client";

import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";

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
    <div ref={innerDivRef} className="scrollbar-hide" style={{ backgroundColor: "#000212", overflowY: "hidden", overflowX: "auto" }}>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className="md:block hidden">
          <div className="d-flex gap-x-5 p-3">
            <img
              src="/images/image-1.png"
              alt="image"
              className=" img-fluid  transform rounded-3xl sm:ms-[-7rem] md:ms-[-10rem] lg:ms-[-17rem]"
              style={{ transform: "rotate(-1deg) scale(0.6)" }}
            />
            <img
              src="/images/image-2.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem]  transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg) scale(0.6)" }}
              />
            <img
              src="/images/image-3.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem]  transform rounded-3xl"
              style={{ transform: "rotate(-1deg) scale(0.6)" }}
              />
            <img
              src="/images/image-4.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem] transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg) scale(0.6)" }}
              />
            <img
              src="/images/image-5.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem] transform rounded-3xl"
              style={{ transform: "rotate(-1deg) scale(0.6)" }}
              />
            <img
              src="/images/image-6.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem] transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg) scale(0.6)" }}
              />
            <img
              src="/images/image-7.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem] transform rounded-3xl"
              style={{ transform: "rotate(-1deg) scale(0.6)" }}
              />
            <img
              src="/images/image-8.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem] transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg) scale(0.6)" }}
            />
            <img
              src="/images/image-9.png"
              alt="image"
              className=" object-cover sm:ms-[-15rem] md:ms-[-20rem] lg:ms-[-30rem] transform rounded-3xl rotate-1"
              style={{ transform: "rotate(-1deg) scale(0.6)" }}
            />
          </div>
        </div>
      </VisibilitySensor>
    </div>
    <div ref={innerDivRef} className="scrollbar-hide" style={{ backgroundColor: "#000212", overflowY: "hidden", overflowX: "auto" }}>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className="md:hidden block">
          <div className="d-flex gap-x-5 p-3">
            <img
              src="/images/image-1.png"
              alt="image"
              className=" img-fluid  transform rounded-3xl "
              style={{ transform: "rotate(-1deg)" }}
            />
            <img
              src="/images/image-2.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
              />
            <img
              src="/images/image-3.png"
              alt="image"
              className=" object-cover transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
              />
            <img
              src="/images/image-4.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
              />
            <img
              src="/images/image-5.png"
              alt="image"
              className=" object-cover transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
              />
            <img
              src="/images/image-6.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
              />
            <img
              src="/images/image-7.png"
              alt="image"
              className=" object-cover transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
              />
            <img
              src="/images/image-8.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
            />
            <img
              src="/images/image-9.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(-1deg)" }}
            />
          </div>
        </div>
      </VisibilitySensor>
    </div>
    </>
  );
};

export default Project;
