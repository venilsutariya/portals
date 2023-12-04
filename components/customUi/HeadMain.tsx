"use client";

import Client from "./Client";

const HeadMain = () => {

  return (
    <>
      <div className="h-[940px] headermain">
        <div className=" bgmain">
          <div className="h-full flex flex-col justify-center text-center">
            <div className=" absolute top-64 flex justify-center w-full flex-col">
              <div className=" xl:text-6xl text-4xl md:text-5xl font-bold text-white flex flex-col gap-y-4">
                <span>The Only <span className="" style={{ color: '#C77DFF' }}>Design & Development </span></span> <span className="lg:text-5xl text-2xl">service you will ever need</span>
              </div>
              <p className=" text-white mt-3 font-bold text-lg px-4 md:p-0">Design & development plans for creators who want a no-BS edge.</p>
              <div className="mt-5">
                <button className=" text-white font-semibold text-2xl border-1 border-violet-600/30 rounded-full px-4 py-2 bg-violet-600/10">View plans</button>
              </div>
            </div>
            <div className=" absolute bottom-0 w-full">
              <Client />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadMain;