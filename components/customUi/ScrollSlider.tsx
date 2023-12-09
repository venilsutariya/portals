"use client";

import React from 'react';

const ScrollSlider = () => {

  return (
    <div className='' style={{ backgroundColor: '#000212' }}>
      <div className="container relative">
        <div className={`row row-cols-1 row-cols-lg-2 backdrop-blur-lg sticky top-0 h-[100vh] py-3`}>
          <div className="col flex justify-start items-center">
            <img src={'/images/slide1.png'} className=' img-fluid' alt="" />
          </div>
          <div className="col flex flex-col justify-center items-center">
            <div className="lg:px-24 lg:mt-[-80px]">
              <h1 className=' text-white' style={{ fontSize: '40px' }}>Subscribe and get started.</h1>
              <p className='text-xl' style={{ color: '#B4BCD0' }}>Pay and get started on same day, we
                won&#39;t waste your time and will start
                fulfilling your request.</p>
            </div>
          </div>
        </div>
        <div className={`row row-cols-1 row-cols-lg-2 backdrop-blur-lg sticky top-0 h-[100vh] py-3`} style={{ backgroundColor: '#000212' }}>
          <div className="col flex justify-start items-center">
            <img src={'/images/slide2.png'} className=' img-fluid' alt="" />
          </div>
          <div className="col flex flex-col justify-center items-center">
            <div className="lg:px-20 lg:mt-[-40px]">
              <h1 className=' text-white' style={{ fontSize: '40px' }}>Get updated on process through Trello.</h1>
              <p className='text-xl' style={{ color: '#B4BCD0' }}>You will notified about Task and process
                through Trello, Most of time turn around
                time is 1-3 days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
