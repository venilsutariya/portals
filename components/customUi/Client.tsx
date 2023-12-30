"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Client = () => {
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
                {(isVisible: boolean) => (
                    <div className="text-center border-0" style={{ backgroundColor: '#000212' }}>
                        <div className={` py-5 container ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                            <div className=' lg:px-24'>
                                <div className="row p-0 g-0 row-cols-1 row-cols-md-2 row-cols-lg-5 gap-x-0 gap-y-5">
                                    <div className="col px-5 flex justify-center mb-5 mb-lg-0">
                                        <img src="/images/client1.png" className=" img-fluid object-contain" alt="" />
                                    </div>
                                    <div className="col px-5 flex justify-center mb-5 mb-lg-0">
                                        <img src="/images/client2.png" className=" img-fluid object-contain" alt="" />
                                    </div>
                                    <div className="col px-5 flex justify-center mb-5 mb-lg-0">
                                        <img src="/images/client3.png" className=" img-fluid object-contain" alt="" />
                                    </div>
                                    <div className="col px-5 flex justify-center mb-5 mb-lg-0">
                                        <img src="/images/client4.png" className=" object-contain img-fluid" alt="" />
                                    </div>
                                    <div className="col px-5 flex justify-center">
                                        <img src="/images/client5.png" className=" img-fluid object-contain" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </VisibilitySensor>
        </>
    );
}

export default Client;