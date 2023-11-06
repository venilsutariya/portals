import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs';

const HeaderImage = () => {
  return (
    <div className=" container my-5 pt-5">
      <div className=" row gap-3 px-3">
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img src="/images/img1.png" alt="" className="img-fluid h-100 w-100"/>
          <div className=" h-100 w-100 transition group-hover:bg-black/20 rounded-2xl absolute"></div>
        </div>
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img src="/images/img2.png" alt="" className=" img-fluid h-100 w-100" />
          <div className=" h-100 w-100 transition group-hover:bg-black/20  rounded-2xl absolute"></div>
        </div>
        <div className="col-12 mt-3 transition group mt-lg-0 col-lg flex relative h-100 w-100 p-0 justify-center">
          <img src="/images/img3.png" alt="" className=" img-fluid h-100 w-100" />
          <div className=" h-100 w-100 transition group-hover:bg-black/20  rounded-2xl absolute"></div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12 col-xl-8 transition group relative p-0">
          <img src="/images/img4.png" alt="" className=" img-fluid h-100 w-100" />
          <div className=" h-100 w-100 transition group-hover:bg-black/20 rounded-2xl absolute top-0"></div>
        </div>
        <div className="col">
          <div className=" uppercase text-6xl mt-3 mt-xl-0">
            <div className=" mb-3">our</div>
            <div className=" mb-2">gallary</div>
            <div className=" mb-4">of work</div>
          </div>
          <div className=" my-5 transition group relative">
            <img src="/images/img5.png" alt="" className="h-100 w-100"/>
            <div className=" h-100 w-100 transition group-hover:bg-black/20  rounded-2xl absolute top-0"></div>
          </div>
          <div className=" flex justify-between items-center mt-5">
            <Link
              href={"/contact"}
              className=" uppercase flex justify-center items-center hover:bg-opacity-90 no-underline text-white bg-blue-700 rounded-full px-3 py-2 border-0 transition-colors"
              style={{ border: "1px solid blue" }}
            >
              <span>contact</span><span className=" ms-2"><BsArrowRight size={22}/></span>
            </Link>
            <Link
              href={"/contact"}
              className=" uppercase flex justify-center items-center no-underline text-black rounded-full px-3 py-2 hover:bg-blue-700/10 transition"
              style={{ border: "1px solid blue" }}
            >
              <span className=" font-semibold">view more</span><span className="ms-2"><BsArrowRight size={22}/></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImage;
