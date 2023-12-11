"use client";

import React from 'react';
import { useEffect, useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';

const ScrollSlider = () => {
  const [showSecondRow, setShowSecondRow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const firstRowHeight = document.querySelector('.first-row')?.clientHeight || 0;

      setShowSecondRow(scrollPosition >= firstRowHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <>
      <div className=' static' style={{ backgroundColor: '#000212' }}>
        <div className="container relative">
          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <div className={`row z-10 row-cols-1 g-0 px-0 row-cols-lg-2 backdrop-blur-lg h-[100vh] py-3 first-row ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
              <div className="col flex justify-start items-center">
                <img src={'/images/slide1.png'} className=' img-fluid' alt="" />
              </div>
              <div className="col flex flex-col justify-center items-center">
                <div className="lg:px-24 lg:mt-[-80px] animate__animated animate__slideInUp">
                  <h1 className=' text-white' style={{ fontSize: '40px' }}>Subscribe and get started.</h1>
                  <p className='text-xl' style={{ color: '#B4BCD0' }}>Pay and get started on same day, we
                    won&#39;t waste your time and will start
                    fulfilling your request.</p>
                </div>
                <div className=' absolute right-3'>
                  <div className=' h-[100px] w-[1px] bg-white mb-2'></div>
                  <div className=' h-[100px] w-[1px] bg-violet-500 mb-2'></div>
                  <div className=' h-[100px] w-[1px] bg-violet-500 mb-2'></div>
                </div>
              </div>
            </div>
          </VisibilitySensor>
          {
            showSecondRow && (
              <div className={`row z-20 row-cols-1 row-cols-lg-2 backdrop-blur-lg h-[100vh] py-3`} style={{ backgroundColor: '#000212' }}>
                <div className="col flex justify-start items-center">
                  <img src={'/images/slide2.png'} className=' img-fluid' alt="" />
                </div>
                <div className="col flex flex-col justify-center items-center">
                  <div className="lg:px-20 lg:mt-[-40px] animate__animated animate__slideInUp">
                    <h1 className=' text-white' style={{ fontSize: '40px' }}>Get updated on process through Trello.</h1>
                    <p className='text-xl' style={{ color: '#B4BCD0' }}>You will notified about Task and process
                      through Trello, Most of time turn around
                      time is 1-3 days.</p>
                  </div>
                  <div className=' absolute right-5'>
                    <div className=' h-[100px] w-[1px] bg-violet-500 mb-2'></div>
                    <div className=' h-[100px] w-[1px] bg-white mb-2'></div>
                    <div className=' h-[100px] w-[1px] bg-violet-500 mb-2'></div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default ScrollSlider;
