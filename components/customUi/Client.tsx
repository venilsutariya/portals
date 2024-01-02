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
                    <>
                        <div className='px-5 py-24' style={{ backgroundColor: '#737ED8', letterSpacing: '-0.02rem' }}>
                            <div className=' hidden lg:block text-4xl text-black' style={{ fontWeight: '400' }}>
                                Enterone is a creative partner for businesses <br /> and startups that need intutive <span className=' cusfont' style={{ fontWeight: '300' }}>websites,<br /> digital experiences,</span> and <span className=' cusfont' style={{ fontWeight: '300' }}>apps</span>.
                            </div>
                            <div className='block lg:hidden text-4xl text-black' style={{ fontWeight: '400' }}>
                                Enterone is a creative partner for businesses and startups that need intutive <span className=' cusfont' style={{ fontWeight: '300' }}>websites, digital experiences,</span> and <span className=' cusfont' style={{ fontWeight: '300' }}>apps</span>.
                            </div>
                            <div className=" lg:px-32">
                                <div className=" bg-gradient-to-r from-transparent via-black/50 to-transparent lg:p-[0.1px] xl:p-[0.3px] my-5"></div>
                            </div>
                            <div className=' row p-0 g-0 text-black' style={{fontWeight: '500'}}>
                                <div className='col-12 col-lg-6 mb-3 mb-lg-0'>
                                    What you can expect:
                                </div>
                                <div className='col-12 col-lg hidden lg:flex flex-col justify-center'>
                                    <div>
                                        We promise affordable design &<br /> development services so you can <br /> quickly move from idea to Product.
                                    </div>
                                    <div className=' mt-3'>
                                        We offer infinite/unlimited design &<br /> raw development services, not just <br /> no-code/low-code, for flat and low-<br />cost monthly fees.
                                    </div>
                                </div>
                                <div className='col-12 col-lg flex lg:hidden flex-col justify-center'>
                                    <div>
                                        We promise affordable design & development services so you can quickly move from idea to Product.
                                    </div>
                                    <div className=' mt-3'>
                                        We offer infinite/unlimited design & raw development services, not just no-code/low-code, for flat and low-cost monthly fees.
                                    </div>
                                </div>
                                <div className='col-12 col-lg flex items-end justify-end mt-5 mt-lg-0'>
                                    <div>(scroll)</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </VisibilitySensor>
        </>
    );
}

export default Client;