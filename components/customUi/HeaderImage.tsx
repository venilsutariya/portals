import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const HeaderImage = () => {
  return (
    <div className=" container my-5 pt-5">
      <div className=" row gap-3 p-3">
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img
            src="/images/img1.png"
            alt=""
            className="img-fluid h-100 w-100"
          />
          <div style={{transition: 'all 0.5s ease-out'}} className="hidden xl:block h-100 w-100 group-hover:bg-black/20  rounded-2xl absolute"></div>
        </div>
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img
            src="/images/img2.png"
            alt=""
            className=" img-fluid h-100 w-100"
          />
          <div style={{transition: 'all 0.5s ease-out'}} className="hidden xl:block h-100 w-100 group-hover:bg-black/20  rounded-2xl absolute"></div>
        </div>
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img
            src="/images/img3.png"
            alt=""
            className=" img-fluid h-100 w-100"
          />
          <div style={{transition: 'all 0.5s ease-out'}} className="hidden xl:block h-100 w-100 group-hover:bg-black/20  rounded-2xl absolute"></div>
        </div>
      </div>
      <div className="row p-1 my-4 gap-3">
        <div className="col-12 col-xl-8 transition group relative p-0">
          <img
            src="/images/newimg.png"
            alt=""
            className=" img-fluid h-100 w-100"
          />
          <div style={{transition: 'all 0.5s ease-out', borderRadius: '33px'}} className="hidden xl:block h-100 w-100 group-hover:bg-black/20 absolute top-0 mediaimage"></div>
        </div>
        <div className="col">
          <div className="row gap-3 p-4 p-lg-0">
            <div className=" col-12 mb-3 relative group p-0">
              <img
                src="/images/newimg2.png"
                alt=""
                className=" img-fluid h-100 w-100"
              />
              <div style={{transition: 'all 0.5s ease-out'}} className=" hidden xl:block h-100 w-100 rounded-2xl group-hover:bg-black/20 absolute top-0"></div>
            </div>
            <div className=" col-12 relative group p-0">
              <img
                src="/images/blockchain.png"
                alt=""
                className=" img-fluid h-100 w-100"
              />
              <div style={{transition: 'all 0.5s ease-out'}} className=" hidden xl:block h-100 w-100 rounded-2xl group-hover:bg-black/20 absolute top-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
