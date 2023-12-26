"use client";

import React, { useState, useEffect } from "react";

const ScrollSlider = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible: boolean) => {
    if (visible) {
      setIsVisible(true);
    } else if (visible) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div className=" h-[300vh]">
        <div className=" z-[-3] sticky top-0">
          <section className="section container" style={{ backgroundColor: '#000212' }}>
            <div className="one">
              <div className="">
                <div
                  className={`row slide-up z-10 row-cols-1 g-0 px-0 row-cols-lg-2 backdrop-blur-lg py-3 first-row ${isVisible ? "animate__animated animate__slideInUp" : ""
                    }`}
                >
                  <div className="col flex justify-start items-center">
                    <img src={"/images/slide1.png"} className="mb-5 lg:mb-0 img-fluid" alt="" />
                  </div>
                  <div className="col flex flex-col justify-center items-center">
                    <div className="lg:px-24 lg:mt-[-80px] animate__animated animate__slideInUp">
                      <h1 className="text-white" style={{ fontSize: "40px" }}>
                        Subscribe and get started.
                      </h1>
                      <p className="text-xl" style={{ color: "#B4BCD0" }}>
                        Pay and get started on same day, we
                        won&#39;t waste your time and will start
                        fulfilling your request.
                      </p>
                    </div>
                    <div className="absolute right-3 d-none d-lg-block">
                      <div className="h-[100px] w-[1px] bg-white mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="z-[-2] sticky top-0">
          <section className="section container" style={{ backgroundColor: '#000212' }}>
            <div className="two">
              <div className="">
                <div
                  className={`row slide-up z-20 row-cols-1 row-cols-lg-2 backdrop-blur-lg py-3 ${isVisible ? "animate__animated animate__slideInUp" : ""
                    }`}
                  style={{ backgroundColor: "#000212" }}
                >
                  <div className="col flex justify-start items-center">
                    <img src={"/images/slide2.png"} className="mb-5 lg:mb-0 img-fluid" alt="" />
                  </div>
                  <div className="col flex flex-col justify-center items-center">
                    <div className="lg:px-20 lg:mt-[-40px] animate__animated animate__slideInUp">
                      <h1 className="text-white" style={{ fontSize: "40px" }}>
                        Get updated on <br />
                        process.
                      </h1>
                      <p className="text-xl" style={{ color: "#B4BCD0" }}>
                        You will notified about Task and process
                        through Trello, Most of time turn around
                        time is 1-3 days.
                      </p>
                    </div>
                    <div className="absolute right-5 d-none d-lg-block">
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-white mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" z-[-2] sticky top-0">
          <section className="section container z-[-1] sticky top-0" style={{ backgroundColor: '#000212' }}>
            <div className="three">
              <div>
                <div
                  className={`row slide-up row-cols-1 g-0 px-0 row-cols-lg-2 backdrop-blur-lg py-3 first-row ${isVisible ? "animate__animated animate__slideInUp" : ""
                    }`}
                >
                  <div className="col flex justify-start items-center">
                    <img src={"/images/slide3.png"} className="mb-5 lg:mb-0 img-fluid" alt="" />
                  </div>
                  <div className="col flex flex-col justify-center items-center">
                    <div className="lg:px-24 lg:mt-[-120px] animate__animated animate__slideInUp">
                      <h1 className="text-white" style={{ fontSize: "40px" }}>
                        Unlimited revisions
                      </h1>
                      <p className="text-xl" style={{ color: "#B4BCD0" }}>
                        We got you, We will make sure that
                        you get what you want from us.
                      </p>
                    </div>
                    <div className="absolute right-3 d-none d-lg-block">
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-violet-500 mb-2"></div>
                      <div className="h-[100px] w-[1px] bg-white mb-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ScrollSlider;