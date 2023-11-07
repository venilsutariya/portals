const Header = () => {
  return (
    <>
      <div className=" container mb-5">
        <div className=" row py-5 my-5">
          <div className=" col-0 col-md-5 col-lg-6"></div>
          <div className=" col">
            <div className=" uppercase font-semibold text-1xl inline-block md:ms-16">
              <div>We design and DEVELOP</div>
              <div className=" text-blue-600">products and experiences</div>
              <div>for businesses AND startups.</div>
            </div>
          </div>
        </div>
        <div className="headcontent uppercase text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
          <div>design</div>
          <div className=" flex lg:justify-between">
            <span className=" text-black/50">&</span>
            <span>development</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
