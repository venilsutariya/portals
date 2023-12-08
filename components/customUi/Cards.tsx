const Cards = () => {
    return (
        <div className=" container">
            <div className="row row-cols-1 row-cols-lg-3 p-0 g-0">
                <div className=" col px-5 flex justify-center">
                    <div className=" px-4 px-lg-5">
                        <div className=" mt-4">
                            <img src="/images/card1.png" alt="" />
                        </div>
                        <div className=" text-black text-xl my-3">Design</div>
                        <p className=" text-lg">We design websites, web apps, mobile apps, SaaS, Anything in UI & UX and social media assets too.</p>
                    </div>
                </div>
                <div className=" col px-5 flex justify-center">
                    <div className=" px-4">
                        <div>
                            <img src="/images/card2.png" alt="" />
                        </div>
                        <div className=" text-black text-xl my-3">Development</div>
                        <p className=" text-lg">We can develop what we can design, Websites, Apps, SaaS etc in Modern technologies; React, Next and Webflow.</p>
                    </div>
                </div>
                <div className=" col px-5">
                    <div className=" px-4 px-lg-3">
                        <div>
                            <img src="/images/card3.png" alt="" />
                        </div>
                        <div className=" text-black text-xl my-3">Blend</div>
                        <p className=" text-lg">We also blend both design and development and that&#39;s where real magic happens, <span style={{color: '#3613CC'}}>which means end-to-end product development.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;