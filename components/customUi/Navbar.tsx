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

const NavbarComp = () => {
    return (
        <>
            <Navbar expand="lg" className=" relative px-4 px-lg-0 pt-4">
                <Navbar.Brand href="#home" className=' ms-0 ms-lg-5 text-white' style={{ fontSize: '27px' }}>
                  <img src="/images/Enterone.png" className=' h-[20px]' alt="" />    
                </Navbar.Brand>
                <>
                    <Sheet>
                        <SheetTrigger>
                            <div className='  text-white flex lg:hidden justify-center items-center gap-x-3'>
                                <span className=''><HiOutlineMenuAlt4 size={26} /></span>
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className=' mb-5 text-white'>Portals<span style={{ color: '#5E6AD2' }}>.</span></SheetTitle>
                                <SheetDescription>
                                    <div className=' mb-3'><Link href="#work" className=' text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>Work</SheetClose></Link></div>
                                    <div className=' mb-3'><Link href="#howitworks" className='text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>How it works</SheetClose></Link></div>
                                    <div className=' mb-3'><Link href="#usecases" className='text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>Scope of service</SheetClose></Link></div>
                                    <div className=' mb-3'><Link href="#plans" className='text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>Plans</SheetClose></Link></div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </>
                <Navbar.Collapse className=' me-0 me-lg-5'>
                    <Nav className="ms-auto" style={{ fontSize: '17px', color: '#fff' }}>
                        <Offcanvas2 />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavbarComp;