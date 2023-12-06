const Client = () => {
    return (
        <>
            <div className="text-center py-5 border-0">
                <div className=" uppercase font-semibold text-2xl mb-3 text-black/80"><span className=" me-3">T R U S T E D</span><span>B Y</span></div>
                <div className=" py-5 container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 gap-y-5">
                        <div className="col flex justify-center mb-5 mb-lg-0">
                            <img src="/images/client1.png" className=" img-fluid" alt="" />
                        </div>
                        <div className="col flex justify-center mb-5 mb-lg-0">
                            <img src="/images/client2.png" className=" img-fluid" alt="" />
                        </div>
                        <div className="col flex justify-center mb-5 mb-lg-0">
                            <img src="/images/client3.png" className=" img-fluid" alt="" />
                        </div>
                        <div className="col flex justify-center mb-5 mb-lg-0">
                            <img src="/images/client4.png" className=" img-fluid" alt="" />
                        </div>
                        <div className="col flex justify-center">
                            <img src="/images/client5.png" className=" img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Client;