"use client";

import VisibilitySensor from "react-visibility-sensor";
import { useRef, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Project = ({ setIsHovering }: any) => {
  const innerDivRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFour, setShowFour] = useState(false);

  const onVisibilityChange = (visible: boolean) => {
    if (visible) {
      // Smooth scroll to position 500
      if (innerDivRef.current) {
        setTimeout(() => {
          // @ts-ignore
          innerDivRef.current.scrollTo({
            left: 700,
            behavior: "smooth",
          });
        }, 1000);
      }
    }
  };

  return (
    <>

      {/* modal */}
      <Modal className=" backdrop-blur-lg" size="xl" show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Body className=" p-0 relative">
          <div className=" fixed right-3 top-3" style={{color: '#606BD2'}} onClick={() => setShow(false)}>
            <AiOutlineCloseCircle size={40} />
          </div>
          <img src="/images/fullproject1.jpg" alt="" />
        </Modal.Body>
      </Modal>


      <Modal className=" backdrop-blur-lg" size="xl" show={showSecond} onHide={() => setShowSecond(false)} animation={false}>
        <Modal.Body className=" p-0 relative">
          <div className=" fixed right-3 top-3" style={{color: '#606BD2'}} onClick={() => setShowSecond(false)}>
            <AiOutlineCloseCircle size={40} />
          </div>
          <img src="/images/fullproject2.png" alt="" />
        </Modal.Body>
      </Modal>


      <Modal className=" backdrop-blur-lg" size="xl" show={showThird} onHide={() => setShowThird(false)} animation={false}>
        <Modal.Body className=" p-0 relative">
          <div className="  fixed right-3 top-3" style={{color: '#606BD2'}} onClick={() => setShowThird(false)}>
            <AiOutlineCloseCircle size={40} />
          </div>
          <img src="/images/frame 41.png" alt="" />
          <img src="/images/Frame 42.png" alt="" />
          <img src="/images/Frame 43.png" alt="" />
          <img src="/images/Frame 44.png" alt="" />
          <img src="/images/Frame 45.png" alt="" />
          <img src="/images/Frame 46.png" alt="" />
          <img src="/images/Frame 47.png" alt="" />
          <img src="/images/Frame 48.png" alt="" />
          <img src="/images/Frame 49.png" alt="" />
          <img src="/images/Frame 50.png" alt="" />
          <img src="/images/Frame 51.png" alt="" />
          <img src="/images/Frame 52.png" alt="" />
          <img src="/images/Frame 53.png" alt="" />
          <img src="/images/Frame 54.png" alt="" />
          <img src="/images/Frame 55.png" alt="" />
          <img src="/images/Frame 56.png" alt="" />
        </Modal.Body>
      </Modal>




      <div ref={innerDivRef} className="scrollbar-hide lg:px-0" style={{ backgroundColor: "#000212", overflowY: "hidden", overflowX: "auto" }}>
        <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
          <div>
            <div className="lg:px-32 my-24">
              <div className=" bg-gradient-to-r from-transparent via-blue-200/30 to-transparent p-[0.5px]  my-10 relative text-center">
              </div>
            </div>
            <div id="work" className="pt-3 flex p-0 g-0 justify-between mb-5 pb-5 items-center">
              <div className=" text-white ps-5 text-5xl">Featured projects</div>
            </div>
            <div className=" flex justify-start">
              <img onMouseLeave={() => setIsHovering(false)} onMouseEnter={() => setIsHovering(true)} src="/images/project1.png" className=" w-[90%] cursorimg img-fluid cursor-pointer" alt="" />
            </div>
            <div className=" lg:flex justify-between items-center mb-3 mt-5"></div>
            <div className=" mt-5 flex justify-end">
              <img onMouseLeave={() => setIsHovering(false)} onMouseOver={() => setIsHovering(true)} onClick={() => setShowSecond(true)} src="/images/project2.png" className="w-[90%] cursor-pointer cursorimg img-fluid" alt="" />
            </div>
            <div className=" lg:flex justify-between items-center mb-3 mt-5"></div>
            <div className=" mt-5 flex justify-start">
              <img onMouseLeave={() => setIsHovering(false)} onMouseOver={() => setIsHovering(true)} onClick={() => setShow(true)} src="/images/project3.png" className="w-[90%] cursor-pointer cursorimg img-fluid" alt="" />
            </div>
            <div className=" lg:flex justify-between items-center mb-3 mt-5"></div>
            <div className=" mt-5 flex justify-end">
              <img onMouseLeave={() => setIsHovering(false)} onMouseOver={() => setIsHovering(true)} onClick={() => setShowThird(true)} src="/images/project4.png" className="w-[90%] cursor-pointer cursorimg img-fluid" alt="" />
            </div>
            <div className=" lg:flex justify-between items-center mb-3 mt-5"></div>
          </div>
        </VisibilitySensor>
      </div>
    </>
  );
};

export default Project;
