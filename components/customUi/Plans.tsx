"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { IoMdCheckmark } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";

const Plans = () => {
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
            <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
                <div className="py-5" style={{ backgroundColor: '#000212' }}>
                    <div className={`${isVisible ? 'animate__animated animate__slideInUp' : ''} flex flex-col text-center text-white text-4xl pb-24`}>
                        <div>Flexible plans for</div>
                        <div className="">every use case</div>
                    </div>
                    <div className=" container">
                        <div className=" row row-col-1 row-cols-lg-2 gap-y-4 gap-x-2 p-0">
                            <div className=" col-12 col-lg-6">
                                <div className=" lg:ps-44">
                                    <div className={`${isVisible ? 'animate__animated animate__slideInUp' : ''} bg-white py-5 px-5 rounded-xl border-1`}>
                                        <div className=" text-xl font-semibold">Essential plan</div>
                                        <p className=" text-gray-500">Provides you with the most freedom.
                                            Perfect for testing out the plan.</p>
                                        <hr className=' my-3'/>
                                        <div className=" text-black font-semibold mb-2">
                                            <span className=" text-4xl">$1,800</span> /month
                                        </div>
                                        <p className=" text-gray-500">Billed monthly</p>
                                        <button style={{ borderRadius: '5px', margin: '20px 0px', padding: '12px 12px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="text-xl flex justify-center items-center text-white hover:opacity-90 w-full">
                                            <span>Get  started</span>
                                            <span className=" ms-1"><MdChevronRight /></span>
                                        </button>
                                        <div className=" text-black mt-4 mb-4 font-semibold">What&#39;s included</div>
                                        <p className="mb-3 flex gap-x-2"><span><IoMdCheckmark color={'#606BD2'} /></span><span>Unlimited revisions</span></p>
                                        <p className="mb-3 flex gap-x-2"><span><IoMdCheckmark color={'#606BD2'} /></span><span>Unlimited development</span></p>
                                        <p className="mb-3 flex gap-x-2"><span><IoMdCheckmark color={'#606BD2'} /></span><span>Unlimited brands</span></p>
                                        <p className=" mb-3 flex gap-x-2"><span><IoMdCheckmark color={'#606BD2'} /></span><span>Dedicated designer and developer</span></p>
                                        <p className="mb-3 flex gap-x-2"><span><IoMdCheckmark color={'#606BD2'} /></span><span>Slack/Trello channel</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-12 col-lg-6">
                                <div className=" lg:pe-44">
                                    <div className={`${isVisible ? 'animate__animated animate__slideInUp' : ''} bg-transparent border py-5 px-5 rounded-xl`}>
                                        <div className=" text-xl text-white font-medium">Essential quarterly plan</div>
                                        <p className=" text-gray-500">Best plan for longer projects
                                           <br /> with extra discount.</p>
                                        <hr className=' text-white my-3'/>
                                        <div className=" text-white mb-2">
                                            <span className=" text-4xl">$1,530</span> /month
                                        </div>
                                        <p className=" text-gray-500">Billed quarterly</p>
                                        <button style={{ borderRadius: '5px', margin: '20px 0px', padding: '12px 12px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="text-xl flex justify-center items-center text-white hover:opacity-90 w-full">
                                            <span>Get  started</span>
                                            <span className=" ms-1"><MdChevronRight /></span>
                                        </button>
                                        <div className=" text-white mt-4 mb-4 font-medium">What&#39;s included</div>
                                        <p className=" flex gap-x-2 mb-3"><span><IoMdCheckmark color={'#606BD2'} /></span><span className=" text-gray-500">Unlimited revisions</span></p>
                                        <p className=" flex gap-x-2 mb-3"><span><IoMdCheckmark color={'#606BD2'} /></span><span className=" text-gray-500">Unlimited development</span></p>
                                        <p className=" flex gap-x-2 mb-3"><span><IoMdCheckmark color={'#606BD2'} /></span><span className=" text-gray-500">Unlimited brands</span></p>
                                        <p className=" flex gap-x-2 mb-3"><span><IoMdCheckmark color={'#606BD2'} /></span><span className=" text-gray-500">Dedicated designer and developer</span></p>
                                        <p className=" flex gap-x-2 mb-3"><span><IoMdCheckmark color={'#606BD2'} /></span><span className=" text-gray-500">Slack/Trello channel</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:px-32 mb-5 mt-24">
                            <div className=" bg-gradient-to-r from-transparent via-blue-200/30 to-transparent p-[0.5px]  my-10 relative text-center">
                                <span style={{backgroundColor: '#000212', color: 'rgba(180, 188, 208, 1)'}} className=' absolute px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'>or</span>
                            </div>
                        </div>
                    </div>
                </div>
            </VisibilitySensor>
        </>
    );
}

export default Plans;