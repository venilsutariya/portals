const Footer = () => {
    return (
        <div className="inline-flex  justify-center px-[5.34375rem] py-[6.1875rem] flex-shrink-0  w-full footergrd">
            <div className="">
                <div className="text-black px-5 leading-trim tracking-tight font-thin text-capitalize text-6xl lg:text-9xl">
                    <img src="/images/Footer.png" className="lg:h-[100px]" alt="" />
                </div>
                <div className="row row-cols-1 row-cols-lg-3 px-0 g-0 inline-flex items-start py-24 font-semibold">
                    <div className="col inline-flex flex-col items-start gap-9 px-5 mb-5 mb-lg-0">
                        <div className=" text-black text-xl">
                            <div>Menu</div>
                            <div className="lg:w-[17.3125rem] xl:w-[21.3125rem] h-[0.125rem] bg-black flex-shrink-0">
                            </div>
                            <div>Work</div>
                            <div>How it works</div>
                            <div>Scope of service</div>
                            <div>Plans</div>
                            <div>Career</div>
                        </div>
                    </div>
                    <div className="col inline-flex flex-col items-start gap-9 px-5 mb-5 mb-lg-0">
                        <div className="text-black text-xl">
                            <div>Social</div>
                            <div className="lg:w-[17.3125rem] xl:w-[21.3125rem] h-[0.125rem] bg-black flex-shrink-0">
                            </div>
                            <div>Instagram</div>
                            <div>Dribble</div>
                            <div>LinkedIn</div>
                        </div>
                    </div>
                    <div className="col inline-flex flex-col items-start gap-9 px-5 mb-5 mb-lg-0">
                        <div className="text-black text-xl">
                            <div>Contact</div>
                            <div className="lg:w-[17.3125rem] xl:w-[21.3125rem] h-[0.125rem] bg-black flex-shrink-0">
                            </div>
                            <div>hello@portals.io</div>
                        </div>
                    </div>
                </div>
                <div className=" lg:flex px-5 lg:justify-between text-black text-xl">
                    <div className=" flex justify-start">Built in Surat, Gujarat.</div>
                    <div className=" flex lg:justify-end">&copy;2024</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;