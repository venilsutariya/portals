"use client";

import React, { useEffect, useState } from "react";
import { Element, Link, animateScroll as scroll } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor";
import ScrollReveal from "scrollreveal";

const ScrollSlider = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible: boolean) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    let slideUp = {
      distance: "10%",
      origin: "center",
      delay: 500,
      duration: 700,
      easing: "ease",
      opacity: 0,
      reset: false,
    };

    ScrollReveal().reveal(".slide-up", slideUp);
  }, []);

  return (
    <>
      <div className="slider-container" style={{ backgroundColor: "#000212" }}>
        <div className="container relative">
          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <Element name="section1" className="slider-section">
              <div className="animation">
                <div
                  className={`row h-[100vh] slide-up z-10 row-cols-1 g-0 px-0 row-cols-lg-2 backdrop-blur-lg py-3 first-row ${
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }`}
                >
                  <div className="col flex justify-start items-center">
                    <img src={"/images/slide1.png"} className="img-fluid" alt="" />
                  </div>
                  <div className="col flex flex-col justify-center items-center">
                    <div className="lg:px-24 lg:mt-[-80px] animate__animated animate__slideInUp">
                      <h1 className="text-white" style={{ fontSize: "40px" }}>
                        Subscribe and get started.
                      </h1>
                      <p className="text-xl" style={{ color: "#B4BCD0" }}>
                        Pay and get started on the same day, we won&#39;t waste your
                        time and will start fulfilling your request.
                      </p>
                    </div>
                    <div className="absolute right-3">
                      <div className="h-[100px] w-[1px] bg-white mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          </VisibilitySensor>

          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <Element name="section2" className="slider-section">
              <div className="animation">
                <div
                  className={`row h-[100vh] slide-up z-20 row-cols-1 row-cols-lg-2 backdrop-blur-lg py-3 ${
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }`}
                  style={{ backgroundColor: "#000212" }}
                >
                  <div className="col flex justify-start items-center">
                    <img src={"/images/slide2.png"} className="img-fluid" alt="" />
                  </div>
                  <div className="col flex flex-col justify-center items-center">
                    <div className="lg:px-20 lg:mt-[-40px] animate__animated animate__slideInUp">
                      <h1 className="text-white" style={{ fontSize: "40px" }}>
                        Get updated on process through Trello.
                      </h1>
                      <p className="text-xl" style={{ color: "#B4BCD0" }}>
                        You will be notified about tasks and processes through
                        Trello. Most of the time, the turnaround time is 1-3 days.
                      </p>
                    </div>
                    <div className="absolute right-5">
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-white mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          </VisibilitySensor>

          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <Element name="section3" className="slider-section">
              <div className="animation">
                <div
                  className={`row h-[100vh] slide-up row-cols-1 g-0 px-0 row-cols-lg-2 backdrop-blur-lg py-3 first-row ${
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }`}
                >
                  <div className="col flex justify-start items-center">
                    <img src={"/images/slide3.png"} className="img-fluid" alt="" />
                  </div>
                  <div className="col flex flex-col justify-center items-center">
                    <div className="lg:px-24 lg:mt-[-120px] animate__animated animate__slideInUp">
                      <h1 className="text-white" style={{ fontSize: "40px" }}>
                        Unlimited revisions
                      </h1>
                      <p className="text-xl" style={{ color: "#B4BCD0" }}>
                        We&#39;ve got you covered. We will make sure that you get
                        what you want from us.
                      </p>
                    </div>
                    <div className="absolute right-3">
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-white mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Element>
          </VisibilitySensor>
        </div>
      </div>
    </>
  );
};

export default ScrollSlider;