"use client";

import React from 'react';

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


  return (
    <div className=''>
      <div className="container my-5 py-5 relative" style={{scrollBehavior: 'smooth'}}>
        {sliderArr.map((slide, index) => (
          <div key={index}  className={`row row-cols-1 row-cols-lg-2 backdrop-blur-lg sticky top-0 h-[100vh] py-3`} style={{backgroundColor: '#f5f5f5'}}>
            <div className="col flex justify-center items-center">
              <img src={slide.image} alt="" />
            </div>
            <div className="col flex flex-col justify-center justify-md-center px-5">
              <div className="px-5 mt-4">
                <h1>{slide.mainCon}</h1>
                <p className=' text-black text-xl'>{slide.subCon}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSlider;