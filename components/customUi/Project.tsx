"use client";

import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useRef, useState } from "react";

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
    <div ref={innerDivRef} className=" max-h-[200vh] scrollbar-hide" style={{ backgroundColor: "#000212", overflowY: "hidden", overflowX: "auto" }}>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className="py-5">
          <div className="d-flex gap-x-10 p-5">
            <img
              src="/images/image_1.png"
              alt="image"
              className="img-fluid transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
            />
            <img
              src="/images/image_2.png"
              alt="image"
              className="img-fluid transform rotate-1 rounded-3xl"
            />
            <img
              src="/images/image_3.png"
              alt="image"
              className="img-fluid transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
            />
            <img
              src="/images/image_4.png"
              alt="image"
              className="img-fluid transform rotate-1 rounded-3xl"
            />
            <img
              src="/images/image_5.png"
              alt="image"
              className="img-fluid transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
            />
            <img
              src="/images/image_6.png"
              alt="image"
              className="img-fluid transform rotate-1 rounded-3xl"
            />
            <img
              src="/images/image_7.png"
              alt="image"
              className="img-fluid transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
            />
            <img
              src="/images/image_8.png"
              alt="image"
              className="img-fluid transform rotate-1 rounded-3xl"
            />
            <img
              src="/images/image_9.png"
              alt="image"
              className="img-fluid transform rounded-3xl"
              style={{ transform: "rotate(-1deg)" }}
            />
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default Project;
