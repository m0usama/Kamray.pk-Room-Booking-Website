

const Filter = () =>{
    return(
        <>
            <br/>

        <div className="row">


            <div className="switch-wrap d-flex justify-content-between ">
                <h4>Apply Filter</h4>
                <div className="primary-switch" >
                    <input type="checkbox" id="default-switch"/>
                    <label htmlFor="default-switch"></label>
                </div>
            </div>
            <br/>



            <div className="single-element-widget">
                <h3 className="mb-30 title_color">Select City</h3>
                <div className="default-select" id="default-select">
                    <div className="nice-select" tabIndex="0"><span className="current">City</span>
                        <ul className="list">
                            <li data-value="1" className="option selected focus">Muree</li>
                            <li data-value="1" className="option">Peshawar</li>
                            <li data-value="1" className="option">Lahore</li>
                            <li data-value="1" className="option">Islamabad</li>
                            <li data-value="1" className="option">Karachi</li>
                        </ul>
                    </div>
                </div>
            </div>



            <h3 className="mb-30 title_color">Select Room</h3>
            <div className="switch-wrap d-flex justify-content-between">
                <h5>Special Rooms</h5>
                <div className="primary-checkbox">
                    <input type="checkbox" id="default-checkbox1" />
                        <label htmlFor="default-checkbox1"></label>

                </div>
            </div>


            <div className="switch-wrap d-flex justify-content-between">
                <h5>Normal Rooms</h5>
                <div className="primary-checkbox">
                    <input type="checkbox" id="default-checkbox2"/>
                    <label htmlFor="default-checkbox2"></label>
                </div>
            </div>

            <h3 className="mb-30 title_color">Select Facilities</h3>
            <div className="switch-wrap d-flex justify-content-between">
                <h5>Single</h5>
                <div className="primary-checkbox">
                    <input type="checkbox" id="default-checkbox3"/>
                    <label htmlFor="default-checkbox3"></label>
                </div>
            </div>

            <div className="switch-wrap d-flex justify-content-between">
                <h5>Double</h5>
                <div className="primary-checkbox">
                    <input type="checkbox" id="default-checkbox4"/>
                    <label htmlFor="default-checkbox4"></label>
                </div>
            </div>

            <h3 className="mb-30 title_color">Price Range</h3>


            <div className="row">
                <div className="col-lg-5">

                    <input type="text" name="first_name" placeholder="MIN" onFocus="this.placeholder = ''"
                           onBlur="this.placeholder = 'MAX'" required="" className="single-input"/>
                    <br/>
                </div>

                <div className="col-lg-2">

                    <h6>to</h6>
                    <br/>
                </div>

                <div className="col-lg-5">

                    <input type="text" name="first_name" placeholder="MAX" onFocus="this.placeholder = ''"
                           onBlur="this.placeholder = 'MAX'" required="" className="single-input"/>
                    <br/>
                </div>


            </div>

        </div>
        </>
    )
}

export default Filter