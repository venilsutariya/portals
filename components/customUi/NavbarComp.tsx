"use client";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSquareFill } from "react-icons/bs";
import { CgMenuRight } from 'react-icons/cg';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose } from 'react-icons/ai';

const NavbarComp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title className="uppercase fs-3">
            <span className=" inline-block boldfont">portals</span>
            <span className=" text-blue-700 inline-block font-extrabold">
              <BsSquareFill size={5} />
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <span onClick={handleClose} className=" absolute top-4 right-4"><AiOutlineClose size={25} /></span>
        <Offcanvas.Body>
          <Nav className="w-full flex flex-col headcontent z-40">
            <Link
              onClick={handleClose}
              href="/services"
              className="pointer uppercase no-underline text-slate-700 transition hover:text-black my-3"
            >
              Services
            </Link>
            <Link onClick={handleClose} href="/wo rk" className="pointer uppercase no-underline text-slate-700 transition hover:text-black my-3">
              Work
            </Link>
          </Nav>
          <hr />
          <div className=" w-50 flex justify-start ">
            <Link
              onClick={handleClose}
              href={"/contact"}
              className="my-3 pointer uppercase no-underline text-black rounded-full px-3 py-1 hover:bg-blue-600/5 transition-colors"
              style={{ border: "1px solid blue" }}
            >
              contact
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>


      <div className="sticky-top backdrop-blur-lg bg-white/80 px-2 px-md-0">
        <Navbar expand="lg" className=" container">
          <Navbar.Brand href="/" className=" uppercase fs-3 font-extrabold pointer">
            <span className=" inline-block boldfont">portals</span>
            <span className=" text-blue-700 inline-block">
              <BsSquareFill size={5} />
            </span>
          </Navbar.Brand>
          <span className=" d-block d-lg-none" onClick={handleShow}>
            <CgMenuRight size={26} />
          </span>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbaritem ms-auto w-full flex justify-end items-center ">
              <Link
                href="/services"
                className="pointer uppercase me-5 no-underline text-black "
              >
                Services
              </Link>
              <Link href="/work" className="pointer uppercase no-underline text-black">
                Work
              </Link>
            </Nav>
            <div className=" w-50 flex justify-end ">
              <Link
                href={"/contact"}
                className="pointer uppercase no-underline text-black rounded-full px-3 py-1 hover:bg-blue-600/5 transition-colors"
                style={{ border: "1px solid blue" }}
              >
                contact
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComp;