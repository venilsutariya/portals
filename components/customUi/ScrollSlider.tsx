"use client";

import React from 'react';
import { Element, scroller } from 'react-scroll';

const ScrollSlider = () => {
  const sliderArr = [
    {
      image: '/images/slide1.png',
      mainCon: 'Subscribe and get started.',
      subCon: "Pay and get started on the same day, we won't waste your time and will start fulfilling your request."
    },
    {
      image: '/images/slide2.png',
      mainCon: 'Get updated on the process through Trello.',
      subCon: "You will be notified about the task and process through Trello; the turnaround time is usually 1-3 days."
    },
    {
      image: '/images/slide3.png',
      mainCon: 'Unlimited revisions',
      subCon: 'We got you. We will make sure that you get what you want from us.'
    },
  ];

  const scrollToSlide = (index: number) => {
    scroller.scrollTo(`slide-${index}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className=''>
      <div className="container relative">
        {sliderArr.map((slide, index) => (
          <Element key={index} name={`slide-${index}`} className={`row row-cols-1 row-cols-lg-2 backdrop-blur-lg sticky top-0 h-[100vh] py-3`} style={{ backgroundColor: '#f5f5f5', willChange: 'transform' }}>
            <div className="col flex justify-center items-center">
              <img src={slide.image} alt="" />
            </div>
            <div className="col flex flex-col justify-center justify-md-center px-5">
              <div className="px-0 px-lg-5 mt-4">
                <h1 style={{fontSize: '40px'}}>{slide.mainCon}</h1>
                <p className='text-black text-xl'>{slide.subCon}</p>
              </div>
            </div>
          </Element>
        ))}
      </div>
    </div>
  );
};

export default ScrollSlider;
