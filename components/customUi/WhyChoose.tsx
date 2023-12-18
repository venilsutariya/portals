"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const WhyChoose = () => {
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
            <div style={{ backgroundColor: '#000212' }} className="">
                <div className={`whychoose ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <div className=" text-white text-center text-3xl lg:text-4xl">
                        Why Choose Portals?
                    </div>
                    <div className="lg:px-32">
                        <div className=" bg-gradient-to-r from-transparent via-blue-200/30 to-transparent lg:p-[0.1px] xl:p-[0.3px]  my-10"></div>
                    </div>
                    <div className=" container">
                        <div className=" row row-cols-1 row-cols-lg-3 gap-y-10 pb-5 px-0 g-0">
                            <div className=" col flex lg:justify-center tracking-wider gap-x-4">
                                <span><img src="/images/icon1.png" alt="" /></span>
                                <div>
                                    <span style={{ color: '#fff' }}>Fast.</span>
                                    <span className=" text-white/50">We promise <br /> faster designs</span>
                                </div>
                            </div>
                            <div className=" col flex lg:justify-center tracking-wider gap-x-4">
                                <span><img src="/images/icon4.png" alt="" /></span>
                                <div className=" flex flex-col">
                                    <span style={{ color: '#fff' }}>Real development.</span>
                                    <span className=" text-white/50">Not just no-code</span>
                                </div>
                            </div>
                            <div className=" col flex lg:justify-center tracking-wider gap-x-4">
                                <span><img src="/images/icon2.png" alt="" /></span>
                                <div className=" flex flex-col">
                                    <span style={{ color: '#fff' }}>Worry free pricing.</span>
                                    <span className=" text-white/50">monthly flat fee.</span>
                                </div>
                            </div>
                            <div className=" col lg:ps-4 flex lg:justify-center tracking-wider gap-x-4">
                                <span><img src="/images/icon3.png" alt="" /></span>
                                <div className=" flex flex-col">
                                    <span style={{ color: '#fff' }}>Unlimited members.</span>
                                    <span className=" text-white/50">On-board your team.</span>
                                </div>
                            </div>
                            <div className=" col flex lg:justify-center tracking-wider gap-x-4">
                                <span className=' lg:ps-20'><img src="/images/icon5.png" alt="" /></span>
                                <div className=" flex flex-col">
                                    <span style={{ color: '#fff' }}>Pause anytime.</span>
                                    <span className=" text-white/50">Resume  whenever you want.</span>
                                </div>
                            </div>
                            <div className=" col lg:ps-4 flex lg:justify-center tracking-wider gap-x-4">
                                <span><img src="/images/icon6.png" alt="" /></span>
                                <div className=" flex flex-col">
                                    <span style={{ color: '#fff' }}>Slack/Trello support.</span>
                                    <span className=" text-white/50">Allocated workspace.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default WhyChoose;