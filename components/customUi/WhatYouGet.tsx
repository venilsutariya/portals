"use client";

import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const WhatYouGet = () => {
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
            <div className={`pt-52 pb-44 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`} style={{ backgroundColor: '#000212' }}>
                <div className=" px-24">
                    <div className="row row-cols-1 row-cols-lg-2 p-0 g-0">
                        <div className=" col">
                            <div className="lg:text-4xl text-white w-full text-3xl flex justify-start">
                                What “exactly” <br />
                                you will get ?
                            </div>
                        </div>
                        <div className=" col flex justify-end">
                            <div className=" text-xl text-white lg:flex lg:flex-col">
                                <div className="">We will provide many things, but here</div>
                                <div className="">are some things at we excel most.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VisibilitySensor>
    );
}

export default WhatYouGet;