

const Booking = () =>{
    return(

            <div className="hotel_booking_area position">
                <div className="container">
                    <div className="hotel_booking_table">
                        <div className="col-md-3">
                            <h2>Book<br/> Your Room</h2>

                        </div>
                        <div className="col-md-9">
                            <div className="boking_table">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="book_tabel_item">
                                            <div className="form-group">
                                                <div className='input-group date' id='datetimepicker11'>
                                                    <input type='text' className="form-control"
                                                           placeholder="Arrival Date"/>
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className='input-group date' id='datetimepicker1'>
                                                    <input type='text' className="form-control"
                                                           placeholder="Departure Date"/>
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="book_tabel_item">
                                            <div className="input-group">
                                                <select className="wide">
                                                    <option data-display="Child">Number of Rooms</option>
                                                    <option value="1">Room 1</option>
                                                    <option value="2">Room 2</option>
                                                    <option value="3">Room 3</option>
                                                </select>
                                            </div>
                                            <a className="book_now_btn button_hover" href="/rooms">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Booking