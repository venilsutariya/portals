"use client";

import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgMenuRight } from "react-icons/cg";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const NavbarComp = () => {
    return (
        <>
            <Navbar expand="lg" className=" px-lg-5 px-4 pt-4">
                <Navbar.Brand href="#home" className=' ms-0 ms-lg-5 text-white' style={{ fontSize: '27px', fontWeight: '600' }}>Portals<span style={{ color: '#5E6AD2' }}>.</span></Navbar.Brand>
                <>
                        <Sheet>
                            <SheetTrigger><CgMenuRight className=" d-block d-lg-none" color={'#fff'} size={30} /></SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className=' mb-5 text-white'>Portals<span style={{ color: '#5E6AD2' }}>.</span></SheetTitle>
                                    <SheetDescription>
                                        <div className=' mb-3'><Link href="/work" className=' text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>Work</SheetClose></Link></div>
                                        <div className=' mb-3'><Link href="/howitworks" className='text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>How it works</SheetClose></Link></div>
                                        <div className=' mb-3'><Link href="/plans" className='text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>Scope of service</SheetClose></Link></div>
                                        <div className=' mb-3'><Link href="/usecases" className='text-sm text-gray-300 hover:text-white transition me-5 no-underline'><SheetClose>Plans</SheetClose></Link></div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                </>
                <Navbar.Collapse id="basic-navbar-nav" className=' me-0 me-lg-5'>
                    <Nav className="ms-auto" style={{ fontSize: '17px' }}>
                        <Link href="/work" className=' me-5 no-underline' style={{ color: '#B4BCD0' }}>Work</Link>
                        <Link href="/howitworks" className=' me-5 no-underline' style={{ color: '#B4BCD0' }}>How it works</Link>
                        <Link href="/plans" className=' me-5 no-underline' style={{ color: '#B4BCD0' }}>Scope of service</Link>
                        <Link href="/usecases" className=' no-underline' style={{ color: '#B4BCD0' }}>Plans</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavbarComp;