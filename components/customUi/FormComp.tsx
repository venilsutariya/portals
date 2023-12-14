"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const FormComp = () => {
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
            <div>
                <div className={`pb-20 flex flex-col text-center text-white text-2xl lg:text-3xl ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <span>Please share requirements</span>
                    <span>about your projects</span>
                </div>
                <div className=" row row-cols-1 row-cols-lg-2 g-0 p-0">
                    <div className={`col relative ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                        <img src="/images/Union.png" alt="" />
                        <div className=" absolute text-white top-20 px-3 px-lg-0 lg:left-44 text-lg">We are Portals and we are here to serve you :)</div>
                    </div>
                    <div className={` col relative ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                        <div className="lg:absolute top-20 w-full lg:pe-44 px-3 px-lg-0">
                            <form className="">
                                <div className="flex flex-col">
                                    <label className=" mb-3" style={{ color: 'rgba(180, 188, 208, 1)' }} htmlFor="name">NAME(*)</label>
                                    <input style={{ backgroundColor: 'rgba(180, 188, 208, 1)' }} className=" py-2 border-b-2 border-white px-2" type="text" id="name" />
                                </div>
                                <div className="flex flex-col">
                                    <label className=" my-3" style={{ color: 'rgba(180, 188, 208, 1)' }} htmlFor="mail">EMAIL(*)</label>
                                    <input style={{ backgroundColor: 'rgba(180, 188, 208, 1)' }} className=" py-2 border-b-2 border-white px-2" type="text" id="mail" />
                                </div>
                                <div className="flex flex-col">
                                    <label className=" my-3" style={{ color: 'rgba(180, 188, 208, 1)' }} htmlFor="mail">MESSAGE(*)</label>
                                     {/* @ts-ignore: Suppress rows cols typeerror */}
                                    <textarea style={{ backgroundColor: 'rgba(180, 188, 208, 1)' }} className=" py-2 border-b-2 border-white px-2" name="" id="message" cols="30" rows="7"></textarea>
                                </div>
                                <button style={{ borderRadius: '5px', padding: '10px 12px', border: '1px solid #606BD2', transition: 'all 0.3s', backgroundColor: '#606BD2' }} className="mt-5 text-lg flex justify-center items-center text-white hover:opacity-90">
                                    <span>Send message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default FormComp;