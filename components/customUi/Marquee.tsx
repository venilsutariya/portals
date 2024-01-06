import Marquee from 'react-fast-marquee';

const MarqueeComp = () => {

    let marqueeArr: any[number] = [];

    for (let i = 0; i <= 2; i++) {
        marqueeArr.push(i);
    }

    return (
        <>
            <div className="w-full text-white py-24">
                <div className="a-section">
                    <div className="a-section-marquee-box">
                        {
                            marqueeArr.map((index: number) => (
                                <div key={index} className=" flex items-center gap-x-[1.75rem] uppercase text-3xl md:text-5xl lg:text-7xl">
                                    <span className=" h-[50px] w-[50px] lg:h-auto lg:w-auto flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                                            <path d="M48 0L53.5106 34.6961L81.9411 14.0589L61.3039 42.4894L96 48L61.3039 53.5106L81.9411 81.9411L53.5106 61.3039L48 96L42.4894 61.3039L14.0589 81.9411L34.6961 53.5106L0 48L34.6961 42.4894L14.0589 14.0589L42.4894 34.6961L48 0Z" fill="url(#paint0_linear_637_1968)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_637_1968" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#9CA2E3" />
                                                    <stop offset="1" stop-color="#606BD2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className=" flex whitespace-nowrap">
                                        product development
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=" lg:px-32">
                    <div className=" bg-gradient-to-r from-transparent via-white/20 to-transparent p-[0.5px] my-5"></div>
                </div>
                <div className=' row w-full px-2 px-lg-0'>
                    <div className=' col-0 col-md-6'></div>
                    <div className=' col'>
                        <div className=' hidden lg:block text-xl'>
                            We build digital products the way they were meant <br /> to be built, by combining user-centered design and <br /> cutting-edge technology.
                        </div>
                        <div className=' block lg:hidden text-xl'>
                            We build digital products the way they were meant to be built, by combining user-centered design and cutting-edge technology.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full text-black bg-white py-24">
                <div className="a-section">
                    <div className="a-section-marquee-box">
                        {
                            marqueeArr.map((index: number) => (
                                <div key={index} className=" flex items-center gap-x-[1.75rem] uppercase text-3xl md:text-5xl lg:text-7xl">
                                    <span className=" h-[50px] w-[50px] lg:h-auto lg:w-auto flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                                            <path d="M48 0L53.5106 34.6961L81.9411 14.0589L61.3039 42.4894L96 48L61.3039 53.5106L81.9411 81.9411L53.5106 61.3039L48 96L42.4894 61.3039L14.0589 81.9411L34.6961 53.5106L0 48L34.6961 42.4894L14.0589 14.0589L42.4894 34.6961L48 0Z" fill="url(#paint0_linear_637_1968)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_637_1968" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#9CA2E3" />
                                                    <stop offset="1" stop-color="#606BD2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className=" flex whitespace-nowrap">
                                        sass development
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=" lg:px-32">
                    <div className=" bg-gradient-to-r from-transparent via-black/20 to-transparent p-[0.5px] my-5"></div>
                </div>
                <div className=' row w-full px-2 px-lg-0'>
                    <div className=' col-0 col-md-6'></div>
                    <div className=' col'>
                        <div className=' hidden lg:block text-xl'>
                        We build software that connects and scales with <br /> user-centered design and rich tech stack.
                        </div>
                        <div className=' block lg:hidden text-xl'>
                        We build software that connects and scales with user-centered design and rich tech stack.
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full text-white py-24">
                <div className="a-section">
                    <div className="a-section-marquee-box">
                        {
                            marqueeArr.map((index: number) => (
                                <div key={index} className=" flex items-center gap-x-[1.75rem] uppercase text-3xl md:text-5xl lg:text-7xl">
                                    <span className=" h-[50px] w-[50px] lg:h-auto lg:w-auto flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                                            <path d="M48 0L53.5106 34.6961L81.9411 14.0589L61.3039 42.4894L96 48L61.3039 53.5106L81.9411 81.9411L53.5106 61.3039L48 96L42.4894 61.3039L14.0589 81.9411L34.6961 53.5106L0 48L34.6961 42.4894L14.0589 14.0589L42.4894 34.6961L48 0Z" fill="url(#paint0_linear_637_1968)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_637_1968" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#9CA2E3" />
                                                    <stop offset="1" stop-color="#606BD2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className=" flex whitespace-nowrap">
                                        web development
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=" lg:px-32">
                    <div className=" bg-gradient-to-r from-transparent via-white/20 to-transparent p-[0.5px] my-5"></div>
                </div>
                <div className=' row w-full px-2 px-lg-0'>
                    <div className=' col-0 col-md-6'></div>
                    <div className=' col'>
                        <div className=' hidden lg:block text-xl'>
                            We create web sites and applications that are <br /> optimised for performance and visibility.
                        </div>
                        <div className=' block lg:hidden text-xl'>
                            We create web sites and applications that are optimised for performance and visibility.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MarqueeComp;