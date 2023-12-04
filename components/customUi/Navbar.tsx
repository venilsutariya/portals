"use client";

import Link from "next/link";

const NavbarComp = () => {
    return (
        <>
            <div className="">
                <div className="fixed w-full top-10 flex justify-center items-center">
                    <img src="/images/navbar-gradient.png" alt="" className="img-fluid backdrop-blur-lg rounded-full" />
                </div>
                <div className="">
                    <div className="fixed w-full top-11 flex justify-center items-center">
                        <div className=" flex py-2 rounded-full text-2xl">
                            <div className=" text-white font-semibold flex">
                                <div className="flex justify-center items-center"><span className="">PORTALS</span><span style={{ color: 'blue' }}>.</span></div>
                            </div>
                            <span className=" bg-gradient-to-b from-transparent via-violet-400 to-transparent w-[1px] mx-3"></span>
                            <div className=" flex justify-center items-center">
                                <Link href={'/'} className=" text-purple-300 me-3 text-lg no-underline">How  it Works</Link>
                                <Link href={'/'} className=" text-purple-300 me-3 text-lg no-underline">Work</Link>
                                <Link href={'/'} className=" text-purple-300 me-3 text-lg no-underline">Plans</Link>
                                <Link href={'/'} className=" text-purple-300 me-3 text-lg no-underline">FAQ</Link>
                            </div>
                            <span className=" bg-gradient-to-b from-transparent via-violet-400 to-transparent w-[1px] mx-3"></span>
                            <button className=" text-purple-300 text-lg border-1 border-violet-600/30 rounded-full px-3 py-1">Book a call</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarComp;