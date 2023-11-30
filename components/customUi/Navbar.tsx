"use client";

import Link from "next/link";

const NavbarComp = () => {
    return (
        <>
            <div className="fixed w-full top-10 flex justify-center items-center">
                <div className=" flex p-2 px-4 rounded-full text-2xl" style={{ border: '1px solid #240046', backgroundColor: '#10001B' }}>
                    <div className=" text-white font-semibold flex">
                        <div className="flex justify-center items-center"><span>PORTALS</span><span style={{ color: 'blue' }}>.</span></div>
                    </div>
                    <span className=" bg-gradient-to-b from-transparent via-violet-400 to-transparent w-[1px] mx-4"></span>
                    <div className=" flex justify-center items-center">
                        <Link href={'/'} className=" text-violet-300 me-3 text-lg no-underline">How  it Works</Link>
                        <Link href={'/'} className=" text-violet-300 me-3 text-lg no-underline">Work</Link>
                        <Link href={'/'} className=" text-violet-300 me-3 text-lg no-underline">Plans</Link>
                        <Link href={'/'} className=" text-violet-300 me-3 text-lg no-underline">FAQ</Link>
                    </div>
                    <span className=" bg-gradient-to-b from-transparent via-violet-400 to-transparent w-[1px] mx-4"></span>
                    <button className=" text-violet-300 text-lg border-1 border-violet-600/30 rounded-full px-3 py-1">Book a call</button>
                </div>
            </div>
        </>
    );
}

export default NavbarComp;