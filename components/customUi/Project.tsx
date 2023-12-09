const Project = () => {
    return ( 
        <div className=" pb-5" style={{backgroundColor: '#000212'}}>
            <div className="row row-cols-1 row-cols-lg-3 gap-y-5 p-0 g-0">
                <div className="col">
                    <img src="/images/project1.png" className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-lg-5 flex justify-center">
                    <img src="/images/project2.png" className=" img-fluid" alt=""/>
                </div>
                <div className="col flex justify-end">
                    <img src="/images/project3.png" className="img-fluid" alt="" />
                </div>
            </div>
            <div className=" row row-cols-1 row-cols-lg-3 gap-y-5 p-0 g-0 mt-4">
                <div className="col">
                    <img src="/images/project4.png" className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-lg-5 justify-start">
                    <img src="/images/project5.png" className="img-fluid" alt=""/>
                </div>
                <div className="col flex justify-end">
                    <img src="/images/project6.png" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Project;