import logo from './logo.png';
import Modellogin from "./modellogin";
import React, {useState} from "react";
import Modelsignup from "./modelsignup";
import {Link} from "react-router-dom";
const Navbar = () => {

    return (
        <div>

            <header className="header_area shadow-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        {/*Brand and toggle get grouped for better mobile display*/}
                        <a className="navbar-brand logo_h" href="index.html"><img src={logo} alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/*Collect the nav links, forms, and other content for toggling*/}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <Link to="/home" ><li className="nav-item active"><a className="nav-link" href="">Home</a></li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/about"><li className="nav-item"><a className="nav-link" href="">Contact</a></li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/rooms"><li className="nav-item"><a className="nav-link" href="">Rooms</a> </li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/vote"><li className="nav-item"><a className="nav-link" href="">Review</a> </li></Link>                                                                               &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/Locations"><li className="nav-item"><a className="nav-link"  >Locations</a></li></Link>
                                &nbsp;
                                &nbsp;
                                <Link to="/profile"><li className="nav-item"><a className="nav-link" href="contact.html">Profile</a></li></Link>
                                &nbsp;&nbsp;
                                <Link to="/cart"><li className="nav-item"><a className="nav-link" href="contact.html">Cart</a></li></Link>                                                                                &nbsp;&nbsp;
                                &nbsp;
                                &nbsp;
                                <Link to="/Login"><li className="nav-item"><a className="nav-link"  >LogIn</a></li></Link>
                                &nbsp;
                                &nbsp;
                                <Link to="/Signup"><li className="nav-item"><a className="nav-link"  >SignUp</a></li></Link>



                            </ul>
                        </div>
                    </nav>
                </div>
            </header>


        </div>
    )
}
export default Navbar
