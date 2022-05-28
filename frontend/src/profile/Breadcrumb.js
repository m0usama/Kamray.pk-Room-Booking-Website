import React from "react";


const Breadcrumb =()=>{
    return(
      <div>
          <section className="breadcrumb_area">
              <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                   data-background=""></div>
              <div className="container">
                  <div className="page-cover text-center">
                      <h2 className="page-cover-tittle">Accomodation</h2>
                      <ol className="breadcrumb">
                          <li><a href="index.html">Home</a></li>
                          <li className="active">Accomodation</li>
                      </ol>
                  </div>
              </div>
          </section>

      </div>


    );

}

export default Breadcrumb;