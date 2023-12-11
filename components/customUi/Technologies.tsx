"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Technologies = () => {

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
            <div className=" pb-36" style={{ backgroundColor: '#000212' }}>
                <div className=' container'>
                <div className={` row p-0 g-0 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <div className="col-12 col-lg-3 flex justify-start">
                        <div className=" text-4xl text-white">
                            <span className=" text-white opacity-40">Some preety <br /> amazing </span>tools
                        </div>
                    </div>
                    <div className=" col-12 col-lg-9 flex justify-center mt-5 mt-lg-0">
                        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 p-0 g-0">
                            <div className="col flex justify-center">
                                <img src="/images/tech1.png" className=" img-fluid" alt="" />
                            </div>
                            <div className="col flex justify-center">
                                <img src="/images/tech2.png" className=" img-fluid" alt="" />
                            </div>
                            <div className="col flex justify-center">
                                <img src="/images/tech3.png" className=" img-fluid" alt="" />
                            </div>
                            <div className="col flex justify-center">
                                <img src="/images/tech4.png" className=" img-fluid" alt="" />
                            </div>
                            <div className="col flex justify-center">
                                <img src="/images/tech5.png" className=" img-fluid" alt="" />
                            </div>
                            <div className="col flex justify-center">
                                <img src="/images/tech6.png" className=" img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default Technologies;


