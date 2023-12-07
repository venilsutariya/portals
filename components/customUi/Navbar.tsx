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
            <Navbar expand="lg" className=" px-5 ">
                <Navbar.Brand href="#home" className=' text-black font-bold ms-0 ms-lg-5' style={{ fontSize: '30px'}}>PORTALS.</Navbar.Brand>
                <>
                    <Sheet>
                        <SheetTrigger><CgMenuRight className=" d-block d-lg-none" size={30} /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className=' mb-5'>PORTALS.</SheetTitle>
                                <SheetDescription>
                                    <div className=' mb-3'><Link href="/work" className=' text-gray-700 hover:text-black transition me-5 no-underline'><SheetClose>Work</SheetClose></Link></div>
                                    <div className=' mb-3'><Link href="/howitworks" className=' text-gray-700 hover:text-black transition me-5 no-underline'><SheetClose>How it works</SheetClose></Link></div>
                                    <div className=' mb-3'><Link href="/plans" className=' text-gray-700 hover:text-black transition me-5 no-underline'><SheetClose>Plans</SheetClose></Link></div>
                                    <div className=' mb-3'><Link href="/usecases" className=' text-gray-700 hover:text-black transition me-5 no-underline'><SheetClose>Usecases</SheetClose></Link></div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </>
                <Navbar.Collapse id="basic-navbar-nav" className=' me-0 me-lg-5'>
                    <Nav className="ms-auto" style={{ fontSize: '19px' }}>
                        <Link href="/work" className='text-black me-5 no-underline'>Work</Link>
                        <Link href="/howitworks" className='text-black me-5 no-underline'>How it works</Link>
                        <Link href="/plans" className='text-black me-5 no-underline'>Plans</Link>
                        <Link href="/usecases" className='text-black no-underline'>Usecases</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavbarComp;