import logo from "../navbar/logo.png";
import Booking from "../booking/booking";
import {Link} from "react-router-dom";

const Banner = () =>{
    return(
        <section className="banner_area">
            <div className="booking_table d_flex align-items-center">
                <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0"
                     data-background=""></div>
                <div className="container">
                    <div className="banner_content text-center">
                        <h6>Away from monotonous life</h6>
                        <h2>Relax Your Mind</h2>
                        <p>Maza na aya to paisay wapis!</p>
                        <a href="/rooms" className="btn theme_btn button_hover">Get Started</a>
                    </div>
                    <div className="mt-10 row">
                        <div className="col-lg-10">
                        <input type="text" name="first_name" placeholder="Search" onFocus="this.placeholder = ''"
                               onBlur="this.placeholder = 'Search'" required="" className="single-input"/>
                        </div>
                        <div className="col-lg-2">
                            <Link to="/search"><a href="#" className="btn theme_btn button_hover">Search</a></Link>
                        </div>


                    </div>
                </div>
            </div>
            <Booking></Booking>
        </section>
    )
}

export default Banner