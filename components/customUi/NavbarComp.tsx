"use client";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSquareFill } from "react-icons/bs";
import { CgMenuRight } from 'react-icons/cg';

const NavbarComp = () => {
  return (
    <div className="sticky-top backdrop-blur-lg bg-white/80 px-2 px-md-0">
      <Navbar expand="lg" className=" container">
        <Navbar.Brand href="/" className=" uppercase fs-3 font-extrabold">
          <span className=" inline-block">portals</span>
          <span className=" text-blue-700 inline-block">
            <BsSquareFill size={5} />
          </span>
        </Navbar.Brand>
        <span className=" d-block d-lg-none">
        <CgMenuRight size={26}/>
        </span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto w-full flex justify-end items-center ">
            <Link
              href="/services"
              className=" uppercase me-5 no-underline text-black "
            >
              Services
            </Link>
            <Link href="/work" className=" uppercase no-underline text-black">
              Work
            </Link>
          </Nav>
            <div className=" w-50 flex justify-end ">
            <Link
              href={"/contact"}
              className=" uppercase no-underline text-black rounded-full px-3 py-1 hover:bg-blue-600/5 transition-colors"
              style={{ border: "1px solid blue" }}
            >
              contact
            </Link>
            </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;