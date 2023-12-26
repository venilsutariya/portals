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
        <div className="">
          <div className="d-flex gap-x-5 p-3">
            <img
              src="/images/image_1.png"
              alt="image"
              className=" img-fluid  transform rounded-3xl "
              style={{ transform: "rotate(-1deg)" }}
            />
            <img
              src="/images/image_2.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
              />
            <img
              src="/images/image_3.png"
              alt="image"
              className=" object-cover transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
              />
            <img
              src="/images/image_4.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
              />
            <img
              src="/images/image_5.png"
              alt="image"
              className=" object-cover transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
              />
            <img
              src="/images/image_6.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
              />
            <img
              src="/images/image_7.png"
              alt="image"
              className=" object-cover transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
              />
            <img
              src="/images/image_8.png"
              alt="image"
              className=" object-cover transform rounded-3xl rotate-1"
              style={{ transform: "rotate(1deg)" }}
            />
            <img
              src="/images/imag_9.png"
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
