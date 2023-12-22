"use client";

import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";

const Project = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onVisibilityChange = (visible: boolean) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    // Reset the isVisible state when the component unmounts or when you leave the section
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className=" max-h-[200vh] scrollbar-hide" style={{ backgroundColor: "#000212", overflowY: "hidden" , overflowX: "auto" }}>
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className="d-flex">
          <img
            src="/images/image 1.png"
            alt="image"
            className="img-fluid transform"
            style={{transform: "rotate(-1deg)"}}
          />
          <img
            src="/images/image 2.png"
            alt="image"
            className="img-fluid transform rotate-1"
          />
          <img
            src="/images/image 3.png"
            alt="image"
            className="img-fluid transform"
            style={{transform: "rotate(-1deg)"}}
          />
          <img
            src="/images/image 4.png"
            alt="image"
            className="img-fluid transform rotate-1"
          />
          <img
            src="/images/image 5.png"
            alt="image"
            className="img-fluid transform"
            style={{transform: "rotate(-1deg)"}}
          />
          <img
            src="/images/image 6.png"
            alt="image"
            className="img-fluid transform rotate-1"
          />
          <img
            src="/images/image 7.png"
            alt="image"
            className="img-fluid transform"
            style={{transform: "rotate(-1deg)"}}
          />
          <img
            src="/images/image 8.png"
            alt="image"
            className="img-fluid transform rotate-1"
          />
          <img
            src="/images/image 9.png"
            alt="image"
            className="img-fluid transform"
            style={{transform: "rotate(-1deg)"}}
          />
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default Project;
