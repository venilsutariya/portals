"use client";

import VisibilitySensor from 'react-visibility-sensor';
import { useEffect, useState } from "react";

const Project = () => {

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
        <div className="mx-auto" style={{ backgroundColor: '#000212' }}>
            {/* <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
                <div className={`row mb-5 gap-y-5 p-0 g-0 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <div className="col-12 col-lg px-2">
                        <img src="/images/project1.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-lg-5 flex justify-center px-2">
                        <img src="/images/project2.png" className=" img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-lg flex justify-end px-2">
                        <img src="/images/project3.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </VisibilitySensor>
            <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
                <div className={`row gap-y-5 p-0 g-0 ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}>
                    <div className="col-12 col-lg animate__animated animate__slideInUp px-2">
                        <img src="/images/project4.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-lg-5 justify-start px-2">
                        <img src="/images/project5.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-lg flex justify-end px-2">
                        <img src="/images/project6.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </VisibilitySensor> */}
            {/* @ts-ignore */}
            <div style={{height: "600px"}}> <iframe src="https://www.playbook.com/e/jenilthumar/aus1HghNQ5dihmRUpppUgrBs?theme=carousel&rows=1&slidesPerRow=3" title="Portals Work - Playbook.com" sandbox="allow-same-origin allow-scripts" frameborder="0" width="100%" height="100%" ></iframe> </div>
        </div>
    );
}

export default Project;