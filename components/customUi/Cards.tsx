"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Cards = () => {
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
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <div className=" container-fluid" style={{ backgroundColor: '#000212' }}>
                <div className={`${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <div className="row row-cols-1 row-cols-lg-3 p-0 g-0">
                        <div className=" col px-5 flex justify-center">
                            <div className=" px-lg-5">
                                <div className="">
                                    <img src="/images/card1.png" alt="" />
                                </div>
                                <div className=" text-white text-xl my-3">Design</div>
                                <p className=" tracking-wide text-md" style={{ color: '#D9D9D9' }}>We design websites, web apps, mobile apps, SaaS, Anything in UI & UX and social media assets too.</p>
                            </div>
                        </div>
                        <div className=" col px-5 flex justify-center">
                            <div className=" px-lg-4">
                                <div>
                                    <img src="/images/card2.png" alt="" />
                                </div>
                                <div className=" text-white text-xl my-3">Development</div>
                                <p className="tracking-wide text-md" style={{ color: '#D9D9D9' }}>We can develop what we can design, Websites, Apps, SaaS etc in Modern technologies; React, Next and Webflow.</p>
                            </div>
                        </div>
                        <div className=" col px-5">
                            <div className="px-lg-4 px-lg-3">
                                <div>
                                    <img src="/images/card3.png" alt="" />
                                </div>
                                <div className=" text-white text-xl my-3">Blend</div>
                                <p className="tracking-wide text-md" style={{ color: '#D9D9D9' }}>We also blend both design and development and that&#39;s where real magic happens, <span style={{ color: 'rgba(156, 162, 227, 1)' }}>which means end-to-end product development.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" lg:px-32">
                    <div className=" bg-gradient-to-r from-transparent via-blue-200/30 to-transparent lg:p-[0.1px] xl:p-[0.3px] my-28"></div>
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default Cards;