"use client";

import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Offcanvas2 from './Offcanvas';
import { IoCloseOutline } from 'react-icons/io5';

const NavbarComp = ({ setIsHoveringMain }: any) => {
    return (
        <>
            <Navbar style={{zIndex: '9'}} expand="lg" className=" relative px-4 px-lg-5 pt-4">
                <Navbar.Brand href="#home" className=' text-white' style={{ fontSize: '27px' }}>
                    <img src="/images/Enterone.png" className=' h-[20px]' alt="" />
                </Navbar.Brand>
                <Sheet>
                    <SheetTrigger className=' z-50 text-white d-lg-none flex justify-center items-center gap-x-2'>
                        menu <HiOutlineMenuAlt4 />
                    </SheetTrigger>
                    <SheetContent side={'top'} style={{ backgroundColor: 'rgba(0, 2, 18, 0.7)' }} className=" w-full border-0 h-100 backdrop-blur-2xl">
                        <SheetHeader>
                            <SheetTitle className=''>
                                <div className='text-white flex mt-[-20px] justify-between items-center'>
                                    <img src="/images/Enterone.png" className=' ps-2 h-[20px]' alt="" />
                                    <div className='font-light me-2 text-sm flex justify-center items-center gap-x-3'>
                                        <span className=''>menu</span>
                                        <SheetClose><span className='p-2 cursor-pointer'><IoCloseOutline size={24} /></span></SheetClose>
                                    </div>
                                </div>
                            </SheetTitle>
                            <SheetDescription className=' text-white'>
                                <div className=' row row-cols-1 row-cols-lg-2 ps-4 mt-5'>
                                    <div className=' col flex flex-col text-2xl lg:text-3xl gap-y-5' style={{ fontWeight: '500' }}>
                                        <Link className=' no-underline text-white offfont1' href={"#"}>
                                            <button className="btn-31">
                                                <span className="text-container">
                                                    <span className="text">Recent work</span>
                                                </span>
                                            </button>
                                        </Link>
                                        <Link className=' no-underline text-white offfont2' href={"#"}>
                                            <button className="btn-31">
                                                <span className="text-container">
                                                    <span className="text">How it works</span>
                                                </span>
                                            </button>
                                        </Link>
                                        <Link className=' no-underline text-white offfont3' href={"#"}>
                                            <button className="btn-31">
                                                <span className="text-container">
                                                    <span className="text">Scope of service</span>
                                                </span>
                                            </button>
                                        </Link>
                                        <Link className=' no-underline text-white offfont4' href={"#"}>
                                            <button className="btn-31">
                                                <span className="text-container">
                                                    <span className="text">Plans</span>
                                                </span>
                                            </button>
                                        </Link>
                                        <Link className=' no-underline text-white offfont5' href={"#"}>
                                            <button className="btn-31">
                                                <span className="text-container">
                                                    <span className="text">Career</span>
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                    <div className=' col flex justify-center lg:justify-end text-2xl lg:text-3xl pe-5 offfont4' style={{ fontWeight: '500' }}>
                                        <div className=' text-white mt-24 mt-lg-0'>
                                            <div className=' text-start text-lg-end'>Get in touch!</div>
                                            hello@enterone.agency
                                        </div>
                                    </div>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <Navbar.Collapse>
                    <Nav className="ms-auto" style={{ fontSize: '17px', color: '#fff' }}>
                        <Sheet>
                            <SheetTrigger className='flex justify-center items-center gap-x-2'>
                                menu <HiOutlineMenuAlt4 />
                            </SheetTrigger>
                            <SheetContent side={'top'} style={{ backgroundColor: 'rgba(0, 2, 18, 0.7)' }} className=" w-full border-0 h-100 backdrop-blur-2xl">
                                <SheetHeader>
                                    <SheetTitle className=''>
                                        <div className='text-white flex mt-[-20px] justify-between items-center'>
                                            <img src="/images/Enterone.png" className=' ps-4 h-[20px]' alt="" />
                                            <div className='font-light me-4 text-sm flex justify-center items-center gap-x-3'>
                                                <span className=''>menu</span>
                                                <SheetClose><span className='p-2 cursor-pointer'><IoCloseOutline size={24} /></span></SheetClose>
                                            </div>
                                        </div>
                                    </SheetTitle>
                                    <SheetDescription className=' text-white'>
                                        <div className=' row row-cols-1 row-cols-lg-2 ps-4 mt-5'>
                                            <div className=' col flex flex-col text-2xl lg:text-3xl gap-y-5' style={{ fontWeight: '500' }}>
                                                <Link className=' no-underline text-white offfont1' href={"#"}>
                                                    <button className="btn-31">
                                                        <span className="text-container">
                                                            <span className="text">Recent work</span>
                                                        </span>
                                                    </button>
                                                </Link>
                                                <Link className=' no-underline text-white offfont2' href={"#"}>
                                                    <button className="btn-31">
                                                        <span className="text-container">
                                                            <span className="text">How it works</span>
                                                        </span>
                                                    </button>
                                                </Link>
                                                <Link className=' no-underline text-white offfont3' href={"#"}>
                                                    <button className="btn-31">
                                                        <span className="text-container">
                                                            <span className="text">Scope of service</span>
                                                        </span>
                                                    </button>
                                                </Link>
                                                <Link className=' no-underline text-white offfont4' href={"#"}>
                                                    <button className="btn-31">
                                                        <span className="text-container">
                                                            <span className="text">Plans</span>
                                                        </span>
                                                    </button>
                                                </Link>
                                                <Link className=' no-underline text-white offfont5' href={"#"}>
                                                    <button className="btn-31">
                                                        <span className="text-container">
                                                            <span className="text">Career</span>
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className=' col flex justify-center lg:justify-end text-2xl lg:text-3xl pe-5 offfont4' style={{ fontWeight: '500' }}>
                                                <div className=' text-white mt-24 mt-lg-0'>
                                                    <div className=' text-start text-lg-end'>Get in touch!</div>
                                                    hello@enterone.agency
                                                </div>
                                            </div>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavbarComp;